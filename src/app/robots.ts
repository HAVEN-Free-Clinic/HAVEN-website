import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/*
 * Emitted as a static /robots.txt by `output: 'export'`.
 *
 * Nothing is disallowed. In particular /impact stays crawlable on purpose: it
 * is a meta-refresh stub pointing at /milestones, and a crawler that is blocked
 * from fetching it can never see the redirect, which would strand the old URL
 * in the index with no content.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
