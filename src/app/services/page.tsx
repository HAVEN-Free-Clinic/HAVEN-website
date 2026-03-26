import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { ServicesContent } from "@/app/components/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | HAVEN Free Clinic",
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
