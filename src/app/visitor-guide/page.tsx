import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { VisitorGuideContent } from "@/app/components/VisitorGuideContent";

export const metadata: Metadata = {
  title: "Visitor Guide | HAVEN Free Clinic",
  description:
    "Everything you need to know before visiting HAVEN Free Clinic, including what to bring, what to expect, and how to book appointments.",
};

export default function VisitorGuidePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/visitor-guide-hero.jpg"
        imageAlt="Visitor Guide"
        title="Visitor Guide"
      />
      <VisitorGuideContent />
    </>
  );
}
