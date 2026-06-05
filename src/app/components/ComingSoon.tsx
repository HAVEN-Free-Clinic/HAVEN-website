import svgPaths from "@/lib/svg-paths";

export function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top accent bar */}
      <div className="h-1.5 bg-[#00356b]" />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Wordmark */}
        <div className="notranslate flex items-center gap-2">
          <div className="relative w-[64px] h-[64px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 73.6439 76">
              <path d={svgPaths.pd9d0700} stroke="#00356b" strokeWidth="2.47477" />
            </svg>
            <span className="relative font-['Poppins',sans-serif] text-[13px] text-[#00356b] z-10">
              HAVEN
            </span>
          </div>
          <div className="font-['Poppins',sans-serif] text-[15px] md:text-[17px] text-[#00356b] leading-tight">
            <p>Free Clinic</p>
            <p>La Cl&iacute;nica Gratuita</p>
          </div>
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

        {/* MyChart button */}
        <a
          href="https://mychart.ynhhs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-[#00356b] hover:bg-[#002a55] transition-colors text-white font-['Poppins',sans-serif] font-semibold text-[14px] md:text-[15px] px-7 py-3 rounded-lg"
        >
          Access MyChart &rarr;
        </a>
      </main>

      <footer className="py-6 text-center">
        <p className="font-['Poppins',sans-serif] text-[#94a3b8] text-[13px]">
          &copy; {new Date().getFullYear()} HAVEN Free Clinic. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
