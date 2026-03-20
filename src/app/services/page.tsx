import { PageHero } from "@/app/components/PageHero";
import { ServicesContent } from "@/app/components/ServicesContent";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/services-hero.jpg"
        imageAlt="Our Services"
        title="Our Services"
        // subtitle="HAVEN Free Clinic"
      />
      <ServicesContent />
    </>
  );
}
