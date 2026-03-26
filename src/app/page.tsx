import HeroBanner from "@/app/components/HeroBanner";
import { ImpactStats } from "@/app/components/ImpactStats";
import { MissionSection } from "@/app/components/MissionSection";
import { HowItWorks } from "@/app/components/HowItWorks";
import { WhoWeServe } from "@/app/components/WhoWeServe";
import { ServicesSection } from "@/app/components/ServicesSection";
import { ClinicGuideSection } from "@/app/components/ClinicGuideSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ImpactStats />
      <MissionSection />
      <HowItWorks />
      <WhoWeServe />
      <ServicesSection />
      <ClinicGuideSection />
    </>
  );
}
