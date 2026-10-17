"use client";

import React from "react";

export default function AboutCompany() {
  return (
    <section className="py-20 lg:py-24 bg-[#faf8ff] relative overflow-hidden border-b border-purple-200/60" id="about">
      {/* Subtle ambient decorative glow */}
      <div className="absolute -top-10 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 font-display shadow-sm">
            <span className="inline-block text-amber-500 animate-spin-slow">✦</span>
            <span>About The Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#180f2d] tracking-tight mb-3 font-display leading-tight">
            Built on Craft & Speed, <span className="text-gradient-purple-gold">Zero Agency Bloat</span>
          </h2>
          <p className="text-[#4e4368] text-sm sm:text-base leading-relaxed font-sans">
            Direct collaboration with hands-on specialists in Mysuru. Transparent pricing, fast execution, and zero middlemen.
          </p>
        </div>

        {/* Company Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Pillar 1: Web Development */}
          <div className="p-7 rounded-3xl bg-white border border-purple-200/80 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold mb-4">
              💻
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
              Web Engineering
            </span>
            <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2.5 mb-2">
              Custom High-Speed Websites
            </h3>
            <p className="text-xs sm:text-sm text-[#5a4f73] leading-relaxed">
              We engineer lightweight, mobile-responsive web platforms with 100/100 Core Web Vitals, local SEO optimization, and instant WhatsApp inquiry triggers.
            </p>
          </div>

          {/* Pillar 2: Visual Design */}
          <div className="p-7 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl font-bold mb-4">
              🎨
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Visual Design
            </span>
            <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2.5 mb-2">
              High-Impact Posters & Branding
            </h3>
            <p className="text-xs sm:text-sm text-[#5a4f73] leading-relaxed">
              Commercial promotional posters, restaurant menus, logo design, and campaign art crafted to capture customer attention and drive footfall.
            </p>
          </div>

          {/* Pillar 3: Growth & Ads */}
          <div className="p-7 rounded-3xl bg-white border border-purple-200/80 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold mb-4">
              🚀
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
              Performance
            </span>
            <h3 className="text-lg font-bold text-[#1c1335] font-display mt-2.5 mb-2">
              Targeted Digital Marketing
            </h3>
            <p className="text-xs sm:text-sm text-[#5a4f73] leading-relaxed">
              ROI-driven Meta and Google ad campaigns, audience targeting, and local Mysuru discovery funnels engineered to convert visitors into loyal clients.
            </p>
          </div>
        </div>

        {/* Studio Highlights Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <span className="block text-sm font-bold text-[#1c1335] font-display">Direct Access</span>
                <span className="block text-xs text-slate-500">No account managers or middlemen</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                ⚡
              </div>
              <div>
                <span className="block text-sm font-bold text-[#1c1335] font-display">Rapid Delivery</span>
                <span className="block text-xs text-slate-500">Fast turnaround on all deliverables</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                ₹
              </div>
              <div>
                <span className="block text-sm font-bold text-[#1c1335] font-display">Budget Customized</span>
                <span className="block text-xs text-slate-500">Pay only for what your brand needs</span>
              </div>
            </div>
          </div>

          <a
            href="#quote-card"
            className="shrink-0 px-6 py-3 rounded-xl bg-purple-900 hover:bg-purple-950 text-white font-bold text-xs font-display transition-all shadow-md"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
}
