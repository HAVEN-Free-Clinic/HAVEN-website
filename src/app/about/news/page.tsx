import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { NewsContent } from "@/app/components/NewsContent";

export const metadata: Metadata = {
  title: "News | HAVEN Free Clinic",
  description:
    "Read the latest news coverage about HAVEN Free Clinic.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="HAVEN Free Clinic news"
        title="News"
      />
      <NewsContent />
    </>
  );
}
