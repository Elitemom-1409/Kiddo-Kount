'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const shapes = ['🔺', '🔲', '⭕', '⬟', '💎'];
const shapeNames = { '🔺': 'Triangle', '🔲': 'Square', '⭕': 'Circle', '⬟': 'Pentagon', '💎': 'Diamond' };

function generatePuzzle(level: number) {
  const count = Math.min(2 + level, 5);
  const needed = shapes.slice(0, count).sort(() => Math.random() - 0.5);
  const extra = shapes.filter((s) => !needed.includes(s)).slice(0, 2);
  return { needed, available: [...needed, ...extra].sort(() => Math.random() - 0.5) };
}

export default function SaveTheEgg() {
  const [level, setLevel] = useState(1);
  const [puzzle, setPuzzle] = useState(() => generatePuzzle(1));
  const [placed, setPlaced] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  function handleSlot(shape: string) {
    if (showCelebration) return;
    if (selected === shape && puzzle.needed.includes(shape) && !placed.includes(shape)) {
      setPlaced((prev) => {
        const next = [...prev, shape];
        if (next.length === puzzle.needed.length) {
          setShowCelebration(true);
          setTimeout(() => {
            const newLevel = level + 1;
            setLevel(newLevel);
            setPuzzle(generatePuzzle(newLevel));
            setPlaced([]);
            setSelected(null);
            setShowCelebration(false);
          }, 2000);
        }
        return next;
      });
      setSelected(null);
    }
  }

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-4">
        <span className="font-display font-bold text-lg">🥚 Save the Egg</span>
        <span className="font-display text-candy-cherry">Level {level}</span>
      </div>
      <p className="font-display text-lg mb-2">Build a shield around the egg!</p>
      <p className="font-body text-sm text-white/50 mb-6">Select a shape, then tap its slot in the shield.</p>

      {/* Egg with shield slots */}
      <div className="relative w-48 h-48 mx-auto mb-8">
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center text-6xl">🥚</motion.div>
        {puzzle.needed.map((shape, i) => {
          const angle = (i / puzzle.needed.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + 42 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
          return (
            <motion.button key={shape} onClick={() => handleSlot(shape)}
              className={`absolute w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all -translate-x-1/2 -translate-y-1/2
                ${placed.includes(shape) ? 'bg-candy-leaf/30 border-candy-leaf' : 'bg-white/5 border-white/20 border-dashed hover:border-white/40'} border-2`}
              style={{ left: `${x}%`, top: `${y}%` }}>
              {placed.includes(shape) ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>{shape}</motion.span> : <span className="opacity-20 text-lg">?</span>}
            </motion.button>
          );
        })}
      </div>

      {/* Available shapes */}
      <div className="flex justify-center gap-3 flex-wrap">
        {puzzle.available.map((shape, i) => (
          <motion.button key={`${level}-${i}`}
            className={`text-3xl p-3 rounded-xl transition-all ${
              placed.includes(shape) ? 'opacity-30 cursor-not-allowed' :
              selected === shape ? 'bg-candy-cherry/30 ring-2 ring-candy-cherry scale-110' : 'bg-white/5 hover:bg-white/10 hover:scale-105'}`}
            onClick={() => !placed.includes(shape) && setSelected(selected === shape ? null : shape)}
            whileTap={{ scale: 0.9 }}
            disabled={placed.includes(shape)}>
            {shape}
            <div className="text-[10px] font-display mt-1 text-white/50">
              {shapeNames[shape as keyof typeof shapeNames] || ''}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="mt-6">
            <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.3, 1] }} transition={{ repeat: 3, duration: 0.3 }} className="text-5xl mb-2">🛡️</motion.div>
            <p className="font-display font-bold text-xl text-candy-leaf">Egg Saved!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
