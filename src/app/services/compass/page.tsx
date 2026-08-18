import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { CompassContent } from "@/app/components/CompassContent";

export const metadata: Metadata = pageMetadata({
  title: "The Compass Program",
  description:
    "Compass is HAVEN Free Clinic's three-to-five-year care navigation program, ending with permanent health coverage and a primary care provider of your own.",
  path: "/services/compass",
});

export default function CompassPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/social-services-hero.jpg"
        imageAlt="The Compass Program"
        title="The Compass Program"
      />
      <CompassContent />
    </>
  );
}
