import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { ReferralsContent } from "@/app/components/ReferralsContent";

export const metadata: Metadata = {
  title: "Referrals | HAVEN Free Clinic",
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
