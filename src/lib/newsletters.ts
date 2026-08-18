/*
 * HAVEN Happenings — the clinic newsletter archive.
 *
 * ─── Adding a new issue ───
 *
 *   1. Drop the PDF into public/docs/ using the naming pattern
 *      haven-happenings-<year>-<season>.pdf  (e.g. haven-happenings-2026-fall.pdf)
 *   2. Add one entry to the TOP of ISSUES below.
 *
 * That is the whole process. The newsletter page, the "latest issue" feature
 * card, and the archive list all read from this array, so nothing else needs
 * touching. Keep newest-first: the first entry is rendered as the current issue.
 */

export interface Newsletter {
  /** Display name of the issue, e.g. "Summer 2026". */
  edition: string;
  /** Publication year, used for grouping and for the <time> element. */
  year: number;
  /** Path under public/. */
  href: string;
  /** Two or three sentences on what is inside. Shown on the archive card. */
  summary: string;
  /** A few headline topics, shown as tags. Keep to four or fewer. */
  highlights: string[];
}

export const ISSUES: Newsletter[] = [
  {
    edition: "Summer 2026",
    year: 2026,
    href: "/docs/haven-happenings-2026-summer.pdf",
    summary:
      "A welcome from our incoming Executive Director and 2026–27 Jones Fellow, the first anniversary of HAVEN's Dermatology Clinic, new work on medication affordability, and a roundtable with Fair Haven Community Health Care on the future of community health.",
    highlights: [
      "Dermatology Clinic turns one",
      "Making medications more affordable",
      "Partners in purpose",
      "Match Day 2026",
    ],
  },
];

/** The issue shown as the current one. */
export const LATEST_ISSUE: Newsletter | undefined = ISSUES[0];
