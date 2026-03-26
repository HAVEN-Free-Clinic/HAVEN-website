import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { MedicationContent } from "@/app/components/MedicationContent";

export const metadata: Metadata = {
  title: "Medication | HAVEN Free Clinic",
};

export default function MedicationPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/medication.jpg"
        imageAlt="Medication Services"
        title="Medication"
      />
      <MedicationContent />
    </>
  );
}
