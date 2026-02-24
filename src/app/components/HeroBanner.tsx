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
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[600px] h-[300px] bg-black/15 blur-[75px] rounded-[400px]" />

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[140px] sm:pt-[160px] md:pt-[180px] lg:pt-[220px]">
        <h2 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[32px] mb-2 md:mb-4">HAVEN Free Clinic</h2>
        <h1 className="font-['Poppins',sans-serif] font-bold text-white text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] leading-tight">
          High-quality health care,
        </h1>
        <h1 className="text-white text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] leading-tight">
          <span className="font-['Poppins',sans-serif] font-bold italic">free </span>
          <span className="font-['Poppins',sans-serif] font-bold">of charge</span>
        </h1>
        <Link
          href="/eligibility"
          className="mt-8 md:mt-10 inline-block bg-white text-[#034078] font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] md:text-[20px] px-8 py-3.5 rounded-[19px] hover:bg-[#034078] hover:text-white transition-colors shadow-lg"
        >
          See If You Qualify
        </Link>
      </div>
    </section>
  );
}
