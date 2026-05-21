'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const floatingElements = [
  { emoji: '1', color: 'text-candy-cherry', size: 'text-6xl', x: '10%', y: '20%', delay: 0 },
  { emoji: '2', color: 'text-candy-sunshine', size: 'text-5xl', x: '85%', y: '15%', delay: 0.3 },
  { emoji: '3', color: 'text-candy-leaf', size: 'text-7xl', x: '75%', y: '70%', delay: 0.6 },
  { emoji: '⭐', color: 'text-candy-sunshine', size: 'text-4xl', x: '15%', y: '65%', delay: 0.9 },
  { emoji: '🌟', color: '', size: 'text-3xl', x: '90%', y: '45%', delay: 1.2 },
  { emoji: '4', color: 'text-candy-cyan', size: 'text-5xl', x: '5%', y: '80%', delay: 0.4 },
  { emoji: '5', color: 'text-candy-bubblegum', size: 'text-6xl', x: '60%', y: '10%', delay: 0.7 },
  { emoji: '😊', color: '', size: 'text-3xl', x: '30%', y: '75%', delay: 1.0 },
  { emoji: '🚀', color: '', size: 'text-4xl', x: '50%', y: '85%', delay: 1.5 },
  { emoji: '🌈', color: '', size: 'text-3xl', x: '40%', y: '30%', delay: 0.2 },
  { emoji: '➕', color: 'text-candy-leaf', size: 'text-3xl', x: '70%', y: '40%', delay: 0.8 },
  { emoji: '△', color: 'text-candy-bubblegum', size: 'text-4xl', x: '20%', y: '45%', delay: 1.1 },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => setMounted(true), []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Nebula gradient overlays - parallax layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-br from-cosmic-deep via-cosmic-indigo to-nebula-violet"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-nebula-violet/30 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-candy-cherry/20 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-candy-cyan/20 blur-[80px]" />
      </motion.div>

      {/* Floating numbers and elements */}
      {mounted && (
        <motion.div style={{ y: y3, opacity }} className="absolute inset-0 pointer-events-none">
          {floatingElements.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: el.delay + 0.5, duration: 0.8, ease: 'backOut' }}
              className={`absolute ${el.size} ${el.color} font-display font-bold select-none`}
              style={{ left: el.x, top: el.y }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {el.emoji}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Main hero content */}
      <motion.div
        style={{ y: y1, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Star mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'backOut', delay: 0.2 }}
          className="mb-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-7xl md:text-8xl"
          >
            <div className="relative">
              <span className="drop-shadow-[0_0_30px_rgba(255,214,10,0.6)]">⭐</span>
              {/* Waving hand next to star */}
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                className="absolute -right-4 -top-2 text-4xl"
              >
                👋
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Title - candy colored letters */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tight"
        >
          <span className="inline-block">
            {['K','i','d','d','o'].map((letter, i) => (
              <motion.span
                key={`kiddo-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: 'backOut' }}
                className={`inline-block ${
                  ['text-candy-cherry', 'text-candy-sunshine', 'text-candy-leaf', 'text-candy-cyan', 'text-candy-bubblegum'][i]
                }`}
                style={{
                  textShadow: `0 4px 0 rgba(0,0,0,0.2), 0 0 40px ${
                    ['rgba(255,77,109,0.4)', 'rgba(255,214,10,0.4)', 'rgba(6,214,160,0.4)', 'rgba(76,201,240,0.4)', 'rgba(255,112,166,0.4)'][i]
                  }`,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <span className="inline-block ml-3 md:ml-5">
            {['K','o','u','n','t'].map((letter, i) => (
              <motion.span
                key={`kount-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease: 'backOut' }}
                className={`inline-block ${
                  ['text-candy-sunshine', 'text-candy-leaf', 'text-candy-cherry', 'text-candy-cyan', 'text-candy-bubblegum'][i]
                }`}
                style={{
                  textShadow: `0 4px 0 rgba(0,0,0,0.2), 0 0 40px ${
                    ['rgba(255,214,10,0.4)', 'rgba(6,214,160,0.4)', 'rgba(255,77,109,0.4)', 'rgba(76,201,240,0.4)', 'rgba(255,112,166,0.4)'][i]
                  }`,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <span className="inline-block bg-candy-cherry/90 text-white font-display font-semibold text-sm md:text-base px-6 py-2 rounded-full mb-6 shadow-lg">
            ✨ CARTOON CHANNEL ✨
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="font-body text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
        >
          Where tiny minds count big! 🌟 Join Ralph on a cosmic adventure through numbers, shapes, and STEM fun.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#videos" className="btn-primary text-lg px-8 py-4" id="hero-cta-start">
            Start Counting! 🚀
          </a>
          <a href="#playground" className="btn-secondary text-lg px-8 py-4" id="hero-cta-play">
            Play Games 🎮
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-xs font-body"
        >
          <span className="flex items-center gap-1.5">🛡️ COPPA Compliant</span>
          <span className="flex items-center gap-1.5">✅ Ad-Safe</span>
          <span className="flex items-center gap-1.5">🎓 Educator Reviewed</span>
          <span className="flex items-center gap-1.5">👶 Ages 2-5</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs font-body">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
