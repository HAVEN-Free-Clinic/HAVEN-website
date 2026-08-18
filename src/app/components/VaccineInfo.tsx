import Link from "next/link";
import { BrandText } from "@/app/components/BrandText";
import { VACCINES } from "@/lib/vaccines";

/*
 * The vaccine block — the list, the established-patient rule, and the
 * COVID/flu exclusion — was written out twice, on /services/patient-care and on
 * /services/education. Both copies carried the same safety-relevant claim about
 * who can receive a vaccine, which is exactly the kind of sentence that must
 * not be maintained in two places.
 *
 * /services/patient-care is the clinical home for it. /services/education links
 * here instead of restating it.
 */

export function VaccineInfo() {
  return (
    <div className="space-y-4 md:space-y-6">
      <p>
        Vaccines are one of the safest, most effective ways to prevent serious
        illness. They help your immune system recognize and fight specific
        infections before you ever get sick. We offer{" "}
        <span className="font-medium">
          several routine and preventive vaccines in clinic
        </span>{" "}
        to help protect your health.{" "}
        <span className="font-medium">
          Vaccine availability varies. Please ask your provider about what is
          currently in stock.
        </span>
      </p>

      <div className="bg-[#00356b]/5 border-l-4 border-[#00356b] p-4 md:p-5">
        <p>
          <span className="font-semibold text-[#00356b]">
            You must be an established HAVEN patient to receive a vaccine.
          </span>{" "}
          Vaccines are offered as part of your ongoing care at the clinic. We
          are not able to provide standalone or walk-in vaccine-only visits. If
          you are not yet a patient,{" "}
          <Link
            href="/eligibility"
            className="text-[#00356b] underline hover:text-[#00356b]/70"
          >
            see our eligibility information
          </Link>{" "}
          to establish care first.
        </p>
      </div>

      <p className="font-medium">Vaccines Available at HAVEN</p>
      <ul className="list-disc pl-8 md:pl-12 space-y-1">
        {VACCINES.map((vaccine) => (
          <li key={vaccine}>
            <BrandText>{vaccine}</BrandText>
          </li>
        ))}
      </ul>

      <p className="font-medium">COVID-19 &amp; Flu Vaccines</p>
      <ul className="list-disc pl-8 md:pl-12 space-y-1">
        <li>
          <span className="font-semibold">
            HAVEN does not carry COVID-19 or flu vaccines.
          </span>{" "}
          We are not able to give you either one at the clinic. Visit{" "}
          <a
            href="https://www.vaccines.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#00356b]/70 transition-colors"
          >
            vaccines.gov
          </a>{" "}
          to find a location near you that offers them.
        </li>
      </ul>

      <p className="font-medium">
        If you are interested in receiving a vaccine or have questions about
        which vaccines you may need, please ask your provider.
      </p>
    </div>
  );
}
