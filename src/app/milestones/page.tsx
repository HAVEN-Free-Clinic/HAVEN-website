import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { MilestonesContent } from "@/app/components/MilestonesContent";

export const metadata: Metadata = {
  title: "Milestones | HAVEN Free Clinic",
  description:
    "See HAVEN Free Clinic's milestones through annual reports and published research articles.",
};

export default function MilestonesPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Community health milestones"
        title="Milestones"
      />
      <MilestonesContent />
    </>
  );
}
