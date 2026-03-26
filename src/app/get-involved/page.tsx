import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { GetInvolvedContent } from "@/app/components/GetInvolvedContent";
import { FiveKSection } from "@/app/components/FiveKSection";

export const metadata: Metadata = {
  title: "Get Involved | HAVEN Free Clinic",
  description:
    "Volunteer at HAVEN Free Clinic or support our mission through donations. We welcome students, healthcare professionals, and community members.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Community involvement"
        title="Get Involved"
      />
      <GetInvolvedContent />
      <FiveKSection />
    </>
  );
}
