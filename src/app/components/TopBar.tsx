"use client";

import { Phone } from "lucide-react";
import { TranslateDropdown } from "./TranslateDropdown";

export function TopBar() {
  return (
    <div className="bg-[#00356b] w-full">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-2">
        <TranslateDropdown />
        <div className="flex items-center gap-1.5 text-white font-['Poppins',sans-serif] text-[12px] sm:text-[13px] md:text-[16px]">
          <span>
            Emergencies: call{" "}
            <a
              href="tel:911"
              className="font-bold underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              911
            </a>
          </span>
          <span className="mx-1.5 md:mx-2.5 text-white/40">|</span>
          <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 hidden sm:block" />
          <span className="hidden sm:inline">Schedule an appointment:</span>
          <a href="tel:2032000673" className="hover:underline">(203) 200-0673</a>
          <span className="mx-1.5 md:mx-2.5 text-white/40 hidden sm:inline">|</span>
          <a href="/mychart" className="hidden sm:inline hover:underline font-medium">MyChart</a>
        </div>
      </div>
    </div>
  );
}