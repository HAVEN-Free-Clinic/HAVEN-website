import Link from "next/link";
import {
  Users,
  ClipboardList,
  PhoneCall,
  CalendarCheck,
  Compass,
  ArrowRight,
  Check,
  X,
  HeartHandshake,
} from "lucide-react";

/*
 * Patient Navigation used to have no page of its own: the "Patient Navigator"
 * card on /services pointed at /services/social-services, which never mentions
 * navigation except in passing. Compass lived on that same social services page.
 *
 * The two are now separate pages because they are separate things. Navigation is
 * the ongoing service every patient gets. Compass is the multi-year program a
 * navigator walks you through. The "How this relates to Compass" block below is
 * the load-bearing part — without it the split just reads as two pages saying
 * similar things.
 */

const WHAT_A_NAVIGATOR_DOES = [
  {
    icon: ClipboardList,
    title: "Keeps your whole picture in one place",
    body: "Your navigator knows your conditions, your medications, your referrals, and what you are waiting on. You do not have to re-explain your history to a new team every visit.",
  },
  {
    icon: CalendarCheck,
    title: "Chases the things that fall through",
    body: "The lab that never came back, the specialist appointment that never got scheduled, the pharmacy that says it has no record of you. Your navigator follows up so you are not the one making the calls.",
  },
  {
    icon: PhoneCall,
    title: "Is reachable between Saturdays",
    body: "Clinic runs once a week, but care does not pause in between. Your navigator is the person to reach when something changes and it cannot wait until the weekend.",
  },
  {
    icon: HeartHandshake,
    title: "Connects the non-medical pieces",
    body: "Food, housing, transportation, interpretation, legal questions. If something outside the exam room is affecting your health, your navigator loops in the right team.",
  },
];

const CAN_DO = [
  "Explain what a diagnosis, a lab result, or a referral actually means",
  "Schedule, reschedule, and confirm your appointments",
  "Track your referrals and tell you where each one stands",
  "Loop in social services, insurance counseling, or the pharmacy team",
  "Help you prepare for a specialist visit and tell you what to bring",
  "Follow up after a hospital or emergency department visit",
];

const CANNOT_DO = [
  "Give medical advice or change your treatment plan on their own",
  "Handle emergencies. Call 911, or 988 for a mental health crisis",
  "Guarantee a specialist appointment or its timing",
  "Act as a licensed social worker, therapist, or legal representative",
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

export function PatientNavigationContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro ── */}
      <div className={`${SECTION} pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14`}>
        <div className={`${INNER} space-y-5`}>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Getting care is rarely the hard part. Keeping track of it is. A
            referral here, a lab there, a bill from an office you do not
            recognize, a pharmacy that says your prescription is not ready.
            Patient Navigation exists so that no one has to hold all of that
            alone.
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Through our{" "}
            <span className="font-semibold text-[#00356b]">
              Longitudinal Care Coordination (LCC)
            </span>{" "}
            program, patients are paired with a navigator who stays with them
            across visits. Your navigator is a trained student volunteer who
            works alongside your medical team, and who you can reach during the
            week.
          </p>
        </div>
      </div>

      <Divider />

      {/* ── What a navigator does ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-6 md:mb-8">
            What Your Navigator Does
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {WHAT_A_NAVIGATOR_DOES.map((item) => (
              <div
                key={item.title}
                className="bg-[#f7f9fc] border border-[#00356b]/10 p-6 md:p-7"
              >
                <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#00356b]" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                  {item.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[16px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Getting a navigator ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4 md:mb-6">
            How You Get a Navigator
          </h2>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed space-y-4 max-w-[760px]">
            <p>
              You do not apply. Once you are an established HAVEN patient, your
              care team assigns navigation based on what your care involves.
              Patients managing several conditions at once, waiting on specialty
              referrals, or facing barriers outside the clinic are prioritized.
            </p>
            <p>
              If you would like a navigator and have not been assigned one, say
              so at your next visit or call{" "}
              <a
                href="tel:2032000673"
                className="text-[#00356b] font-semibold hover:underline"
              >
                (203) 200-0673
              </a>
              . Asking is enough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-8">
            <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-6 md:p-7">
              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[18px] mb-3">
                What your navigator can do
              </p>
              <ul className="space-y-2.5">
                {CAN_DO.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#00356b] shrink-0 mt-1"
                      strokeWidth={2.5}
                    />
                    <span className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[16px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b]/30 p-6 md:p-7">
              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[18px] mb-3">
                What your navigator cannot do
              </p>
              <ul className="space-y-2.5">
                {CANNOT_DO.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <X
                      className="w-4 h-4 text-red-600 shrink-0 mt-1"
                      strokeWidth={2.5}
                    />
                    <span className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[16px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Relationship to Compass ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-16 md:pb-20 lg:pb-24`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4 md:mb-6">
            Navigation and Compass
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            These two go together, and it helps to know which is which.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="border-2 border-[#00356b] p-6 md:p-7">
              <div className="w-11 h-11 rounded-full bg-[#00356b] flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[20px] mb-2">
                Patient Navigation
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[16px] leading-relaxed">
                The ongoing service. A person who keeps your care organized,
                week to week, for as long as you are our patient. This is what
                you are reading about now.
              </p>
            </div>

            <Link
              href="/services/compass"
              className="group bg-[#00356b] p-6 md:p-7 hover:bg-[#00356b]/95 hover:shadow-lg transition-all block"
            >
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[18px] md:text-[20px] mb-2">
                The Compass Program
              </h3>
              <p className="font-['Poppins',sans-serif] text-white/85 text-[14px] md:text-[16px] leading-relaxed">
                The destination. A three-to-five-year plan your navigator walks
                you through, ending with permanent coverage and a primary care
                provider who is yours after HAVEN.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 font-['Poppins',sans-serif] font-semibold text-white text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                How Compass works
                <ArrowRight className="w-4 h-4 shrink-0" />
              </span>
            </Link>
          </div>

          <div className="mt-8 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                One more thing your navigator handles:
              </span>{" "}
              the non-medical barriers. Food, housing, utilities,
              transportation, and interpretation all run through{" "}
              <Link
                href="/services/social-services"
                className="text-[#00356b] font-semibold underline hover:no-underline"
              >
                Social Services
              </Link>
              , and your navigator is the one who makes the introduction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
