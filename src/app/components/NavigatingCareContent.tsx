"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Ambulance,
  Stethoscope,
  HeartPulse,
  Compass,
  HeartHandshake,
  Building2,
  Clock3,
  Phone,
  ArrowRight,
  Wallet,
  FileText,
  ExternalLink,
} from "lucide-react";
import { ACCESS_HEALTH_CT_URL } from "@/lib/links";
import { FREE_CARE_TERM } from "@/lib/free-care";

/*
 * The one healthcare-navigation guide.
 *
 * This used to be two half-guides that neither agreed nor cross-referenced: a
 * five-rung ladder at the bottom of /services with one sentence per rung, and a
 * three-tier "Where to Go for Care" block on /eligibility with real detail on
 * cost and access but no mention of urgent care, specialists, or community
 * resources. A patient who read one got a different picture than one who read
 * the other.
 *
 * Both are now this page. /services and /eligibility link here instead of
 * restating it.
 */

interface Level {
  id: string;
  tier: string;
  title: string;
  summary: string;
  bestFor: string;
  cost: React.ReactNode;
  access: React.ReactNode;
  icon: typeof Ambulance;
  accent: "red" | "blue";
  highlight?: boolean;
}

const LEVELS: Level[] = [
  {
    id: "emergency",
    tier: "Emergency",
    title: "Emergency department and 911",
    summary:
      "For life-threatening situations only. Emergency rooms must treat anyone, but the bills are the largest in the system.",
    bestFor:
      "Chest pain, trouble breathing, severe bleeding, signs of a stroke, serious injuries, or anything that feels life-threatening. For a mental health crisis, call or text 988.",
    cost: (
      <>
        Emergency rooms treat anyone with a medical emergency, regardless of
        insurance or ability to pay. If you are billed afterward, Yale New Haven
        Health&apos;s{" "}
        <span className="font-semibold">Free Care program is charity care</span>:
        anyone can apply regardless of insurance status, approval is based on
        your household income, and immigration status does not disqualify you.
        Ask about it before you leave, or apply later for a bill you already
        have.
      </>
    ),
    access:
      "Call 911 or go to the nearest emergency department. Open 24 hours a day, 7 days a week. Never wait on cost in an emergency.",
    icon: Ambulance,
    accent: "red",
  },
  {
    id: "urgent",
    tier: "Urgent care",
    title: "Urgent care and walk-in clinics",
    summary:
      "For problems that cannot wait for an appointment but are not emergencies. Far cheaper than an emergency room.",
    bestFor:
      "Sprains, minor cuts, fevers, urinary infections, rashes, and flu-like illness that gets worse over a weekend or an evening.",
    cost: (
      <>
        Usually a flat visit fee, often between $100 and $200 without insurance.
        Much less than an emergency room, but{" "}
        <span className="font-semibold">not free</span>, and YNHH Free Care only
        applies at Yale New Haven Health locations. Ask the price before you are
        seen.
      </>
    ),
    access:
      "Walk in, or check the location's website for a wait time. Cornell Scott-Hill Health Center runs a convenient-care walk-in service for its patients.",
    icon: Clock3,
    accent: "blue",
  },
  {
    id: "specialist",
    tier: "Specialist",
    title: "Specialist doctors",
    summary:
      "Doctors focused on one area of medicine. Almost always require a referral, and usually insurance.",
    bestFor:
      "Cardiology, orthopedics, gastroenterology, endocrinology, and anything needing equipment or expertise beyond primary care. HAVEN runs its own dermatology, nephrology, and neurology clinics on select Saturdays.",
    cost: (
      <>
        Expensive without coverage, which is exactly the problem HAVEN&apos;s
        referrals team works on. Through our partnership with the YNHH Free Care
        office we can often secure specialist appointments at no cost or greatly
        reduced cost.{" "}
        <span className="font-semibold">
          You need a Free Care application on file first.
        </span>
      </>
    ),
    access: (
      <>
        You need a referral from a primary care provider. If HAVEN is your
        provider, tell your care team and see our{" "}
        <Link
          href="/services/referrals"
          className="text-[#00356b] font-semibold underline hover:no-underline"
        >
          referrals page
        </Link>{" "}
        for how the process works.
      </>
    ),
    icon: Stethoscope,
    accent: "blue",
  },
  {
    id: "primary",
    tier: "Primary care",
    title: "Primary care providers",
    summary:
      "Your main doctor for everyday health. Manages ongoing conditions, prescriptions, and referrals.",
    bestFor:
      "Checkups, chronic conditions like diabetes and high blood pressure, prescription management, preventive screening, and being the person who knows your history.",
    cost: (
      <>
        Depends entirely on where you go. With Medicaid/HUSKY, most primary care
        is free. At a community health center, fees run on a sliding scale. At
        HAVEN, it is free.
      </>
    ),
    access:
      "You establish care with one practice and stay with it. Having a primary care provider is the single thing that makes the rest of the system navigable.",
    icon: HeartPulse,
    accent: "blue",
  },
  {
    id: "chc",
    tier: "Community health centers",
    title: "Federally qualified health centers",
    summary:
      "Full-service primary care for everyone, open during the week, priced on what you earn.",
    bestFor:
      "Ongoing primary care, especially if you have insurance, need care more often than once a week, or are not eligible for HAVEN. They also offer dental and behavioral health.",
    cost: (
      <>
        Fair Haven Community Health Care and Cornell Scott-Hill Health Center
        welcome patients regardless of insurance or ability to pay. Both charge
        on a{" "}
        <span className="font-semibold">sliding scale based on your income</span>
        , so what you pay depends on what you earn.
      </>
    ),
    access: (
      <>
        Call the health center directly to become a patient.
        <span className="block mt-2">
          Fair Haven:{" "}
          <a
            href="tel:2037777411"
            className="font-semibold text-[#00356b] underline hover:opacity-80"
          >
            (203) 777-7411
          </a>
        </span>
        <span className="block mt-1">
          Cornell Scott:{" "}
          <a
            href="tel:2035033000"
            className="font-semibold text-[#00356b] underline hover:opacity-80"
          >
            (203) 503-3000
          </a>
        </span>
      </>
    ),
    icon: Building2,
    accent: "blue",
  },
  {
    id: "haven",
    tier: "HAVEN",
    title: "HAVEN Free Clinic (you are here)",
    summary:
      "Free primary care every Saturday. No insurance needed. A bridge to the rest of the system, not a permanent home.",
    bestFor:
      "Uninsured adults aged 18 to 65 in Greater New Haven who do not have a primary care provider and meet our eligibility criteria.",
    cost: (
      <>
        <span className="font-semibold">
          Free care for uninsured adults, always.
        </span>{" "}
        Your visit costs nothing. The only thing we ask you to cover is
        medications priced under $25, and we waive that if it is a hardship.
      </>
    ),
    access: (
      <>
        <Link
          href="/eligibility"
          className="text-[#00356b] font-semibold underline hover:no-underline"
        >
          Check your eligibility
        </Link>
        , then call{" "}
        <a
          href="tel:2032000673"
          className="font-semibold text-[#00356b] hover:underline"
        >
          (203) 200-0673
        </a>{" "}
        and leave a voicemail. We call back within 24 hours. Our clinic runs
        Saturday mornings, and{" "}
        <span className="font-semibold">
          the Compass Program works with you toward permanent coverage and a
          weekday provider you keep after us.
        </span>
      </>
    ),
    icon: Compass,
    accent: "blue",
    highlight: true,
  },
  {
    id: "community",
    tier: "Community",
    title: "Community resources",
    summary:
      "Food, housing, utilities, transportation, legal aid. Not healthcare, but they shape your health more than most appointments do.",
    bestFor:
      "Anything outside the exam room that is making it harder to stay healthy: running out of food, losing housing, no ride to an appointment, an eviction notice.",
    cost: (
      <>
        Free. Connecticut 211 is a free, confidential referral service available
        24/7 for every category above.
      </>
    ),
    access: (
      <>
        Dial{" "}
        <a
          href="tel:211"
          className="font-semibold text-[#00356b] underline hover:opacity-80"
        >
          2-1-1
        </a>{" "}
        or visit{" "}
        <a
          href="https://www.211ct.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#00356b] underline hover:opacity-80"
        >
          211ct.org
        </a>
        . If you are a HAVEN patient, our{" "}
        <Link
          href="/services/social-services"
          className="text-[#00356b] font-semibold underline hover:no-underline"
        >
          social services team
        </Link>{" "}
        will make the connection with you.
      </>
    ),
    icon: HeartHandshake,
    accent: "blue",
  },
];

