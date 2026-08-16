"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, PhoneCall, Wallet } from "lucide-react";
import { PharmacyMap } from "@/app/components/PharmacyMap";
import { MyChart } from "@/app/components/BrandText";

/* ─── Sub-components ─── */

function Divider() {
  return <div className="w-full h-px bg-[#00356b]/10" />;
}

/* ─── Main component ─── */

export function MedicationContent() {
  const [showBadge, setShowBadge] = useState(false);
  const closeBadgeRef = useRef<HTMLButtonElement>(null);
  const badgeOpenerRef = useRef<HTMLButtonElement>(null);

  /*
   * Escape used to be wired to onKeyDown on the overlay div, which never
   * receives key events because nothing inside it holds focus by default.
   * Listening on the document fixes that, and moving focus into the dialog
   * (then back to the button that opened it) keeps keyboard users oriented.
   */
  useEffect(() => {
    if (!showBadge) return;

    closeBadgeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setShowBadge(false);
    }
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      badgeOpenerRef.current?.focus();
    };
  }, [showBadge]);

  return (
    <section className="bg-white w-full">
      {/* ── Patient Badge Modal ── */}
      {showBadge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="HAVEN Patient Badge"
          onClick={() => setShowBadge(false)}
        >
          {/*
            The badge stays in English no matter what language the patient is
            reading the site in: the person who reads it is the pharmacist
            behind the counter, not the patient holding the phone. A translated
            badge asks a pharmacist to act on instructions they cannot read.
          */}
          <div
            className="notranslate bg-white w-full max-w-lg mx-auto p-8 md:p-12 relative"
            translate="no"
            lang="en"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBadgeRef}
              onClick={() => setShowBadge(false)}
              className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center text-[#00356b]/70 hover:text-[#00356b] transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-6">
              <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] md:text-[30px]">
                HAVEN Free Clinic
              </h2>
              <div className="w-16 h-px bg-[#00356b]/20 mx-auto" />
              <p className="font-['Poppins',sans-serif] text-black text-[17px] md:text-[20px] leading-relaxed">
                This patient is a registered{" "}
                <span className="font-bold text-[#00356b]">HAVEN Free Clinic</span>{" "}
                patient picking up a prescribed medication.
              </p>
              <p className="font-['Poppins',sans-serif] text-black text-[17px] md:text-[20px] leading-relaxed font-semibold">
                Please apply the{" "}
                <span className="text-[#00356b]">HAVEN Payor Plan</span>{" "}
                to this transaction.
              </p>
              <div className="w-16 h-px bg-[#00356b]/20 mx-auto" />
              <p className="font-['Poppins',sans-serif] text-black/60 text-[14px] md:text-[16px]">
                Questions? Contact HAVEN Pharmacy at{" "}
                <a href="mailto:haven.free.clinic@yale.edu" className="text-[#00356b] underline">
                  haven.free.clinic@yale.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button
              ref={badgeOpenerRef}
              onClick={() => setShowBadge(true)}
              className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#00356b]/90 transition-colors duration-200"
            >
              I Am a HAVEN Patient
            </button>
            <p className="font-['Poppins',sans-serif] text-black/70 text-[13px] md:text-[14px] mt-2">
              Show this at the pharmacy when picking up your medication
            </p>
          </div>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Through pharmacy partnerships and discount coupons, we can help
            purchase medications at a free or low cost. We are unable to
            prescribe anti-coagulants or insulin, but glucometers, blood
            pressure cuffs, splints, and bandages can be obtained through online
            ordering as needed.
          </p>

          {/* Cost-sharing PSA — the detailed policy is further down the page. */}
          <div className="mt-8 border border-[#00356b]/20 bg-[#f7f9fc] px-6 md:px-8 py-6 md:py-7 flex items-start gap-4 md:gap-5">
            <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5 text-[#00356b]" />
            </div>
            <div>
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                What you may be asked to pay
              </h3>
              <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed">
                Your visit is free. Medications are too, with one exception: if a
                medication costs{" "}
                <span className="font-semibold">less than $25</span>, we ask you
                to cover it at the pharmacy. Anything{" "}
                <span className="font-semibold">$25 or more</span> is still on
                us.
              </p>
              <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed mt-3">
                If that is hard to afford, say so. We waive it, and{" "}
                <span className="font-semibold">
                  no one is ever denied a medication because they cannot pay
                </span>
                .{" "}
                <a
                  href="#cost-sharing"
                  className="text-[#00356b] font-semibold underline hover:no-underline"
                >
                  Read the full policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Pharmacy Information ── */}
      <div
        id="pharmacies"
        className="scroll-mt-24 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Where to Pick Up Your Medication
          </h3>

          {/* Call-your-pharmacy PSA */}
          <div className="bg-[#00356b] px-6 md:px-8 py-6 md:py-7 mb-8 md:mb-10 flex items-start gap-4 md:gap-5">
            <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-['Poppins',sans-serif] font-semibold text-white text-[17px] md:text-[19px] mb-2">
                Call your pharmacy before you run out
              </h4>
              <p className="font-['Poppins',sans-serif] text-white/90 text-[15px] md:text-[17px] leading-relaxed">
                Most refills can be handled by the pharmacy in one phone call,
                without waiting for Saturday. Find your pharmacy on the map
                below, tap the number, and ask whether you have refills left. If
                they say no, then call us.
              </p>
            </div>
          </div>

          <PharmacyMap />

          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] mt-8 md:mt-10">
            <h4 className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
              Pickup Instructions
            </h4>
            <p className="leading-relaxed">
              Your prescription should be ready at the pharmacy we assigned you
              about 3 days after your clinic visit. Call ahead before you make
              the trip.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-10">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Requesting a Medication Refill ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Requesting a Medication Refill
          </h3>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
            Running low on a medication? Follow these two steps to request a
            refill. Please allow <span className="font-semibold">3 to 5 business
            days</span> before you run out. Last-minute requests may cause delays
            in your care.
          </p>

          <div className="space-y-5 md:space-y-6">
            <div className="flex items-start gap-4 md:gap-5 bg-[#f7f9fc] border border-[#00356b]/10 p-6 md:p-7">
              <div className="w-10 h-10 rounded-full bg-[#00356b] text-white font-['Merriweather',serif] flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2">
                  Check with your pharmacy first
                </h4>
                <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                  Call your pharmacy to find out whether any refills remain on
                  your current prescription. Pharmacies can often process a refill
                  automatically if one is available, saving you an extra step.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-5 bg-[#f7f9fc] border border-[#00356b]/10 p-6 md:p-7">
              <div className="w-10 h-10 rounded-full bg-[#00356b] text-white font-['Merriweather',serif] flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-2">
                  Contact HAVEN if no refills are available
                </h4>
                <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                  If your pharmacy confirms there are no refills remaining, give
                  us a call at{" "}
                  <a
                    href="tel:2032000673"
                    className="text-[#00356b] font-semibold hover:underline"
                  >
                    (203) 200-0673
                  </a>{" "}
                  and we will work with your care team to authorize a new refill.
                  Please have your <span className="font-semibold">medication
                  name, dosage, and pharmacy information</span> ready when you
                  call.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-semibold text-[#00356b]">
                Please do not wait until you have run out of medication to request
                a refill.
              </span>{" "}
              Reaching out 3 to 5 business days in advance ensures your care team
              has enough time to review and approve your request without
              interruption to your treatment.
            </p>
          </div>

          <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed mt-6">
            Have a different medical question between visits? Reach our care team
            through the{" "}
            <Link
              href="/visitor-guide#triage-line"
              className="text-[#00356b] font-semibold underline hover:text-[#00356b]/70"
            >
              triage line
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-10">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Medication Cost-Sharing ── */}
      <div
        id="cost-sharing"
        className="scroll-mt-24 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Medication Cost-Sharing
          </h3>

          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] space-y-6 md:space-y-8">
            <p className="leading-relaxed">
              HAVEN runs on donations and volunteer hours. Like many other free
              clinics, we now ask patients to help cover some of the cheaper
              medications. That is what lets us keep paying for the expensive
              ones and take on more patients.
            </p>

            <div className="bg-[#f7f9fc] border border-[#00356b]/10 px-6 md:px-8 py-6 md:py-8">
              <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-4">
                Under this policy:
              </h4>
              <ul className="list-disc pl-6 md:pl-7 space-y-2.5 leading-relaxed text-[15px] md:text-[17px]">
                <li>
                  Patients are responsible for covering the cost of medications
                  priced <span className="font-semibold">under $25</span>.
                </li>
                <li>
                  Medications <span className="font-semibold">at or above $25</span>{" "}
                  continue to be provided at no cost to the patient.
                </li>
                <li>
                  Patients who demonstrate significant financial hardship may
                  request a <span className="font-semibold">cost-sharing waiver</span>.
                  Our team will work with you discreetly and compassionately to
                  assess your situation.
                </li>
                <li>
                  <span className="font-semibold">
                    No patient will be denied a medication solely due to inability
                    to pay.
                  </span>{" "}
                  If cost is a concern, please speak with your care team.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
                Why This Matters
              </h4>
              <p className="leading-relaxed mb-4">
                Cost-sharing models are a common and proven approach among free
                and charitable clinics. By asking patients who are able to
                contribute a small amount toward lower-cost medications, we can:
              </p>
              <ul className="list-disc pl-6 md:pl-7 space-y-2 leading-relaxed text-[15px] md:text-[17px]">
                <li>Preserve our donated funds for higher-cost medications and services</li>
                <li>Expand our capacity to take on more patients</li>
                <li>Continue investing in programs that support long-term patient outcomes</li>
                <li>Sustain and grow HAVEN&apos;s presence in the community</li>
              </ul>
            </div>

            <p className="text-[#00356b] leading-relaxed">
              Have questions about this policy or need to request a waiver? Please
              speak with your care team or send us a Care Message through{" "}
              <a href="/mychart" className="underline hover:text-[#00356b]/70 transition-colors">
                <MyChart />
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-10">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Pharmaceutical Assistance Program ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Pharmaceutical Assistance Program
          </h3>

          <div className="font-['Poppins',sans-serif] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] space-y-6 md:space-y-8">
            <p className="text-black leading-relaxed">
              The Pharmaceutical Assistance Program helps eligible patients access
              medications at no cost through manufacturer patient assistance programs.
              Our team assists with applications and follow-up to ensure continuity
              of care.
            </p>
            <p className="text-[#00356b] leading-relaxed">
              Call{" "}
              <a href="tel:2032000673" className="hover:underline">
                (203) 200-0673
              </a>{" "}
              to ask about the program and schedule a consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
