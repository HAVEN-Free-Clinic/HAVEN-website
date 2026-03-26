import Link from "next/link";
import { User, MapPin, ShieldCheck, Stethoscope } from "lucide-react";

const criteria = [
  { icon: User, text: "Between 18 and 65 years old" },
  { icon: MapPin, text: "Reside in the Greater New Haven area" },
  { icon: ShieldCheck, text: "Currently uninsured" },
  { icon: Stethoscope, text: "Do not have a primary care provider" },
];

export function WhoWeServe() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Who We Serve
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            HAVEN Free Clinic provides care to adults in the Greater New Haven
            area who meet the following criteria:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
            {criteria.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-[#f7f9fc] border border-[#00356b]/10 px-5 py-4 md:px-6 md:py-5"
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00356b] shrink-0" />
                <span className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/eligibility"
            className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
          >
            Check Your Eligibility
          </Link>
        </div>
      </div>
    </section>
  );
}
