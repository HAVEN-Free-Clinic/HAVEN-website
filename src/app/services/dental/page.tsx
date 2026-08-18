import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { DentalContent } from "@/app/components/DentalContent";

/*
 * The route stays /services/dental even though the department is now called the
 * Oral Health Initiative everywhere on the page. Renaming the path would break
 * every link already shared with a patient, and "dental" is still the word
 * someone types into a search box.
 */
export const metadata: Metadata = pageMetadata({
  title: "Oral Health Initiative",
  description:
    "HAVEN Free Clinic's Oral Health Initiative does not provide dental treatment. It triages oral health concerns and connects patients with affordable community dental care at no cost.",
  path: "/services/dental",
});

export default function DentalPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/dental-hero.jpg"
        imageAlt="Oral Health Initiative"
        title="Oral Health Initiative"
      />
      <DentalContent />
    </>
  );
}
