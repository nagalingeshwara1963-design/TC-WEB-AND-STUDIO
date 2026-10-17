"use client";

import React, { useState } from "react";
import Card3DTilt from "./Card3DTilt";

export default function TeamPortfolio() {
  const [filter, setFilter] = useState<"all" | "web" | "posters">("all");

  return (
    <section className="py-20 lg:py-24 bg-[#faf8ff] bg-subtle-grid border-b border-purple-200/60" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 font-display shadow-sm">
            <span className="inline-block text-amber-500 animate-spin-slow">✦</span>
            <span>Selected Studio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#180f2d] tracking-tight mb-3 font-display leading-tight">
            Our Featured <span className="text-gradient-purple-gold">Portfolio</span>
          </h2>
          <p className="text-[#4e4368] text-sm sm:text-base leading-relaxed font-sans">
            Handcrafted web applications and high-impact visual designs engineered for business growth.
          </p>

          {/* User-Friendly Category Filter Tabs */}
          <div className="inline-flex items-center gap-2 mt-6 p-1.5 rounded-2xl bg-white border border-purple-200 shadow-sm">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-purple-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-purple-900"
              }`}
            >
              All Work (7)
            </button>
            <button
              type="button"
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
                filter === "web"
                  ? "bg-purple-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-purple-900"
              }`}
            >
              Web Platforms (3)
            </button>
            <button
              type="button"
              onClick={() => setFilter("posters")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
                filter === "posters"
                  ? "bg-purple-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-purple-900"
              }`}
            >
              Posters & Visuals (4)
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
             CATEGORY 1: WEB ARCHITECTURE & PLATFORMS
             ══════════════════════════════════════════════════════════════════ */}
        {(filter === "all" || filter === "web") && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-purple-200/60">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                  💻
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#180f2d] font-display">
                    Web Platforms & Custom Architecture
                  </h3>
                  <span className="text-xs text-slate-500">Fast, SEO-first responsive builds</span>
                </div>
              </div>
              <a
                href="#quote-card"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900"
              >
                <span>Request Custom Website</span>
                <span>&rarr;</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Web Design 1: E-Commerce */}
              <Card3DTilt maxTilt={8} glare={true} className="rounded-2xl h-full">
                <div className="rounded-2xl border border-purple-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="bg-slate-100 px-3.5 py-2.5 border-b border-purple-200/80 flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="flex-1 px-3 py-1 bg-white rounded-md text-[10px] font-mono text-slate-500 truncate border border-slate-200">
                      https://dtc-ecommerce.store
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                          E-Commerce Platform
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">100/100 SPEED</span>
                      </div>
                      <h4 className="text-base font-bold text-[#1c1335] font-display mb-1.5">
                        Direct-to-Consumer Store
                      </h4>
                      <p className="text-xs text-[#5e5377] leading-relaxed mb-4">
                        Zero-friction checkout, WhatsApp order dispatch, and sub-second mobile page loads.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Next.js 15</span>
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">UPI/Razorpay</span>
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Responsive UX</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-700">
                      <span>TC Web Engineering</span>
                      <span className="text-emerald-600 text-[11px]">Production Ready</span>
                    </div>
                  </div>
                </div>
              </Card3DTilt>

              {/* Web Design 2: Agency & Portfolio Platform */}
              <Card3DTilt maxTilt={8} glare={true} className="rounded-2xl h-full">
                <div className="rounded-2xl border border-purple-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="bg-slate-100 px-3.5 py-2.5 border-b border-purple-200/80 flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="flex-1 px-3 py-1 bg-white rounded-md text-[10px] font-mono text-slate-500 truncate border border-slate-200">
                      https://brand-agency.studio
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                          Studio & Brand Portal
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">SEO DOMINANCE</span>
                      </div>
                      <h4 className="text-base font-bold text-[#1c1335] font-display mb-1.5">
                        Creative Agency Showcase
                      </h4>
                      <p className="text-xs text-[#5e5377] leading-relaxed mb-4">
                        Micro-animations, 3D WebGL visuals, integrated lead funnel, and luxury typography.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">3D WebGL</span>
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Glassmorphism</span>
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Core Web Vitals</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-700">
                      <span>TC Web Engineering</span>
                      <span className="text-emerald-600 text-[11px]">Production Ready</span>
                    </div>
                  </div>
                </div>
              </Card3DTilt>

              {/* Web Design 3: Inbound Lead Engine */}
              <Card3DTilt maxTilt={8} glare={true} className="rounded-2xl h-full">
                <div className="rounded-2xl border border-purple-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="bg-slate-100 px-3.5 py-2.5 border-b border-purple-200/80 flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="flex-1 px-3 py-1 bg-white rounded-md text-[10px] font-mono text-slate-500 truncate border border-slate-200">
                      https://mysuru-clinic.portal
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                          Inbound Lead Engine
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">HIGH CONVERTING</span>
                      </div>
                      <h4 className="text-base font-bold text-[#1c1335] font-display mb-1.5">
                        Local Service & Clinic Hub
                      </h4>
                      <p className="text-xs text-[#5e5377] leading-relaxed mb-4">
                        Optimized for local Mysuru Google Map clicks, appointment scheduling, and WhatsApp triggers.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Local SEO</span>
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Direct WhatsApp</span>
                        <span className="text-[10px] font-mono bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Zero Maintenance</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-700">
                      <span>TC Web Engineering</span>
                      <span className="text-emerald-600 text-[11px]">Production Ready</span>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
             CATEGORY 2: POSTER WORKS & VISUAL IDENTITY
             ══════════════════════════════════════════════════════════════════ */}
        {(filter === "all" || filter === "posters") && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-amber-200/60">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                  🎨
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#180f2d] font-display">
                    Commercial Poster Design & Creatives
                  </h3>
                  <span className="text-xs text-slate-500">Bold typography, brand identity & promotional art</span>
                </div>
              </div>
              <a
                href="https://wa.me/918197974368?text=Hi!%20I%20am%20interested%20in%20ordering%20custom%20posters%20and%20branding."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950"
              >
                <span>Order Posters on WhatsApp</span>
                <span>&rarr;</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Poster 1 */}
              <Card3DTilt maxTilt={12} glare={true} className="rounded-2xl h-full">
                <div className="rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="aspect-[4/5] bg-gradient-to-br from-purple-900 via-indigo-950 to-amber-950 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase border border-amber-400/30 px-2 py-0.5 rounded">
                        TC • 01
                      </span>
                      <span className="text-[10px] text-purple-200 font-mono">ORIGINAL</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-amber-400 font-mono">BRAND LAUNCH</span>
                      <h4 className="text-lg font-black text-white font-display leading-tight mt-1">
                        CINEMATIC LAUNCH POSTER
                      </h4>
                      <p className="text-[11px] text-purple-200 mt-1 font-sans">
                        Bold typography & high-impact commercial visual identity.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-amber-300">
                      <span>STUDIO ORIGINAL</span>
                      <span>2026 ED.</span>
                    </div>
                  </div>
                  <div className="p-3.5 bg-white flex-1">
                    <span className="block text-xs font-bold text-[#1c1335] font-display">Commercial Brand Poster</span>
                    <span className="text-[10px] text-slate-500 font-sans">Print & Social Ready</span>
                  </div>
                </div>
              </Card3DTilt>

              {/* Poster 2 */}
              <Card3DTilt maxTilt={12} glare={true} className="rounded-2xl h-full">
                <div className="rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="aspect-[4/5] bg-gradient-to-br from-amber-900 via-yellow-950 to-stone-900 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -left-10 -top-10 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase border border-amber-400/30 px-2 py-0.5 rounded">
                        TC • 02
                      </span>
                      <span className="text-[10px] text-amber-200 font-mono">DINING</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-yellow-300 font-mono">FOOD & CAFE</span>
                      <h4 className="text-lg font-black text-white font-display leading-tight mt-1">
                        GOURMET RESTAURANT POSTER
                      </h4>
                      <p className="text-[11px] text-amber-100 mt-1 font-sans">
                        Appetite-appealing hierarchy & promotional special offers.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-amber-300">
                      <span>STUDIO ORIGINAL</span>
                      <span>2026 ED.</span>
                    </div>
                  </div>
                  <div className="p-3.5 bg-white flex-1">
                    <span className="block text-xs font-bold text-[#1c1335] font-display">Cafe / Menu Creative</span>
                    <span className="text-[10px] text-slate-500 font-sans">Print & Social Ready</span>
                  </div>
                </div>
              </Card3DTilt>

              {/* Poster 3 */}
              <Card3DTilt maxTilt={12} glare={true} className="rounded-2xl h-full">
                <div className="rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="aspect-[4/5] bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-900 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-36 h-36 bg-purple-500/25 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono tracking-widest text-purple-300 uppercase border border-purple-400/30 px-2 py-0.5 rounded">
                        TC • 03
                      </span>
                      <span className="text-[10px] text-purple-200 font-mono">MUSIC</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-purple-300 font-mono">EVENT & NIGHTLIFE</span>
                      <h4 className="text-lg font-black text-white font-display leading-tight mt-1">
                        FESTIVAL & EVENT POSTER
                      </h4>
                      <p className="text-[11px] text-purple-200 mt-1 font-sans">
                        High-energy compositions crafted to drive event ticket sales.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-purple-300">
                      <span>STUDIO ORIGINAL</span>
                      <span>2026 ED.</span>
                    </div>
                  </div>
                  <div className="p-3.5 bg-white flex-1">
                    <span className="block text-xs font-bold text-[#1c1335] font-display">Event & Music Flyer</span>
                    <span className="text-[10px] text-slate-500 font-sans">Print & Social Ready</span>
                  </div>
                </div>
              </Card3DTilt>

              {/* Poster 4 */}
              <Card3DTilt maxTilt={12} glare={true} className="rounded-2xl h-full">
                <div className="rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="aspect-[4/5] bg-gradient-to-br from-rose-950 via-purple-950 to-stone-900 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -left-8 -bottom-8 w-36 h-36 bg-rose-500/20 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono tracking-widest text-rose-300 uppercase border border-rose-400/30 px-2 py-0.5 rounded">
                        TC • 04
                      </span>
                      <span className="text-[10px] text-rose-200 font-mono">RETAIL</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-rose-300 font-mono">FASHION & BOUTIQUE</span>
                      <h4 className="text-lg font-black text-white font-display leading-tight mt-1">
                        LUXURY LIFESTYLE AD
                      </h4>
                      <p className="text-[11px] text-rose-100 mt-1 font-sans">
                        Refined editorial layout made for high-end fashion campaigns.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-rose-300">
                      <span>STUDIO ORIGINAL</span>
                      <span>2026 ED.</span>
                    </div>
                  </div>
                  <div className="p-3.5 bg-white flex-1">
                    <span className="block text-xs font-bold text-[#1c1335] font-display">Fashion & Retail Creative</span>
                    <span className="text-[10px] text-slate-500 font-sans">Print & Social Ready</span>
                  </div>
                </div>
              </Card3DTilt>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
