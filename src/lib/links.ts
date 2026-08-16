/*
 * External URLs that appear in more than one place.
 *
 * These lived as copy-pasted string literals and drifted: the Get Involved page
 * pointed at give.yale.edu (a hostname that does not resolve) while the navbar
 * pointed at the working GiveCampus campaign, so the most prominent Donate
 * buttons on the site were dead. Import from here instead of retyping a URL.
 */

/** Yale GiveCampus form, pre-designated to HAVEN Free Clinic. */
export const DONATE_URL =
  "https://givetoday.yale.edu/campaigns/67229/donations/new?designation_id=16596";

/** HAVEN Hub — the volunteer/staff portal. Note .org, not .com. */
export const STAFF_PORTAL_URL = "https://hub.havenfreeclinic.org";
