import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Compass,
  Phone,
  ShieldAlert,
  Building2,
} from "lucide-react";
import {
  SCOPE_PROVIDES,
  SCOPE_PROVIDES_FLAT,
  SCOPE_OUTSIDE,
} from "@/lib/scope";
import { COST_SHARING_SUMMARY } from "@/lib/site";
import { PARTNER_CLINICS } from "@/lib/partner-clinics";

/*
 * Two exports, one data source (src/lib/scope.ts):
 *
 *   <ScopeSummary />       compact card pair + link, for pages that need to
 *                          gesture at scope without restating all of it
 *   <ScopeOfCareContent /> the full page at /services/scope-of-care
 *
 * Before this existed, the full two-column block was pasted into both
 * ServicesContent and PatientCareContent and the lists had already started to
 * read as a wall nobody finishes.
 */

const SECTION = "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16";
const INNER = "max-w-4xl mx-auto";

/* ─── Compact summary, for other pages ─── */

export function ScopeSummary() {
  return (
    <div className={INNER}>
      <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4">
        Scope of Care
      </h2>
      <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
        HAVEN is a student-run clinic that runs one session a week under
        physician supervision. That shapes what we can safely take on. Here is
        the short version, and the full list is one page away.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[#00356b]" strokeWidth={2.5} />
            </div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px]">
              What we provide
            </h3>
          </div>
          <ul className="space-y-2.5">
            {SCOPE_PROVIDES_FLAT.slice(0, 6).map((item) => (
              <li key={item.label} className="flex items-start gap-2.5">
                <Check
                  className="w-4 h-4 text-[#00356b] shrink-0 mt-1"
                  strokeWidth={2.5}
                />
                <span className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[15px] leading-relaxed">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <X className="w-5 h-5 text-red-700" strokeWidth={2.5} />
            </div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px]">
              What is outside our scope
            </h3>
          </div>
          <ul className="space-y-2.5">
            {SCOPE_OUTSIDE.slice(0, 6).map((item) => (
              <li key={item.label} className="flex items-start gap-2.5">
                <X
                  className="w-4 h-4 text-red-600 shrink-0 mt-1"
                  strokeWidth={2.5}
                />
                <span className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[15px] leading-relaxed">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
        <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
          When we can&apos;t provide something directly, we connect you to
          someone who can.{" "}
          <span className="font-semibold text-[#00356b]">
            You never leave HAVEN without a next step.
          </span>
        </p>
      </div>

      <Link
        href="/services/scope-of-care"
        className="group inline-flex items-center gap-2 mt-6 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[17px] hover:gap-3 transition-all"
      >
        Read our full scope of care
        <ArrowRight className="w-4 h-4 shrink-0" />
      </Link>
    </div>
  );
}

/* ─── Full page ─── */

export function ScopeOfCareContent() {
  return (
    <section className="bg-white w-full">
      {/* ── The clause ── */}
      <div className={`${SECTION} pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14`}>
        <div className={`${INNER} space-y-5`}>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            HAVEN Free Clinic is a student-run clinic that holds one session a
            week, on Saturday mornings, with every encounter supervised by a
            licensed attending physician or nurse. Everything on this page
            follows from that. We take on what a supervised weekly clinic can
            handle safely and well, and we are direct about the rest.
          </p>
          <div className="border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4 md:px-6 md:py-5">
            <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                Our scope-of-care commitment.
              </span>{" "}
              We will tell you plainly what we can and cannot do, we will never
              let a limit of ours become a dead end for you, and every time we
              say no to a service we will hand you the name, number, or
              appointment that gets you a yes somewhere else.
            </p>
          </div>
          <p className="font-['Poppins',sans-serif] text-black/70 text-[15px] md:text-[17px] leading-relaxed">
            If you are not sure whether something falls inside our scope, ask.
            Call{" "}
            <a
              href="tel:2032000673"
              className="text-[#00356b] font-semibold hover:underline"
            >
              (203) 200-0673
            </a>{" "}
            and leave a voicemail, or raise it with your care team at your next
            visit. It is always better to ask than to wait.
          </p>
        </div>
      </div>

      <div className={SECTION}>
        <div className={INNER}>
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── What we provide ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <Check className="w-6 h-6 text-[#00356b]" strokeWidth={2.5} />
            </div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">
              What HAVEN Provides
            </h2>
          </div>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Your visit is free and you do not need insurance. Immigration
            status never affects your care. {COST_SHARING_SUMMARY} Labs,
            imaging, or specialty care we arrange for you can generate a bill
            from Yale New Haven Health, which our insurance counseling team
            helps you get covered.
          </p>

          <div className="space-y-6 md:space-y-7">
            {SCOPE_PROVIDES.map((group) => (
              <div
                key={group.group}
                className="bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-7"
              >
                <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px] mb-4">
                  {group.group}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 text-[#00356b] shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="font-['Poppins',sans-serif] text-black/80 text-[15px] md:text-[16px] leading-relaxed">
                        <span className="font-medium text-black">
                          {item.label}
                        </span>
                        {item.detail && (
                          <span className="block text-black/60 text-[14px] md:text-[15px] mt-0.5">
                            {item.detail}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={SECTION}>
        <div className={INNER}>
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Outside our scope ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <X className="w-6 h-6 text-red-700" strokeWidth={2.5} />
            </div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">
              Outside Our Scope
            </h2>
          </div>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Each of these is something we cannot do, paired with what to do
            instead. None of them is a reason to stop talking to us.
          </p>

          <div className="space-y-4 md:space-y-5">
            {SCOPE_OUTSIDE.map((item) => (
              <div
                key={item.label}
                className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-red-400 p-5 md:p-6"
              >
                <div className="flex items-start gap-3">
                  <X
                    className="w-5 h-5 text-red-600 shrink-0 mt-1"
                    strokeWidth={2.5}
                  />
                  <div>
                    <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[18px] mb-1.5">
                      {item.label}
                    </p>
                    <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[16px] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={SECTION}>
        <div className={INNER}>
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Where to go next ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-16 md:pb-20 lg:pb-24`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4">
            If You Need Something We Don&apos;t Offer
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Three routes cover almost everything outside our scope.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <div className="bg-red-50/50 border border-red-200 p-6">
              <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5 text-red-700" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[18px] mb-2">
                It is urgent
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
                Call{" "}
                <a href="tel:911" className="font-semibold hover:underline">
                  911
                </a>{" "}
                or go to the nearest emergency department. For a mental health
                crisis, call or text{" "}
                <a href="tel:988" className="font-semibold hover:underline">
                  988
                </a>
                .
              </p>
            </div>

            <div className="bg-[#f7f9fc] border border-[#00356b]/15 p-6">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-[#00356b]" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[18px] mb-2">
                You need weekday care
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
                {PARTNER_CLINICS.map((clinic, i) => (
                  <span key={clinic.name}>
                    {i > 0 && " and "}
                    {clinic.name}{" "}
                    <a
                      href={`tel:${clinic.tel}`}
                      className="text-[#00356b] font-semibold hover:underline"
                    >
                      {clinic.phone}
                    </a>
                  </span>
                ))}{" "}
                see patients regardless of insurance, on a sliding scale.
              </p>
            </div>

            <div className="bg-[#f7f9fc] border border-[#00356b]/15 p-6">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[#00356b]" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[18px] mb-2">
                You are already our patient
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
                Tell your care team. Your{" "}
                <Link
                  href="/services/patient-navigation"
                  className="text-[#00356b] font-semibold underline hover:no-underline"
                >
                  patient navigator
                </Link>{" "}
                exists for exactly this, and{" "}
                <Link
                  href="/services/referrals"
                  className="text-[#00356b] font-semibold underline hover:no-underline"
                >
                  referrals
                </Link>{" "}
                can get you in to a specialist affordably.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-10 bg-[#00356b] px-6 md:px-10 py-8 md:py-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex-1">
              <h3 className="font-['Merriweather',serif] font-bold text-white text-[20px] md:text-[24px] mb-2">
                Not sure where you fall?
              </h3>
              <p className="font-['Poppins',sans-serif] text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                Our guide to the American healthcare system lays out every level
                of care, what each costs, and where HAVEN sits among them.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/navigating-care"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-6 py-3.5 hover:bg-[#d6e8f7] transition-colors"
              >
                Navigating Healthcare
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="tel:2032000673"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-6 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                Call us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
