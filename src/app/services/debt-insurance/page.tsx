import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { MDICContent } from "@/app/components/MDICContent";

export const metadata: Metadata = pageMetadata({
  title: "Insurance Counseling",
  description:
    "HAVEN Free Clinic helps patients navigate medical debt, insurance enrollment, and financial assistance programs.",
  path: "/services/debt-insurance",
});

export default function DebtInsurancePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/mdic-hero.jpg"
        imageAlt="Insurance Counseling"
        title="Insurance Counseling"
      />
      <MDICContent />
    </>
  );
}
