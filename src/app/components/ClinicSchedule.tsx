"use client";

import { useState, useEffect } from "react";
import { Calendar, Phone, Stethoscope } from "lucide-react";

/* ─── Types ─── */

interface ClinicDay {
  /** Calendar day as a UTC YYYY-MM-DD key, e.g. "2026-08-22". */
  date: string;
  /** Rotating specialty clinic running that day, or null on an ordinary Saturday. */
  specialty: string | null;
}

/* ─── Constants ─── */

/*
 * The schedule comes from HAVEN Hub, the clinic's internal app, which is where
 * directors already maintain the term calendar. It replaced a hand-kept Airtable
 * table that this component read directly with an API token embedded in the
 * client bundle -- so every visitor was shipped a live Airtable credential in
 * order to render four dates. The Hub endpoint is public and read-only and needs
 * no token at all.
 *
 * Hard-coded default rather than a required env var, deliberately. The old
 * Airtable vars were never set in the deploy workflow, so the section silently
 * showed its fallback in production for as long as it existed. A public URL is
 * not a secret, so the working value belongs in the source where it cannot be
 * forgotten; the env var stays as an override for pointing a preview build at
 * staging.
 */
const HUB_ORIGIN =
  process.env.NEXT_PUBLIC_HAVEN_HUB_URL ?? "https://hub.havenfreeclinic.org";

const SCHEDULE_URL = `${HUB_ORIGIN}/api/public/clinic-days?limit=4`;

/** The clinic runs one session a week, at the same hours every week. */
const DEFAULT_HOURS = "8:30 AM – 12:00 PM";

/** The rotating specialty clinics HAVEN runs on select Saturdays. */
const SPECIALTY_CLINICS = ["Nephrology", "Neurology", "Dermatology"] as const;

/* ─── Parsing ─── */

/**
 * Validate the payload rather than trusting it, returning null on anything
 * unexpected.
 *
 * Not defensive programming for its own sake: the Hub sits behind Vercel's
 * Attack Challenge Mode, which answers a request it wants to verify with an HTML
 * "Security Checkpoint" page and a 200-shaped body. A cross-origin fetch cannot
 * solve that challenge, so the realistic failure here is not a network error, it
 * is a well-formed HTTP response whose body is a web page. Treating that as data
 * would put `undefined` through the date formatter and render "Invalid Date"
 * cards to patients. A null here shows the phone-number fallback instead, which
 * is always a true statement.
 */
function parseClinicDays(payload: unknown): ClinicDay[] | null {
  if (typeof payload !== "object" || payload === null) return null;

  const { clinicDays } = payload as { clinicDays?: unknown };
  if (!Array.isArray(clinicDays)) return null;

  const parsed: ClinicDay[] = [];
  for (const entry of clinicDays) {
    if (typeof entry !== "object" || entry === null) return null;
    const { date, specialty } = entry as { date?: unknown; specialty?: unknown };
    // A date we cannot format is worse than no date at all.
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
    if (specialty !== null && typeof specialty !== "string") return null;
    parsed.push({ date, specialty });
  }
  return parsed;
}

/* ─── Hook ─── */

