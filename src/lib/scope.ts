import { CLINIC_HOURS_SENTENCE, WALK_IN_CUTOFF } from "@/lib/site";

/*
 * The clinic's scope of care — the single source of truth.
 *
 * These two lists used to be copy-pasted, verbatim and in full, into both
 * ServicesContent.tsx and PatientCareContent.tsx. Two copies of a promise about
 * what a clinic will and will not treat is the kind of duplication that gets
 * dangerous: edit one, forget the other, and the site now says two different
 * things about whether HAVEN manages insulin-dependent diabetes.
 *
 * Everything that renders scope now reads from here. The full, built-out
 * version lives at /services/scope-of-care; other pages show a summary and link
 * to it.
 */

export interface ScopeItem {
  /** The service, as a patient would name it. */
  label: string;
  /** Optional second line: the qualifier, or where to go instead. */
  detail?: string;
}

/**
 * What a patient can actually get at HAVEN.
 *
 * Grouped so the scope-of-care page can render headings; the summary blocks on
 * other pages flatten it back to a single list.
 */
export const SCOPE_PROVIDES: { group: string; items: ScopeItem[] }[] = [
  {
    group: "Primary and preventive care",
    items: [
      {
        label: "Primary care visits",
        detail: "Checkups, acute illness, and physicals",
      },
      {
        label: "Chronic disease management",
        detail: "Diabetes, hypertension, asthma, and high cholesterol",
      },
      {
        label: "Lab testing and vaccines",
        detail:
          "Routine bloodwork and screenings; vaccines for established patients only",
      },
      {
        label: "Latent TB, H. pylori, and hypertension follow-up",
        detail: "Through our Infectious and Chronic Disease Department",
      },
    ],
  },
  {
    group: "Sexual and reproductive health",
    items: [
      {
        label: "Pap smears, breast exams, and STI screening",
      },
      {
        label: "Contraception and HIV pre-exposure prophylaxis (PrEP)",
      },
      {
        label: "Gender-affirming hormone therapy",
        detail: "Plus referrals for gender-affirming surgery",
      },
    ],
  },
  {
    group: "Whole-person support",
    items: [
      {
        label: "Behavioral health screening and psycho-education",
        detail: "With warm referrals to partners for ongoing treatment",
      },
      {
        label: "Social needs screening and community resource connection",
        detail: "Food, housing, utilities, transportation, employment",
      },
      {
        label: "Health education",
        detail: "Diabetes, nutrition, and self-management",
      },
      {
        label: "Interpretation and cultural navigation",
        detail:
          "Spanish at every visit; other languages arranged when you tell us in advance",
      },
    ],
  },
  {
    group: "Navigating the system",
    items: [
      {
        label: "Patient navigation and longitudinal care coordination",
        detail: "A navigator who stays with you between visits",
      },
      {
        label: "The Compass Program",
        detail: "A three-to-five-year path to coverage and a permanent provider",
      },
      {
        label: "On-site specialty clinics",
        detail:
          "Dermatology, Nephrology, and Neurology, held on select Saturdays alongside primary care",
      },
      {
        label: "Referrals to specialists and diagnostic testing",
        detail: "Coordinated with the YNHH Free Care office",
      },
      {
        label: "Medical debt and insurance counseling",
        detail: "Help with YNHH Free Care and Medicaid/HUSKY applications",
      },
      {
        label: "Low-cost medications through pharmacy partnerships",
        detail:
          "Medications at or above $25 are free; under $25 we ask you to cover, and we waive that for financial hardship",
      },
    ],
  },
];

/**
 * What HAVEN does not do — and, for each, where to go instead.
 *
 * The "instead" half matters more than the "not". A patient who reads only that
 * we do not do something is left stranded; the whole point of naming a limit is
 * to hand over the next step at the same time.
 */
export const SCOPE_OUTSIDE: ScopeItem[] = [
  {
    label: "Emergency or life-threatening care",
    detail:
      "Call 911 or go to the nearest emergency department. For a mental health crisis, call or text 988. Emergency rooms must treat you regardless of insurance or ability to pay.",
  },
  {
    label: "Weekday or after-hours care",
    detail:
      `We hold one session a week, ${CLINIC_HOURS_SENTENCE}. Scheduled patients are seen first; walk-ins are taken until ${WALK_IN_CUTOFF} when there is room. For care during the week, a community health center such as Fair Haven or Cornell Scott-Hill can see you.`,
  },
  {
    label: "Prenatal care",
    detail:
      "We do not see patients who are pregnant. We do offer pregnancy testing, and we will connect you with prenatal care right away.",
  },
  {
    label: "Insulin-dependent or highly complex diabetes management",
    detail:
      "A Saturday clinic cannot safely adjust insulin between visits. We will help you establish with a weekday provider who can.",
  },
  {
    label: "Surgery, imaging, oncology, and specialist procedures",
    detail:
      "We do not perform these, but we do place the referral and work with YNHH Free Care so you can afford to go.",
  },
  {
    label: "Direct dental treatment",
    detail:
      "Our Oral Health Initiative does not clean, fill, or extract teeth. It connects you with community dental providers who do, at no cost to you for the coordination.",
  },
  {
    label: "Licensed social work, therapy, or crisis intervention",
    detail:
      "Our behavioral health team screens and educates, then refers you to partners who provide ongoing treatment.",
  },
  {
    label: "Housing placement, rent payment, or job placement",
    detail:
      "We refer, we help you apply, and we follow up. We cannot assign you a unit, pay a bill, or place you in a job.",
  },
  {
    label: "Care for patients under 18 or over 65",
    detail:
      "We see adults 18 to 65. Outside that range, a community health center or Medicare will be the better route.",
  },
  {
    label: "Being your permanent doctor",
    detail:
      "This is the limit that shapes all the others. HAVEN is a bridge. Compass exists to hand you off to a provider who will still be there after us.",
  },
];

/** Flat list of what we provide, for the summary blocks on other pages. */
export const SCOPE_PROVIDES_FLAT: ScopeItem[] = SCOPE_PROVIDES.flatMap(
  (g) => g.items
);
