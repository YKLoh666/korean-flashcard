import re
import time
import csv
from pathlib import Path

INPUT_MD_FILE = "korean.md"
INPUT_CSV_FILE = "sentences.csv"
OUTPUT_FILE = "data.ts"

now = int(time.time() * 1000)


def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')


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


def load_sentences(csv_path):
    sentence_map = {}
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) < 3:
                continue
            word = row[0].strip()
            ko_sentence = row[1].strip()
            en_sentence = row[2].strip()
            sentence_map[word] = {
                "ko": ko_sentence,
                "en": en_sentence
            }
    return sentence_map


def parse_markdown(md_text):
    sections = re.split(r'### ', md_text)
    cards = []

    for section in sections:
        lines = section.strip().splitlines()
        if len(lines) < 3:
            continue

        category = lines[0].strip()
        table_lines = [l for l in lines if "|" in l]

        if len(table_lines) < 3:
            continue

        rows = table_lines[2:]

        for i, row in enumerate(rows):
            cols = [c.strip() for c in row.split("|")[1:-1]]

            if len(cols) < 3:
                continue

            english = cols[0]
            korean = cols[1]
            romanization = cols[2]
            hanja = cols[3] if len(cols) > 3 and cols[3] != "-" else None

            card_id = f"{slugify(category)}-{i+1}"

            cards.append({
                "id": card_id,
                "category": category,
                "front_ko": korean,
                "front_en": english,
                "romanization": romanization,
                "hanja": hanja,
                "type": detect_type(english),
                "politeness": detect_politeness(english)
            })

    return cards


def generate_ts(cards, sentence_map):
    lines = []

    lines.append("import { FlashcardData, CardType, Politeness } from './types';\n")
    lines.append("const now = Date.now();\n")
    lines.append("export const INITIAL_CARDS: FlashcardData[] = [\n")

    for c in cards:
        example = sentence_map.get(c["front_ko"], {
            "ko": f"{c['front_ko']} 예문",
            "en": f"Example with {c['front_en']}"
        })

        lines.append("  {")
        lines.append(f"    id: \"{c["id"]}\",")
        lines.append(f"    category: \"{c["category"]}\",")
        lines.append(f"    front_ko: \"{c["front_ko"]}\",")
        lines.append(f"    front_en: \"{c["front_en"]}\",")
        lines.append(f"    romanization: \"{c["romanization"]}\",")

        if c["hanja"]:
            lines.append(f"    hanja: \"{c["hanja"]}\",")

        lines.append("    meta: {")
        lines.append(f"      type: {c["type"]},")
        lines.append(f"      politeness: {c["politeness"]}")
        lines.append("    },")

        lines.append("    example: {")
        lines.append(f"      ko: \"{example["ko"]}\",")
        lines.append(f"      en: \"{example["en"]}\"")
        lines.append("    },")

        lines.append("    interval: 0,")
        lines.append("    ease: 2.5,")
        lines.append("    dueDate: now")
        lines.append("  },\n")

    lines.append("];")

    return "\n".join(lines)


def main():
    md_text = Path(INPUT_MD_FILE).read_text(encoding="utf-8")
    sentence_map = load_sentences(INPUT_CSV_FILE)

    cards = parse_markdown(md_text)
    ts_output = generate_ts(cards, sentence_map)

    Path(OUTPUT_FILE).write_text(ts_output, encoding="utf-8")

    print(f"✅ Generated {len(cards)} cards with sentences → {OUTPUT_FILE}")


if __name__ == "__main__":
    main()