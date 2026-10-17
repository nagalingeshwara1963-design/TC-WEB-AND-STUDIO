"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { NAV_LINKS, whatsappLink } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf8ff]/95 backdrop-blur-md border-b border-purple-200/60 pt-[env(safe-area-inset-top)]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">
          <a href="#hero" onClick={close} aria-label="TC Web & Studio, back to top">
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-semibold text-[#3c3252] hover:text-purple-700 rounded-lg transition-colors font-display"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold font-display transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp us
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-purple-200 bg-white text-[#1c1335] cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4">
            <ul className="flex flex-col border-t border-purple-100 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex items-center min-h-[48px] px-2 text-base font-semibold text-[#1c1335] border-b border-purple-100/70 font-display"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-4 flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-emerald-600 text-white text-base font-bold font-display"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
