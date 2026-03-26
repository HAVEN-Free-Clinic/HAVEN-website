import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { EligibilityContent } from "@/app/components/EligibilityContent";

export const metadata: Metadata = {
  title: "Eligibility | HAVEN Free Clinic",
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
