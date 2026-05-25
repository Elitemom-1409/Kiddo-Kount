import Link from 'next/link';
import { blogs } from '@/data/blogs';
import AdUnit from '@/components/AdUnit';

export const metadata = {
  title: 'Math & STEM Learning Blog for Toddlers',
  description: 'Read our comprehensive guides and articles on teaching math and STEM to preschoolers and toddlers using interactive strategies.',
};

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-white">
      <h1 className="text-5xl font-fredoka font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
        Kiddo Kount Blog
      </h1>
      <p className="text-center text-lg mb-12">Expert advice on early childhood STEM education, math skills, and interactive learning.</p>
      
      <div className="grid gap-8">
        {blogs.map((blog, i) => (
          <div key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="block p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
              <p className="text-white">{blog.description}</p>
            </Link>
            {i % 3 === 2 && <AdUnit />}
          </div>
        ))}
      </div>
    </div>
  );
}
