
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AssessmentLandingProps {
  lang: Language;
  onNavigate: (r: string) => void;
}

const AssessmentLanding: React.FC<AssessmentLandingProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="py-24 px-6 bg-white min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-bold">Authenticity Audit</span>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight">{t.assessment.title}</h1>
          </div>
          <p className="text-xl text-gray-600 font-light leading-relaxed italic border-l-4 border-luxury-gold pl-6">
            {t.assessment.intro}
          </p>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              6 Questions focused on Energy, Resonance, and Presence
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Authenticity Debt analysis
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Instant wake-up call & new map
            </li>
          </ul>
          <button 
            onClick={() => onNavigate('quiz')}
            className="w-full sm:w-auto px-10 py-5 bg-luxury-black text-white hover:bg-luxury-anthracite transition-all rounded shadow-lg text-xs uppercase tracking-widest"
          >
            {t.assessment.start}
          </button>
        </div>
        <div className="bg-luxury-grey p-10 rounded shadow-inner space-y-6">
           <h3 className="font-serif text-xl">What is "Authenticity Debt"?</h3>
           <p className="text-sm text-gray-600 leading-relaxed">
             For a Highly Sensitive Person (HSP) in a leadership role, "Authenticity Debt" is the emotional tax you pay every time you wear the "Red Power" mask to survive a meeting or fit into a toxic culture.
           </p>
           <p className="text-sm text-gray-600 leading-relaxed">
             This assessment measures your current 'Interest Rate'—how much emotional exhaustion you are accruing daily.
           </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLanding;
