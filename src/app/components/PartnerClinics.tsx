import { Phone, ExternalLink } from "lucide-react";
import { PARTNER_CLINICS } from "@/lib/partner-clinics";

/**
 * The two community health centers, rendered as cards.
 *
 * `compact` drops the long description for pages that only need the names and
 * numbers (e.g. the "if HAVEN isn't the right fit" block on /eligibility, which
 * sits a few hundred pixels from a fuller treatment of the same two clinics).
 */
export function PartnerClinics({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
      {PARTNER_CLINICS.map((clinic) => (
        <div
          key={clinic.name}
          className="bg-[#f7f9fc] border border-[#00356b]/10 p-6 md:p-7 flex flex-col"
        >
          <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[17px] md:text-[20px] mb-2.5">
            {clinic.name}
          </h3>
          <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-5 flex-1">
            {compact ? clinic.short : clinic.description}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`tel:${clinic.tel}`}
              className="inline-flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] hover:underline"
            >
              <Phone className="w-4 h-4 shrink-0" />
              {clinic.phone}
            </a>
            <a
              href={clinic.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[15px] md:text-[16px] underline hover:no-underline"
            >
              Visit website
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
