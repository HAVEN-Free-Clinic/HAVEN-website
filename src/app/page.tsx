import HeroBanner from "@/app/components/HeroBanner";
import { MissionSection } from "@/app/components/MissionSection";
import { HowItWorks } from "@/app/components/HowItWorks";
import { ClinicSchedule } from "@/app/components/ClinicSchedule";
import { WhoWeServe } from "@/app/components/WhoWeServe";
import { ServicesSection } from "@/app/components/ServicesSection";
export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionSection />
      <HowItWorks />
      <ClinicSchedule />
      <WhoWeServe />
      <ServicesSection />
    </>
  );
}
