import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { NewsContent } from "@/app/components/NewsContent";

export const metadata: Metadata = pageMetadata({
  title: "News",
  description:
    "Read the latest news coverage about HAVEN Free Clinic.",
  path: "/about/news",
});

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
