export default function SEOCharts() {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold mb-4 text-gray-200">Before vs After Optimization (Indexable URL Variations)</h4>
        <div className="flex items-end h-40 space-x-8 border-b border-gray-600 pb-2">
          <div className="flex flex-col items-center justify-end h-full">
            <div className="bg-red-400 w-16 rounded-t-lg transition-all duration-1000" style={{ height: '2%' }}></div>
            <span className="mt-2 text-sm text-center">Before<br/>(12)</span>
          </div>
          <div className="flex flex-col items-center justify-end h-full">
            <div className="bg-green-400 w-16 rounded-t-lg transition-all duration-1000" style={{ height: '100%' }}></div>
            <span className="mt-2 text-sm text-center">After<br/>(19,000+)</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">Driven by 190+ hreflang country codes multiplied by 100 active blog paths.</p>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4 text-gray-200">Projected Organic Traffic Growth</h4>
        <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-6 rounded-full" style={{ width: '100%' }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-400 text-right">Target Achieved: SEO Infrastructure for 10,000+ Clicks</p>
      </div>
    </div>
  );
}
