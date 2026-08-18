import Link from "next/link";
import { CalendarX, Phone } from "lucide-react";

/*
 * The no-show policy also appears in the Visitor Guide (full version), the
 * FAQs, and MyChart. Keep the "3 or more consecutive" threshold identical in
 * all four places.
 */

export function AppointmentPolicy() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <CalendarX className="w-6 h-6 text-[#00356b]" />
            </div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px]">
              If you cannot make it, call us
            </h2>
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-6">
            We only see patients on Saturday mornings, and there is a waiting
            list for every slot. When someone misses an appointment without
            telling us, that time cannot go to anyone else.
          </p>

          <div className="bg-[#00356b]/5 border-l-4 border-[#00356b] px-5 py-5 md:px-6 md:py-6">
            <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
              <span className="font-semibold">Our no-show policy:</span> if you
              miss{" "}
              <span className="font-semibold">
                3 or more appointments in a row
              </span>{" "}
              without letting us know, we will not be able to reschedule you at
              HAVEN.
            </p>
          </div>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mt-6">
            Cancelling is easy and there is no penalty for it. Reply to the
            automated appointment reminder you receive, or call us as soon as you
            know, even if it is the morning of, and we will find you another
            time.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
            <a
              href="tel:2032000673"
              className="inline-flex items-center justify-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[17px] px-7 py-3.5 hover:bg-[#00356b]/90 transition-colors"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              (203) 200-0673
            </a>
            <Link
              href="/visitor-guide#no-show-policy"
              className="inline-flex items-center justify-center border border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[17px] px-7 py-3.5 hover:bg-[#00356b] hover:text-white transition-colors"
            >
              Read the full policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
