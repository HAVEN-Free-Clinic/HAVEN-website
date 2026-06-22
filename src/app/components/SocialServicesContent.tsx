"use client";

import { useState } from "react";
import {
  ChevronDown,
  Compass,
  Map,
  HeartHandshake,
  Lock,
  LifeBuoy,
  Phone,
  ExternalLink,
} from "lucide-react";

/* ─── Social Determinants of Health Screening ─── */

interface SDOHQuestion {
  id: string;
  text: string;
  resource: string;
}

const SDOH_QUESTIONS: SDOHQuestion[] = [
  {
    id: "food",
    text: "I worry about running out of food before I have money to buy more.",
    resource: "Food assistance, SNAP, and WIC support",
  },
  {
    id: "housing",
    text: "I have trouble paying my rent or mortgage, or I'm worried about losing my housing.",
    resource: "Housing, rental aid, and shelter referrals",
  },
  {
    id: "utilities",
    text: "I've struggled to pay utility bills like gas, electric, or water.",
    resource: "Utility and energy assistance through 211",
  },
  {
    id: "transportation",
    text: "I don't have reliable transportation to appointments, work, or daily needs.",
    resource: "Transportation resources",
  },
  {
    id: "employment",
    text: "I'm unemployed or having trouble covering basic expenses.",
    resource: "Job readiness and workforce development",
  },
  {
    id: "safety",
    text: "I feel unsafe where I live or in a relationship.",
    resource: "Confidential safety and crisis support",
  },
  {
    id: "language",
    text: "I need help communicating with providers in my preferred language.",
    resource: "Interpretation and ESOL resources",
  },
];

