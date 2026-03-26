"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, Check, Globe } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ht", label: "Kreyòl Ayisyen" },
  { code: "fa", label: "فارسی" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
];

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

function getComboBox(): HTMLSelectElement | null {
  return document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
}

function getCurrentLangFromCookie(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return match?.[1] || "en";
}

function clearGoogTransCookies() {
  // Clear for all possible path/domain combinations
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  const domains = [
    "",
    hostname,
    "." + hostname,
  ];
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

export function TranslateDropdown() {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() =>
    getCurrentLangFromCookie()
  );
  const [ready, setReady] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Inject styles to hide Google Translate chrome (once, persist forever)
  useEffect(() => {
    if (document.getElementById("gt-custom-css")) return;
    const style = document.createElement("style");
    style.id = "gt-custom-css";
    style.textContent = `
      /* hide the default Google Translate bar & gadgets */
      .goog-te-banner-frame,
      .goog-te-balloon-frame,
      #goog-gt-tt,
      .goog-te-ftab-link {
        display: none !important;
      }
      body { top: 0 !important; position: static !important; }
      .skiptranslate { display: none !important; }
      .goog-te-gadget { display: none !important; }
      #google_translate_element {
        position: fixed; top: -9999px; left: -9999px;
        width: 0; height: 0; overflow: hidden;
        opacity: 0; pointer-events: none;
      }
      /* prevent Google Translate from adding fonts that flash */
      .translated-ltr, .translated-rtl {
        font-family: inherit !important;
      }
      /* remove the tooltip-style popups on hover */
      .goog-text-highlight {
        background: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Load the Google Translate script (once, persist forever)
  useEffect(() => {
    if (document.getElementById("gt-script")) {
      // Already loaded from a previous mount
      if (getComboBox()) setReady(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,ht,fa,fr,ar",
          autoDisplay: false,
          layout: 0, // SIMPLE layout — minimal DOM footprint
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "gt-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Poll for the combo box to appear, then mark ready
  useEffect(() => {
    if (ready) return;
    const interval = setInterval(() => {
      if (getComboBox()) {
        setReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [ready]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLanguage = useCallback(
    (langCode: string) => {
      setOpen(false);
      if (langCode === currentLang) return;

      if (langCode === "en") {
        // Restoring to English: Google Translate's combo with "" triggers
        // an infinite recursion (stack overflow) when the banner is hidden.
        // The only reliable approach is to clear cookies and reload cleanly.
        clearGoogTransCookies();
        setCurrentLang("en");
        // Use replace so we don't push extra history entries
        window.location.replace(
          window.location.pathname + window.location.search + window.location.hash
        );
        return;
      }

      // Switching to a non-English language via the combo box
      const combo = getComboBox();
      if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
        setCurrentLang(langCode);
      } else {
        // Combo not ready yet — set cookie and reload
        document.cookie = `googtrans=/en/${langCode}; path=/;`;
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${window.location.hostname}`;
        window.location.reload();
      }
    },
    [currentLang]
  );

  const currentLabel =
    LANGUAGES.find((l) => l.code === currentLang)?.label || "English";

  return (
    <div ref={dropdownRef} className="relative notranslate">
      {/* Hidden container for Google Translate */}
      <div id="google_translate_element" />

      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-1.5 text-white font-['Poppins',sans-serif] text-[14px] md:text-[16px] hover:opacity-80 transition-opacity"
      >
        <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>{currentLabel}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div role="listbox" aria-label="Language options" className="absolute top-full left-0 mt-2 bg-white shadow-xl border border-gray-200 py-1 min-w-[190px] z-[9999]">
          {LANGUAGES.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-4 py-2.5 flex items-center justify-between font-['Poppins',sans-serif] text-[14px] transition-colors ${
                  isActive
                    ? "bg-[#00356b]/10 text-[#00356b]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{lang.label}</span>
                {isActive && <Check className="w-4 h-4 text-[#00356b]" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
