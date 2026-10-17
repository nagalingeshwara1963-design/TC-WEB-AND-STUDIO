import React from "react";

export default function ClientsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#faf8ff] border-b border-purple-200/60" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 font-display shadow-sm">
            <span className="inline-block text-amber-500 animate-spin-slow">✦</span>
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
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-14">
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

        {/* Authentic Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Client 1 */}
          <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-display font-extrabold text-base mb-4 group-hover:scale-105 transition-transform">
                AC
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Hospitality & Dining
              </span>
              <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2">
                Mysuru Artisan Cafe
              </h3>
              <p className="text-xs text-[#5e5377] mt-1 leading-relaxed">
                Specialty coffee cafe in Gokulam. We handle their promotional posters, weekly menu specials, and short-form reels.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-800">
              <span>Active Client</span>
              <span>Posters & Video</span>
            </div>
          </div>

          {/* Client 2 */}
          <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-display font-extrabold text-base mb-4 group-hover:scale-105 transition-transform">
                SB
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                Fashion & Retail
              </span>
              <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2">
                The Silk Studio Boutique
              </h3>
              <p className="text-xs text-[#5e5377] mt-1 leading-relaxed">
                Traditional & designer silk sarees boutique. High-end festive campaign posters, Meta ads, and visual brand identity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-800">
              <span>Previous Project</span>
              <span>Ads & Branding</span>
            </div>
          </div>

          {/* Client 3 */}
          <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-display font-extrabold text-base mb-4 group-hover:scale-105 transition-transform">
                SR
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Real Estate
              </span>
              <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2">
                Skyline Residency Projects
              </h3>
              <p className="text-xs text-[#5e5377] mt-1 leading-relaxed">
                Premium residential layout developers. Custom web landing page with instant lead capture and drone site videos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-800">
              <span>Active Client</span>
              <span>Web & Video</span>
            </div>
          </div>

          {/* Client 4 */}
          <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-display font-extrabold text-base mb-4 group-hover:scale-105 transition-transform">
                DC
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                Healthcare & Clinic
              </span>
              <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2">
                Dr. Varma Dental Care
              </h3>
              <p className="text-xs text-[#5e5377] mt-1 leading-relaxed">
                Multi-specialty dental clinic. Google Map Pack optimization, local SEO ranking, and patient appointment landing page.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-800">
              <span>Active Client</span>
              <span>SEO & Web</span>
            </div>
          </div>

          {/* Client 5 */}
          <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-display font-extrabold text-base mb-4 group-hover:scale-105 transition-transform">
                UF
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Fitness & Sports
              </span>
              <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2">
                Urban Fit Strength Arena
              </h3>
              <p className="text-xs text-[#5e5377] mt-1 leading-relaxed">
                CrossFit & fitness center. High-energy workout reels and promotional membership launch posters.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-800">
              <span>Previous Project</span>
              <span>Reels & Posters</span>
            </div>
          </div>

          {/* Client 6 */}
          <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-display font-extrabold text-base mb-4 group-hover:scale-105 transition-transform">
                KN
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                Organic Products
              </span>
              <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2">
                Kavery Naturals & Honey
              </h3>
              <p className="text-xs text-[#5e5377] mt-1 leading-relaxed">
                Farm-to-table natural products. Custom catalog website, product photography direction, and social creatives.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-800">
              <span>Active Client</span>
              <span>Web & Creatives</span>
            </div>
          </div>

          {/* Client 7 */}
          <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-display font-extrabold text-base mb-4 group-hover:scale-105 transition-transform">
                TS
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Tech & B2B
              </span>
              <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2">
                TechVibe Cloud Solutions
              </h3>
              <p className="text-xs text-[#5e5377] mt-1 leading-relaxed">
                Software consulting firm. Performance web architecture, technical copywriting, and client acquisition landing page.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-purple-800">
              <span>Previous Project</span>
              <span>Custom Web</span>
            </div>
          </div>

          {/* Client 8 / Next Client Invite */}
          <div className="bg-gradient-to-br from-purple-900 to-[#1c1335] rounded-2xl p-6 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-purple-950 flex items-center justify-center font-display font-extrabold text-lg mb-4">
                ✦
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
                Next Partner
              </span>
              <h3 className="text-lg font-bold text-white font-display mt-2">
                Your Brand Here
              </h3>
              <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                Ready to elevate your online presence with custom web design, high-retention video reels, or targeted Meta ads?
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/20">
              <a
                href="#quote-card"
                className="w-full py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-purple-950 text-xs font-bold font-display flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Partner With Us</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
