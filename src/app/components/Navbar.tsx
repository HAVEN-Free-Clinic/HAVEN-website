"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { HavenLogo } from "@/app/components/HavenLogo";
import { DONATE_URL } from "@/lib/links";
import { MyChart } from "@/app/components/BrandText";


const aboutDropdownItems = [
  { label: "About Us", to: "/about" },
  { label: "Our History", to: "/about/history" },
  { label: "Departments & Operations", to: "/about/operations" },
  { label: "Community Partners", to: "/about/partners" },
  { label: "Leadership Board", to: "/about/leadership" },
  { label: "Goetsch Endowment", to: "/about/endowment" },
  { label: "Newsletter", to: "/about/newsletter" },
  { label: "News", to: "/about/news" },
];

/*
 * Ordered the way a patient moves through the clinic rather than
 * alphabetically: the two orientation guides first, then clinical care, then
 * the departments that pick up where a Saturday visit leaves off.
 */
const servicesDropdownItems = [
  { label: "All Services", to: "/services" },
  { label: "Scope of Care", to: "/services/scope-of-care" },
  { label: "Navigating Healthcare", to: "/navigating-care" },
  { label: "Patient Care", to: "/services/patient-care" },
  { label: "Behavioral Health", to: "/services/behavioral-health" },
  { label: "Referrals", to: "/services/referrals" },
  { label: "Patient Navigation", to: "/services/patient-navigation" },
  { label: "The Compass Program", to: "/services/compass" },
  { label: "Social Services", to: "/services/social-services" },
  { label: "Insurance Counseling", to: "/services/debt-insurance" },
  { label: "Medication Access", to: "/services/medication" },
  { label: "Oral Health Initiative", to: "/services/dental" },
  { label: "Education", to: "/services/education" },
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
        <Link
          href="/"
          aria-label="HAVEN Free Clinic, home"
          className="notranslate flex items-center hover:opacity-90 transition-opacity"
        >
          <HavenLogo
            className={`h-[44px] md:h-[52px] w-auto ${textColor} transition-colors duration-300`}
          />
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
              aria-expanded={aboutOpen}
              aria-haspopup="true"
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
              aria-expanded={servicesOpen}
              aria-haspopup="true"
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
                    key={item.label}
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

          {/* Milestones & FAQs links */}
          <Link
            href="/milestones"
            className={`font-['Poppins',sans-serif] font-medium text-[14px] tracking-wide ${textColor} hover:opacity-80 transition-all duration-300`}
          >
            Milestones
          </Link>
          <Link
            href="/faqs"
            className={`font-['Poppins',sans-serif] font-medium text-[14px] tracking-wide ${textColor} hover:opacity-80 transition-all duration-300`}
          >
            FAQs
          </Link>
          <Link
            href="/get-involved"
            className={`font-['Poppins',sans-serif] font-medium text-[14px] px-6 py-2.5 rounded-[30px] transition-colors duration-300 ${
              isScrolled
                ? "border border-[#00356b] bg-white text-[#00356b] hover:bg-[#d6e8f7]"
                : "border bg-white text-[#00356b] hover:bg-[#d6e8f7]"
            }`}
          >
            Volunteer
          </Link>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Poppins',sans-serif] font-medium text-[14px] px-6 py-2.5 rounded-[30px] border bg-[#00356b] text-white hover:text-[#00356b] hover:bg-[#d6e8f7] transition-colors duration-300"
          >
            Donate
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden w-11 h-11 -mr-2 flex items-center justify-center ${textColor} transition-colors duration-300`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[600px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="flex flex-col gap-4">
            {/* About Us with mobile sub-menu */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                aria-expanded={mobileAboutOpen}
                aria-haspopup="true"
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
                aria-expanded={mobileServicesOpen}
                aria-haspopup="true"
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

            {/* Milestones & FAQs links */}
            <Link
              href="/milestones"
              onClick={() => setMobileOpen(false)}
              className={`font-['Poppins',sans-serif] font-medium text-[16px] tracking-wide hover:opacity-80 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Milestones
            </Link>
            <Link
              href="/faqs"
              onClick={() => setMobileOpen(false)}
              className={`font-['Poppins',sans-serif] font-medium text-[16px] tracking-wide hover:opacity-80 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              FAQs
            </Link>
            {/* MyChart is hidden in the TopBar below the sm breakpoint, so
                without this a phone user can only reach the patient portal
                from the footer. */}
            <Link
              href="/mychart"
              onClick={() => setMobileOpen(false)}
              className={`font-['Poppins',sans-serif] font-medium text-[16px] tracking-wide hover:opacity-80 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <MyChart />
            </Link>
            <div className="flex gap-3 mt-2">
              <Link
                href="/get-involved"
                onClick={() => setMobileOpen(false)}
                className={`font-['Poppins',sans-serif] font-medium text-[14px] px-6 py-2.5 rounded-[30px] text-center flex-1 ${
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