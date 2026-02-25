import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[846px] bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-newhaven.jpg"
        alt="New Haven cityscape"
        fill
        className="object-cover opacity-80"
        priority
        sizes="100vw"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />


      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[140px] sm:pt-[160px] md:pt-[180px] lg:pt-[220px]">
        <span className="inline-block bg-white/15 border border-white/30 px-6 py-2 font-['Poppins',sans-serif] font-medium text-white text-[14px] sm:text-[16px] md:text-[18px] tracking-wide mb-6 md:mb-8">
          HAVEN Free Clinic
        </span>
        <h1 className="font-['Merriweather',serif] font-bold text-white text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] leading-tight">
          High-quality health care,
        </h1>
        <h1 className="text-white text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] leading-tight">
          <span className="font-['Poppins',sans-serif] font-bold italic">free </span>
          <span className="font-['Poppins',sans-serif] font-bold">of charge</span>
        </h1>
        <Link
          href="/eligibility"
          className="mt-8 md:mt-10 inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors shadow-lg"
        >
          See If You Qualify
        </Link>
      </div>
    </section>
  );
}
