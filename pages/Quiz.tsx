
import React, { useState } from 'react';
import { Language, QuizResults, Question } from '../types';
import { QUESTIONS } from '../data/questions';
import { TRANSLATIONS } from '../data/translations';

interface QuizProps {
  lang: Language;
  onComplete: (res: QuizResults) => void;
}

const Quiz: React.FC<QuizProps> = ({ lang, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(QUESTIONS.length).fill(-1));
  const [showGate, setShowGate] = useState(false);
  const [userData, setUserData] = useState({ email: '', company: '', role: '' });

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleSelect = (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = points;
    setAnswers(newAnswers);
    
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setShowGate(true);
    }
  };

  const handleSubmitResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate category scores
    const categoryTotals = { clarity: 0, team: 0, bio: 0, system: 0 };
    answers.forEach((pts, idx) => {
      categoryTotals[QUESTIONS[idx].category] += pts;
    });

    const totalScore = answers.reduce((a, b) => a + b, 0);

    onComplete({
      totalScore,
      categoryScores: categoryTotals,
      userData
    });
  };

  if (showGate) {
    return (
      <div className="py-24 px-6 max-w-xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif tracking-tight">Assessment Complete.</h2>
          <p className="text-gray-500 font-light">Enter your executive details to decode your results and receive the Uncoded Energy Audit PDF.</p>
        </div>
        <form onSubmit={handleSubmitResults} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Professional Email</label>
            <input 
              required
              type="email"
              placeholder="name@company.com"
              className="w-full bg-luxury-grey border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-luxury-gold transition-colors"
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Organization</label>
            <input 
              required
              type="text"
              placeholder="Acme Corp"
              className="w-full bg-luxury-grey border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-luxury-gold transition-colors"
              value={userData.company}
              onChange={(e) => setUserData({...userData, company: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Current Role</label>
            <input 
              required
              type="text"
              placeholder="Founder / VP"
              className="w-full bg-luxury-grey border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-luxury-gold transition-colors"
              value={userData.role}
              onChange={(e) => setUserData({...userData, role: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="w-full py-5 bg-luxury-black text-white hover:bg-luxury-anthracite transition-all rounded shadow-xl text-xs uppercase tracking-[0.2em] mt-8"
          >
            Access My Leadership Audit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="py-24 px-6 max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
            {TRANSLATIONS[lang].assessment.step} {currentStep + 1} / {QUESTIONS.length}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="h-1 w-full bg-luxury-grey rounded-full overflow-hidden">
          <div 
            className="h-full bg-luxury-black transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="space-y-12 animate-in fade-in slide-in-from-right-4">
        <h3 className="text-2xl md:text-3xl font-serif leading-relaxed text-luxury-anthracite">
          {currentQuestion.text[lang]}
        </h3>

        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option.points)}
              className={`w-full text-left p-6 rounded border transition-all duration-200 group flex items-center justify-between
                ${answers[currentStep] === option.points 
                  ? 'border-luxury-black bg-luxury-grey shadow-sm' 
                  : 'border-luxury-grey hover:border-gray-400 hover:shadow-sm'}`}
            >
              <span className="text-sm font-light leading-relaxed pr-8">{option.label[lang]}</span>
              <div className={`h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center transition-all
                ${answers[currentStep] === option.points ? 'bg-luxury-black border-luxury-black' : ''}`}>
                {answers[currentStep] === option.points && <div className="h-1.5 w-1.5 bg-white rounded-full"></div>}
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8">
          <button 
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="text-[10px] uppercase tracking-widest font-bold disabled:opacity-30 hover:text-luxury-gold transition-colors"
          >
            &larr; {TRANSLATIONS[lang].assessment.back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
