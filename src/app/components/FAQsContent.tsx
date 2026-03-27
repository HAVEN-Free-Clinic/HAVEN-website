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
    question: "Who is eligible to be seen at the clinic?",
    answer: (
      <div>
        <p className="mb-2">To be eligible for care, you must:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Reside in the Greater New Haven area</li>
          <li>Be between 18 and 65 years old</li>
          <li>Have no active medical insurance</li>
          <li>Not currently have a primary care provider</li>
        </ul>
        <p className="mt-3">
          Additional criteria may apply and will be assessed prior to acceptance. You can check your eligibility on our{" "}
          <Link href="/eligibility" className="text-[#00356b] underline hover:opacity-80">
            eligibility page
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    question: "How do I make an appointment?",
    answer: (
      <p>
        Call{" "}
        <a href="tel:2032000673" className="text-[#00356b] underline hover:opacity-80">
          (203) 200-0673
        </a>{" "}
        and leave your name and phone number. Someone will return your call within 24 hours. Both English and Spanish speakers are available.
      </p>
    ),
  },
  {
    question: "Do you take walk-ins?",
    answer: (
      <p>
        Yes, but the clinic often fills up quickly. We strongly encourage you to make an appointment by calling ahead to ensure you can be seen.
      </p>
    ),
  },
  {
    question: "When is the clinic open?",
    answer: (
      <p>Saturdays, 8:30 AM – 12:00 PM.</p>
    ),
  },
  {
    question: "Where is the clinic located?",
    answer: (
      <p>
        800 Howard Avenue, New Haven, CT — in the Yale Physicians Building. Free parking is available in the Howard Avenue Garage, to the left of the building. For more details, visit our{" "}
        <Link href="/visitor-guide" className="text-[#00356b] underline hover:opacity-80">
          visitor guide
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Do I have to pay for anything?",
    answer: (
      <p>
        No. All services provided at the clinic — including visits, medications, and referrals — are completely free of charge.
      </p>
    ),
  },
  {
    question: "What should I bring to my visit?",
    answer: (
      <div>
        <p className="mb-2">For your first visit, please bring:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>All current medications, including prescriptions, herbs, vitamins, and supplements</li>
          <li>Any medical records or history you have available</li>
          <li>If referred from the Emergency Room, bring your discharge instructions</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long should I expect my visit to take?",
    answer: (
      <p>
        Visit length depends on your medical needs and patient volume. Your first visit may take several hours, especially if it has been a long time since you last saw a primary care physician. Follow-up visits are typically shorter.
      </p>
    ),
  },
  {
    question: "What types of medical conditions can you treat?",
    answer: (
      <p>
        We treat common chronic conditions such as diabetes, hypertension, and high cholesterol, as well as provide general primary care. We are unable to provide pediatric care, HIV/AIDS care, or prenatal care, but can provide referrals for those services. Visit our{" "}
        <Link href="/services" className="text-[#00356b] underline hover:opacity-80">
          services page
        </Link>{" "}
        for more details.
      </p>
    ),
  },
  {
    question: "What if I don't speak English?",
    answer: (
      <p>
        Spanish interpreters are available every Saturday. If you are most comfortable in a language other than Spanish, please let us know when scheduling so we can work with you to find an interpreter.
      </p>
    ),
  },
  {
    question: "Who runs the clinic?",
    answer: (
      <p>
        HAVEN Free Clinic is run by students from the Yale School of Medicine, Yale School of Nursing, Yale School of Public Health, and the Yale Physician Associate Program, in collaboration with Yale Medicine.
      </p>
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
        aria-expanded={open}
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
