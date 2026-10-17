import React from "react";
import IntroVideo from "./IntroVideo";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { SERVICE_NAMES, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="hero" className="bg-purple-mesh border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-xs font-semibold text-purple-900 bg-white border border-purple-200 px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true"></span>
              Creative &amp; digital studio · Mysuru, Karnataka
            </p>

            <h1 className="text-[2.1rem] leading-[1.15] sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#180f2d] tracking-tight font-display mb-5">
              Websites, reels, posters &amp; ads for <span className="text-gradient-purple-gold">your business.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#43395b] leading-relaxed mb-7 max-w-xl">
              Three founders, one team. We plan it, make it and run it, so you don&apos;t need four different vendors.
            </p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8 max-w-lg">
              {SERVICE_NAMES.map((name) => (
                <li key={name} className="flex items-center gap-2 text-sm sm:text-[15px] font-medium text-[#2e2446]">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-700 shrink-0">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  {name}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
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

          <div className="min-w-0">
            <IntroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
