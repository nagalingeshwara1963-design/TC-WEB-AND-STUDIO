import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICE_PAGES, getServicePage } from "@/lib/servicePages";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  const title = `${page.metaTitle} | TC Web & Studio`;
  return {
    title,
    description: page.metaDescription,
    alternates: { canonical: `${BASE}/${page.slug}/` },
    openGraph: {
      type: "website",
      url: `${BASE}/${page.slug}/`,
      siteName: "TC Web & Studio",
      title,
      description: page.metaDescription,
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630, alt: "TC Web & Studio logo" }],
    },
    twitter: { card: "summary_large_image", title, description: page.metaDescription, images: [`${BASE}/og-image.jpg`] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
