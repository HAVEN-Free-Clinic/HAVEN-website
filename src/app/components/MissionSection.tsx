export function MissionSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 md:px-16 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] shrink-0 md:w-[320px] lg:w-[390px]">
          Our Mission
        </h2>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[766px]">
          The HAVEN Free Clinic is a{" "}
          <span className="font-semibold">student-run</span>{" "}
          <span className="font-semibold">primary care clinic</span> that
          partners with Yale University to provide sustainable, comprehensive,
          and high-quality{" "}
          <span className="font-semibold">health care </span>
          <em className="font-medium">free</em>
          <span className="font-semibold"> of charge</span> to uninsured adults
          in New Haven.
        </p>
      </div>
    </section>
  );
}
