import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { PatientNavigationContent } from "@/app/components/PatientNavigationContent";

export const metadata: Metadata = pageMetadata({
  title: "Patient Navigation",
  description:
    "HAVEN Free Clinic pairs patients with a navigator through our Longitudinal Care Coordination program, keeping appointments, referrals, and follow-ups on track between visits.",
  path: "/services/patient-navigation",
});

export default function PatientNavigationPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/patient-care-hero.jpg"
        imageAlt="Patient Navigation"
        title="Patient Navigation"
      />
      <PatientNavigationContent />
    </>
  );
}
