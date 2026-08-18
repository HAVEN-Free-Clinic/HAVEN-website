/*
 * The towns HAVEN Free Clinic draws patients from — our "catchment area".
 *
 * Why this file exists: "Greater New Haven" appears in eight places across the
 * site (hero, Who We Serve, eligibility criteria, the FAQ, page metadata) and
 * for a patient deciding whether to call, the phrase alone answers nothing.
 * Someone in Meriden has no way to know they qualify. The town list is the
 * answer, so it lives in one place and every surface reads from here.
 *
 * KEEP THIS IN STEP WITH THE INTAKE CRITERIA. If the clinic starts or stops
 * accepting a town, this array is the only edit needed — the FAQ sentence and
 * the home page grid are both generated from it.
 */

/** Alphabetical, because the home page renders them in this order verbatim. */
export const CATCHMENT_TOWNS = [
  "Bethany",
  "Branford",
  "East Haven",
  "Guilford",
  "Hamden",
  "Madison",
  "Meriden",
  "Milford",
  "New Haven",
  "North Branford",
  "North Haven",
  "Orange",
  "Wallingford",
  "West Haven",
  "Woodbridge",
] as const;

/**
 * The town list as running prose, e.g. "Bethany, Branford and East Haven".
 *
 * For the plain-string contexts that cannot take JSX: schema.org
 * acceptedAnswer.text in lib/faqs.ts, and page descriptions. Uses a serial
 * "and" without the Oxford comma to match the site's existing FAQ copy.
 */
export function catchmentSentence(): string {
  const towns = [...CATCHMENT_TOWNS];
  const last = towns.pop();
  return `${towns.join(", ")} and ${last}`;
}
