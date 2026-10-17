"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { InstagramIcon, MailIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, SHOOT_TYPES, whatsappLink } from "@/lib/site";

const BUSINESS_TYPES = [
  "Education / coaching",
  "Restaurant / food",
  "Automobile",
  "Real estate / finance",
  "Farm / agriculture",
  "Clinic / healthcare",
  "Events / decor",
  "Retail / shop",
  "Personal brand",
  "Wedding / personal event",
  "Other",
];

const SHOOT = "Photo / video shoot";
const NEEDS = ["Video / reels", SHOOT, "Social media", "Posters & branding", "Ads", "Website", "SEO"];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[#faf8ff] border border-purple-200 focus:border-purple-600 focus:bg-white text-base text-[#1c1335] outline-none transition-colors placeholder:text-slate-400";

export default function Contact() {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [shootType, setShootType] = useState("");
  const [shootDate, setShootDate] = useState("");
  const [shootLocation, setShootLocation] = useState("");
  const [error, setError] = useState("");
  const wantsShoot = needs.includes(SHOOT);

  const toggleNeed = (need: string) => {
    setNeeds((current) => (current.includes(need) ? current.filter((n) => n !== need) : [...current, need]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const missing = [];
    if (!name.trim()) missing.push("your name");
    if (!businessType) missing.push("your business type");
    if (missing.length) {
      setError(`Please add ${missing.join(" and ")}.`);
      return;
    }
    setError("");

    const message = [
      "Hi! New enquiry from the TC Web & Studio website.",
      `Name: ${name.trim()}`,
      `Business type: ${businessType}`,
      `Needs: ${needs.length ? needs.join(", ") : "Not sure yet"}`,
      ...(wantsShoot
        ? [
            `Shoot type: ${shootType || "Not decided"}`,
            `Shoot date: ${shootDate ? new Date(`${shootDate}T00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "Not decided"}`,
            `Shoot location: ${shootLocation.trim() || "Not decided"}`,
          ]
        : []),
      `Details: ${notes.trim() || "None"}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const cards = [
    { icon: <WhatsAppIcon />, label: "WhatsApp", value: "Chat with us", href: whatsappLink(), external: true },
    { icon: <InstagramIcon />, label: "Instagram", value: `@${INSTAGRAM_HANDLE}`, href: INSTAGRAM_URL, external: true },
    { icon: <MailIcon />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
    { icon: <PinIcon />, label: "Location", value: "Mysore, Karnataka", href: null, external: false },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <SectionHeading eyebrow="Contact" title="Let's talk about your project" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-on-scroll">
          <form onSubmit={handleSubmit} noValidate className="lg:col-span-2 p-5 sm:p-8 rounded-2xl bg-white border border-purple-200 space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-bold text-[#2e2446] mb-1.5 font-display">
                Your name <span className="text-amber-700">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className={inputClass}
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="contact-business" className="block text-sm font-bold text-[#2e2446] mb-1.5 font-display">
                Business type <span className="text-amber-700">*</span>
              </label>
              <select
                id="contact-business"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className={`${inputClass} cursor-pointer`}
                aria-required="true"
              >
                <option value="" disabled>
                  Select your business type
                </option>
                {BUSINESS_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <fieldset>
              <legend className="block text-sm font-bold text-[#2e2446] mb-2 font-display">
                What do you need? <span className="text-slate-500 font-normal">(pick any)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {NEEDS.map((need) => {
                  const selected = needs.includes(need);
                  return (
                    <label
                      key={need}
                      className={`inline-flex items-center min-h-[44px] px-4 rounded-xl border text-sm font-semibold cursor-pointer select-none transition-colors ${
                        selected ? "bg-purple-700 border-purple-700 text-white" : "bg-white border-purple-200 text-[#3c3252] hover:border-purple-400"
                      }`}
                    >
                      <input type="checkbox" className="sr-only" checked={selected} onChange={() => toggleNeed(need)} />
                      {need}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {wantsShoot && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                <div>
                  <label htmlFor="shoot-type" className="block text-sm font-bold text-[#2e2446] mb-1.5 font-display">
                    Shoot type
                  </label>
                  <select id="shoot-type" value={shootType} onChange={(e) => setShootType(e.target.value)} className={`${inputClass} cursor-pointer`}>
                    <option value="">Select</option>
                    {SHOOT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="shoot-date" className="block text-sm font-bold text-[#2e2446] mb-1.5 font-display">
                    Date <span className="text-slate-500 font-normal">(if known)</span>
                  </label>
                  <input
                    id="shoot-date"
                    type="date"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
                    className={`${inputClass} min-h-[50px] appearance-none`}
                  />
                </div>
                <div>
                  <label htmlFor="shoot-location" className="block text-sm font-bold text-[#2e2446] mb-1.5 font-display">
                    Location
                  </label>
                  <input
                    id="shoot-location"
                    type="text"
                    value={shootLocation}
                    onChange={(e) => setShootLocation(e.target.value)}
                    placeholder="e.g. Mysore"
                    className={inputClass}
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="contact-notes" className="block text-sm font-bold text-[#2e2446] mb-1.5 font-display">
                Anything else? <span className="text-slate-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="contact-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="A few words about your business or project"
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>

            {error && (
              <p role="alert" className="text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-display transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Send on WhatsApp
            </button>
          </form>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
            {cards.map((card) => {
              const inner = (
                <>
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 text-purple-700 shrink-0">{card.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-amber-700 font-mono">{card.label}</span>
                    <span className="block text-sm sm:text-base font-semibold text-[#1c1335] break-words">{card.value}</span>
                  </span>
                </>
              );
              const cls = "flex items-center gap-4 p-4 rounded-2xl bg-[#faf8ff] border border-purple-100";
              return (
                <li key={card.label}>
                  {card.href ? (
                    <a
                      href={card.href}
                      className={`${cls} hover:border-purple-300 transition-colors`}
                      {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
