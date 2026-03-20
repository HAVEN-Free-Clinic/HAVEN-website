import { PageHero } from "@/app/components/PageHero";
import { ImpactContent } from "@/app/components/ImpactContent";

export default function ImpactPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Community health impact"
        title="Impact"
        // subtitle="HAVEN Free Clinic"
      />
      <ImpactContent />
    </>
  );
}
