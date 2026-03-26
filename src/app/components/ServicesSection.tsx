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
    <div className="bg-white border border-[#00356b] flex flex-col px-6 md:px-8 py-8 md:py-10 hover:shadow-lg transition-shadow">
      <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-6">
        {title}
      </h3>
      <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10 md:mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 md:mb-12">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/services"
              className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
            >
              All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
