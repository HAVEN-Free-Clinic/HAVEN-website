import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { BehavioralHealthContent } from "@/app/components/BehavioralHealthContent";

export const metadata: Metadata = {
  title: "Behavioral Health | HAVEN Free Clinic",
  description:
    "HAVEN Free Clinic's Behavioral Health Department offers psycho-education, coping skills, and connections to long-term mental health care through community partners.",
};

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
