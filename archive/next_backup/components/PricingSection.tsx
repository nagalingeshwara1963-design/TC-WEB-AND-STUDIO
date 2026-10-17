import React from "react";

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#faf8ff] border-b border-purple-200/60" id="prices">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-3 font-display shadow-sm">
            <span className="inline-block text-amber-500">✦</span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#180f2d] tracking-tight mb-3 font-display leading-tight">
            Tailored to <span className="text-gradient-purple-gold">Your Budget</span>
          </h2>
          <p className="text-[#4e4368] text-sm sm:text-base leading-relaxed font-sans">
            No rigid, overpriced retainers. We customize our scope to match your exact budget and goals.
          </p>
        </div>

        {/* ──────────────────────────────────────────────────────────
             THE STUDIO ADVANTAGE
             ────────────────────────────────────────────────────────── */}
        <div className="mb-12 bg-gradient-to-br from-purple-900 via-[#1c1335] to-amber-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden reveal-on-scroll">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3 py-1 rounded-md border border-amber-400/30 mb-3">
              The TC Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight mb-3 text-white">
              Why We Are Truly Budget-Friendly
            </h3>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed font-sans">
              As a direct, hands-on studio, every rupee you invest goes straight into making your website faster, your visual designs more compelling, and your ad campaigns higher-converting.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </div>
              <span className="text-purple-100 font-medium">Zero office overhead markups</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </div>
              <span className="text-purple-100 font-medium">Flexible monthly or project scopes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </div>
              <span className="text-purple-100 font-medium">100% direct creator attention</span>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────
             TRANSPARENT AD SPEND & SEO SEPARATION
             ────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Meta Ad Campaign Costs Card */}
          <div className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-7 border border-purple-200/90 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2.5 py-1 rounded-md border border-purple-200">
                    Clarity & Trust
                  </span>
                  <span className="text-xl">📢</span>
                </div>
                <h4 className="text-lg font-bold text-[#1c1335] font-display mb-2">
                  Ad Spend Paid Directly to Platforms
                </h4>
                <p className="text-xs text-[#5e5377] leading-relaxed mb-4">
                  When running Meta or Google ads, your ad spend is billed straight by Meta/Google to your card with <strong>0% markup</strong>. You pay us only for campaign strategy, ad creatives, and performance management.
                </p>
                <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-purple-900 space-y-1">
                  <p><strong>• Your Ad Spend:</strong> You control the daily budget (e.g. ₹300–₹1,000/day).</p>
                  <p><strong>• Studio Fee:</strong> Fixed flat fee for creative production & optimization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Campaign Costs Card */}
          <div className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-7 border border-amber-200/90 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Clarity & Trust
                  </span>
                  <span className="text-xl">🔍</span>
                </div>
                <h4 className="text-lg font-bold text-[#1c1335] font-display mb-2">
                  Technical SEO Included, Ongoing Quoted
                </h4>
                <p className="text-xs text-[#5e5377] leading-relaxed mb-4">
                  Every website we engineer includes foundational technical SEO, clean semantic HTML, and Google search indexing. Long-term keyword ranking sprints are quoted based on local competition.
                </p>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100 text-xs text-amber-900 space-y-1">
                  <p><strong>• Included Free:</strong> Meta tags, sitemap, indexing & speed optimization.</p>
                  <p><strong>• Ongoing SEO:</strong> Optional monthly local ranking & citation packages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────
             CUSTOMIZABLE SAMPLE PACKAGES
             ────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-xl font-bold text-[#1c1335] font-display">
            Sample Frameworks
          </h3>
          <p className="text-xs text-[#5e5377] mt-1">
            We adapt deliverables and payment schedules to match your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Framework 1: Starter Creative */}
          <div className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-7 border border-purple-200/80 shadow-sm flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Starter Creative
                </span>
                <h4 className="text-lg font-extrabold text-[#1c1335] font-display mt-2.5 mb-1">
                  Visual Branding & Social
                </h4>
                <div className="my-3 pb-3 border-b border-purple-100">
                  <span className="text-xs font-bold text-amber-700 uppercase font-mono block">Customized To Budget</span>
                  <span className="text-[11px] text-slate-500 font-sans">Ideal for cafes, boutiques & local shops</span>
                </div>

                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>High-Impact Campaign & Menu Posters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Social Media Visual Direction & Covers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Direct WhatsApp collaboration</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-100">
                <a
                  href="https://wa.me/918197974368?text=Hi!%20I%20am%20interested%20in%20the%20Starter%20Creative%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-purple-200"
                >
                  <span>Discuss This Budget</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Framework 2: Custom Web Launch (Featured) */}
          <div className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-7 border-2 border-amber-400 shadow-lg relative flex flex-col justify-between h-full">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm z-20">
                Most Popular
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Full Web Launch
                </span>
                <h4 className="text-lg font-extrabold text-[#1c1335] font-display mt-2.5 mb-1">
                  Custom Web & Inbound Hub
                </h4>
                <div className="my-3 pb-3 border-b border-amber-100">
                  <span className="text-xs font-bold text-amber-700 uppercase font-mono block">Customized To Budget</span>
                  <span className="text-[11px] text-slate-500 font-sans">Turnkey web presence for businesses</span>
                </div>

                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Custom High-Speed Responsive Website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>WhatsApp Lead Capture & Inquiry Funnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Technical On-Page SEO & Google Indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Complete brand poster & graphics kit</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-100">
                <a
                  href="https://wa.me/918197974368?text=Hi!%20I%20am%20interested%20in%20the%20Custom%20Web%20Launch%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-xs font-display flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-600/20"
                >
                  <span>Get Website Quote</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Framework 3: Growth Suite */}
          <div className="rounded-3xl h-full">
            <div className="bg-white rounded-3xl p-7 border border-purple-200/80 shadow-sm flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Growth & Ads
                </span>
                <h4 className="text-lg font-extrabold text-[#1c1335] font-display mt-2.5 mb-1">
                  Full Growth Suite
                </h4>
                <div className="my-3 pb-3 border-b border-purple-100">
                  <span className="text-xs font-bold text-amber-700 uppercase font-mono block">Customized To Budget</span>
                  <span className="text-[11px] text-slate-500 font-sans">For brands ready to actively acquire leads</span>
                </div>

                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>High-Converting Custom Landing Page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Meta & Instagram Paid Ad Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Continuous Ad Creatives & Copy Testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Weekly Performance & Lead Reporting</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-100">
                <a
                  href="https://wa.me/918197974368?text=Hi!%20I%20am%20interested%20in%20the%20Full%20Growth%20Suite."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs font-display flex items-center justify-center gap-2 transition-colors border border-purple-200"
                >
                  <span>Discuss Growth Plan</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final Direct WhatsApp Budget Consultation Callout */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-white border border-purple-200/80 shadow-sm max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-[#1c1335] font-display mb-1.5">
            Have a specific project budget in mind?
          </h4>
          <p className="text-xs text-[#5e5377] mb-5">
            Tell us your target budget. We'll honestly outline what we can deliver without cutting corners.
          </p>
          <a
            href="https://wa.me/918197974368?text=Hi!%20I%20have%20a%20specific%20project%20budget%20in%20mind%20and%20want%20to%20discuss%20what%20TC%20Web%20%26%20Studio%20can%20build%20for%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all font-display"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span>Discuss Your Budget on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
