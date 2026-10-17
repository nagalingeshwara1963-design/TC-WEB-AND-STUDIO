import React from "react";
import { WhatsAppIcon } from "./Icons";
import Eyebrow from "./Eyebrow";
import { whatsappLink } from "@/lib/site";

const NOTES = [
  { title: "Custom quote", text: "Every project is quoted on what you actually need." },
  {
    title: "iPhone shoots keep it low",
    text: "Most shoots are filmed on iPhone to keep costs down. A pro camera setup is available on request.",
  },
  {
    title: "Travel for shoots",
    text: "Shoots outside Mysore are welcome anywhere in Karnataka. Travel is quoted upfront.",
  },
  {
    title: "Ad spend is separate",
    text: "Your ad budget is paid directly by you to Meta or Google. Our fee covers the creative and management.",
  },
  {
    title: "Ongoing SEO is separate",
    text: "Basic on-page SEO comes with every website. Ongoing SEO work is quoted separately.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#2a1650] via-[#24123f] to-[#1c1335] p-6 sm:p-10 lg:p-12 text-white reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Eyebrow dark>Pricing</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-display text-white mb-4">
                Priced to your budget.
              </h2>
              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed mb-8">
                No fixed packages. Tell us what you want to achieve and what you can spend, and we&apos;ll tell you honestly what we
                can do for it.
              </p>
              <a
                href={whatsappLink("Hi! I'd like to discuss my budget for a project with TC Web & Studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#1c1335] font-bold font-display transition-colors w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Discuss your budget
              </a>
            </div>

            <ul className="lg:col-span-3 grid grid-cols-1 gap-4">
              {NOTES.map((note) => (
                <li key={note.title} className="p-5 rounded-2xl bg-white/5 border border-white/15">
                  <h3 className="text-lg font-bold font-display text-white mb-1">{note.title}</h3>
                  <p className="text-sm sm:text-base text-purple-100/85 leading-relaxed">{note.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
