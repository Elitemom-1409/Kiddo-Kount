'use client';
import { useState } from 'react';
import { blogs } from '@/data/blogs';

export default function BacklinkOutreachPage() {
  const [targetName, setTargetName] = useState('Parenting Blog Editor');
  const [targetType, setTargetType] = useState('mommy_blog');
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]?.slug || '');

  const activeBlog = blogs.find(b => b.slug === selectedBlog);

  const generateEmail = () => {
    if (!activeBlog) return '';
    
    if (targetType === 'preschool') {
      return `Subject: Free STEM & Math Resource for Your Preschoolers

Hi ${targetName},

I was looking at your school's curriculum and absolutely love your approach to early childhood development! 

I run Kiddo Kount, an educational platform that uses high-quality, Disney-style animations to teach toddlers and preschoolers foundational math and STEM skills completely for free. 

I just published a comprehensive guide that I think your parents would find incredibly useful for at-home learning:
"${activeBlog.title}" (https://kiddokount.com/blog/${activeBlog.slug})

If you have a resources page for parents, it would be an honor if you included a link to our free platform. It's completely ad-safe for kids.

Best regards,
The Kiddo Kount Team`;
    }

    return `Subject: Collaboration / Loved your recent post on early learning!

Hi ${targetName},

I've been a long-time reader of your blog and I absolutely love the practical parenting advice you share. 

I run Kiddo Kount, an educational platform designed to teach toddlers math using interactive STEM games and Pixar-quality animations. I recently published an in-depth article that aligns perfectly with your audience:
"${activeBlog.title}" (https://kiddokount.com/blog/${activeBlog.slug})

If you are ever updating your lists of educational resources for toddlers, I would be thrilled if you considered linking to it. Keep up the amazing work!

Best regards,
The Kiddo Kount Team`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-white">
      <h1 className="text-4xl font-fredoka font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
        Backlink Outreach Automator
      </h1>
      <p className="mb-8 text-gray-300">
        Generate personalized, high-converting email pitches to secure external backlinks from authoritative parenting blogs and educational institutions.
      </p>

      <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2">Target Name (or Role):</label>
          <input 
            type="text"
            className="w-full bg-gray-800 border border-gray-600 text-white rounded p-3 mb-4"
            value={targetName}
            onChange={(e) => setTargetName(e.target.value)}
          />
          
          <label className="block text-sm font-bold mb-2">Target Type:</label>
          <select 
            className="w-full bg-gray-800 border border-gray-600 text-white rounded p-3 mb-4"
            value={targetType}
            onChange={(e) => setTargetType(e.target.value)}
          >
            <option value="mommy_blog">Parenting / Mommy Blog</option>
            <option value="preschool">Preschool / Educator</option>
          </select>

          <label className="block text-sm font-bold mb-2">The Asset You are Pitching (Link):</label>
          <select 
            className="w-full bg-gray-800 border border-gray-600 text-white rounded p-3"
            value={selectedBlog}
            onChange={(e) => setSelectedBlog(e.target.value)}
          >
            {blogs.map(b => (
              <option key={b.slug} value={b.slug}>{b.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Generated Pitch Email:</label>
          <textarea 
            className="w-full bg-gray-900 border border-gray-600 text-blue-300 rounded p-4 h-64 font-mono text-sm"
            readOnly
            value={generateEmail()}
          />
          <button 
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            onClick={() => navigator.clipboard.writeText(generateEmail())}
          >
            Copy Pitch to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
}
