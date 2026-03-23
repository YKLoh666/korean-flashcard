import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Volume2,
  HelpCircle,
  RotateCcw,
  Check,
  Zap,
  Menu,
  X,
  Shuffle,
} from "lucide-react";
import { FlashcardData, StudyMode, Rating, Politeness } from "./types";
import { INITIAL_CARDS } from "./data";
import { updateSRS, sortCardsByDue } from "./srs";

const STORAGE_KEY = "hanja_zen_cards";
const STORAGE_VERSION_KEY = "hanja_zen_cards_version";
const CURRENT_STORAGE_VERSION = __APP_VERSION__;

function createSeededRandom(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleCards<T>(array: T[], seed: number): T[] {
  const random = createSeededRandom(seed);

  return [...array]
    .map((item) => ({ item, sortKey: random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ item }) => item);
}

function normalizeAnswer(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export default function App() {
  const [cards, setCards] = useState<FlashcardData[]>([]);
  const [mode, setMode] = useState<StudyMode>("KO_TO_EN");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [answerFeedback, setAnswerFeedback] = useState<{
    isCorrect: boolean;
    expected: string;
    submitted: string;
  } | null>(null);
  const [shuffleEnabled, setShuffleEnabled] = useState(false);
  const [shuffledCardIds, setShuffledCardIds] = useState<string[]>([]);

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
    return sortCardsByDue(cards);
  }, [cards]);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(cards.map((card) => card.category))).sort(),
    ],
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
    return dueCards.filter((card) =>
      selectedCategories.includes(card.category),
    );
  }, [dueCards, selectedCategories]);

  // Generate a random shuffle of the current filtered cards
  const generateShuffledQueue = useCallback(
    (cardsToShuffle: FlashcardData[]) => {
      const shuffled = [...cardsToShuffle];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.map((c) => c.id);
    },
    [],
  );

  // Initialize shuffle queue from current filteredDueCards
  const initializeShuffle = useCallback(() => {
    if (shuffleEnabled) {
      setShuffledCardIds(generateShuffledQueue(filteredDueCards));
    } else {
      setShuffledCardIds([]);
    }
  }, [shuffleEnabled, filteredDueCards, generateShuffledQueue]);

  // When shuffle is toggled on/off, initialize or clear queue
  useEffect(() => {
    initializeShuffle();
  }, [initializeShuffle]);

  // When categories change and shuffle is on, refresh the queue
  useEffect(() => {
    if (shuffleEnabled) {
      initializeShuffle();
    }
  }, [selectedCategories, shuffleEnabled, initializeShuffle]);

  const currentCard = useMemo(() => {
    if (shuffleEnabled) {
      const id = shuffledCardIds[0];
      return cards.find((c) => c.id === id) || null;
    } else {
      return filteredDueCards[0] || null;
    }
  }, [shuffleEnabled, shuffledCardIds, cards, filteredDueCards]);

  const isListeningMode = mode === "LISTENING";

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
    setShowHint(false);
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

      if (shuffleEnabled) {
        // Remove the current card from the shuffled queue
        setShuffledCardIds((prev) => prev.slice(1));
      }

      setIsFlipped(false);
      setShowHint(false);
      setTypedAnswer("");
      setAnswerFeedback(null);
    },
    [currentCard, shuffleEnabled],
  );

  const isKoPrompt = useMemo(() => {
    if (mode === "LISTENING") return true;
    if (mode === "KO_TO_EN") return true;
    if (mode === "EN_TO_KO") return false;
    return Math.random() > 0.5; // For Mixed, this is a bit naive but works for display
  }, [mode, currentCard?.id]);

  const expectedAnswer = useMemo(
    () =>
      currentCard
        ? isListeningMode
          ? currentCard.front_ko
          : isKoPrompt
            ? currentCard.front_en
            : currentCard.front_ko
        : "",
    [currentCard, isKoPrompt, isListeningMode],
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
        if (isListeningMode && currentCard && !isFlipped) {
          speak(currentCard.front_ko);
        } else {
          handleFlip();
        }
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
  }, [currentCard, handleFlip, handleRate, isFlipped, isListeningMode, speak]);

  useEffect(() => {
    if (!currentCard || !isListeningMode || isFlipped) return;
    const timer = window.setTimeout(() => {
      speak(currentCard.front_ko);
    }, 120);
    return () => window.clearTimeout(timer);
  }, [currentCard, isFlipped, isListeningMode, speak]);

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

  const toggleShuffle = useCallback(() => {
    setShuffleEnabled((prev) => !prev);
  }, []);

  const reshuffle = useCallback(() => {
    if (shuffleEnabled) {
      initializeShuffle();
    }
  }, [shuffleEnabled, initializeShuffle]);

  if (cards.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-600">
            Loading cards...
          </h2>
        </div>
      </div>
    );
  }

  const noCardsMessage =
    shuffleEnabled && shuffledCardIds.length === 0
      ? "No cards left in shuffle queue. Reshuffle or turn off shuffle."
      : filteredDueCards.length === 0
        ? "No cards in this category"
        : null;

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
              category === "All"
                ? cards.length
                : (categoryCounts.get(category) ?? 0);

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

      <div className="w-full relative flex-1 flex flex-col items-center justify-center p-4 md:p-6">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute left-4 top-4 z-10 rounded-full border border-gray-200 bg-white p-2 text-gray-600 shadow-sm md:hidden"
          aria-label="Open categories"
        >
          <Menu size={18} />
        </button>

        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-3 text-[8px] font-medium tracking-widest text-gray-500 uppercase md:top-8 md:text-[11px]">
          {(["KO_TO_EN", "EN_TO_KO", "MIXED", "LISTENING"] as StudyMode[]).map(
            (m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`transition-colors hover:text-gray-800 ${
                  mode === m ? "text-gray-900 border-b border-gray-900" : ""
                }`}
              >
                {m.replace(/_/g, " ")}
              </button>
            ),
          )}
        </div>

        <div className="absolute top-5 right-4 flex items-center gap-2 z-10">
          <button
            onClick={toggleShuffle}
            className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              shuffleEnabled
                ? "border-purple-300 bg-purple-50 text-purple-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
            title={shuffleEnabled ? "Shuffle mode on" : "Shuffle mode off"}
          >
            <Shuffle size={14} />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
          {shuffleEnabled && (
            <button
              onClick={reshuffle}
              className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600 transition-colors hover:border-gray-300"
              title="Reshuffle deck"
            >
              <RotateCcw size={14} />
              <span className="hidden sm:inline">Reshuffle</span>
            </button>
          )}
        </div>

        <div className="relative mt-14 w-full max-w-lg aspect-4/3">
          {currentCard ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={
                  currentCard.id +
                  (isFlipped ? "back" : "front") +
                  shuffleEnabled
                }
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
                    {isListeningMode ? (
                      <div className="space-y-3">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                          Korean Listening
                        </h1>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                          Listen and type Korean
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(currentCard.front_ko);
                          }}
                          className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700 hover:bg-blue-100 transition-colors"
                        >
                          <Volume2 size={14} /> Play Korean
                        </button>
                      </div>
                    ) : (
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-sans">
                        {isKoPrompt
                          ? currentCard.front_ko
                          : currentCard.front_en}
                      </h1>
                    )}

                    <form
                      onSubmit={handleSubmitTypedAnswer}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 justify-center w-full"
                    >
                      <input
                        value={typedAnswer}
                        onChange={(e) => setTypedAnswer(e.target.value)}
                        placeholder={
                          isListeningMode
                            ? "Type Korean answer"
                            : isKoPrompt
                              ? "Type English answer"
                              : "Type Korean answer"
                        }
                        name="typedAnswer"
                        className="h-11 px-4 rounded-xl border border-gray-200 bg-white/80 text-sm outline-none focus:border-blue-300 flex-3"
                        autoComplete="off"
                        autoCorrect="off"
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
                          {isListeningMode
                            ? `Romanization: ${currentCard.romanization}`
                            : currentCard.example.ko.replace(
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
                      {isListeningMode ? (
                        <>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {currentCard.front_ko}
                          </h2>
                          <p className="text-base md:text-lg text-gray-600 font-medium">
                            {currentCard.front_en}
                          </p>
                        </>
                      ) : (
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {isKoPrompt
                            ? currentCard.front_en
                            : currentCard.front_ko}
                        </h2>
                      )}
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
                        <p className="text-sm text-gray-700">
                          {currentCard.example.ko}
                        </p>
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
                {noCardsMessage || "No cards in this category"}
              </p>
              {shuffleEnabled && shuffledCardIds.length === 0 && (
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={reshuffle}
                    className="rounded-full bg-purple-50 px-4 py-1.5 text-xs font-semibold text-purple-700 hover:bg-purple-100"
                  >
                    Reshuffle
                  </button>
                  <button
                    onClick={toggleShuffle}
                    className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-200"
                  >
                    Turn off shuffle
                  </button>
                </div>
              )}
              {!shuffleEnabled && filteredDueCards.length === 0 && (
                <button
                  onClick={() => selectCategory("All")}
                  className="mt-3 text-sm text-blue-600 hover:underline"
                >
                  Show all categories
                </button>
              )}
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
