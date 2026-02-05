
import React from 'react';
import { Language, QuizResults } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface ResultsProps {
  lang: Language;
  results: QuizResults;
}

const Results: React.FC<ResultsProps> = ({ lang, results }) => {
  const { totalScore, categoryScores, userData } = results;

  const getDebtLevel = () => {
    if (totalScore <= 15) return { label: 'Low Debt', color: 'text-green-600', description: 'You are an excellent leader. You need fine-tuning.' };
    if (totalScore <= 40) return { label: 'Medium Debt', color: 'text-luxury-gold', description: 'You are paying a high "interest" in stress and turnover. Start working now.' };
    return { label: 'Critical Debt', color: 'text-red-600', description: 'Equilibrium is near breaking point. Immediate intervention required.' };
  };

  const debt = getDebtLevel();

  const chartData = [
    { subject: 'Clarity', A: categoryScores.clarity, fullMark: 15 },
    { subject: 'Team', A: categoryScores.team, fullMark: 15 },
    { subject: 'Bio', A: categoryScores.bio, fullMark: 15 },
    { subject: 'System', A: categoryScores.system, fullMark: 15 },
  ];

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto space-y-20">
      <div className="text-center space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Executive Audit Report</span>
        <h1 className="text-4xl md:text-6xl font-serif">Your Leadership Analysis</h1>
        <p className="text-xl text-gray-500 font-light">Prepared for {userData.email} @ {userData.company}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center bg-luxury-grey p-12 rounded-lg">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-serif">{totalScore} <span className="text-lg font-sans text-gray-400 font-light uppercase tracking-widest">/ 75 Total Pts</span></h2>
            <p className={`text-2xl font-semibold uppercase tracking-widest ${debt.color}`}>{debt.label}</p>
          </div>
          <p className="text-lg leading-relaxed text-luxury-anthracite font-light italic">
            {debt.description}
          </p>
          <div className="pt-8 border-t border-gray-300">
             <h3 className="text-xs uppercase tracking-widest font-bold mb-4">Core Recommendations:</h3>
             <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                   <span className="text-luxury-gold">•</span>
                   {totalScore > 40 ? "Audit every internal system for 'decision latency'." : "Refine your 90-day success metrics for absolute clarity."}
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-luxury-gold">•</span>
                   {categoryScores.bio > 8 ? "Implement the Manual Override protocol daily." : "Review your bio-informed scheduling strategy."}
                </li>
             </ul>
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

      {/* Uncoded Energy Audit Bonus Section */}
      <section className="bg-luxury-black text-white p-12 md:p-20 rounded-lg space-y-12">
        <div className="text-center space-y-4">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold">Bonus Resource</span>
          <h2 className="text-4xl font-serif">The Uncoded Energy Audit</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Your results have been emailed, along with this diagnostic framework used by world-class leaders to optimize daily output.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/5 border border-white/10 rounded space-y-4">
             <h3 className="font-serif text-xl border-b border-white/10 pb-4">Self-Diagnosis</h3>
             <p className="text-sm text-gray-400">Score 1-10 daily: <br/><strong>Sonno</strong> (Depth) <br/><strong>Mente</strong> (Clarity) <br/><strong>Carico</strong> (Emotional Load)</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded space-y-4">
             <h3 className="font-serif text-xl border-b border-white/10 pb-4">Decision Matrix</h3>
             <p className="text-sm text-gray-400"><strong>Green (8-10):</strong> Eat the Frog. <br/><strong>Yellow (5-7):</strong> Operations. <br/><strong>Red (&lt;5):</strong> Recovery mode only.</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded space-y-4">
             <h3 className="font-serif text-xl border-b border-white/10 pb-4">Manual Override</h3>
             <p className="text-sm text-gray-400">Hack the Vagus Nerve: <br/><strong>Respirazione 4-7-8</strong>. <br/>Reset cognitive fog in 120 seconds.</p>
          </div>
        </div>

        <div className="text-center pt-8">
          <a 
            href="https://calendly.com/christianoliverharris/coaching-session-1-hour"
            target="_blank"
            className="inline-block bg-luxury-gold text-black px-12 py-5 rounded shadow-2xl text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all"
          >
            Review These Results With Christian
          </a>
        </div>
      </section>

      {/* Calendly Integration */}
      <div className="space-y-12 py-16">
        <h2 className="text-4xl font-serif text-center">Book Your Private Strategy Call</h2>
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
