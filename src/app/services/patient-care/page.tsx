import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { PatientCareContent } from "@/app/components/PatientCareContent";

export const metadata: Metadata = {
  title: "Patient Care | HAVEN Free Clinic",
};

export default function PatientCarePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/patient-care.jpg"
        imageAlt="Patient Care"
        title="Patient Care"
      />
      <PatientCareContent />
    </>
  );
}
