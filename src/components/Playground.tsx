'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import CountingForest from './games/CountingForest';
import ShapeSorter from './games/ShapeSorter';
import NumberTracing from './games/NumberTracing';
import PatternPop from './games/PatternPop';
import SaveTheEgg from './games/SaveTheEgg';

const games = [
  { id: 'counting', title: 'Counting Forest', icon: '🌲', desc: 'Tap animals to count them!', color: 'from-candy-leaf/30 to-candy-leaf/10', ageRange: '2-4', concept: 'Counting' },
  { id: 'shapes', title: 'Shape Sorter', icon: '🚀', desc: 'Sort shapes into the spaceship!', color: 'from-candy-cyan/30 to-candy-cyan/10', ageRange: '2-5', concept: 'Shapes' },
  { id: 'tracing', title: 'Number Tracing', icon: '✏️', desc: 'Trace numbers with your finger!', color: 'from-candy-sunshine/30 to-candy-sunshine/10', ageRange: '3-5', concept: 'Writing' },
  { id: 'pattern', title: 'Pattern Pop', icon: '🎵', desc: 'What comes next in the sequence?', color: 'from-candy-bubblegum/30 to-candy-bubblegum/10', ageRange: '3-5', concept: 'Patterns' },
  { id: 'egg', title: 'Save the Egg', icon: '🥚', desc: 'Use shapes to protect the egg!', color: 'from-candy-cherry/30 to-candy-cherry/10', ageRange: '3-5', concept: 'Geometry' },
];

const gameComponents: Record<string, React.ComponentType> = {
  counting: CountingForest,
  shapes: ShapeSorter,
  tracing: NumberTracing,
  pattern: PatternPop,
  egg: SaveTheEgg,
};

export default function Playground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const ActiveGameComponent = activeGame ? gameComponents[activeGame] : null;

  return (
    <section id="playground" className="relative py-24 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-purple/15 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-candy-leaf font-display font-semibold text-sm tracking-widest uppercase mb-4">🎮 Interactive Playground 🎮</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Play & <span className="text-candy-bubblegum">Learn</span></h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">Fun math games designed for tiny hands and curious minds. Touch-friendly, no reading required!</p>
        </motion.div>

        {!activeGame ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {games.map((game, i) => (
              <motion.button key={game.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }} onClick={() => setActiveGame(game.id)}
                className={`glass-card p-8 text-center bg-gradient-to-br ${game.color} hover:scale-105 transition-transform`} id={`game-${game.id}`}>
                <div className="text-5xl mb-4">{game.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{game.title}</h3>
                <p className="font-body text-sm text-white/60 mb-3">{game.desc}</p>
                <div className="flex justify-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 font-display">Ages {game.ageRange}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 font-display">{game.concept}</span>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <div>
            <button onClick={() => setActiveGame(null)} className="btn-secondary mb-6" id="game-back">← Back to Games</button>
            <div className="glass-card p-6 md:p-8">
              {ActiveGameComponent && <ActiveGameComponent />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
