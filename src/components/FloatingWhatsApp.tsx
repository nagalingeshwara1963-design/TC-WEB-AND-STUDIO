"use client";

import React, { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { BASE_PATH, whatsappLink } from "@/lib/site";

export default function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(false);
  const [onDashboard, setOnDashboard] = useState(false);

  // Not shown on the private dashboard page
  useEffect(() => {
    setOnDashboard(window.location.pathname.startsWith(`${BASE_PATH}/dashboard`));
  }, []);

  // Hide while the contact section is on screen
  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (onDashboard) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed z-50 right-[calc(1rem+env(safe-area-inset-right))] bottom-[calc(1rem+env(safe-area-inset-bottom))] w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 transition-opacity duration-300 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
