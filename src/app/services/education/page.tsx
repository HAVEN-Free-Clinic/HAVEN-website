import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { EducationContent } from "@/app/components/EducationContent";

export const metadata: Metadata = {
  title: "Education | HAVEN Free Clinic",
};

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
