import {
  Heart,
  Stethoscope,
  Languages,
  ClipboardCheck,
  HandHeart,
  ExternalLink,
  Gift,
  Megaphone,
  Mail,
  ArrowRight,
  BriefcaseMedical,
} from "lucide-react";

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

export function GetInvolvedContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Get Involved
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
            HAVEN Free Clinic relies on the dedication of volunteers to
            provide free, high-quality healthcare to uninsured adults in
            Greater New Haven. Whether you're a healthcare professional, a
            student, or simply someone who wants to help, there's a place for
            you at HAVEN.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://airtable.com/appsXFzmnfi5vWzrJ/pagPgGdWKWz6Q9KVd/form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#4a90c4] transition-colors duration-200"
            >
              Apply to Volunteer
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://give.yale.edu/haven"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#00356b]/5 transition-colors duration-200"
            >
              Donate
              <Gift className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Ways to Volunteer ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Ways to Volunteer
          </h3>
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
                <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2.5">
                  {role.title}
                </h4>
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

      {/* ── Become a Volunteer CTA ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b] px-8 sm:px-12 md:px-16 lg:px-24 py-10 md:py-12 lg:py-14 flex flex-col items-center text-center">
            <h3 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
              Become a Volunteer
            </h3>
            <p className="font-['Poppins',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[700px] mb-4">
              HAVEN welcomes applications from all interested individuals for
              the Summer term. To best support patient care and clinic
              operations, we will be prioritizing applicants who speak Spanish
              and/or have clinical experience.
            </p>
            <p className="font-['Poppins',sans-serif] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[700px] mb-8 md:mb-10">
              Those interested in being considered should submit our interest
              form below. We appreciate your interest and patience and look
              forward to learning more about you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-4 py-2 font-['Poppins',sans-serif] text-white text-[14px]">
                <Languages className="w-4 h-4" />
                Spanish speakers prioritized
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-4 py-2 font-['Poppins',sans-serif] text-white text-[14px]">
                <Stethoscope className="w-4 h-4" />
                Clinical experience a plus
              </span>
            </div>

            <a
              href="https://airtable.com/appsXFzmnfi5vWzrJ/pagPgGdWKWz6Q9KVd/form"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 md:gap-3 hover:bg-gray-100 transition-colors"
            >
              <span className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
                Submit Interest Form
              </span>
              <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-[#00356b]" />
            </a>
          </div>
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
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Professional Volunteers
          </h3>
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
              className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#4a90c4] transition-colors duration-200"
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

      {/* ── Other Ways to Support ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-8 md:mb-10">
            Other Ways to Support HAVEN
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Donate */}
            <a
              href="https://give.yale.edu/haven"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 border border-[#00356b]/10 hover:border-[#00356b]/20 hover:shadow-md transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5 group-hover:bg-[#00356b]/15 transition-colors duration-200">
                <Gift className="w-7 h-7 text-[#00356b]" />
              </div>
              <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
                Make a Donation
              </h4>
              <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-4">
                Your financial contribution helps us provide free healthcare to
                those who need it most. Every dollar makes a difference.
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
              <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
                Spread the Word
              </h4>
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
              <h4 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
                Refer a Patient
              </h4>
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

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Newsletter Section ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-14 lg:pt-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Join Our Newsletter
          </h3>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            Stay up to date with HAVEN Free Clinic news, events, and
            volunteer opportunities delivered straight to your inbox.
          </p>

          <div className="bg-white border border-[#00356b]/10 shadow-sm overflow-hidden">
            <iframe
              className="w-full border-0"
              src="https://airtable.com/embed/appkxTQ19GmaHgW1O/pagwVN7TdJAjQJN53/form"
              height="533"
              style={{ background: "transparent" }}
              title="HAVEN Newsletter Signup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
