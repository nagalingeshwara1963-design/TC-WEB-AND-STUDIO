import React from "react";
import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    title: "One team for everything",
    text: "Website, posters, reels and ads planned together, so your brand looks the same everywhere.",
  },
  {
    title: "Talk to the makers",
    text: "Your project is handled by the founders from start to finish.",
  },
  {
    title: "Priced to your budget",
    text: "Every project is quoted for what you actually need.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 reveal-on-scroll">
          <div>
            <SectionHeading eyebrow="About us" title="A small studio that does the work itself." />
            <div className="space-y-4 text-base sm:text-lg text-[#43395b] leading-relaxed -mt-4">
              <p>
                TC Web &amp; Studio is a founder-led creative and digital studio in Mysore. We bring branding, content, video,
                photography and websites together under one roof.
              </p>
              <p>
                There are no account managers in between. You talk directly to the three people who plan and make your work.
              </p>
            </div>
          </div>

          <ul className="space-y-4 lg:pt-10">
            {POINTS.map((point) => (
              <li key={point.title} className="p-5 rounded-2xl bg-[#faf8ff] border border-purple-100">
                <h3 className="text-lg font-bold text-[#180f2d] font-display mb-1">{point.title}</h3>
                <p className="text-sm sm:text-base text-[#5e5377] leading-relaxed">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
