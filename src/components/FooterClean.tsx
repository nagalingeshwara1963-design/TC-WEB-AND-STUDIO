import React from "react";

export default function FooterClean() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-purple-200/80 pt-14 pb-10 text-[#3c3250]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-purple-100">
          {/* Brand & Story Column */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 to-amber-600 flex items-center justify-center text-white font-extrabold text-base shadow-sm font-display border border-amber-300/40">
                TC
              </div>
              <div>
                <span className="block text-lg font-extrabold text-[#1c1335] font-display">
                  TC WEB & STUDIO
                </span>
                <span className="block text-[10px] font-bold text-amber-700 uppercase tracking-widest font-mono">
                  Mysuru, Karnataka
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5e5377] leading-relaxed max-w-sm">
              Custom web platforms, high-converting digital marketing, and commercial visual designs. Transparent, budget-friendly, and 100% in-house.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/918197974368?text=Hi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20TC%20Web%20%26%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white border border-emerald-200 text-xs font-bold transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>WhatsApp Studio Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c1335] font-display">
              Navigation
            </h4>
            <ul className="text-xs space-y-2 font-medium">
              <li>
                <a href="#about" className="text-slate-600 hover:text-purple-700 transition-colors">
                  About The Studio
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-600 hover:text-purple-700 transition-colors">
                  Featured Portfolio
                </a>
              </li>
              <li>
                <a href="#clients" className="text-slate-600 hover:text-purple-700 transition-colors">
                  Client Collaborations
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-purple-700 transition-colors">
                  Studio Services
                </a>
              </li>
              <li>
                <a href="#prices" className="text-amber-800 hover:text-amber-900 font-semibold transition-colors">
                  Our Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-purple-700 transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Department Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c1335] font-display">
              Quick Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/918197974368?text=Hi!%20I%20would%20like%20to%20discuss%20a%20custom%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-purple-50/60 hover:bg-purple-100/80 border border-purple-100 flex items-center justify-between transition-colors group"
              >
                <div>
                  <strong className="text-purple-950 font-display block">Web Architecture</strong>
                  <span className="text-[11px] text-slate-500">Custom sites & portals</span>
                </div>
                <span className="text-xs text-purple-700 font-bold group-hover:translate-x-0.5 transition-transform">
                  Inquire &rarr;
                </span>
              </a>

              <a
                href="https://wa.me/918197974368?text=Hi!%20I%20would%20like%20to%20order%20posters%20and%20branding."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-amber-50/60 hover:bg-amber-100/80 border border-amber-100 flex items-center justify-between transition-colors group"
              >
                <div>
                  <strong className="text-amber-950 font-display block">Posters & Visual Design</strong>
                  <span className="text-[11px] text-slate-500">Print, social & menu graphics</span>
                </div>
                <span className="text-xs text-amber-800 font-bold group-hover:translate-x-0.5 transition-transform">
                  Inquire &rarr;
                </span>
              </a>

              <a
                href="https://wa.me/918197974368?text=Hi!%20I%20would%20like%20to%20discuss%20paid%20ads%20and%20marketing."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-purple-50/60 hover:bg-purple-100/80 border border-purple-100 flex items-center justify-between transition-colors group"
              >
                <div>
                  <strong className="text-purple-950 font-display block">Digital Marketing & Ads</strong>
                  <span className="text-[11px] text-slate-500">Meta/Google ad funnels</span>
                </div>
                <span className="text-xs text-purple-700 font-bold group-hover:translate-x-0.5 transition-transform">
                  Inquire &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#73688b]">
          <p>&copy; {currentYear} TC Web & Studio. All rights reserved. Mysuru, Karnataka.</p>
          <div className="flex items-center gap-3">
            <span>Handcrafted Modern Web</span>
            <span>•</span>
            <span>100% In-House</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
