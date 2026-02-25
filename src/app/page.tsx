import { HeroBanner } from "@/app/components/HeroBanner";
import { MissionSection } from "@/app/components/MissionSection";
import { ClinicGuideSection } from "@/app/components/ClinicGuideSection";
import { ServicesSection } from "@/app/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionSection />
      <ClinicGuideSection />
      <ServicesSection />
    </>
  );
}
