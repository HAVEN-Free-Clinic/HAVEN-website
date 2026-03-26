import Link from "next/link";
import Image from "next/image";
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

/* ─── Clinical Services (image cards) ─── */

const clinicalServices = [
  { label: "Primary Care", image: "/images/patient-care.jpg", to: "/services/patient-care" },
  { label: "Reproductive Health", image: "/images/social-services-card.jpg", to: "/services/patient-care" },
  { label: "Chronic Disease", image: "/images/medication.jpg", to: "/services/patient-care" },
  { label: "Lab", image: "/images/referrals-card.jpg", to: "/services/referrals" },
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

/* ─── Arrow icon for image cards ─── */

function ArrowIcon() {
  return (
    <svg
      className="w-[18px] h-[14px] md:w-[22px] md:h-[17px] shrink-0"
      fill="none"
      viewBox="0 0 44 34"
    >
      <path
        d="M11 8.82385H27.25M27.25 8.82385V25.0739M27.25 8.82385L11 25.0739"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ─── Image card for clinical services ─── */

function ServiceCard({ label, image, to }: { label: string; image: string; to: string }) {
  return (
    <Link
      href={to}
      className="group relative w-full aspect-square overflow-hidden cursor-pointer block"
    >
      <Image
        src={image}
        alt={label}
        width={400}
        height={300}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-1.5">
        <span className="font-['Poppins',sans-serif] font-bold text-white text-[16px] sm:text-[18px] md:text-[20px]">
          {label}
        </span>
        <ArrowIcon />
      </div>
    </Link>
  );
}

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
            Clinical Services
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {clinicalServices.map((service) => (
              <ServiceCard
                key={service.label}
                label={service.label}
                image={service.image}
                to={service.to}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Resources (Ancillary Departments) ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-8 md:mb-10">
            Resources
          </h2>

          {/* Featured: Patient Navigator */}
          {resources.filter((r) => r.featured).map((resource) => (
            <Link
              key={resource.label}
              href={resource.to}
              className="group bg-[#00356b] px-6 md:px-8 py-6 md:py-8 mb-6 flex items-start gap-5 hover:bg-[#00356b]/90 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                <resource.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[18px] md:text-[21px] mb-1.5">
                  {resource.label}
                </h3>
                <p className="font-['Poppins',sans-serif] text-white/80 text-[14px] md:text-[16px] leading-relaxed">
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
