import SEOCharts from '@/components/SEOCharts';

export const metadata = {
  title: 'Interactive SEO Optimization Report',
  robots: { index: false, follow: false } // Hidden from search engines
};

export default function SEOReportPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 text-white">
      <h1 className="text-5xl font-fredoka font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500">
        Kiddo Kount Optimization Report
      </h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        This interactive dashboard visualizes the extreme SEO, marketing, and monetization upgrades implemented to reach the 10,000+ clicks goal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
          <h3 className="text-gray-300 text-lg uppercase tracking-wider mb-2">Hreflang Tags (Countries)</h3>
          <p className="text-5xl font-bold text-blue-400">190+</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
          <h3 className="text-gray-300 text-lg uppercase tracking-wider mb-2">Contextual Blogs</h3>
          <p className="text-5xl font-bold text-green-400">100</p>
          <p className="text-sm mt-2 text-gray-400">(10 Seed + 90 Auto-gen)</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
          <h3 className="text-gray-300 text-lg uppercase tracking-wider mb-2">Schema Types (GEO)</h3>
          <p className="text-5xl font-bold text-pink-400">4</p>
          <p className="text-sm mt-2 text-gray-400">(Org, WebSite, FAQ, Article)</p>
        </div>
      </div>

      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-4">Optimization Metrics</h2>
        <SEOCharts />
      </div>
    </div>
  );
}
