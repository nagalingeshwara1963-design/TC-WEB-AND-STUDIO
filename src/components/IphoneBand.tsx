import React from "react";

const POINTS = [
  { title: "Lower cost", text: "No heavy camera crew, so more of your budget goes into the content itself." },
  { title: "Quick and flexible", text: "Small setup means we can shoot in showrooms, homes, shops and busy venues easily." },
  { title: "Made for reels", text: "Sharp, vertical video that's ready for Instagram, WhatsApp and YouTube Shorts." },
];

export default function IphoneBand() {
  return (
    <section aria-labelledby="iphone-heading" className="bg-gradient-to-br from-[#2a1650] via-[#24123f] to-[#1c1335] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] font-mono mb-3 text-amber-300">How we keep it affordable</p>
            <h2 id="iphone-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-display text-white">
              Shot on iPhone. <span className="text-amber-300">Pro results, lower cost.</span>
            </h2>
            <p className="mt-4 text-purple-100/85 leading-relaxed">
              Most of our shoots are filmed on iPhone. A pro camera setup is available on request for bigger productions.
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
