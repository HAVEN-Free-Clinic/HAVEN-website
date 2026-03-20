import { PageHero } from "@/app/components/PageHero";
import { FAQsContent } from "@/app/components/FAQsContent";

export default function FAQsPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/faqs-hero.jpg"
        imageAlt="Frequently Asked Questions"
        title="FAQs"
        // subtitle="HAVEN Free Clinic"
      />
      <FAQsContent />
    </>
  );
}
