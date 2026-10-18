import type { MetadataRoute } from "next";
import { SERVICE_PAGES } from "@/lib/servicePages";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ROOT = `https://nagalingeshwara1963-design.github.io${BASE}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${ROOT}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...SERVICE_PAGES.map((page) => ({
      url: `${ROOT}/${page.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${ROOT}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
