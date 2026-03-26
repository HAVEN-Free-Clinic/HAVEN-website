import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { GoetschEndowmentContent } from "@/app/components/GoetschEndowmentContent";

export const metadata: Metadata = {
  title: "Goetsch Endowment | HAVEN Free Clinic",
};

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
