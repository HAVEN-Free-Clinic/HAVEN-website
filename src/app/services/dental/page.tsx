import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { DentalContent } from "@/app/components/DentalContent";

export const metadata: Metadata = pageMetadata({
  title: "Dental Care & Community Resources",
  description:
    "HAVEN Free Clinic does not provide direct dental care, but our care coordination team connects patients with affordable community dental resources at no cost.",
  path: "/services/dental",
});

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
