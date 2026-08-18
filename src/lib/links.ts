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

/**
 * Access Health CT — Connecticut's official health insurance marketplace, and
 * the only route to a Medicaid/HUSKY application in this state.
 *
 * Every page that tells a patient to apply for Medicaid should link here rather
 * than leaving "apply for HUSKY" as an instruction with no door attached.
 */
export const ACCESS_HEALTH_CT_URL = "https://www.accesshealthct.com/";

/** The YNHH MyChart patient portal. */
export const MYCHART_URL = "https://mychart.ynhhs.org";

/** YNHH's own page on the Free Care / financial assistance program. */
export const YNHH_FINANCIAL_ASSISTANCE_URL =
  "https://www.ynhhs.org/patient-care/billing-insurance/financial-assistance";
