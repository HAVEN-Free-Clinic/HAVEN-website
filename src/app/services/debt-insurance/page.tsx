import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { MDICContent } from "@/app/components/MDICContent";

export const metadata: Metadata = {
  title: "Debt & Insurance | HAVEN Free Clinic",
};

export default function DebtInsurancePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/mdic-hero.jpg"
        imageAlt="Medical Debt & Insurance Counseling"
        title="Medical Debt & Insurance Counseling"
      />
      <MDICContent />
    </>
  );
}
