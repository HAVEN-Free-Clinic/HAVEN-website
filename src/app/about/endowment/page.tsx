import { PageHero } from "@/app/components/PageHero";
import { GoetschEndowmentContent } from "@/app/components/GoetschEndowmentContent";

export default function EndowmentPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Goetsch Endowment"
        title="Goetsch Endowment"
        subtitle="HAVEN Free Clinic"
      />
      <GoetschEndowmentContent />
    </>
  );
}
