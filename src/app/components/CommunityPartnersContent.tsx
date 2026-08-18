import Image from "next/image";
import { ExternalLink } from "lucide-react";

const yaleNursingLogo = "/images/yale-nursing-logo.png";
const yalePublicHealthLogo = "/images/yale-public-health-logo.png";
const yaleMedicineLogo = "/images/yale-medicine-logo.png";
const ynhhNortheastLogo = "/images/ynhh-northeast-logo.png";
const ynhhLogo = "/images/ynhh-logo.png";
const yaleWordmark = "/images/yale-wordmark.png";

interface Partner {
  name: string;
  logo: string;
}

const YALE_SCHOOLS: Partner[] = [
  { name: "Yale School of Medicine", logo: yaleMedicineLogo },
  { name: "Yale School of Nursing", logo: yaleNursingLogo },
  { name: "Yale School of Public Health", logo: yalePublicHealthLogo },
];

const OTHER_PARTNERS: Partner[] = [
  { name: "Yale New Haven Health", logo: ynhhLogo },
  {
    name: "Yale New Haven Health – Northeast Medical Group",
    logo: ynhhNortheastLogo,
  },
];

/*
 * Community partners without a logo asset in public/images. Rendered as named
 * cards below the logo row rather than as broken image tiles.
 */
const COMMUNITY_PARTNERS = [
  {
    name: "Fair Haven Community Health Care",
    description:
      "A federally qualified health center and one of the two clinics most HAVEN patients transition to for permanent primary care. We work together on transitions of care, and met this spring to plan deeper collaboration.",
    href: "https://www.fhchc.org/",
  },
  {
    name: "Cornell Scott-Hill Health Center",
    description:
      "A federally qualified health center across Greater New Haven. We partner with its International Clinic, which serves immigrants and newcomers, and with its Street Medicine Team, which reaches patients experiencing housing insecurity.",
    href: "https://www.cornellscott.org/",
  },
  {
    name: "Integrated Refugee & Immigrant Services (IRIS)",
    description:
      "Resettlement and support for refugees and immigrants in Connecticut, and a longstanding route by which community members find their way to HAVEN.",
    href: "https://irisct.org/",
  },
  {
    name: "Junta for Progressive Action",
    description:
      "New Haven's oldest Latino community-based organization, connecting Fair Haven residents to health, legal, and social services.",
    href: "https://juntainc.org/",
  },
];

interface SteeringMember {
  name: string;
  title: string;
}

const STEERING_COMMITTEE: SteeringMember[] = [
  {
    name: "Jessica Illuzzi, MD, MS, FACOG",
    title: "YSM Deputy Dean for Education",
  },
  {
    name: "John Francis, MD, PhD",
    title: "YSM Associate Dean for Student Affairs",
  },
  {
    name: "Michelle Silva, PsyD",
    title: "Director, Connecticut Latino Behavioral Health System",
  },
  {
    name: "Peter Ellis, MD, MPH",
    title: "Yale Medicine Associate Director for Internal Medicine",
  },
  {
    name: "Mayur M. Desai, PhD, MPH",
    title: "YSPH Associate Dean for Diversity, Equity, and Inclusion",
  },
  {
    name: "Michael Fitzsousa",
    title: "Director of Development for Alumni",
  },
  {
    name: "Ami Marshall, EdD, MSN, APRN, ANP-C",
    title: "Specialty Director for AGPCNP Program",
  },
  {
    name: "Rita Rienzo, MMSc, PA-C",
    title: "Assistant Professor in the PA Program",
  },
  {
    name: "Rachel Perry, PhD",
    title: "Assistant Professor in the PA Program",
  },
  {
    name: "James Bhandary-Alexander",
    title: "YSM Solomon Center's Medical Legal Partnership (MLP) Legal Director",
  },
];

export function CommunityPartnersContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
        {/* ── Our Partners ── */}
        <div className="mb-10 md:mb-14 max-w-[900px]">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Our Partners
          </h2>

          <div className="space-y-5 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
            <p>
              Our partnership with Yale University and all of the health
              professional schools has allowed the clinic to grow and thrive as
              both a high-quality primary care clinic and an educational site for
              students.
            </p>
            <p>
              HAVEN is able to fulfill its mission through generous support from
              our community and academic partners, including our partnership with
              Yale Medicine, which allows us to provide comprehensive care firmly
              grounded in the context of the community that we serve.
            </p>
            <p>Our partnerships with Yale New Haven Hospital and Northeast Medical Group have allowed us to provide greatly needed specialty care and diagnostic testing to our patients.</p>
            <p>
              Every year we continue to develop new partnerships with community
              organizations that further improve the level of care we are able to
              provide.
            </p>
          </div>
        </div>

        {/* ── Partner Logos ── */}
        <div className="mb-10 md:mb-14">
          {/* Yale University Group */}
          <div className="flex flex-col items-center mb-12 md:mb-14">
            <Image
              src={yaleWordmark}
              alt="Yale University"
              width={300}
              height={96}
              className="h-[64px] md:h-[80px] lg:h-[96px] w-auto object-contain mb-6 md:mb-8"
            />
            <div className="flex items-center justify-center gap-6 md:gap-10">
              {YALE_SCHOOLS.map((school) => (
                <div
                  key={school.name}
                  className="flex items-center justify-center p-3 md:p-4 bg-[#f7f9fc] border border-[#00356b]/8 hover:border-[#00356b]/20 hover:shadow-sm transition-all duration-200 w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                >
                  <Image
                    src={school.logo}
                    alt={school.name}
                    width={80}
                    height={72}
                    className="max-w-full max-h-[56px] md:max-h-[72px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Other Partners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-[600px] mx-auto">
            {OTHER_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-5 md:p-6 bg-[#f7f9fc] border border-[#00356b]/8 hover:border-[#00356b]/20 hover:shadow-sm transition-all duration-200 h-[100px] md:h-[120px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={90}
                  className="max-w-full max-h-[70px] md:max-h-[90px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Community Organizations ── */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Community Organizations
          </h2>
          <p className="font-['Poppins',sans-serif] text-black/70 text-[16px] md:text-[18px] mb-8 max-w-[700px]">
            Local organizations we work alongside, who send patients our way and
            who take care of them after us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {COMMUNITY_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 bg-[#f7f9fc] border border-[#00356b]/8 hover:border-[#00356b]/25 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[17px] md:text-[19px] mb-2 flex items-start gap-1.5">
                  {partner.name}
                  <ExternalLink className="w-4 h-4 shrink-0 mt-1 text-[#00356b]/40 group-hover:text-[#00356b] transition-colors" />
                </h3>
                <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[15px] leading-relaxed">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-10 md:mb-14" />

        {/* ── HAVEN Steering Committee ── */}
        <div>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            HAVEN Steering Committee
          </h2>
          <p className="font-['Poppins',sans-serif] text-black/70 text-[16px] md:text-[18px] mb-10 md:mb-14 max-w-[700px]">
            Our steering committee provides guidance and oversight to ensure
            HAVEN continues to deliver the highest quality of care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 lg:gap-y-8">
            {STEERING_COMMITTEE.map((member) => (
              <div
                key={member.name}
                className="flex items-start gap-4 p-4 bg-[#f7f9fc] border border-[#00356b]/8 hover:border-[#00356b]/20 hover:shadow-sm transition-all duration-200"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-[#00356b]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px]">
                    {member.name}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-black/65 text-[13px] md:text-[14px] mt-0.5">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}