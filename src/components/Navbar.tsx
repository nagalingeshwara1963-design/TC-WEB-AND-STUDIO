"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-40 bg-[#faf8ff]/90 backdrop-blur-md border-b border-purple-200/60 transition-all duration-300 ${
        hasScrolled ? "shadow-md shadow-purple-900/5" : ""
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.75rem]">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="TC Web & Studio Home"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-amber-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-purple-600/20 group-hover:scale-105 transition-all duration-200 font-display border border-amber-300/40">
              TC
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping"></span>
              </span>
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight text-[#1c1335] group-hover:text-purple-700 transition-colors font-display">
                TC WEB & STUDIO
              </span>
              <span className="block text-[10px] font-bold text-amber-700 uppercase tracking-widest font-mono">
                Marketing • Web • Creative Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/80 border border-purple-200/70 rounded-full px-3 py-1.5 shadow-sm shadow-purple-500/5">
            <a
              href="#about"
              className="nav-link px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-all font-display"
            >
              About Us
            </a>
            <a
              href="#portfolio"
              className="nav-link px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-all font-display"
            >
              Team Portfolio
            </a>
            <a
              href="#clients"
              className="nav-link px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-all font-display"
            >
              Clients
            </a>
            <a
              href="#services"
              className="nav-link px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-all font-display"
            >
              Services
            </a>
            <a
              href="#prices"
              className="nav-link px-3.5 py-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50/70 hover:bg-amber-100/70 border border-amber-200/80 rounded-full transition-all font-display flex items-center gap-1"
            >
              <span>Our Prices</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            </a>
            <a
              href="#contact"
              className="nav-link px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-all font-display"
            >
              Contact
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/918197974368?text=Hi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20TC%20Web%20%26%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-pill text-xs py-2 px-4 shadow-sm"
              title="Chat with TC Web & Studio on WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Fast Get Quote Anchor Button */}
            <a href="#quote-card" className="btn-gold-luxury text-xs py-2 px-4 shadow-sm font-display font-bold">
              <span>Get Quote</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/918197974368?text=Hi%20Nidhith!%20I%20would%20like%20to%20discuss%20a%20project%20with%20TC%20Web%20%26%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-pill text-[11px] py-1.5 px-3"
            >
              WhatsApp
            </a>

            <button
              type="button"
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-purple-900 hover:text-purple-700 bg-purple-50 border border-purple-200 rounded-xl focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden border-t border-purple-200/80 bg-[#faf8ff] px-6 pt-4 pb-8 space-y-2 shadow-xl">
          <a
            href="#about"
            onClick={closeMenu}
            className="mobile-link block px-4 py-3 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-all font-display"
          >
            About Us (The Company)
          </a>
          <a
            href="#portfolio"
            onClick={closeMenu}
            className="mobile-link block px-4 py-3 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-all font-display"
          >
            Featured Portfolio
          </a>
          <a
            href="#clients"
            onClick={closeMenu}
            className="mobile-link block px-4 py-3 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-all font-display"
          >
            Previous & Current Clients
          </a>
          <a
            href="#services"
            onClick={closeMenu}
            className="mobile-link block px-4 py-3 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-all font-display"
          >
            Services
          </a>
          <a
            href="#prices"
            onClick={closeMenu}
            className="mobile-link block px-4 py-3 text-sm font-bold text-amber-800 bg-amber-50/80 border border-amber-200 rounded-xl transition-all font-display flex items-center justify-between"
          >
            <span>Our Prices (Custom to Budget)</span>
            <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-mono font-bold">
              BUDGET-FRIENDLY
            </span>
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mobile-link block px-4 py-3 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-all font-display"
          >
            Contact Us
          </a>

          <div className="pt-5 border-t border-purple-200 flex flex-col gap-3 mt-3">
            <a
              href="#quote-card"
              onClick={closeMenu}
              className="mobile-link w-full btn-gold-luxury text-center py-3 text-xs font-bold"
            >
              Get Custom Quote
            </a>
            <a
              href="https://wa.me/918197974368?text=Hi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20TC%20Web%20%26%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-whatsapp-pill text-center text-xs py-3 font-bold justify-center"
            >
              WhatsApp Studio Inquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
