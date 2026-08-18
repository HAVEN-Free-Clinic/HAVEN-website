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

/*
 * A guide only renders a download link once it has a real `href` pointing at a
 * PDF in /public/docs. Until then it says so plainly — a "Download PDF" link
 * that goes nowhere is worse than no link at all.
 */

interface GuideItem {
  title: string;
  href?: string;
}

function GuideDropdown({ title, href }: GuideItem) {
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
      {/* `invisible` (not just max-h-0) keeps the collapsed panel out of the
          tab order and away from screen readers. */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[240px] pb-6 visible" : "max-h-0 invisible"
        }`}
      >
        {href ? (
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
        ) : (
          <p className="font-['Poppins',sans-serif] text-black/70 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[640px]">
            This handout is not online yet. Ask the Education Department for a
            printed copy at your next visit, or call{" "}
            <a
              href="tel:2032000673"
              className="text-[#00356b] font-semibold hover:underline"
            >
              (203) 200-0673
            </a>{" "}
            and we can go over it with you.
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Data ─── */

/*
 * TODO (Education Department): none of these handouts have a PDF yet. Drop the
 * file into /public/docs and add `href: "/docs/<filename>.pdf"` to the entry to
 * turn its download link on. Entries without an href tell patients to ask for a
 * printed copy instead of showing a dead link.
 */

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
            The handouts below are meant to{" "}
            <span className="font-medium">
              supplement your visits, not replace them
            </span>
            . Ask the Education Department for a printed copy at clinic;
            downloadable versions are added here as they are finished.{" "}
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
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Education Guides
          </h2>
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
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Vaccine Education
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Vaccines are one of the safest, most effective ways to prevent
            serious illness, and we are glad to talk them through with you at
            any visit. The full list of what HAVEN stocks, who is eligible, and
            where to go for the COVID-19 and flu shots we do not carry lives on
            the Patient Care page.
          </p>
          <Link
            href="/services/patient-care"
            className="inline-flex items-center gap-2 mt-5 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[17px] hover:gap-3 transition-all"
          >
            Vaccines at HAVEN
            <LinkArrow />
          </Link>
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
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            How-To Guides
          </h2>
          {howToGuides.map((guide) => (
            <GuideDropdown key={guide.title} title={guide.title} href={guide.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
