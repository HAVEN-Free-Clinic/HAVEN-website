import { PageHero } from "@/app/components/PageHero";
import { LeadershipBoardContent } from "@/app/components/LeadershipBoardContent";

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Leadership Board"
        title="Leadership Board"
        // subtitle="HAVEN Free Clinic"
      />
      <LeadershipBoardContent />
    </>
  );
}
