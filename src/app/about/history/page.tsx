import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { HistoryContent } from "@/app/components/HistoryContent";

export const metadata: Metadata = pageMetadata({
  title: "Our History",
  description:
    "Explore the history of HAVEN Free Clinic from its founding in 2005 to today, including key milestones and achievements.",
  path: "/about/history",
});

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
