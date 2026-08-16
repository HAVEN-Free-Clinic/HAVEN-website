import type { Metadata } from "next";
import Link from "next/link";
import svgPaths from "@/lib/svg-paths";
import { PageHero } from "@/app/components/PageHero";
import { GetInvolvedContent } from "@/app/components/GetInvolvedContent";
import { FiveKSection } from "@/app/components/FiveKSection";

export const metadata: Metadata = {
  title: "Get Involved | HAVEN Free Clinic",
  description:
    "Volunteer at HAVEN Free Clinic or support our mission through donations. Fall Volunteer Recruitment 2026 applications are open through September 12th.",
  robots: { index: false, follow: false },
};

// Get Involved is the one real page kept live during the COMING_SOON build so
// prospective volunteers can read recruitment details. The coming-soon root
// layout ships no StickyHeader/Footer, so this route supplies its own minimal
// wordmark bar (overlaid on the hero, matching the real site's transparent nav)
// and a slim footer.
export default function ComingSoonGetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <div className="relative">
        <PageHero
          imageSrc="/images/hero-newhaven.jpg"
          imageAlt="Community involvement"
          title="Get Involved"
        />

        <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between gap-4 [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.45))]">
          <Link
            href="/"
            className="notranslate flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="HAVEN Free Clinic home"
          >
            <div className="relative w-[52px] h-[52px] md:w-[60px] md:h-[60px] flex items-center justify-center shrink-0">
              <svg
                className="absolute inset-0 w-full h-full"
                fill="none"
                viewBox="0 0 73.6439 76"
              >
                <path
                  d={svgPaths.pd9d0700}
                  stroke="white"
                  strokeWidth="2.47477"
                />
              </svg>
              <span className="relative font-['Poppins',sans-serif] text-[11px] md:text-[12px] text-white z-10">
                HAVEN
              </span>
            </div>
            <div className="hidden sm:block font-['Poppins',sans-serif] text-[14px] md:text-[16px] text-white leading-tight">
              <p>Free Clinic</p>
              <p>La Cl&iacute;nica Gratuita</p>
            </div>
          </Link>

          <Link
            href="/"
            className="font-['Poppins',sans-serif] font-semibold text-white text-[13px] md:text-[15px] border border-white/70 hover:bg-white/15 transition-colors px-4 py-2 md:px-5 md:py-2.5"
          >
            &larr; Clinic info
          </Link>
        </header>
      </div>

      <main className="flex-1">
        <GetInvolvedContent />
        <FiveKSection />
      </main>

      <footer className="bg-[#00356b] w-full px-6 md:px-12 lg:px-16 py-10 md:py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-3">
          <p className="font-['Poppins',sans-serif] text-white text-[15px] md:text-[16px]">
            Recruitment questions?{" "}
            <a
              href="mailto:hfc.recruitment@yale.edu"
              className="underline hover:text-white/75 transition-colors break-all"
            >
              hfc.recruitment@yale.edu
            </a>
          </p>
          <p className="font-['Poppins',sans-serif] text-white/85 text-[14px] md:text-[15px]">
            Clinic:{" "}
            <a href="tel:2032000673" className="hover:underline">
              (203) 200-0673
            </a>{" "}
            &middot;{" "}
            <a
              href="mailto:haven.free.clinic@yale.edu"
              className="hover:underline break-all"
            >
              haven.free.clinic@yale.edu
            </a>
          </p>
          <Link
            href="/"
            className="font-['Poppins',sans-serif] text-white/85 text-[14px] underline hover:text-white transition-colors mt-1"
          >
            Hours, location &amp; <span className="notranslate" translate="no">MyChart</span>
          </Link>
          <p className="font-['Poppins',sans-serif] text-white/60 text-[13px] mt-3">
            &copy; {new Date().getFullYear()} HAVEN Free Clinic. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
