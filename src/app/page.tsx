import HeroBanner from "@/app/components/HeroBanner";
import { MissionSection } from "@/app/components/MissionSection";
import { TransparencyStatement } from "@/app/components/TransparencyStatement";
import { HowItWorks } from "@/app/components/HowItWorks";
import { ClinicSchedule } from "@/app/components/ClinicSchedule";
import { AppointmentPolicy } from "@/app/components/AppointmentPolicy";
import { WhoWeServe } from "@/app/components/WhoWeServe";
import { ServicesSection } from "@/app/components/ServicesSection";
import { CompassSection } from "@/app/components/CompassSection";
import { WelcomeLetter } from "@/app/components/WelcomeLetter";

export default function HomePage() {
  return (
    <>
      <WelcomeLetter />
      <HeroBanner />
      <MissionSection />
      <TransparencyStatement />
      <HowItWorks />
      <ClinicSchedule />
      <AppointmentPolicy />
      <WhoWeServe />
      <ServicesSection />
      <CompassSection />
    </>
  );
}
