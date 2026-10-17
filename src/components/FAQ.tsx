import React from "react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "How much does it cost?",
    a: "There are no fixed packages. Tell us what you want to achieve and what you can spend, and we'll quote honestly on WhatsApp for exactly what you need.",
  },
  {
    q: "Is an iPhone shoot good enough?",
    a: "For most work, yes. Recent iPhones film sharp, high-resolution video that's perfect for reels and social media, and it keeps your cost low. For bigger productions we can bring a pro camera setup on request.",
  },
  {
    q: "Do you shoot outside Mysuru?",
    a: "Yes. We're based in Mysuru and shoot anywhere in Karnataka. Travel is quoted separately and agreed before the shoot.",
  },
  {
    q: "Can you work with clients outside Karnataka?",
    a: "Yes. Websites, social media, ads and design can be done for clients anywhere in India. We work over WhatsApp and calls.",
  },
  {
    q: "How long does a website take?",
    a: "It depends on the size of the site and how quickly content is ready. We agree a clear timeline in the plan before we start.",
  },
  {
    q: "Do I pay the ad budget to you?",
    a: "No. Your ad budget is paid directly by you to Meta or Google. Our fee covers the creative work and managing the campaigns.",
  },
  {
    q: "Do you work with hospitals and clinics?",
    a: "Yes. We work consent-first, make no misleading claims, get every post approved by the doctor or hospital, and follow the National Medical Commission's advertising guidelines.",
  },
  {
    q: "How do we start?",
    a: "Message us on WhatsApp or fill in the form below. We'll ask a few questions about your business, then suggest a plan and a quote.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-purple-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="FAQ" title="Questions people often ask" />
        </div>

        <div className="space-y-3 reveal-on-scroll">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-[#faf8ff] border border-purple-100 open:border-purple-300">
              <summary className="flex items-center justify-between gap-4 min-h-[56px] px-5 py-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base font-bold text-[#180f2d] font-display">{item.q}</span>
                <svg
                  className="w-5 h-5 text-purple-700 shrink-0 transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="px-5 pb-5 -mt-1 text-sm sm:text-base text-[#5e5377] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
