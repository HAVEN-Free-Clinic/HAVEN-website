import Link from "next/link";
import { Phone } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full text-white min-h-screen flex items-center pt-16 md:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/HAVEN In-Clinic Banner.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/80 via-[#002147]/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="font-['Merriweather',serif] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Quality care,
            <br />
            no cost
          </h1>

          {/* Subtext */}
          <p className="font-['Poppins',sans-serif] text-white/80 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 max-w-xl">
            Free, high-quality healthcare for uninsured adults in New Haven.
            No insurance needed. No hidden fees. Just care.
          </p>

          {/* Buttons */}
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
    </section>
  );
}
