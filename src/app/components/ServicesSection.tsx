const services = [
  {
    title: "Patient Care",
    description:
      "We offer annual physical examinations, preventive screening, management of chronic conditions, and more.",
  },
  {
    title: "Social Services",
    description:
      "We support patients with medical debt, medical insurance, food insecurity, housing insecurity, and unemployment.",
  },
  {
    title: "Referrals",
    description:
      "We provide referrals to specialty services and diagnostic testing.",
  },
];

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-[#00356b] flex flex-col px-8 py-8 md:py-10 w-full md:w-[340px] lg:w-[368px] min-h-[300px] md:min-h-[360px] lg:min-h-[391px] hover:shadow-lg transition-shadow">
      <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6">
        {title}
      </h3>
      <p className="font-['Poppins',sans-serif] text-[#00356b] text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-20 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] self-start mb-10 md:mb-12 w-full">
          Our Services
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center mb-10 md:mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <a
          href="/services"
          className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[20px] md:text-[24px] lg:text-[28px] px-8 py-3.5 rounded-full hover:bg-[#4a90c4] transition-colors"
        >
          All Services
        </a>
      </div>
    </section>
  );
}
