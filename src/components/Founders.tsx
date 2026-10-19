import React from "react";
import SectionHeading from "./SectionHeading";
import { BASE_PATH } from "@/lib/site";

const FOUNDERS = [
  {
    name: "Naveen N",
    role: "Cinematography & Editing",
    text: "Pre-wedding films, car delivery shoots, events, photography and video editing.",
    tags: ["Cinematography", "Pre-wedding", "Car delivery", "Editing"],
    photo: "naveen-face.jpg",
  },
  {
    name: "Nidhith Sagar Gowda M",
    role: "Social Media & Design",
    text: "Poster design, content planning, brochures and ads, and business promotion.",
    tags: ["Posters", "Content planning", "Brochures & ads", "Promotion"],
    photo: "nidhith-face.jpg",
  },
  {
    name: "Hemanth Gowda TN",
    role: "Web Design, Development & SEO",
    text: "Websites, SEO, content planning and client management.",
    tags: ["Websites", "SEO", "Content planning", "Client management"],
    photo: null,
  },
];

export default function Founders() {
  return (
    <section id="founders" className="py-16 sm:py-20 lg:py-24 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="Founders" title="Meet the three people who make your work." />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
          {FOUNDERS.map((f) => (
            <li key={f.name} className="p-7 sm:p-8 rounded-3xl bg-white border border-purple-200/80 flex flex-col items-center text-center">
              {f.photo ? (
                <img
                  src={`${BASE_PATH}/images/founders/${f.photo}`}
                  alt={`${f.name}, ${f.role}`}
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-[6px] border-purple-100"
                  loading="lazy"
                  decoding="async"
                  width={160}
                  height={160}
                />
              ) : (
                <span
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-purple-700 to-amber-600 border-[6px] border-purple-100 flex items-center justify-center text-white text-5xl font-extrabold font-display"
                  aria-hidden="true"
                >
                  {f.name.charAt(0)}
                </span>
              )}
              <h3 className="mt-5 text-xl font-bold text-[#180f2d] font-display">{f.name}</h3>
              <p className="text-sm sm:text-base font-bold text-amber-700 font-display mt-1">{f.role}</p>
              <p className="mt-3 text-sm sm:text-base text-[#5e5377] leading-relaxed">{f.text}</p>
              <ul className="mt-5 flex flex-wrap justify-center gap-1.5">
                {f.tags.map((tag) => (
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
