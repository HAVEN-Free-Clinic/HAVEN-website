import { PageHero } from "@/app/components/PageHero";
import { ReferralsContent } from "@/app/components/ReferralsContent";

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/referrals-hero.jpg"
        imageAlt="Referrals"
        title="Referrals"
        // subtitle="HAVEN Free Clinic"
      />
      <ReferralsContent />
    </>
  );
}
