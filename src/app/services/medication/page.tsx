import { PageHero } from "@/app/components/PageHero";
import { MedicationContent } from "@/app/components/MedicationContent";

export default function MedicationPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/medication.png"
        imageAlt="Medication Services"
        title="Medication"
      />
      <MedicationContent />
    </>
  );
}
