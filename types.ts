
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
    pillars: {
      energy: { title: string; desc: string };
      connection: { title: string; desc: string };
      presence: { title: string; desc: string };
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  assessment: {
    title: string;
    intro: string;
    start: string;
    step: string;
    next: string;
    back: string;
    finish: string;
    auditType: string;
    questionsCount: string;
    focus: string;
    whatIs: string;
    whatIsDesc: string;
    gate: {
      title: string;
      subtitle: string;
      email: string;
      company: string;
      role: string;
      submit: string;
    };
  };
  results: {
    title: string;
    subtitle: string;
    totalPoints: string;
    recommendations: string;
    bookCall: string;
    download: string;
  };
  about: {
    bio: string;
    philosophy: string;
    profile: string;
  };
}

export interface Question {
  id: number;
  category: 'energy' | 'connection' | 'presence';
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
    energy: number;
    connection: number;
    presence: number;
  };
  userData: {
    email: string;
    company: string;
    role: string;
  };
}
