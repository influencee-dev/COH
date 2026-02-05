
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
                 Christian operates at the intersection of executive coaching, neurobiology, and performance systems. His mission is to eliminate the biological and systemic friction that prevents top-tier leaders from scaling their impact.
               </p>
            </div>
          </div>
        </section>

        {/* Philosophy Block */}
        <section className="bg-luxury-grey p-12 md:p-24 rounded text-center space-y-8">
          <h2 className="text-3xl font-serif">"Performance is a biological outcome."</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 font-light italic">
            {t.about.philosophy}
          </p>
          <div className="flex justify-center gap-12 pt-8 grayscale opacity-50">
             <span className="font-serif italic text-xl">Founder Focused</span>
             <span className="font-serif italic text-xl">Data Driven</span>
             <span className="font-serif italic text-xl">Neuro Optimized</span>
          </div>
        </section>

        {/* Editorial Content */}
        <section className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
             <h3 className="font-serif text-2xl">01. Systems</h3>
             <p className="text-sm text-gray-600 leading-relaxed font-light">
               We don't fix people; we fix systems. Your leadership output is only as good as the internal and organizational loops you navigate.
             </p>
          </div>
          <div className="space-y-4">
             <h3 className="font-serif text-2xl">02. Biology</h3>
             <p className="text-sm text-gray-600 leading-relaxed font-light">
               We leverage real-time biometric insights to understand when your brain is at its strategic peak and when it’s merely reacting.
             </p>
          </div>
          <div className="space-y-4">
             <h3 className="font-serif text-2xl">03. Impact</h3>
             <p className="text-sm text-gray-600 leading-relaxed font-light">
               The end goal is a 'Green Zone' leader—one who makes high-leverage decisions with minimal cognitive fatigue.
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
