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
    <div className="bg-white w-full">
      {/* ── Intro Section ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6">
              Make a Difference in Your Community
            </h2>
            <p className="font-['Poppins',sans-serif] text-black/75 text-[16px] md:text-[18px] leading-relaxed mb-6">
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
          <div className="overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1758205307876-334bb810a63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdm9sdW50ZWVycyUyMHRlYW0lMjBoZWxwaW5nJTIwY29tbXVuaXR5JTIwY2xpbmljfGVufDF8fHx8MTc3MTEyMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Volunteers helping at a community health clinic"
              className="w-full h-[300px] md:h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Volunteer Roles ── */}
      <section className="bg-[#f7f9fb] w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="mb-12 md:mb-14">
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4">
              Ways to Volunteer
            </h2>
            <p className="font-['Poppins',sans-serif] text-black/60 text-[16px] md:text-[18px] max-w-[650px]">
              Our volunteers contribute across a wide range of areas to keep the
              clinic running and our patients cared for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {VOLUNTEER_ROLES.map((role) => (
              <div
                key={role.title}
                className="bg-white p-6 md:p-8 border border-[#00356b]/8 hover:border-[#00356b]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5">
                  <role.icon className="w-6 h-6 text-[#00356b]" />
                </div>
                <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2.5">
                  {role.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black/65 text-[15px] md:text-[16px] leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application CTA ── */}
      <section className="w-full bg-[#d6e8f7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#00356b]" />
                </div>
                <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                  Become a Volunteer
                </h2>
              </div>
              <p className="font-['Poppins',sans-serif] text-[#00356b]/85 text-[16px] md:text-[18px] leading-relaxed mb-6">
                HAVEN welcomes applications from all interested individuals for
                the Summer term. To best support patient care and clinic
                operations, we will be prioritizing applicants who speak Spanish
                and/or have clinical experience.
              </p>
              <p className="font-['Poppins',sans-serif] text-[#00356b]/85 text-[16px] md:text-[18px] leading-relaxed mb-8">
                Those interested in being considered should submit our interest
                form below. We appreciate your interest and patience and look
                forward to learning more about you.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-[#00356b]/10 px-4 py-2 font-['Poppins',sans-serif] text-[#00356b] text-[14px]">
                  <Languages className="w-4 h-4" />
                  Spanish speakers prioritized
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#00356b]/10 px-4 py-2 font-['Poppins',sans-serif] text-[#00356b] text-[14px]">
                  <Stethoscope className="w-4 h-4" />
                  Clinical experience a plus
                </span>
              </div>

              <a
                href="https://airtable.com/appsXFzmnfi5vWzrJ/pagPgGdWKWz6Q9KVd/form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-8 py-4 hover:bg-[#4a90c4] transition-colors duration-200 shadow-lg"
              >
                Submit Interest Form
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-2 hidden lg:block">
              <div className="overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1723649388532-358b56dda065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdm9sdW50ZWVycyUyMHRlYW13b3JrJTIwbm9ucHJvZml0JTIwc21pbGluZ3xlbnwxfHx8fDE3NzExMjEyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diverse group of volunteers"
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Volunteers ── */}
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6079e7ffe4027e04eed212ed/5a82eeb6-5735-494a-bc45-fa3724a16c42/bbb9f2ea-db33-41be-9ab2-9786d57f7470.jpeg"
                alt="Professional volunteers at HAVEN Free Clinic"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
                  <BriefcaseMedical className="w-5 h-5 text-[#00356b]" />
                </div>
                <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                  Professional Volunteers
                </h2>
              </div>

              <p className="font-['Poppins',sans-serif] text-black/75 text-[16px] md:text-[18px] leading-relaxed mb-5">
                Professional volunteers act as volunteer attending clinicians at
                HAVEN, and are integral to the function and success of the
                clinic. Faculty preceptors guide teams of students in the
                evaluation and treatment of patients, giving them an opportunity
                to mentor students across the disciplines of medicine.
              </p>

              <p className="font-['Poppins',sans-serif] text-black/75 text-[16px] md:text-[18px] leading-relaxed mb-8">
                In order to become a medical preceptor at the HAVEN Free Clinic,
                we ask that you complete a credentialing and privileging process,
                and provide a recommendation from a current Yale faculty member.
                If necessary, we will work with you to find a Yale faculty member
                that can provide a recommendation on your behalf.
              </p>

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
      </section>

      {/* ── Other Ways to Help ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10 md:mb-12">
          Other Ways to Support HAVEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Donate */}
          <a
            href="https://give.yale.edu/haven"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 border border-[#00356b]/10 hover:border-[#00356b]/25 hover:shadow-lg transition-all duration-200"
          >
            <div className="w-16 h-16 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5 group-hover:bg-[#00356b]/15 transition-colors duration-200">
              <Gift className="w-7 h-7 text-[#00356b]" />
            </div>
            <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
              Make a Donation
            </h3>
            <p className="font-['Poppins',sans-serif] text-black/60 text-[15px] md:text-[16px] leading-relaxed mb-4">
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
            <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-3">
              Spread the Word
            </h3>
            <p className="font-['Poppins',sans-serif] text-black/60 text-[15px] md:text-[16px] leading-relaxed">
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
            <p className="font-['Poppins',sans-serif] text-black/60 text-[15px] md:text-[16px] leading-relaxed">
              Know someone who is uninsured and needs primary care? Let them know
              about HAVEN. Call us at{" "}
              <span className="font-semibold text-[#00356b]">
                (203) 200-0673
              </span>{" "}
              to schedule an appointment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="bg-[#f7f9fb] w-full">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="mb-8 md:mb-10">
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4">
              Join Our Newsletter
            </h2>
            <p className="font-['Poppins',sans-serif] text-black/60 text-[16px] md:text-[18px] max-w-[550px]">
              Stay up to date with HAVEN Free Clinic news, events, and
              volunteer opportunities delivered straight to your inbox.
            </p>
          </div>

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
      </section>
    </div>
  );
}