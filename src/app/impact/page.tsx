import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { ImpactContent } from "@/app/components/ImpactContent";

export const metadata: Metadata = {
  title: "Impact | HAVEN Free Clinic",
  description:
    "See HAVEN Free Clinic's impact through news coverage, annual reports, and published research articles.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Community health impact"
        title="Impact"
      />
      <ImpactContent />
    </>
  );
}
