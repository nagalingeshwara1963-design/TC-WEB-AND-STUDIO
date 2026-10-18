// Small helper for counting events (WhatsApp clicks, form sends) in GoatCounter.
// Does nothing when GoatCounter isn't loaded.

type GoatCounter = { count: (opts: { path: string; title?: string; event?: boolean }) => void };

export function trackEvent(name: string, title?: string) {
  if (typeof window === "undefined") return;
  const gc = (window as unknown as { goatcounter?: GoatCounter }).goatcounter;
  if (!gc || typeof gc.count !== "function") return;
  try {
    gc.count({ path: name, title: title ?? name, event: true });
  } catch {
    // Never let tracking break the page
  }
}
