/*
 * YNHH Free Care facts that appear on more than one page.
 *
 * The processing window had been stated as "2–3 weeks" on one card, "2–4 weeks"
 * two sections later, and "6 to 8 weeks" on the page above — three numbers for
 * one wait, which is how a patient ends up calling to complain on day 22 or
 * giving up on day 30. It is one constant now.
 *
 * Renewal is deliberately the same window as a first application: it is the
 * same form and the same queue.
 */

import { CLINIC_HOURS_SENTENCE } from "@/lib/site";

/** How long YNHH takes to process an application or a renewal. */
export const FREE_CARE_PROCESSING = "8 to 10 weeks";

/** How long an approval lasts before it has to be renewed. */
export const FREE_CARE_TERM = "6 months";

/** YNHH Patient Financial Services — bills, application status, account questions. */
export const YNHH_BILLING = {
  phone: "(855) 547-4584",
  tel: "8555474584",
  hours: "Monday–Friday, 7:30 AM – 5:00 PM",
} as const;

/** HAVEN's own MDIC team — help completing and filing the application. */
export const MDIC_CONTACT = {
  email: "hfc.billing@yale.edu",
  phone: "(203) 200-0673",
  tel: "2032000673",
  hours: CLINIC_HOURS_SENTENCE,
} as const;
