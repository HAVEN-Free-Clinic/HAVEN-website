import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { MilestonesContent } from "@/app/components/MilestonesContent";

export const metadata: Metadata = pageMetadata({
  title: "Milestones",
  description:
    "See HAVEN Free Clinic's milestones through annual reports and published research articles.",
  path: "/milestones",
});

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
