import svgPaths from "@/lib/svg-paths";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#00356b] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Logo */}
          <Link href="/" className="relative w-[72px] h-[72px] md:w-[90px] md:h-[90px] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 96.4539 93.7674">
              <path d={svgPaths.p1339fb00} stroke="white" strokeWidth="3.21856" />
            </svg>
            <span className="relative font-['Poppins',sans-serif] text-[15px] md:text-[18px] text-white z-10">HAVEN</span>
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
            { label: "Impact", to: "/impact" },
            { label: "Get Involved", to: "/get-involved" },
            { label: "FAQs", to: "/faqs" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.to}
              className="font-['Poppins',sans-serif] text-white/80 hover:text-white text-[14px] md:text-[16px] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="font-['Poppins',sans-serif] text-white text-[16px] md:text-[18px]">&copy; 2026 HAVEN Free Clinic. All Rights Reserved.</p>
          <a
            href="https://hub.havenfreeclinic.com"
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