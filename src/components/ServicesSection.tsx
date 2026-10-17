import React from "react";
import Card3DTilt from "./Card3DTilt";

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf8ff] bg-subtle-grid border-b border-purple-200/60" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 font-display shadow-sm">
            <span className="inline-block text-amber-500 animate-spin-slow">✦</span>
            <span>Full Studio Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#180f2d] tracking-tight mb-4 font-display leading-tight">
            Every Creative & Digital Service <span className="text-gradient-purple-gold">Under One Roof</span>
          </h2>
          <p className="text-[#4e4368] text-sm sm:text-base leading-relaxed font-sans">
            Everything your brand needs from custom web architecture to commercial reels and promotional design. All in-house.
          </p>
        </div>

        {/* Services Grid (6 Core Offerings with 3D Interaction) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Digital Marketing & Meta Ads */}
          <Card3DTilt maxTilt={10} glare={true} className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-8 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group h-full preserve-3d">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:translate-z-6 transition-all duration-300 shadow-inner">
                  🚀
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Performance Ads
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1335] font-display mt-3 mb-2">
                  Digital Marketing & Meta Paid Ads
                </h3>
                <p className="text-xs sm:text-sm text-[#5e5377] leading-relaxed mb-6 font-sans">
                  We build and run profitable ad campaigns on Instagram and Facebook. Laser-targeted audience research, persuasive ad copywriting, retargeting pixels, and lead generation funnels.
                </p>

                <div className="space-y-2 pt-4 border-t border-purple-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Meta (FB/IG) Ad Campaign Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> A/B Split Testing & Audience Research
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Inbound WhatsApp Lead Automation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Weekly Transparent Performance Reviews
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-100">
                <a
                  href="#quote-card"
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-purple-200"
                >
                  <span>Inquire for Meta Ads</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </Card3DTilt>

          {/* Service 2: Custom Web Development */}
          <Card3DTilt maxTilt={10} glare={true} className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-8 border border-purple-200/80 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group h-full preserve-3d">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:translate-z-6 transition-all duration-300 shadow-inner">
                  💻
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Web Architecture
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1335] font-display mt-3 mb-2">
                  Custom High-Speed Web Development
                </h3>
                <p className="text-xs sm:text-sm text-[#5e5377] leading-relaxed mb-6 font-sans">
                  We don't use sluggish WordPress themes stuffed with 50 plugins. We write clean, ultra-fast custom code that loads in under 1 second, looks stunning on phones, and converts visitors into paying inquiries.
                </p>

                <div className="space-y-2 pt-4 border-t border-purple-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> 100/100 Core Web Vitals Speed Score
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Mobile-First Responsive Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Direct WhatsApp & Phone Action Buttons
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Custom Domain, SSL & Cloud Hosting
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-100">
                <a
                  href="#quote-card"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-amber-200"
                >
                  <span>Inquire for Websites</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </Card3DTilt>

          {/* Service 3: 4K Commercial Video & Viral Reels */}
          <Card3DTilt maxTilt={10} glare={true} className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-8 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group h-full preserve-3d">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:translate-z-6 transition-all duration-300 shadow-inner">
                  🎬
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Video Production
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1335] font-display mt-3 mb-2">
                  4K Video Production & Reels
                </h3>
                <p className="text-xs sm:text-sm text-[#5e5377] leading-relaxed mb-6 font-sans">
                  We create commercial brand videos, product shoots, and viral Instagram reels with hook-first pacing, cinematic lighting, and custom color grading.
                </p>

                <div className="space-y-2 pt-4 border-t border-purple-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> 4K On-Location Shoot & Cinematography
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Short-Form Viral Reel Editing (9:16)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Sound Design & Trending Audio Sync
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Professional Color Grading & Titles
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-100">
                <a
                  href="#quote-card"
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-purple-200"
                >
                  <span>Inquire for Video Production</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </Card3DTilt>

          {/* Service 4: Graphic Design & Posters */}
          <Card3DTilt maxTilt={10} glare={true} className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-8 border border-purple-200/80 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group h-full preserve-3d">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:translate-z-6 transition-all duration-300 shadow-inner">
                  🎨
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Visual Creatives
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1335] font-display mt-3 mb-2">
                  Poster Design & Graphic Art
                </h3>
                <p className="text-xs sm:text-sm text-[#5e5377] leading-relaxed mb-6 font-sans">
                  Striking promotional posters, event flyers, cafe menu layouts, product social creatives, and banners that command attention instantly on social media and in print.
                </p>

                <div className="space-y-2 pt-4 border-t border-purple-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Commercial Launch & Event Posters
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> High-Res Print-Ready & Digital Formats
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Instagram Feed Creatives & Carousels
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Menu Design & Retail Standee Graphics
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-100">
                <a
                  href="#quote-card"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-amber-200"
                >
                  <span>Inquire for Posters & Graphics</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </Card3DTilt>

          {/* Service 5: Search Engine Optimization (SEO) */}
          <Card3DTilt maxTilt={10} glare={true} className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-8 border border-purple-200/80 shadow-sm hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group h-full preserve-3d">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:translate-z-6 transition-all duration-300 shadow-inner">
                  🔍
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Organic Traffic
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1335] font-display mt-3 mb-2">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-xs sm:text-sm text-[#5e5377] leading-relaxed mb-6 font-sans">
                  Dominate local Mysuru search results and regional Google searches. We optimize your Google Business profile, write keyword-rich metadata, and build technical speed that Google loves.
                </p>

                <div className="space-y-2 pt-4 border-t border-purple-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Google Map Pack & Local Citations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> On-Page SEO & Schema Rich Snippets
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Keyword Targeting for High-Intent Searches
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✓</span> Google Search Console Setup & Indexing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-100">
                <a
                  href="#quote-card"
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-purple-200"
                >
                  <span>Inquire for SEO</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </Card3DTilt>

          {/* Service 6: Brand Identity & Social Direction */}
          <Card3DTilt maxTilt={10} glare={true} className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-8 border border-purple-200/80 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group h-full preserve-3d">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:translate-z-6 transition-all duration-300 shadow-inner">
                  📱
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Brand Identity
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1335] font-display mt-3 mb-2">
                  Social Media & Brand Identity
                </h3>
                <p className="text-xs sm:text-sm text-[#5e5377] leading-relaxed mb-6 font-sans">
                  Give your business a distinct, memorable personality. Complete brand identity systems including modern logo vectors, color palettes, typography guidelines, and content curation.
                </p>

                <div className="space-y-2 pt-4 border-t border-purple-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Logo Design & Vector Identity Assets
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Brand Color Guidelines & Typography
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Instagram Grid Aesthetic Direction
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-600 font-bold">✓</span> Social Media Bio & Linktree Optimization
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-100">
                <a
                  href="#quote-card"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-amber-200"
                >
                  <span>Inquire for Brand Identity</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </Card3DTilt>
        </div>
      </div>
    </section>
  );
}
