import { PageHero } from "@/app/components/PageHero";
import { GetInvolvedContent } from "@/app/components/GetInvolvedContent";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Community involvement"
        title="Get Involved"
        subtitle="HAVEN Free Clinic"
      />
      <GetInvolvedContent />
    </>
  );
}
