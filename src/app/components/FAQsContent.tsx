"use client";

import { useState } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
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
        <p className="mt-3 mb-2">Eligible areas to be seen include the following townships:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Bethany</li>
          <li>Branford</li>
          <li>East Haven</li>
          <li>Guilford</li>
          <li>Hamden</li>
          <li>Madison</li>
          <li>Meriden</li>
          <li>Milford</li>
          <li>New Haven (central city)</li>
          <li>North Branford</li>
          <li>North Haven</li>
          <li>Orange</li>
          <li>Wallingford</li>
          <li>West Haven</li>
          <li>Woodbridge</li>
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
    question: "What happens if I miss or need to cancel an appointment?",
    answer: (
      <div>
        <p className="mb-2">
          If you can't make an appointment, please let us know as soon as possible — send a Care Message through your{" "}
          <Link href="/mychart" className="text-[#00356b] underline hover:opacity-80">
            MyChart patient portal
          </Link>{" "}
          or call{" "}
          <a href="tel:2032000673" className="text-[#00356b] underline hover:opacity-80">
            (203) 200-0673
          </a>
          . This lets us offer your slot to another patient in need.
        </p>
        <p>
          A no-show is a missed appointment without prior notice. Please note that if you no-show 3 or more consecutive appointments, we will be unable to reschedule future appointments. See our{" "}
          <Link href="/visitor-guide" className="text-[#00356b] underline hover:opacity-80">
            visitor guide
          </Link>{" "}
          for the full no-show policy and alternative scheduling options.
        </p>
      </div>
    ),
  },
  {
    question: "Do you take walk-ins?",
    answer: (
      <div>
        <p className="mb-2">
          We offer both scheduled appointments and limited walk-in availability. Scheduled patients are always seen first. Walk-ins are welcome on a first come, first served basis, but are only accepted until 10:30 AM, after which we cannot guarantee availability for that day.
        </p>
        <p>
          To secure your spot and reduce wait times, we encourage all patients to schedule an appointment in advance by calling{" "}
          <a href="tel:2032000673" className="text-[#00356b] underline hover:opacity-80">
            (203) 200-0673
          </a>
          .
        </p>
      </div>
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
      <div>
        <p className="mb-2">
          Visits at HAVEN are always free. Some patients also qualify for free specialty referrals through our free care partnerships, but these are not guaranteed and depend on eligibility and availability.
        </p>
        <p>
          For medications, HAVEN has a cost-sharing policy: patients cover the cost of medications priced under $20, while medications at or above $20 are provided at no cost. No patient is ever denied a medication due to inability to pay, and waivers are available for financial hardship. See our{" "}
          <Link href="/services/medication" className="text-[#00356b] underline hover:opacity-80">
            medication page
          </Link>{" "}
          for details.
        </p>
      </div>
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
      <div>
        <p className="mb-2">
          As a student-run clinic, our care is delivered under physician supervision and focused on conditions we can manage safely. We provide primary care for common and chronic conditions, including hypertension, high cholesterol, non-insulin-dependent (Type 2) diabetes, asthma and other stable respiratory conditions, common infections and acute illnesses, preventive care and screenings, and medication management for stable chronic conditions.
        </p>
        <p className="mb-2">
          Some conditions fall outside our scope — including insulin-dependent diabetes, active cancer, and pregnancy. We also do not provide pediatric or HIV/AIDS care. If your needs fall outside what we can treat, we&apos;ll work with you on a warm handoff to the right provider.
        </p>
        <p>
          See our{" "}
          <Link href="/services/patient-care" className="text-[#00356b] underline hover:opacity-80">
            patient care page
          </Link>{" "}
          for the full scope of care.
        </p>
      </div>
    ),
  },
  {
    question: "What is the Compass Program?",
    answer: (
      <p>
        The Compass Program is HAVEN&apos;s signature 3-to-5-year care navigation program. Beyond managing your health today, we work with you to understand your conditions, connect you with community resources and specialists, and build a roadmap toward permanent healthcare coverage and a long-term primary care provider. Ask your care team how to enroll, or learn more on our{" "}
        <Link href="/services/social-services#compass" className="text-[#00356b] underline hover:opacity-80">
          social services page
        </Link>
        .
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
        <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
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
            <a href="tel:2032000673" className="inline-flex items-center gap-2 hover:underline">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#00356b] shrink-0" />
              (203) 200-0673
            </a>
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
            <a
              href="mailto:haven.free.clinic@yale.edu"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#00356b] shrink-0" />
              haven.free.clinic@yale.edu
            </a>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
