
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ArrowRight, Zap, Target, Layout, ShieldCheck, Activity, Users } from 'lucide-react';

interface HomeProps {
  lang: Language;
  onNavigate: (r: string) => void;
}

const Home: React.FC<HomeProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
            alt="Executive Backdrop" 
            className="w-full h-full object-cover opacity-10 grayscale scale-105"
          />
        </div>
        <div className="relative z-10 max-w-5xl text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-luxury-gold text-xs uppercase tracking-[0.6em] font-bold mb-6 block">Deciphering Excellence</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] tracking-tight">
              {t.hero.title}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-2xl text-luxury-anthracite max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <button 
              onClick={() => onNavigate('assessment')}
              className="group w-full sm:w-auto px-10 py-5 bg-luxury-black text-white hover:bg-luxury-gold transition-all duration-300 rounded-none text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('book')}
              className="w-full sm:w-auto px-10 py-5 border border-luxury-black/20 hover:border-luxury-black transition-all rounded-none text-xs uppercase tracking-[0.3em] font-medium"
            >
              {t.hero.cta2}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Leadership Debt Section */}
      <section className="py-32 bg-luxury-grey px-6 border-y border-luxury-grey/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">{t.debtSection.title}</h2>
              <div className="h-1.5 w-24 bg-luxury-gold"></div>
            </div>
            <p className="text-xl leading-relaxed text-gray-600 font-light">
              {t.debtSection.description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-3">
                <Activity className="w-8 h-8 text-luxury-gold" />
                <h4 className="font-bold text-xs uppercase tracking-widest">Biological Friction</h4>
                <p className="text-sm text-gray-500 font-light">Unmanaged stress responses that cloud executive judgment.</p>
              </div>
              <div className="space-y-3">
                <Users className="w-8 h-8 text-luxury-gold" />
                <h4 className="font-bold text-xs uppercase tracking-widest">Team Latency</h4>
                <p className="text-sm text-gray-500 font-light">The time wasted between a decision and its execution.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
              className="w-full aspect-square object-cover shadow-2xl grayscale brightness-90" 
              alt="High Performance Strategy"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 border border-luxury-grey shadow-xl hidden xl:block max-w-sm">
               <p className="text-sm italic text-luxury-anthracite font-light leading-relaxed">
                 "Christian translates neurobiology into board-room strategy. A must for any CEO operating at the edge."
               </p>
               <div className="mt-6 flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-luxury-gold"></div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Tech Founder, London</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Methodology Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold">The Framework</span>
            <h2 className="text-4xl md:text-6xl font-serif">Uncoded Performance</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 group"
            >
              <div className="w-16 h-16 bg-luxury-grey flex items-center justify-center group-hover:bg-luxury-black group-hover:text-white transition-colors duration-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif">Energy Management</h3>
              <p className="text-gray-500 font-light leading-relaxed">Moving beyond time management into biological energy optimization. Deciphering your nervous system for sustained focus.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 group"
            >
              <div className="w-16 h-16 bg-luxury-grey flex items-center justify-center group-hover:bg-luxury-black group-hover:text-white transition-colors duration-500">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif">Strategic Clarity</h3>
              <p className="text-gray-500 font-light leading-relaxed">Eliminating the noise. We build systems that ensure your #1 priority is the entire organization's #1 priority.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 group"
            >
              <div className="w-16 h-16 bg-luxury-grey flex items-center justify-center group-hover:bg-luxury-black group-hover:text-white transition-colors duration-500">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif">Systemic Velocity</h3>
              <p className="text-gray-500 font-light leading-relaxed">Re-engineering workflows for high-stakes environments. Reducing leadership debt through absolute delegation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-luxury-black text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full text-white fill-current">
            <path d="M0 400C150 400 350 250 400 0H0V400Z" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif leading-tight"
          >
            Stop managing stress.<br/>Start managing performance.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
          >
            <button 
              onClick={() => onNavigate('assessment')}
              className="px-12 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-luxury-gold hover:text-white transition-all duration-300"
            >
              Audit My Leadership Debt
            </button>
            <button 
              onClick={() => onNavigate('book')}
              className="px-12 py-6 border border-white/30 text-white font-bold uppercase tracking-[0.3em] text-xs hover:border-white transition-all duration-300"
            >
              {t.nav.book}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
