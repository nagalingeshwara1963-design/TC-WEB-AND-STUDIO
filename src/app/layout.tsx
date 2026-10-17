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

export const metadata: Metadata = {
  title: "TC Web & Studio | Digital Marketing, Custom Web & Visual Creative Studio in Mysuru",
  description:
    "Premier Digital Marketing, Custom Web Development, 4K Commercial Video Reels & High-Impact Poster Design in Mysuru, Karnataka. Three founders, 100% in-house craft, customized to your budget.",
  icons: {
    icon: [
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico` },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.svg`, type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    title: "TC Web & Studio | Digital Marketing, Custom Web & Visual Creative Studio in Mysuru",
    description:
      "Premier Digital Marketing, Custom Web Development, 4K Commercial Video Reels & High-Impact Poster Design in Mysuru, Karnataka. Three founders, 100% in-house craft, customized to your budget.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TC Web & Studio | Digital Marketing, Custom Web & Visual Creative Studio in Mysuru",
    description:
      "Premier Digital Marketing, Custom Web Development, 4K Commercial Video Reels & High-Impact Poster Design in Mysuru, Karnataka. Three founders, 100% in-house craft, customized to your budget.",
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
      <body className="min-h-screen flex flex-col font-sans bg-[#faf8ff] text-[#241c38] antialiased selection:bg-purple-200 selection:text-purple-900 pb-16 sm:pb-0 overflow-x-hidden">
        {children}
        <FloatingWhatsApp />
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
