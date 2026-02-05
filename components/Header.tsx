
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  setRoute: (r: string) => void;
  currentRoute: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, setRoute, currentRoute }) => {
  const t = TRANSLATIONS[lang];
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <button onClick={() => {setRoute('home'); setIsOpen(false)}} className={`${currentRoute === 'home' ? 'font-semibold' : ''} hover:text-luxury-gold transition-colors`}>{t.nav.home}</button>
      <button onClick={() => {setRoute('about'); setIsOpen(false)}} className={`${currentRoute === 'about' ? 'font-semibold' : ''} hover:text-luxury-gold transition-colors`}>{t.nav.about}</button>
      <button onClick={() => {setRoute('assessment'); setIsOpen(false)}} className={`${currentRoute === 'assessment' ? 'font-semibold' : ''} hover:text-luxury-gold transition-colors`}>{t.nav.assessment}</button>
      <button onClick={() => {setRoute('book'); setIsOpen(false)}} className="bg-luxury-black text-white px-5 py-2 hover:bg-luxury-anthracite transition-all rounded shadow-sm">{t.nav.book}</button>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-luxury-grey">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => setRoute('home')}>
          <span className="font-serif text-2xl tracking-widest font-bold">COH</span>
          <span className="text-[10px] uppercase tracking-[0.2em] -mt-1 opacity-60">Christian Oliver Harris</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider">
          <NavItems />
          <div className="border-l border-luxury-grey h-4 mx-4"></div>
          <button onClick={() => setLang(lang === 'en' ? 'it' : 'en')} className="font-medium hover:text-luxury-gold">
            {lang.toUpperCase()}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-luxury-grey p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          <NavItems />
          <button onClick={() => setLang(lang === 'en' ? 'it' : 'en')} className="text-left py-2 font-medium">
            Language: {lang.toUpperCase()}
          </button>
        </div>
      )}
    </header>
  );
};
