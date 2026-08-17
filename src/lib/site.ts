import type { Metadata } from "next";

/*
 * Canonical facts about the clinic and the site.
 *
 * These values feed three things that must never disagree: the <head> metadata
 * (canonical URLs, Open Graph), the sitemap, and the JSON-LD structured data
 * that search engines read to build the local-business panel. When the phone
 * number or the hours change, change them here and in Footer.tsx together.
 */

/** Production origin. No trailing slash — every helper below appends one. */
export const SITE_URL = "https://havenfreeclinic.org";

export const SITE_NAME = "HAVEN Free Clinic";

/**
 * Used as the homepage <title>. Kept short on purpose: with the "HAVEN Free
 * Clinic | " prefix the whole title has to stay under ~60 characters or Google
 * truncates it mid-phrase in the results page.
 */
export const SITE_TAGLINE = "Free Care for Uninsured Adults, New Haven";

export const SITE_DESCRIPTION =
  "High-quality health care, free of charge. HAVEN Free Clinic provides free primary care to uninsured adults in the New Haven community.";

/** 1200x630 social share card. Relative — metadataBase makes it absolute. */
export const OG_IMAGE = "/images/og-default.jpg";

export const OG_IMAGE_ALT = "The HAVEN Free Clinic care team with a patient";

export const CLINIC = {
  phone: "(203) 200-0673",
  /** E.164, for tel: links and structured data. */
  phoneE164: "+1-203-200-0673",
  fax: "+1-203-436-9928",
  email: "haven.free.clinic@yale.edu",
  address: {
    building: "Yale Physicians Building",
    street: "800 Howard Avenue, Floor 1",
    city: "New Haven",
    state: "CT",
    zip: "06519",
    country: "US",
  },
  /** The clinic runs one session a week. */
  hours: { day: "Saturday", opens: "08:30", closes: "12:00" },
} as const;

/** Absolute URL for a route path such as "/services". */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Build a page's Metadata from the three things that actually differ per page.
 *
 * Use this instead of hand-writing a Metadata object. Next.js merges metadata
 * shallowly: the moment a page declares its own `openGraph` (to set og:url, say)
 * it *replaces* the parent's entirely, silently dropping og:image, og:site_name,
 * og:type and og:locale from that page. Every page therefore has to restate the
 * whole block, and doing that by hand 22 times is how share cards rot. Routing
 * it through here also means a new page cannot forget its canonical.
 *
 * @param path Route path, e.g. "/services/dental". Drives canonical and og:url.
 * @param absoluteTitle Skip the "| HAVEN Free Clinic" suffix. Homepage only,
 *   whose title already ends in the clinic name.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
