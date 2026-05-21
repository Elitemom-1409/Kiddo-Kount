'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const socials = [
  { name: 'YouTube', icon: '▶️', color: 'from-red-600/30 to-red-600/10', borderColor: 'hover:border-red-500/50', url: 'https://youtube.com/@kiddokount', desc: 'Watch 500+ free math videos', followers: 'Subscribe' },
  { name: 'Instagram', icon: '📸', color: 'from-pink-500/30 to-purple-600/10', borderColor: 'hover:border-pink-500/50', url: 'https://instagram.com/kiddokount', desc: 'Behind-the-scenes & tips', followers: 'Follow' },
  { name: 'TikTok', icon: '🎵', color: 'from-cyan-400/30 to-pink-500/10', borderColor: 'hover:border-cyan-400/50', url: 'https://tiktok.com/@kiddokount', desc: 'Quick math fun clips', followers: 'Follow' },
  { name: 'Facebook', icon: '👥', color: 'from-blue-600/30 to-blue-600/10', borderColor: 'hover:border-blue-500/50', url: 'https://facebook.com/kiddokount', desc: 'Join our parent community', followers: 'Like' },
  { name: 'Pinterest', icon: '📌', color: 'from-red-500/30 to-red-500/10', borderColor: 'hover:border-red-400/50', url: 'https://pinterest.com/kiddokount', desc: 'Printable activities & ideas', followers: 'Follow' },
];

export default function SocialsHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="socials" className="relative py-24 md:py-32" ref={ref}>
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <span className="inline-block text-candy-sunshine font-display font-semibold text-sm tracking-widest uppercase mb-4">🌟 Stay Connected 🌟</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Join the <span className="text-candy-bubblegum">Cosmic</span> Community</h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">Follow us for daily math fun, parenting tips, and new content announcements!</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socials.map((social, i) => (
            <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.1 }}
              className={`glass-card p-6 bg-gradient-to-br ${social.color} ${social.borderColor} transition-all group text-center`}
              id={`social-${social.name.toLowerCase()}`}>
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{social.icon}</div>
              <h3 className="font-display font-bold text-lg mb-1">{social.name}</h3>
              <p className="font-body text-xs text-white/50 mb-3">{social.desc}</p>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-display font-semibold group-hover:bg-white/20 transition-colors">{social.followers}</span>
            </motion.a>
          ))}
        </div>

        {/* Latest video embed placeholder */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="mt-12 max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-xl text-center mb-6">🎬 Latest Video</h3>
          <div className="glass-card overflow-hidden aspect-video flex items-center justify-center bg-gradient-to-br from-nebula-violet/30 to-cosmic-indigo">
            <div className="text-center">
              <div className="text-5xl mb-3">▶️</div>
              <p className="font-display text-white/50">Latest YouTube video will appear here</p>
              <p className="font-body text-xs text-white/30 mt-1">Embed your YouTube channel&apos;s latest upload</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
