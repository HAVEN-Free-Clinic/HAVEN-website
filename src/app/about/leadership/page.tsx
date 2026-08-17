import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { LeadershipBoardContent } from "@/app/components/LeadershipBoardContent";

export const metadata: Metadata = pageMetadata({
  title: "Leadership Board",
  description:
    "Meet the medical directors and student leadership board who run HAVEN Free Clinic.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Leadership Board"
        title="Leadership Board"
      />
      <LeadershipBoardContent />
    </>
  );
}
