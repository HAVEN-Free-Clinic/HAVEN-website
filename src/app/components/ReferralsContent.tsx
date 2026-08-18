import Link from "next/link";
import {
  CheckCircle2,
  Stethoscope,
  HeartHandshake,
  Phone,
  ClipboardCheck,
} from "lucide-react";
import { FreeCareSummary } from "@/app/components/FreeCareSummary";
import { FREE_CARE_PROCESSING, YNHH_BILLING } from "@/lib/free-care";

/* ─── Divider ─── */

function Divider() {
  return <div className="w-full h-px bg-[#00356b]/10" />;
}

/* ─── Data ─── */

const SPECIALTY_EXAMPLES = [
  {
    name: "Cardiology",
    description:
      "heart health, blood pressure complications, and cardiac conditions",
  },
  {
    name: "Gastroenterology",
    description: "digestive conditions, endoscopy, and liver disease",
  },
  {
    name: "Orthopedics",
    description: "bone, joint, and musculoskeletal concerns",
  },
  {
    name: "Radiology and imaging",
    description: "X-rays, ultrasound, CT, and MRI ordered by your care team",
  },
];

/*
 * Specialties HAVEN now runs in house. Dermatology launched in 2025 and was
 * followed by Nephrology and Neurology; the home-page clinic schedule already
 * advertised them, while this page was still listing dermatology and neurology
 * as examples of care beyond our scope.
 */
const ONSITE_SPECIALTIES = [
  {
    name: "Dermatology",
    description:
      "Our first specialty clinic, launched in 2025. Skin conditions, rashes, lesions, and chronic skin disease.",
  },
  {
    name: "Nephrology",
    description:
      "Kidney function and chronic kidney disease, often alongside diabetes and blood pressure management.",
  },
  {
    name: "Neurology",
    description:
      "Headaches, nerve conditions, and neurological symptoms that need a specialist eye.",
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
            <div className="border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4 md:px-6 md:py-5">
              <p className="font-semibold text-[#00356b] mb-2.5">
                Two things have to be in place before we can refer you.
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-[15px] sm:text-[16px] md:text-[18px]">
                <li>
                  <span className="font-semibold">
                    You are an established HAVEN patient.
                  </span>{" "}
                  We cannot place a referral for someone we have not seen.{" "}
                  <Link
                    href="/eligibility"
                    className="text-[#00356b] underline hover:no-underline"
                  >
                    Check your eligibility
                  </Link>{" "}
                  and call us to establish care first.
                </li>
                <li>
                  <span className="font-semibold">
                    You have a YNHH Free Care application on file.
                  </span>{" "}
                  Specialty care is the expensive part of the system, and Free
                  Care is what makes it affordable. Start it early: our MDIC team
                  can file it with you at any Saturday clinic, and{" "}
                  <span className="font-semibold">
                    processing takes about {FREE_CARE_PROCESSING}
                  </span>
                  , so an application begun today is what lets us book a
                  specialist a couple of months from now.
                </li>
              </ol>
            </div>
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
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Primary Care vs. Specialty Care
          </h2>
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
                <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2">
                  {specialty.name}
                </h3>
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
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Our Partnership with YNHH Free Care
            </h2>
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
              It means a referral from us is usually something you can actually
              afford to follow through on.
            </p>
          </div>

          <div className="mt-7">
            <FreeCareSummary />
          </div>

          <div className="bg-[#00356b] p-6 md:p-8 mt-6">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-white text-[18px] md:text-[20px] mb-2">
              YNHH central call center
            </h3>
            <p className="font-['Poppins',sans-serif] text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-5">
              For questions about a Free Care application, your approval status,
              or a specific YNHH bill, call Patient Financial Services directly.
            </p>
            <a
              href={`tel:${YNHH_BILLING.tel}`}
              className="inline-flex items-center gap-2 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-7 py-3.5 hover:bg-[#d6e8f7] transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              {YNHH_BILLING.phone}
            </a>
            <p className="font-['Poppins',sans-serif] text-white/70 text-[14px] md:text-[15px] mt-4">
              {YNHH_BILLING.hours}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Specialty clinics held at HAVEN ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <ClipboardCheck className="w-6 h-6 text-[#00356b]" />
            </div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Some Specialties Come to Us
            </h2>
          </div>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              Not every specialty visit means leaving HAVEN. We now run three
              specialty clinics inside our own Saturday session, so patients can
              see a specialist without the cost, the travel, or the wait that
              usually stands in the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-8">
            {ONSITE_SPECIALTIES.map((clinic) => (
              <div
                key={clinic.name}
                className="bg-[#f7f9fc] p-6 border border-[#00356b]/10"
              >
                <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                  {clinic.name}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[15px] leading-relaxed">
                  {clinic.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-['Poppins',sans-serif] text-black/70 text-[15px] md:text-[17px] leading-relaxed mt-6">
            These clinics run on select Saturdays and are booked through your
            care team, not by walking in. Everything else goes out as a referral,
            which is what the rest of this page is about.
          </p>
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
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            How the Referral Process Works
          </h2>
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

      {/* ── Closing CTA ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b]/10 border border-[#00356b]/20 px-8 sm:px-12 md:px-16 py-10 md:py-12 lg:py-14 w-full flex flex-col items-center text-center gap-5 md:gap-6">
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Start With Free Care
            </h2>
            <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[620px]">
              A referral you cannot afford is not a referral. Getting a YNHH Free
              Care application filed is the single most useful thing you can do
              before you need a specialist, and our MDIC team will do it with
              you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/debt-insurance"
                className="inline-flex items-center justify-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-7 py-3.5 hover:bg-[#00356b]/90 transition-colors"
              >
                Free Care application guide
              </Link>
              <a
                href="tel:2032000673"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-7 py-3.5 hover:bg-[#00356b]/5 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (203) 200-0673
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
