export function ImpactStats() {
  const stats = [
    { value: "20+", label: "Years Serving New Haven" },
    { value: "3,000+", label: "Patient Visits Per Year" },
    { value: "100%", label: "Free of Charge" },
  ];

  return (
    <section className="w-full bg-[#00356b]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-['Merriweather',serif] font-bold text-white text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-none mb-2">
                  {stat.value}
                </p>
                <p className="font-['Poppins',sans-serif] text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
