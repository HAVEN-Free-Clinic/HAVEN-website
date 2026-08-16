"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { OVERLAY_ATTR, OVERLAY_CLOSED_EVENT } from "@/lib/translate";
import { HavenLogo } from "@/app/components/HavenLogo";

/*
 * ─── Editing this letter ───
 *
 * The text below is the whole letter. Edit LETTER_PARAGRAPHS to change what it
 * says; each string is one paragraph.
 *
 * The envelope animation shows this exact letter from the first frame — it
 * starts tucked inside the envelope at a fraction of its size and grows until
 * it is readable. There is no placeholder page, so whatever you write here is
 * what a visitor watches come out of the envelope. Keep it short enough to fit
 * a laptop screen without scrolling.
 *
 * To show the letter again to everyone who has already dismissed it (for
 * example after a rewrite), bump the number in STORAGE_KEY.
 */

const STORAGE_KEY = "haven-welcome-letter-v1";

/** Length of the envelope-opening sequence; must match welcome-letter.css. */
const SEQUENCE_MS = 3000;

const LETTER_GREETING = "To our patients, volunteers, and neighbors,";

const LETTER_PARAGRAPHS = [
  "This is the new home for HAVEN Free Clinic, rebuilt by the students who spend their Saturday mornings at 800 Howard Avenue.",
  "We wanted a site that answers what people actually ask us at the front desk. What it costs. Whether you qualify. What to bring. Where to pick up a prescription. Those answers lived in handouts and phone calls for years. Now they are in one place, in plain language.",
  "Everything here was written and checked by the people who run the clinic. If something is wrong or hard to find, we want to hear about it.",
];

const LETTER_CLOSING = "Thank you for being part of this clinic.";

const SIGNATORIES = [
  { name: "Antigone Antonakakis", role: "Former Executive Director, 2025–2026" },
  { name: "Jack Carney", role: "IT Director" },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function WelcomeLetter() {
  // `null` means "we have not checked storage yet" — nothing renders until we
  // know, so returning visitors never see a flash of the letter.
  const [open, setOpen] = useState<boolean | null>(null);
  // The envelope is decorative and only needed while it is on screen.
  const [envelopeGone, setEnvelopeGone] = useState(false);
  const [closing, setClosing] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "seen";
    } catch {
      // Private browsing or blocked storage: show the letter, do not crash.
      seen = false;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setEnvelopeGone(true);
    }

    setOpen(!seen);
  }, []);

  /* Drop the envelope from the DOM once it has finished receding. */
  useEffect(() => {
    if (open !== true || envelopeGone) return;
    const timer = window.setTimeout(() => setEnvelopeGone(true), SEQUENCE_MS);
    return () => window.clearTimeout(timer);
  }, [open, envelopeGone]);

  const dismiss = useCallback(() => {
    setClosing(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // Nothing to do — the letter simply shows again next visit.
    }
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 260);
  }, []);

  /* Lock background scroll, trap focus, and wire Escape while the letter is up. */
  useEffect(() => {
    if (open !== true) return;

    previouslyFocused.current = document.activeElement;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    // Tell other prompts (the language suggestion banner) to hold off while
    // this has the screen.
    document.documentElement.setAttribute(OVERLAY_ATTR, "welcome-letter");

    // Focus the close control so a keyboard or screen-reader user can leave
    // immediately, without sitting through the animation.
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      document.documentElement.removeAttribute(OVERLAY_ATTR);
      window.dispatchEvent(new Event(OVERLAY_CLOSED_EVENT));
      const restore = previouslyFocused.current;
      if (restore instanceof HTMLElement) restore.focus();
    };
  }, [open, dismiss]);

  if (open !== true) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-y-auto bg-[#00356b]/95 haven-letter-backdrop ${
        closing ? "haven-letter-closing" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="haven-welcome-letter-heading"
      ref={dialogRef}
    >
      <div className="haven-letter-stage min-h-full flex items-center justify-center px-4 py-10 sm:px-6 sm:py-14">
        {/*
          The envelope is centred on THIS box, not on the screen. The letter is
          tall enough that flex-centring it and absolutely-centring the envelope
          land in different places, which pulls the two apart. Anchoring the
          envelope to the letter's own box keeps their centres locked together
          no matter the viewport.
        */}
        <div className="relative w-full max-w-[700px]">
          {!envelopeGone && (
          <div className="haven-env" aria-hidden="true">
            <div className="haven-env-back" />
            <div className="haven-env-front" />
            <div className="haven-env-flap" />
            <div className="haven-env-seal">
              <svg
                className="w-[30px] h-[30px]"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="20" cy="20" r="18" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>
          </div>
        )}

        {/* The real letter — same element from inside the envelope to full size. */}
        <div className="haven-letter-paper bg-white w-full px-6 py-9 sm:px-10 sm:py-10 md:px-12 md:py-11">
          <button
            ref={closeButtonRef}
            onClick={dismiss}
            aria-label="Close welcome letter and go to the site"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 flex items-center justify-center text-[#00356b]/50 hover:text-[#00356b] focus-visible:text-[#00356b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00356b] transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Letterhead: the clinic logo lockup, matching the navbar. */}
          <div className="notranslate mb-5 sm:mb-6">
            <HavenLogo className="h-[44px] sm:h-[52px] w-auto text-[#00356b]" />
          </div>

          <h2
            id="haven-welcome-letter-heading"
            className="font-['Merriweather',serif] font-bold text-[#00356b] text-[25px] sm:text-[30px] md:text-[34px] leading-[1.15] mb-6 sm:mb-7 pr-10"
          >
            Welcome to our new home.
          </h2>

          <p className="font-['Merriweather',serif] italic text-[#00356b] text-[16px] sm:text-[18px] mb-5">
            {LETTER_GREETING}
          </p>

          <div className="space-y-4 sm:space-y-5">
            {LETTER_PARAGRAPHS.map((paragraph, i) => (
              <p
                key={i}
                className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mt-5">
            {LETTER_CLOSING}
          </p>

          <div className="w-full h-px bg-[#00356b]/15 mt-7 sm:mt-9" />

          <div className="mt-6 flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-12">
            {SIGNATORIES.map((person) => (
              <div key={person.name}>
                <p className="font-['Merriweather',serif] italic text-[#00356b] text-[19px] sm:text-[22px] leading-tight">
                  {person.name}
                </p>
                <p className="font-['Poppins',sans-serif] text-black/55 text-[12px] sm:text-[13px] mt-1.5">
                  {person.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <button
              onClick={dismiss}
              className="bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] sm:text-[16px] px-8 py-3.5 hover:bg-[#00356b]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00356b] transition-colors"
            >
              Enter the site
            </button>
            <p className="font-['Poppins',sans-serif] text-black/50 text-[13px] sm:text-[14px]">
              You will only see this once.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
