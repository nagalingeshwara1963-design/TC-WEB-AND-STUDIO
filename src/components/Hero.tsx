import React from "react";
import IntroVideo from "./IntroVideo";
import { WhatsAppIcon } from "./Icons";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="hero" className="bg-purple-mesh border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-purple-900 bg-white border border-purple-200 px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true"></span>
            Creative &amp; digital studio · Mysuru, Karnataka
          </p>

          <h1 className="text-[2.4rem] leading-[1.1] sm:text-6xl lg:text-7xl font-extrabold text-[#180f2d] tracking-tight font-display mb-5">
            Your budget. <span className="text-gradient-purple-gold">Our creativity.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#43395b] leading-relaxed mb-7 max-w-2xl mx-auto">
            Reels, shoots, posters, social media, websites and ads for startups, growing businesses and personal brands. Three
            founders in Mysuru, one team for everything.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-display transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl border-2 border-purple-700 text-purple-800 hover:bg-purple-700 hover:text-white font-bold font-display transition-colors"
            >
              Get a quote
            </a>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <IntroVideo />
        </div>
      </div>
    </section>
  );
}
