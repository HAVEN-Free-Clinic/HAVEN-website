import { Brain, CalendarDays, HeartHandshake, Phone } from "lucide-react";

/* ─── Divider ─── */

function Divider() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="w-full h-px bg-[#00356b]/10" />
      </div>
    </div>
  );
}

/* ─── Data ─── */

const SERVICES = [
  "Intake evaluations conducted with supervising attendings",
  "Follow-up appointments for check-ins",
  "Education on coping skills",
  "Group sessions for psycho-education",
  "Mutual support and community building",
];

const PARTNERS = [
  {
    name: "Hispanic Clinic",
    description:
      "Culturally and linguistically responsive mental health services for our Spanish-speaking patients.",
  },
  {
    name: "Connecticut Mental Health Center",
    description:
      "Comprehensive, long-term mental health treatment and ongoing support.",
  },
];

/* ─── Main Component ─── */

export function BehavioralHealthContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              Our Behavioral Health Department focuses on principles of{" "}
              <span className="font-medium">psycho-education</span> and
              knowledge — helping patients understand their mental health and
              build skills to support their well-being.
            </p>
            <p className="font-medium text-[#00356b] border-l-4 border-[#00356b] pl-5">
              Our department does not provide treatment. Instead, we connect
              patients with trusted partner clinics in the community for
              long-term mental health care.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Emergency Callout ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#fef7ed] border border-amber-200 p-6 md:p-7 flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-amber-800" />
            </div>
            <p className="font-['Poppins',sans-serif] font-medium text-amber-800 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              If you are experiencing a mental health emergency, please call{" "}
              <a href="tel:988" className="underline font-bold">
                988
              </a>{" "}
              (Suicide &amp; Crisis Lifeline). Our department is not equipped to
              handle emergency situations.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── What We Offer ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6 text-[#00356b]" />
            </div>
            <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              What We Offer
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {SERVICES.map((service) => (
              <li
                key={service}
                className="bg-[#f7f9fc] p-5 md:p-6 border border-[#00356b]/10 font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider />

      {/* ── BHD Group ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b] px-6 md:px-10 lg:px-14 py-10 md:py-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-7">
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <CalendarDays className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-['Merriweather',serif] font-bold text-white text-[20px] sm:text-[24px] md:text-[28px] mb-2">
                Behavioral Health Group
              </h3>
              <p className="font-['Poppins',sans-serif] text-white/90 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
                Our Behavioral Health group meets the{" "}
                <span className="font-semibold text-white">
                  first Saturday of each month
                </span>{" "}
                for psycho-education, coping skills, and community support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Connecting You to Long-Term Care ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-[#00356b]" />
            </div>
            <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Connecting You to Long-Term Care
            </h3>
          </div>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
            Because we do not provide treatment directly, we refer patients to
            partner clinics in the community to connect them with long-term
            mental health services:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#f7f9fc] p-6 md:p-7 border border-[#00356b]/10"
              >
                <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2.5">
                  {partner.name}
                </h4>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mt-8">
            If you&apos;d like to be connected with long-term mental health
            services, please let our clinic staff know during your visit.
          </p>
        </div>
      </div>
    </section>
  );
}
