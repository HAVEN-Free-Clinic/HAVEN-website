"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Lock,
  LifeBuoy,
  Phone,
  ExternalLink,
  ClipboardList,
  Search,
  Handshake,
  Car,
  ArrowRight,
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
    resource: "Housing support: rental aid and shelter referrals",
  },
  {
    id: "utilities",
    text: "I've struggled to pay utility bills like gas, electric, or water.",
    resource: "Utility and energy assistance through 211",
  },
  {
    id: "transportation",
    text: "I don't have reliable transportation to appointments, work, or daily needs.",
    resource: "Transportation support, including ride vouchers to clinic visits",
  },
  {
    id: "employment",
    text: "I'm unemployed or having trouble covering basic expenses.",
    resource: "Job readiness and workforce development",
  },
  {
    id: "safety",
    /*
     * The one screening item where a wrong expectation is dangerous. The old
     * resource line promised "crisis support", which the scope of care says
     * plainly that HAVEN does not provide. It now names the referral we can
     * actually make, and the matching accordion section carries the hotlines.
     */
    text: "I feel unsafe where I live or in a relationship.",
    resource:
      "Confidential referral to safety services, plus 24/7 hotlines you can call yourself",
  },
  {
    id: "language",
    text: "I need help communicating with providers in my preferred language.",
    resource: "Interpretation and ESOL resources",
  },
  {
    id: "legal",
    text: "I'm dealing with a legal problem that is affecting my health or housing.",
    resource:
      "Referral to our Medical-Legal Partnership for free civil legal help",
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
      <h2
        id="screening"
        className="scroll-mt-32 font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4 md:mb-6"
      >
        Try the Screening Yourself
      </h2>
      <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-5">
        These are the same kinds of questions our team asks at a visit. Check
        anything that applies to you to see what support exists, then bring what
        you checked to your next appointment so we can start on it together.
      </p>

      <div className="flex items-start gap-2.5 mb-8 text-[#00356b]">
        <Lock className="w-4 h-4 shrink-0 mt-0.5" />
        <p className="font-['Poppins',sans-serif] text-[13px] sm:text-[14px] leading-relaxed">
          This screening is completely private. Your answers stay on your
          device. Nothing is saved, sent, or shared.
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
            <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] sm:text-[20px] md:text-[22px]">
              You don&apos;t have to navigate this alone
            </h3>
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
              className="inline-flex items-center justify-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-6 py-3 hover:bg-[#00356b]/90 transition-colors"
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
    /*
     * "Housing" alone reads as a promise of placement, and patients arrive
     * expecting a unit. The rename plus the can/cannot split below is the point:
     * this team navigates and refers, it does not house people. Scope claims
     * here mirror the "outside our scope" list in src/lib/scope.ts.
     */
    title: "Housing Support",
    content: (
      <div className="space-y-3">
        <p>
          Stable housing is essential to good health. Our social services team
          can help connect you with housing resources and support in the New
          Haven area.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-1">
          <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-4 md:p-5">
            <p className="font-semibold text-[#00356b] mb-2">What we can do</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] md:text-[16px]">
              <li>Refer you to shelters, housing programs, and legal aid</li>
              <li>Help you apply for rental and utility assistance</li>
              <li>Walk you through 211 and the coordinated access network</li>
              <li>Follow up with you about it at your next visit</li>
            </ul>
          </div>
          <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b]/30 p-4 md:p-5">
            <p className="font-semibold text-[#00356b] mb-2">
              What we cannot do
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] md:text-[16px]">
              <li>Place you in housing or assign you a shelter bed</li>
              <li>Pay your rent, deposit, or utility bills</li>
              <li>Provide licensed social work or crisis intervention</li>
              <li>Act as your legal representative in an eviction</li>
            </ul>
          </div>
        </div>
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
            conditions, including our own{" "}
            <Link
              href="/about/operations#mlp"
              className="text-[#00356b] underline hover:no-underline"
            >
              Medical-Legal Partnership
            </Link>
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
    /*
     * The old copy said flatly that we cannot provide rides or cover fares. We
     * can: the clinic has Uber Health vouchers. Availability is finite, so the
     * copy commits to the mechanism ("tell us in advance and we will arrange
     * it") without promising an unlimited benefit.
     */
    title: "Transportation",
    content: (
      <div className="space-y-3">
        <p>
          Getting to an appointment should not be the reason you miss it. If
          transportation is a barrier for you, tell any member of your care team
          and we will work through the options with you.
        </p>

        <div className="bg-[#00356b] px-5 py-5 md:px-6 md:py-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
            <Car className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white text-[16px] md:text-[18px] mb-1.5">
              We can arrange a ride to clinic
            </p>
            <p className="text-white/90 text-[15px] md:text-[17px] leading-relaxed">
              HAVEN can provide{" "}
              <span className="font-semibold">Uber Health ride vouchers</span>{" "}
              at no cost to you for getting to and from a HAVEN appointment. You
              do not need a smartphone or an Uber account. Ask your care team,
              your patient navigator, or the front desk{" "}
              <span className="font-semibold">
                at least a few days before your visit
              </span>{" "}
              so we can set it up. Vouchers are limited, so tell us early if you
              need one.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-1">
          <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-4 md:p-5">
            <p className="font-semibold text-[#00356b] mb-2">What we can do</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] md:text-[16px]">
              <li>
                Arrange an Uber Health voucher for a HAVEN visit when you ask in
                advance
              </li>
              <li>
                Connect you with 211, which keeps current transportation
                resources for Connecticut
              </li>
              <li>
                Take transportation into account when we schedule your visits
                and referrals
              </li>
              <li>
                Flag it for your patient navigator so it is part of your care
                plan
              </li>
            </ul>
          </div>
          <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b]/30 p-4 md:p-5">
            <p className="font-semibold text-[#00356b] mb-2">
              What we cannot do
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] md:text-[16px]">
              <li>
                Guarantee a voucher for every visit, or arrange one the same day
              </li>
              <li>
                Cover rides to appointments outside HAVEN, such as a specialist
                or a pharmacy
              </li>
              <li>Reimburse bus fare or gas you have already paid for</li>
            </ul>
          </div>
        </div>
        <p>
          Remember that{" "}
          <span className="font-semibold">parking at the clinic is free</span>{" "}
          in the Howard Avenue Garage if you are able to drive or get a ride.
        </p>
        <p>
          For transportation resources beyond a clinic visit, dial{" "}
          <a href="tel:211" className="text-[#00356b] hover:underline">
            2-1-1
          </a>{" "}
          or visit{" "}
          <a
            href="https://www.211ct.org/"
            className="text-[#00356b] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            211ct.org
          </a>
          .
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
          English language learning resources.
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
  {
    /*
     * Added because "I feel unsafe" was one of the screening questions with no
     * resource section behind it — checking the box led nowhere, on the item
     * where leading nowhere matters most.
     */
    title: "Safety",
    content: (
      <div className="space-y-3">
        <div className="bg-red-50 border border-red-200 p-4 md:p-5">
          <p className="font-semibold text-red-900">
            If you are in immediate danger, call{" "}
            <a href="tel:911" className="underline">
              911
            </a>
            . For a mental health crisis, call or text{" "}
            <a href="tel:988" className="underline">
              988
            </a>
            , the Suicide &amp; Crisis Lifeline, free and 24/7.
          </p>
        </div>
        <p>
          Feeling unsafe at home or in a relationship affects your health
          directly, and it is something you can raise with any member of your
          care team, privately. You will not be pushed into any decision you are
          not ready to make.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-1">
          <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-4 md:p-5">
            <p className="font-semibold text-[#00356b] mb-2">What we can do</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] md:text-[16px]">
              <li>Talk with you privately, away from anyone who came with you</li>
              <li>Refer you confidentially to domestic violence and safety services</li>
              <li>
                Connect you with our Medical-Legal Partnership for protective
                orders and housing safety
              </li>
              <li>Document injuries in your medical record if you want that</li>
            </ul>
          </div>
          <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b]/30 p-4 md:p-5">
            <p className="font-semibold text-[#00356b] mb-2">
              What we cannot do
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] md:text-[16px]">
              <li>Provide crisis intervention or emergency shelter placement</li>
              <li>Offer licensed counseling or therapy</li>
              <li>Respond outside our Saturday clinic hours</li>
            </ul>
          </div>
        </div>
        <p className="font-semibold text-[#00356b]">
          Free, confidential, 24/7 — you can call these yourself:
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>
            <span className="font-semibold">CT Safe Connect</span>, Connecticut&apos;s
            domestic violence hotline:{" "}
            <a href="tel:8887742900" className="text-[#00356b] hover:underline">
              (888) 774-2900
            </a>
          </li>
          <li>
            <span className="font-semibold">
              National Domestic Violence Hotline
            </span>
            :{" "}
            <a href="tel:8007997233" className="text-[#00356b] hover:underline">
              (800) 799-7233
            </a>
          </li>
          <li>
            <span className="font-semibold">988 Suicide &amp; Crisis Lifeline</span>:
            call or text{" "}
            <a href="tel:988" className="text-[#00356b] hover:underline">
              988
            </a>
          </li>
          <li>
            <span className="font-semibold">Connecticut 211</span> for shelter and
            support services:{" "}
            <a href="tel:211" className="text-[#00356b] hover:underline">
              2-1-1
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    /*
     * Legal need is a social determinant like any other, and the clinic has an
     * MLP to meet it. The department itself is documented on the operations
     * page; this entry is the patient-facing door into it.
     */
    title: "Legal Support",
    content: (
      <div className="space-y-3">
        <p>
          Some health problems have a legal cause: a landlord who will not fix
          mold, a benefits application wrongly denied, an immigration matter
          hanging over everything else. Through our{" "}
          <Link
            href="/about/operations#mlp"
            className="text-[#00356b] underline hover:no-underline"
          >
            Medical-Legal Partnership
          </Link>
          , HAVEN patients can be referred to attorneys for free civil legal
          help.
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2">
          <li>Housing conditions, eviction, and tenants&apos; rights</li>
          <li>Public benefits that were denied or terminated</li>
          <li>Health insurance denials and appeals</li>
          <li>Protective orders and family safety matters</li>
          <li>Certain immigration and employment matters</li>
        </ul>
        <p>
          Mention it to your care team or your patient navigator and they will
          make the referral. The Medical-Legal Partnership cannot represent you
          in a criminal case, and it takes referrals from HAVEN rather than
          walk-ins.
        </p>
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
          open ? "max-h-[5000px] pb-6 visible" : "max-h-0 invisible"
        }`}
      >
        <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
          {item.content}
        </div>
      </div>
    </div>
  );
}

/* ─── How the department works ─── */

const HOW_IT_WORKS = [
  {
    icon: ClipboardList,
    title: "We screen",
    body: "At your visit, we ask about food, housing, utilities, transportation, safety, language, and legal needs. Not as small talk, as part of the medical record.",
  },
  {
    icon: Search,
    title: "We find the right resource",
    body: "Whatever you flag, we match to a specific program, agency, or benefit you are eligible for, and we help you fill out the application.",
  },
  {
    icon: Handshake,
    title: "We follow up",
    body: "A referral is not a result. We check back at your next visit to see whether it worked, and start again if it did not.",
  },
];

const SECTION = "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16";
const INNER = "max-w-4xl mx-auto";

function Divider() {
  return (
    <div className={SECTION}>
      <div className={INNER}>
        <div className="w-full h-px bg-[#00356b]/10" />
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export function SocialServicesContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro: what this department actually is ── */}
      <div className={`${SECTION} pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14`}>
        <div className={`${INNER} space-y-5`}>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Most of what determines your health happens outside a clinic. Where
            you live, whether you can afford food, whether you have a ride to an
            appointment, whether anyone speaks your language, whether you feel
            safe at home. Researchers call these the{" "}
            <span className="font-semibold text-[#00356b]">
              social determinants of health
            </span>
            , and they account for far more of how long and how well people live
            than medical care does.
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            HAVEN&apos;s Social Services department exists to treat those
            factors as seriously as we treat blood pressure. We{" "}
            <span className="font-semibold">screen every patient</span> for
            unmet social needs, connect you with programs and benefits you
            qualify for, help you complete the applications, and follow up until
            something has actually changed.
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            What we are not is a social service agency. We do not house people,
            pay bills, or provide licensed social work or crisis intervention.
            What we do is know the system, sit with you while you apply, and
            keep asking until you have what you need.
          </p>
        </div>
      </div>

      <Divider />

      {/* ── How the department works ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-6 md:mb-8">
            Screening, Then Follow-Through
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={step.title}
                className="bg-[#f7f9fc] border border-[#00356b]/10 px-5 py-6 md:px-6 md:py-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-[#00356b]" />
                  </div>
                  <span className="font-['Merriweather',serif] font-bold text-[#00356b]/25 text-[28px] leading-none">
                    {i + 1}
                  </span>
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[18px] mb-2">
                  {step.title}
                </p>
                <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                Working with your navigator.
              </span>{" "}
              Social Services and{" "}
              <Link
                href="/services/patient-navigation"
                className="text-[#00356b] font-semibold underline hover:no-underline"
              >
                Patient Navigation
              </Link>{" "}
              work as one. Whatever you flag on a screening becomes part of the
              care plan your navigator tracks between visits.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── SDOH screening ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <SDOHScreening />
      </div>

      <Divider />

      {/* ── Social Service Resources ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-6 md:mb-8">
            Social Service Resources
          </h2>
          {resources.map((item) => (
            <AccordionItem key={item.title} item={item} />
          ))}
        </div>
      </div>

      <Divider />

      {/* ── Connecticut 211 Callout ── */}
      <div className={`${SECTION} py-12 md:py-16`}>
        <div className={INNER}>
          <div className="bg-[#00356b]/10 border border-[#00356b]/20 px-8 sm:px-12 md:px-16 lg:px-20 py-10 md:py-12 lg:py-14 flex flex-col items-center text-center gap-5 md:gap-6">
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Connecticut 211
            </h2>
            <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[640px]">
              211 is a free, confidential service available 24/7. It connects
              you to essential health and human services across Connecticut:
              food, housing, utility assistance, transportation, and more. You
              do not need to be a HAVEN patient to use it.
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

      <Divider />

      {/* ── Where this leads ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-16 md:pb-20 lg:pb-24`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4">
            Where This Leads
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Social needs are rarely one-off. The point of screening for them is
            to feed a longer plan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <Link
              href="/services/patient-navigation"
              className="group bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-7 hover:border-[#00356b]/40 hover:shadow-md transition-all"
            >
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                Patient Navigation
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                The person who tracks everything you flagged, between visits,
                and makes sure it moves.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/services/compass"
              className="group bg-[#00356b] p-6 md:p-7 hover:bg-[#00356b]/95 hover:shadow-lg transition-all"
            >
              <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[17px] md:text-[19px] mb-2">
                The Compass Program
              </h3>
              <p className="font-['Poppins',sans-serif] text-white/85 text-[14px] md:text-[16px] leading-relaxed">
                Our three-to-five-year program toward permanent coverage and a
                primary care provider of your own.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 font-['Poppins',sans-serif] font-semibold text-white text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
