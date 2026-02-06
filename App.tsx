
import React, { useState, useEffect } from 'react';
import { Language, QuizResults } from './types';
import { TRANSLATIONS } from './data/translations';
import Home from './pages/Home';
import About from './pages/About';
import AssessmentLanding from './pages/AssessmentLanding';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
        <div className="py-20 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-serif mb-8 text-center">Book a Strategy Session</h1>
          <div className="bg-luxury-grey p-4 rounded-lg shadow-sm">
             <iframe 
               src="https://calendly.com/christianoliverharris/coaching-session-1-hour" 
               width="100%" 
               height="700" 
               style={{ border: 0 }}
             ></iframe>
          </div>
        </div>
      );
      default: return <Home lang={lang} onNavigate={setRoute} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} setLang={setLang} setRoute={setRoute} currentRoute={route} />
      <main className="flex-grow">
        {renderRoute()}
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
