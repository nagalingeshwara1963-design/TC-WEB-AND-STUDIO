import React from "react";
import Logo from "./Logo";
import { InstagramIcon, MailIcon } from "./Icons";
import { BASE_PATH, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_LINKS, SERVICE_NAMES } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/servicePages";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1335] text-purple-100/85 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed">A founder-led creative and digital studio in Mysore, Karnataka.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white font-display mb-4">Sections</h2>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex items-center min-h-[36px] text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white font-display mb-4">Services</h2>
            <ul className="space-y-2 text-sm">
              {SERVICE_NAMES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <h2 className="text-sm font-bold text-white font-display mt-6 mb-3">Popular in Mysore</h2>
            <ul className="space-y-1">
              {SERVICE_PAGES.map((page) => (
                <li key={page.slug}>
                  <a href={`${BASE_PATH}/${page.slug}/`} className="inline-flex items-center min-h-[36px] text-sm hover:text-white underline-offset-4 hover:underline transition-colors">
                    {page.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white font-display mb-4">Follow &amp; write</h2>
            <ul className="space-y-1">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[36px] text-sm hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />@{INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 min-h-[36px] text-sm hover:text-white transition-colors break-all">
                  <MailIcon className="w-4 h-4 shrink-0" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 pt-6 border-t border-white/10 text-xs text-purple-200/70">
          © {year} TC Web &amp; Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
