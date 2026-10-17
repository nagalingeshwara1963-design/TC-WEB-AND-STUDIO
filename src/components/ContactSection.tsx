"use client";

import React from "react";

interface ServiceInquiryCard {
  title: string;
  icon: string;
  badge: string;
  desc: string;
  waParam: string;
  accent: "purple" | "amber";
}

const inquiryCards: ServiceInquiryCard[] = [
  {
    title: "Video & Commercial Shoots",
    icon: "🎬",
    badge: "Cinematography",
    desc: "4K commercial filming, brand reels, and high-retention video production.",
    waParam: "Hi! I would like to inquire about video production and commercial shoots.",
    accent: "purple",
  },
  {
    title: "Posters & Brand Identity",
    icon: "🎨",
    badge: "Visual Design",
    desc: "Promotional event posters, restaurant menus, and typography identity systems.",
    waParam: "Hi! I would like to inquire about poster design and brand identity.",
    accent: "amber",
  },
  {
    title: "Websites & Digital Marketing",
    icon: "💻",
    badge: "Web & Ads",
    desc: "Custom high-speed websites, Meta/Google ad campaigns, and local Mysuru SEO.",
    waParam: "Hi! I would like to inquire about custom web development and digital marketing.",
    accent: "purple",
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#faf8ff] bg-subtle-grid border-b border-purple-200/60" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 font-display shadow-sm">
            <span className="inline-block text-amber-500">✦</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#180f2d] tracking-tight mb-3 font-display leading-tight">
            Connect Directly With <span className="text-gradient-purple-gold">Our Studio</span>
          </h2>
          <p className="text-[#4e4368] text-sm sm:text-base leading-relaxed font-sans">
            Ready to start a project? Choose your department below or start a direct WhatsApp chat.
          </p>
        </div>

        {/* ──────────────────────────────────────────────────────────
             MASTER WHATSAPP BANNER
             ────────────────────────────────────────────────────────── */}
        <div className="mb-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-xl shadow-emerald-700/20 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-emerald-400/40 reveal-on-scroll">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-100 bg-emerald-800/50 px-3 py-1 rounded-full border border-emerald-400/30">
              Fastest Response Channel
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-2 mb-1">
              Chat Directly on WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Tap to message our studio team immediately. We review and respond to every inquiry promptly!
            </p>
          </div>

          <a
            href="https://wa.me/918197974368?text=Hi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20TC%20Web%20%26%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 py-4 px-8 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-sm flex items-center justify-center gap-3 transition-all shadow-lg shadow-emerald-900/20 font-display"
          >
            <svg className="w-5 h-5 fill-current text-emerald-600" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span>Start WhatsApp Chat</span>
          </a>
        </div>

        {/* ──────────────────────────────────────────────────────────
             SERVICE INQUIRY CARDS (NO RAW PHONE NUMBERS SHOWN)
             ────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inquiryCards.map((card) => {
            const isAmber = card.accent === "amber";
            return (
              <div
                key={card.title}
                className="bg-white rounded-3xl p-7 border border-purple-200/90 shadow-sm hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{card.icon}</span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isAmber
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-purple-50 text-purple-800 border-purple-200"
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1c1335] font-display mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#5e5377] leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100">
                  <a
                    href={`https://wa.me/918197974368?text=${encodeURIComponent(card.waParam)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-900 hover:text-white text-purple-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-all border border-purple-200"
                  >
                    <span>Message On WhatsApp</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
