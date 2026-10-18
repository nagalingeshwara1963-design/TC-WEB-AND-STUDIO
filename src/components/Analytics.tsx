"use client";

import { useEffect } from "react";
import { BASE_PATH, GOATCOUNTER_CODE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

// Loads the cookie-free GoatCounter counter and counts outbound contact clicks.
export default function Analytics() {
  useEffect(() => {
    // Don't count the private dashboard as a website visit
    if (!GOATCOUNTER_CODE || window.location.pathname.startsWith(`${BASE_PATH}/dashboard`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
    document.body.appendChild(script);

    // Count clicks on WhatsApp, Instagram and email links as events
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const where = link.closest("section")?.id || link.closest("header, footer")?.tagName.toLowerCase() || "page";
      if (href.includes("wa.me")) trackEvent(`whatsapp-click/${where}`, `WhatsApp click (${where})`);
      else if (href.includes("instagram.com")) trackEvent(`instagram-click/${where}`, `Instagram click (${where})`);
      else if (href.startsWith("mailto:")) trackEvent(`email-click/${where}`, `Email click (${where})`);
    };
    document.addEventListener("click", onClick, { capture: true });

    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      script.remove();
    };
  }, []);

  return null;
}
