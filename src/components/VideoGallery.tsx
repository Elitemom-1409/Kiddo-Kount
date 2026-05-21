'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { videos, shuffleVideos, getSessionSeed, type Video } from '@/data/videos';

const mathFilters = ['All', 'Counting', 'Shapes', 'Patterns', 'Geometry', 'Addition', 'Subtraction'];
const ageFilters = ['All Ages', '2-3', '3-4', '4-5'];

const conceptColors: Record<string, string> = {
  'Counting': 'bg-candy-cherry/20 text-candy-cherry border-candy-cherry/30',
  'Shapes': 'bg-candy-cyan/20 text-candy-cyan border-candy-cyan/30',
  'Patterns': 'bg-candy-bubblegum/20 text-candy-bubblegum border-candy-bubblegum/30',
  'Geometry': 'bg-candy-leaf/20 text-candy-leaf border-candy-leaf/30',
  'Addition': 'bg-candy-sunshine/20 text-candy-sunshine border-candy-sunshine/30',
  'Subtraction': 'bg-nebula-violet/30 text-purple-300 border-purple-400/30',
  'Measurement': 'bg-candy-cherry/20 text-candy-cherry border-candy-cherry/30',
  'Logic': 'bg-candy-cyan/20 text-candy-cyan border-candy-cyan/30',
  'Sorting': 'bg-candy-leaf/20 text-candy-leaf border-candy-leaf/30',
};

function VideoCard({ video, index, onPlay }: { video: Video; index: number; onPlay: (v: Video) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="glass-card overflow-hidden group cursor-pointer" onClick={() => onPlay(video)} id={`video-card-${video.id}`}>
      <div className="relative aspect-video bg-gradient-to-br from-nebula-violet/40 to-cosmic-indigo overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center"><div className="text-6xl opacity-30">🎬</div></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
          <div className="w-16 h-16 rounded-full bg-candy-cherry flex items-center justify-center shadow-glow-cherry">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-body">{video.duration}</span>
        <span className="absolute top-2 left-2 bg-candy-cyan/90 text-cosmic-deep text-xs px-2 py-1 rounded-full font-display font-semibold">Ages {video.ageRange}</span>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-candy-cyan transition-colors">{video.title}</h3>
        <p className="font-body text-xs text-white/50 mb-3 line-clamp-2">{video.description}</p>
        <span className={`inline-block text-xs px-3 py-1 rounded-full border font-display font-medium ${conceptColors[video.mathConcept] || 'bg-white/10 text-white/60 border-white/20'}`}>{video.mathConcept}</span>
      </div>
    </motion.div>
  );
}

function AdSlot({ position }: { position: number }) {
  return (
    <div className="glass-card-static p-4 flex flex-col items-center justify-center min-h-[200px] opacity-60">
      <div className="ad-label mb-2"><span>🛡️</span><span>Ad</span></div>
      <div className="text-white/20 text-sm font-body text-center"><p>Kid-safe advertisement</p><p className="text-xs mt-1">Position #{position}</p></div>
    </div>
  );
}

export default function VideoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [ageFilter, setAgeFilter] = useState('All Ages');
  const [searchQuery, setSearchQuery] = useState('');
  const [shuffledVideos, setShuffledVideos] = useState<Video[]>([]);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => { setShuffledVideos(shuffleVideos(videos, getSessionSeed())); }, []);

  const filteredVideos = shuffledVideos.filter((v) => {
    const mc = activeFilter === 'All' || v.mathConcept === activeFilter;
    const ma = ageFilter === 'All Ages' || v.ageRange === ageFilter || v.ageRange === '2-5';
    const ms = !searchQuery || v.title.toLowerCase().includes(searchQuery.toLowerCase()) || v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return mc && ma && ms;
  });

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  const playNext = useCallback(() => {
    if (!activeVideo) return;
    const idx = shuffledVideos.findIndex((v) => v.id === activeVideo.id);
    setActiveVideo(shuffledVideos[(idx + 1) % shuffledVideos.length]);
  }, [activeVideo, shuffledVideos]);

  const renderCards = () => {
    const els: React.ReactNode[] = [];
    let adN = 0;
    visibleVideos.forEach((video, i) => {
      els.push(<VideoCard key={video.id} video={video} index={i} onPlay={setActiveVideo} />);
      if ((i + 1) % 6 === 0 && i < visibleVideos.length - 1) { adN++; els.push(<AdSlot key={`ad-${adN}`} position={adN} />); }
    });
    return els;
  };

  return (
    <section id="videos" className="relative py-24 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-indigo/30 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-candy-cherry font-display font-semibold text-sm tracking-widest uppercase mb-4">🎬 Video Library 🎬</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Learn with <span className="text-candy-sunshine">Ralph</span></h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">Over 500 videos coming soon! Each one is a mini cosmic adventure in math and STEM.</p>
        </motion.div>

        <div className="glass-card-static p-2 max-w-md mx-auto flex items-center gap-2 mb-6">
          <span className="pl-3 text-white/40">🔍</span>
          <input type="text" placeholder="Search videos..." value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(12); }}
            className="flex-1 bg-transparent border-none outline-none text-white font-body text-sm placeholder:text-white/30 py-2" id="video-search" />
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-2">
            {mathFilters.map((f) => (
              <button key={f} onClick={() => { setActiveFilter(f); setVisibleCount(12); }}
                className={`px-4 py-2 rounded-full font-display text-xs font-medium transition-all ${activeFilter === f ? 'bg-candy-cyan text-cosmic-deep shadow-glow-cyan' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>{f}</button>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {ageFilters.map((a) => (
              <button key={a} onClick={() => { setAgeFilter(a); setVisibleCount(12); }}
                className={`px-4 py-2 rounded-full font-display text-xs font-medium transition-all ${ageFilter === a ? 'bg-candy-bubblegum text-white shadow-glow-bubblegum' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>{a}</button>
            ))}
          </div>
        </div>

        <p className="text-center font-body text-sm text-white/40 mb-6">Showing {Math.min(visibleCount, filteredVideos.length)} of {filteredVideos.length} videos</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{renderCards()}</div>

        {visibleCount < filteredVideos.length && (
          <div className="text-center mt-8"><button onClick={() => setVisibleCount((p) => p + 12)} className="btn-secondary" id="load-more-videos">Load More Videos 📚</button></div>
        )}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16"><div className="text-6xl mb-4">🔭</div><p className="font-display text-xl text-white/60">No videos found</p></div>
        )}
      </div>

      {activeVideo && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="glass-card w-full max-w-4xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-cosmic-deep flex items-center justify-center">
              {activeVideo.youtubeId ? (
                <iframe src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`} className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={activeVideo.title} />
              ) : (
                <div className="text-center"><div className="text-6xl mb-4">🎬</div><p className="font-display text-xl text-white/60">Video Coming Soon!</p></div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">{activeVideo.title}</h3>
                  <p className="font-body text-sm text-white/60">{activeVideo.description}</p>
                  <div className="flex gap-2 mt-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-candy-cyan/20 text-candy-cyan font-display">Ages {activeVideo.ageRange}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-candy-leaf/20 text-candy-leaf font-display">{activeVideo.mathConcept}</span>
                  </div>
                </div>
                <button onClick={() => setActiveVideo(null)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 flex-shrink-0" aria-label="Close">✕</button>
              </div>
              <button onClick={playNext} className="btn-secondary mt-4 w-full">Next Video ⏭️</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
