import type { Metadata } from "next";
import { pageMetadata, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import HeroBanner from "@/app/components/HeroBanner";
import { MissionSection } from "@/app/components/MissionSection";
import { TransparencyStatement } from "@/app/components/TransparencyStatement";
import { HowItWorks } from "@/app/components/HowItWorks";
import { ClinicSchedule } from "@/app/components/ClinicSchedule";
import { AppointmentPolicy } from "@/app/components/AppointmentPolicy";
import { WhoWeServe } from "@/app/components/WhoWeServe";
import { ServicesSection } from "@/app/components/ServicesSection";
import { CompassSection } from "@/app/components/CompassSection";
// import { WelcomeLetter } from "@/app/components/WelcomeLetter";

/*
 * absoluteTitle: the homepage title already ends in the clinic name, so it must
 * not run through the "%s | HAVEN Free Clinic" template.
 */
export const metadata: Metadata = pageMetadata({
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "Free primary care for uninsured adults in New Haven, CT. HAVEN Free Clinic is a student-run clinic open Saturdays at 800 Howard Avenue. No insurance needed.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      {/*
        The welcome letter is temporarily disabled while the text is rewritten.
        To bring it back: uncomment the import above and the <WelcomeLetter />
        line below. Nothing else was removed — the component, its envelope
        animation and styles/welcome-letter.css are all still in place, and the
        letter copy lives in LETTER_PARAGRAPHS in the component.
      */}
      {/* <WelcomeLetter /> */}
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
