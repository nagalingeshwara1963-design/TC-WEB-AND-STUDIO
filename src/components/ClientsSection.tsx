import React from "react";

export default function ClientsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#faf8ff] border-b border-purple-200/60" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 font-display shadow-sm">
            <span className="inline-block text-amber-500">✦</span>
            <span>Our Client Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#180f2d] tracking-tight mb-4 font-display leading-tight">
            Previous & Current <span className="text-gradient-purple-gold">Clients</span>
          </h2>
          <p className="text-[#4e4368] text-base sm:text-lg leading-relaxed font-sans">
            We partner with forward-thinking local brands, retail businesses, hospitality outlets, and startups across Mysuru and Karnataka.
          </p>
        </div>

        {/* Real client logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { name: "Saaraswath IAS/KAS Academy", file: "saaraswath.webp" },
            { name: "Jain Autocars", file: "jain-autocars.webp" },
            { name: "Manikanta Nursery and Farm", file: "manikanta.webp" },
            { name: "Soulfull Learning", file: "soulfull.webp" },
            { name: "Samvruddhi Housing Loans", file: "samvruddhi.webp" },
            { name: "Darjeeling Momos", file: "darjeeling-momos.webp" },
            { name: "Vinutha Flower Decorations", file: "vinutha.webp" },
          ].map((c) => (
            <div key={c.file} className="flex flex-col items-center text-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-purple-200/80 shadow-sm">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/clients/${c.file}`} alt={`${c.name} logo`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <span className="mt-3 text-xs font-semibold text-[#3c3252] leading-snug">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
