import type { Metadata } from "next";
import Link from "next/link";

/*
 * /impact was renamed to /milestones. The old path still receives traffic from
 * search results and older printed material, so it has to keep resolving.
 *
 * next/navigation's redirect() cannot be used here: under `output: 'export'`
 * there is no server to issue a 30x, and the exported impact.html was in fact
 * rendering as Next's client-side error shell (<html id="__next_error__">) —
 * a broken page for anyone arriving from Google.
 *
 * An instant meta refresh plus a canonical is the redirect that a static host
 * can actually serve. Google treats a 0-second meta refresh as a permanent
 * redirect and folds the signals into /milestones. Deliberately NOT noindex'd
 * and NOT robots-disallowed: a crawler has to be able to fetch this page to
 * see the redirect at all.
 */

export const metadata: Metadata = {
  title: "Impact",
  description:
    "HAVEN Free Clinic's impact is now published on the Milestones page.",
  alternates: { canonical: "/milestones" },
};

export default function ImpactRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/milestones" />
      <div className="max-w-[1400px] mx-auto px-6 py-24 text-center">
        <h1 className="font-['Poppins',sans-serif] font-medium text-[#00356b] text-[28px] md:text-[34px]">
          This page has moved
        </h1>
        <p className="font-['Poppins',sans-serif] text-[17px] mt-4">
          HAVEN&rsquo;s impact now lives on the Milestones page.{" "}
          <Link href="/milestones" className="text-[#00356b] underline">
            Continue to Milestones
          </Link>
          .
        </p>
      </div>
    </>
  );
}
