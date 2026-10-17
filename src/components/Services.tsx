import React from "react";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    title: "Websites",
    text: "Fast, mobile-friendly websites and landing pages built for your business.",
    tags: ["Business sites", "Landing pages", "Domain & hosting"],
  },
  {
    title: "Social media",
    text: "Content planning, captions and page management for Instagram and Facebook.",
    tags: ["Content calendar", "Captions", "Page management"],
  },
  {
    title: "Video & photography",
    text: "Reels, brand films and product shoots, filmed, edited and finished in-house.",
    tags: ["Reels", "Shoots", "Editing", "Motion graphics"],
  },
  {
    title: "Posters & branding",
    text: "Posters, flyers, menus and brand identity that look consistent everywhere.",
    tags: ["Posters", "Logos", "Brand kit"],
  },
  {
    title: "Meta & Google ads",
    text: "Ad campaigns set up and managed for enquiries, calls and WhatsApp leads.",
    tags: ["Facebook & Instagram", "Google Ads"],
  },
  {
    title: "SEO",
    text: "Help customers find you on Google, with on-page SEO and Google Business Profile.",
    tags: ["On-page SEO", "Google Business Profile"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="Services" title="Everything your brand needs, made in-house." />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal-on-scroll">
          {SERVICES.map((service) => (
            <li key={service.title} className="p-6 rounded-2xl bg-white border border-purple-200/80 flex flex-col">
              <span className="w-8 h-1 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 mb-5" aria-hidden="true"></span>
              <h3 className="text-xl font-bold text-[#180f2d] font-display mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-[#5e5377] leading-relaxed mb-5">{service.text}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li key={tag} className="text-xs font-semibold text-purple-800 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-md">
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
