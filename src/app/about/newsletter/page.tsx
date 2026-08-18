import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHero } from "@/app/components/PageHero";
import { NewsletterContent } from "@/app/components/NewsletterContent";

export const metadata: Metadata = pageMetadata({
  title: "Newsletter",
  description:
    "HAVEN Happenings, the HAVEN Free Clinic newsletter: clinic updates, new programs and partnerships, and the volunteers behind them. Read or download every issue.",
  path: "/about/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="HAVEN Happenings newsletter"
        title="Newsletter"
      />
      <NewsletterContent />
    </>
  );
}
