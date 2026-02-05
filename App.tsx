
import React, { useState, useEffect } from 'react';
import { Language, QuizResults } from './types.ts';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import AssessmentLanding from './pages/AssessmentLanding.tsx';
import Quiz from './pages/Quiz.tsx';
import Results from './pages/Results.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [route, setRoute] = useState<string>('home');
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);

  const renderRoute = () => {
    switch (route) {
      case 'home': return <Home lang={lang} onNavigate={setRoute} />;
      case 'about': return <About lang={lang} />;
      case 'assessment': return <AssessmentLanding lang={lang} onNavigate={setRoute} />;
      case 'quiz': return <Quiz lang={lang} onComplete={(res) => { setQuizResults(res); setRoute('results'); }} />;
      case 'results': return quizResults ? <Results lang={lang} results={quizResults} /> : <Home lang={lang} onNavigate={setRoute} />;
      case 'book': return (
        <div className="py-20 max-w-5xl mx-auto px-6 fade-in">
          <div className="text-center mb-12 space-y-4">
             <h1 className="text-5xl font-serif">Secure Your Session</h1>
             <p className="text-gray-500 font-light max-w-xl mx-auto tracking-wide">Select a time for your 60-minute diagnostic session with Christian.</p>
          </div>
          <div className="bg-white border border-luxury-grey p-4 rounded-xl shadow-2xl overflow-hidden h-[800px]">
             <iframe 
               src="https://calendly.com/christianoliverharris/coaching-session-1-hour" 
               className="w-full h-full"
               frameBorder="0"
             ></iframe>
          </div>
        </div>
      );
      default: return <Home lang={lang} onNavigate={setRoute} />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header lang={lang} setLang={setLang} setRoute={setRoute} currentRoute={route} />
      <main className="flex-grow">
        {renderRoute()}
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
