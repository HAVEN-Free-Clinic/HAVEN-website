"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Arrow icon for CTA buttons ─── */

function LinkArrow() {
  return (
    <svg
      className="w-[24px] h-[18px] md:w-[32px] md:h-[24px] shrink-0"
      fill="none"
      viewBox="0 0 44 34"
    >
      <path
        d="M11 8.82385H27.25M27.25 8.82385V25.0739M27.25 8.82385L11 25.0739"
        stroke="#00356b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ─── Divider ─── */

function Divider() {
  return <hr className="w-full border-t border-[#00356b]/10" />;
}

/* ─── Accordion ─── */

interface ReferralType {
  title: string;
  content?: React.ReactNode;
}

const referralTypes: ReferralType[] = [
  {
    title: "Medical & Surgical Specialty Referral",
  },
  {
    title: "Clinical Support Services Referral",
  },
  {
    title: "Inpatient Referral",
    content: (
      <p>
        To arrange a hospital admission at Connecticut Children's – Hartford or
        at Connecticut Children's – Waterbury or the pediatric inpatient units at
        Norwalk Hospital or Danbury Hospital, contact our OneCall Physician
        Access Line at 1.833.PEDS.NOW (1.833.733.7669)
      </p>
    ),
  },
  {
    title: "Emergency Department Transport",
  },
];

function AccordionItem({ item }: { item: ReferralType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
          {item.title}
        </span>
        <ChevronDown
          className={`w-6 h-6 md:w-9 md:h-9 lg:w-11 lg:h-11 shrink-0 text-black transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>

      {item.content && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            {item.content}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main Component ─── */

export function ReferralsContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] shrink-0">
            Referrals
          </h2>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px] space-y-5">
            <p>
              As a referring provider, we are able to deliver high-quality,
              comprehensive patient care. We are dedicated to supporting your
              needs and making it easier for you to access important information,
              communicate with our providers, and refer patients to sites when
              necessary. Quickly access our referral options below.
            </p>
            <p>Before you make a referral, review</p>
            <ul className="list-disc pl-8 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-[#00356b] underline hover:opacity-80"
                >
                  Referral Guidance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#00356b] underline hover:opacity-80"
                >
                  Information Necessary to Process a New Patient Referral
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Divider />
      </div>

      {/* ── Access Medical Referrals CTA ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 flex justify-center">
        <div className="bg-[#00356b]  px-8 sm:px-12 md:px-16 lg:px-24 py-10 md:py-12 lg:py-14 w-full max-w-[1000px] flex flex-col items-center text-center gap-6 md:gap-8 lg:gap-10">
          <h3 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
            Access Medical Referrals
          </h3>
          <p className="font-['Poppins',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[600px]">
            Feel supported regardless of medical debt, medical insurance, food
            insecurity, housing insecurity, and unemployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#"
              className="bg-white px-6 md:px-8 py-2.5 md:py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <span className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
                Log In
              </span>
              <LinkArrow />
            </a>
            <a
              href="#"
              className="bg-white px-6 md:px-8 py-2.5 md:py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <span className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
                Request Access
              </span>
              <LinkArrow />
            </a>
          </div>
        </div>
      </div>

      {/* ── Types of Referrals Accordion ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        {referralTypes.map((item) => (
          <AccordionItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
