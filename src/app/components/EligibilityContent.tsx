"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  ChevronRight,
  ArrowLeft,
  Phone,
  MapPin,
  ShieldCheck,
  User,
  Heart,
  Baby,
  Stethoscope,
} from "lucide-react";

/* ─── Criteria Data ─── */

const CRITERIA = [
  {
    id: "age",
    icon: User,
    title: "Age",
    description: "Between 18 and 65 years old",
    question: "Are you between 18 and 65 years old?",
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    title: "Insurance Status",
    description: "Currently uninsured with no health insurance",
    question: "Are you currently uninsured (no health insurance)?",
  },
  {
    id: "pcp",
    icon: Stethoscope,
    title: "Primary Care Provider",
    description: "Do not currently have a primary care provider",
    question: "Do you currently lack a primary care provider?",
  },
  {
    id: "location",
    icon: MapPin,
    title: "Location",
    description: "Reside in the Greater New Haven area",
    question: "Do you live in the Greater New Haven area?",
  },
  {
    id: "conditions",
    icon: Heart,
    title: "Health Conditions",
    description:
      "No active cancer diagnosis or similar complex conditions requiring specialty management",
    question:
      "Are you free of active cancer or similar complex conditions requiring specialty management?",
  },
  {
    id: "pregnancy",
    icon: Baby,
    title: "Pregnancy",
    description: "Not currently pregnant",
    question: "Are you currently not pregnant?",
  },
];

/* ─── Checker Component ─── */

type CheckerState = "idle" | "checking" | "result";

