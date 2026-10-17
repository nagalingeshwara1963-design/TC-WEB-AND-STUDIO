// Shared site details. The WhatsApp number is only ever used inside wa.me links.
const WHATSAPP_NUMBER = "918197974368"; // Nidhith

export const DEFAULT_WA_MESSAGE = "Hi! I would like to discuss a project with TC Web & Studio.";

export function whatsappLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const INSTAGRAM_HANDLE = "tc_web_and_studio";
export const INSTAGRAM_URL = "https://www.instagram.com/tc_web_and_studio/";
export const EMAIL = "tcworksmysore@gmail.com";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How we work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const SERVICE_NAMES = [
  "Websites",
  "Social media",
  "Video reels & shoots",
  "Posters & branding",
  "Meta & Google ads",
  "SEO",
];
