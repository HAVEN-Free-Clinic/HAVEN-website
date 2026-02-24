import { PageHero } from "@/app/components/PageHero";
import { PatientCareContent } from "@/app/components/PatientCareContent";

export default function PatientCarePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/patient-care.jpg"
        imageAlt="Patient Care"
        title="Patient Care"
        subtitle="HAVEN Free Clinic"
      />
      <PatientCareContent />
    </>
  );
}
