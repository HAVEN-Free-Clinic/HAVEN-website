import {
  Heart,
  Stethoscope,
  Languages,
  ClipboardCheck,
  HandHeart,
  ExternalLink,
  FileText,
  Gift,
  Megaphone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  CalendarDays,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { DONATE_URL } from "@/lib/links";

/*
 * Term dates and the application volume in one place — they appeared in the
 * banner, the timeline label and the closing paragraph, and a rollover meant
 * finding all three.
 */
const APPLICATIONS_OPEN = "Friday, August 28th, 2026 at 12:00 AM EDT";
const APPLICATIONS_CLOSE = "Saturday, September 12th, 2026 at 11:59 PM EDT";
const APPLICATIONS_PER_TERM = "750+";

/*
 * The department descriptions PDF stands in for /about/operations during the
 * coming-soon build, where that route is not part of the export.
 */
const DEPARTMENT_DESCRIPTIONS_PDF = "/docs/haven-department-descriptions.pdf";

const WHAT_WE_LOOK_FOR = [
  "Commitment and reliability",
  "Passion for serving underserved communities",
  "Teamwork and communication",
  "Spanish language skills are a valued asset",
];

const RECRUITMENT_TIMELINE = [
  {
    label: "Applications open",
    description: `Applications opened ${APPLICATIONS_OPEN} for the fall term and close ${APPLICATIONS_CLOSE}.`,
  },
  {
    label: "Review Period",
    description:
      "Our team carefully reviews every application and conducts intentional pairing based on skills, availability, and clinic needs.",
  },
  {
    label: "Offers & Onboarding",
    description:
      "Selected volunteers are notified and begin training and orientation before their first shift.",
  },
];

const VOLUNTEER_ROLES = [
  {
    icon: Stethoscope,
    title: "Clinical Care",
    description:
      "Assist with patient intake, health screenings, and clinical support under the guidance of licensed professionals.",
  },
  {
    icon: Languages,
    title: "Interpretation",
    description:
      "Help bridge language barriers for our diverse patient population. Spanish speakers are especially needed.",
  },
  {
    icon: ClipboardCheck,
    title: "Operations",
    description:
      "Support day-to-day clinic operations including scheduling, data entry, and administrative tasks.",
  },
  {
    icon: HandHeart,
    title: "Social Services",
    description:
      "Connect patients with community resources, assist with insurance navigation, and provide wellness education.",
  },
];

/*
 * `comingSoon` renders the variant used by the coming-soon build, where
 * /get-involved is the only route that exists. Both "See every department"
 * links point at /about/operations, which that export does not contain, so
 * they give way to the department descriptions PDF.
 */
export function GetInvolvedContent({
  comingSoon = false,
}: {
  comingSoon?: boolean;
}) {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
            HAVEN Free Clinic relies on the dedication of volunteers to
            provide free, high-quality healthcare to uninsured adults in
            Greater New Haven. Whether you're a healthcare professional, a
            student, or simply someone who wants to help, there's a place for
            you at HAVEN.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#volunteer-roles"
              className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#00356b]/90 transition-colors duration-200"
            >
              Ways to volunteer
              <ArrowRight className="w-4 h-4" />
            </a>
            {!comingSoon && (
              <Link
                href="/about/operations"
                className="inline-flex items-center gap-2 border-2 border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#00356b]/5 transition-colors duration-200"
              >
                See every department
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Fall Volunteer Recruitment Banner ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b] px-8 sm:px-12 md:px-16 lg:px-24 py-10 md:py-12 lg:py-14 flex flex-col items-center text-center">
            <h2 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
              Fall Volunteer Recruitment 2026
            </h2>
            <p className="font-['Poppins',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[700px] mb-3">
              Applications for Fall 2026 volunteer positions are{" "}
              <span className="font-bold">open now</span>. We welcome{" "}
              <span className="font-bold">
                students across all health professions and programs, graduate
                students, and college students
              </span>{" "}
              who want to serve uninsured adults in Greater New Haven alongside
              our student-run team.
            </p>
            <p className="font-['Poppins',sans-serif] text-white/90 text-[15px] md:text-[17px] leading-relaxed max-w-[700px] mb-3 border border-white/25 bg-white/10 px-5 py-3.5">
              <span className="font-bold">
                Volunteers must be Yale-affiliated.
              </span>{" "}
              We are not able to accept applications from community members
              without a Yale affiliation. Licensed clinicians interested in
              volunteering as attendings should see Professional Volunteers
              below, which follows a separate process.
            </p>
            <p className="font-['Poppins',sans-serif] text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[700px] mb-8 md:mb-10">
              Applications due{" "}
              <span className="font-bold text-white">{APPLICATIONS_CLOSE}</span>
              . Questions? Email us at{" "}
              <a
                href="mailto:hfc.recruitment@yale.edu"
                className="underline hover:text-white/70 transition-colors"
              >
                hfc.recruitment@yale.edu
              </a>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://apply.havenfreeclinic.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 md:gap-3 hover:bg-gray-100 transition-colors"
              >
                <span className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[16px] sm:text-[18px] md:text-[22px]">
                  Apply Now
                </span>
                <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-[#00356b]" />
              </a>

              {comingSoon && (
                <a
                  href={DEPARTMENT_DESCRIPTIONS_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 md:gap-3 hover:bg-white/15 transition-colors"
                >
                  <span className="font-['Poppins',sans-serif] font-bold text-white text-[16px] sm:text-[18px] md:text-[22px]">
                    Department Descriptions
                  </span>
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Ways to Volunteer ── */}
      <div
        id="volunteer-roles"
        className="scroll-mt-32 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Ways to Volunteer
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            Our volunteers contribute across a wide range of areas to keep the
            clinic running and our patients cared for.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {VOLUNTEER_ROLES.map((role) => (
              <div
                key={role.title}
                className="bg-[#f7f9fc] p-6 md:p-8 border border-[#00356b]/10 hover:border-[#00356b]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5">
                  <role.icon className="w-6 h-6 text-[#00356b]" />
                </div>
                <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2.5">
                  {role.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Our Volunteer Community ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Our Volunteer Community
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            HAVEN is entirely student-run, powered each Saturday by a carefully
            selected team of volunteers. In any given term, we receive{" "}
            {APPLICATIONS_PER_TERM} applications, and we take the time to review
            each one. Those selected
            are paired intentionally based on their skills, background, and the
            needs of our clinic, with support and coordination that extends well
            beyond initial training.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── What We Look For ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            What We Look For
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {WHAT_WE_LOOK_FOR.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-[#f7f9fc] p-5 md:p-6 border border-[#00356b]/10"
              >
                <CheckCircle2 className="w-6 h-6 text-[#00356b] shrink-0 mt-0.5" />
                <span className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Who Volunteers With Us ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[#00356b]" />
            </div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Who Volunteers With Us
            </h2>
          </div>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-4">
            <p>
              Our team includes students across all health professions and
              programs, graduate students, and college students: medical,
              nursing, physician associate, public health, and pre-health
              students, alongside non-clinical volunteers in administrative and
              support roles.
            </p>
            <p>
              <span className="font-semibold text-[#00356b]">
                All volunteers must be Yale-affiliated.
              </span>{" "}
              We are not able to place community members without a Yale
              affiliation. The one separate route is Professional Volunteers
              below: licensed clinicians who serve as attendings go through
              credentialing rather than the student application.
            </p>
            <p>
              Curious what the departments actually do?{" "}
              {comingSoon ? (
                <a
                  href={DEPARTMENT_DESCRIPTIONS_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00356b] font-semibold underline hover:no-underline"
                >
                  Every one of them is described here
                </a>
              ) : (
                <Link
                  href="/about/operations"
                  className="text-[#00356b] font-semibold underline hover:no-underline"
                >
                  Every one of them is described here
                </Link>
              )}
              .
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Clinical Supervision ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#00356b]" />
            </div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Clinical Supervision
            </h2>
          </div>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Every clinical encounter at HAVEN is supervised by licensed attending
            physicians and registered nurses who volunteer their time to our
            clinic. Our Saturday clinics in primary care and reproductive health
            are staffed by faculty attendings, alongside RNs and specialty clinic
            preceptors. They are all community providers who believe in this
            mission. Their oversight ensures every patient receives safe,
            professional-standard care.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Recruitment Timeline ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Recruitment Timeline
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            Because of the volume and care involved in our selection process,
            recruitment follows a structured timeline each term:
          </p>

          <div className="space-y-5 md:space-y-6">
            {RECRUITMENT_TIMELINE.map((step) => (
              <div
                key={step.label}
                className="flex items-start gap-4 md:gap-5 bg-[#f7f9fc] p-6 md:p-7 border border-[#00356b]/10"
              >
                <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-[#00356b]" />
                </div>
                <div>
                  <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[17px] sm:text-[19px] md:text-[21px] mb-1.5">
                    {step.label}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 flex items-start gap-3 md:gap-4 border-l-4 border-[#00356b] bg-[#f7f9fc] p-6 md:p-7">
            <Clock className="w-6 h-6 text-[#00356b] shrink-0 mt-0.5" />
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
              We ask that all applicants please be patient during this process.
              With {APPLICATIONS_PER_TERM} applications to review, we give every candidate the
              thoughtful consideration they deserve, and that takes time. We
              appreciate your understanding and your interest in HAVEN&rsquo;s
              mission. We continue to review applications on a rolling basis even
              after training begins, so if you do not hear from us right away,
              your application remains under consideration.
            </p>
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mt-8 md:mt-10">
            <span className="font-semibold text-[#00356b]">
              Interested in volunteering?
            </span>{" "}
            Applications for our Fall 2026 cycle are open now and close{" "}
            {APPLICATIONS_CLOSE}.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Professional Volunteers ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Professional Volunteers
          </h2>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              Professional volunteers act as volunteer attending clinicians at
              HAVEN, and are integral to the function and success of the
              clinic. Faculty preceptors guide teams of students in the
              evaluation and treatment of patients, giving them an opportunity
              to mentor students across the disciplines of medicine.
            </p>
            <p>
              In order to become a medical preceptor at the HAVEN Free Clinic,
              we ask that you complete a credentialing and privileging process,
              and provide a recommendation from a current Yale faculty member.
              If necessary, we will work with you to find a Yale faculty member
              that can provide a recommendation on your behalf.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:haven.free.clinic@yale.edu"
              className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#00356b]/90 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Contact Us to Learn More
            </a>
            <p className="font-['Poppins',sans-serif] text-black/50 text-[14px] mt-3">
              Email us at{" "}
              <a
                href="mailto:haven.free.clinic@yale.edu"
                className="text-[#00356b] underline hover:text-[#002a56]"
              >
                haven.free.clinic@yale.edu
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Thank You ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b] px-6 md:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <div className="flex items-center gap-4 mb-5 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[32px] lg:text-[34px]">
                Thank You to Our Volunteers
              </h2>
            </div>
            <div className="font-['Poppins',sans-serif] text-white/90 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-4 max-w-[760px]">
              <p>
                Every Saturday, hundreds of people choose to spend their morning
                here, for neighbors they have never met. Students who answer
                phones after class. Interpreters who stay late so a patient
                feels heard. Navigators who chase down a referral on a Tuesday
                because nobody else was going to.
              </p>
              <p>
                <span className="font-semibold text-white">
                  Our attending physicians and nurses are volunteers too.
                </span>{" "}
                Every clinical encounter at HAVEN is supervised by a licensed
                attending who is not paid to be here. They give up their
                weekends, they teach while they supervise, and they stay long
                after clinic ends to answer one more question. The clinic simply
                could not open its doors without them.
              </p>
              <p>
                To every volunteer, student and clinician alike:{" "}
                <span className="font-semibold text-white">
                  thank you for your time, your expertise, and your support.
                </span>{" "}
                Everything HAVEN accomplishes is possible because you do it
                together.
              </p>
            </div>
            {comingSoon ? (
              <a
                href={DEPARTMENT_DESCRIPTIONS_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 mt-8 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#d6e8f7] transition-colors"
              >
                See the departments they staff
                <FileText className="w-4 h-4 shrink-0" />
              </a>
            ) : (
              <Link
                href="/about/operations"
                className="group inline-flex items-center gap-2 mt-8 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#d6e8f7] transition-colors"
              >
                See every department they staff
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── Other Ways to Support ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-14 lg:pt-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-8 md:mb-10">
            Other Ways to Support HAVEN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Donate */}
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 border border-[#00356b]/10 hover:border-[#00356b]/20 hover:shadow-md transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5 group-hover:bg-[#00356b]/15 transition-colors duration-200">
                <Gift className="w-7 h-7 text-[#00356b]" />
              </div>
              <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
                Make a Donation
              </h3>
              <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-4">
                Donations pay for our patients&apos; medications, lab tests, and
                specialist visits. Gifts are made through Yale and designated to
                HAVEN.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] group-hover:gap-2.5 transition-all duration-200">
                Donate Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Spread the Word */}
            <div className="flex flex-col items-center text-center p-8 border border-[#00356b]/10">
              <div className="w-16 h-16 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5">
                <Megaphone className="w-7 h-7 text-[#00356b]" />
              </div>
              <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
                Spread the Word
              </h3>
              <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                Share information about HAVEN with friends, family, and your
                community. Help us reach more patients and potential volunteers who
                can benefit from our services.
              </p>
            </div>

            {/* Refer a Patient */}
            <div className="flex flex-col items-center text-center p-8 border border-[#00356b]/10">
              <div className="w-16 h-16 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5">
                <Heart className="w-7 h-7 text-[#00356b]" />
              </div>
              <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
                Refer a Patient
              </h3>
              <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                Know someone who is uninsured and needs primary care? Let them know
                about HAVEN. Call us at{" "}
                <span className="font-semibold text-[#00356b]">
                  (203) 200-0673
                </span>{" "}
                to schedule an appointment.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
