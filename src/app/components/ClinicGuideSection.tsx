import Link from "next/link";

export function ClinicGuideSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-20 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-10" />

        <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] mb-4">
          Clinic Guide
        </h2>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] mb-8 max-w-[900px]">
          Have an appointment? Access all of the information you need to prepare.
        </p>
        <div className="flex justify-center">
          <Link
            href="/visitor-guide"
            className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[20px] md:text-[24px] lg:text-[28px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mt-10" />
      </div>
    </section>
  );
}
