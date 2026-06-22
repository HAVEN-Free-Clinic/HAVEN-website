import Link from "next/link";
import { Phone, MapPin, Heart } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Call Us",
    description:
      "Call (203) 200-0673 to schedule. Leave a voicemail and we'll return your call within 24 hours. The clinic is open Saturdays only.",
  },
  {
    number: "2",
    icon: MapPin,
    title: "Visit the Clinic",
    description:
      "Visit us Saturday mornings from 8:30am-12:00pm at 800 Howard Ave. No insurance needed. Free parking available in the Howard Avenue Garage.",
  },
  {
    number: "3",
    icon: Heart,
    title: "Receive Care",
    description:
      "See a provider, get prescriptions, and connect with support services that help beyond the clinic.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4 md:mb-6">
            Getting Care Is Simple
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-10 md:mb-14">
            Three steps to free, quality healthcare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-['Merriweather',serif] font-bold text-[#00356b]/20 text-[40px] md:text-[48px] leading-none">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-[#00356b]" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] sm:text-[20px] md:text-[22px] mb-3">
                  {step.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {step.description}
                </p>
                {step.number === "2" && (
                  <Link
                    href="/visitor-guide"
                    className="inline-block mt-4 border border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[14px] md:text-[15px] px-5 py-2.5 hover:bg-[#00356b] hover:text-white transition-colors"
                  >
                    Clinic Guide
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
