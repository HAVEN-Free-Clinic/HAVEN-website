import Link from "next/link";
import { FREE_CARE_TERM } from "@/lib/free-care";

/*
 * What YNHH Free Care is, stated once.
 *
 * It had been written out independently on /eligibility, /services/referrals,
 * and twice on /services/debt-insurance — and the copies disagreed on the thing
 * that matters most. Two of them said Free Care is "open to anyone regardless
 * of income", which reads as "you will be approved"; the page that actually
 * walks the application says approval turns on household income and requires
 * proof of it. The wording below is the accurate version: anyone may apply,
 * approval is income-based.
 */

const POINTS: { lead: string; body: React.ReactNode }[] = [
  {
    lead: "It is charity care, not insurance.",
    body: `There is no card. You apply, show proof of income, and are approved for roughly ${FREE_CARE_TERM} before renewing.`,
  },
  {
    lead: "Anyone can apply.",
    body: "Approval is based on your household income and size, but there is no insurance requirement and immigration status does not disqualify you.",
  },
  {
    lead: "It covers Yale New Haven Health only.",
    body: "Not Fair Haven, Cornell Scott, or other community health centers.",
  },
  {
    lead: "It works on bills you already have.",
    body: "Free Care can be applied retroactively, so an existing hospital bill is a reason to apply rather than a reason not to.",
  },
];

export function FreeCareSummary() {
  return (
    <div className="bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-6 md:p-8">
      <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-4">
        What Free Care is
      </h3>
      <ul className="list-disc pl-6 space-y-2.5 font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
        {POINTS.map((p) => (
          <li key={p.lead}>
            <span className="font-semibold">{p.lead}</span> {p.body}
          </li>
        ))}
      </ul>
      <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mt-5">
        Our Medical Debt &amp; Insurance Counseling team will walk you through
        the application the first time. See the{" "}
        <Link
          href="/services/debt-insurance"
          className="text-[#00356b] font-semibold underline hover:no-underline"
        >
          step-by-step Free Care guide
        </Link>{" "}
        for the whole form, section by section.
      </p>
    </div>
  );
}
