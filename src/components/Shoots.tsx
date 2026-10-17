import React from "react";
import SectionHeading from "./SectionHeading";
import { BASE_PATH, whatsappLink } from "@/lib/site";

const GROUPS = [
  {
    title: "Celebrations & personal",
    items: [
      { name: "Pre-wedding shoots", text: "Couple shoots and save-the-date films.", slug: "pre-wedding-shoot-mysore" },
      { name: "Weddings & engagements", text: "Engagement, haldi, mehendi, wedding and reception coverage.", slug: "wedding-event-shoot-mysore" },
      { name: "Birthdays & family", text: "Birthdays, baby showers, maternity and naming ceremonies." },
      { name: "Personal portfolios", text: "Profile photos and intro videos for professionals and creators." },
    ],
  },
  {
    title: "Business",
    items: [
      { name: "Car & bike deliveries", text: "Delivery-day reels and photos for showrooms and happy owners.", slug: "car-delivery-shoot-mysore" },
      { name: "Product & food", text: "Menu, product and packaging shoots that make people stop scrolling." },
      { name: "Openings & events", text: "Store launches, inaugurations, corporate events and college fests.", slug: "wedding-event-shoot-mysore" },
      { name: "Property & interiors", text: "Walkthrough videos and photos for homes, sites and interiors." },
    ],
  },
];

export default function Shoots() {
  return (
    <section id="shoots" className="py-16 sm:py-20 lg:py-24 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="Shoots we do" title="From pre-weddings to car deliveries." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-on-scroll">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-bold text-purple-800 font-display mb-4">{group.title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <li key={item.name} className="p-5 rounded-2xl bg-white border border-purple-200/80">
                    <h4 className="text-lg font-bold text-[#180f2d] font-display mb-1">{item.name}</h4>
                    <p className="text-sm text-[#5e5377] leading-relaxed">{item.text}</p>
                    {"slug" in item && item.slug && (
                      <a
                        href={`${BASE_PATH}/${item.slug}/`}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-purple-800 hover:text-purple-600 underline-offset-4 hover:underline"
                      >
                        Learn more <span aria-hidden="true">&rarr;</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[#43395b] reveal-on-scroll">
          Don&apos;t see your event?{" "}
          <a
            href={whatsappLink("Hi! I'd like to ask about a shoot with TC Web & Studio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-purple-800 underline underline-offset-4 hover:text-purple-600"
          >
            Ask us on WhatsApp
          </a>
          . We shoot across Karnataka.
        </p>
      </div>
    </section>
  );
}
