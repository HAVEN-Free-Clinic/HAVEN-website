import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { MyChartContent } from "@/app/components/MyChartContent";

export const metadata: Metadata = {
  title: "MyChart | HAVEN Free Clinic",
  description:
    "Access your HAVEN Free Clinic health information through MyChart. View test results, message your care team, and manage appointments.",
};

export default function MyChartPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="HAVEN Free Clinic MyChart Patient Portal"
        title="MyChart"
      />
      <MyChartContent />
    </>
  );
}
