
import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // SECTION 1: RADICAL CLARITY
  {
    id: 1,
    category: 'clarity',
    text: {
      en: "How often do you find yourself re-explaining tasks or goals you thought were clearly communicated?",
      it: "Quanto spesso ti ritrovi a dover rispiegare task o obiettivi che pensavi fossero stati recepiti chiaramente?"
    },
    options: [
      { label: { en: "Rarely. Processes are fluid.", it: "Praticamente mai. I processi sono fluidi." }, points: 0 },
      { label: { en: "Occasionally, for complex projects.", it: "Occasionalmente, per i progetti più complessi." }, points: 2 },
      { label: { en: "Often. I feel like a broken record.", it: "Spesso. Mi sento come un disco rotto." }, points: 5 }
    ]
  },
  {
    id: 2,
    category: 'clarity',
    text: {
      en: "Do your meetings end with concrete actions assigned and certain deadlines?",
      it: "I tuoi meeting finiscono con azioni concrete assegnate e scadenze certe?"
    },
    options: [
      { label: { en: "Always. Everyone knows what to do.", it: "Sempre. Ognuno sa cosa deve fare." }, points: 0 },
      { label: { en: "Mostly, but gray areas remain.", it: "Nella maggior parte dei casi, ma rimangono zone grigie." }, points: 2 },
      { label: { en: "No, they are usually marathon discussions.", it: "No, spesso sono maratone di discussione." }, points: 5 }
    ]
  },
  {
    id: 3,
    category: 'clarity',
    text: {
      en: "If I asked your direct reports the #1 priority today, would they give the same answer?",
      it: "Se chiedessi ai tuoi riporti diretti qual è la priorità #1 oggi, darebbero tutti la stessa risposta?"
    },
    options: [
      { label: { en: "Yes, we are perfectly aligned.", it: "Sì, siamo perfettamente allineati." }, points: 0 },
      { label: { en: "Maybe, but everyone interprets it their own way.", it: "Forse, ma ognuno la interpreterebbe a modo suo." }, points: 3 },
      { label: { en: "Probably not, everyone runs in their silo.", it: "Probabilmente no, ognuno corre nel suo silo." }, points: 5 }
    ]
  },
  {
    id: 4,
    category: 'clarity',
    text: {
      en: "How well defined is your 'Success Metric' for the next 90 days?",
      it: "Quanto è definita la tua 'Success Metric' per i prossimi 90 giorni?"
    },
    options: [
      { label: { en: "Crystal clear and measurable.", it: "Cristallina e misurabile." }, points: 0 },
      { label: { en: "Vaguely defined.", it: "Definita in modo vago." }, points: 3 },
      { label: { en: "I don't have one.", it: "Non ne ho una." }, points: 5 }
    ]
  },
  // SECTION 2: TEAM HEALTH
  {
    id: 5,
    category: 'team',
    text: {
      en: "If you disappeared for 2 weeks (no connection), what would happen to your team?",
      it: "Se domani dovessi sparire per 2 settimane (senza connessione), cosa succederebbe al tuo team?"
    },
    options: [
      { label: { en: "They would continue to perform at peak.", it: "Continuerebbero a performare ai massimi livelli." }, points: 0 },
      { label: { en: "They would slow down awaiting approvals.", it: "Rallenterebbero vistosamente in attesa di approvazioni." }, points: 3 },
      { label: { en: "Total chaos. I am the bottleneck.", it: "Sarebbe il caos totale. Sono il collo di bottiglia." }, points: 5 }
    ]
  },
  {
    id: 6,
    category: 'team',
    text: {
      en: "How do you handle a team member who is not performing?",
      it: "Come gestisci un membro del team che non sta performando?"
    },
    options: [
      { label: { en: "Immediate targeted support and listening.", it: "Intervengo subito con ascolto e supporto mirato." }, points: 0 },
      { label: { en: "Wait for it to resolve or delegate to HR.", it: "Aspetto che si risolva o delego all'HR." }, points: 3 },
      { label: { en: "Formal PIP or hope they leave.", it: "Uso processi formali (PIP) o spero se ne vada." }, points: 5 }
    ]
  },
  {
    id: 7,
    category: 'team',
    text: {
      en: "Does your team feel free to admit a critical error or doubt to you?",
      it: "Il tuo team si sente libero di ammettere un errore o un dubbio critico davanti a te?"
    },
    options: [
      { label: { en: "Yes, psychological safety is our pillar.", it: "Sì, la sicurezza psicologica è un pilastro." }, points: 0 },
      { label: { en: "Only in private (1:1).", it: "Solo in contesti privati (1:1)." }, points: 3 },
      { label: { en: "No, they tend to hide problems.", it: "No, tendono a nascondere i problemi." }, points: 5 }
    ]
  },
  {
    id: 8,
    category: 'team',
    text: {
      en: "How often do you provide feedback that isn't tied to an annual review?",
      it: "Quanto spesso fornisci feedback non legato a una revisione annuale?"
    },
    options: [
      { label: { en: "Weekly or in real-time.", it: "Settimanalmente o in tempo reale." }, points: 0 },
      { label: { en: "Once a quarter.", it: "Una volta a trimestre." }, points: 3 },
      { label: { en: "Only during formal reviews.", it: "Solo durante le revisioni formali." }, points: 5 }
    ]
  },
  // SECTION 3: BIO-PERFORMANCE
  {
    id: 9,
    category: 'bio',
    text: {
      en: "How would you describe your mental energy after the first 4 hours of work?",
      it: "Come descriveresti il tuo livello di energia mentale dopo le prime 4 ore di lavoro?"
    },
    options: [
      { label: { en: "Still high. Laser focus.", it: "Ancora alta. Focus laser." }, points: 0 },
      { label: { en: "Declining. Slipping into reactive mode.", it: "In calo. Scivolo nella modalità reattiva." }, points: 3 },
      { label: { en: "Exhausted. Survival mode before lunch.", it: "Esaurita. Survival mode prima di pranzo." }, points: 5 }
    ]
  },
  {
    id: 10,
    category: 'bio',
    text: {
      en: "How often do you make strategic decisions based on data (biometric or business) instead of urgency?",
      it: "Quanto spesso prendi decisioni basate su dati invece che sull'urgenza del momento?"
    },
    options: [
      { label: { en: "Almost always. I plan based on recovery.", it: "Quasi sempre. Pianifico in base al recupero." }, points: 0 },
      { label: { en: "I try, but urgency often wins.", it: "Cerco di farlo, ma l'urgenza spesso vince." }, points: 3 },
      { label: { en: "Never. Decisions under chronic fatigue.", it: "Mai. Decido sotto pressione in stanchezza cronica." }, points: 5 }
    ]
  },
  {
    id: 11,
    category: 'bio',
    text: {
      en: "In the last 3 months, how many times have you sacrificed offline time to handle an avoidable crisis?",
      it: "Negli ultimi 3 mesi, quante volte hai sacrificato il tempo offline per una crisi evitabile?"
    },
    options: [
      { label: { en: "Rarely. Balance holds.", it: "Mai o raramente. L'equilibrio regge." }, points: 0 },
      { label: { en: "A few times. Price of the role.", it: "Qualche volta. È il prezzo del ruolo." }, points: 3 },
      { label: { en: "Constantly. Personal life is the 'buffer'.", it: "Costantemente. La vita privata è il cuscinetto." }, points: 5 }
    ]
  },
  {
    id: 12,
    category: 'bio',
    text: {
      en: "How many hours of high-quality sleep do you average?",
      it: "Quante ore di sonno di alta qualità mediamente dormi?"
    },
    options: [
      { label: { en: "7-8 hours consistently.", it: "7-8 ore costantemente." }, points: 0 },
      { label: { en: "5-6 hours, feels okay.", it: "5-6 ore, mi sento ok." }, points: 3 },
      { label: { en: "Less than 5 hours, constant fog.", it: "Meno di 5 ore, nebbia costante." }, points: 5 }
    ]
  },
  // SECTION 4: SYSTEM NAVIGATION
  {
    id: 13,
    category: 'system',
    text: {
      en: "How much time do you spend on 'office politics' compared to real value creation?",
      it: "Quanto tempo dedichi alla 'politica aziendale' rispetto alla creazione di valore reale?"
    },
    options: [
      { label: { en: "Less than 10%. Impact speaks for me.", it: "Meno del 10%. Il mio impatto parla per me." }, points: 0 },
      { label: { en: "About 30-40%. Necessary evil.", it: "Circa il 30-40%. È un male necessario." }, points: 3 },
      { label: { en: "Over 50%. I feel like a bureaucrat.", it: "Più del 50%. Mi sento un burocrate." }, points: 5 }
    ]
  },
  {
    id: 14,
    category: 'system',
    text: {
      en: "How often do you audit your own leadership systems (workflows, communication stacks)?",
      it: "Quanto spesso analizzi i tuoi sistemi di leadership?"
    },
    options: [
      { label: { en: "Quarterly. Optimization is key.", it: "Trimestralmente. L'ottimizzazione è chiave." }, points: 0 },
      { label: { en: "Annually or when things break.", it: "Annualmente o quando le cose si rompono." }, points: 3 },
      { label: { en: "Never. I don't have time to fix systems.", it: "Mai. Non ho tempo per sistemare i sistemi." }, points: 5 }
    ]
  },
  {
    id: 15,
    category: 'system',
    text: {
      en: "How easy is it for a new project to get 'stuck' in your department's approval chain?",
      it: "Quanto è facile che un nuovo progetto si 'blocchi' nella catena di approvazione?"
    },
    options: [
      { label: { en: "Not at all. Delegation is absolute.", it: "Per nulla. La delega è assoluta." }, points: 0 },
      { label: { en: "Sometimes. A few bottlenecks exist.", it: "A volte. Esistono alcuni colli di bottiglia." }, points: 3 },
      { label: { en: "Highly likely. Every decision goes through me.", it: "Molto probabile. Ogni decisione passa da me." }, points: 5 }
    ]
  }
];
