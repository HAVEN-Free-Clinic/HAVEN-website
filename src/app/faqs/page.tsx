import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { FAQsContent } from "@/app/components/FAQsContent";
import { FAQ_ENTRIES } from "@/lib/faqs";
import { pageMetadata, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "Find answers to frequently asked questions about HAVEN Free Clinic, including eligibility, appointments, costs, and what to expect.",
  path: "/faqs",
});

/*
 * FAQPage markup. The answers come from lib/faqs.ts, which mirrors the
 * accordion copy in plain text — Google requires that the answer it is shown
 * is the same answer visible on the page.
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faqs#faq`,
  mainEntity: FAQ_ENTRIES.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        imageSrc="/images/faqs-hero.jpg"
        imageAlt="Frequently Asked Questions"
        title="FAQs"
      />
      <FAQsContent />
    </>
  );
}
