
/* ─── Link Arrow Icon (from Figma SVG) ─── */

function LinkArrow() {
  return (
    <svg
      className="w-[20px] h-[16px] md:w-[25px] md:h-[19px] lg:w-[29px] lg:h-[22px] shrink-0"
      fill="none"
      viewBox="0 0 29 22.1194"
    >
      <path
        d="M7.17788 2.93471H23.4279M23.4279 2.93471V19.1847M23.4279 2.93471L7.17788 19.1847"
        stroke="#00356b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ─── Guide Card ─── */

interface GuideCardProps {
  title: string;
  href?: string;
}

function GuideCard({ title, href = "#" }: GuideCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#00356b] px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8 hover:bg-[#f0f5fb] transition-colors"
    >
      <p className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-2 md:mb-3">
        {title}
      </p>
      <span className="inline-flex items-center gap-2 md:gap-2.5">
        <span className="font-['Poppins',sans-serif] text-[#00356b] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
          Download pdf
        </span>
        <LinkArrow />
      </span>
    </a>
  );
}

/* ─── Data ─── */

const educationGuides: GuideCardProps[] = [
  { title: "Nutrition" },
  { title: "Exercise" },
  { title: "Specific Conditions" },
  { title: "Calming Down" },
];

const howToGuides: GuideCardProps[] = [
  { title: "Blood Pressure Cuffs" },
  { title: "Glucose Monitors" },
];

/* ─── Main component ─── */

export function EducationContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Education
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Now providing one-on-one counseling regarding behavioral changes,
            illness, and general wellness, as well as counseling and resources
            about diet and exercise, hypertension, high cholesterol, weight
            management, and smoking cessation.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Please note that these pdf handouts provided by the Education
            Department are simply meant to{" "}
            <span className="font-medium">
              supplement and provide more information for access from home
            </span>
            . These handouts are not meant to replace patient visits.{" "}
            <span className="font-medium">
              Patients should continue to seek guidance from their healthcare
              providers
            </span>{" "}
            and/or the Education Department to address their concerns.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Education Guides ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-8 md:mb-10">
            Education Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-[37px]">
            {educationGuides.map((guide) => (
              <GuideCard key={guide.title} title={guide.title} href={guide.href} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-10 md:mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── How-To Guides ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-8 md:mb-10">
            How-To Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-[37px]">
            {howToGuides.map((guide) => (
              <GuideCard key={guide.title} title={guide.title} href={guide.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}