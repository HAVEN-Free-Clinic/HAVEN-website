"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

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
      className="group relative block w-full aspect-[368/391] overflow-hidden border border-[#034078] cursor-pointer"
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
  { title: "Medicare", image: "/images/medicare-card.jpg" },
  { title: "Medicaid", image: "/images/medicaid-card.jpg" },
  { title: "YNHH", image: "/images/ynhh-card.jpg" },
];

/* ─── Main component ─── */

export function MDICContent() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
          <h2 className="font-['Merriweather',serif] font-bold text-[#034078] text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] shrink-0 md:w-[390px]">
            Medical Debt &amp; Insurance Counseling
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px]">
            We can help you in securing{" "}
            <span className="font-bold">free or low-cost care</span>. We
            provide application assistance for Medicare, Medicaid, and Yale-New
            Haven Hospital (YNHH) Financial Assistance programs.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <hr className="w-full border-t border-[#858282]" />
      </div>

      {/* ── Blue Contact / Billing Guide Box ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="bg-[#034078] rounded-[32px] md:rounded-[48px] px-8 sm:px-12 md:px-16 lg:px-24 py-10 md:py-12 lg:py-14 flex flex-col items-center text-center">
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
            className="bg-white rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span className="font-['Poppins',sans-serif] font-bold text-[#034078] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
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
              guideOpen ? "max-h-[2000px] mt-8" : "max-h-0"
            }`}
          >
            <div className="bg-white/10 rounded-2xl px-6 md:px-10 py-6 md:py-8 text-left">
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
                    Assisting with applications for Medicare, Medicaid, or YNHH
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

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <hr className="w-full border-t border-[#858282]" />
      </div>

      {/* ── Helpful Resources: Application Assistance ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <h3 className="font-['Merriweather',serif] font-bold text-[#034078] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] mb-8 md:mb-10 text-center">
          Helpful Resources: Application Assistance
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14 max-w-[1200px] mx-auto">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              image={resource.image}
              href={resource.href}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <hr className="w-full border-t border-[#858282]" />
      </div>

      {/* Bottom spacing */}
      <div className="h-8 md:h-12" />
    </section>
  );
}
