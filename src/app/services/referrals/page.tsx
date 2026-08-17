import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { ReferralsContent } from "@/app/components/ReferralsContent";

export const metadata: Metadata = pageMetadata({
  title: "Referrals",
  description:
    "Learn about specialty referrals and diagnostic testing available through HAVEN Free Clinic's care coordination team.",
  path: "/services/referrals",
});

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/referrals-hero.jpg"
        imageAlt="Referrals"
        title="Referrals"
      />
      <ReferralsContent />
    </>
  );
}
