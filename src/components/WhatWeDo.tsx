import React from "react";
import SectionHeading from "./SectionHeading";
import { BASE_PATH, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const ITEMS = [
  {
    title: "Digital marketing",
    text: "Plans, ads and campaigns that bring you enquiries, calls and WhatsApp messages.",
    href: `${BASE_PATH}/digital-marketing-mysore/`,
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  },
  {
    title: "Social media handling",
    text: "Content planning, posting and page management for Instagram and Facebook.",
    href: `${BASE_PATH}/social-media-marketing-mysore/`,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Every type of shoot",
    text: "Pre-wedding, weddings, events, car deliveries, products and property.",
    href: `${BASE_PATH}/#shoots`,
    icon: (
      <>
        <rect x="2.5" y="6" width="13" height="12" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 10l6-3.5v11l-6-3.5" />
      </>
    ),
  },
  {
    title: "Website development",
    text: "Fast, mobile-friendly websites and landing pages built for your business.",
    href: `${BASE_PATH}/website-design-mysore/`,
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path strokeLinecap="round" d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: "SEO",
    text: "Get found on Google Search and Maps when people in Mysore look for you.",
    href: `${BASE_PATH}/seo-services-mysore/`,
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path strokeLinecap="round" d="M16 16l5 5" />
      </>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="What we do" title="Everything your brand needs, under one roof." />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 reveal-on-scroll">
          {ITEMS.map((item, i) => (
            <li key={item.title} className={i === ITEMS.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}>
              <a
                href={item.href}
                className="group h-full flex flex-col p-5 rounded-2xl bg-[#faf8ff] border border-purple-200/80 hover:border-purple-400 hover:bg-white transition-colors"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-700 text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                    {item.icon}
                  </svg>
                </span>
                <h3 className="text-lg font-bold text-[#180f2d] font-display mb-1.5">{item.title}</h3>
                <p className="text-sm text-[#5e5377] leading-relaxed mb-4">{item.text}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-purple-800 group-hover:text-purple-600">
                  See more <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Demo request (from the ad: "DM for queries & a demo video") */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-purple-50 border border-purple-200 reveal-on-scroll">
          <p className="text-base text-[#2e2446]">
            <span className="font-bold font-display text-[#180f2d]">Not sure what you need?</span> Ask us for sample work for your type
            of business.
          </p>
          <a
            href={whatsappLink("Hi! Can you share a demo / sample of your work for my business?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-display transition-colors w-full sm:w-auto shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Ask for a demo video
          </a>
        </div>
      </div>
    </section>
  );
}
