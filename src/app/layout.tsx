import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import Analytics from "@/components/Analytics";

export const viewport: Viewport = {
  themeColor: "#faf8ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH;
const SITE_URL = `https://tcwebandstudio.in${BASE}/`;
const TITLE = "Affordable Digital Marketing in Mysore | TC Web & Studio";
const DESCRIPTION =
  "Affordable digital marketing in Mysore: reels, pre-wedding and event shoots, car delivery videos, social media, posters, websites, SEO and Meta & Google ads for startups, businesses and personal brands.";
const SHARE_IMAGE = `${BASE}/og-image.jpg`;

// Business details for Google (structured data). No phone number, by design.
const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#business`,
  name: "TC Web & Studio",
  alternateName: "TC Works",
  slogan: "Your budget. Our creativity.",
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `https://tcwebandstudio.in${BASE}/icon-512.png`,
  image: `https://tcwebandstudio.in${SHARE_IMAGE}`,
  email: "tcworksmysore@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mysore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Mysore" },
    { "@type": "State", name: "Karnataka" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: ["https://www.instagram.com/tc_web_and_studio/"],
  founder: [
    { "@type": "Person", name: "Naveen N", jobTitle: "Cinematography & Editing" },
    { "@type": "Person", name: "Nidhith Sagar Gowda M", jobTitle: "Social Media & Design" },
    { "@type": "Person", name: "Hemanth Gowda TN", jobTitle: "Web Design, Development & SEO" },
  ],
  knowsAbout: [
    "Digital marketing",
    "Social media management",
    "Instagram reels",
    "Pre-wedding shoots",
    "Event photography and videography",
    "Car delivery shoots",
    "Poster design",
    "Website design",
    "SEO",
    "Meta ads",
    "Google Ads",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tcwebandstudio.in"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "digital marketing Mysore",
    "affordable digital marketing Mysore",
    "budget digital marketing Mysore",
    "social media marketing Mysore",
    "pre-wedding shoot Mysore",
    "car delivery shoot Mysore",
    "website design Mysore",
    "SEO Mysore",
    "Instagram reels Mysore",
  ],
  alternates: { canonical: `${BASE}/` },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: `${BASE}/favicon.ico`, sizes: "48x48" },
      { url: `${BASE}/icon-512.png`, type: "image/png", sizes: "512x512" },
    ],
    apple: `${BASE}/apple-touch-icon.png`,
  },
  openGraph: {
    type: "website",
    url: `${BASE}/`,
    siteName: "TC Web & Studio",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "TC Web & Studio logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSON_LD) }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#faf8ff] text-[#241c38] antialiased selection:bg-purple-200 selection:text-purple-900 overflow-x-clip">
        {children}
        <FloatingWhatsApp />
        <ScrollRevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
