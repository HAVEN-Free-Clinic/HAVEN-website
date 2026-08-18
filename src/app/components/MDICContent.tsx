"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Download,
  ArrowDown,
  Stethoscope,
  Building2,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { FreeCareGuide } from "@/app/components/FreeCareGuide";
import { BrandText } from "@/app/components/BrandText";
import { ACCESS_HEALTH_CT_URL } from "@/lib/links";
import {
  FREE_CARE_PROCESSING,
  FREE_CARE_TERM,
  YNHH_BILLING,
  MDIC_CONTACT,
} from "@/lib/free-care";
/* ─── Language Dropdown for PDFs ─── */

interface LanguageDoc {
  label: string;
  href: string;
}

function LanguageDownloadDropdown({
  docs,
  buttonLabel,
}: {
  docs: LanguageDoc[];
  buttonLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="inline-block">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 border border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] px-5 py-3 hover:bg-[#00356b]/5 transition-colors"
      >
        <Download className="w-4 h-4 shrink-0" />
        {buttonLabel}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-1 bg-white shadow-xl border border-gray-200 py-1 min-w-[200px]">
          {docs.map((doc) => (
            <a
              key={doc.label}
              href={doc.href}
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 font-['Poppins',sans-serif] text-[14px] text-gray-700 hover:bg-[#00356b]/10 hover:text-[#00356b] transition-colors"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              {doc.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Resource Dropdown ─── */

interface ResourceDropdownProps {
  title: string;
  children: React.ReactNode;
}

function ResourceDropdown({ title, children }: ResourceDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#00356b]/20">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 cursor-pointer hover:bg-[#00356b]/5 transition-colors"
      >
        <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] sm:text-[20px] md:text-[22px]">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 md:w-6 md:h-6 text-[#00356b] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[2000px] visible" : "max-h-0 invisible"
        }`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export function MDICContent() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Navigating insurance and medical bills can be overwhelming. HAVEN&apos;s{" "}
            <span className="font-bold">
              Medical Debt &amp; Insurance Counseling (MDIC)
            </span>{" "}
            department is here to help. MDIC is an internal HAVEN department
            staffed by trained volunteers who can assist you with applications,
            bills, and insurance questions{" "}
            <span className="font-bold">at no cost to you</span>.
          </p>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mt-4 bg-[#00356b]/5 border-l-4 border-[#00356b] px-5 py-4 space-y-3">
            <p>
              <span className="font-bold">Plan for the wait.</span> YNHH takes
              about <span className="font-bold">{FREE_CARE_PROCESSING}</span> to
              process a Free Care application, and the same again for a renewal.
              Coverage lasts {FREE_CARE_TERM}, so start your renewal well before
              your current approval expires rather than after.
            </p>
            <p>
              <span className="font-bold">
                Answer the phone while you are waiting.
              </span>{" "}
              YNHH staff may call you to verify what you put on the application
              or to ask for a document. An unanswered call is one of the most
              common reasons an application stalls, so pick up numbers you do not
              recognize during this period, and check your mail.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Blue Contact / Billing Guide Box ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
        <div className="bg-[#00356b]/10 border border-[#00356b]/20 px-8 sm:px-12 md:px-16 lg:px-24 py-10 md:py-12 lg:py-14 flex flex-col items-center text-center">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[700px] mb-8 md:mb-10">
            If you receive a bill for any services provided by or referred
            through HAVEN Free Clinic,{" "}
            <span className="font-bold">
              please do not ignore it and do not pay it before speaking with us
            </span>
            . Contact MDIC first at{" "}
            <a
              href="mailto:hfc.billing@yale.edu"
              className="text-[#00356b] underline hover:text-[#00356b]/70 transition-colors"
            >
              hfc.billing@yale.edu
            </a>
            . We may be able to help reduce or eliminate the balance. See the
            MDIC/Billing Guide below for how HAVEN can assist and what documents
            are required.
          </p>

          {/* MDIC/Billing Guide Button */}
          <button
            onClick={() => setGuideOpen(!guideOpen)}
            aria-expanded={guideOpen}
            className="bg-[#00356b] px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-[#00356b]/90 transition-colors"
          >
            <span className="font-['Poppins',sans-serif] font-light text-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
              MDIC/Billing Guide
            </span>
            <ChevronDown
              className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white transition-transform duration-300 ${
                guideOpen ? "rotate-180" : ""
              }`}
              strokeWidth={2.5}
            />
          </button>

          {/* Expandable Guide Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
              guideOpen ? "max-h-[5000px] mt-8 visible" : "max-h-0 invisible"
            }`}
          >
            <div className="bg-[#00356b]/5 px-6 md:px-10 py-6 md:py-8 text-left">
              <div className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed space-y-4">
                <p className="font-medium text-[#00356b] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  What MDIC Can Help With:
                </p>
                <ul className="list-disc pl-6 md:pl-8 space-y-2">
                  <li>
                    Reviewing and explaining medical bills from HAVEN-referred
                    services
                  </li>
                  <li>
                    Assisting with applications for Medicaid, HUSKY, or YNHH
                    Financial Assistance
                  </li>
                  <li>
                    Helping navigate insurance enrollment and coverage questions
                  </li>
                  <li>
                    Advocating on your behalf for billing adjustments or payment
                    plans
                  </li>
                </ul>
                <p className="font-medium text-[#00356b] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  Documents You May Need:
                </p>
                <ul className="list-disc pl-6 md:pl-8 space-y-2">
                  <li>Photo ID</li>
                  <li>Proof of income (pay stubs, tax return)</li>
                  <li>Proof of address (utility bill, lease agreement)</li>
                  <li>
                    Any medical bills or insurance correspondence you've received
                  </li>
                </ul>
                <p>
                  To get started, or to check when your current approval
                  expires, email{" "}
                  <a
                    href={`mailto:${MDIC_CONTACT.email}`}
                    className="text-[#00356b] underline hover:text-[#00356b]/70"
                  >
                    {MDIC_CONTACT.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Understanding Your Bill ── */}
      <div
        id="understanding-your-bill"
        className="scroll-mt-32 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Understanding Your Bill
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-6">
            Medical bills can be confusing. Yale&apos;s medical system has{" "}
            <span className="font-semibold">two separate billing organizations</span>.
            A single visit can produce a bill from each. Knowing which is which
            tells you who to contact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
            <div className="bg-[#f7f9fc] border border-[#00356b]/10 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5 text-[#00356b]" />
                </div>
                <div>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[17px] md:text-[19px] leading-tight">
                    Yale Medicine
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-black/50 text-[13px] md:text-[14px]">
                    Physician &amp; provider services
                  </p>
                </div>
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[16px] leading-relaxed mb-3">
                Covers the professional services of the Yale Medicine doctor or
                provider who treated you.
              </p>
              <p className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[15px] leading-relaxed">
                Yale Medicine Patient Services:{" "}
                <a href="tel:8008269922" className="text-[#00356b] font-semibold hover:underline">
                  (800) 826-9922
                </a>
                , Mon–Fri 8:30 am–5:00 pm, or{" "}
                <a
                  href="mailto:patient.services@yale.edu"
                  className="text-[#00356b] underline hover:text-[#00356b]/70"
                >
                  patient.services@yale.edu
                </a>
                . <BrandText>Pay online through MyChart.</BrandText>
              </p>
            </div>

            <div className="bg-[#f7f9fc] border border-[#00356b]/10 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#00356b]" />
                </div>
                <div>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[17px] md:text-[19px] leading-tight">
                    Yale New Haven Health / Hospital
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-black/50 text-[13px] md:text-[14px]">
                    Hospital &amp; facility services
                  </p>
                </div>
              </div>
              <p className="font-['Poppins',sans-serif] text-black text-[14px] md:text-[16px] leading-relaxed mb-3">
                Covers hospital and facility charges: the facility where you were
                seen and hospital services such as labs and imaging.
              </p>
              <p className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[15px] leading-relaxed">
                YNHH Patient Financial Services:{" "}
                <a href="tel:8555474584" className="text-[#00356b] font-semibold hover:underline">
                  (855) 547-4584
                </a>
                , Mon–Fri 7:30 am–5:00 pm. <BrandText>Pay online through MyChart.</BrandText>
              </p>
            </div>
          </div>

          <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed mb-6">
            Check the top of each statement to see which organization issued it,
            and use the matching contact above. When in doubt, contact MDIC at{" "}
            <a
              href="mailto:hfc.billing@yale.edu"
              className="text-[#00356b] underline hover:text-[#00356b]/70"
            >
              hfc.billing@yale.edu
            </a>{" "}
            and we&apos;ll help you figure out which bill is which.
          </p>

          <div className="bg-[#00356b]/5 border-l-4 border-[#00356b] px-5 py-4 font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed">
            <p>
              <span className="font-bold">Need help reading either bill?</span>{" "}
              Reach out to MDIC at{" "}
              <a
                href="mailto:hfc.billing@yale.edu"
                className="text-[#00356b] underline hover:text-[#00356b]/70 transition-colors"
              >
                hfc.billing@yale.edu
              </a>{" "}
              and we can review it with you and figure out which organization to
              contact.
            </p>
            <p className="mt-3 text-[14px] md:text-[15px]">
              For more detail and a sample statement, see{" "}
              <a
                href="https://www.ynhhs.org/patient-care/billing-insurance/Understanding-Your-Bill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00356b] underline hover:text-[#00356b]/70 transition-colors"
              >
                YNHH&apos;s Understanding Your Bill page
              </a>{" "}
              or Yale Medicine&apos;s{" "}
              <a
                href="https://www.yalemedicine.org/patient-tools/pay-a-bill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00356b] underline hover:text-[#00356b]/70 transition-colors"
              >
                Pay a Bill page
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Application Assistance ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Application Assistance
          </h2>
          <div className="space-y-4">
            <ResourceDropdown title="YNHH Financial Assistance">
              <p>
                Yale New Haven Hospital&apos;s program provides free or reduced-cost care at YNHH facilities. Anyone can apply; approval is based on your household income and size. Insurance status is not a barrier, and immigration status does not disqualify you. MDIC can help you navigate the application at no cost.
              </p>
              <p>
                <span className="font-semibold">Not insurance:</span> It covers services at YNHH facilities but does not function like a health insurance plan and is not transferable to other providers.
              </p>
              <p>
                <span className="font-semibold">Proof of income</span> is required for you and, if applicable, household members. Recent pay stubs, your most recent federal tax return, or Social Security benefit statements are commonly accepted.
              </p>
              <p>
                Download the guide in your preferred language:
              </p>
              <LanguageDownloadDropdown
                buttonLabel="Download Guide"
                docs={[
                  { label: "English", href: "/docs/ynhh-financial-assistance-english.pdf" },
                  { label: "French (Fran\u00e7ais)", href: "/docs/ynhh-financial-assistance-french.pdf" },
                  { label: "Haitian Creole (Krey\u00f2l)", href: "/docs/ynhh-financial-assistance-haitian-creole.pdf" },
                ]}
              />
            </ResourceDropdown>

            <ResourceDropdown title="Medicaid / HUSKY">
              <p>
                Medicaid (known as HUSKY in Connecticut) is a state and federal
                program that provides free or low-cost health coverage for
                eligible low-income individuals and families. Unlike Free Care,
                it is real insurance you can use anywhere that accepts it.
              </p>
              <p>
                Applications go through{" "}
                <a
                  href={ACCESS_HEALTH_CT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00356b] font-semibold underline hover:no-underline"
                >
                  Access Health CT
                </a>
                , Connecticut&apos;s official health insurance marketplace and
                the only place to apply for HUSKY. You can apply online, by
                phone, or with us at any Saturday clinic.
              </p>
              <p>
                <span className="font-semibold">Proof of income</span> is required as part of the application: recent pay stubs, your most recent federal tax return, or Social Security benefit statements.
              </p>
              <p>
                MDIC can help you determine your eligibility and assist with the application process at no cost. Contact us at{" "}
                <a href="mailto:hfc.billing@yale.edu" className="text-[#00356b] underline hover:text-[#00356b]/70 transition-colors">
                  hfc.billing@yale.edu
                </a>{" "}
                to get started.
              </p>
            </ResourceDropdown>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Lead-in to the Free Care Guide ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-14">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-3">
            YNHH Free Care: Step-by-Step Application Guide
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[680px] mx-auto">
            A complete, plain-language walkthrough of the Yale New Haven Health
            Financial Assistance (Free Care) application: what it is, how to fill
            out every section, and how to submit. You can do this yourself, and
            our MDIC team is here to help.
          </p>
          <div className="flex justify-center mt-5">
            <ArrowDown className="w-6 h-6 text-[#00356b]/40" />
          </div>
        </div>
      </div>

      {/* ── Free Care Guide ── */}
      <div className="mt-8 md:mt-10">
        <FreeCareGuide />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-4">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/*
        ── Who to contact ──
        This block and the FreeCareGuide help bar that used to sit directly
        above it said the same thing twice, one strip and one box, and the pair
        read as a mistake. The help bar is gone; this is the single closing
        contact, and it splits on the distinction patients actually need: HAVEN
        helps you file, YNHH owns your account.
      */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4">
            Who to Contact
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
            Two different offices, two different jobs. Choosing the right one
            saves you a wait.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* YNHH first: for most questions they are the ones who can answer. */}
            <div className="bg-[#00356b] p-6 md:p-8 flex flex-col">
              <p className="font-['Poppins',sans-serif] font-semibold text-white/60 text-[12px] uppercase tracking-wider mb-2">
                For your bill or your application status
              </p>
              <h3 className="font-['Merriweather',serif] font-semibold text-white text-[19px] md:text-[22px] mb-3">
                Call YNHH Patient Financial Services
              </h3>
              <p className="font-['Poppins',sans-serif] text-white/85 text-[14px] md:text-[16px] leading-relaxed mb-6 flex-1">
                They hold your account, so they are the only ones who can tell
                you whether your application was received, where it stands,
                whether you were approved, what a specific charge is, or set up
                a payment plan. Call them directly rather than waiting for
                Saturday.
              </p>
              <a
                href={`tel:${YNHH_BILLING.tel}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-6 py-3.5 hover:bg-[#d6e8f7] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {YNHH_BILLING.phone}
              </a>
              <p className="font-['Poppins',sans-serif] text-white/70 text-[13px] md:text-[14px] mt-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                {YNHH_BILLING.hours}
              </p>
            </div>

            <div className="bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-8 flex flex-col">
              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b]/60 text-[12px] uppercase tracking-wider mb-2">
                For help with the paperwork
              </p>
              <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[19px] md:text-[22px] mb-3">
                HAVEN&apos;s MDIC team
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[16px] leading-relaxed mb-6 flex-1">
                We sit with you to complete the form, work out what counts as
                proof of income, review a bill you do not understand, help you
                decide whether to appeal a denial, and submit on your behalf.
                Bring your paperwork to any Saturday clinic, or email it.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={`mailto:${MDIC_CONTACT.email}`}
                  className="inline-flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] hover:underline"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {MDIC_CONTACT.email}
                </a>
                <a
                  href={`tel:${MDIC_CONTACT.tel}`}
                  className="inline-flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] hover:underline"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {MDIC_CONTACT.phone}
                </a>
                <p className="font-['Poppins',sans-serif] text-black/60 text-[13px] md:text-[14px] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  {MDIC_CONTACT.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                Not sure which bill you are holding?
              </span>{" "}
              Yale Medicine and Yale New Haven Health bill separately, and a
              single visit can produce one of each. See{" "}
              <Link
                href="#understanding-your-bill"
                className="text-[#00356b] font-semibold underline hover:no-underline"
              >
                Understanding Your Bill
              </Link>{" "}
              above, or send it to us and we will work out which is which.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
