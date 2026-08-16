import {
  Brain,
  CalendarDays,
  HeartHandshake,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

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

/*
 * Partner details verified against fhchc.org/mental-health and
 * portal.ct.gov/DMHAS/CMHC (August 2026). The Hispanic Clinic is a program
 * inside CMHC, not a separate organization — do not split them back apart.
 */

interface Partner {
  name: string;
  org: string;
  lead: string;
  body: string;
  address: string;
  mapQuery: string;
  phoneLabel: string;
  phone: string;
  tel: string;
  href: string;
  /** Walk-in hours as [day, time] pairs. Omit for referral-only partners. */
  hours?: [string, string][];
  secondaryPhoneLabel?: string;
  secondaryPhone?: string;
  secondaryTel?: string;
}

const PARTNERS: Partner[] = [
  {
    name: "Same Day Access at Fair Haven",
    org: "Fair Haven Community Health Care",
    lead: "Walk in, no appointment. Adults and children are both welcome.",
    body: "If you want to talk to someone soon rather than wait for a referral, this is the fastest door. You show up during the hours below and get seen. They offer one-on-one and group counseling, substance use support, and medication management, and they have Spanish-speaking staff.",
    address: "374 Grand Ave, New Haven, CT 06513",
    mapQuery: "Fair Haven Community Health Care, 374 Grand Ave, New Haven, CT",
    phoneLabel: "Patient Navigation Team",
    phone: "(203) 752-5271",
    tel: "2037525271",
    hours: [
      ["Monday", "8:30am – 1:30pm"],
      ["Tuesday & Thursday", "8:30am – 5:30pm"],
      ["Wednesday", "10:30am – 3:30pm"],
      ["Friday", "8:30am – 3:30pm"],
      ["Saturday", "8:30am – 1:30pm"],
    ],
    href: "https://www.fhchc.org/mental-health",
  },
  {
    name: "Connecticut Mental Health Center",
    org: "Includes the Hispanic Clinic",
    lead: "Long-term treatment for adults living in the greater New Haven area.",
    body: "CMHC is the state mental health center run together by Yale and Connecticut's Department of Mental Health and Addiction Services. It gives priority to adults who live in its greater New Haven catchment area, so it is worth calling to check whether your town is covered. The Hispanic Clinic is not a separate place. It is CMHC's bilingual, bicultural program, running since 1973, for Spanish-speaking adults 18 and over who are on state assistance or have no coverage. Fees at the Hispanic Clinic are based on what you can afford, and it accepts patients from a wider area than the main clinic.",
    address: "34 Park St, New Haven, CT 06519",
    mapQuery: "Connecticut Mental Health Center, 34 Park St, New Haven, CT 06519",
    phoneLabel: "Main number",
    phone: "(203) 974-7300",
    tel: "2039747300",
    secondaryPhoneLabel: "Hispanic Clinic",
    secondaryPhone: "(203) 974-5800",
    secondaryTel: "2039745800",
    href: "https://portal.ct.gov/dmhas/cmhc",
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
              knowledge, helping patients understand their mental health and
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
          <div className="bg-red-50 border border-red-200 p-6 md:p-7 flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-red-700" />
            </div>
            <p className="font-['Poppins',sans-serif] font-medium text-red-900 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
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
            partner clinics in the community for ongoing mental health care. You
            do not have to wait for us to make the referral. You can contact
            either of these yourself.
          </p>

          <div className="space-y-6 md:space-y-8">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#f7f9fc] p-6 md:p-8 border border-[#00356b]/10"
              >
                <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[19px] md:text-[22px]">
                  {partner.name}
                </h4>
                <p className="font-['Poppins',sans-serif] text-black/55 text-[13px] md:text-[14px] mt-1">
                  {partner.org}
                </p>

                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[17px] leading-relaxed mt-4">
                  {partner.lead}
                </p>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-2.5">
                  {partner.body}
                </p>

                {partner.hours && (
                  <dl className="mt-5 border-t border-[#00356b]/10 pt-4">
                    <dt className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] mb-2">
                      Walk-in hours
                    </dt>
                    {partner.hours.map(([day, time]) => (
                      <dd
                        key={day}
                        className="flex flex-wrap justify-between gap-x-6 gap-y-0.5 font-['Poppins',sans-serif] text-black text-[14px] md:text-[15px] py-1 border-b border-[#00356b]/5 last:border-0"
                      >
                        <span>{day}</span>
                        <span className="font-medium">{time}</span>
                      </dd>
                    ))}
                  </dl>
                )}

                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href={`tel:${partner.tel}`}
                    className="inline-flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] hover:underline w-fit"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    {partner.phoneLabel}: {partner.phone}
                  </a>

                  {partner.secondaryPhone && (
                    <a
                      href={`tel:${partner.secondaryTel}`}
                      className="inline-flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] hover:underline w-fit"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      {partner.secondaryPhoneLabel}: {partner.secondaryPhone}
                    </a>
                  )}

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-1">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        partner.mapQuery
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[14px] md:text-[15px] underline hover:no-underline"
                    >
                      <MapPin className="w-4 h-4 shrink-0" />
                      {partner.address}
                    </a>
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[14px] md:text-[15px] underline hover:no-underline"
                    >
                      Visit website
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mt-8">
            If you would rather we set it up for you, tell our clinic staff
            during your visit and we will make the referral.
          </p>
        </div>
      </div>
    </section>
  );
}
