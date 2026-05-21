'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const methodologies = [
  {
    icon: '🧠',
    title: 'Piaget\'s Stages',
    description: 'Activities designed for the pre-operational stage (2-7 years), using symbolic play and concrete examples to build mathematical thinking.',
    color: 'from-candy-cherry/20 to-candy-cherry/5',
    borderColor: 'border-candy-cherry/30',
  },
  {
    icon: '📐',
    title: 'Vygotsky\'s ZPD',
    description: 'Each activity scaffolds learning within your child\'s Zone of Proximal Development — challenging enough to grow, simple enough to succeed.',
    color: 'from-candy-cyan/20 to-candy-cyan/5',
    borderColor: 'border-candy-cyan/30',
  },
  {
    icon: '🌱',
    title: 'Montessori Method',
    description: 'Self-paced exploration with hands-on materials. Children learn through discovery, not drill. Every game is a "prepared environment."',
    color: 'from-candy-leaf/20 to-candy-leaf/5',
    borderColor: 'border-candy-leaf/30',
  },
  {
    icon: '🔬',
    title: 'STEM Integration',
    description: 'Math isn\'t isolated — it connects to science, engineering, and technology through storytelling and problem-solving adventures with Ralph.',
    color: 'from-candy-sunshine/20 to-candy-sunshine/5',
    borderColor: 'border-candy-sunshine/30',
  },
];

const stats = [
  { number: '500+', label: 'Video Lessons', icon: '🎬' },
  { number: '50K+', label: 'Happy Kids', icon: '👶' },
  { number: '190', label: 'Countries', icon: '🌍' },
  { number: '100%', label: 'Free Content', icon: '💛' },
];

const trustBadges = [
  { icon: '🛡️', label: 'COPPA Compliant', desc: 'Fully compliant with children\'s privacy laws' },
  { icon: '🔒', label: 'Ad-Safe Environment', desc: 'Only kid-friendly, vetted advertisements' },
  { icon: '🎓', label: 'Educator Reviewed', desc: 'Content reviewed by early childhood specialists' },
  { icon: '❤️', label: 'Parent Approved', desc: 'Designed with parents and for parents' },
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  return (
    <span className="font-display font-bold text-3xl md:text-4xl candy-text">
      {target}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-violet/10 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-candy-sunshine font-display font-semibold text-sm tracking-widest uppercase mb-4">
            ✨ Our Mission ✨
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Making Math{' '}
            <span className="text-candy-cyan">Magical</span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Kiddo Kount transforms early math education into a cosmic adventure. Built on proven child psychology principles, 
            every video and game is designed to spark joy and lasting understanding.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <AnimatedCounter target={stat.number} />
              <p className="font-body text-sm text-white/60 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Methodology cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {methodologies.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className={`glass-card p-8 bg-gradient-to-br ${method.color} border ${method.borderColor}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{method.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-white">
                    {method.title}
                  </h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 md:p-12 mb-16 text-center"
        >
          <span className="text-5xl mb-4 block">👨‍🏫</span>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Why We Started Kiddo Kount
          </h3>
          <p className="font-body text-white/70 max-w-3xl mx-auto leading-relaxed">
            We believe every child deserves to fall in love with numbers. Kiddo Kount was born from a simple observation: 
            toddlers are natural mathematicians — they count steps, sort toys, and find patterns everywhere. 
            We just needed to meet them in their world — a world of color, wonder, and play. 
            With Ralph as their cosmic guide, children don&apos;t just learn to count — they learn to think.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-display font-semibold text-xl text-center mb-8 text-white/80">
            Parent Trust Badges
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="glass-card p-5 text-center hover:border-candy-leaf/40"
              >
                <span className="text-3xl mb-2 block">{badge.icon}</span>
                <h4 className="font-display font-semibold text-sm mb-1">{badge.label}</h4>
                <p className="font-body text-xs text-white/50">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
