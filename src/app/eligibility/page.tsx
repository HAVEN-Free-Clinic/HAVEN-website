import { PageHero } from "@/app/components/PageHero";
import { EligibilityContent } from "@/app/components/EligibilityContent";

export default function EligibilityPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Eligibility"
        title="Eligibility"
      />
      <EligibilityContent />
    </>
  );
}
