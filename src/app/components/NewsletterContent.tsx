import Link from "next/link";
import { FileText, Download, Mail, ArrowRight, Newspaper } from "lucide-react";
import { ISSUES, LATEST_ISSUE } from "@/lib/newsletters";

const SECTION = "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16";
const INNER = "max-w-4xl mx-auto";

export function NewsletterContent() {
  const archive = LATEST_ISSUE ? ISSUES.slice(1) : ISSUES;

  return (
    <section className="bg-white w-full">
      {/* ── Intro ── */}
      <div className={`${SECTION} pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14`}>
        <div className={INNER}>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            <span className="font-semibold text-[#00356b]">
              HAVEN Happenings
            </span>{" "}
            is the clinic newsletter. Each issue covers what has changed at
            HAVEN, the programs and partnerships we are building, and the
            volunteers and patients behind them. Read it here, or download the
            PDF to keep.
          </p>
        </div>
      </div>

      {/* ── Latest issue ── */}
      {LATEST_ISSUE && (
        <div className={`${SECTION} pb-10 md:pb-14`}>
          <div className={INNER}>
            <div className="bg-[#00356b] px-6 md:px-10 lg:px-12 py-8 md:py-10 lg:py-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] font-semibold text-white/60 text-[12px] md:text-[13px] uppercase tracking-wider">
                    Current issue
                  </p>
                  <h2 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[32px] leading-tight">
                    HAVEN Happenings, {LATEST_ISSUE.edition}
                  </h2>
                </div>
              </div>

              <p className="font-['Poppins',sans-serif] text-white/85 text-[15px] md:text-[17px] leading-relaxed mb-6 max-w-[720px]">
                {LATEST_ISSUE.summary}
              </p>

              <ul className="flex flex-wrap gap-2 mb-8">
                {LATEST_ISSUE.highlights.map((h) => (
                  <li
                    key={h}
                    className="font-['Poppins',sans-serif] text-white/90 text-[13px] md:text-[14px] bg-white/10 border border-white/15 px-3 py-1.5"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={LATEST_ISSUE.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#d6e8f7] transition-colors"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  Read this issue
                </a>
                <a
                  href={LATEST_ISSUE.href}
                  download
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={SECTION}>
        <div className={INNER}>
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Archive ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] mb-6 md:mb-8">
            Past Issues
          </h2>

          {archive.length === 0 ? (
            <p className="font-['Poppins',sans-serif] text-black/60 text-[15px] md:text-[17px] leading-relaxed">
              This is our first issue online. Past issues will be collected here
              as they are published.
            </p>
          ) : (
            <ul className="flex flex-col">
              {archive.map((issue) => (
                <li key={issue.href}>
                  <a
                    href={issue.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 py-5 border-b border-[#00356b]/10 px-3 -mx-3 hover:bg-[#00356b]/5 transition-colors"
                  >
                    <time
                      dateTime={String(issue.year)}
                      className="shrink-0 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[13px] md:text-[14px] bg-[#00356b]/8 px-2.5 py-1 mt-0.5 whitespace-nowrap"
                    >
                      {issue.edition}
                    </time>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] text-[#00356b]">
                        HAVEN Happenings
                        <FileText className="w-3.5 h-3.5 text-[#00356b]/40 group-hover:text-[#00356b] shrink-0" />
                      </span>
                      <span className="block font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[15px] leading-relaxed mt-1">
                        {issue.summary}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={SECTION}>
        <div className={INNER}>
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Elsewhere ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-16 md:pb-20 lg:pb-24`}>
        <div className={INNER}>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] mb-6 md:mb-8">
            More From HAVEN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <Link
              href="/about/news"
              className="group bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-7 hover:border-[#00356b]/40 hover:shadow-md transition-all"
            >
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                News Coverage
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                Stories about the clinic in Yale publications, the New Haven
                Register, and elsewhere, going back to 2011.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                Read the coverage
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/milestones"
              className="group bg-[#f7f9fc] border border-[#00356b]/15 p-6 md:p-7 hover:border-[#00356b]/40 hover:shadow-md transition-all"
            >
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[17px] md:text-[19px] mb-2">
                Milestones
              </h3>
              <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                Patients seen, prescriptions filled, and the numbers behind the
                clinic&apos;s work, published as our annual reports.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] group-hover:gap-2.5 transition-all">
                See the numbers
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="mt-8 border-l-4 border-[#00356b] bg-[#00356b]/5 px-5 py-4 flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#00356b] shrink-0 mt-0.5" />
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
              Want a copy of an issue, or have something you think belongs in
              the next one? Email{" "}
              <a
                href="mailto:haven.free.clinic@yale.edu"
                className="text-[#00356b] font-semibold underline hover:no-underline"
              >
                haven.free.clinic@yale.edu
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
