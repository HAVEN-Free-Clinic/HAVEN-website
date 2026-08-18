import Link from "next/link";
import { ArrowRight, ExternalLink, Heart } from "lucide-react";
import { DEPARTMENT_GROUPS, ALL_DEPARTMENTS } from "@/lib/departments";
import { DONATE_URL } from "@/lib/links";

const SECTION = "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16";
const INNER = "max-w-4xl mx-auto";

function Divider() {
  return (
    <div className={SECTION}>
      <div className={INNER}>
        <div className="w-full h-px bg-[#00356b]/10" />
      </div>
    </div>
  );
}

export function OperationsContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro ── */}
      <div className={`${SECTION} pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14`}>
        <div className={`${INNER} space-y-5`}>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            A Saturday morning at HAVEN looks like a primary care clinic. It is
            actually{" "}
            <span className="font-semibold text-[#00356b]">
              {ALL_DEPARTMENTS.length} departments
            </span>{" "}
            working at once, most of them doing work that happens on weekdays,
            over the phone, or in a spreadsheet, and almost none of it visible
            from an exam room.
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            This page is the whole clinic. What each department does, and how it
            holds up the rest.
          </p>
        </div>
      </div>

      {/* ── Jump links ── */}
      <div className={`${SECTION} pb-10 md:pb-14`}>
        <div className={`${INNER} flex flex-wrap gap-3`}>
          {DEPARTMENT_GROUPS.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="inline-flex items-center gap-1.5 border border-[#00356b]/30 text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[13px] md:text-[14px] px-4 py-2 hover:bg-[#00356b]/5 transition-colors"
            >
              {group.title}
            </a>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── The groups ── */}
      {DEPARTMENT_GROUPS.map((group) => (
        <div
          key={group.id}
          id={group.id}
          className={`scroll-mt-32 ${SECTION} pt-10 md:pt-14 pb-10 md:pb-14`}
        >
          <div className={INNER}>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-3">
              {group.title}
            </h2>
            <p className="font-['Poppins',sans-serif] text-black/70 text-[15px] md:text-[18px] leading-relaxed mb-8 max-w-[760px]">
              {group.blurb}
            </p>

            <div className="space-y-4 md:space-y-5">
              {group.departments.map((dept) => (
                <div
                  key={dept.slug}
                  id={dept.slug}
                  className="scroll-mt-32 bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-6 md:p-7"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] md:text-[21px]">
                      {dept.name}
                    </h3>
                    {dept.code && (
                      <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b]/50 text-[12px] md:text-[13px] uppercase tracking-wider">
                        {dept.code}
                      </span>
                    )}
                  </div>

                  <p className="font-['Poppins',sans-serif] font-medium text-black text-[15px] md:text-[17px] leading-relaxed mb-2.5">
                    {dept.role}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[16px] leading-relaxed">
                    {dept.detail}
                  </p>

                  {dept.href && (
                    <Link
                      href={dept.href}
                      className="group inline-flex items-center gap-1.5 mt-4 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px] hover:gap-2.5 transition-all"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <Divider />

      {/* ── Thank you ── */}
      <div className={`${SECTION} pt-10 md:pt-14 pb-16 md:pb-20 lg:pb-24`}>
        <div className={INNER}>
          <div className="bg-[#00356b] px-6 md:px-10 lg:px-14 py-10 md:py-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[30px]">
                Every One of These Is Volunteers
              </h2>
            </div>
            <p className="font-['Poppins',sans-serif] text-white/85 text-[15px] md:text-[17px] leading-relaxed mb-4 max-w-[720px]">
              Nobody on this page is paid. Not the students who staff the
              departments, and not the attending physicians and nurses who
              supervise every clinical encounter. They give up their Saturdays,
              and a good deal of the week around them, so that our patients can
              be seen.
            </p>
            <p className="font-['Poppins',sans-serif] text-white/85 text-[15px] md:text-[17px] leading-relaxed mb-8 max-w-[720px]">
              To all of them: thank you. The clinic is your work.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-[#d6e8f7] transition-colors"
              >
                Volunteer with us
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors"
              >
                Support the clinic
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
