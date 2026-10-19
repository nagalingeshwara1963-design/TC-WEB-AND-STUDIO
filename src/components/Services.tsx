import React from "react";
import SectionHeading from "./SectionHeading";
import { BASE_PATH } from "@/lib/site";

const SERVICES = [
  {
    title: "Reels & content creation",
    text: "Scroll-stopping reels and short videos, planned, filmed and edited in-house.",
    tags: ["Reels", "Editing", "Motion graphics"],
  },
  {
    title: "Photo & video shoots",
    text: "Pre-wedding, events, car deliveries, products and property, mostly on iPhone to keep costs low.",
    tags: ["Pre-wedding", "Events", "Car delivery", "Property"],
  },
  {
    title: "Social media management",
    text: "Content planning, captions and page management for Instagram and Facebook.",
    tags: ["Content calendar", "Captions", "Page management"],
    slug: "social-media-marketing-mysore",
  },
  {
    title: "Posters & branding",
    text: "Posters, flyers, brochures, menus and brand identity that look consistent everywhere.",
    tags: ["Posters", "Brochures", "Logos", "Brand kit"],
  },
  {
    title: "Digital marketing & ads",
    text: "Meta and Google ad campaigns set up and managed for enquiries, calls and WhatsApp leads.",
    tags: ["Facebook & Instagram", "Google Ads"],
    slug: "digital-marketing-mysore",
  },
  {
    title: "Websites",
    text: "Fast, mobile-friendly websites and landing pages built for your business.",
    tags: ["Business sites", "Landing pages", "Domain & hosting"],
    slug: "website-design-mysore",
  },
  {
    title: "SEO",
    text: "Help customers find you on Google, with on-page SEO and Google Business Profile.",
    tags: ["On-page SEO", "Google Business Profile"],
    slug: "seo-services-mysore",
  },
  {
    title: "Personal brand profiles",
    text: "Profile videos, photos and pages for doctors, entrepreneurs, consultants and creators.",
    tags: ["Profile video", "Portfolio", "LinkedIn & Instagram"],
    slug: "doctor-personal-branding-mysore",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="Services" title="Content first. Then everything else your brand needs." />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-on-scroll">
          {SERVICES.map((service, i) => (
            <li key={service.title} className="p-6 rounded-2xl bg-[#faf8ff] border border-purple-200/80 flex flex-col">
              <span className="text-sm font-bold text-amber-700 font-mono mb-3">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-bold text-[#180f2d] font-display mb-2">{service.title}</h3>
              <p className="text-sm text-[#5e5377] leading-relaxed mb-5">{service.text}</p>
              {"slug" in service && service.slug && (
                <a
                  href={`${BASE_PATH}/${service.slug}/`}
                  className="-mt-2 mb-5 inline-flex items-center gap-1 text-sm font-bold text-purple-800 hover:text-purple-600 underline-offset-4 hover:underline"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              )}
              <ul className="mt-auto flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li key={tag} className="text-xs font-semibold text-purple-800 bg-white border border-purple-200 px-2.5 py-1 rounded-md">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
