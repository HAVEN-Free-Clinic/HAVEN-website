import { HavenLogo } from "@/app/components/HavenLogo";
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { Phrase } from "@/app/components/Phrase";
import { STAFF_PORTAL_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-[#00356b] w-full">
      {/* New patient wait-time notice */}
      <div className="border-b border-white/15 bg-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-3.5 flex items-center justify-center gap-2.5 text-center">
          <CalendarClock className="w-4 h-4 md:w-5 md:h-5 text-white/80 shrink-0" />
          <p className="font-['Poppins',sans-serif] text-white/90 text-[13px] md:text-[15px]">
            New patients can expect a wait of approximately 1 month for a first appointment.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Logo */}
          <Link
            href="/"
            aria-label="HAVEN Free Clinic, home"
            className="notranslate shrink-0 hover:opacity-90 transition-opacity"
          >
            <HavenLogo className="h-[64px] md:h-[78px] w-auto text-white" />
          </Link>

          {/* Footer Content */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 w-full">
            {/* Contact */}
            <div>
              <h3 className="font-['Poppins',sans-serif] font-medium text-white text-[20px] md:text-[22px] tracking-wide mb-5">
                Contact Us
              </h3>
              <div className="flex flex-col gap-2 font-['Poppins',sans-serif] text-white/90 text-[15px] md:text-[16px]">
                <a href="tel:2032000673" className="hover:underline">(203) 200-0673</a>
                <a href="mailto:haven.free.clinic@yale.edu" className="hover:underline">
                  haven.free.clinic@yale.edu
                </a>
                <p>Fax: (203) 436-9928</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-['Poppins',sans-serif] font-medium text-white text-[20px] md:text-[22px] tracking-wide mb-5">
                Address
              </h3>
              <p className="font-['Poppins',sans-serif] text-white text-[16px] md:text-[18px] leading-[1.8]">
                Yale Physicians Building,
                <br />
                800 Howard Avenue, Floor 1,
                <br />
                New Haven, CT 06519
              </p>
              <p className="font-['Poppins',sans-serif] text-white/70 text-[14px] md:text-[15px] mt-2">
                Free parking in the Howard Avenue Garage
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-['Poppins',sans-serif] font-medium text-white text-[20px] md:text-[22px] tracking-wide mb-5">
                Hours
              </h3>
              <p className="font-['Poppins',sans-serif] text-white text-[16px] md:text-[18px]">
                Saturday: 8:30am - 12:00pm
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap gap-x-8 gap-y-3 justify-center">
          {[
            { label: "About Us", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Milestones", to: "/milestones" },
            { label: "Get Involved", to: "/get-involved" },
            { label: "FAQs", to: "/faqs" },
            { label: "MyChart", to: "/mychart" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.to}
              className="font-['Poppins',sans-serif] text-white/80 hover:text-white text-[14px] md:text-[16px] transition-colors"
            >
              <Phrase>{link.label}</Phrase>
            </Link>
          ))}
        </div>

        {/* Design credit */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="font-['Poppins',sans-serif] text-white/80 text-[14px] md:text-[15px] leading-relaxed max-w-[620px] mx-auto">
            This site was designed in collaboration with{" "}
            <a
              href="https://www.dfayale.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:no-underline"
            >
              Design for America at Yale
            </a>
            , whose students shaped how it looks and how patients move through
            it. We are grateful for their work.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="font-['Poppins',sans-serif] text-white text-[16px] md:text-[18px]">&copy; {new Date().getFullYear()} HAVEN Free Clinic. All Rights Reserved.</p>
          <a
            href={STAFF_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-['Poppins',sans-serif] text-white/50 hover:text-white/80 text-[13px] transition-colors"
          >
            Staff Portal
          </a>
        </div>
      </div>
    </footer>
  );
}