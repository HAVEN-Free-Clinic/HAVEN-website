import { PageHero } from "@/app/components/PageHero";
import { VisitorGuideContent } from "@/app/components/VisitorGuideContent";

export default function VisitorGuidePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/visitor-guide-hero.jpg"
        imageAlt="Visitor Guide"
        title="Visitor Guide"
      />
      <VisitorGuideContent />
    </>
  );
}
