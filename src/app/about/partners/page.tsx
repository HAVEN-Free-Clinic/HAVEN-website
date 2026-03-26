import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { CommunityPartnersContent } from "@/app/components/CommunityPartnersContent";

export const metadata: Metadata = {
  title: "Community Partners | HAVEN Free Clinic",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Community Partners"
        title="Community Partners"
      />
      <CommunityPartnersContent />
    </>
  );
}
