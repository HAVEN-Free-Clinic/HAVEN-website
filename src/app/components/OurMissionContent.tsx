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
      {/* Wide container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">

        {/* Centered content column */}
        <div className="max-w-4xl mx-auto">

          {/* ── Our Mission ── */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
              Our Mission
            </h2>

            <div className="flex flex-col gap-6">
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
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
              Our Vision
            </h2>

            <div className="flex flex-col gap-6">
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
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
              Who We Serve
            </h2>

            <div className="flex items-start gap-4 mb-8">
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
              className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold rounded-full text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
            >
              See If You Qualify
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#00356b]/10 mb-16 md:mb-20" />

          {/* ── How We Operate ── */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
              How We Operate
            </h2>

            <div className="flex flex-col gap-6 mb-10">
              {/* content unchanged */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* cards unchanged */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
