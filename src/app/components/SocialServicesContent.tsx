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
    /* DRAFT — replace with final copy */
    content: (
      <div className="space-y-3">
        <p>
          Our Food Pharmacy program connects patients with nutritious food and
          community resources to address food insecurity. We partner with local
          food pantries and nutrition programs throughout New Haven.
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>
            Receive groceries and fresh produce through our on-site Food
            Pharmacy during clinic hours
          </li>
          <li>
            Get referrals to local food pantries, community meals, and
            supplemental food programs
          </li>
          <li>
            Receive help applying for SNAP (food stamps) and WIC benefits
          </li>
          <li>
            Access nutrition counseling tailored to your health conditions,
            such as diabetes or hypertension
          </li>
        </ul>
        <p>
          Speak with our social services team during your visit or email{" "}
          <a href="mailto:hfc.social.services@yale.edu" className="text-[#00356b] hover:underline">
            hfc.social.services@yale.edu
          </a>{" "}
          for more information.
        </p>
      </div>
    ),
  },
  {
    title: "Housing",
    /* DRAFT — replace with final copy */
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
            assistance programs
          </li>
          <li>
            Connection to legal aid for tenants facing eviction or unsafe
            living conditions
          </li>
          <li>
            Help navigating the coordinated access network (CAN) for housing
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
    /* DRAFT — replace with final copy */
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
            Help with resume writing and interview preparation through
            community partners
          </li>
          <li>
            Connection to adult education and GED programs
          </li>
          <li>
            Information about workers&apos; rights and employment protections
          </li>
        </ul>
        <p>
          Ask our social services team for a personalized referral based on
          your goals and experience.
        </p>
      </div>
    ),
  },
  {
    title: "Language",
    /* DRAFT — replace with final copy */
    content: (
      <div className="space-y-3">
        <p>
          We are committed to providing care in a language you are comfortable
          with. HAVEN offers interpretation services and can connect you with
          English language learning resources.
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>
            In-person and phone interpretation available during clinic visits
            in Spanish and other languages
          </li>
          <li>
            Referrals to English for Speakers of Other Languages (ESOL)
            courses offered in the New Haven community
          </li>
          <li>
            Translated health education materials available for common
            conditions
          </li>
          <li>
            If you need an interpreter, please let us know when scheduling
            your appointment by calling{" "}
            <a href="tel:2032000673" className="text-[#00356b] hover:underline">
              (203) 200-0673
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Medical Debt & Counseling",
    /* DRAFT — replace with final copy */
    content: (
      <div className="space-y-3">
        <p>
          Medical bills and insurance questions can be overwhelming. Our
          Medical Debt and Insurance Counseling team is here to help you
          understand your options and reduce financial stress.
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>
            Help reviewing and understanding medical bills from other
            providers
          </li>
          <li>
            Assistance applying for Medicaid (HUSKY), Medicare, and other
            public insurance programs
          </li>
          <li>
            Guidance on hospital financial assistance and charity care
            programs
          </li>
          <li>
            Support negotiating payment plans or disputing billing errors
          </li>
          <li>
            Connection to our Medical-Legal Partnership for cases involving
            debt collection or insurance denials
          </li>
        </ul>
        <p>
          Contact our billing team at{" "}
          <a href="mailto:hfc.billing@yale.edu" className="text-[#00356b] hover:underline">
            hfc.billing@yale.edu
          </a>{" "}
          or ask to speak with a counselor during your visit.
        </p>
      </div>
    ),
  },
];

function AccordionItem({ item }: { item: ResourceItem }) {
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

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[1000px] pb-6" : "max-h-0"
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
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] shrink-0">
            Social Services
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px]">
            We treat patients as a whole, helping with a variety of issues
            including food insecurity, mortgage/rent support and utility/energy
            assistance, unemployment, English for Speakers of Other Languages
            (ESOL) courses, clothing resources, and more.
          </p>
        </div>
      </div>

      {/* ── Social Service Resources Heading ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-6 md:pt-10 pb-4 md:pb-6">
        <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px]">
          Social Service Resources
        </h3>
      </div>

      {/* ── Accordion Items ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        {resources.map((item) => (
          <AccordionItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
