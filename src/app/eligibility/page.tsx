import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { EligibilityContent } from "@/app/components/EligibilityContent";

export const metadata: Metadata = pageMetadata({
  title: "Eligibility",
  description:
    "Check if you are eligible for free healthcare at HAVEN Free Clinic. We serve uninsured adults aged 18-65 in the Greater New Haven area.",
  path: "/eligibility",
});

export default function EligibilityPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Eligibility"
        title="Eligibility"
      />
      <EligibilityContent />
    </>
  );
}
