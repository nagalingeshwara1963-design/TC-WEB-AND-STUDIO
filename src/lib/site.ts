// Shared site details. The WhatsApp number is only ever used inside wa.me links.
const WHATSAPP_NUMBER = "918197974368"; // Nidhith

export const DEFAULT_WA_MESSAGE = "Hi! I would like to discuss a project with TC Web & Studio.";

export function whatsappLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const SITE_ORIGIN = "https://tcwebandstudio.in";

export const INSTAGRAM_HANDLE = "tc_web_and_studio";
export const INSTAGRAM_URL = "https://www.instagram.com/tc_web_and_studio/";
export const EMAIL = "tcworksmysore@gmail.com";

// GoatCounter visit counter. Put your code here (e.g. "tcwebstudio" for tcwebstudio.goatcounter.com).
// Leave empty to turn tracking off.
export const GOATCOUNTER_CODE = "tcwebandstudio";

// Full paths so the links also work from the service pages
export const NAV_LINKS = [
  { href: `${BASE_PATH}/#services`, label: "Services" },
  { href: `${BASE_PATH}/#shoots`, label: "Shoots" },
  { href: `${BASE_PATH}/#clients`, label: "Clients" },
  { href: `${BASE_PATH}/#about`, label: "About" },
  { href: `${BASE_PATH}/#pricing`, label: "Pricing" },
  { href: `${BASE_PATH}/#faq`, label: "FAQ" },
  { href: `${BASE_PATH}/#contact`, label: "Contact" },
];

export const SERVICE_NAMES = [
  "Reels & content creation",
  "Photo & video shoots",
  "Social media management",
  "Posters & branding",
  "Digital marketing & ads",
  "Websites",
  "SEO",
  "Personal brand profiles",
];

export const SHOOT_TYPES = [
  "Pre-wedding shoot",
  "Wedding / engagement",
  "Birthday / family event",
  "Personal portfolio",
  "Car / bike delivery",
  "Product / food shoot",
  "Store opening / event",
  "Property / interiors",
];
