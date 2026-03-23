export enum CardType {
  Noun = 'Noun',
  Verb = 'Verb',
  Adjective = 'Adjective',
  Marker = 'Marker',
  Phrase = 'Phrase'
}

export enum Politeness {
  Formal = 'Formal',
  Polite = 'Polite',
  Informal = 'Informal',
  None = 'None'
}

export interface CardExample {
  ko: string;
  en: string;
}

export interface CardMeta {
  type: CardType;
  politeness: Politeness;
  note?: string;
}

export interface FlashcardData {
  id: string;
  category: string;
  front_ko: string;
  front_en: string;
  romanization: string;
  hanja?: string;
  meta: CardMeta;
  example: CardExample;
  // SRS fields
  interval: number; // in days
  ease: number; // ease factor
  dueDate: number; // timestamp
  lastReviewed?: number; // timestamp
}

export type StudyMode = 'KO_TO_EN' | 'EN_TO_KO' | 'MIXED';

export enum Rating {
  Forgot = 1,
  Hard = 2,
  Easy = 3
}
