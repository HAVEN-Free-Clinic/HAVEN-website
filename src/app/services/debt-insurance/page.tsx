import { PageHero } from "@/app/components/PageHero";
import { MDICContent } from "@/app/components/MDICContent";

export default function DebtInsurancePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/mdic-hero.jpg"
        imageAlt="Medical Debt & Insurance Counseling"
        title="Medical Debt & Insurance Counseling"
        subtitle="HAVEN Free Clinic"
      />
      <MDICContent />
    </>
  );
}
