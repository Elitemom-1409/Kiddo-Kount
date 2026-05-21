'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const shapes = [
  { id: 'circle', emoji: '🔴', name: 'Circle', slot: '⭕' },
  { id: 'square', emoji: '🟦', name: 'Square', slot: '🔲' },
  { id: 'triangle', emoji: '🔺', name: 'Triangle', slot: '△' },
  { id: 'star', emoji: '⭐', name: 'Star', slot: '☆' },
];

export default function ShapeSorter() {
  const [level, setLevel] = useState(1);
  const [available, setAvailable] = useState(() => [...shapes].sort(() => Math.random() - 0.5));
  const [sorted, setSorted] = useState<string[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  function handleDrop(slotId: string) {
    if (dragging === slotId && !sorted.includes(slotId)) {
      setSorted((prev) => {
        const next = [...prev, slotId];
        if (next.length === shapes.length) {
          setShowCelebration(true);
          setTimeout(() => {
            setShowCelebration(false);
            setSorted([]);
            setAvailable([...shapes].sort(() => Math.random() - 0.5));
            setLevel((l) => l + 1);
          }, 2000);
        }
        return next;
      });
    }
    setDragging(null);
  }

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-4">
        <span className="font-display font-bold text-lg">🚀 Shape Sorter</span>
        <span className="font-display text-candy-cyan">Level {level}</span>
      </div>
      <p className="font-display text-lg mb-6">Tap a shape, then tap its matching slot!</p>

      {/* Available shapes */}
      <div className="flex justify-center gap-4 mb-8">
        {available.filter((s) => !sorted.includes(s.id)).map((shape) => (
          <motion.button key={shape.id}
            className={`text-5xl p-4 rounded-2xl transition-all ${dragging === shape.id ? 'bg-candy-cyan/30 scale-110 ring-2 ring-candy-cyan' : 'bg-white/5 hover:bg-white/10'}`}
            onClick={() => setDragging(dragging === shape.id ? null : shape.id)}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: shapes.indexOf(shape) * 0.3 }}>
            {shape.emoji}
          </motion.button>
        ))}
      </div>

      {/* Slots */}
      <div className="flex justify-center gap-4">
        {shapes.map((shape) => (
          <motion.button key={shape.id}
            className={`w-20 h-20 rounded-2xl border-2 border-dashed flex items-center justify-center text-4xl transition-all ${
              sorted.includes(shape.id) ? 'border-candy-leaf bg-candy-leaf/20' : 'border-white/20 bg-white/5 hover:border-white/40'}`}
            onClick={() => handleDrop(shape.id)}
            whileTap={{ scale: 0.95 }}>
            {sorted.includes(shape.id) ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-3xl">{shape.emoji}</motion.span>
            ) : (
              <span className="text-2xl opacity-30">{shape.slot}</span>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="mt-8 text-center">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: 3 }} className="text-5xl mb-2">🚀</motion.div>
            <p className="font-display font-bold text-xl text-candy-cyan">Shapes Sorted!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
