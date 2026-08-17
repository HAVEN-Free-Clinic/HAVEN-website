import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { OurMissionContent } from "@/app/components/OurMissionContent";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "HAVEN Free Clinic's mission, vision, and how we operate as a student-run primary care clinic at Yale serving uninsured adults in New Haven.",
  path: "/about",
});

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