/* ─── Ways to pay ─── */

const COVERAGE = [
  {
    icon: FileText,
    name: "Medicaid / HUSKY Health",
    what: "Connecticut's Medicaid program. Free or very low-cost comprehensive coverage for people who qualify based on income and household size.",
    who: "Real insurance you can use anywhere that accepts it, including specialists and pharmacies.",
    how: (
      <>
        Apply through{" "}
        <a
          href={ACCESS_HEALTH_CT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00356b] font-semibold underline hover:no-underline"
        >
          Access Health CT
        </a>
        , the state marketplace. HAVEN&apos;s insurance counseling team can help
        you determine eligibility and complete the application at no cost.
      </>
    ),
  },
  {
    icon: Wallet,
    name: "YNHH Free Care",
    what: "Yale New Haven Health's financial assistance program. Charity care, not insurance: there is no card and it applies only at YNHH facilities.",
    who: "Covers hospital and YNHH-affiliated bills, including ones you already have. Immigration status does not disqualify you.",
    how: (
      <>
        Apply with proof of income and renew about every {FREE_CARE_TERM}. See our{" "}
        <Link
          href="/services/debt-insurance"
          className="text-[#00356b] font-semibold underline hover:no-underline"
        >
          step-by-step Free Care guide
        </Link>
        , which walks the form section by section.
      </>
    ),
  },
  {
    icon: Building2,
    name: "Sliding scale fees",
    what: "Community health centers set what you pay based on your income and household size, often down to a small flat fee.",
    who: "Applies to primary care, dental, and behavioral health at federally qualified health centers.",
    how: "Ask about the sliding scale when you call to become a patient, and bring proof of income to your first visit.",
  },
];

