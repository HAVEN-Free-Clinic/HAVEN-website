import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/*
 * Emitted as a static /sitemap.xml by `output: 'export'`.
 *
 * Every indexable route is listed explicitly rather than globbed off the
 * filesystem, because the export has no filesystem access at request time and
 * because a hand-kept list forces a decision about priority for each new page.
 * /impact is deliberately absent — it is a redirect stub, not a destination.
 *
 * Priority is relative within the site only. The pages a prospective patient
 * needs (eligibility, visitor guide, services) outrank the institutional ones.
 */

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Patient-facing: highest intent, these are the pages people search for.
  { path: "/eligibility", priority: 0.9, changeFrequency: "monthly" },
  { path: "/visitor-guide", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/mychart", priority: 0.7, changeFrequency: "yearly" },

  // Individual service lines.
  { path: "/services/patient-care", priority: 0.7, changeFrequency: "yearly" },
  { path: "/services/medication", priority: 0.7, changeFrequency: "yearly" },
  {
    path: "/services/behavioral-health",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/services/social-services",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/services/referrals", priority: 0.7, changeFrequency: "yearly" },
  { path: "/services/education", priority: 0.6, changeFrequency: "yearly" },
  { path: "/services/dental", priority: 0.6, changeFrequency: "yearly" },
  {
    path: "/services/debt-insurance",
    priority: 0.6,
    changeFrequency: "yearly",
  },

  // Volunteering and giving.
  { path: "/get-involved", priority: 0.8, changeFrequency: "monthly" },

  // Institutional.
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/history", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about/leadership", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/partners", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about/news", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/endowment", priority: 0.4, changeFrequency: "yearly" },
  { path: "/milestones", priority: 0.5, changeFrequency: "yearly" },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static export: this is the build timestamp, which is the most accurate
  // "last modified" signal available without wiring up per-file git history.
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
