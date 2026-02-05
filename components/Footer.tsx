
import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-luxury-black text-white py-20 px-6 border-t border-luxury-anthracite">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-sm">
          <div className="flex flex-col">
            <span className="font-serif text-3xl tracking-widest font-bold">COH</span>
            <span className="text-xs uppercase tracking-[0.2em] -mt-1 opacity-60">Christian Oliver Harris</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed font-light">
            Executive Performance & Leadership Advisory. Decodifica il tuo potenziale quotidiano e ottimizza le tue decisioni.
          </p>
          <div className="flex space-x-6 text-xs uppercase tracking-widest text-gray-400">
            <a href="https://christianoliverharris.com" className="hover:text-luxury-gold">Website</a>
            <a href="https://www.linkedin.com/in/christianharris/" className="hover:text-luxury-gold">LinkedIn</a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-luxury-gold">Offerings</h4>
            <ul className="space-y-2 text-gray-400 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Executive Coaching</li>
              <li className="hover:text-white cursor-pointer transition-colors">Team Clarity Audit</li>
              <li className="hover:text-white cursor-pointer transition-colors">Bio-Performance Systems</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-luxury-gold">Legal</h4>
            <ul className="space-y-2 text-gray-400 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
        <p>© {new Date().getFullYear()} Uncoded Leadership by Christian Oliver Harris. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed for High Performance Leaders.</p>
      </div>
    </footer>
  );
};
