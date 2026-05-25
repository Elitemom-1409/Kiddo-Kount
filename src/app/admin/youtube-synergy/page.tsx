'use client';
import { useState } from 'react';
import { blogs } from '@/data/blogs';

export default function YouTubeSynergyPage() {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]?.slug || '');
  
  const activeBlog = blogs.find(b => b.slug === selectedBlog);

  const generateDescription = () => {
    if (!activeBlog) return '';
    return `In this fun Kiddo Kount cosmic adventure, Ralph teaches your toddler amazing math and STEM concepts! 🌟🚀

📚 Dive deeper into this topic on our blog: 
https://kiddokount.com/blog/${activeBlog.slug}

${activeBlog.description}

✨ Make sure to Subscribe for more Disney-quality toddler learning!
#KiddoKount #ToddlerMath #PreschoolSTEM #RalphTheSpaceKid #KidsLearning`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-white">
      <h1 className="text-4xl font-fredoka font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        YouTube Synergy Engine
      </h1>
      <p className="mb-8 text-gray-300">
        Select the blog post that relates to your newest YouTube video. This tool will generate an SEO-optimized YouTube description containing the perfect backlink to funnel traffic to your website.
      </p>

      <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-8">
        <label className="block text-sm font-bold mb-2">Target Blog Post for Backlink:</label>
        <select 
          className="w-full bg-gray-800 border border-gray-600 text-white rounded p-3 mb-6"
          value={selectedBlog}
          onChange={(e) => setSelectedBlog(e.target.value)}
        >
          {blogs.map(b => (
            <option key={b.slug} value={b.slug}>{b.title}</option>
          ))}
        </select>

        <label className="block text-sm font-bold mb-2">Generated YouTube Description:</label>
        <textarea 
          className="w-full bg-gray-900 border border-gray-600 text-green-400 rounded p-4 h-64 font-mono text-sm"
          readOnly
          value={generateDescription()}
        />
        <button 
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
          onClick={() => navigator.clipboard.writeText(generateDescription())}
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}
