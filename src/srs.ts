import { FlashcardData, Rating } from './types';

/**
 * Simple SM-2 inspired SRS algorithm
 */
export function updateSRS(card: FlashcardData, rating: Rating): FlashcardData {
  let { interval, ease, dueDate } = card;
  const now = Date.now();

  if (rating === Rating.Forgot) {
    interval = 0;
    // Keep ease the same or decrease slightly
    ease = Math.max(1.3, ease - 0.2);
  } else if (rating === Rating.Hard) {
    if (interval === 0) {
      interval = 1;
    } else {
      interval = Math.ceil(interval * 1.2);
    }
    ease = Math.max(1.3, ease - 0.15);
  } else if (rating === Rating.Easy) {
    if (interval === 0) {
      interval = 4;
    } else {
      interval = Math.ceil(interval * ease);
    }
    ease = ease + 0.1;
  }

  // Calculate new due date (interval is in days)
  const nextDueDate = now + interval * 24 * 60 * 60 * 1000;

  return {
    ...card,
    interval,
    ease,
    dueDate: nextDueDate,
    lastReviewed: now
  };
}

export function sortCardsByDue(cards: FlashcardData[]): FlashcardData[] {
  return [...cards].sort((a, b) => a.dueDate - b.dueDate);
}
