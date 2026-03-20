import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full text-white min-h-screen flex items-center pt-16 md:pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/HAVEN In-Clinic Banner.jpg')" }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/80 via-[#002147]/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        
        <div className="relative z-10 mx-auto px-0 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 max-w-2xl items-start text-left">
            
            {/* Heading */}
            <div className="space-y-1">
              <h1 className="font-serif text-white text-4xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
                Quality care,
              </h1>
              <h1 className="font-serif text-white text-4xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
                no cost
              </h1>
            </div>

            {/* Subtext */}
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-white/75">
              Free, high-quality healthcare for uninsured adults{" "}
              <span className="whitespace-nowrap">in New Haven.</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              
              {/* Primary CTA */}
              <button className="bg-[#d6e8f7] text-[#00356b] px-7 py-3.5 rounded-full font-medium shadow-md hover:bg-white transition">
                See if you qualify
              </button>

              {/* Secondary CTA */}
              <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#00356b] transition">
                Learn more
              </button>

            </div>

          </div>
        </div>
    </section>
  );
}
// import Image from "next/image";
// import Link from "next/link";

// export function HeroBanner() {
//   return (
//     <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[846px] bg-black overflow-hidden flex items-center justify-center">
      
//       {/* Background Image */}
//       <Image
//         src="/images/hero-newhaven.jpg"
//         alt="New Haven cityscape"
//         fill
//         className="object-cover opacity-80"
//         priority
//         sizes="100vw"
//       />

//       {/* Dark overlay for text readability */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Hero Text */}
//       <div className="relative z-10 flex flex-col items-center text-center px-6 -translate-y-6 md:-translate-y-10">
        
//         <h1 className="font-['Merriweather',serif] font-bold text-white text-4xl md:text-6xl tracking-wide leading-tight">
//           HAVEN Free Clinic
//         </h1>

//         <p className="font-['Poppins',sans-serif] italic text-white/90 text-lg md:text-2xl mt-2 md:mt-3">
//           Quality care at no cost
//         </p>

//         <Link
//           href="/eligibility"
//           className="mt-6 md:mt-8 inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] md:text-[20px] px-8 py-3.5 rounded-full hover:bg-[#4a90c4] transition-all duration-200 shadow-lg hover:scale-105"
//         >
//           See If You Qualify
//         </Link>

//       </div>
//     </section>
//   );
// }
