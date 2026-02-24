import { PageHero } from "@/app/components/PageHero";
import { SocialServicesContent } from "@/app/components/SocialServicesContent";

export default function SocialServicesPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/social-services-hero.jpg"
        imageAlt="Social Services"
        title="Social Services"
        subtitle="HAVEN Free Clinic"
      />
      <SocialServicesContent />
    </>
  );
}
