import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { OperationsContent } from "@/app/components/OperationsContent";

export const metadata: Metadata = pageMetadata({
  title: "Departments & Operations",
  description:
    "Every department that makes HAVEN Free Clinic run, from primary care and the lab to the Medical-Legal Partnership, Food Pharmacy, quality improvement, and finance.",
  path: "/about/operations",
});

export default function OperationsPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/HAVEN In-Clinic.jpg"
        imageAlt="Departments and operations at HAVEN Free Clinic"
        title="Departments & Operations"
      />
      <OperationsContent />
    </>
  );
}
