import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { CommunityPartnersContent } from "@/app/components/CommunityPartnersContent";

export const metadata: Metadata = pageMetadata({
  title: "Community Partners",
  description:
    "Learn about the community organizations and Yale University partners who support HAVEN Free Clinic's mission.",
  path: "/about/partners",
});

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
