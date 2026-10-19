import React from "react";
import IntroVideo from "./IntroVideo";
import { WhatsAppIcon } from "./Icons";
import { BASE_PATH, whatsappLink } from "@/lib/site";

const TRUST_LOGOS = [
  { name: "Jain Autocars", file: "jain-autocars.webp" },
  { name: "Saaraswath IAS/KAS Academy", file: "saaraswath.webp" },
  { name: "Soulfull Learning", file: "soulfull.webp" },
  { name: "Samvruddhi Housing Loans", file: "samvruddhi.webp" },
  { name: "Darjeeling Momos", file: "darjeeling-momos.webp" },
];

export default function Hero() {
  return (
    <section id="hero" className="bg-purple-mesh border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-purple-900 bg-white border border-purple-200 px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true"></span>
            Creative &amp; digital studio · Mysore, Karnataka
          </p>

          <h1 className="text-[2.4rem] leading-[1.1] sm:text-6xl lg:text-7xl font-extrabold text-[#180f2d] tracking-tight font-display mb-5">
            Your budget. <span className="text-gradient-purple-gold">Our creativity.</span>
            <span className="block mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#2a1650]">
              Affordable digital marketing in Mysore.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#43395b] leading-relaxed mb-7 max-w-2xl mx-auto">
            We help businesses build a stronger digital presence through strategic content, social media management, websites and
            digital marketing. Three founders in Mysore, one team for everything.
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

          {/* Mini trust strip */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-sm font-semibold text-[#5e5377]">Trusted by local brands</p>
            <div className="flex items-center justify-center gap-4">
            <ul className="flex items-center -space-x-2">
              {TRUST_LOGOS.map((c) => (
                <li key={c.file} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white border-2 border-white shadow-sm ring-1 ring-purple-200">
                  <img
                    src={`${BASE_PATH}/images/clients/${c.file}`}
                    alt={c.name}
                    title={c.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </li>
              ))}
            </ul>
            <a href="#clients" className="text-sm font-bold text-purple-800 hover:text-purple-600 underline-offset-4 hover:underline">
              See all clients
            </a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <IntroVideo />
        </div>
      </div>
    </section>
  );
}
