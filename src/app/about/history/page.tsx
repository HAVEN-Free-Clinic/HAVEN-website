import { PageHero } from "@/app/components/PageHero";
import { HistoryContent } from "@/app/components/HistoryContent";

export default function HistoryPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.jpg"
        imageAlt="Our History"
        title="Our History"
        subtitle="HAVEN Free Clinic"
      />
      <HistoryContent />
    </>
  );
}
