import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiddokount.com"),
  title: {
    default: "Kiddo Kount — Where Tiny Minds Count Big | Math & STEM for Kids",
    template: "%s | Kiddo Kount",
  },
  description:
    "Kiddo Kount is a fun, safe, and educational platform teaching math and STEM to toddlers and preschoolers (ages 2-5) through interactive games, videos, and activities. Join Ralph on a cosmic counting adventure!",
  keywords: [
    "kids math", "toddler learning", "preschool STEM", "counting for kids",
    "math games", "educational videos", "learn to count", "kids education",
    "preschool math", "STEM for toddlers", "Kiddo Kount", "Ralph",
  ],
  authors: [{ name: "Kiddo Kount" }],
  creator: "Kiddo Kount",
  publisher: "Kiddo Kount",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kiddokount.com",
    siteName: "Kiddo Kount",
    title: "Kiddo Kount — Where Tiny Minds Count Big",
    description: "Fun math & STEM learning for toddlers and preschoolers. Interactive games, videos, and cosmic adventures with Ralph!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kiddo Kount - Cosmic Playground for Young Learners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiddo Kount — Where Tiny Minds Count Big",
    description: "Fun math & STEM learning for toddlers and preschoolers.",
    images: ["/og-image.png"],
    creator: "@kiddokount",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kiddokount.com",
    languages: {
      "en": "https://kiddokount.com",
      "es": "https://kiddokount.com/es",
      "hi": "https://kiddokount.com/hi",
      "zh": "https://kiddokount.com/zh",
      "ar": "https://kiddokount.com/ar",
      "pt": "https://kiddokount.com/pt",
      "fr": "https://kiddokount.com/fr",
      "de": "https://kiddokount.com/de",
      "ja": "https://kiddokount.com/ja",
      "ru": "https://kiddokount.com/ru",
      "id": "https://kiddokount.com/id",
      "bn": "https://kiddokount.com/bn",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kiddo Kount",
  alternateName: "Kiddo Kount Cartoon Channel",
  url: "https://kiddokount.com",
  logo: "https://kiddokount.com/logo.png",
  description: "Educational platform teaching math and STEM to toddlers and preschoolers through interactive games and videos.",
  sameAs: [
    "https://youtube.com/@kiddokount",
    "https://instagram.com/kiddokount",
    "https://tiktok.com/@kiddokount",
    "https://facebook.com/kiddokount",
    "https://pinterest.com/kiddokount",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@kiddokount.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Fredoka:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <StarField />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
