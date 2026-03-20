import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[846px] bg-black overflow-hidden flex items-center justify-center">
      
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
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 -translate-y-6 md:-translate-y-10">
        
        <h1 className="font-['Merriweather',serif] font-bold text-white text-4xl md:text-6xl tracking-wide leading-tight">
          HAVEN Free Clinic
        </h1>

        <p className="font-['Poppins',sans-serif] italic text-white/90 text-lg md:text-2xl mt-2 md:mt-3">
          Quality care at no cost
        </p>

        <Link
          href="/eligibility"
          className="mt-6 md:mt-8 inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] md:text-[20px] px-8 py-3.5 rounded-full hover:bg-[#4a90c4] transition-all duration-200 shadow-lg hover:scale-105"
        >
          See If You Qualify
        </Link>

      </div>
    </section>
  );
}
