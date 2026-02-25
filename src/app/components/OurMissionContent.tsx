import Link from "next/link";
import {
  Heart,
  GraduationCap,
  Eye,
  Users,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

export function OurMissionContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* ── Our Mission ── */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Our Mission
          </h2>

          <div className="flex flex-col gap-6 max-w-[900px]">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
                <Heart className="w-5 h-5 text-[#00356b]" />
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                We aim to serve uninsured adults in New Haven by providing safe,
                high-quality primary care, wellness education, and social
                services, and acting as an avenue toward more sustainable
                healthcare destinations.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap className="w-5 h-5 text-[#00356b]" />
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                HAVEN also hopes to educate Yale students about the value of
                working in healthcare, to allow students to gain experience in
                community health through partnership with patients and
                professionals, to promote continuous quality improvement through
                scholarly efforts, and to expose students to patient care
                management with limited resources.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-16 md:mb-20" />

        {/* ── Our Vision ── */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Our Vision
          </h2>

          <div className="flex flex-col gap-6 max-w-[900px]">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
                <Eye className="w-5 h-5 text-[#00356b]" />
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                Every adult living in New Haven will have access to comprehensive
                quality healthcare.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap className="w-5 h-5 text-[#00356b]" />
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                Students will develop a lifelong commitment to valuing social
                context and community needs in their future work with patients
                and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-16 md:mb-20" />

        {/* ── Who We Serve ── */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Who We Serve
          </h2>

          <div className="flex items-start gap-4 max-w-[900px] mb-8">
            <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
              <Users className="w-5 h-5 text-[#00356b]" />
            </div>
            <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
              HAVEN Free Clinic provides care to uninsured adults aged 18–65 in
              the Greater New Haven area who do not have a primary care provider.
            </p>
          </div>

          <Link
            href="/eligibility"
            className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
          >
            See If You Qualify
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-16 md:mb-20" />

        {/* ── How We Operate ── */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            How We Operate
          </h2>

          <div className="flex flex-col gap-6 max-w-[900px] mb-10">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5 text-[#00356b]" />
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                HAVEN operates on{" "}
                <span className="font-semibold">Saturdays (9am–12pm)</span> out
                of the{" "}
                <span className="font-semibold">
                  Yale Physicians Building
                </span>
                . Patients are seen by teams of senior and junior students with
                guidance from faculty preceptors. Currently, we see an average of{" "}
                <span className="font-semibold">70 patients per week</span>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
                <Heart className="w-5 h-5 text-[#00356b]" />
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                We are able to do this work through generous contributions from
                students, faculty, and philanthropic donors. We are especially
                fortunate to have the support of the{" "}
                <Link
                  href="/about/endowment"
                  className="text-[#00356b] underline font-semibold hover:opacity-80 transition-opacity"
                >
                  Dr. John B. Goetsch Endowment
                </Link>
                , which has provided incredible support to the clinic for many
                years.
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[900px]">
            <div className="bg-[#f7f9fc] border border-[#00356b]/10 px-6 py-5 flex flex-col items-center text-center">
              <Clock className="w-6 h-6 text-[#00356b] mb-2" />
              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px]">
                Saturdays
              </p>
              <p className="font-['Poppins',sans-serif] text-[#00356b]/70 text-[14px]">
                9:00 AM – 12:00 PM
              </p>
            </div>
            <div className="bg-[#f7f9fc] border border-[#00356b]/10 px-6 py-5 flex flex-col items-center text-center">
              <MapPin className="w-6 h-6 text-[#00356b] mb-2" />
              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px]">
                Location
              </p>
              <p className="font-['Poppins',sans-serif] text-[#00356b]/70 text-[14px]">
                Yale Physicians Building
              </p>
            </div>
            <div className="bg-[#f7f9fc] border border-[#00356b]/10 px-6 py-5 flex flex-col items-center text-center">
              <Phone className="w-6 h-6 text-[#00356b] mb-2" />
              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px]">
                Appointments
              </p>
              <a
                href="tel:2032000673"
                className="font-['Poppins',sans-serif] text-[#00356b]/70 text-[14px] hover:underline"
              >
                (203) 200-0673
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
