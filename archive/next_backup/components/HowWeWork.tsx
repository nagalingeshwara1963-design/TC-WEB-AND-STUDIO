import React from "react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { num: "01", title: "Talk", text: "Message us on WhatsApp. Tell us about your business and what you need." },
  { num: "02", title: "Plan", text: "We suggest what will work for your goal and budget, and agree the plan together." },
  { num: "03", title: "Make", text: "We design, shoot, write and build, and share drafts for your approval." },
  { num: "04", title: "Launch", text: "Your website, content or ads go live, and we keep improving them with you." },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-purple-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="How we work" title="Four simple steps" />
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-on-scroll">
          {STEPS.map((step) => (
            <li key={step.num} className="p-6 rounded-2xl bg-[#faf8ff] border border-purple-100">
              <span className="block text-sm font-bold text-amber-700 font-mono mb-3">{step.num}</span>
              <h3 className="text-xl font-bold text-[#180f2d] font-display mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-[#5e5377] leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
