import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { BehavioralHealthContent } from "@/app/components/BehavioralHealthContent";

export const metadata: Metadata = pageMetadata({
  title: "Behavioral Health",
  description:
    "HAVEN Free Clinic's Behavioral Health team offers psycho-education, coping skills, and connections to long-term mental health care via community partners.",
  path: "/services/behavioral-health",
});

export default function BehavioralHealthPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/patient-care-hero.jpg"
        imageAlt="Behavioral Health"
        title="Behavioral Health"
      />
      <BehavioralHealthContent />
    </>
  );
}
