import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { OurMissionContent } from "@/app/components/OurMissionContent";

export const metadata: Metadata = {
  title: "About Us | HAVEN Free Clinic",
  description:
    "Learn about HAVEN Free Clinic's mission, vision, and how we operate as a student-run primary care clinic at Yale University serving uninsured adults in New Haven.",
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
