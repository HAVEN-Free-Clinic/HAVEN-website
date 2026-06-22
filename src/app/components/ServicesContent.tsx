import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  FlaskConical,
  Brain,
  GraduationCap,
  HeartHandshake,
  Shield,
  Pill,
  ArrowRight,
  Users,
  Compass,
  Smile,
  Check,
  X,
} from "lucide-react";
import { HealthcareNavigator } from "@/app/components/HealthcareNavigator";

/* ─── Scope of Care ─── */

const HAVEN_PROVIDES = [
  "Primary care visits — checkups, illness, physicals",
  "Chronic disease management: diabetes, hypertension, asthma",
  "Reproductive & women's health: pap smears, STI screening, contraception, gender-affirming care",
  "Behavioral health screenings and warm referrals",
  "Lab testing and vaccines",
  "Low-cost medications through our pharmacy partnerships",
  "Health education: diabetes, nutrition, self-management",
  "Referrals to specialists and community resources",
  "Medical debt counseling and help with YNHH Free Care applications",
  "Latent TB, H. pylori, and hypertension follow-up care",
  "Interpretation and cultural navigation",
  "Longitudinal care coordination for complex health needs",
];

const OUTSIDE_SCOPE = [
  "Emergency or life-threatening care — call 911 or go to the ER",
  "Insulin-dependent or highly complex diabetes management",
  "Surgery, imaging, oncology, or complex specialist procedures",
  "Licensed social work or crisis intervention",
  "Housing placement or job placement",
  "Weekday or after-hours care (Saturdays only)",
  "Insurance enrollment or Medicaid applications (we refer you)",
];

/* ─── Clinical Services ─── */

const clinicalServices = [
  {
    label: "Primary Care",
    description: "Comprehensive primary care including physical exams, screenings, and ongoing health management.",
    icon: Stethoscope,
    to: "/services/patient-care",
  },
  {
    label: "Reproductive Health",
    description: "Sexual and reproductive health services including counseling, contraception, and STI screening.",
    icon: HeartPulse,
    to: "/services/patient-care",
  },
  {
    label: "Chronic Disease",
    description: "Management and treatment for chronic conditions such as diabetes, hypertension, and TB.",
    icon: Activity,
    to: "/services/patient-care",
  },
  {
    label: "Lab",
    description: "On-site blood draws, lab testing, and diagnostic services for patients.",
    icon: FlaskConical,
    to: "/services/referrals",
  },
];

/* ─── Resources (ancillary departments) ─── */

const resources = [
  {
    label: "Patient Navigator",
    description: "Our Longitudinal Care Coordination (LCC) program pairs patients with dedicated navigators who coordinate ongoing care, follow-ups, and community resources.",
    icon: Users,
    to: "/services/social-services",
    featured: true,
  },
  {
    label: "Behavioral Health",
    description: "Individual and group sessions for mental health and wellness support. Group meets the first Saturday of each month.",
    icon: Brain,
    to: "/services/patient-care",
  },
  {
    label: "Education",
    description: "Health literacy programs and wellness education for patients.",
    icon: GraduationCap,
    to: "/services/education",
  },
  {
    label: "Social Services",
    description: "Assistance with food, housing, employment, and community resources.",
    icon: HeartHandshake,
    to: "/services/social-services",
  },
  {
    label: "Dental Care",
    description: "Care coordination connecting patients with accessible, affordable community dental resources at no cost.",
    icon: Smile,
    to: "/services/dental",
  },
  {
    label: "Insurance Counseling",
    description: "Help with medical bills, insurance enrollment, and financial assistance.",
    icon: Shield,
    to: "/services/debt-insurance",
  },
  {
    label: "Medication",
    description: "Pharmacy partnerships and prescription assistance programs.",
    icon: Pill,
    to: "/services/medication",
  },
  {
    label: "Referrals",
    description: "Specialty care referrals and diagnostic testing coordination.",
    icon: ArrowRight,
    to: "/services/referrals",
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
            Welcome to HAVEN Free Clinic, where we are committed to providing{" "}
            <span className="font-semibold">comprehensive</span> and{" "}
            <span className="font-semibold">compassionate healthcare services</span>{" "}
            to our community. Below are the various services we offer to address
            the diverse needs of our patients.
          </p>
        </div>
      </div>

      {/* ── Clinical Services ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-8 md:mb-10">
            Services and Programs
          </h2>
        </div>

        {/* Featured: The Compass Program */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-10">
          <Link
            href="/services/social-services#compass"
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
                  A 3-to-5-year care navigation program that goes beyond managing
                  your health today — helping you understand your conditions,
                  connect with resources, and build a roadmap toward permanent
                  coverage and a long-term provider.
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

          {/* Featured: Patient Navigator */}
          {resources.filter((r) => r.featured).map((resource) => (
            <Link
              key={resource.label}
              href={resource.to}
              className="group border-2 border-[#00356b] px-6 md:px-8 py-6 md:py-8 mt-5 md:mt-6 mb-5 md:mb-6 flex items-start gap-5 hover:bg-[#00356b]/5 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#00356b] flex items-center justify-center shrink-0">
                <resource.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[21px] mb-1.5">
                  {resource.label}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                  {resource.description}
                </p>
              </div>
            </Link>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {resources.filter((r) => !r.featured).map((resource) => (
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
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Scope of Care ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-8 md:mb-10">
            Scope of Care
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* What HAVEN provides */}
            <div className="bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-[#00356b]" strokeWidth={2.5} />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[21px]">
                  What HAVEN provides
                </h3>
              </div>
              <ul className="space-y-3">
                {HAVEN_PROVIDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-[#00356b] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[16px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outside our scope */}
            <div className="bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <X className="w-5 h-5 text-red-700" strokeWidth={2.5} />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[21px]">
                  Outside our scope
                </h3>
              </div>
              <ul className="space-y-3">
                {OUTSIDE_SCOPE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X
                      className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
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

          <div className="mt-8 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              When we can&apos;t provide something directly, we connect you to
              someone who can.{" "}
              <span className="font-semibold text-[#00356b]">
                You never leave HAVEN without a next step.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Navigating US Healthcare ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 pb-16 md:pb-20 lg:pb-24">
        <HealthcareNavigator />
      </div>
    </section>
  );
}
