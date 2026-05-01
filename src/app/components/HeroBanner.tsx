import Link from "next/link";
import { Phone } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Serving New Haven" },
  { value: "3,000+", label: "Patient Visits Per Year" },
  { value: "100%", label: "Free of Charge" },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full text-white min-h-screen flex flex-col pt-16 md:pt-20">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/HAVEN In-Clinic Banner.jpg')" }}
      />

      {/* Left-side overlay — solid on the left, fading out toward the right */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-[#00356b]/90" />
      <div className="absolute inset-y-0 left-[55%] w-[20%] hidden md:block bg-gradient-to-r from-[#00356b]/90 to-transparent" />

      {/* Top gradient for navbar readability */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content — left-aligned */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 w-full flex-1 flex items-center">
        <div className="max-w-lg md:max-w-xl">
          <h1 className="font-['Merriweather',serif] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Quality care,
            <br />
            no cost
          </h1>

          <p className="font-['Poppins',sans-serif] text-white/80 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
            Compassionate, high-quality care for our Greater New Haven
            community — supporting patients without insurance in accessing the
            care they need, within and beyond HAVEN.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/eligibility"
              className="bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-8 py-3.5 hover:bg-[#d6e8f7] transition-colors"
            >
              See If You Qualify
            </Link>
            <a
              href="tel:2032000673"
              className="border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-8 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              (203) 200-0673
            </a>
          </div>
        </div>
      </div>

      {/* Impact stats bar — anchored to bottom of hero */}
      <div className="relative z-10 w-full bg-[#00356b]/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4 md:py-5">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 md:gap-12 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-['Merriweather',serif] font-bold text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-white/70 text-[11px] sm:text-[12px] md:text-[14px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
