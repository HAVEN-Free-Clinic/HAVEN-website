import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { ImpactContent } from "@/app/components/ImpactContent";

export const metadata: Metadata = {
  title: "Impact | HAVEN Free Clinic",
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
