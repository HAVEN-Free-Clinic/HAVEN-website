import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { HistoryContent } from "@/app/components/HistoryContent";

export const metadata: Metadata = {
  title: "Our History | HAVEN Free Clinic",
  description:
    "Explore the history of HAVEN Free Clinic from its founding in 2005 to today, including key milestones and achievements.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Our History"
        title="Our History"
      />
      <HistoryContent />
    </>
  );
}
