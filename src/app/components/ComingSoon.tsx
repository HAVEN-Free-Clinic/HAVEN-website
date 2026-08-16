import Link from "next/link";
import { HavenLogo } from "@/app/components/HavenLogo";

export function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top accent bar */}
      <div className="h-1.5 bg-[#00356b]" />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Wordmark */}
        <div className="notranslate">
          <HavenLogo
            title="HAVEN Free Clinic, La Cl&iacute;nica Gratuita"
            className="h-[56px] md:h-[68px] w-auto text-[#00356b]"
          />
        </div>

        {/* Pill */}
        <span className="mt-8 inline-block bg-[#d6e8f7] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[12px] md:text-[13px] tracking-[0.12em] uppercase px-4 py-1.5 rounded-full">
          Coming Soon
        </span>

        {/* Headline */}
        <h1 className="mt-5 font-['Poppins',sans-serif] font-semibold text-[#1a202c] text-[26px] md:text-[34px] text-center leading-tight max-w-2xl">
          A new website is on its way
        </h1>
        <p className="mt-4 font-['Poppins',sans-serif] text-[#64748b] text-[15px] md:text-[17px] text-center leading-relaxed max-w-xl">
          We&rsquo;re revamping havenfreeclinic.org to serve you better. In the
          meantime, we&rsquo;re still here for you every Saturday.
        </p>

        {/* Info cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          <div className="bg-[#f1f5f9] rounded-xl p-5">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[12px] tracking-[0.08em] uppercase mb-2">
              Hours
            </h2>
            <p className="font-['Poppins',sans-serif] text-[#334155] text-[14px] md:text-[15px] leading-relaxed">
              Saturday
              <br />
              8:30am &ndash; 12:00pm
            </p>
          </div>
          <div className="bg-[#f1f5f9] rounded-xl p-5">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[12px] tracking-[0.08em] uppercase mb-2">
              Visit Us
            </h2>
            <p className="font-['Poppins',sans-serif] text-[#334155] text-[14px] md:text-[15px] leading-relaxed">
              Yale Physicians Building,
              <br />
              800 Howard Avenue, Floor 1,
              <br />
              New Haven, CT 06519
            </p>
            <p className="font-['Poppins',sans-serif] text-[#64748b] text-[12px] mt-1.5">
              Free parking in the Howard Avenue Garage
            </p>
          </div>
          <div className="bg-[#f1f5f9] rounded-xl p-5">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[12px] tracking-[0.08em] uppercase mb-2">
              Contact
            </h2>
            <div className="font-['Poppins',sans-serif] text-[#334155] text-[14px] md:text-[15px] leading-relaxed flex flex-col">
              <a href="tel:2032000673" className="hover:underline">
                (203) 200-0673
              </a>
              <a href="mailto:haven.free.clinic@yale.edu" className="hover:underline break-all">
                haven.free.clinic@yale.edu
              </a>
              <span className="text-[#64748b] text-[12px] mt-1">Fax: (203) 436-9928</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a
            href="https://mychart.ynhhs.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Access MyChart (opens in a new tab)"
            className="inline-block bg-[#00356b] hover:bg-[#002a55] transition-colors text-white font-['Poppins',sans-serif] font-semibold text-[14px] md:text-[15px] px-7 py-3 rounded-lg"
          >
            <span className="notranslate" translate="no">MyChart</span>&nbsp;&rarr;
          </a>
          <a
            href="https://givetoday.yale.edu/campaigns/67229/donations/new?designation_id=16596"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate to HAVEN Free Clinic (opens in a new tab)"
            className="inline-block bg-white hover:bg-[#d6e8f7] transition-colors text-[#00356b] border-2 border-[#00356b] font-['Poppins',sans-serif] font-semibold text-[14px] md:text-[15px] px-7 py-3 rounded-lg"
          >
            Donate &#10084;
          </a>
          <Link
            href="/get-involved"
            className="inline-block bg-white hover:bg-[#d6e8f7] transition-colors text-[#00356b] border-2 border-[#00356b] font-['Poppins',sans-serif] font-semibold text-[14px] md:text-[15px] px-7 py-3 rounded-lg"
          >
            Volunteer With Us &rarr;
          </Link>
        </div>

        {/* Volunteer recruitment note */}
        <p className="mt-8 font-['Poppins',sans-serif] text-[#334155] text-[14px] md:text-[15px] text-center leading-relaxed max-w-xl">
          <span className="font-semibold text-[#00356b]">
            Fall Volunteer Recruitment 2026 is open.
          </span>{" "}
          Applications are due Saturday, September 12th at 11:59 PM EDT.{" "}
          <Link
            href="/get-involved"
            className="text-[#00356b] font-semibold underline hover:no-underline"
          >
            See volunteer details
          </Link>
          .
        </p>

        {/* Recruitment contact */}
        <p className="mt-4 font-['Poppins',sans-serif] text-[#64748b] text-[13px] md:text-[14px] text-center leading-relaxed max-w-xl">
          For all recruitment related inquiries, please contact{" "}
          <a
            href="mailto:hfc.recruitment@yale.edu"
            className="text-[#00356b] font-semibold hover:underline break-all"
          >
            hfc.recruitment@yale.edu
          </a>
        </p>
      </main>

      <footer className="py-6 text-center">
        <p className="font-['Poppins',sans-serif] text-[#94a3b8] text-[13px]">
          &copy; {new Date().getFullYear()} HAVEN Free Clinic. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
