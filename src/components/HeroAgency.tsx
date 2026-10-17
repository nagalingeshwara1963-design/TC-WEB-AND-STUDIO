"use client";

import React, { useState } from "react";
import ThreeDBackground from "./ThreeDBackground";
import Card3DTilt from "./Card3DTilt";

export default function HeroAgency() {
  // Quote form state
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!whatsapp.trim() || !name.trim() || !businessType) {
      alert("Please fill out your Name, WhatsApp Number, and Business Type.");
      return;
    }

    const message = `Hi! New Inquiry from TC Web & Studio website:
Name: ${name.trim()}
WhatsApp: +91 ${whatsapp.trim()}
Business Type: ${businessType}
Project Details: ${notes.trim() || "Not specified"}`;

    const encodedMessage = encodeURIComponent(message);
    const nidhithLink = `https://wa.me/918197974368?text=${encodedMessage}`;

    setIsSuccess(true);
    window.open(nidhithLink, "_blank");
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 bg-[#faf8ff] bg-purple-mesh border-b border-purple-200/60 overflow-hidden" id="hero">
      {/* Interactive 3D WebGL Floating Crystals & Particle Galaxy */}
      <ThreeDBackground className="opacity-80" />

      {/* Aesthetic Floating Decorative Ambient Orbs */}
      <div className="absolute -top-12 left-1/4 w-[34rem] h-[34rem] bg-purple-300/35 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute top-28 -right-12 w-[28rem] h-[28rem] bg-amber-200/40 rounded-full blur-3xl pointer-events-none animate-float-reverse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200/25 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ══════════════════════════════════════════════
               LEFT COLUMN: Website Intro & Creative Services
               ══════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Studio Pill Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100/90 border border-purple-300/80 px-4 py-1.5 rounded-full w-fit mb-5 shadow-sm shadow-purple-500/10 hover:scale-105 transition-transform duration-300">
              <span className="inline-block text-amber-500 animate-spin-slow">✦</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Digital Marketing & Web Development Studio • Mysuru</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.3rem] font-extrabold text-[#180f2d] tracking-tight leading-[1.15] mb-5 font-display">
              Elevate Your Brand With <span className="text-gradient-purple font-extrabold">Digital Marketing</span> &{" "}
              <span className="text-gradient-gold font-extrabold">Custom Websites</span>
            </h1>

            {/* Short, Punchy Description */}
            <p className="text-[#43395b] text-base sm:text-lg leading-relaxed mb-6 font-sans max-w-2xl font-normal">
              We design ultra-fast modern websites, run high-ROI ad funnels, and build striking visual designs tailored to your business goals. 100% in-house craft.
            </p>

            {/* Trust Badges Strip */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-semibold text-[#5a4f73]">
              <span className="flex items-center gap-2 bg-white/95 border border-purple-200/80 px-3.5 py-2 rounded-xl shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>100% In-House Team • Mysuru</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/95 border border-purple-200/80 px-3.5 py-2 rounded-xl shadow-sm">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Budget-Friendly Packages
              </span>
              <span className="flex items-center gap-1.5 bg-white/95 border border-purple-200/80 px-3.5 py-2 rounded-xl shadow-sm">
                <span className="text-amber-500">⚡</span>
                Fast 7–14 Day Delivery
              </span>
            </div>

            {/* CREATIVE SERVICES QUICK GLANCE */}
            <div className="pt-6 border-t border-purple-200/70">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-900 font-display flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-amber-500"></span>
                  Our Core Services
                </h2>
                <a href="#services" className="text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-1 group">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Service 1 */}
                <a href="#services" className="group p-4 rounded-2xl bg-white/95 hover:bg-white border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-base font-bold mb-2.5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    💻
                  </div>
                  <h3 className="text-sm font-bold text-[#180f2d] group-hover:text-purple-700 transition-colors font-display">
                    Custom Websites
                  </h3>
                  <p className="text-[11px] text-[#5e5377] mt-1 leading-snug">
                    Lightning-fast, mobile-friendly & zero bloat.
                  </p>
                </a>

                {/* Service 2 */}
                <a href="#services" className="group p-4 rounded-2xl bg-white/95 hover:bg-white border border-purple-100 hover:border-amber-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-base font-bold mb-2.5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    🚀
                  </div>
                  <h3 className="text-sm font-bold text-[#180f2d] group-hover:text-amber-700 transition-colors font-display">
                    Digital Marketing & Ads
                  </h3>
                  <p className="text-[11px] text-[#5e5377] mt-1 leading-snug">
                    Meta & Google ad funnels targeted for leads.
                  </p>
                </a>

                {/* Service 3 */}
                <a href="#services" className="group p-4 rounded-2xl bg-white/95 hover:bg-white border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-base font-bold mb-2.5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    🎨
                  </div>
                  <h3 className="text-sm font-bold text-[#180f2d] group-hover:text-purple-700 transition-colors font-display">
                    Posters & Visual Identity
                  </h3>
                  <p className="text-[11px] text-[#5e5377] mt-1 leading-snug">
                    Striking campaign creatives & brand designs.
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
               RIGHT COLUMN: Direct Quote Card
               ══════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card3DTilt maxTilt={8} glare={true} className="rounded-3xl">
              <div id="quote-card" className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200/90 shadow-xl shadow-purple-600/10 relative overflow-hidden card-aesthetic-lift h-full">
                {/* Header accent line */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-amber-400 to-purple-600"></div>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                      Free Consultation
                    </span>
                    <span className="text-xs text-purple-700 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Quick WhatsApp Response
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#180f2d] font-display">
                    Get a Free Quote
                  </h3>
                  <p className="text-xs text-[#5e5377] mt-1 font-sans">
                    Tell us what you need. We'll reply with a custom proposal and exact pricing.
                  </p>
                </div>

                {/* Quote Form */}
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  {/* WhatsApp Number */}
                  <div>
                    <label htmlFor="quote-whatsapp" className="block text-xs font-bold text-[#2e2446] mb-1 font-display">
                      Your WhatsApp Number <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="quote-whatsapp"
                        name="whatsapp"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        pattern="[0-9]{10}"
                        placeholder="98765 43210"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-purple-50/50 border border-purple-200 focus:border-purple-600 focus:bg-white text-sm text-[#1c1335] font-medium outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-bold text-[#2e2446] mb-1 font-display">
                      Your Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-200 focus:border-purple-600 focus:bg-white text-sm text-[#1c1335] font-medium outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="quote-business-type" className="block text-xs font-bold text-[#2e2446] mb-1 font-display">
                      Service Needed <span className="text-amber-600">*</span>
                    </label>
                    <select
                      id="quote-business-type"
                      name="businessType"
                      required
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-200 focus:border-purple-600 focus:bg-white text-sm text-[#1c1335] font-medium outline-none transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select service...</option>
                      <option value="Custom Website Development">Custom Website Development</option>
                      <option value="Digital Marketing & Paid Ads">Digital Marketing & Paid Ads</option>
                      <option value="Posters & Visual Design">Posters & Visual Design</option>
                      <option value="Complete Brand Launch Package">Complete Brand Launch Package</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="quote-notes" className="block text-xs font-bold text-[#2e2446] mb-1 font-display">
                      Project Notes <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="quote-notes"
                      name="notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Brief details about your business..."
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 focus:border-purple-600 focus:bg-white text-sm text-[#1c1335] font-medium outline-none transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer font-display border border-emerald-300/40"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Submit & Open WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 font-sans">
                    🔒 Instant WhatsApp dispatch with your inquiry.
                  </p>
                </form>

                {/* Success Banner */}
                {isSuccess && (
                  <div id="quote-success-banner" className="mt-4 p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs">
                    <div className="flex items-center gap-2 text-purple-900 font-bold mb-1">
                      <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Quote Request Prepared!</span>
                    </div>
                    <p className="text-slate-600">
                      Your message has been formatted and opened directly in WhatsApp. Our team will get back to you shortly!
                    </p>
                  </div>
                )}
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
