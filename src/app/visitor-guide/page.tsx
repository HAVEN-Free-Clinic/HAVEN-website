import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { VisitorGuideContent } from "@/app/components/VisitorGuideContent";

export const metadata: Metadata = pageMetadata({
  title: "Visitor Guide",
  description:
    "Everything you need to know before visiting HAVEN Free Clinic, including what to bring, what to expect, and how to book appointments.",
  path: "/visitor-guide",
});

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
