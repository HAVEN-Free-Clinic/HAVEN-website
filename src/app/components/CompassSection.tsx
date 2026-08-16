import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

/*
 * Home-page summary of the Compass Program. The full version, including the
 * partner clinics patients transition to, lives in SocialServicesContent.
 */

const STAGES = [
  {
    step: "While you are here",
    body: "Your care team gets to know your health over multiple visits instead of starting from scratch each time.",
  },
  {
    step: "Along the way",
    body: "We connect you with specialists, community resources, and help applying for coverage you may not know you qualify for.",
  },
  {
    step: "When you are ready",
    body: "We hand you off to a permanent primary care provider who is open during the week, and we help make that first appointment.",
  },
];

export function CompassSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00356b] px-6 md:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <div className="flex items-center gap-4 mb-5 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="font-['Merriweather',serif] font-bold text-white text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px]">
                The Compass Program
              </h2>
            </div>

            <p className="font-['Poppins',sans-serif] text-white/90 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
              A Saturday clinic staffed by students should not be anyone&apos;s
              doctor forever. Compass is how we make sure it is not. We follow a
              three to five year plan that ends with you having coverage and a
              permanent provider of your own.
            </p>

            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
              {STAGES.map((stage, i) => (
                <li
                  key={stage.step}
                  className="bg-white/10 border border-white/15 px-5 py-6"
                >
                  <span className="font-['Merriweather',serif] font-bold text-white/30 text-[32px] md:text-[38px] leading-none block mb-3">
                    {i + 1}
                  </span>
                  <p className="font-['Poppins',sans-serif] font-semibold text-white text-[15px] md:text-[16px] mb-2">
                    {stage.step}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-white/80 text-[14px] md:text-[15px] leading-relaxed">
                    {stage.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/services/social-services#compass"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#d6e8f7] transition-colors"
              >
                How Compass works
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/services/social-services#after-haven"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors"
              >
                Where you go after HAVEN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
