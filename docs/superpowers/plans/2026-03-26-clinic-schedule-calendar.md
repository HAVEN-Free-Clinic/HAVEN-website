# Clinic Schedule Calendar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an Airtable-powered "Upcoming Clinic Days" section to the homepage showing the next 4 Saturdays the clinic is open and what services are available each day.

**Architecture:** A single client component (`ClinicSchedule`) with a co-located `useClinicSchedule` hook that fetches from the Airtable REST API. When env vars are missing or the API fails, a static fallback renders instead. The component is inserted into the homepage between HowItWorks and WhoWeServe.

**Tech Stack:** Next.js 15 (static export), React 18, TypeScript, Tailwind CSS, Airtable REST API (no SDK)

**Spec:** `docs/superpowers/specs/2026-03-26-clinic-schedule-calendar-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `src/app/components/ClinicSchedule.tsx` | Create | `useClinicSchedule` hook + `ClinicSchedule` component — all Airtable fetching, date formatting, loading/error/empty/normal states |
| `src/app/page.tsx` | Modify | Import `ClinicSchedule` and place it after `<HowItWorks />` |

---

### Task 1: Create the ClinicSchedule component with static fallback

This task builds the full component file. Since there is no test infrastructure in this project (no test runner configured), we build it directly and verify visually via the dev server.

**Files:**
- Create: `src/app/components/ClinicSchedule.tsx`

- [ ] **Step 1: Create `src/app/components/ClinicSchedule.tsx` with types, hook, and component**

```tsx
"use client";

import { useState, useEffect } from "react";
import { Calendar, Phone } from "lucide-react";

/* ─── Types ─── */

interface ClinicDay {
  date: string;       // ISO date string, e.g. "2026-03-29"
  services: string[];
  hours: string;      // defaults to "8:30 AM – 12:00 PM"
}

interface AirtableRecord {
  fields: {
    Date?: string;
    Services?: string[];
    Closed?: boolean;
    Hours?: string;
  };
}

interface AirtableResponse {
  records: AirtableRecord[];
}

/* ─── Constants ─── */

const DEFAULT_HOURS = "8:30 AM – 12:00 PM";

/* ─── Hook ─── */

function useClinicSchedule() {
  const [dates, setDates] = useState<ClinicDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY ?? "";
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID ?? "";
  const tableName =
    process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME ?? "Clinic Schedule";

  const configured = apiKey !== "" && baseId !== "";

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }

    const url = new URL(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`
    );
    url.searchParams.set(
      "filterByFormula",
      "AND(IS_AFTER({Date}, TODAY()), NOT({Closed}))"
    );
    url.searchParams.set("sort[0][field]", "Date");
    url.searchParams.set("sort[0][direction]", "asc");
    url.searchParams.set("maxRecords", "4");

    fetch(url.toString(), {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Airtable responded ${res.status}`);
        return res.json() as Promise<AirtableResponse>;
      })
      .then((data) => {
        const days: ClinicDay[] = data.records
          .filter((r) => r.fields.Date)
          .map((r) => ({
            date: r.fields.Date!,
            services: r.fields.Services ?? [],
            hours: r.fields.Hours || DEFAULT_HOURS,
          }));
        setDates(days);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [configured, apiKey, baseId, tableName]);

  return { dates, loading, error, configured };
}

/* ─── Date Formatting ─── */

function formatDate(iso: string) {
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
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-[#00356b]/10" />
          <div className="h-6 w-24 bg-[#00356b]/10" />
        </div>
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
          {day.hours}
        </p>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {day.services.map((service) => (
            <span
              key={service}
              className="font-['Poppins',sans-serif] text-[11px] md:text-[12px] bg-[#00356b] text-white px-2.5 py-1"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export function ClinicSchedule() {
  const { dates, loading, error, configured } = useClinicSchedule();

  const showFallback = !configured || error;

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
            Open Saturdays — call{" "}
            <a
              href="tel:2032000673"
              className="text-[#00356b] underline hover:opacity-80"
            >
              (203) 200-0673
            </a>{" "}
            to schedule. Leave a voicemail and expect a callback within 24 hours.
          </p>

          {/* Fallback: no config or API error */}
          {showFallback && (
            <div className="flex items-start gap-4 p-5 md:p-6 border border-[#00356b]/10 bg-[#f7f9fc]">
              <Phone className="w-5 h-5 text-[#00356b] mt-0.5 shrink-0" />
              <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[16px] leading-relaxed">
                Open Saturdays, 8:30 AM – 12:00 PM. Call{" "}
                <a
                  href="tel:2032000673"
                  className="text-[#00356b] underline hover:opacity-80"
                >
                  (203) 200-0673
                </a>{" "}
                for the latest schedule and available services.
              </p>
            </div>
          )}

          {/* Loading skeleton */}
          {!showFallback && loading && (
            <div className="space-y-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}

          {/* Empty: Airtable connected but no upcoming dates */}
          {!showFallback && !loading && dates.length === 0 && (
            <div className="flex items-start gap-4 p-5 md:p-6 border border-[#00356b]/10 bg-[#f7f9fc]">
              <Calendar className="w-5 h-5 text-[#00356b] mt-0.5 shrink-0" />
              <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[16px] leading-relaxed">
                No upcoming clinic dates scheduled yet. Call{" "}
                <a
                  href="tel:2032000673"
                  className="text-[#00356b] underline hover:opacity-80"
                >
                  (203) 200-0673
                </a>{" "}
                for availability.
              </p>
            </div>
          )}

          {/* Normal: date cards */}
          {!showFallback && !loading && dates.length > 0 && (
            <div className="space-y-3">
              {dates.map((day) => (
                <DateCard key={day.date} day={day} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the file was created**

Run: `ls -la src/app/components/ClinicSchedule.tsx`
Expected: File exists

- [ ] **Step 3: Commit the component**

```bash
git add src/app/components/ClinicSchedule.tsx
git commit -m "feat: add ClinicSchedule component with Airtable hook and fallback states"
```

---

### Task 2: Add ClinicSchedule to the homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add the import and component to `src/app/page.tsx`**

Add the import after the HowItWorks import:

```tsx
import { ClinicSchedule } from "@/app/components/ClinicSchedule";
```

Add the component between `<HowItWorks />` and `<WhoWeServe />`:

```tsx
<HowItWorks />
<ClinicSchedule />
<WhoWeServe />
```

The full file should read:

```tsx
import HeroBanner from "@/app/components/HeroBanner";
import { ImpactStats } from "@/app/components/ImpactStats";
import { MissionSection } from "@/app/components/MissionSection";
import { HowItWorks } from "@/app/components/HowItWorks";
import { ClinicSchedule } from "@/app/components/ClinicSchedule";
import { WhoWeServe } from "@/app/components/WhoWeServe";
import { ServicesSection } from "@/app/components/ServicesSection";
import { ClinicGuideSection } from "@/app/components/ClinicGuideSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ImpactStats />
      <MissionSection />
      <HowItWorks />
      <ClinicSchedule />
      <WhoWeServe />
      <ServicesSection />
      <ClinicGuideSection />
    </>
  );
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Run: `cd /Users/jcarney/Desktop/HAVENFreeClinic && npx next build 2>&1 | tail -20`
Expected: Build succeeds. The ClinicSchedule component should render the static fallback (since no Airtable env vars are set).

- [ ] **Step 3: Commit the homepage change**

```bash
git add src/app/page.tsx
git commit -m "feat: add ClinicSchedule section to homepage after How It Works"
```
