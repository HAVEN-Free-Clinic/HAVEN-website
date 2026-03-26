"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

/* ─── Data ─── */

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "Am I eligible for care at HAVEN Free Clinic?",
    answer: (
      <div>
        <p className="mb-2">To be a patient, you must:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Reside in the Greater New Haven Area</li>
          <li>Be between the ages of 18 and 65 years</li>
          <li>Have no active medical coverage/insurance.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What services does HAVEN Free Clinic offer?",
    answer: (
      <p>
        For information on services offered, please visit our{" "}
        <Link href="/services" className="text-[#00356b] underline hover:opacity-80">
          services page
        </Link>
        .
      </p>
    ),
  },
  {
    question: "How do I navigate billing?",
    answer: (
      <ul className="list-disc pl-8 space-y-1">
        <li>
          Prepare all necessary documents
          <ul className="list-disc pl-8 mt-1">
            <li>Medication list/Medical history</li>
          </ul>
        </li>
        <li>Review our protocols</li>
        <li>Request a translator if you need one</li>
      </ul>
    ),
  },
];

/* ─── Accordion Item ─── */

function AccordionItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#00356b]/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer group text-left"
      >
        <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-6 h-6 md:w-9 md:h-9 lg:w-11 lg:h-11 shrink-0 text-black transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[5000px] pb-6" : "max-h-0"
        }`}
      >
        <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export function FAQsContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            FAQs
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            The HAVEN Free Clinic is a{" "}
            <span className="font-semibold">student-run primary care clinic</span>{" "}
            that partners with Yale University to provide sustainable,
            comprehensive, and high-quality{" "}
            <span className="font-semibold">
              health care <em>free</em> of charge
            </span>{" "}
            to uninsured adults in New Haven.
          </p>
        </div>
      </div>

      {/* ── Accordion List ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>

      {/* ── Contact Box ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
        <div className="border border-[#00356b] px-8 md:px-12 lg:px-16 py-8 md:py-10 w-full">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[33px] mb-4 md:mb-5">
            Can't find an answer to your question?
          </h3>
          <p className="font-['Poppins',sans-serif] font-medium text-black text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] mb-3">
            Contact us for further assistance!
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] mb-2">
            <a href="tel:2032000673" className="hover:underline">
              (203) 200-0673
            </a>
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
            <a
              href="mailto:haven.free.clinic@yale.edu"
              className="hover:underline"
            >
              haven.free.clinic@yale.edu
            </a>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
