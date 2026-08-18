import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { ScopeOfCareContent } from "@/app/components/ScopeOfCare";

export const metadata: Metadata = pageMetadata({
  title: "Scope of Care",
  description:
    "What HAVEN Free Clinic provides, what falls outside our scope as a student-run Saturday clinic, and where to go instead for everything we cannot do.",
  path: "/services/scope-of-care",
});

export default function ScopeOfCarePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/services-hero.jpg"
        imageAlt="Scope of Care"
        title="Scope of Care"
      />
      <ScopeOfCareContent />
    </>
  );
}
