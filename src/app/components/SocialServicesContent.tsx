"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
