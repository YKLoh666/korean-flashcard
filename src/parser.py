import csv
import json
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent
INPUT_MD_FILE = BASE_DIR / "korean.md"
INPUT_CSV_FILE = BASE_DIR / "sentences.csv"
OUTPUT_FILE = BASE_DIR / "data.ts"


def slugify(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def detect_type(english):
    if any(word in english.lower() for word in ["thank", "hello", "sorry", "please", "i am"]):
        return "CardType.Phrase"
    return "CardType.Noun"


def detect_politeness(english):
    text = english.lower()
    if "formal" in text:
        return "Politeness.Formal"
    if "informal" in text:
        return "Politeness.Informal"
    if any(x in text for x in ["please", "sorry", "hello"]):
        return "Politeness.Polite"
    return "Politeness.None"


def has_hangul(text):
    return bool(re.search(r"[가-힣]", text))


def split_h3_sections(text):
    matches = list(re.finditer(r"^###\s+(.+)$", text, flags=re.MULTILINE))
    sections = []
    for i, match in enumerate(matches):
        title = match.group(1).strip()
        start = match.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = text[start:end].strip()
        sections.append((title, body))
    return sections


def split_main_sections(md_text):
    vocab_match = re.search(r"^##\s+Vocabulary\s*$", md_text, flags=re.MULTILINE)
    grammar_match = re.search(r"^##\s+Grammar\s*$", md_text, flags=re.MULTILINE)

    vocab_text = ""
    grammar_text = ""

    if vocab_match:
        vocab_start = vocab_match.end()
        vocab_end = grammar_match.start() if grammar_match else len(md_text)
        vocab_text = md_text[vocab_start:vocab_end]

    if grammar_match:
        grammar_text = md_text[grammar_match.end():]

    return vocab_text, grammar_text


def load_sentences(csv_path):
    sentence_map = {}
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) < 3:
                continue
            word = row[0].strip()
            ko_sentence = row[1].strip()
            en_sentence = row[2].strip()
            sentence_map[word] = {"ko": ko_sentence, "en": en_sentence}
    return sentence_map


def parse_vocabulary(vocab_text):
    cards = []
    for category, body in split_h3_sections(vocab_text):
        lines = body.strip().splitlines()
        table_lines = [line for line in lines if "|" in line]

        if len(table_lines) < 3:
            continue

        rows = table_lines[2:]

        for i, row in enumerate(rows):
            cols = [col.strip() for col in row.split("|")[1:-1]]
            if len(cols) < 3:
                continue

            english = cols[0]
            korean = cols[1]
            romanization = cols[2]
            hanja = cols[3] if len(cols) > 3 and cols[3] != "-" else None
            card_id = f"{slugify(category)}-{i + 1}"

            cards.append(
                {
                    "id": card_id,
                    "category": category,
                    "front_ko": korean,
                    "front_en": english,
                    "romanization": romanization,
                    "hanja": hanja,
                    "type": detect_type(english),
                    "politeness": detect_politeness(english),
                }
            )

    return cards


def parse_ko_en_pair(text):
    match = re.match(r"^(.+?)\s*\((.+)\)\s*$", text.strip())
    if not match:
        return None

    ko = match.group(1).strip()
    en = match.group(2).strip()
    if not has_hangul(ko):
        return None
    return ko, en


def parse_grammar(grammar_text):
    cards = []

    for category, body in split_h3_sections(grammar_text):
        examples = []
        lines = [line.rstrip() for line in body.splitlines() if line.strip()]

        # Parse bullet examples like:
        # - 책을 읽어요. (I read a book.)
        for line in lines:
            stripped = line.strip()
            if not stripped.startswith("-"):
                continue
            candidate = stripped[1:].strip()
            parsed = parse_ko_en_pair(candidate)
            if parsed:
                examples.append(parsed)

        # Parse examples in grammar tables (usually the last column).
        table_rows = [line for line in lines if "|" in line and not re.match(r"^\|?\s*-{2,}", line)]
        for row in table_rows:
            cols = [col.strip() for col in row.split("|")[1:-1]]
            if len(cols) < 2:
                continue
            parsed = parse_ko_en_pair(cols[-1])
            if parsed:
                examples.append(parsed)

        seen = set()
        deduped_examples = []
        for ko, en in examples:
            key = (ko, en)
            if key in seen:
                continue
            seen.add(key)
            deduped_examples.append((ko, en))

        for i, (ko, en) in enumerate(deduped_examples, start=1):
            cards.append(
                {
                    "id": f"grammar-{slugify(category)}-{i}",
                    "category": f"Grammar: {category}",
                    "front_ko": ko,
                    "front_en": en,
                    "romanization": "-",
                    "hanja": None,
                    "type": "CardType.Marker" if "marker" in category.lower() else "CardType.Phrase",
                    "politeness": "Politeness.None",
                    "example": {"ko": ko, "en": en},
                }
            )

    return cards


def ts_string(value):
    return json.dumps(value, ensure_ascii=False)


def generate_ts(cards, sentence_map):
    lines = []

    lines.append("import { FlashcardData, CardType, Politeness } from './types';\n")
    lines.append("const now = Date.now();\n")
    lines.append("export const INITIAL_CARDS: FlashcardData[] = [\n")

    for c in cards:
        example = c.get("example") or sentence_map.get(
            c["front_ko"],
            {"ko": f"{c['front_ko']} 예문", "en": f"Example with {c['front_en']}"},
        )

        lines.append("  {")
        lines.append(f"    id: {ts_string(c['id'])},")
        lines.append(f"    category: {ts_string(c['category'])},")
        lines.append(f"    front_ko: {ts_string(c['front_ko'])},")
        lines.append(f"    front_en: {ts_string(c['front_en'])},")
        lines.append(f"    romanization: {ts_string(c['romanization'])},")

        if c["hanja"]:
            lines.append(f"    hanja: {ts_string(c['hanja'])},")

        lines.append("    meta: {")
        lines.append(f"      type: {c['type']},")
        lines.append(f"      politeness: {c['politeness']}")
        lines.append("    },")

        lines.append("    example: {")
        lines.append(f"      ko: {ts_string(example['ko'])},")
        lines.append(f"      en: {ts_string(example['en'])}")
        lines.append("    },")

        lines.append("    interval: 0,")
        lines.append("    ease: 2.5,")
        lines.append("    dueDate: now")
        lines.append("  },\n")

    lines.append("];")

    return "\n".join(lines)


def parse_markdown(md_text):
    vocab_text, _ = split_main_sections(md_text)
    return parse_vocabulary(vocab_text)


def main():
    md_text = INPUT_MD_FILE.read_text(encoding="utf-8")
    sentence_map = load_sentences(INPUT_CSV_FILE)

    cards = parse_markdown(md_text)
    ts_output = generate_ts(cards, sentence_map)

    OUTPUT_FILE.write_text(ts_output, encoding="utf-8")

    print(f"Generated {len(cards)} cards with sentences -> {OUTPUT_FILE.name}")


if __name__ == "__main__":
    main()