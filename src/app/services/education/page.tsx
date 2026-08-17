import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { EducationContent } from "@/app/components/EducationContent";

export const metadata: Metadata = pageMetadata({
  title: "Education",
  description:
    "Patient education programs at HAVEN Free Clinic to help patients understand and manage their health conditions.",
  path: "/services/education",
});

export default function EducationPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/education-hero.jpg"
        imageAlt="Education"
        title="Education"
      />
      <EducationContent />
    </>
  );
}
