'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const animals = ['🐻', '🦊', '🐰', '🐸', '🦋', '🐝', '🐛', '🐞', '🦜', '🐿️'];

export default function CountingForest() {
  const [level, setLevel] = useState(1);
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 3) + 2);
  const [count, setCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [forest, setForest] = useState(() => generateForest(target));

  function generateForest(n: number) {
    return Array.from({ length: n }, (_, i) => ({
      id: i,
      animal: animals[Math.floor(Math.random() * animals.length)],
      x: 10 + Math.random() * 75,
      y: 10 + Math.random() * 60,
      counted: false,
    }));
  }

  function handleTap(id: number) {
    if (showCelebration) return;
    setForest((prev) =>
      prev.map((a) => (a.id === id && !a.counted ? { ...a, counted: true } : a))
    );
    const item = forest.find((a) => a.id === id);
    if (item && !item.counted) {
      const newCount = count + 1;
      setCount(newCount);
      if (newCount >= target) {
        setShowCelebration(true);
        setTimeout(() => {
          const newTarget = Math.min(target + 1, 10);
          setTarget(newTarget);
          setCount(0);
          setForest(generateForest(newTarget));
          setShowCelebration(false);
          setLevel((l) => l + 1);
        }, 2000);
      }
    }
  }

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-4">
        <span className="font-display font-bold text-lg">🌲 Counting Forest</span>
        <span className="font-display text-candy-sunshine">Level {level}</span>
      </div>
      <p className="font-display text-xl mb-4">
        Tap <span className="text-candy-sunshine font-bold font-numerals text-3xl">{target}</span> animals!
      </p>
      <p className="font-numerals text-2xl mb-4 text-candy-cyan">{count} / {target}</p>

      <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-candy-leaf/10 to-candy-leaf/5 rounded-2xl overflow-hidden border border-candy-leaf/20">
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-candy-leaf/20 to-transparent" />
        
        {forest.map((a) => (
          <motion.button key={a.id}
            className={`absolute text-4xl md:text-5xl cursor-pointer transition-all select-none ${a.counted ? 'opacity-50 scale-75' : 'hover:scale-125'}`}
            style={{ left: `${a.x}%`, top: `${a.y}%` }}
            onClick={() => handleTap(a.id)}
            whileTap={{ scale: 1.3 }}
            animate={a.counted ? { scale: [1, 1.3, 0.8], rotate: [0, 10, -10, 0] } : { y: [0, -5, 0] }}
            transition={a.counted ? { duration: 0.3 } : { duration: 2 + a.id * 0.3, repeat: Infinity }}
          >
            {a.animal}
          </motion.button>
        ))}

        <AnimatePresence>
          {showCelebration && (
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="text-center">
                <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: 3 }}
                  className="text-6xl mb-2">🎉</motion.div>
                <p className="font-display font-bold text-2xl text-candy-sunshine">Great Counting!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
