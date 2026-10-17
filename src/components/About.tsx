import React from "react";
import SectionHeading from "./SectionHeading";
import { BASE_PATH } from "@/lib/site";

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

const FOUNDERS = [
  {
    name: "Naveen",
    role: "Cinematography & Editing",
    text: "Pre-wedding films, car delivery shoots, events, photography and video editing.",
    tags: ["Cinematography", "Pre-wedding", "Car delivery", "Editing"],
    photo: "naveen-face.jpg",
  },
  {
    name: "Nidhith",
    role: "Social Media & Design",
    text: "Poster design, content planning, brochures and ads, and business promotion.",
    tags: ["Posters", "Content planning", "Brochures & ads", "Promotion"],
    photo: "nidhith-face.jpg",
  },
  {
    name: "Hemanth",
    role: "Web Design, Development & SEO",
    text: "Websites, SEO, content planning and client management.",
    tags: ["Websites", "SEO", "Content planning", "Client management"],
    photo: null,
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 reveal-on-scroll">
          <div>
            <SectionHeading eyebrow="About us" title="A small studio that does the work itself." />
            <div className="space-y-4 text-base sm:text-lg text-[#43395b] leading-relaxed -mt-4">
              <p>
                TC Web &amp; Studio is a founder-led creative and digital studio in Mysuru. We bring branding, content, video,
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

        <h3 className="text-xl font-bold text-[#180f2d] font-display mb-6 reveal-on-scroll">Meet the founders</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-on-scroll">
          {FOUNDERS.map((f) => (
            <li key={f.name} className="p-6 rounded-2xl bg-white border border-purple-200/80 flex flex-col items-center text-center">
              {f.photo ? (
                <img
                  src={`${BASE_PATH}/images/founders/${f.photo}`}
                  alt={`${f.name}, ${f.role}`}
                  className="w-24 h-24 rounded-full object-cover border-4 border-purple-100"
                  loading="lazy"
                  decoding="async"
                  width={96}
                  height={96}
                />
              ) : (
                <span
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-700 to-amber-600 border-4 border-purple-100 flex items-center justify-center text-white text-3xl font-extrabold font-display"
                  aria-hidden="true"
                >
                  {f.name.charAt(0)}
                </span>
              )}
              <h4 className="mt-4 text-lg font-bold text-[#180f2d] font-display">{f.name}</h4>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700 font-mono mt-1">{f.role}</p>
              <p className="mt-3 text-sm text-[#5e5377] leading-relaxed">{f.text}</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
                {f.tags.map((tag) => (
                  <li key={tag} className="text-[11px] font-semibold text-purple-800 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">
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