/* ─── Vocabulary ─── */

const GLOSSARY = [
  {
    term: "Premium",
    def: "The amount you pay every month to have insurance, whether or not you use it.",
  },
  {
    term: "Deductible",
    def: "What you pay out of pocket before insurance starts paying. A high deductible plan can still leave you with big bills.",
  },
  {
    term: "Copay",
    def: "A fixed amount you pay at a visit, like $25 to see a doctor, on top of any premium.",
  },
  {
    term: "Referral",
    def: "A primary care provider's formal request that a specialist see you. Most specialists will not schedule you without one.",
  },
  {
    term: "Prior authorization",
    def: "Insurance approving a test, procedure, or medication before it will pay. It causes most of the waiting you will experience.",
  },
  {
    term: "Charity care",
    def: "A hospital covering your bill because you cannot afford it. YNHH Free Care is charity care. It is not insurance.",
  },
  {
    term: "Sliding scale",
    def: "A fee set by your income rather than a fixed price. Common at community health centers.",
  },
  {
    term: "FQHC",
    def: "Federally qualified health center. A clinic funded to serve everyone regardless of insurance, on a sliding scale.",
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

export function NavigatingCareContent() {
  // HAVEN ("you are here") expanded by default.
  const [open, setOpen] = useState<Record<string, boolean>>({ haven: true });

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="bg-white w-full">
      {/* ── Intro ── */}
      <div className={`${SECTION} pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14`}>
        <div className={`${INNER} space-y-5`}>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            The American healthcare system is confusing even for the people who
            work in it. Nobody hands you a map, and the cost of guessing wrong
            is measured in thousands of dollars and months of waiting.
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            This is the map. Every level of care, what each one is good for,
            what it costs, how to get in the door, and where HAVEN sits among
            them.
          </p>
        </div>
      </div>

      <Divider />

      {/* ── The levels ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-2">
            Where to Go for Care
          </h2>
          <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b]/70 text-[16px] md:text-[18px] mb-4">
            Seven levels, from the emergency room to your neighborhood
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Knowing where to go saves time, money, and stress. Tap any level to
            see what it is best for, what it costs, and how to get care there.
          </p>

          <div className="space-y-3 md:space-y-4">
            {LEVELS.map((level) => {
              const isOpen = !!open[level.id];
              const isEmergency = level.accent === "red";
              const highlight = level.highlight;

              return (
                <div
                  key={level.id}
                  className={`border transition-colors ${
                    highlight
                      ? "border-[#00356b] bg-[#00356b]"
                      : isEmergency
                      ? "border-red-200 bg-red-50/50"
                      : "border-[#00356b]/15 bg-[#f7f9fc]"
                  }`}
                >
                  <button
                    onClick={() => toggle(level.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 px-5 md:px-6 py-4 md:py-5 cursor-pointer text-left"
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                        highlight
                          ? "bg-white/15"
                          : isEmergency
                          ? "bg-red-100"
                          : "bg-[#00356b]/10"
                      }`}
                    >
                      <level.icon
                        className={`w-5 h-5 ${
                          highlight
                            ? "text-white"
                            : isEmergency
                            ? "text-red-700"
                            : "text-[#00356b]"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-['Poppins',sans-serif] font-semibold text-[11px] md:text-[12px] uppercase tracking-wider mb-0.5 ${
                          highlight
                            ? "text-white/70"
                            : isEmergency
                            ? "text-red-700/80"
                            : "text-[#00356b]/60"
                        }`}
                      >
                        {level.tier}
                      </p>
                      <p
                        className={`font-['Poppins',sans-serif] font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-tight ${
                          highlight ? "text-white" : "text-[#00356b]"
                        }`}
                      >
                        {level.title}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      } ${highlight ? "text-white" : "text-[#00356b]"}`}
                      strokeWidth={2.5}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[1200px] visible" : "max-h-0 invisible"
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-6 md:pl-[76px]">
                      <p
                        className={`font-['Poppins',sans-serif] text-[15px] md:text-[17px] leading-relaxed mb-5 ${
                          highlight ? "text-white/90" : "text-black/80"
                        }`}
                      >
                        {level.summary}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                        {[
                          { label: "Best for", value: level.bestFor },
                          { label: "Cost", value: level.cost },
                          { label: "How to get care", value: level.access },
                        ].map((row) => (
                          <div key={row.label}>
                            <p
                              className={`font-['Poppins',sans-serif] font-semibold text-[12px] uppercase tracking-wide mb-1.5 ${
                                highlight ? "text-white/70" : "text-[#00356b]"
                              }`}
                            >
                              {row.label}
                            </p>
                            <p
                              className={`font-['Poppins',sans-serif] text-[14px] md:text-[15px] leading-relaxed ${
                                highlight
                                  ? "text-white/85 [&_a]:text-white [&_a]:underline"
                                  : "text-black/70"
                              }`}
                            >
                              {row.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Ways to pay ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4">
            How Care Gets Paid For
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Three different things get confused with each other constantly.
            Insurance, charity care, and sliding-scale pricing are not the same,
            and you can use more than one.
          </p>

          <div className="space-y-5 md:space-y-6">
            {COVERAGE.map((c) => (
              <div
                key={c.name}
                className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-6 md:p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-[#00356b]" />
                  </div>
                  <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[21px]">
                    {c.name}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                  {[
                    { label: "What it is", value: c.what },
                    { label: "What it covers", value: c.who },
                    { label: "How to get it", value: c.how },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[12px] uppercase tracking-wide mb-1.5">
                        {row.label}
                      </p>
                      <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[15px] leading-relaxed">
                        {row.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                You do not have to work this out on your own.
              </span>{" "}
              HAVEN&apos;s{" "}
              <Link
                href="/services/debt-insurance"
                className="text-[#00356b] font-semibold underline hover:no-underline"
              >
                insurance counseling team
              </Link>{" "}
              sits with patients every Saturday to figure out which of these
              applies and to fill out the paperwork together.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Vocabulary ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4">
            Words You Will Run Into
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Most of the confusion in American healthcare is vocabulary doing the
            work of a barrier. Here is the vocabulary.
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {GLOSSARY.map((g) => (
              <div
                key={g.term}
                className="bg-[#f7f9fc] border border-[#00356b]/10 p-5 md:p-6"
              >
                <dt className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[17px] mb-1.5">
                  {g.term}
                </dt>
                <dd className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
                  {g.def}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Divider />

      {/* ── Next steps ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-16 md:pb-20 lg:pb-24`}>
        <div className={INNER}>
          <div className="bg-[#00356b] px-6 md:px-10 lg:px-14 py-10 md:py-12">
            <h2 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[30px] mb-4">
              Where to Go From Here
            </h2>
            <p className="font-['Poppins',sans-serif] text-white/85 text-[15px] md:text-[17px] leading-relaxed mb-8 max-w-[680px]">
              If you are uninsured, between 18 and 65, and living in Greater New
              Haven without a primary care provider, start with us.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/eligibility"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#d6e8f7] transition-colors"
              >
                See if you qualify
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/services/scope-of-care"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors"
              >
                What HAVEN does and does not do
              </Link>
              <a
                href="tel:2032000673"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (203) 200-0673
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://www.211ct.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[15px] md:text-[16px] underline hover:no-underline"
            >
              Connecticut 211
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
            <a
              href={ACCESS_HEALTH_CT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[15px] md:text-[16px] underline hover:no-underline"
            >
              Access Health CT
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
