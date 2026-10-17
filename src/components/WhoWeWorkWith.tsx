"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./Icons";

const AUDIENCES = [
  {
    title: "Startups & small businesses",
    text: "Shops, cafés, coaching centres and new brands that need to look professional from day one.",
    tags: ["Logo & posters", "Reels", "First website"],
  },
  {
    title: "Growing businesses",
    text: "Car dealers, real estate, schools and restaurants ready to grow with regular content and ads.",
    tags: ["Monthly content", "Ads", "SEO"],
  },
  {
    title: "Personal brands",
    text: "Doctors & dentists, entrepreneurs & founders, lawyers, CAs & consultants, coaches & creators.",
    tags: ["Profile video", "Photos", "Social pages"],
  },
];

const HEALTHCARE_PROMISES = [
  "No patient is filmed or shown without written consent, and patient details are never shared.",
  "No guaranteed-cure claims, fake reviews or misleading before/after posts.",
  "Every post and video is checked and approved by the doctor or hospital before it goes live.",
  "Content follows the National Medical Commission's advertising guidelines for doctors and hospitals.",
];

export default function WhoWeWorkWith() {
  const [showPromises, setShowPromises] = useState(false);

  return (
    <section id="who-we-work-with" className="py-16 sm:py-20 lg:py-24 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="Who we work with" title="From small startups to growing businesses and personal brands." />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start reveal-on-scroll">
          {AUDIENCES.map((a) => (
            <li key={a.title} className="p-6 rounded-2xl bg-white border border-purple-200/80 h-full flex flex-col">
              <h3 className="text-lg font-bold text-[#180f2d] font-display mb-2">{a.title}</h3>
              <p className="text-sm text-[#5e5377] leading-relaxed mb-5">{a.text}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <li key={tag} className="text-xs font-semibold text-purple-800 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-md">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* Healthcare card with promise box */}
          <li className="p-6 rounded-2xl bg-white border-2 border-purple-300 h-full flex flex-col">
            <h3 className="text-lg font-bold text-[#180f2d] font-display mb-2">Hospitals &amp; clinics</h3>
            <p className="text-sm text-[#5e5377] leading-relaxed mb-5">
              Awareness content, doctor profiles, clinic tours and social media, handled responsibly.
            </p>
            <button
              type="button"
              onClick={() => setShowPromises((open) => !open)}
              aria-expanded={showPromises}
              aria-controls="healthcare-promises"
              className="mt-auto inline-flex items-center justify-between gap-2 min-h-[44px] px-4 rounded-xl bg-purple-50 border border-purple-200 text-sm font-bold text-purple-800 hover:bg-purple-100 transition-colors cursor-pointer"
            >
              How we work with healthcare
              <svg
                className={`w-4 h-4 transition-transform ${showPromises ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </li>
        </ul>

        {showPromises && (
          <div id="healthcare-promises" className="mt-5 p-6 sm:p-8 rounded-2xl bg-white border-2 border-purple-300">
            <h3 className="text-lg font-bold text-[#180f2d] font-display mb-4">Our promise to hospitals and clinics</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HEALTHCARE_PROMISES.map((promise) => (
                <li key={promise} className="flex gap-3 text-sm sm:text-base text-[#3c3252] leading-relaxed">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  {promise}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
