"use client";

import { useCallback, useEffect, useState } from "react";
import { Globe } from "lucide-react";
import {
  Language,
  OVERLAY_ATTR,
  OVERLAY_CLOSED_EVENT,
  detectPreferredLanguage,
  hasExplicitLanguageChoice,
  setGoogTransCookie,
} from "@/lib/translate";

/*
 * If a visitor's device is set to a language we can offer, say so — in that
 * language. We ask rather than switching automatically: a machine translation
 * imposed without consent is disorienting, and some bilingual patients
 * deliberately prefer the English original for medical wording.
 *
 * TRANSLATION REVIEW: the strings below were not written by native speakers.
 * They are short and standard, but this is a clinic — please have someone who
 * speaks each language check them before this goes live.
 */

interface Prompt {
  /** "We noticed your device is in X. Would you like to read this site in X?" */
  question: string;
  accept: string;
  decline: string;
}

const PROMPTS: Record<string, Prompt> = {
  es: {
    question: "¿Prefiere ver este sitio en español?",
    accept: "Sí, ver en español",
    decline: "No, gracias",
  },
  ht: {
    question: "Èske ou vle li sit sa a an kreyòl ayisyen?",
    accept: "Wi, li an kreyòl",
    decline: "Non, mèsi",
  },
  fr: {
    question: "Souhaitez-vous consulter ce site en français ?",
    accept: "Oui, voir en français",
    decline: "Non, merci",
  },
  fa: {
    question: "آیا مایل هستید این وب‌سایت را به فارسی ببینید؟",
    accept: "بله، به فارسی نمایش بده",
    decline: "نه، متشکرم",
  },
  ar: {
    question: "هل تريد عرض هذا الموقع باللغة العربية؟",
    accept: "نعم، اعرضه بالعربية",
    decline: "لا، شكرًا",
  },
};

const DISMISSED_KEY = "haven-language-prompt-dismissed";

function wasDismissed(): boolean {
  try {
    return window.localStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissal() {
  try {
    window.localStorage.setItem(DISMISSED_KEY, "1");
  } catch {
    // Blocked storage just means we may ask again next visit.
  }
}

export function LanguageSuggestion() {
  // Stays null until we are both sure we should ask and clear to do so.
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    // Never second-guess someone who already picked a language, and never
    // nag someone who already said no.
    if (hasExplicitLanguageChoice() || wasDismissed()) return;

    const detected = detectPreferredLanguage();
    if (!detected || !PROMPTS[detected.code]) return;

    // The welcome letter takes the screen on a first visit. Queue behind it
    // rather than stacking two things on top of each other.
    if (document.documentElement.hasAttribute(OVERLAY_ATTR)) {
      const show = () => setLanguage(detected);
      window.addEventListener(OVERLAY_CLOSED_EVENT, show, { once: true });
      return () => window.removeEventListener(OVERLAY_CLOSED_EVENT, show);
    }

    setLanguage(detected);
  }, []);

  const accept = useCallback(() => {
    if (!language) return;
    rememberDismissal();
    setGoogTransCookie(language.code);
    // A reload lets the Google Translate widget pick the cookie up and
    // translate the whole document at once, rather than in pieces.
    window.location.reload();
  }, [language]);

  const decline = useCallback(() => {
    rememberDismissal();
    setLanguage(null);
  }, []);

  if (!language) return null;

  const prompt = PROMPTS[language.code];
  const dir = language.rtl ? "rtl" : "ltr";

  return (
    /* `notranslate` — this banner is already in the target language and must
       not be re-translated once the widget engages. */
    <div
      dir={dir}
      lang={language.code}
      role="region"
      aria-label={prompt.question}
      className="notranslate fixed inset-x-0 bottom-0 z-[90] bg-[#00356b] border-t border-white/15 shadow-[0_-8px_30px_rgba(0,0,0,0.25)]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex items-start sm:items-center gap-3 flex-1">
          <Globe
            className="w-5 h-5 text-white/80 shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
          />
          <p className="font-['Poppins',sans-serif] text-white text-[15px] sm:text-[16px] leading-relaxed">
            {prompt.question}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={accept}
            className="bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[14px] sm:text-[15px] px-6 py-2.5 hover:bg-[#d6e8f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
          >
            {prompt.accept}
          </button>
          <button
            onClick={decline}
            className="font-['Poppins',sans-serif] text-white/80 hover:text-white text-[14px] sm:text-[15px] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 transition-colors"
          >
            {prompt.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
