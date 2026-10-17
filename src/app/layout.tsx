import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

export const viewport: Viewport = {
  themeColor: "#faf8ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH;
const TITLE = "TC Web & Studio | Reels, Shoots, Websites & Ads in Mysuru";
const DESCRIPTION =
  "Reels, pre-wedding and event shoots, car delivery videos, posters, social media, websites and ads for startups, growing businesses and personal brands. Three founders in Mysuru. Your budget, our creativity.";
const SHARE_IMAGE = `${BASE}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL("https://nagalingeshwara1963-design.github.io"),
  title: TITLE,
  description: DESCRIPTION,
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
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#faf8ff] text-[#241c38] antialiased selection:bg-purple-200 selection:text-purple-900 overflow-x-clip">
        {children}
        <FloatingWhatsApp />
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