function SDOHScreening() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const flagged = SDOH_QUESTIONS.filter((q) => checked[q.id]);
  const anyChecked = flagged.length > 0;

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
        Social Determinants of Health Screening
      </h3>
      <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-5">
        Your health is shaped by more than what happens in the clinic. Check any
        of the following that apply to you to see how we can help — and bring
        anything you check to your next visit so our care team can connect you
        with support.
      </p>

      <div className="flex items-start gap-2.5 mb-8 text-[#00356b]">
        <Lock className="w-4 h-4 shrink-0 mt-0.5" />
        <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] leading-relaxed">
          This screening is completely private. Your answers stay on your device
          — nothing is saved, sent, or shared.
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {SDOH_QUESTIONS.map((q) => (
          <label
            key={q.id}
            className={`flex items-start gap-3.5 p-4 md:p-5 border cursor-pointer transition-colors ${
              checked[q.id]
                ? "bg-[#00356b]/10 border-[#00356b]/30"
                : "bg-[#f7f9fc] border-[#00356b]/10 hover:border-[#00356b]/20"
            }`}
          >
            <input
              type="checkbox"
              checked={!!checked[q.id]}
              onChange={() => toggle(q.id)}
              className="mt-0.5 w-5 h-5 accent-[#00356b] shrink-0 cursor-pointer"
            />
            <span className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
              {q.text}
            </span>
          </label>
        ))}
      </div>

      {anyChecked && (
        <div className="mt-8 border-l-4 border-[#00356b] bg-[#f7f9fc] p-6 md:p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <LifeBuoy className="w-5 h-5 text-[#00356b]" />
            </div>
            <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] sm:text-[20px] md:text-[22px]">
              You don&apos;t have to navigate this alone
            </h4>
          </div>
          <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-4">
            Based on what you shared, these supports may help:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 mb-6 font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] leading-relaxed">
            {flagged.map((q) => (
              <li key={q.id}>{q.resource}</li>
            ))}
          </ul>
          <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-4">
            Two ways to get connected now:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:211"
              className="inline-flex items-center justify-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-6 py-3 hover:bg-[#4a90c4] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 2-1-1
            </a>
            <a
              href="mailto:hfc.social.services@yale.edu"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-6 py-3 hover:bg-[#00356b]/5 transition-colors"
            >
              Talk to Social Services
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Accordion ─── */

interface ResourceItem {
  title: string;
  content: React.ReactNode;
}

const resources: ResourceItem[] = [
  {
    title: "Food Assistance",
    content: (
      <div className="space-y-3">
        <p>
          We connect patients with local food pantries, community meals, and
          supplemental food programs. Additionally, we support eligible patients
          in applying for SNAP and WIC benefits.
        </p>
        <p>
          Speak with our social services team during your visit or email{" "}
          <a
            href="mailto:hfc.social.services@yale.edu"
            className="text-[#00356b] hover:underline"
          >
            hfc.social.services@yale.edu
          </a>{" "}
          for more information.
        </p>
      </div>
    ),
  },
  {
    title: "Housing",
    content: (
      <div className="space-y-3">
        <p>
          Stable housing is essential to good health. Our social services team
          can help connect you with housing resources and support in the New
          Haven area.
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>
            Referrals to emergency shelters and transitional housing programs
          </li>
          <li>
            Assistance with rental aid applications and utility/energy
            assistance programs via 211, which is a free, confidential
            information and referral service in Connecticut that connects people
            to essential health and human services.
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>
                211 can offer resources in food access, housing, transportation,
                utility assistance, and more.
              </li>
              <li>
                To learn more about 211, dial{" "}
                <a href="tel:211" className="text-[#00356b] hover:underline">
                  2-1-1
                </a>{" "}
                or visit their website at{" "}
                <a
                  href="https://www.211ct.org/"
                  className="text-[#00356b] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.211ct.org/
                </a>
                .
              </li>
            </ul>
          </li>
          <li>
            Referral to legal aid for tenants facing eviction or unsafe living
            conditions
          </li>
          <li>
            Support navigating the coordinated access network (CAN) for housing
            placement in Connecticut
          </li>
        </ul>
        <p>
          If you are experiencing homelessness or housing instability, please
          let any member of our care team know so we can begin connecting you
          with resources right away.
        </p>
      </div>
    ),
  },
  {
    title: "Employment",
    content: (
      <div className="space-y-3">
        <p>
          Finding and maintaining employment can be a key part of overall
          well-being. We can help connect you with job readiness and workforce
          development resources in New Haven.
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>
            Referrals to local workforce development programs and job training
            opportunities
          </li>
          <li>
            Help with resume writing and interview preparation through community
            partners
          </li>
          <li>Connection to adult education and GED programs</li>
          <li>
            Information about workers&apos; rights and employment protections
          </li>
        </ul>
        <p>
          Ask our social services team for a personalized referral based on your
          goals and experience.
        </p>
      </div>
    ),
  },
  {
    title: "Language",
    content: (
      <div className="space-y-3">
        <p>
          We are committed to providing care in a language you are comfortable
          with. HAVEN offers interpretation services and can connect you with
          English language learning resources. In-person and phone
          interpretation available during clinic visits in Spanish and other
          languages
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>
            In-person and phone interpretation available during clinic visits in
            Spanish and other languages
          </li>
          <li>
            Referrals to English for Speakers of Other Languages (ESOL) courses
            offered in the New Haven community
          </li>
          <li>
            Translated health education materials available for common
            conditions
          </li>
          <li>
            If you need an interpreter, please let us know when scheduling your
            appointment by calling{" "}
            <a href="tel:2032000673" className="text-[#00356b] hover:underline">
              (203) 200-0673
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

function AccordionItem({ item }: { item: ResourceItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#00356b]/20">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
          {item.title}
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
          {item.content}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export function SocialServicesContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            We treat patients as a whole, helping with a variety of issues
            including food insecurity, mortgage/rent support and utility/energy
            assistance, unemployment, English for Speakers of Other Languages
            (ESOL) courses, clothing resources, and more.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── The Compass Program ── */}
      <div
        id="compass"
        className="scroll-mt-24 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b] px-6 md:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <div className="flex items-center gap-4 mb-5 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-['Merriweather',serif] font-bold text-white text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px]">
                The Compass Program
              </h3>
            </div>
            <p className="font-['Poppins',sans-serif] text-white/90 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-4">
              At the heart of HAVEN Free Clinic is the Compass Program — our
              signature 3-to-5-year care navigation program designed to do more
              than manage your health today.
            </p>
            <p className="font-['Poppins',sans-serif] text-white/80 text-[15px] md:text-[17px] leading-relaxed mb-8">
              Through Compass, we work with you to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
              {[
                {
                  icon: HeartHandshake,
                  text: "Understand your health conditions and how to manage them",
                },
                {
                  icon: Map,
                  text: "Connect you with community resources, specialists, and support services",
                },
                {
                  icon: Compass,
                  text: "Build a roadmap toward permanent healthcare coverage and a long-term primary care provider",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/15 px-5 py-6 flex flex-col gap-3"
                >
                  <item.icon className="w-6 h-6 text-white/90" />
                  <p className="font-['Poppins',sans-serif] text-white/90 text-[14px] md:text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-['Poppins',sans-serif] text-white/90 text-[15px] md:text-[17px] leading-relaxed">
              The ultimate goal of the Compass Program is to help you establish
              care with a permanent provider, so you have consistent, reliable
              access to healthcare beyond your time with us. Ask your care team
              how to enroll, or let us know if you&apos;d like to learn more.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Social Determinants of Health Screening ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-16">
        <SDOHScreening />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Connecticut 211 Callout ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b]/10 border border-[#00356b]/20 px-8 sm:px-12 md:px-16 lg:px-20 py-10 md:py-12 lg:py-14 flex flex-col items-center text-center gap-5 md:gap-6">
            <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Connecticut 211
            </h3>
            <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[640px]">
              211 is a free, confidential service that connects you to essential
              health and human services across Connecticut — food, housing,
              utility assistance, transportation, and more — available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="tel:211"
                className="bg-white px-6 md:px-8 py-2.5 md:py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#00356b] shrink-0" />
                <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px]">
                  Dial 2-1-1
                </span>
              </a>
              <a
                href="https://www.211ct.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-6 md:px-8 py-2.5 md:py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px]">
                  Visit 211ct.org
                </span>
                <ExternalLink className="w-5 h-5 text-[#00356b] shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Social Service Resources ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Social Service Resources
          </h3>
          {resources.map((item) => (
            <AccordionItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
