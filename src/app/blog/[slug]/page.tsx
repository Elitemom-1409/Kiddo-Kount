import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import AdUnit from '@/components/AdUnit';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return {};
  
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      publishedTime: blog.date,
    }
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const currentIndex = blogs.findIndex(b => b.slug === params.slug);
  const blog = blogs[currentIndex];
  
  if (!blog) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "datePublished": blog.date,
    "author": [{
        "@type": "Organization",
        "name": "Kiddo Kount",
        "url": "https://kiddokount.com"
      }]
  };

  // Internal Backlink Logic
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto px-4 py-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="text-blue-300 hover:underline mb-8 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
        {blog.title}
      </h1>
      <time className="text-gray-300 block mb-8">{new Date(blog.date).toLocaleDateString()}</time>
      
      <div className="prose prose-invert lg:prose-xl max-w-none mb-12">
        <p className="text-xl leading-relaxed">{blog.content}</p>
      </div>

      <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Watch Ralph in Action! 🚀</h3>
        <p className="mb-6 text-gray-300">See these concepts come to life in our latest YouTube adventure.</p>
        {/* Reciprocal YouTube Synergy Embed */}
        <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden bg-black flex items-center justify-center border-4 border-yellow-400">
          <p className="text-gray-500 italic">YouTube Video Embed Placeholder (Insert specific YouTube ID)</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/20 pt-8">
        <h3 className="text-2xl font-bold mb-6">Read More (Internal Backlinks)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevBlog && (
            <Link href={`/blog/${prevBlog.slug}`} className="p-4 bg-blue-900/40 rounded-xl hover:bg-blue-800/60 transition-colors">
              <span className="block text-sm text-blue-300 mb-1">Previous Article</span>
              <span className="font-bold">{prevBlog.title}</span>
            </Link>
          )}
          {nextBlog && (
            <Link href={`/blog/${nextBlog.slug}`} className="p-4 bg-purple-900/40 rounded-xl hover:bg-purple-800/60 transition-colors text-right md:ml-auto w-full">
              <span className="block text-sm text-purple-300 mb-1">Next Article</span>
              <span className="font-bold">{nextBlog.title}</span>
            </Link>
          )}
        </div>
      </div>

      <div className="mt-12">
        <AdUnit />
      </div>
    </article>
  );
}
