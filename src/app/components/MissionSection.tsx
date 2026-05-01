export function MissionSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Our Mission
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            HAVEN Free Clinic is a{" "}
            <span className="font-semibold">student-run primary care clinic</span>{" "}
            that partners with Yale University to advance access to sustainable,
            comprehensive, and high-quality care for uninsured adults in New
            Haven, supporting patients in accessing care both within HAVEN and
            across the community.
          </p>
        </div>
      </div>
    </section>
  );
}
