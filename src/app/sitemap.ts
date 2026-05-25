import { MetadataRoute } from 'next';
import { blogs } from '@/data/blogs';
import { videos } from '@/data/videos';

const locales = ['en', 'es', 'hi', 'zh', 'ar', 'pt', 'fr', 'de', 'ja', 'ru', 'id', 'bn'];
const baseUrl = 'https://kiddokount.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/about', '/videos', '/games', '/shop', '/parents', '/contact'];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}${l === 'en' ? '' : `/${l}`}${page}`])
        ),
      },
    }))
  );

  const videoEntries: MetadataRoute.Sitemap = videos.map((video) => ({
    url: `${baseUrl}/videos/${video.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map(blog => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...videoEntries, ...blogEntries];
}
