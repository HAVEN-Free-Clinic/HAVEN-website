import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { GoetschEndowmentContent } from "@/app/components/GoetschEndowmentContent";

export const metadata: Metadata = pageMetadata({
  title: "Goetsch Endowment",
  description:
    "Learn about the Dr. John B. Goetsch Endowment for Medical Education and Service, which supports HAVEN Free Clinic.",
  path: "/about/endowment",
});

export default function EndowmentPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Goetsch Endowment"
        title="Goetsch Endowment"
      />
      <GoetschEndowmentContent />
    </>
  );
}
