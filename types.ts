
export type Language = 'en' | 'it';

export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    assessment: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  debtSection: {
    title: string;
    description: string;
  };
  assessment: {
    title: string;
    intro: string;
    start: string;
    step: string;
    next: string;
    back: string;
    finish: string;
  };
}

export interface Question {
  id: number;
  category: 'clarity' | 'team' | 'bio' | 'system';
  text: {
    en: string;
    it: string;
  };
  options: {
    label: { en: string; it: string };
    points: number;
  }[];
}

export interface QuizResults {
  totalScore: number;
  categoryScores: {
    clarity: number;
    team: number;
    bio: number;
    system: number;
  };
  userData: {
    email: string;
    company: string;
    role: string;
  };
}
