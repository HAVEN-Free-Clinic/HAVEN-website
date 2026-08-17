import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { GetInvolvedContent } from "@/app/components/GetInvolvedContent";
import { FiveKSection } from "@/app/components/FiveKSection";

export const metadata: Metadata = pageMetadata({
  title: "Get Involved",
  description:
    "Volunteer at HAVEN Free Clinic or support our mission through donations. We welcome students, healthcare professionals, and community members.",
  path: "/get-involved",
});

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
