import Link from "next/link";
import { Phone } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen pt-16 md:pt-20 flex">
      {/* Left panel - solid navy with text */}
      <div className="relative z-10 w-full md:w-1/2 bg-[#00356b] flex items-center">
        <div className="px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 max-w-[700px] ml-auto">
          {/* Heading */}
          <h1 className="font-['Merriweather',serif] text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Quality care,
            <br />
            no cost
          </h1>

          {/* Subtext */}
          <p className="font-['Poppins',sans-serif] text-white/80 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
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

      {/* Right panel - image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/HAVEN In-Clinic Banner.jpg')" }}
      />

      {/* Mobile: image behind entire section with overlay */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/HAVEN In-Clinic Banner.jpg')" }}
      />
    </section>
  );
}
