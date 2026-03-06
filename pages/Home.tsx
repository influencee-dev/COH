import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HomeProps {
  lang: Language;
  onNavigate: (r: string) => void;
}

const Home: React.FC<HomeProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Executive Backdrop" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-luxury-anthracite max-w-2xl mx-auto leading-relaxed font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('assessment')}
              className="w-full sm:w-auto px-8 py-4 bg-luxury-black text-white hover:bg-luxury-anthracite transition-all rounded text-sm uppercase tracking-widest"
            >
              {t.hero.cta1}
            </button>
            <button 
              onClick={() => onNavigate('book')}
              className="w-full sm:w-auto px-8 py-4 border border-luxury-black hover:bg-luxury-grey transition-all rounded text-sm uppercase tracking-widest"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* Authenticity Debt Section */}
      <section className="py-24 bg-luxury-grey px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif">{t.debtSection.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {t.debtSection.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 rounded-full bg-luxury-black text-white flex items-center justify-center text-[10px] flex-shrink-0">01</div>
                <div>
                  <h3 className="font-semibold uppercase tracking-wider text-sm">{t.debtSection.pillars.energy.title}</h3>
                  <p className="text-sm text-gray-600">{t.debtSection.pillars.energy.desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 rounded-full bg-luxury-black text-white flex items-center justify-center text-[10px] flex-shrink-0">02</div>
                <div>
                  <h3 className="font-semibold uppercase tracking-wider text-sm">{t.debtSection.pillars.resonance.title}</h3>
                  <p className="text-sm text-gray-600">{t.debtSection.pillars.resonance.desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 rounded-full bg-luxury-black text-white flex items-center justify-center text-[10px] flex-shrink-0">03</div>
                <div>
                  <h3 className="font-semibold uppercase tracking-wider text-sm">{t.debtSection.pillars.presence.title}</h3>
                  <p className="text-sm text-gray-600">{t.debtSection.pillars.presence.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
             <img 
               src="home.png" 
               alt="Christian Oliver Harris" 
               className="w-full h-full object-cover rounded shadow-2xl"
             />
             <div className="absolute -bottom-8 -left-8 bg-white p-8 border border-luxury-grey shadow-lg hidden lg:block max-w-xs">
                <p className="text-sm italic text-gray-500 font-light">"Christian helps you stop 'fixing' yourself and start leveraging your sensitivity as a superpower."</p>
                <div className="mt-4 font-semibold text-xs uppercase tracking-widest text-luxury-gold">Sensitive High-Achiever</div>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy / CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-serif">{t.cta.title}</h2>
          <p className="text-xl font-light text-gray-600 italic">{t.cta.subtitle}</p>
          <button 
             onClick={() => onNavigate('assessment')}
             className="px-12 py-5 bg-luxury-black text-white hover:bg-luxury-anthracite transition-all rounded shadow-xl text-sm uppercase tracking-[0.2em]"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
