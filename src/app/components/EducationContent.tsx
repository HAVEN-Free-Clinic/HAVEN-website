"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

/* ─── Link Arrow Icon (from Figma SVG) ─── */

function LinkArrow() {
  return (
    <svg
      className="w-[20px] h-[16px] md:w-[25px] md:h-[19px] lg:w-[29px] lg:h-[22px] shrink-0"
      fill="none"
      viewBox="0 0 29 22.1194"
    >
      <path
        d="M7.17788 2.93471H23.4279M23.4279 2.93471V19.1847M23.4279 2.93471L7.17788 19.1847"
        stroke="#00356b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ─── Guide Dropdown Item ─── */

interface GuideItem {
  title: string;
  href?: string;
}

function GuideDropdown({ title, href = "#" }: GuideItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#00356b]/20">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] pr-4">
          {title}
        </span>
        <ChevronDown
          className={`w-6 h-6 md:w-8 md:h-8 shrink-0 text-[#00356b] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[200px] pb-6" : "max-h-0"
        }`}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 md:gap-2.5 hover:opacity-70 transition-opacity"
        >
          <span className="font-['Poppins',sans-serif] text-[#00356b] text-[16px] sm:text-[18px] md:text-[20px]">
            Download PDF
          </span>
          <LinkArrow />
        </a>
      </div>
    </div>
  );
}

/* ─── Data ─── */

const educationGuides: GuideItem[] = [
  { title: "Nutrition" },
  { title: "Exercise" },
  { title: "Specific Conditions" },
  { title: "Calming Down" },
];

const howToGuides: GuideItem[] = [
  { title: "Blood Pressure Cuffs" },
  { title: "Glucose Monitors" },
];

/* ─── Main component ─── */

export function EducationContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Now providing one-on-one counseling regarding behavioral changes,
            illness, and general wellness, as well as counseling and resources
            about diet and exercise, hypertension, high cholesterol, weight
            management, and smoking cessation.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Please note that these pdf handouts provided by the Education
            Department are simply meant to{" "}
            <span className="font-medium">
              supplement and provide more information for access from home
            </span>
            . These handouts are not meant to replace patient visits.{" "}
            <span className="font-medium">
              Patients should continue to seek guidance from their healthcare
              providers
            </span>{" "}
            and/or the Education Department to address their concerns.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Education Guides ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Education Guides
          </h3>
          {educationGuides.map((guide) => (
            <GuideDropdown key={guide.title} title={guide.title} href={guide.href} />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-10 md:mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Vaccine Education ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Vaccine Education
          </h3>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              Vaccines are one of the safest, most effective ways to prevent
              serious illness. They help your immune system recognize and fight
              specific infections before you ever get sick. HAVEN offers several
              routine and preventive vaccines in clinic to help protect your
              health.{" "}
              <span className="font-medium">
                Vaccine availability varies — please ask your provider about what
                is currently in stock.
              </span>
            </p>
          </div>

          <div className="bg-[#00356b]/5 border-l-4 border-[#00356b] p-4 md:p-5 mt-6 font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed">
            <p>
              <span className="font-semibold text-[#00356b]">
                You must be an established HAVEN patient to receive a vaccine.
              </span>{" "}
              Vaccines are offered as part of your ongoing care at the clinic — we
              are not able to provide standalone or walk-in vaccine-only visits.
              If you are not yet a patient,{" "}
              <Link
                href="/eligibility"
                className="text-[#00356b] underline hover:text-[#00356b]/70"
              >
                see our eligibility information
              </Link>{" "}
              to establish care first.
            </p>
          </div>

          <div className="mt-7">
            <h4 className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
              Vaccines Available at HAVEN
            </h4>
            <ul className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed list-disc pl-6 space-y-2">
              <li>Shingles (Shingrix)</li>
              <li>HPV (Gardasil)</li>
              <li>Hepatitis B (Heplisav-B)</li>
              <li>Tetanus, diphtheria, and pertussis (Tdap / Boostrix)</li>
              <li>Pneumococcal (PCV)</li>
              <li>Hepatitis A &amp; B (Twinrix)</li>
            </ul>
          </div>

          <div className="mt-7">
            <h4 className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
              COVID-19 &amp; Flu Vaccines
            </h4>
            <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
              We do not always carry COVID-19 and flu vaccines in clinic. Visit{" "}
              <a
                href="https://www.vaccines.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00356b] underline hover:text-[#00356b]/70 transition-colors"
              >
                vaccines.gov
              </a>{" "}
              to find locations near you offering these vaccines.
            </p>
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mt-7">
            If you are interested in receiving a vaccine or have questions about
            which vaccines you may need, please ask your provider.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-10 md:mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── How-To Guides ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            How-To Guides
          </h3>
          {howToGuides.map((guide) => (
            <GuideDropdown key={guide.title} title={guide.title} href={guide.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
