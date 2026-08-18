import Link from "next/link";
import { CLINIC_HOURS, COST_SHARING_SUMMARY } from "@/lib/site";

/*
 * Every fact in this section is stated elsewhere on the site (FAQs, Visitor
 * Guide, Get Involved, Medication). If one changes there, change it here too.
 */

const FACTS = [
  {
    label: "Who sees you",
    body: "Students from the Yale School of Medicine, School of Nursing, School of Public Health, and the Physician Associate Program, in collaboration with Yale Medicine.",
  },
  {
    label: "Who supervises",
    body: "A licensed attending physician oversees every clinical encounter and reviews your care before you leave.",
  },
  {
    label: "When we are open",
    body: `Saturday mornings, ${CLINIC_HOURS}. That is the whole clinic. We are not open on weekdays or after hours.`,
  },
  {
    label: "What it costs",
    body: `Your visit is free and HAVEN never bills you for it. ${COST_SHARING_SUMMARY} Labs, imaging, or specialist care we arrange for you can still generate a bill from Yale New Haven Health — bring it to us before you pay it.`,
  },
  {
    label: "What we cannot do",
    body: "We are not an emergency room, and we do not provide surgery, imaging, or prenatal care. When something is outside what we can treat safely, we refer you and help you get there.",
  },
];

export function TransparencyStatement() {
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
            We are a student-run free clinic
          </h2>

          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-10 md:mb-12">
            We think you should know exactly what that means before you walk in
            the door, so here it is in plain terms.
          </p>

          <dl className="border-t border-[#00356b]/10">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-8 border-b border-[#00356b]/10 py-5 md:py-6"
              >
                <dt className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px]">
                  {fact.label}
                </dt>
                <dd className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                  {fact.body}
                </dd>
              </div>
            ))}
          </dl>

          <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mt-8">
            Being a teaching clinic is why we can be free, and it is also why we
            are careful about what we take on.{" "}
            <Link
              href="/services/scope-of-care"
              className="text-[#00356b] font-semibold underline hover:no-underline"
            >
              Read our full scope of care
            </Link>
            , or{" "}
            <Link
              href="/visitor-guide"
              className="text-[#00356b] font-semibold underline hover:no-underline"
            >
              the visitor guide
            </Link>{" "}
            for what a Saturday at HAVEN actually looks like.
          </p>
        </div>
      </div>
    </section>
  );
}
