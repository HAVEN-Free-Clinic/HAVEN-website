import Link from "next/link";

export function ClinicGuideSection() {
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
            Clinic Guide
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            Have an appointment? Access all of the information you need to prepare.
          </p>
          <Link
            href="/visitor-guide"
            className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
