'use client';

const footerLinks = {
  explore: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Videos', href: '#videos' },
    { label: 'Games', href: '#playground' },
    { label: 'Shop', href: '#shop' },
  ],
  parents: [
    { label: 'Parent Zone', href: '#parents' },
    { label: 'Curriculum Guide', href: '#parents' },
    { label: 'Worksheets', href: '#parents' },
    { label: 'FAQ', href: '#parents' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'COPPA Compliance', href: '/coppa' },
    { label: 'GDPR Notice', href: '/gdpr' },
    { label: 'CCPA Notice', href: '/ccpa' },
  ],
  social: [
    { label: 'YouTube', href: 'https://youtube.com/@kiddokount', icon: '▶️' },
    { label: 'Instagram', href: 'https://instagram.com/kiddokount', icon: '📸' },
    { label: 'TikTok', href: 'https://tiktok.com/@kiddokount', icon: '🎵' },
    { label: 'Facebook', href: 'https://facebook.com/kiddokount', icon: '👥' },
    { label: 'Pinterest', href: 'https://pinterest.com/kiddokount', icon: '📌' },
  ],
};

const languages = [
  { code: 'en', label: 'English' }, { code: 'es', label: 'Español' }, { code: 'hi', label: 'हिन्दी' },
  { code: 'zh', label: '中文' }, { code: 'ar', label: 'العربية' }, { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' }, { code: 'de', label: 'Deutsch' }, { code: 'ja', label: '日本語' },
  { code: 'ru', label: 'Русский' }, { code: 'id', label: 'Indonesia' }, { code: 'bn', label: 'বাংলা' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-cosmic-deep/80 backdrop-blur-xl" id="footer">
      {/* Footer ad banner */}
      <div className="border-b border-white/5 py-3">
        <div className="section-container text-center">
          <div className="ad-label inline-flex mb-1"><span>🛡️</span><span>Ad</span></div>
          <div className="h-[60px] flex items-center justify-center text-white/15 text-xs font-body">Kid-safe footer advertisement space</div>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-lg mb-3">
              <span className="text-candy-cherry">K</span>
              <span className="text-candy-sunshine">i</span>
              <span className="text-candy-leaf">d</span>
              <span className="text-candy-cyan">d</span>
              <span className="text-candy-bubblegum">o</span>{' '}
              <span className="text-candy-sunshine">K</span>
              <span className="text-candy-leaf">o</span>
              <span className="text-candy-cherry">u</span>
              <span className="text-candy-cyan">n</span>
              <span className="text-candy-bubblegum">t</span>
            </div>
            <p className="font-body text-xs text-white/40 leading-relaxed mb-4">Where tiny minds count big. Math & STEM fun for ages 2-5.</p>
            <div className="flex gap-2">
              {footerLinks.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm hover:bg-white/15 transition-colors" aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white/80">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}><a href={link.href} className="font-body text-xs text-white/40 hover:text-white/80 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Parents */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white/80">Parents</h4>
            <ul className="space-y-2">
              {footerLinks.parents.map((link) => (
                <li key={link.label}><a href={link.href} className="font-body text-xs text-white/40 hover:text-white/80 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white/80">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}><a href={link.href} className="font-body text-xs text-white/40 hover:text-white/80 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white/80">🌍 Language</h4>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs font-body text-white/60 outline-none focus:border-candy-cyan/40" id="language-selector" defaultValue="en">
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-cosmic-deep text-white">{lang.label}</option>
              ))}
            </select>
            <p className="font-body text-[10px] text-white/20 mt-2">190 locales supported</p>
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body text-xs text-white/30 text-center md:text-left">
            <p>© {new Date().getFullYear()} Kiddo Kount. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for tiny learners everywhere.</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/30 font-body">
            <a href="mailto:hello@kiddokount.com" className="hover:text-white/60 transition-colors">hello@kiddokount.com</a>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">🛡️ COPPA · GDPR · CCPA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
