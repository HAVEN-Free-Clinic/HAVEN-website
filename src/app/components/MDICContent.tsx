"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";

/* ─── Language Dropdown for PDFs ─── */

interface LanguageDoc {
  label: string;
  href: string;
}

function LanguageDownloadDropdown({
  docs,
  buttonLabel,
}: {
  docs: LanguageDoc[];
  buttonLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 border border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] px-5 py-3 hover:bg-[#00356b]/5 transition-colors"
      >
        <Download className="w-4 h-4 shrink-0" />
        {buttonLabel}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-200 py-1 min-w-[200px] z-50">
          {docs.map((doc) => (
            <a
              key={doc.label}
              href={doc.href}
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 font-['Poppins',sans-serif] text-[14px] text-gray-700 hover:bg-[#00356b]/10 hover:text-[#00356b] transition-colors"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              {doc.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Link Arrow Icon ─── */

function LinkArrow({ className = "text-white" }: { className?: string }) {
  return (
    <svg
      className={`w-[22px] h-[17px] md:w-[30px] md:h-[23px] lg:w-[36px] lg:h-[28px] shrink-0 ${className}`}
      fill="none"
      viewBox="0 0 44.4421 33.8977"
    >
      <path
        d="M11 8.82385H27.25M27.25 8.82385V25.0739M27.25 8.82385L11 25.0739"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ─── Resource Card ─── */

interface ResourceCardProps {
  title: string;
  image: string;
  href?: string;
}

function ResourceCard({ title, image, href = "#" }: ResourceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-[368/391] overflow-hidden border border-[#00356b] cursor-pointer"
    >
      {/* Card Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Label + Arrow */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-2">
        <span className="font-['Poppins',sans-serif] font-bold text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[33px] underline underline-offset-4">
          {title}
        </span>
        <LinkArrow />
      </div>
    </a>
  );
}

/* ─── Data ─── */

const resources: ResourceCardProps[] = [
  { title: "Medicaid", image: "/images/medicaid-card.jpg" },
  { title: "HUSKY", image: "/images/husky-card.jpg" },
  { title: "YNHH", image: "/images/ynhh-card.jpg" },
];

/* ─── Main component ─── */

export function MDICContent() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Insurance Counseling
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            We can help you in securing{" "}
            <span className="font-bold">free or low-cost care</span>. We
            provide application assistance for Medicaid, HUSKY, and Yale-New
            Haven Hospital (YNHH) Financial Assistance programs.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Blue Contact / Billing Guide Box ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
        <div className="bg-[#00356b] px-8 sm:px-12 md:px-16 lg:px-24 py-10 md:py-12 lg:py-14 flex flex-col items-center text-center">
          <p className="font-['Poppins',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[700px] mb-8 md:mb-10">
            If you receive any bills for services provided by or referred
            through HAVEN Free Clinic, or if you need help with medical bills or
            insurance questions, please contact MDIC at{" "}
            <a
              href="mailto:hfc.billing@yale.edu"
              className="underline hover:text-white/80 transition-colors"
            >
              hfc.billing@yale.edu
            </a>
            . See the MDIC/Billing Guide below for information on how HAVEN can
            assist and what documents are required.
          </p>

          {/* MDIC/Billing Guide Button */}
          <button
            onClick={() => setGuideOpen(!guideOpen)}
            aria-expanded={guideOpen}
            className="bg-white px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
              MDIC/Billing Guide
            </span>
            <ChevronDown
              className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black transition-transform duration-300 ${
                guideOpen ? "rotate-180" : ""
              }`}
              strokeWidth={2.5}
            />
          </button>

          {/* Expandable Guide Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
              guideOpen ? "max-h-[5000px] mt-8" : "max-h-0"
            }`}
          >
            <div className="bg-white/10 px-6 md:px-10 py-6 md:py-8 text-left">
              <div className="font-['Poppins',sans-serif] text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed space-y-4">
                <p className="font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  What MDIC Can Help With:
                </p>
                <ul className="list-disc pl-6 md:pl-8 space-y-2">
                  <li>
                    Reviewing and explaining medical bills from HAVEN-referred
                    services
                  </li>
                  <li>
                    Assisting with applications for Medicaid, HUSKY, or YNHH
                    Financial Assistance
                  </li>
                  <li>
                    Helping navigate insurance enrollment and coverage questions
                  </li>
                  <li>
                    Advocating on your behalf for billing adjustments or payment
                    plans
                  </li>
                </ul>
                <p className="font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  Documents You May Need:
                </p>
                <ul className="list-disc pl-6 md:pl-8 space-y-2">
                  <li>Photo ID</li>
                  <li>Proof of income (pay stubs, tax return)</li>
                  <li>Proof of address (utility bill, lease agreement)</li>
                  <li>
                    Any medical bills or insurance correspondence you've received
                  </li>
                </ul>
                <p>
                  Contact us at{" "}
                  <a
                    href="mailto:hfc.billing@yale.edu"
                    className="underline hover:text-white/80"
                  >
                    hfc.billing@yale.edu
                  </a>{" "}
                  to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Helpful Resources: Application Assistance ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-8 md:mb-10">
            Helpful Resources: Application Assistance
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.title}
                title={resource.title}
                image={resource.image}
                href={resource.href}
              />
            ))}
          </div>

          {/* YNHH Financial Assistance Program */}
          <div className="mt-12 md:mt-16">
            <h4 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] mb-4 md:mb-6">
              YNHH Financial Assistance Program
            </h4>
            <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed mb-6">
              Yale New Haven Hospital offers financial assistance to eligible patients. Download the guide in your preferred language.
            </p>
            <LanguageDownloadDropdown
              buttonLabel="Download Guide"
              docs={[
                { label: "English", href: "/docs/ynhh-financial-assistance-english.pdf" },
                { label: "French (Fran\u00e7ais)", href: "/docs/ynhh-financial-assistance-french.pdf" },
                { label: "Haitian Creole (Krey\u00f2l)", href: "/docs/ynhh-financial-assistance-haitian-creole.pdf" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
