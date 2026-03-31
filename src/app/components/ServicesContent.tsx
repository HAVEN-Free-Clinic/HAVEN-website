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
} from "lucide-react";

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
    </section>
  );
}
