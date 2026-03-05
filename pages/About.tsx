import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Bio Header */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded">
             <img 
               src="https://picsum.photos/800/1066?grayscale&random=2" 
               alt="Christian Oliver Harris Profile" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="space-y-8">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold">The Profile</span>
            <h1 className="text-5xl font-serif leading-tight">Christian Oliver Harris</h1>
            <p className="text-xl leading-relaxed font-light text-luxury-anthracite">
              {t.about.bio}
            </p>
            <div className="pt-8 border-t border-luxury-grey">
               <h3 className="text-xs uppercase tracking-widest font-bold mb-4">Strategic Background</h3>
               <p className="text-sm text-gray-500 leading-relaxed font-light">
                 Christian helps highly intelligent, empathetic, and sensitive leaders in their 30s and 40s escape the 'Golden Cage' of traditional success. He helps them stop the 'hustle' for external recognition and design a new map - one where sensitivity is their greatest strategic advantage, and work is built around the life they actually want to live.
               </p>
            </div>
          </div>
        </section>

        {/* Philosophy Block */}
        <section className="bg-luxury-grey p-12 md:p-24 rounded text-center space-y-8">
          <h2 className="text-3xl font-serif">"Your sensitivity is not a liability; it is your greatest strategic advantage."</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 font-light italic">
            {t.about.philosophy}
          </p>
          <div className="flex justify-center gap-12 pt-8 grayscale opacity-50">
             <span className="font-serif italic text-xl">Sensitive High-Achievers</span>
             <span className="font-serif italic text-xl">Human Resonance</span>
             <span className="font-serif italic text-xl">Authenticity First</span>
          </div>
        </section>

        {/* Editorial Content */}
        <section className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
             <h3 className="font-serif text-2xl">01. Resonance</h3>
             <p className="text-sm text-gray-600 leading-relaxed font-light">
               We move from external recognition (titles, the climb) to internal purpose (freedom, time, impact).
             </p>
          </div>
          <div className="space-y-4">
             <h3 className="font-serif text-2xl">02. Integration</h3>
             <p className="text-sm text-gray-600 leading-relaxed font-light">
               Success includes being a great parent, partner, and human being - without feeling you lost ambition.
             </p>
          </div>
          <div className="space-y-4">
             <h3 className="font-serif text-2xl">03. Talent Magnet</h3>
             <p className="text-sm text-gray-600 leading-relaxed font-light">
               By unlocking the potential of your people through safety and listening, you become the leader everyone wants to work for.
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