function EligibilityChecker() {
  const [state, setState] = useState<CheckerState>("idle");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const handleStart = () => {
    setState("checking");
    setCurrentStep(0);
    setAnswers({});
  };

  const handleAnswer = (answer: boolean) => {
    const criterion = CRITERIA[currentStep];
    const newAnswers = { ...answers, [criterion.id]: answer };
    setAnswers(newAnswers);

    if (currentStep < CRITERIA.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setState("result");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setState("idle");
    }
  };

  const handleReset = () => {
    setState("idle");
    setCurrentStep(0);
    setAnswers({});
  };

  const allYes = Object.values(answers).every((v) => v === true);

  if (state === "idle") {
    return (
      <div className="flex flex-col items-center">
        <button
          onClick={handleStart}
          className="bg-[#034078] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[22px] px-10 py-4 rounded-full hover:bg-[#023060] transition-colors shadow-md flex items-center gap-3"
        >
          See If I Qualify
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  if (state === "checking") {
    const criterion = CRITERIA[currentStep];
    const Icon = criterion.icon;
    const progress = ((currentStep + 1) / CRITERIA.length) * 100;

    return (
      <div className="max-w-[640px] mx-auto bg-white rounded-2xl shadow-lg border border-[#034078]/10 overflow-hidden">
        {/* Progress bar */}
        <div className="w-full h-2 bg-[#e8eef5]">
          <div
            className="h-full bg-[#034078] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="px-6 md:px-10 py-8 md:py-10">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleBack}
              className="text-[#034078]/60 hover:text-[#034078] transition-colors flex items-center gap-1 font-['Poppins',sans-serif] text-[14px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <span className="font-['Poppins',sans-serif] text-[#034078]/60 text-[14px]">
              Question {currentStep + 1} of {CRITERIA.length}
            </span>
          </div>

          {/* Question */}
          <div className="flex flex-col items-center text-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-full bg-[#034078]/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-[#034078]" />
            </div>
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[#034078] text-[20px] md:text-[24px] leading-snug">
              {criterion.question}
            </h3>
          </div>

          {/* Answer buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 max-w-[200px] bg-[#034078] text-white font-['Poppins',sans-serif] font-semibold text-[18px] py-3.5 rounded-xl hover:bg-[#023060] transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 max-w-[200px] bg-white text-[#034078] border-2 border-[#034078] font-['Poppins',sans-serif] font-semibold text-[18px] py-3.5 rounded-xl hover:bg-[#034078]/5 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Result
  return (
    <div className="max-w-[640px] mx-auto bg-white rounded-2xl shadow-lg border border-[#034078]/10 overflow-hidden">
      <div className="px-6 md:px-10 py-10 md:py-12">
        {allYes ? (
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#034078] text-[24px] md:text-[28px]">
              You May Qualify!
            </h3>
            <p className="font-['Poppins',sans-serif] text-[#034078]/80 text-[16px] md:text-[18px] leading-relaxed max-w-[480px]">
              Based on your responses, you appear to meet our eligibility
              criteria. Please call us to schedule an appointment.
            </p>
            <a
              href="tel:2032000673"
              className="mt-2 bg-[#034078] text-white font-['Poppins',sans-serif] font-semibold text-[18px] px-8 py-3.5 rounded-full hover:bg-[#023060] transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (203) 200-0673
            </a>
            <button
              onClick={handleReset}
              className="text-[#034078]/60 hover:text-[#034078] font-['Poppins',sans-serif] text-[14px] mt-2 underline"
            >
              Start over
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center">
              <XCircle className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#034078] text-[24px] md:text-[28px]">
              You May Not Qualify
            </h3>
            <p className="font-['Poppins',sans-serif] text-[#034078]/80 text-[16px] md:text-[18px] leading-relaxed max-w-[480px]">
              Based on your responses, you may not meet all of our current
              eligibility criteria. However, we encourage you to reach out — we
              may still be able to help or connect you with other resources.
            </p>
            <a
              href="tel:2032000673"
              className="mt-2 bg-[#034078] text-white font-['Poppins',sans-serif] font-semibold text-[18px] px-8 py-3.5 rounded-full hover:bg-[#023060] transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (203) 200-0673
            </a>
            <button
              onClick={handleReset}
              className="text-[#034078]/60 hover:text-[#034078] font-['Poppins',sans-serif] text-[14px] mt-2 underline"
            >
              Start over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Content ─── */

export function EligibilityContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* Intro */}
        <div className="mb-14 md:mb-18">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
            <h2 className="font-['Merriweather',serif] font-bold text-[#034078] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] shrink-0">
              Eligibility
            </h2>
            <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px]">
              HAVEN Free Clinic provides care to uninsured adults in the Greater
              New Haven area. Please review the criteria below to see if you may
              be eligible for our services.
            </p>
          </div>
        </div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {CRITERIA.map((criterion) => {
            const Icon = criterion.icon;
            return (
              <div
                key={criterion.id}
                className="bg-[#f7f9fc] border border-[#034078]/10 rounded-xl px-6 py-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-[#034078]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#034078]" />
                </div>
                <div>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[#034078] text-[16px] md:text-[18px] mb-1">
                    {criterion.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[#034078]/70 text-[14px] md:text-[15px] leading-relaxed">
                    {criterion.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#034078]/15 mb-14 md:mb-18" />

        {/* Checker section */}
        <div className="mb-16 md:mb-20">
          <h3 className="font-['Merriweather',serif] font-bold text-[#034078] text-[24px] md:text-[30px] lg:text-[34px] mb-4 text-center">
            Check Your Eligibility
          </h3>
          <p className="font-['Poppins',sans-serif] text-[#034078]/70 text-[16px] md:text-[18px] text-center mb-10 max-w-[600px] mx-auto">
            Answer a few quick questions to find out if you may be eligible for
            care at HAVEN Free Clinic.
          </p>
          <EligibilityChecker />
        </div>

        {/* Contact callout */}
        <div className="bg-[#034078] rounded-2xl px-8 md:px-12 py-10 md:py-12 text-center">
          <h3 className="font-['Poppins',sans-serif] font-bold text-white text-[20px] md:text-[24px] mb-3">
            Have Questions?
          </h3>
          <p className="font-['Poppins',sans-serif] text-white/80 text-[16px] md:text-[18px] mb-6 max-w-[560px] mx-auto">
            If you're unsure about your eligibility, don't hesitate to contact
            us. Our team is happy to help you figure out your options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:2032000673"
              className="bg-white text-[#034078] font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-8 py-3 rounded-full hover:bg-[#e8eef5] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (203) 200-0673
            </a>
            <Link
              href="/visitor-guide"
              className="bg-transparent text-white border-2 border-white font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Visitor Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}