"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import svgPaths from "@/lib/svg-paths";

const DONATE_URL =
  "https://givetoday.yale.edu/campaigns/67229/donations/new?designation_id=16596";

const aboutDropdownItems = [
  { label: "About Us", to: "/about" },
  { label: "Our History", to: "/about/history" },
  { label: "Community Partners", to: "/about/partners" },
  { label: "Leadership Board", to: "/about/leadership" },
  { label: "Goetsch Endowment", to: "/about/endowment" },
];

const servicesDropdownItems = [
  { label: "All Services", to: "/services" },
  { label: "Patient Care", to: "/services/patient-care" },
  { label: "Medication", to: "/services/medication" },
  { label: "Social Services", to: "/services/social-services" },
  { label: "Education", to: "/services/education" },
  { label: "Debt/Insurance", to: "/services/debt-insurance" },
  { label: "Referrals", to: "/services/referrals" },
];

interface NavbarProps {
  isScrolled?: boolean;
}

export function Navbar({ isScrolled = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const textColor = isScrolled ? "text-black" : "text-white";
  const strokeColor = isScrolled ? "black" : "white";

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleAboutEnter = () => {
    clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150);
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 ease-in-out ${
        mobileOpen && !isScrolled
          ? "bg-[#00356b]/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
          : mobileOpen && isScrolled
          ? "bg-white/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 hover:opacity-90 transition-opacity">
          <div className="relative w-[52px] h-[52px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 73.6439 76">
              <path
                d={svgPaths.pd9d0700}
                stroke={strokeColor}
                strokeWidth="2.47477"
                className="transition-colors duration-300"
              />
            </svg>
            <span className={`relative font-['Poppins',sans-serif] font-semibold text-[11px] ${textColor} z-10 transition-colors duration-300`}>
              HAVEN
            </span>
          </div>
          <div className={`font-['Poppins',sans-serif] font-semibold text-[12px] md:text-[14px] ${textColor} leading-tight ml-1 transition-colors duration-300`}>
            <p>Free Clinic</p>
            <p>La Cl&iacute;nica Gratuita</p>
          </div>
        </Link>

        {/* Desktop Nav + Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          {/* About Us Dropdown */}
          <div
            ref={aboutRef}
            className="relative"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`font-['Poppins',sans-serif] font-medium text-[14px] tracking-wide ${textColor} hover:opacity-80 transition-all duration-300 flex items-center gap-1`}
            >
              About Us
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>

            {aboutOpen && (
              <div
                className={`absolute top-full left-0 mt-2 py-1 min-w-[200px] shadow-xl border z-[9999] bg-white border-gray-200`}
              >
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 font-['Poppins',sans-serif] font-normal text-[14px] text-gray-700 hover:bg-[#00356b]/10 hover:text-[#00356b] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`font-['Poppins',sans-serif] font-medium text-[14px] tracking-wide ${textColor} hover:opacity-80 transition-all duration-300 flex items-center gap-1`}
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div
                className={`absolute top-full left-0 mt-2 py-1 min-w-[200px] shadow-xl border z-[9999] bg-white border-gray-200`}
              >
                {servicesDropdownItems.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 font-['Poppins',sans-serif] font-normal text-[14px] text-gray-700 hover:bg-[#00356b]/10 hover:text-[#00356b] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Impact link */}
          <Link
            href="/impact"
            className={`font-['Poppins',sans-serif] font-medium text-[14px] tracking-wide ${textColor} hover:opacity-80 transition-all duration-300`}
          >
            Impact
          </Link>
          <Link
            href="/get-involved"
            className={`font-['Poppins',sans-serif] font-medium text-[14px] px-6 py-2.5 rounded-full transition-colors duration-300 ${
              isScrolled
                ? "bg-[#00356b] text-white hover:bg-[#4a90c4]"
                : "bg-white text-[#00356b] hover:bg-[#d6e8f7]"
            }`}
          >
            Volunteer
          </Link>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00356b] text-white font-['Poppins',sans-serif] font-medium text-[14px] px-6 py-2.5 rounded-full hover:bg-[#4a90c4] transition-colors duration-300"
          >
            Donate
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ${textColor} transition-colors duration-300`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="flex flex-col gap-4">
            {/* About Us with mobile sub-menu */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`font-['Poppins',sans-serif] font-medium text-[16px] tracking-wide hover:opacity-80 transition-opacity flex items-center gap-1.5 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                About Us
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      href={item.to}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileAboutOpen(false);
                      }}
                      className={`font-['Poppins',sans-serif] font-normal text-[15px] hover:opacity-80 transition-opacity ${
                        isScrolled ? "text-black/80" : "text-white/90"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services with mobile sub-menu */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`font-['Poppins',sans-serif] font-medium text-[16px] tracking-wide hover:opacity-80 transition-opacity flex items-center gap-1.5 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {servicesDropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      href={item.to}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className={`font-['Poppins',sans-serif] font-normal text-[15px] hover:opacity-80 transition-opacity ${
                        isScrolled ? "text-black/80" : "text-white/90"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Impact link */}
            <Link
              href="/impact"
              onClick={() => setMobileOpen(false)}
              className={`font-['Poppins',sans-serif] font-medium text-[16px] tracking-wide hover:opacity-80 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Impact
            </Link>
            <div className="flex gap-3 mt-2">
              <Link
                href="/get-involved"
                onClick={() => setMobileOpen(false)}
                className={`font-['Poppins',sans-serif] font-medium text-[14px] px-6 py-2.5 rounded-full text-center flex-1 ${
                  isScrolled
                    ? "bg-[#00356b] text-white"
                    : "bg-white text-[#00356b]"
                }`}
              >
                Volunteer
              </Link>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00356b] border border-white text-white font-['Poppins',sans-serif] font-medium text-[14px] px-6 py-2.5 rounded-full text-center flex-1"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}