function useClinicSchedule() {
  const [dates, setDates] = useState<ClinicDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(SCHEDULE_URL, { signal: controller.signal, headers: { Accept: "application/json" } })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Hub responded ${res.status}`);
        const days = parseClinicDays(await res.json());
        if (!days) throw new Error("Unexpected schedule payload");
        setDates(days);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(true);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { dates, loading, error };
}

/* ─── Date Formatting ─── */

function formatDate(iso: string) {
  // Parsed as local midnight, not UTC: `new Date("2026-08-22")` is UTC midnight,
  // which renders as the 21st for anyone west of Greenwich.
  const d = new Date(iso + "T00:00:00");
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const day = d.getDate().toString().padStart(2, "0");
  const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
  return { month, day, weekday };
}

/* ─── Sub-components ─── */

function SkeletonCard() {
  return (
    <div className="flex gap-4 md:gap-6 items-start p-4 md:p-5 border border-[#00356b]/10 bg-[#f7f9fc] animate-pulse">
      <div className="text-center min-w-[56px] md:min-w-[64px]">
        <div className="h-3 w-8 bg-[#00356b]/10 mx-auto mb-2" />
        <div className="h-8 w-10 bg-[#00356b]/10 mx-auto mb-1" />
        <div className="h-3 w-6 bg-[#00356b]/10 mx-auto" />
      </div>
      <div className="flex-1">
        <div className="h-4 w-32 bg-[#00356b]/10 mb-3" />
        <div className="h-6 w-24 bg-[#00356b]/10" />
      </div>
    </div>
  );
}

function DateCard({ day }: { day: ClinicDay }) {
  const { month, day: dayNum, weekday } = formatDate(day.date);

  return (
    <div className="flex gap-4 md:gap-6 items-start p-4 md:p-5 border border-[#00356b]/10 bg-[#f7f9fc]">
      <div className="text-center min-w-[56px] md:min-w-[64px]">
        <p className="font-['Poppins',sans-serif] text-[11px] md:text-[12px] uppercase tracking-wider text-[#00356b]">
          {month}
        </p>
        <p className="font-['Merriweather',serif] text-[28px] md:text-[32px] font-bold text-[#00356b] leading-none">
          {dayNum}
        </p>
        <p className="font-['Poppins',sans-serif] text-[11px] md:text-[12px] text-[#00356b]/50">
          {weekday}
        </p>
      </div>
      <div>
        <p className="font-['Poppins',sans-serif] text-[13px] md:text-[14px] text-black/60 mb-2 md:mb-3">
          {DEFAULT_HOURS}
        </p>
        {day.specialty ? (
          <span className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[11px] md:text-[12px] bg-[#00356b] text-white px-2.5 py-1">
            <Stethoscope className="w-3.5 h-3.5 shrink-0" />
            {day.specialty} clinic
          </span>
        ) : (
          <span className="font-['Poppins',sans-serif] text-[11px] md:text-[12px] text-[#00356b]/60 border border-[#00356b]/20 px-2.5 py-1">
            Primary care
          </span>
        )}
      </div>
    </div>
  );
}

/** Shown whenever we cannot vouch for a list of dates. Always a true statement. */
function CallUsFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-5 md:p-6 border border-[#00356b]/10 bg-[#f7f9fc]">
      <Phone className="w-5 h-5 text-[#00356b] mt-0.5 shrink-0" />
      <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[16px] leading-relaxed">
        {children}
      </p>
    </div>
  );
}

/* ─── Main Component ─── */

export function ClinicSchedule() {
  const { dates, loading, error } = useClinicSchedule();

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <Calendar className="w-7 h-7 md:w-8 md:h-8 text-[#00356b]" />
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
              Upcoming Clinic Days
            </h2>
          </div>
          <p className="font-['Poppins',sans-serif] text-black/60 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-10 md:mb-14">
            Open Saturdays. Call{" "}
            <a
              href="tel:2032000673"
              className="text-[#00356b] underline hover:opacity-80"
            >
              (203) 200-0673
            </a>{" "}
            to schedule. Leave a voicemail and expect a callback within 24 hours.
          </p>

          {loading && (
            <div className="space-y-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}

          {/* Could not reach the Hub, or it answered with something unexpected. */}
          {!loading && error && (
            <CallUsFallback>
              Open Saturdays, {DEFAULT_HOURS}.
              <br />
              Call{" "}
              <a
                href="tel:2032000673"
                className="text-[#00356b] underline hover:opacity-80"
              >
                (203) 200-0673
              </a>{" "}
              for the latest schedule and available services.
            </CallUsFallback>
          )}

          {/* Reached the Hub, but the live term has no upcoming open dates. */}
          {!loading && !error && dates.length === 0 && (
            <CallUsFallback>
              No upcoming clinic dates are posted yet. Call{" "}
              <a
                href="tel:2032000673"
                className="text-[#00356b] underline hover:opacity-80"
              >
                (203) 200-0673
              </a>{" "}
              for availability.
            </CallUsFallback>
          )}

          {!loading && !error && dates.length > 0 && (
            <div className="space-y-3">
              {dates.map((day) => (
                <DateCard key={day.date} day={day} />
              ))}
            </div>
          )}

          {/*
            Kept even when the dates above are live. The cards only cover the next
            four Saturdays, so a patient waiting on the derm clinic six weeks out
            still needs to know the rotation exists and who to ask.
          */}
          <div className="mt-10 md:mt-12 bg-[#f7f9fc] border border-[#00356b]/10 border-l-4 border-l-[#00356b] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-[#00356b] shrink-0" />
              <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[18px] sm:text-[20px] md:text-[22px]">
                Specialty clinics on select Saturdays
              </h3>
            </div>
            <p className="font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-5">
              Alongside primary care, HAVEN runs rotating specialty clinics on
              particular Saturdays, staffed by attending specialists:
            </p>
            <ul className="flex flex-wrap gap-2 md:gap-2.5 mb-5">
              {SPECIALTY_CLINICS.map((specialty) => (
                <li
                  key={specialty}
                  className="font-['Poppins',sans-serif] text-[#00356b] text-[13px] sm:text-[14px] md:text-[15px] bg-white border border-[#00356b]/20 px-3 py-1.5"
                >
                  {specialty}
                </li>
              ))}
            </ul>
            <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] sm:text-[15px] leading-relaxed">
              Which specialty runs on which Saturday changes through the term. Any
              date above shows the clinic running that day. For dates further out,
              ask your care team or call{" "}
              <a
                href="tel:2032000673"
                className="text-[#00356b] underline hover:opacity-80"
              >
                (203) 200-0673
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
