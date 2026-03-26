import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { ReferralsContent } from "@/app/components/ReferralsContent";

export const metadata: Metadata = {
  title: "Referrals | HAVEN Free Clinic",
  description:
    "Learn about specialty referrals and diagnostic testing available through HAVEN Free Clinic's care coordination team.",
};

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
