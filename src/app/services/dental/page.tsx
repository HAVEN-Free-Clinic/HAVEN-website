import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { DentalContent } from "@/app/components/DentalContent";

export const metadata: Metadata = {
  title: "Dental Care & Community Resources | HAVEN Free Clinic",
  description:
    "HAVEN Free Clinic does not provide direct dental services, but our care coordination team connects patients with accessible, affordable community dental resources at no cost.",
};

export default function DentalPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/dental-hero.jpg"
        imageAlt="Dental Care & Community Resources"
        title="Dental Care & Community Resources"
      />
      <DentalContent />
    </>
  );
}
