import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { MedicationContent } from "@/app/components/MedicationContent";

export const metadata: Metadata = pageMetadata({
  title: "Medication Access",
  description:
    "How HAVEN Free Clinic patients get their medications: partner pharmacies, low-cost mail order, charitable supply, refill requests, and our cost-sharing policy.",
  path: "/services/medication",
});

export default function MedicationPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/medication.jpg"
        imageAlt="Medication Access"
        title="Medication Access"
      />
      <MedicationContent />
    </>
  );
}
