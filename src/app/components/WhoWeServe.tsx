import Link from "next/link";
import { User, MapPin, ShieldCheck, Stethoscope } from "lucide-react";
import { CATCHMENT_TOWNS } from "@/lib/catchment";

const criteria = [
  { icon: User, text: "Between 18 and 65 years old" },
  { icon: MapPin, text: "Reside in the Greater New Haven area" },
  { icon: ShieldCheck, text: "Currently uninsured" },
  { icon: Stethoscope, text: "Do not have a primary care provider" },
];

export function WhoWeServe() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Who We Serve
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            HAVEN Free Clinic provides care to adults in the Greater New Haven
            area who meet the following criteria:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
            {criteria.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-[#f7f9fc] border border-[#00356b]/10 px-5 py-4 md:px-6 md:py-5"
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00356b] shrink-0" />
                <span className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/*
            "Greater New Haven" is the criterion patients most often get wrong,
            in both directions: people in Meriden or Madison assume they are too
            far out to call, and people well outside the area make the trip for
            nothing. Naming the towns is the only version of this that actually
            answers the question. Rendered from CATCHMENT_TOWNS in lib/catchment
            so this grid and the FAQ answer can never disagree.
          */}
          <div
            id="catchment-area"
            className="scroll-mt-32 bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-6 md:p-8 mb-10 md:mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#00356b] shrink-0" />
              <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] sm:text-[20px] md:text-[22px]">
                What counts as Greater New Haven?
              </h3>
            </div>
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-5">
              Our catchment area is the set of towns we draw patients from. If
              you live in any of these {CATCHMENT_TOWNS.length} towns, you meet
              the location criterion:
            </p>
            <ul className="flex flex-wrap gap-2 md:gap-2.5">
              {CATCHMENT_TOWNS.map((town) => (
                <li
                  key={town}
                  className="font-['Poppins',sans-serif] text-[#00356b] text-[13px] sm:text-[14px] md:text-[15px] bg-white border border-[#00356b]/20 px-3 py-1.5"
                >
                  {town}
                </li>
              ))}
            </ul>
            <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] sm:text-[15px] leading-relaxed mt-5">
              Not on the list but nearby? Call us at{" "}
              <a
                href="tel:2032000673"
                className="text-[#00356b] underline hover:opacity-80"
              >
                (203) 200-0673
              </a>{" "}
              anyway. We would rather talk it through than have you assume the
              answer is no.
            </p>
          </div>

          <Link
            href="/eligibility"
            className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#00356b]/90 transition-colors"
          >
            Check Your Eligibility
          </Link>
        </div>
      </div>
    </section>
  );
}
