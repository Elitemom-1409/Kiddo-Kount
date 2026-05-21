'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ageOptions = [
  { value: '2', label: '2 years old', emoji: '🍼' },
  { value: '3', label: '3 years old', emoji: '🧩' },
  { value: '4', label: '4 years old', emoji: '🎲' },
  { value: '5', label: '5 years old', emoji: '🎓' },
];

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [email, setEmail] = useState('');
  const [childAge, setChildAge] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !email.includes('@')) { setError('Please enter a valid email'); return; }
    if (!childAge) { setError('Please select your child\'s age'); return; }
    // TODO: Connect to Listmonk API in Phase 2
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="relative py-24 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-candy-bubblegum/8 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-br from-candy-bubblegum/10 to-nebula-violet/10">
            {!submitted ? (
              <>
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ type: 'spring', delay: 0.2 }} className="text-5xl mb-4">✉️</motion.div>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
                  Join the <span className="text-candy-bubblegum">Cosmic</span> Newsletter
                </h2>
                <p className="font-body text-white/60 mb-8">Get weekly math activities, new video alerts, and printable worksheets — all tailored to your child&apos;s age!</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="glass-card-static p-1.5 flex flex-col sm:flex-row gap-2">
                    <input type="email" placeholder="parent@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-white font-body px-4 py-3 placeholder:text-white/30" id="newsletter-email" />
                    <button type="submit" className="btn-primary !rounded-xl whitespace-nowrap" id="newsletter-submit">Subscribe ✨</button>
                  </div>

                  <div>
                    <p className="font-display text-sm text-white/60 mb-3">My child is:</p>
                    <div className="flex justify-center gap-2 flex-wrap">
                      {ageOptions.map((opt) => (
                        <button key={opt.value} type="button" onClick={() => setChildAge(opt.value)}
                          className={`px-4 py-2 rounded-full font-display text-xs font-medium transition-all ${
                            childAge === opt.value ? 'bg-candy-bubblegum text-white shadow-glow-bubblegum' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                          {opt.emoji} {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && <p className="text-candy-cherry font-body text-sm">{error}</p>}
                </form>

                <p className="font-body text-xs text-white/30 mt-6">Double opt-in. Unsubscribe anytime. We never share your data. 🔒</p>
              </>
            ) : (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-2xl mb-2 text-candy-leaf">You&apos;re In!</h3>
                <p className="font-body text-white/60">Check your email for a confirmation link. Welcome to the Kiddo Kount family! 🚀</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
