import React from "react";
import Eyebrow from "./Eyebrow";

const POINTS = [
  { title: "Lean team, lower cost", text: "No big crews or fancy offices to pay for, so your budget goes into the work itself." },
  { title: "Talent does the heavy lifting", text: "Good content comes from planning, framing, editing and design skills, not expensive setups." },
  { title: "Quality you can see", text: "Affordable never means average. No compromise on the quality of your content." },
];

export default function Affordable() {
  return (
    <section aria-labelledby="affordable-heading" className="bg-gradient-to-br from-[#2a1650] via-[#24123f] to-[#1c1335] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2">
            <Eyebrow dark>Why we&apos;re affordable</Eyebrow>
            <h2 id="affordable-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-display text-white">
              Why we cost less, <span className="text-amber-300">and still look great.</span>
            </h2>
            <p className="mt-4 text-purple-100/85 leading-relaxed">
              No big crews or fancy offices. Just three skilled founders who plan, shoot and design everything themselves.
            </p>
          </div>

          <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {POINTS.map((p) => (
              <li key={p.title} className="p-5 rounded-2xl bg-white/5 border border-white/15">
                <h3 className="text-lg font-bold font-display text-white mb-1">{p.title}</h3>
                <p className="text-sm text-purple-100/85 leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
