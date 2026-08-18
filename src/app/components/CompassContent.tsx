import Link from "next/link";
import {
  Compass,
  HeartHandshake,
  Map,
  ShieldCheck,
  ArrowRight,
  Users,
} from "lucide-react";
import { PartnerClinics } from "@/app/components/PartnerClinics";

/*
 * Compass had been living as a section inside SocialServicesContent, which put
 * the clinic's flagship longitudinal program under a heading about food pantries
 * and utility bills. It is a care-navigation program, so it now sits with
 * Patient Navigation under Services.
 *
 * "Where You Go After HAVEN" moved here too: those partner clinics are the
 * literal endpoint of Compass, and the old copy on the social services page
 * already said as much ("Compass ends with a handoff").
 */

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Understand your health",
    body: "Your conditions, your medications, and what actually moves the numbers. Explained as many times as it takes, in the language you prefer.",
  },
  {
    icon: Map,
    title: "Connect to what you need",
    body: "Specialists, community resources, social supports, and the parts of the system that are hard to reach without someone who knows how they work.",
  },
  {
    icon: ShieldCheck,
    title: "Build toward permanent coverage",
    body: "Coverage you keep and a primary care provider who is open during the week, so that leaving HAVEN is a graduation and not a gap.",
  },
];

const STAGES = [
  {
    step: "While you are here",
    body: "Your care team gets to know your health over multiple visits instead of starting from scratch each time. A patient navigator keeps the threads together between Saturdays.",
  },
  {
    step: "Along the way",
    body: "We connect you with specialists, community resources, and help applying for coverage you may not know you qualify for. Every barrier that comes up becomes part of the plan.",
  },
  {
    step: "When you are ready",
    body: "We hand you off to a permanent primary care provider who is open during the week, help make that first appointment, and send your records ahead so your new provider knows your history.",
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

export function CompassContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro ── */}
      <div className={`${SECTION} pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14`}>
        <div className={`${INNER} space-y-5`}>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            A Saturday clinic staffed by students should not be anyone&apos;s
            doctor forever. Compass is how we make sure it is not.
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Compass is our long-term care navigation program. It runs for three
            to five years, and the same team stays with you the whole way. The
            goal is not simply to treat you today. It is to leave you with
            health coverage you keep and a primary care provider of your own.
          </p>
        </div>
      </div>

      <Divider />

      {/* ── The three pillars ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <div className="bg-[#00356b] px-6 md:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <div className="flex items-center gap-4 mb-5 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="font-['Merriweather',serif] font-bold text-white text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px]">
                What Compass Works On
              </h2>
            </div>
            <p className="font-['Poppins',sans-serif] text-white/80 text-[15px] md:text-[17px] leading-relaxed mb-8">
              Three things, in parallel, for as long as you are with us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white/10 border border-white/15 px-5 py-6 flex flex-col gap-3"
                >
                  <pillar.icon className="w-6 h-6 text-white/90" />
                  <p className="font-['Poppins',sans-serif] font-semibold text-white text-[15px] md:text-[16px]">
                    {pillar.title}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-white/80 text-[14px] md:text-[15px] leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── How it unfolds ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-6 md:mb-8">
            How Compass Unfolds
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {STAGES.map((stage, i) => (
              <li
                key={stage.step}
                className="bg-[#f7f9fc] border border-[#00356b]/10 px-5 py-6 md:px-6 md:py-7"
              >
                <span className="font-['Merriweather',serif] font-bold text-[#00356b]/25 text-[32px] md:text-[38px] leading-none block mb-3">
                  {i + 1}
                </span>
                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[17px] mb-2">
                  {stage.step}
                </p>
                <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-start gap-4 border-l-4 border-[#00356b] bg-[#00356b]/5 p-5 md:p-6">
            <Users className="w-6 h-6 text-[#00356b] shrink-0 mt-0.5" />
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                Compass runs through your patient navigator.
              </span>{" "}
              They are the person who keeps the plan moving between visits.{" "}
              <Link
                href="/services/patient-navigation"
                className="text-[#00356b] font-semibold underline hover:no-underline"
              >
                Read about Patient Navigation
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Enrolling ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4 md:mb-6">
            Joining Compass
          </h2>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed space-y-4 max-w-[760px]">
            <p>
              Compass is open to established HAVEN patients. There is no
              application and no cost. Ask your care team how to enroll, or tell
              us at your next visit that you would like to learn more.
            </p>
            <p>
              If you are not yet a HAVEN patient,{" "}
              <Link
                href="/eligibility"
                className="text-[#00356b] font-semibold underline hover:no-underline"
              >
                check your eligibility
              </Link>{" "}
              first, then call{" "}
              <a
                href="tel:2032000673"
                className="text-[#00356b] font-semibold hover:underline"
              >
                (203) 200-0673
              </a>{" "}
              and leave a voicemail. We return calls within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Where you go after HAVEN ── */}
      <div
        id="after-haven"
        className={`scroll-mt-32 ${SECTION} pt-10 md:pt-14 pb-16 md:pb-20 lg:pb-24`}
      >
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4 md:mb-5">
            Where You Go After HAVEN
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
            Compass ends with a handoff. Your care team helps you get coverage
            and a primary care home that is open during the week. Most of our
            patients move on to one of these two community health centers. Both
            are federally qualified health centers, which means they accept
            patients regardless of insurance status and charge on a sliding
            scale based on what you earn.
          </p>

          <PartnerClinics />

          <div className="mt-8 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                You do not have to make this call alone.
              </span>{" "}
              Tell your care team you are ready to transition and they will help
              you pick a clinic, make the first appointment, and send your
              records so your new provider knows your history.
            </p>
          </div>

          <Link
            href="/navigating-care"
            className="group inline-flex items-center gap-2 mt-8 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[17px] hover:gap-3 transition-all"
          >
            See how these options compare in our healthcare guide
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
