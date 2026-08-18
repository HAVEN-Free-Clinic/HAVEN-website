import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { NavigatingCareContent } from "@/app/components/NavigatingCareContent";

export const metadata: Metadata = pageMetadata({
  title: "Navigating Healthcare",
  description:
    "A plain-language guide to the American healthcare system: every level of care, what each costs, how coverage works in Connecticut, and where HAVEN Free Clinic fits.",
  path: "/navigating-care",
});

export default function NavigatingCarePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Navigating Healthcare"
        title="Navigating Healthcare"
      />
      <NavigatingCareContent />
    </>
  );
}
