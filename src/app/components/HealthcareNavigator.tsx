"use client";

import { useState } from "react";
import {
  ChevronDown,
  Ambulance,
  Stethoscope,
  HeartPulse,
  Compass,
  HeartHandshake,
} from "lucide-react";

interface Level {
  id: string;
  tier: string;
  title: string;
  body: string;
  icon: typeof Ambulance;
  accent: "red" | "blue";
  highlight?: boolean;
}

const LEVELS: Level[] = [
  {
    id: "emergency",
    tier: "Emergency",
    title: "Emergency Room (ER)",
    body: "For life-threatening situations only. ERs must treat anyone, but costs are very high.",
    icon: Ambulance,
    accent: "red",
  },
  {
    id: "specialist",
    tier: "Specialist",
    title: "Specialist doctors",
    body: "Focused on one area of medicine. Usually require a referral and insurance — but HAVEN can help.",
    icon: Stethoscope,
    accent: "blue",
  },
  {
    id: "primary",
    tier: "Primary care",
    title: "Primary care doctors",
    body: "Your main doctor for everyday health. Manages ongoing conditions, prescriptions, and referrals.",
    icon: HeartPulse,
    accent: "blue",
  },
  {
    id: "haven",
    tier: "HAVEN",
    title: "HAVEN Free Clinic — you are here",
    body: "Free primary care every Saturday. No insurance needed. Your bridge to the whole healthcare system.",
    icon: Compass,
    accent: "blue",
    highlight: true,
  },
  {
    id: "community",
    tier: "Community",
    title: "Community resources",
    body: "Food, housing, mental health, social services. These aren't healthcare — but they deeply affect your health.",
    icon: HeartHandshake,
    accent: "blue",
  },
];

export function HealthcareNavigator() {
  // HAVEN ("you are here") expanded by default.
  const [open, setOpen] = useState<Record<string, boolean>>({ haven: true });

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-2">
        Navigating US Healthcare
      </h2>
      <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b]/70 text-[16px] md:text-[18px] mb-4">
        The healthcare system — and where HAVEN fits
      </p>
      <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
        The American healthcare system is complex. HAVEN is your bridge —
        helping you understand it, access it, and navigate it with confidence.
        Click each level to learn more.
      </p>

      <div className="space-y-3 md:space-y-4">
        {LEVELS.map((level) => {
          const isOpen = !!open[level.id];
          const isEmergency = level.accent === "red";
          const highlight = level.highlight;

          return (
            <div
              key={level.id}
              className={`border transition-colors ${
                highlight
                  ? "border-[#00356b] bg-[#00356b]"
                  : isEmergency
                  ? "border-red-200 bg-red-50/50"
                  : "border-[#00356b]/15 bg-[#f7f9fc]"
              }`}
            >
              <button
                onClick={() => toggle(level.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 px-5 md:px-6 py-4 md:py-5 cursor-pointer text-left"
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                    highlight
                      ? "bg-white/15"
                      : isEmergency
                      ? "bg-red-100"
                      : "bg-[#00356b]/10"
                  }`}
                >
                  <level.icon
                    className={`w-5 h-5 ${
                      highlight
                        ? "text-white"
                        : isEmergency
                        ? "text-red-700"
                        : "text-[#00356b]"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-['Poppins',sans-serif] font-semibold text-[11px] md:text-[12px] uppercase tracking-wider mb-0.5 ${
                      highlight
                        ? "text-white/70"
                        : isEmergency
                        ? "text-red-700/80"
                        : "text-[#00356b]/60"
                    }`}
                  >
                    {level.tier}
                  </p>
                  <p
                    className={`font-['Poppins',sans-serif] font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-tight ${
                      highlight ? "text-white" : "text-[#00356b]"
                    }`}
                  >
                    {level.title}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  } ${highlight ? "text-white" : "text-[#00356b]"}`}
                  strokeWidth={2.5}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <p
                  className={`px-5 md:px-6 pb-5 md:pb-6 pl-[68px] md:pl-[76px] font-['Poppins',sans-serif] text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed ${
                    highlight ? "text-white/90" : "text-black/80"
                  }`}
                >
                  {level.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
