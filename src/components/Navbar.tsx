'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { href: '#hero', label: 'Home', icon: '🏠' },
  { href: '#about', label: 'About', icon: '💡' },
  { href: '#videos', label: 'Videos', icon: '🎬' },
  { href: '#playground', label: 'Play', icon: '🎮' },
  { href: '#shop', label: 'Shop', icon: '🛍️' },
  { href: '#parents', label: 'Parents', icon: '👨‍👩‍👧' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-cosmic-deep/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" id="nav-logo">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            ⭐
          </motion.span>
          <span className="font-display text-xl font-bold">
            <span className="text-candy-cherry">K</span>
            <span className="text-candy-sunshine">i</span>
            <span className="text-candy-leaf">d</span>
            <span className="text-candy-cyan">d</span>
            <span className="text-candy-bubblegum">o</span>
            <span className="text-white mx-1"> </span>
            <span className="text-candy-sunshine">K</span>
            <span className="text-candy-leaf">o</span>
            <span className="text-candy-cherry">u</span>
            <span className="text-candy-cyan">n</span>
            <span className="text-candy-bubblegum">t</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className="px-4 py-2 rounded-full font-body text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1.5"
            >
              <span className="text-base">{link.icon}</span>
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            id="nav-subscribe"
            className="ml-2 btn-primary !py-2 !px-5 !text-sm"
          >
            Subscribe ✨
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm"
          id="nav-mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={mobileOpen ? { rotate: 45 } : { rotate: 0 }}
            className="relative w-5 h-4 flex flex-col justify-between"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 bg-white rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white rounded-full origin-center"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cosmic-deep/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl font-body text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#newsletter"
                onClick={() => setMobileOpen(false)}
                className="mt-2 btn-primary text-center"
              >
                Subscribe ✨
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
