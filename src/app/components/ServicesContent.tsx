import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Patient Care", image: "/images/patient-care.jpg", to: "/services/patient-care" },
  { label: "Medication", image: "/images/medication.png", to: "/services/medication" },
  { label: "Social Services", image: "/images/social-services-card.png", to: "/services/social-services" },
  { label: "Education", image: "/images/education-card.jpg", to: "/services/education" },
  { label: "Debt/Insurance", image: "/images/debt-insurance-card.png", to: "/services/debt-insurance" },
  { label: "Referrals", image: "/images/referrals-card.png", to: "/services/referrals" },
];

function ArrowIcon() {
  return (
    <svg
      className="w-[28px] h-[22px] md:w-[36px] md:h-[28px] shrink-0"
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

interface ServiceCardProps {
  label: string;
  image: string;
  to: string;
}

function ServiceCard({ label, image, to }: ServiceCardProps) {
  return (
    <Link
      href={to}
      className="group relative w-full aspect-square overflow-hidden cursor-pointer block"
    >
      {/* Card Image */}
      <Image
        src={image}
        alt={label}
        width={400}
        height={300}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Label + Arrow */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-1.5">
        <span className="font-['Poppins',sans-serif] font-bold text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[33px]">
          {label}
        </span>
        <ArrowIcon />
      </div>
    </Link>
  );
}

export function ServicesContent() {
  return (
    <section className="bg-white w-full">
      {/* Intro Block */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14 lg:pb-16">
        <div className="bg-white flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] shrink-0">
            Our Services
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px]">
            Welcome to Haven Free Clinic, where we are committed to providing{" "}
            <span className="font-semibold">comprehensive</span> and{" "}
            <span className="font-semibold">compassionate healthcare services</span>{" "}
            to our community. Below are the various services we offer to address
            the diverse needs of our patients.
          </p>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px]">
          {services.map((service) => (
            <ServiceCard
              key={service.label}
              label={service.label}
              image={service.image}
              to={service.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
