import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { FAQsContent } from "@/app/components/FAQsContent";

export const metadata: Metadata = {
  title: "FAQs | HAVEN Free Clinic",
  description:
    "Find answers to frequently asked questions about HAVEN Free Clinic, including eligibility, appointments, costs, and what to expect.",
};

export default function FAQsPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/faqs-hero.jpg"
        imageAlt="Frequently Asked Questions"
        title="FAQs"
      />
      <FAQsContent />
    </>
  );
}
