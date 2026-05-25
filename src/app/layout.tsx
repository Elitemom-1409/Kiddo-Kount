import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnalyticsHub from "@/components/AnalyticsHub";
import Chatbot from "@/components/Chatbot";
import Script from "next/script";

// Generate massive hreflang map for 190 countries/locales
const locales = [
  "af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "ny", "zh", "co", "hr", "cs", "da", "nl",
  "en", "eo", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "iw", "hi", "hmn", "hu", "is",
  "ig", "id", "ga", "it", "ja", "jw", "kn", "kk", "km", "rw", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg",
  "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "or", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr",
  "st", "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tg", "ta", "tt", "te", "th", "tr", "tk", "uk", "ur",
  "ug", "uz", "vi", "cy", "xh", "yi", "yo", "zu", "en-US", "en-GB", "en-CA", "en-AU", "en-NZ", "en-IE", "en-ZA", "es-ES",
  "es-MX", "es-AR", "es-CO", "es-CL", "es-PE", "fr-FR", "fr-CA", "fr-BE", "fr-CH", "de-DE", "de-AT", "de-CH", "pt-PT",
  "pt-BR", "it-IT", "it-CH", "nl-NL", "nl-BE", "zh-CN", "zh-TW", "zh-HK", "ja-JP", "ko-KR", "ru-RU", "ar-SA", "ar-AE",
  "ar-EG", "hi-IN", "bn-BD", "bn-IN", "ur-PK", "ur-IN", "pa-IN", "pa-PK", "ta-IN", "ta-LK", "te-IN", "ml-IN", "mr-IN",
  "gu-IN", "kn-IN", "or-IN", "as-IN", "id-ID", "ms-MY", "ms-BN", "th-TH", "vi-VN", "tr-TR", "el-GR", "pl-PL", "cs-CZ",
  "sk-SK", "hu-HU", "ro-RO", "bg-BG", "hr-HR", "sr-RS", "sl-SI", "uk-UA", "fi-FI", "sv-SE", "no-NO", "da-DK", "is-IS",
  "et-EE", "lv-LV", "lt-LT", "mt-MT", "sq-AL", "mk-MK", "bs-BA", "sr-Latn", "sr-Cyrl", "uz-UZ", "kk-KZ", "ky-KG", "tg-TJ",
  "tk-TM", "mn-MN", "hy-AM", "az-AZ", "ka-GE", "fa-IR", "ps-AF", "he-IL", "am-ET", "sw-KE", "sw-TZ", "yo-NG", "ig-NG", 
  "ha-NG", "zu-ZA", "xh-ZA"
];
const languages: Record<string, string> = {};
locales.forEach(loc => {
  languages[loc] = `https://kiddokount.com/${loc}`;
});

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
    languages,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://kiddokount.com/#organization",
      name: "Kiddo Kount",
      alternateName: "Kiddo Kount Cartoon Channel",
      url: "https://kiddokount.com",
      logo: "https://kiddokount.com/logo.png",
      description: "Educational platform teaching math and STEM to toddlers and preschoolers through interactive games and videos.",
      sameAs: [
        "https://youtube.com/@kiddokount",
        "https://instagram.com/kiddokount",
        "https://tiktok.com/@kiddokount"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@kiddokount.com",
      }
    },
    {
      "@type": "Course",
      "name": "Toddler Math and STEM Logic",
      "description": "Learn basic math, counting, and geometry for preschoolers.",
      "provider": {
        "@id": "https://kiddokount.com/#organization"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://kiddokount.com/#website",
      url: "https://kiddokount.com",
      name: "Kiddo Kount",
      publisher: { "@id": "https://kiddokount.com/#organization" },
      inLanguage: "en-US"
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Kiddo Kount?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kiddo Kount is an educational platform featuring Ralph, teaching STEM and math to toddlers and preschoolers."
          }
        }
      ]
    }
  ]
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen">
        <StarField />
        <AnalyticsHub />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
