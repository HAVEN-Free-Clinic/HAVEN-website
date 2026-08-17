import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { SocialServicesContent } from "@/app/components/SocialServicesContent";

export const metadata: Metadata = pageMetadata({
  title: "Social Services",
  description:
    "HAVEN Free Clinic connects patients with social services including food assistance, housing resources, and employment support.",
  path: "/services/social-services",
});

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
