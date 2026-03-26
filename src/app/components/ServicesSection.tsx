import Link from "next/link";
import { Stethoscope, HeartHandshake } from "lucide-react";

const departments = [
  {
    title: "Patient Care",
    description:
      "Primary care services including physical exams, preventive screenings, chronic disease management, and prescriptions.",
    icon: Stethoscope,
    href: "/services/patient-care",
  },
  {
    title: "Ancillary Departments",
    description:
      "Social services, medication assistance, patient education, medical debt counseling, and specialty referrals.",
    icon: HeartHandshake,
    href: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10 md:mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 md:mb-12">
            {departments.map((dept) => (
              <Link
                key={dept.title}
                href={dept.href}
                className="group bg-white border border-[#00356b] flex flex-col px-6 md:px-8 py-8 md:py-10 hover:shadow-lg hover:border-[#4a90c4] transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5 group-hover:bg-[#00356b]/15 transition-colors">
                  <dept.icon className="w-6 h-6 text-[#00356b]" />
                </div>
                <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-6">
                  {dept.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  {dept.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/services"
              className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
