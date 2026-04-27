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
      <div className="max-w-6xl mx-auto">
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
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold">{t.about.profile}</span>
            <h1 className="text-5xl font-serif leading-tight">Christian Oliver Harris</h1>
            <p className="text-xl leading-relaxed font-light text-luxury-anthracite">
              {t.about.bio}
            </p>
            <div className="pt-8 border-t border-luxury-grey">
               <p className="text-lg font-serif italic text-luxury-gold">
                 {t.about.philosophy}
               </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
