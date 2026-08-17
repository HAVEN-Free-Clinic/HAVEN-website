import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { MyChartContent } from "@/app/components/MyChartContent";

export const metadata: Metadata = pageMetadata({
  title: "MyChart",
  description:
    "Access your HAVEN Free Clinic health information through MyChart. View test results, message your care team, and manage appointments.",
  path: "/mychart",
});

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
