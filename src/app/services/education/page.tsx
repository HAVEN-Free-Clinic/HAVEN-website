import { PageHero } from "@/app/components/PageHero";
import { EducationContent } from "@/app/components/EducationContent";

export default function EducationPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/education-hero.jpg"
        imageAlt="Education"
        title="Education"
        subtitle="HAVEN Free Clinic"
      />
      <EducationContent />
    </>
  );
}
