import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { EligibilityContent } from "@/app/components/EligibilityContent";

export const metadata: Metadata = {
  title: "Eligibility | HAVEN Free Clinic",
  description:
    "Check if you are eligible for free healthcare at HAVEN Free Clinic. We serve uninsured adults aged 18-65 in the Greater New Haven area.",
};

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
