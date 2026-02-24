"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Data ─── */

interface Medication {
  name: string;
  instructions: string;
  usage: string;
}

/* DRAFT — replace with final copy */
const medications: Medication[] = [
  {
    name: "Acetaminophen (Tylenol)",
    instructions:
      "Take 500–1000 mg by mouth every 4–6 hours as needed. Do not exceed 3000 mg in 24 hours.",
    usage:
      "Used for mild to moderate pain relief and fever reduction. Common uses include headaches, muscle aches, and cold symptoms.",
  },
  {
    name: "Lisinopril (Prinivil/Zestril)",
    instructions:
      "Take once daily by mouth, with or without food, at the same time each day as directed by your provider.",
    usage:
      "Used to treat high blood pressure (hypertension) and to help protect kidney function. Helps lower blood pressure and reduce the risk of heart attack and stroke.",
  },
  {
    name: "Atorvastatin (Lipitor)",
    instructions:
      "Take once daily by mouth, usually in the evening, with or without food, as directed by your provider.",
    usage:
      "Used to lower high cholesterol and triglyceride levels. Helps reduce the risk of heart disease, heart attack, and stroke when used alongside a healthy diet.",
  },
];

/* ─── Sub-components ─── */

function Divider() {
  return <hr className="w-full border-t border-[#858282]" />;
}

function AccordionItem({ med }: { med: Medication }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 md:py-5 cursor-pointer group"
      >
        <span className="font-['Poppins',sans-serif] font-semibold text-[#034078] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] text-left">
          {med.name}
        </span>
        <ChevronDown
          className={`w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 shrink-0 text-black transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] pb-5" : "max-h-0"
        }`}
      >
        <ul className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] list-disc pl-8 md:pl-12 space-y-1">
          <li>
            Instructions:
            <ul className="list-disc pl-8 md:pl-12">
              <li>{med.instructions}</li>
            </ul>
          </li>
          <li>
            Usage:
            <ul className="list-disc pl-8 md:pl-12">
              <li>{med.usage}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export function MedicationContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
          <h2 className="font-['Merriweather',serif] font-bold text-[#034078] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] shrink-0">
            Medication
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px]">
            Through pharmacy partnerships and discount coupons, we can help
            purchase medications at a free or low cost. We are unable to
            prescribe anti-coagulants or insulin, but glucometers, blood
            pressure cuffs, splints, and bandages can be obtained through online
            ordering as needed.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Divider />
      </div>

      {/* ── Common Medications ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12">
        <h3 className="font-['Merriweather',serif] font-bold text-[#034078] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] mb-6 md:mb-8">
          Common Medications
        </h3>

        <div className="space-y-0">
          {medications.map((med) => (
            <AccordionItem key={med.name} med={med} />
          ))}
        </div>

        {/* "For drugs not listed" note */}
        <div className="mt-6 md:mt-8 mb-8 md:mb-10">
          <p className="font-['Poppins',sans-serif] text-[#1e1e1e] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
            For{" "}
            <span className="font-medium">drugs not listed,</span>{" "}
            visit{" "}
            <a
              href="https://www.mayoclinic.org/drugs-supplements"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#034078] hover:underline break-all"
            >
              https://www.mayoclinic.org/drugs-supplements
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Divider />
      </div>

      {/* ── Pharmacy Information ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12">
        <h3 className="font-['Merriweather',serif] font-bold text-[#034078] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] mb-6 md:mb-8">
          Pharmacy Information
        </h3>

        <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] space-y-6 md:space-y-8">
          <p className="leading-relaxed">
            We are partnered with the following pharmacies to provide you with
            low-cost options and alternatives. Pick-up is still available at
            personal pharmacies, but lowered cost is not guaranteed.
          </p>

          <div>
            <h4 className="font-['Poppins',sans-serif] font-semibold text-[#034078] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
              Pickup Locations
            </h4>
            <p className="leading-relaxed">
              CVS Pharmacy at 123 Church St.
              <br />
              New Haven, CT 06510
            </p>
          </div>

          <div>
            <h4 className="font-['Poppins',sans-serif] font-semibold text-[#034078] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-3 md:mb-4">
              Pickup Instructions
            </h4>
            <p className="leading-relaxed">
              Drug pick-up should be made available at the pharmacy we assigned
              you around 3 days after your clinic visit.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-10">
        <Divider />
      </div>

      {/* ── Pharmaceutical Assistance Program ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <h3 className="font-['Merriweather',serif] font-bold text-[#034078] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] mb-6 md:mb-8">
          Pharmaceutical Assistance Program
        </h3>

        <div className="font-['Poppins',sans-serif] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] space-y-6 md:space-y-8">
          <p className="text-black leading-relaxed">
            The Pharmaceutical Assistance Program helps eligible patients access
            medications at no cost through manufacturer patient assistance programs.
            Our team assists with applications and follow-up to ensure continuity
            of care.
          </p>
          <p className="text-[#034078] leading-relaxed">
            Call{" "}
            <a href="tel:2032000673" className="hover:underline">
              (203) 200-0673
            </a>{" "}
            to ask about the program and schedule a consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
