'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const curriculum = [
  { age: '2-3', skills: ['Counting 1-10', 'Basic shapes (circle, square, triangle)', 'Size comparison (big/small)', 'Color recognition'], icon: '🍼' },
  { age: '3-4', skills: ['Counting 1-20', 'Pattern recognition', 'Sorting and categorizing', 'Spatial awareness (up/down/beside)'], icon: '🧩' },
  { age: '4-5', skills: ['Counting 1-50', 'Basic addition/subtraction', 'Shape properties', 'Number writing', 'Skip counting'], icon: '🎓' },
];

const worksheets = [
  { title: 'Counting Stars Worksheet', desc: 'Count and color the stars', concept: 'Counting', icon: '⭐' },
  { title: 'Shape Match Activity', desc: 'Draw lines to match shapes', concept: 'Shapes', icon: '🔺' },
  { title: 'Number Coloring Page', desc: 'Color by number cosmic scene', concept: 'Numbers', icon: '🎨' },
  { title: 'Pattern Completion Sheet', desc: 'Complete the patterns', concept: 'Patterns', icon: '🔗' },
  { title: 'Counting Objects Worksheet', desc: 'Count objects and write the number', concept: 'Counting', icon: '📝' },
  { title: 'Addition Apples', desc: 'Simple addition with apple pictures', concept: 'Addition', icon: '🍎' },
];

const faqData = [
  { q: 'What age is Kiddo Kount designed for?', a: 'Kiddo Kount is designed for toddlers and preschoolers ages 2-5. Content is labeled by specific age range to help parents find the right material.' },
  { q: 'Is the content free?', a: 'Yes! All YouTube videos and website games are completely free. We offer optional merchandise for purchase.' },
  { q: 'Is this COPPA compliant?', a: 'Absolutely. We do not collect personal data from children, all advertisements are kid-safe, and we follow COPPA, GDPR, and CCPA guidelines.' },
  { q: 'How does the video interlacing work?', a: 'Our smart algorithm ensures your child sees a varied mix of math concepts in a non-repeating order, preventing content fatigue and maximizing learning.' },
  { q: 'Can I track my child\'s progress?', a: 'Progress tracking features are coming soon! You\'ll be able to see which videos and games your child has engaged with.' },
];

export default function ParentZone() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="parents" className="relative py-24 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-candy-cyan/5 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <span className="inline-block text-candy-cyan font-display font-semibold text-sm tracking-widest uppercase mb-4">👨‍👩‍👧 Parent Zone 👨‍👩‍👧</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">For <span className="text-candy-leaf">Parents</span></h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">Resources, progress tracking, and printable worksheets to support your child&apos;s learning journey.</p>
        </motion.div>

        {/* Progress Tracker Preview */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="glass-card p-8 mb-8">
          <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">📊 Progress Tracker <span className="text-xs px-2 py-1 bg-candy-sunshine/20 text-candy-sunshine rounded-full">Coming Soon</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ label: 'Videos Watched', value: '—', icon: '🎬' }, { label: 'Games Played', value: '—', icon: '🎮' }, { label: 'Skills Mastered', value: '—', icon: '⭐' }, { label: 'Streak Days', value: '—', icon: '🔥' }].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-4 text-center">
                <span className="text-2xl block mb-1">{stat.icon}</span>
                <p className="font-numerals font-bold text-2xl text-white/30">{stat.value}</p>
                <p className="font-body text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Curriculum Guide */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="mb-8">
          <h3 className="font-display font-bold text-xl mb-6 text-center">📚 Curriculum Alignment</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {curriculum.map((stage, i) => (
              <motion.div key={stage.age} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card p-6">
                <div className="text-3xl mb-3">{stage.icon}</div>
                <h4 className="font-display font-bold text-lg text-candy-cyan mb-3">Ages {stage.age}</h4>
                <ul className="space-y-2">
                  {stage.skills.map((skill) => (
                    <li key={skill} className="font-body text-sm text-white/70 flex items-start gap-2">
                      <span className="text-candy-leaf mt-0.5">✓</span>{skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Printable Worksheets */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mb-8">
          <h3 className="font-display font-bold text-xl mb-6 text-center">📄 Printable Worksheets</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {worksheets.map((ws) => (
              <div key={ws.title} className="glass-card p-5 hover:border-candy-cyan/40 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">{ws.icon}</div>
                <h4 className="font-display font-semibold text-sm mb-1">{ws.title}</h4>
                <p className="font-body text-xs text-white/50">{ws.desc}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-candy-cyan/10 text-candy-cyan font-display">{ws.concept}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
          <h3 className="font-display font-bold text-xl mb-6 text-center">❓ Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq) => (
              <details key={faq.q} className="glass-card-static group">
                <summary className="p-5 cursor-pointer font-display font-semibold text-sm hover:text-candy-cyan transition-colors list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="font-body text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.div>
      </div>

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      }) }} />
    </section>
  );
}
