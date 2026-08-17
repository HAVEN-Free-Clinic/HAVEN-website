import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { PatientCareContent } from "@/app/components/PatientCareContent";

export const metadata: Metadata = pageMetadata({
  title: "Patient Care",
  description:
    "Learn about the primary care services at HAVEN Free Clinic, including physical exams, chronic disease management, and preventive screenings.",
  path: "/services/patient-care",
});

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
