import React from "react";
import SectionHeading from "./SectionHeading";
import { BASE_PATH } from "@/lib/site";

const CLIENTS = [
  { name: "Saaraswath IAS/KAS Academy", file: "saaraswath.webp" },
  { name: "Jain Autocars", file: "jain-autocars.webp" },
  { name: "Manikanta Nursery and Farm", file: "manikanta.webp" },
  { name: "Soulfull Learning", file: "soulfull.webp" },
  { name: "Samvruddhi Housing Loans", file: "samvruddhi.webp" },
  { name: "Darjeeling Momos", file: "darjeeling-momos.webp" },
  { name: "Vinutha Flower Decorations", file: "vinutha.webp" },
];

function ClientLogo({ name, file, hidden = false }: { name: string; file: string; hidden?: boolean }) {
  return (
    <li className="w-32 sm:w-36 mx-2 shrink-0 flex flex-col items-center text-center" aria-hidden={hidden || undefined}>
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white border border-purple-200/80">
        <img
          src={`${BASE_PATH}/images/clients/${file}`}
          alt={hidden ? "" : `${name} logo`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={112}
          height={112}
        />
      </div>
      <span className="mt-2.5 text-xs font-semibold text-[#3c3252] leading-snug px-1">{name}</span>
    </li>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-16 sm:py-20 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionHeading eyebrow="Our clients" title="Brands we've worked with" center />
      </div>

      {/* Slow moving row (pauses on hover) */}
      <div className="marquee motion-reduce:hidden reveal-on-scroll">
        {/* Four copies so the row stays full on wide screens; the track moves by half */}
        <ul className="marquee-track">
          {[0, 1, 2, 3].flatMap((copy) =>
            CLIENTS.map((c) => <ClientLogo key={`${c.file}-${copy}`} {...c} hidden={copy > 0} />)
          )}
        </ul>
      </div>

      {/* Static grid for visitors with reduced motion */}
      <ul className="hidden motion-reduce:flex flex-wrap justify-center gap-x-4 gap-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {CLIENTS.map((c) => (
          <ClientLogo key={`${c.file}-static`} {...c} />
        ))}
      </ul>
    </section>
  );
}
