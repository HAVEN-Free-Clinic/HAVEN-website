import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { OurMissionContent } from "@/app/components/OurMissionContent";

export const metadata: Metadata = {
  title: "About Us | HAVEN Free Clinic",
};

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
