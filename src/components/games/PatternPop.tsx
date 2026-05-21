'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const patternSets = [
  { pattern: ['🔴', '🔵', '🔴', '🔵'], answer: '🔴', options: ['🔴', '🔵', '🟢'] },
  { pattern: ['⭐', '🌙', '⭐', '🌙'], answer: '⭐', options: ['⭐', '🌙', '☀️'] },
  { pattern: ['🐱', '🐱', '🐶', '🐱', '🐱'], answer: '🐶', options: ['🐱', '🐶', '🐰'] },
  { pattern: ['1️⃣', '2️⃣', '3️⃣', '4️⃣'], answer: '5️⃣', options: ['5️⃣', '3️⃣', '7️⃣'] },
  { pattern: ['🟡', '🟡', '🔵', '🟡', '🟡'], answer: '🔵', options: ['🟡', '🔵', '🟢'] },
  { pattern: ['🌺', '🌸', '🌺', '🌸'], answer: '🌺', options: ['🌺', '🌸', '🌻'] },
  { pattern: ['🔺', '🔲', '🔺', '🔲'], answer: '🔺', options: ['🔺', '🔲', '⭕'] },
  { pattern: ['👆', '👇', '👆', '👇'], answer: '👆', options: ['👆', '👇', '👈'] },
];

export default function PatternPop() {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const current = patternSets[level % patternSets.length];
  const shuffledOptions = [...current.options].sort(() => Math.random() - 0.5);

  function handleAnswer(answer: string) {
    if (feedback) return;
    if (answer === current.answer) {
      setFeedback('correct');
      setScore((s) => s + 1);
      setTimeout(() => { setFeedback(null); setLevel((l) => l + 1); }, 1500);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 1000);
    }
  }

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-4">
        <span className="font-display font-bold text-lg">🎵 Pattern Pop</span>
        <span className="font-display text-candy-bubblegum">Score: {score}</span>
      </div>
      <p className="font-display text-lg mb-6">What comes next?</p>

      {/* Pattern display */}
      <div className="flex justify-center items-center gap-3 mb-8 flex-wrap">
        {current.pattern.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }} className="text-4xl md:text-5xl">{item}</motion.div>
        ))}
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-dashed border-candy-sunshine/50 flex items-center justify-center text-2xl text-candy-sunshine">?</motion.div>
      </div>

      {/* Options */}
      <div className="flex justify-center gap-4">
        {shuffledOptions.map((opt, i) => (
          <motion.button key={`${level}-${i}`} onClick={() => handleAnswer(opt)}
            className="text-4xl md:text-5xl p-4 rounded-2xl bg-white/5 hover:bg-white/15 transition-all hover:scale-110"
            whileTap={{ scale: 0.9 }}>{opt}</motion.button>
        ))}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6">
            {feedback === 'correct' ? (
              <><motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: 2, duration: 0.3 }} className="text-5xl mb-2">🎉</motion.div>
              <p className="font-display font-bold text-candy-leaf text-xl">Correct!</p></>
            ) : (
              <><div className="text-4xl mb-2">🤔</div><p className="font-display font-bold text-candy-sunshine text-lg">Try again!</p></>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
