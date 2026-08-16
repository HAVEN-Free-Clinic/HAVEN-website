/*
 * Shared language/translation helpers.
 *
 * Translation is done by the Google Translate widget, which reads a `googtrans`
 * cookie of the form `/en/<code>` on page load. Both the language dropdown in
 * the header and the "we noticed your device is in X" prompt drive that same
 * cookie, so the two never disagree about the current language.
 */

export interface Language {
  code: string;
  label: string;
  /** Written right-to-left. */
  rtl?: boolean;
}

export const LANGUAGES: Language[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ht", label: "Kreyòl Ayisyen" },
  { code: "fa", label: "فارسی", rtl: true },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية", rtl: true },
];

/** Marks an overlay as occupying the screen, so prompts can wait their turn. */
export const OVERLAY_ATTR = "data-haven-overlay";
export const OVERLAY_CLOSED_EVENT = "haven:overlay-closed";

export function getCurrentLangFromCookie(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return match?.[1] || "en";
}

/** True once the visitor has explicitly chosen any language themselves. */
export function hasExplicitLanguageChoice(): boolean {
  if (typeof document === "undefined") return false;
  return /googtrans=/.test(document.cookie);
}

export function clearGoogTransCookies() {
  // Clear for all possible path/domain combinations
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  const domains = ["", hostname, "." + hostname];
  // Also try parent domains (e.g. .example.com from sub.example.com)
  if (domainParts.length > 2) {
    domains.push("." + domainParts.slice(-2).join("."));
  }

  const paths = ["/", ""];
  const expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";

  for (const domain of domains) {
    for (const path of paths) {
      const domainPart = domain ? `; domain=${domain}` : "";
      const pathPart = path ? `; path=${path}` : "";
      document.cookie = `googtrans=; ${expires}${pathPart}${domainPart}`;
    }
  }
}

export function setGoogTransCookie(langCode: string) {
  document.cookie = `googtrans=/en/${langCode}; path=/;`;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${window.location.hostname}`;
}

/**
 * The visitor's preferred language, if we can offer it and it is not English.
 *
 * `navigator.languages` is in preference order, so we walk it and stop at the
 * first entry we recognise. Hitting English first means English is genuinely
 * preferred and we should stay quiet — someone whose list is
 * ["en-US", "es"] reads English fine.
 */
export function detectPreferredLanguage(): Language | null {
  if (typeof navigator === "undefined") return null;

  const preferences =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];

  for (const raw of preferences) {
    if (!raw) continue;
    const base = raw.toLowerCase().split("-")[0];
    if (base === "en") return null;
    const match = LANGUAGES.find((l) => l.code === base);
    if (match) return match;
  }

  return null;
}
