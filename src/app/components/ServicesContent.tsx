import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Brain,
  GraduationCap,
  HeartHandshake,
  Shield,
  Pill,
  ArrowRight,
  Users,
  Compass,
  Smile,
  Map,
  ClipboardCheck,
} from "lucide-react";
import { ScopeSummary } from "@/app/components/ScopeOfCare";

/* ─── Clinical Services ─── */

const clinicalServices = [
  {
    label: "Primary Care",
    description:
      "Comprehensive primary care including physical exams, screenings, and ongoing health management.",
    icon: Stethoscope,
    to: "/services/patient-care",
  },
  {
    label: "Sexual & Reproductive Health",
    description:
      "Sexual and reproductive health services including counseling, contraception, and STI screening.",
    icon: HeartPulse,
    to: "/services/patient-care",
  },
  {
    label: "Chronic Disease",
    description:
      "Management and treatment for chronic conditions such as diabetes, hypertension, and TB.",
    icon: Activity,
    to: "/services/patient-care",
  },
];

/* ─── Resources (ancillary departments) ─── */

const resources = [
  {
    label: "Behavioral Health",
    description:
      "Screenings, psycho-education, and warm referrals to partner clinics for ongoing treatment. Group meets the first Saturday of each month.",
    icon: Brain,
    to: "/services/behavioral-health",
  },
  {
    label: "Social Services",
    description:
      "Screening for social needs, then help with food, housing, transportation, employment, legal problems, and community resources.",
    icon: HeartHandshake,
    to: "/services/social-services",
  },
  {
    label: "Insurance Counseling",
    description:
      "Help with medical bills, YNHH Free Care and Medicaid applications, and debt you already have.",
    icon: Shield,
    to: "/services/debt-insurance",
  },
  {
    label: "Medication Access",
    description:
      "Pharmacy partnerships, low-cost mail-order options, and prescription assistance programs.",
    icon: Pill,
    to: "/services/medication",
  },
  {
    label: "Oral Health Initiative",
    description:
      "We do not treat teeth. We triage oral health concerns and coordinate you into community dental care, at no cost to you.",
    icon: Smile,
    to: "/services/dental",
  },
  {
    label: "Education",
    description:
      "One-on-one counseling on diabetes, blood pressure, nutrition, and managing your own conditions.",
    icon: GraduationCap,
    to: "/services/education",
  },
];

/* ─── Main component ─── */

export function ServicesContent() {
  return (
    <section className="bg-white w-full">
      {/* Intro */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14 lg:pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Your visit at HAVEN is free, and you do not need insurance to be
            seen. Below is everything we offer, from checkups and lab work to
            help with your medications, your bills, and getting in to see a
            specialist. Spanish interpreters are available every Saturday; tell
            us when you schedule if you need another language.
          </p>
        </div>
      </div>

      {/* ── Services and Programs ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-8 md:mb-10">
            Services and Programs
          </h2>
        </div>

        {/* Featured: The Compass Program */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-10">
          <Link
            href="/services/compass"
            className="group block bg-[#00356b] px-6 md:px-8 py-7 md:py-9 hover:bg-[#00356b]/95 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-['Poppins',sans-serif] font-semibold text-white/60 text-[12px] md:text-[13px] uppercase tracking-wider">
                    Our Signature Program
                  </span>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[20px] md:text-[24px] mb-2">
                  The Compass Program
                </h3>
                <p className="font-['Poppins',sans-serif] text-white/85 text-[14px] md:text-[16px] leading-relaxed">
                  A three-to-five-year care navigation program that goes beyond
                  managing your health today, helping you understand your
                  conditions, connect with resources, and build a roadmap toward
                  permanent coverage and a long-term provider.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 font-['Poppins',sans-serif] font-semibold text-white text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {clinicalServices.map((service) => (
              <Link
                key={service.label}
                href={service.to}
                className="group bg-white border border-[#00356b]/15 px-6 py-6 hover:border-[#00356b]/40 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-4 group-hover:bg-[#00356b]/15 transition-colors">
                  <service.icon className="w-5 h-5 text-[#00356b]" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                  {service.label}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          {/*
            Referrals sits above Patient Navigation deliberately: it is the
            service patients most often arrive looking for, and it carries the
            Free Care prerequisite, which is the thing they most need to know
            before they get there.
          */}
          <Link
            href="/services/referrals"
            className="group border-2 border-[#00356b] px-6 md:px-8 py-6 md:py-8 mt-5 md:mt-6 flex items-start gap-5 hover:bg-[#00356b]/5 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#00356b] flex items-center justify-center shrink-0">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[21px] mb-1.5">
                Referrals &amp; Specialty Care
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                Cardiology, gastroenterology, orthopedics, imaging, and more.
                We place the referral and work with the YNHH Free Care office so
                you can afford to go. Dermatology, nephrology, and neurology we
                now run in house on select Saturdays.
              </p>
              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] leading-relaxed mt-2.5">
                For referrals out to another practice, you need to be an
                established HAVEN patient with a YNHH Free Care application on
                file before we can arrange the appointment.
              </p>
            </div>
          </Link>

          <Link
            href="/services/patient-navigation"
            className="group border-2 border-[#00356b] px-6 md:px-8 py-6 md:py-8 mt-5 md:mt-6 mb-5 md:mb-6 flex items-start gap-5 hover:bg-[#00356b]/5 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#00356b] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[21px] mb-1.5">
                Patient Navigation
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                Our Longitudinal Care Coordination program pairs you with a
                navigator who keeps your appointments, referrals, and follow-ups
                on track between Saturdays, and who you can reach during the
                week.
              </p>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.label}
                href={resource.to}
                className="group bg-white border border-[#00356b]/15 px-6 py-6 hover:border-[#00356b]/40 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-4 group-hover:bg-[#00356b]/15 transition-colors">
                  <resource.icon className="w-5 h-5 text-[#00356b]" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                  {resource.label}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[15px] leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/about/operations"
            className="group inline-flex items-center gap-2 mt-8 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[17px] hover:gap-3 transition-all"
          >
            See every department that makes the clinic run
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Scope of Care ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <ScopeSummary />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/*
        ── Guides ──
        The healthcare-system explainer used to be rendered inline here as a
        thin five-rung ladder, while /eligibility carried a richer three-tier
        version of the same idea. Both now live on /navigating-care; this is the
        door to it.
      */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-4">
            Guides
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Two things worth reading whether or not you become our patient.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <Link
              href="/navigating-care"
              className="group bg-[#00356b] p-6 md:p-8 hover:bg-[#00356b]/95 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[18px] md:text-[21px] mb-2">
                Navigating Healthcare
              </h3>
              <p className="font-['Poppins',sans-serif] text-white/85 text-[14px] md:text-[16px] leading-relaxed">
                Every level of care in the American system, what each one costs,
                how coverage works in Connecticut, and where HAVEN fits among
                them.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 font-['Poppins',sans-serif] font-semibold text-white text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                Read the guide
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/services/scope-of-care"
              className="group bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-8 hover:border-[#00356b]/40 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-[#00356b]" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[21px] mb-2">
                Scope of Care
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                Everything HAVEN provides, everything that falls outside what a
                supervised Saturday clinic can do, and where to go instead for
                each of them.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                Read our scope
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
