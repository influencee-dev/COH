import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // SECTION 1: ENERGY DEBT (Masking vs. Performance)
  {
    id: 1,
    category: 'energy',
    text: {
      en: "At the end of the day, do you feel like you gave your best, or that you consumed every reserve just to 'adapt' to the environment?",
      it: "Alla fine della giornata, senti di aver dato il meglio di te, o di aver consumato ogni riserva solo per 'adattarti' all'ambiente?"
    },
    options: [
      { label: { en: "I feel energized and authentic.", it: "Mi sento energizzato e autentico." }, points: 0 },
      { label: { en: "Exhausted, but I managed.", it: "Esaurito, ma ho gestito." }, points: 2 },
      { label: { en: "Drained. I'm just masking to survive.", it: "Drenato. Sto solo indossando una maschera per sopravvivere." }, points: 5 }
    ]
  },
  {
    id: 2,
    category: 'energy',
    text: {
      en: "How much of your daily energy is spent 'masking' your true self to fit into the corporate culture?",
      it: "Quanta della tua energia quotidiana viene spesa per 'mascherare' il tuo vero io per adattarti alla cultura aziendale?"
    },
    options: [
      { label: { en: "None. I am fully myself.", it: "Nessuna. Sono pienamente me stesso." }, points: 0 },
      { label: { en: "Some. I tone down my sensitivity.", it: "Un po'. Attenuto la mia sensibilità." }, points: 2 },
      { label: { en: "Most of it. It's exhausting.", it: "La maggior parte. È estenuante." }, points: 5 }
    ]
  },
  // SECTION 2: RESONANCE DEBT (The Hidden Power Leak)
  {
    id: 3,
    category: 'resonance',
    text: {
      en: "Do people follow you because of your title (Authority) or because of the psychological safety you create (Resonance)?",
      it: "Le persone ti seguono per il tuo titolo (Autorità) o per la sicurezza psicologica che crei (Risonanza)?"
    },
    options: [
      { label: { en: "Resonance. They trust me deeply.", it: "Risonanza. Si fidano profondamente di me." }, points: 0 },
      { label: { en: "A mix of both.", it: "Un mix di entrambi." }, points: 2 },
      { label: { en: "Authority. I feel I have to push them.", it: "Autorità. Sento di doverli spingere." }, points: 5 }
    ]
  },
  {
    id: 4,
    category: 'resonance',
    text: {
      en: "How often do you feel you have to suppress your empathy to be taken seriously as a leader?",
      it: "Quanto spesso senti di dover sopprimere la tua empatia per essere preso sul serio come leader?"
    },
    options: [
      { label: { en: "Never. Empathy is my strength.", it: "Mai. L'empatia è la mia forza." }, points: 0 },
      { label: { en: "Sometimes, in tough meetings.", it: "A volte, nelle riunioni difficili." }, points: 2 },
      { label: { en: "Often. I feel it's a liability.", it: "Spesso. Sento che è un punto debole." }, points: 5 }
    ]
  },
  // SECTION 3: PRESENCE DEBT (The Spillover)
  {
    id: 5,
    category: 'presence',
    text: {
      en: "How much of the boardroom’s political tension is sitting at the dinner table with your family tonight?",
      it: "Quanta della tensione politica della sala riunioni è seduta al tavolo della cena con la tua famiglia stasera?"
    },
    options: [
      { label: { en: "None. I leave it at the door.", it: "Nessuna. La lascio alla porta." }, points: 0 },
      { label: { en: "Some. It lingers.", it: "Un po'. Persiste." }, points: 2 },
      { label: { en: "All of it. I'm a 'ghost parent'.", it: "Tutta. Sono un 'genitore fantasma'." }, points: 5 }
    ]
  },
  {
    id: 6,
    category: 'presence',
    text: {
      en: "When you are with your loved ones, how often is your mind still 'at the office'?",
      it: "Quando sei con i tuoi cari, quanto spesso la tua mente è ancora 'in ufficio'?"
    },
    options: [
      { label: { en: "Never. I am fully present.", it: "Mai. Sono pienamente presente." }, points: 0 },
      { label: { en: "Sometimes.", it: "A volte." }, points: 2 },
      { label: { en: "Constantly.", it: "Costantemente." }, points: 5 }
    ]
  }
];
