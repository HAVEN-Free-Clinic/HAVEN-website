"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Sub-components ─── */

function Divider() {
  return <div className="w-full h-px bg-[#00356b]/10" />;
}

/* ─── Main component ─── */

export function MedicationContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Medication
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Through pharmacy partnerships and discount coupons, we can help
            purchase medications at a free or low cost. We are unable to
            prescribe anti-coagulants or insulin, but glucometers, blood
            pressure cuffs, splints, and bandages can be obtained through online
            ordering as needed.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Divider />
        </div>
      </div>

      {/* ── Pharmacy Information ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Pharmacy Information
          </h3>

          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] space-y-6 md:space-y-8">
            <p className="leading-relaxed">
              We are partnered with the following pharmacies to provide you with
              low-cost options and alternatives. Pick-up is still available at
              personal pharmacies, but lowered cost is not guaranteed.
            </p>

            <div>
              <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
                Pickup Locations
              </h4>
              <p className="leading-relaxed">
                CVS Pharmacy at 123 Church St.
                <br />
                New Haven, CT 06510
              </p>
            </div>

            <div>
              <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
                Pickup Instructions
              </h4>
              <p className="leading-relaxed">
                Drug pick-up should be made available at the pharmacy we assigned
                you around 3 days after your clinic visit.
              </p>
            </div>
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
