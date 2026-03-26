import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { ServicesContent } from "@/app/components/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | HAVEN Free Clinic",
  description:
    "Explore the comprehensive healthcare services offered at HAVEN Free Clinic, including patient care, medication, social services, education, and referrals.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/services-hero.jpg"
        imageAlt="Our Services"
        title="Our Services"
      />
      <ServicesContent />
    </>
  );
}
