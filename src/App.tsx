import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Volume2,
  Plus,
  HelpCircle,
  ChevronRight,
  RotateCcw,
  Check,
  Zap,
} from "lucide-react";
import {
  FlashcardData,
  StudyMode,
  Rating,
  CardType,
  Politeness,
} from "./types";
import { INITIAL_CARDS } from "./data";
import { updateSRS, sortCardsByDue } from "./srs";

const STORAGE_KEY = "hanja_zen_cards";

export default function App() {
  const [cards, setCards] = useState<FlashcardData[]>([]);
  const [mode, setMode] = useState<StudyMode>("KO_TO_EN");
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCard, setNewCard] = useState({ ko: "", en: "" });

  // Load cards from local storage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setCards(JSON.parse(saved));
      } catch (e) {
        setCards(INITIAL_CARDS);
      }
    } else {
      setCards(INITIAL_CARDS);
    }
  }, []);

  // Save cards to local storage
  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    }
  }, [cards]);

  const dueCards = useMemo(() => sortCardsByDue(cards), [cards]);
  const currentCard = dueCards[0];

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
    },
    [currentCard],
  );

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCard.ko || !newCard.en) return;

    const card: FlashcardData = {
      id: crypto.randomUUID(),
      category: "User Added",
      front_ko: newCard.ko,
      front_en: newCard.en,
      romanization: "", // Could be generated via LLM or API
      meta: {
        type: CardType.Noun,
        politeness: Politeness.None,
      },
      example: {
        ko: "",
        en: "",
      },
      interval: 0,
      ease: 2.5,
      dueDate: Date.now(),
    };

    setCards((prev) => [card, ...prev]);
    setNewCard({ ko: "", en: "" });
    setIsAddingCard(false);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAddingCard) return;

      if (e.code === "Space") {
        e.preventDefault();
        handleFlip();
      } else if (e.key === "1" && isFlipped) {
        handleRate(Rating.Forgot);
      } else if (e.key === "2" && isFlipped) {
        handleRate(Rating.Hard);
      } else if (e.key === "3" && isFlipped) {
        handleRate(Rating.Easy);
      } else if (e.key.toLowerCase() === "n") {
        setIsAddingCard(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFlip, handleRate, isFlipped, isAddingCard]);

  const isKoPrompt = useMemo(() => {
    if (mode === "KO_TO_EN") return true;
    if (mode === "EN_TO_KO") return false;
    return Math.random() > 0.5; // For Mixed, this is a bit naive but works for display
  }, [mode, currentCard?.id]);

  if (!currentCard) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-600">All caught up!</h2>
          <button
            onClick={() => setCards(INITIAL_CARDS)}
            className="mt-4 text-sm text-blue-500 hover:underline"
          >
            Reset to initial data
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-6 select-none">
      {/* Mode Toggle */}
      <div className="absolute top-8 flex gap-6 text-[11px] font-medium tracking-widest text-gray-500 uppercase">
        {(["KO_TO_EN", "EN_TO_KO", "MIXED"] as StudyMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`transition-colors hover:text-gray-800 ${mode === m ? "text-gray-900 border-b border-gray-900" : ""}`}
          >
            {m.replace(/_/g, " ")}
          </button>
        ))}
      </div>

      {/* Main Stage */}
      <div className="relative w-full max-w-lg aspect-4/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id + (isFlipped ? "back" : "front")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleFlip}
            className={`
              w-full h-full bg-white rounded-3xl card-shadow p-12 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden
              ${!isFlipped ? (isKoPrompt ? "bg-blue-50/30" : "bg-green-50/30") : ""}
            `}
          >
            {/* Hanja in corner */}
            {isFlipped && currentCard.hanja && (
              <div className="absolute top-8 right-8 font-serif text-2xl text-gray-400">
                {currentCard.hanja}
              </div>
            )}

            {/* Category Tag */}
            <div className="absolute top-8 left-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
              {currentCard.category}
            </div>

            {/* Front Content */}
            {!isFlipped ? (
              <div className="text-center space-y-8">
                <h1
                  className={`text-6xl font-bold tracking-tight ${isKoPrompt ? "font-sans" : "font-sans"}`}
                >
                  {isKoPrompt ? currentCard.front_ko : currentCard.front_en}
                </h1>

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
              /* Back Content */
              <div className="text-center space-y-6 w-full animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold text-gray-900">
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
      </div>

      {/* Interaction Bar */}
      <div className="mt-12 h-16 flex items-center justify-center">
        {!isFlipped ? (
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
            Press Space to Flip
          </p>
        ) : (
          <div className="flex gap-12 animate-fade-in">
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
        )}
      </div>

      {/* Add Card Row */}
      <div className="absolute bottom-8 w-full max-w-lg px-6">
        {!isAddingCard ? (
          <button
            onClick={() => setIsAddingCard(true)}
            className="w-full py-4 border-t border-gray-100 flex items-center justify-between text-gray-500 hover:text-gray-700 transition-colors group"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Add new word
            </span>
            <Plus
              size={16}
              className="group-hover:rotate-90 transition-transform"
            />
          </button>
        ) : (
          <form
            onSubmit={handleAddCard}
            className="w-full py-4 border-t border-gray-100 flex items-center gap-4 animate-fade-in"
          >
            <input
              autoFocus
              placeholder="Korean"
              value={newCard.ko}
              onChange={(e) =>
                setNewCard((prev) => ({ ...prev, ko: e.target.value }))
              }
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder:text-gray-400"
            />
            <ChevronRight size={14} className="text-gray-400" />
            <input
              placeholder="English"
              value={newCard.en}
              onChange={(e) =>
                setNewCard((prev) => ({ ...prev, en: e.target.value }))
              }
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="text-blue-600 text-[10px] font-bold uppercase tracking-widest"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsAddingCard(false)}
              className="text-gray-500 text-[10px] font-bold uppercase tracking-widest"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
