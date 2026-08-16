/*
 * Curated translations for phrases the machine gets badly wrong.
 *
 * Google Translate renders "Get Involved" in Spanish as "Complicarse" — "to
 * get complicated". It is translating the idiom literally, and the result is
 * meaningless as a volunteering label. Where a mistranslation is this far off,
 * we supply our own wording and mark it notranslate so the widget leaves it be.
 *
 * Keep this list short. It is for phrases the machine actively gets wrong, not
 * a general translation layer — the rest of the site still goes through the
 * widget.
 *
 * TRANSLATION REVIEW: these were not written by native speakers. Please have
 * someone who speaks each language check them before launch.
 */

export const PHRASE_OVERRIDES: Record<string, Record<string, string>> = {
  "Get Involved": {
    es: "Participe",
    ht: "Patisipe",
    fr: "Participer",
    fa: "مشارکت کنید",
    ar: "شارك معنا",
  },
};

export function lookupPhrase(text: string, lang: string): string | null {
  if (!lang || lang === "en") return null;
  return PHRASE_OVERRIDES[text]?.[lang] ?? null;
}
