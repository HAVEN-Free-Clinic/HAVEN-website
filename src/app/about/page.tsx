import { PageHero } from "@/app/components/PageHero";
import { OurMissionContent } from "@/app/components/OurMissionContent";

export default function AboutPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="About HAVEN Free Clinic"
        title="About Us"
      />
      <OurMissionContent />
    </>
  );
}
