import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { LeadershipBoardContent } from "@/app/components/LeadershipBoardContent";

export const metadata: Metadata = {
  title: "Leadership Board | HAVEN Free Clinic",
};

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
