import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { SocialServicesContent } from "@/app/components/SocialServicesContent";

export const metadata: Metadata = {
  title: "Social Services | HAVEN Free Clinic",
};

export default function SocialServicesPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/social-services-hero.jpg"
        imageAlt="Social Services"
        title="Social Services"
      />
      <SocialServicesContent />
    </>
  );
}
