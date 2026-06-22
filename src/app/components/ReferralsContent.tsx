import { CheckCircle2, Stethoscope, HeartHandshake } from "lucide-react";

/* ─── Arrow icon for CTA buttons ─── */

function LinkArrow() {
  return (
    <svg
      className="w-[24px] h-[18px] md:w-[32px] md:h-[24px] shrink-0"
      fill="none"
      viewBox="0 0 44 34"
    >
      <path
        d="M11 8.82385H27.25M27.25 8.82385V25.0739M27.25 8.82385L11 25.0739"
        stroke="#00356b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ─── Divider ─── */

function Divider() {
  return <div className="w-full h-px bg-[#00356b]/10" />;
}

/* ─── Data ─── */

const SPECIALTY_EXAMPLES = [
  {
    name: "Cardiology",
    description: "heart health, blood pressure complications, and cardiac conditions",
  },
  {
    name: "Dermatology",
    description: "skin conditions, rashes, lesions, and chronic skin diseases",
  },
  {
    name: "Orthopedics",
    description: "bone, joint, and musculoskeletal concerns",
  },
  {
    name: "Neurology",
    description: "headaches, nerve conditions, and neurological symptoms",
  },
];

const REFERRAL_TEAM_STEPS = [
  "Identify the right specialist for your needs",
  "Work with YNHH Free Care to explore free or reduced-cost options",
  "Help you understand what to expect and what to bring to your appointment",
  "Follow up with you as part of your ongoing care at HAVEN",
];

/* ─── Main Component ─── */

export function ReferralsContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p className="font-medium text-[#00356b] border-l-4 border-[#00356b] pl-5">
              Patients must have established care with HAVEN before we can place
              referrals on their behalf.
            </p>
            <p>
              Sometimes your health needs care beyond what we can provide at our
              Saturday clinic. When that happens, our team helps connect you with
              the right specialist and works to make that care affordable. Here is
              how referrals work at HAVEN.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Primary Care vs. Specialty Care ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Primary Care vs. Specialty Care
          </h3>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              Primary care is the foundation of your health. It covers
              prevention, routine checkups, chronic disease management, and most
              everyday health concerns. This is what HAVEN provides directly
              through our Saturday clinic.
            </p>
            <p>
              Specialty care refers to medical services that require advanced,
              focused expertise beyond the scope of primary care. Examples
              include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-8">
            {SPECIALTY_EXAMPLES.map((specialty) => (
              <div
                key={specialty.name}
                className="bg-[#f7f9fc] p-6 md:p-7 border border-[#00356b]/10"
              >
                <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2">
                  {specialty.name}
                </h4>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mt-8">
            When your care requires expertise or equipment beyond what HAVEN can
            provide, we will work with you to connect you with the right
            specialist.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Partnership with YNHH Free Care ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-[#00356b]" />
            </div>
            <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Our Partnership with YNHH Free Care
            </h3>
          </div>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              HAVEN Free Clinic works closely with the Yale New Haven Hospital
              (YNHH) Free Care Office to help our patients access specialty care
              at little or no cost. Through this partnership, we are often able to
              secure free or significantly reduced-cost specialist appointments
              for patients who qualify, services that would otherwise be
              financially out of reach.
            </p>
            <p>
              This is one of the most meaningful ways we extend care beyond our
              walls and ensure that a specialist referral does not become a dead
              end for our patients.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── How the Referral Process Works ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            How the Referral Process Works
          </h3>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              Referrals at HAVEN are handled flexibly depending on your
              situation. In some cases, our care team will initiate the referral
              on your behalf and coordinate directly with YNHH. In others, we will
              guide you through the steps to reach out yourself, with our support
              along the way.
            </p>
            <p>
              Either way, you will not navigate this alone. Our team will:
            </p>
          </div>

          <ul className="space-y-4 mt-8">
            {REFERRAL_TEAM_STEPS.map((step) => (
              <li
                key={step}
                className="flex items-start gap-3 bg-[#f7f9fc] p-5 md:p-6 border border-[#00356b]/10"
              >
                <CheckCircle2 className="w-6 h-6 text-[#00356b] shrink-0 mt-0.5" />
                <span className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 md:mt-10 flex items-start gap-3 md:gap-4 border-l-4 border-[#00356b] bg-[#f7f9fc] p-6 md:p-7">
            <Stethoscope className="w-6 h-6 text-[#00356b] shrink-0 mt-0.5" />
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                Think you may need a specialist?
              </span>{" "}
              Talk to your HAVEN care team and we&rsquo;ll figure out the next
              step together.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Access Medical Referrals CTA ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
        <div className="bg-[#00356b]/10 border border-[#00356b]/20 px-8 sm:px-12 md:px-16 lg:px-24 py-10 md:py-12 lg:py-14 w-full flex flex-col items-center text-center gap-6 md:gap-8 lg:gap-10">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
            Access Medical Referrals
          </h3>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[600px]">
            Feel supported regardless of medical debt, medical insurance, food
            insecurity, housing insecurity, and unemployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="https://mychart.ynhhs.org/MyChart-PRD/Authentication/Login?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-6 md:px-8 py-2.5 md:py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
                Log In
              </span>
              <LinkArrow />
            </a>
            <a
              href="mailto:haven.free.clinic@yale.edu?subject=HAVEN%20MyChart%20Access%20Request"
              className="bg-white px-6 md:px-8 py-2.5 md:py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
                Request Access
              </span>
              <LinkArrow />
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
