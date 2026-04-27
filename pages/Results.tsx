import React from 'react';
import { Language, QuizResults } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface ResultsProps {
  lang: Language;
  results: QuizResults;
}

const Results: React.FC<ResultsProps> = ({ lang, results }) => {
  const t = TRANSLATIONS[lang];
  const { totalScore, categoryScores, userData } = results;

  const getDebtLevel = () => {
    if (totalScore <= 5) return { 
      label: 'Low Authenticity Debt', 
      color: 'text-green-600', 
      description: 'You are leading with high connection and presence. Keep leveraging your relational depth.' 
    };
    if (totalScore <= 15) return { 
      label: 'Medium Authenticity Debt', 
      color: 'text-luxury-gold', 
      description: 'You are paying a high "interest" in emotional exhaustion. It is time to redesign your map.' 
    };
    return { 
      label: 'Critical Authenticity Debt', 
      color: 'text-red-600', 
      description: 'You are in the "Golden Cage". Immediate intervention required to avoid burnout.' 
    };
  };

  const debt = getDebtLevel();

  const chartData = [
    { subject: 'Energy', A: categoryScores.energy, fullMark: 10 },
    { subject: 'Connection', A: categoryScores.connection, fullMark: 10 },
    { subject: 'Presence', A: categoryScores.presence, fullMark: 10 },
  ];

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(results, null, 2)], {type: 'application/json'});
    element.href = URL.createObjectURL(file);
    element.download = "Authenticity_Audit_Results.json";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto space-y-20">
      <div className="text-center space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">{t.assessment.auditType}</span>
        <h1 className="text-4xl md:text-6xl font-serif">{t.results.title}</h1>
        <p className="text-xl text-gray-500 font-light">{t.results.subtitle} {userData.email} @ {userData.company}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center bg-luxury-grey p-12 rounded-lg">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-serif">{totalScore} <span className="text-lg font-sans text-gray-400 font-light uppercase tracking-widest">{t.results.totalPoints}</span></h2>
            <p className={`text-2xl font-semibold uppercase tracking-widest ${debt.color}`}>{debt.label}</p>
          </div>
          <p className="text-lg leading-relaxed text-luxury-anthracite font-light italic">
            {debt.description}
          </p>
          <div className="pt-8 border-t border-gray-300">
             <h3 className="text-xs uppercase tracking-widest font-bold mb-4">{t.results.recommendations}</h3>
             <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                   <span className="text-luxury-gold">•</span>
                   {totalScore > 15 ? "Audit your 'masking' habits: where are you leaking energy?" : "Continue to cultivate psychological safety."}
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-luxury-gold">•</span>
                   {categoryScores.connection < 5 ? "Identify one area where you can lead with empathy instead of authority." : "Your connection is a strength. Keep building it."}
                </li>
             </ul>
          </div>
          <div className="pt-4">
            <button 
              onClick={handleDownload}
              className="text-xs uppercase tracking-widest font-bold text-luxury-gold hover:text-luxury-black transition-colors"
            >
              &darr; {t.results.download}
            </button>
          </div>
        </div>

        <div className="h-[350px] w-full bg-white rounded p-4 shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Radar
                name="Score"
                dataKey="A"
                stroke="#0D0D0D"
                fill="#C5A059"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Calendly Integration */}
      <div className="space-y-12 py-16">
        <h2 className="text-4xl font-serif text-center">{t.results.bookCall}</h2>
        <div className="bg-luxury-grey rounded overflow-hidden shadow-sm">
           <iframe 
             src="https://calendly.com/christianoliverharris/coaching-session-1-hour" 
             width="100%" 
             height="700" 
             frameBorder="0"
           ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Results;
