import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Volume2,
  HelpCircle,
  RotateCcw,
  Check,
  Zap,
  Shuffle,
  Menu,
  X,
} from "lucide-react";
import { FlashcardData, StudyMode, Rating, Politeness } from "./types";
import { INITIAL_CARDS } from "./data";
import { updateSRS, sortCardsByDue } from "./srs";

const STORAGE_KEY = "hanja_zen_cards";
const STORAGE_VERSION_KEY = "hanja_zen_cards_version";
const CURRENT_STORAGE_VERSION = __APP_VERSION__;

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleCards<T>(input: T[], seed: number): T[] {
  const list = [...input];
  const random = mulberry32(seed || 1);

  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
}

function normalizeAnswer(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export default function App() {
  const [cards, setCards] = useState<FlashcardData[]>([]);
  const [mode, setMode] = useState<StudyMode>("KO_TO_EN");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(() => Date.now());
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [answerFeedback, setAnswerFeedback] = useState<{
    isCorrect: boolean;
    expected: string;
    submitted: string;
  } | null>(null);

  // Load cards from local storage
  useEffect(() => {
    const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);

    if (storedVersion !== CURRENT_STORAGE_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION);
      setCards(INITIAL_CARDS);
      return;
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setCards(JSON.parse(saved));
      } catch (e) {
        setCards(INITIAL_CARDS);
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION);
      }
    } else {
      setCards(INITIAL_CARDS);
      localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION);
    }
  }, []);

  // Save cards to local storage
  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    }
  }, [cards]);

  const dueCards = useMemo(() => {
    const sorted = sortCardsByDue(cards);
    if (!isShuffled) return sorted;
    return shuffleCards(sorted, shuffleSeed);
  }, [cards, isShuffled, shuffleSeed]);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(cards.map((card) => card.category))).sort()],
    [cards],
  );

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    cards.forEach((card) => {
      counts.set(card.category, (counts.get(card.category) ?? 0) + 1);
    });
    return counts;
  }, [cards]);

  const filteredDueCards = useMemo(() => {
    if (selectedCategories.includes("All")) return dueCards;
    return dueCards.filter((card) => selectedCategories.includes(card.category));
  }, [dueCards, selectedCategories]);

  const currentCard = filteredDueCards[0];

  const speak = useCallback((text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ko-KR";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleFlip = useCallback(() => {
    if (!currentCard) return;
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    if (nextFlipped) {
      setAnswerFeedback(null);
      speak(currentCard.front_ko);
    }
  }, [isFlipped, currentCard, speak]);

  const handleRate = useCallback(
    (rating: Rating) => {
      if (!currentCard) return;

      setCards((prev) => {
        const updated = prev.map((c) =>
          c.id === currentCard.id ? updateSRS(c, rating) : c,
        );
        return [...updated];
      });

      setIsFlipped(false);
      setShowHint(false);
      setTypedAnswer("");
      setAnswerFeedback(null);
    },
    [currentCard],
  );

  const isKoPrompt = useMemo(() => {
    if (mode === "KO_TO_EN") return true;
    if (mode === "EN_TO_KO") return false;
    return Math.random() > 0.5; // For Mixed, this is a bit naive but works for display
  }, [mode, currentCard?.id]);

  const expectedAnswer = useMemo(
    () =>
      currentCard
        ? isKoPrompt
          ? currentCard.front_en
          : currentCard.front_ko
        : "",
    [currentCard, isKoPrompt],
  );

  const handleSubmitTypedAnswer = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!currentCard) return;

      const submitted = typedAnswer.trim();
      if (!submitted) return;

      const isCorrect =
        normalizeAnswer(submitted) === normalizeAnswer(expectedAnswer);
      setAnswerFeedback({
        isCorrect,
        expected: expectedAnswer,
        submitted,
      });
      setShowHint(false);
      setIsFlipped(true);
      speak(currentCard.front_ko);
    },
    [currentCard, expectedAnswer, speak, typedAnswer],
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTypingInField =
        !!target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (e.code === "Space") {
        if (isTypingInField) return;
        e.preventDefault();
        handleFlip();
      } else if (e.key === "1" && isFlipped) {
        handleRate(Rating.Forgot);
      } else if (e.key === "2" && isFlipped) {
        handleRate(Rating.Hard);
      } else if (e.key === "3" && isFlipped) {
        handleRate(Rating.Easy);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFlip, handleRate, isFlipped]);

  useEffect(() => {
    setTypedAnswer("");
    setAnswerFeedback(null);
  }, [currentCard?.id, isKoPrompt]);

  useEffect(() => {
    setSelectedCategories((prev) => {
      if (prev.includes("All")) return ["All"];
      const valid = prev.filter((category) => categories.includes(category));
      return valid.length > 0 ? valid : ["All"];
    });
  }, [categories]);

  const selectCategory = useCallback((category: string) => {
    setSelectedCategories((prev) => {
      if (category === "All") {
        return ["All"];
      }

      const withoutAll = prev.filter((item) => item !== "All");
      if (withoutAll.includes(category)) {
        const next = withoutAll.filter((item) => item !== category);
        return next.length > 0 ? next : ["All"];
      }

      return [...withoutAll, category];
    });

    setIsFlipped(false);
    setShowHint(false);
    setTypedAnswer("");
    setAnswerFeedback(null);
  }, []);

  if (cards.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-600">Loading cards...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#F8F9FA] flex overflow-hidden select-none">
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.button
            type="button"
            aria-label="Close category sidebar"
            className="fixed inset-0 z-20 bg-black/25 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed left-0 top-0 z-30 h-full w-72 border-r border-gray-200 bg-white px-5 py-6 transition-transform duration-300 md:static md:z-auto md:w-80 md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
            Categories
          </h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100 md:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-2 text-xs text-gray-400">Filter cards by topic</p>

        <div className="mt-4 space-y-2 overflow-y-auto max-h-[calc(100vh-120px)] pr-1">
          {categories.map((category) => {
            const isActive = selectedCategories.includes(category);
            const count =
              category === "All" ? cards.length : (categoryCounts.get(category) ?? 0);

            return (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className={`w-full rounded-xl border px-3 py-2 text-left transition-all ${
                  isActive
                    ? "border-blue-200 bg-blue-50 text-blue-800"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    {category}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="relative flex-1 flex flex-col items-center justify-center p-4 md:p-6">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute left-4 top-4 z-10 rounded-full border border-gray-200 bg-white p-2 text-gray-600 shadow-sm md:hidden"
          aria-label="Open categories"
        >
          <Menu size={18} />
        </button>

        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-3 text-[8px] font-medium tracking-widest text-gray-500 uppercase md:top-8 md:text-[11px]">
          {(["KO_TO_EN", "EN_TO_KO", "MIXED"] as StudyMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`transition-colors hover:text-gray-800 ${mode === m ? "text-gray-900 border-b border-gray-900" : ""}`}
            >
              {m.replace(/_/g, " ")}
            </button>
          ))}

          <button
            onClick={() => {
              setIsShuffled(true);
              setShuffleSeed(Date.now());
            }}
            title="Shuffle cards"
            className={`ml-1 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all ${
              isShuffled
                ? "border-blue-200 bg-blue-50 text-blue-700"
                : "border-gray-200 bg-white/70 text-gray-500 hover:text-gray-700"
            }`}
          >
            <Shuffle size={12} className={isShuffled ? "animate-pulse" : ""} />
            <span>{isShuffled ? "Reshuffle" : "Shuffle"}</span>
          </button>

          {isShuffled && (
            <button
              onClick={() => setIsShuffled(false)}
              className="text-[10px] text-gray-500 hover:text-gray-700 transition-colors"
            >
              Due order
            </button>
          )}
        </div>

        <div className="relative mt-14 w-full max-w-lg aspect-4/3">
          {currentCard ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id + (isFlipped ? "back" : "front")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={handleFlip}
                className={`
                  w-full h-full bg-white rounded-3xl card-shadow p-6 md:p-8 flex flex-col items-center justify-between cursor-pointer relative overflow-hidden
                  ${!isFlipped ? (isKoPrompt ? "bg-blue-50/30" : "bg-green-50/30") : ""}
                `}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                    {currentCard.category}
                  </div>

                  {isFlipped && currentCard.hanja && (
                    <div className="font-serif text-2xl text-gray-400">
                      {currentCard.hanja}
                    </div>
                  )}
                </div>

                {!isFlipped ? (
                  <div className="text-center space-y-8 w-full max-w-md">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-sans">
                      {isKoPrompt ? currentCard.front_ko : currentCard.front_en}
                    </h1>

                    <form
                      onSubmit={handleSubmitTypedAnswer}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 justify-center w-full"
                    >
                      <input
                        value={typedAnswer}
                        onChange={(e) => setTypedAnswer(e.target.value)}
                        placeholder={
                          isKoPrompt ? "Type English answer" : "Type Korean answer"
                        }
                        name="typedAnswer"
                        className="h-11 px-4 rounded-xl border border-gray-200 bg-white/80 text-sm outline-none focus:border-blue-300 flex-3"
                      />
                      <button
                        type="submit"
                        className="h-11 px-4 rounded-xl bg-gray-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-gray-800 transition-colors shrink-0 flex-1"
                      >
                        Check
                      </button>
                    </form>

                    <div className="h-12 flex items-center justify-center">
                      {!showHint ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowHint(true);
                          }}
                          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-xs uppercase tracking-widest font-semibold"
                        >
                          <HelpCircle size={14} /> Hint
                        </button>
                      ) : (
                        <p className="text-sm text-gray-600 italic animate-fade-in">
                          {currentCard.example.ko.replace(
                            currentCard.front_ko,
                            "[ ___ ]",
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-2 w-full animate-fade-in">
                    <div className="space-y-2">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {isKoPrompt ? currentCard.front_en : currentCard.front_ko}
                      </h2>
                      <p className="text-sm font-mono text-gray-600 tracking-wider">
                        {currentCard.romanization}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-100">
                        {currentCard.meta.type}
                      </span>
                      {currentCard.meta.politeness !== Politeness.None && (
                        <span className="px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-100">
                          {currentCard.meta.politeness}
                        </span>
                      )}
                    </div>

                    {answerFeedback && (
                      <div
                        className={`mx-auto max-w-sm rounded-2xl border px-4 py-3 text-left ${
                          answerFeedback.isCorrect
                            ? "border-green-200 bg-green-50 text-green-800"
                            : "border-red-200 bg-red-50 text-red-800"
                        }`}
                      >
                        <p className="text-[11px] uppercase tracking-widest font-bold">
                          {answerFeedback.isCorrect ? "Correct" : "Wrong"}
                        </p>
                        <p className="mt-1 text-sm">
                          Your answer:{" "}
                          <span className="font-semibold">
                            {answerFeedback.submitted}
                          </span>
                        </p>
                      </div>
                    )}

                    {currentCard.example.ko && (
                      <div className="pt-6 border-t border-gray-50 space-y-2">
                        <p className="text-sm text-gray-700">{currentCard.example.ko}</p>
                        <p className="text-xs text-gray-500 italic">
                          {currentCard.example.en}
                        </p>
                      </div>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(currentCard.front_ko);
                      }}
                      className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="h-full rounded-3xl border border-dashed border-gray-300 bg-white/60 flex flex-col items-center justify-center px-6 text-center card-shadow">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                No cards in this category
              </p>
              <button
                onClick={() => selectCategory("All")}
                className="mt-3 text-sm text-blue-600 hover:underline"
              >
                Show all categories
              </button>
            </div>
          )}
        </div>

        <div className="mt-10 md:mt-12 h-16 flex items-center justify-center">
          {!isFlipped ? (
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold text-center">
              Click card, press Space, or type an answer + Enter
            </p>
          ) : (
            <div>
              <div className="mb-4 text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                How well did you recall?
              </div>
              <div className="flex gap-8 md:gap-12 animate-fade-in">
                <button
                  onClick={() => handleRate(Rating.Forgot)}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full border border-red-100 flex items-center justify-center text-red-400 group-hover:bg-red-50 group-hover:text-red-500 transition-all">
                    <RotateCcw size={18} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-red-500">
                    Forgot (1)
                  </span>
                </button>
                <button
                  onClick={() => handleRate(Rating.Hard)}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full border border-yellow-100 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-50 group-hover:text-yellow-500 transition-all">
                    <Zap size={18} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-yellow-500">
                    Hard (2)
                  </span>
                </button>
                <button
                  onClick={() => handleRate(Rating.Easy)}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full border border-green-100 flex items-center justify-center text-green-400 group-hover:bg-green-50 group-hover:text-green-500 transition-all">
                    <Check size={18} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-green-500">
                    Easy (3)
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
