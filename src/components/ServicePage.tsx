import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Eyebrow from "./Eyebrow";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { BASE_PATH, SITE_ORIGIN, whatsappLink } from "@/lib/site";
import { SERVICE_PAGES, type ServicePageContent } from "@/lib/servicePages";

export default function ServicePage({ page }: { page: ServicePageContent }) {
  const pageUrl = `${SITE_ORIGIN}${BASE_PATH}/${page.slug}/`;
  const homeUrl = `${SITE_ORIGIN}${BASE_PATH}/`;
  const others = SERVICE_PAGES.filter((p) => p.slug !== page.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: page.serviceType,
      description: page.metaDescription,
      url: pageUrl,
      areaServed: [
        { "@type": "City", name: "Mysore" },
        { "@type": "State", name: "Karnataka" },
      ],
      provider: { "@id": `${homeUrl}#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
        { "@type": "ListItem", position: 2, name: page.navLabel, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Intro */}
        <section className="bg-purple-mesh border-b border-purple-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-10 sm:pb-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#5e5377]">
              <a href={`${BASE_PATH}/`} className="font-semibold text-purple-800 hover:underline underline-offset-4">
                Home
              </a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>{page.navLabel}</span>
            </nav>
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#180f2d] tracking-tight leading-[1.1] font-display mb-6">
              {page.h1}
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-[#43395b] leading-relaxed">
              {page.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(page.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-display transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp us for a quote
              </a>
              <a
                href={`${BASE_PATH}/#contact`}
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl border-2 border-purple-700 text-purple-800 hover:bg-purple-700 hover:text-white font-bold font-display transition-colors"
              >
                Fill the enquiry form
              </a>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-14 sm:py-16 bg-white border-b border-purple-200/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#180f2d] mb-8">{page.includesTitle}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.includes.map((item) => (
                <li key={item.title} className="p-6 rounded-2xl bg-[#faf8ff] border border-purple-200/80">
                  <h3 className="text-lg font-bold text-[#180f2d] font-display mb-1.5">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#5e5377] leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who it's for + why affordable */}
        <section className="py-14 sm:py-16 border-b border-purple-200/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-[#180f2d] mb-6">{page.idealForTitle}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.idealFor.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-base font-medium text-[#2e2446]">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 shrink-0">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#2a1650] to-[#1c1335] text-white">
              <h2 className="text-2xl font-extrabold font-display mb-3">Why we cost less, and still look great</h2>
              <p className="text-purple-100/85 leading-relaxed">
                No big crews or fancy offices. Just three skilled founders in Mysore who plan, shoot and design everything
                themselves. Low production cost, no compromise on quality.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-16 bg-white border-b border-purple-200/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#180f2d] mb-8">Common questions</h2>
            <div className="space-y-3">
              {page.faqs.map((item) => (
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

        {/* Other services + CTA */}
        <section className="py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-[#180f2d] mb-6">More from TC Web &amp; Studio</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {others.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`${BASE_PATH}/${p.slug}/`}
                    className="flex items-center justify-between gap-3 min-h-[56px] p-5 rounded-2xl bg-white border border-purple-200 hover:border-purple-400 font-bold text-[#1c1335] font-display transition-colors"
                  >
                    {p.navLabel}
                    <span aria-hidden="true" className="text-purple-700">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="rounded-3xl bg-purple-50 border border-purple-200 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-[#180f2d]">Your budget. Our creativity.</h2>
                <p className="mt-2 text-[#5e5377]">Tell us what you need. We&apos;ll reply on WhatsApp with ideas and a quote.</p>
              </div>
              <a
                href={whatsappLink(page.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-display transition-colors w-full md:w-auto shrink-0"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
