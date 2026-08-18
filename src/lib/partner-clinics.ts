/*
 * The two community health centers HAVEN patients transition to.
 *
 * These were described in four places — twice on /eligibility alone, once on
 * the Compass page, once in the healthcare guide — with three different
 * descriptions of the same clinic. A patient reading two of them could not tell
 * whether they were the same organisation.
 *
 * Both are federally qualified health centers: they accept patients regardless
 * of insurance status and charge on a sliding scale set by income.
 */

export interface PartnerClinic {
  name: string;
  /** Full description, for the cards that have room for one. */
  description: string;
  /** One line, for tight contexts. */
  short: string;
  phone: string;
  /** Digits only, for tel: links. */
  tel: string;
  href: string;
}

export const PARTNER_CLINICS: PartnerClinic[] = [
  {
    name: "Fair Haven Community Health Care",
    description:
      "A federally qualified health center on Grand Avenue offering primary care, dental, and behavioral health, with weekday hours and Spanish-speaking staff. Fees are set on a sliding scale based on your income.",
    short:
      "Primary, dental, and behavioral health on Grand Avenue, with Spanish-speaking staff.",
    phone: "(203) 777-7411",
    tel: "2037777411",
    href: "https://www.fhchc.org/",
  },
  {
    name: "Cornell Scott-Hill Health Center",
    description:
      "A federally qualified health center with locations across Greater New Haven, offering adult medicine, dental, behavioral health, pharmacy, and walk-in convenient care. Fees are set on a sliding scale based on your income.",
    short:
      "Adult medicine, dental, behavioral health, pharmacy, and walk-in care across Greater New Haven.",
    phone: "(203) 503-3000",
    tel: "2035033000",
    href: "https://www.cornellscott.org/",
  },
];
