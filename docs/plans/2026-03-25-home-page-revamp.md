# Home Page Revamp Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Revamp the HAVEN Free Clinic home page to feel fresh, inspiring, and welcoming for patients, adding impact stats, a "how it works" flow, and an eligibility snapshot, while squaring off all buttons site-wide (except navbar).

**Architecture:** Refine existing components (HeroBanner, MissionSection, ClinicGuideSection, ServicesSection) and create two new components (ImpactStats, HowItWorks, WhoWeServe). All sections use `max-w-[1400px]` outer container with `max-w-4xl mx-auto` inner content wrapper, consistent with other pages. Global button change: remove `rounded-full` from all non-navbar buttons.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, lucide-react icons

---

### Task 1: Square off all buttons site-wide (except navbar)

**Files:**
- Modify: `src/app/components/HeroBanner.tsx` (lines 41, 46)
- Modify: `src/app/components/ClinicGuideSection.tsx` (line 19)
- Modify: `src/app/components/ServicesSection.tsx` (line 59)
- Modify: `src/app/components/OurMissionContent.tsx` (line 110)

**Step 1: Remove `rounded-full` from HeroBanner buttons**

In `HeroBanner.tsx`, change line 41:
```
- <button className="bg-[#d6e8f7] text-[#00356b] px-7 py-3.5 rounded-full font-medium shadow-md hover:bg-white transition">
+ <button className="bg-[#d6e8f7] text-[#00356b] px-7 py-3.5 font-medium shadow-md hover:bg-white transition">
```

Change line 46:
```
- <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#00356b] transition">
+ <button className="border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-[#00356b] transition">
```

**Step 2: Remove `rounded-full` from ClinicGuideSection button**

In `ClinicGuideSection.tsx` line 19, remove `rounded-full` from the Link className.

**Step 3: Remove `rounded-full` from ServicesSection button**

In `ServicesSection.tsx` line 59, remove `rounded-full` from the anchor className.

**Step 4: Remove `rounded-full` from OurMissionContent button**

In `OurMissionContent.tsx` line 110, remove `rounded-full` from the Link className.

**Step 5: Verify build**

Run: `npx next build`
Expected: Build succeeds with no errors.

**Step 6: Commit**

```bash
git add src/app/components/HeroBanner.tsx src/app/components/ClinicGuideSection.tsx src/app/components/ServicesSection.tsx src/app/components/OurMissionContent.tsx
git commit -m "Square off all buttons site-wide except navbar"
```

---

### Task 2: Refine HeroBanner

**Files:**
- Modify: `src/app/components/HeroBanner.tsx`

**Step 1: Update the HeroBanner component**

Replace the full component with:

```tsx
import Link from "next/link";
import { Phone } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full text-white min-h-screen flex items-center pt-16 md:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/HAVEN In-Clinic Banner.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/80 via-[#002147]/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="font-['Merriweather',serif] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Quality care,
            <br />
            no cost
          </h1>

          {/* Subtext */}
          <p className="font-['Poppins',sans-serif] text-white/80 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 max-w-xl">
            Free, high-quality healthcare for uninsured adults in New Haven.
            No insurance needed. No hidden fees. Just care.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/eligibility"
              className="bg-white text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-8 py-3.5 hover:bg-[#d6e8f7] transition-colors"
            >
              See If You Qualify
            </Link>
            <a
              href="tel:2032000673"
              className="border-2 border-white text-white font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-8 py-3.5 hover:bg-white hover:text-[#00356b] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              (203) 200-0673
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Key changes:
- Font changed from generic `font-serif` to `font-['Merriweather',serif]`
- Single `<h1>` tag with `<br />` instead of two `<h1>` tags
- Buttons are now square (no rounded-full), use `<Link>` and `<a>` instead of `<button>`
- Primary CTA links to /eligibility, secondary CTA is a phone call with Phone icon
- Subtext updated: warmer, adds "No insurance needed. No hidden fees. Just care."
- Uses standard container padding (`max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16`)
- Uses standard Poppins font for body text with responsive sizing
- Removed commented-out old code at bottom of file

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/components/HeroBanner.tsx
git commit -m "Refine hero banner with Merriweather font, square buttons, and phone CTA"
```

---

### Task 3: Create ImpactStats component

**Files:**
- Create: `src/app/components/ImpactStats.tsx`

**Step 1: Create the component**

```tsx
export function ImpactStats() {
  const stats = [
    { value: "15+", label: "Years Serving New Haven" },
    { value: "10,000+", label: "Patient Visits" },
    { value: "100%", label: "Free of Charge" },
  ];

  return (
    <section className="w-full bg-[#00356b]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-['Merriweather',serif] font-bold text-white text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-none mb-2">
                  {stat.value}
                </p>
                <p className="font-['Poppins',sans-serif] text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/components/ImpactStats.tsx
git commit -m "Add ImpactStats component for home page"
```

---

### Task 4: Refine MissionSection to stacked layout

**Files:**
- Modify: `src/app/components/MissionSection.tsx`

**Step 1: Update to stacked layout with max-w-4xl**

Replace full component:

```tsx
export function MissionSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Our Mission
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            The HAVEN Free Clinic is a{" "}
            <span className="font-semibold">student-run primary care clinic</span> that
            partners with Yale University to provide sustainable, comprehensive,
            and high-quality{" "}
            <span className="font-semibold">
              health care <em className="font-medium">free</em> of charge
            </span>{" "}
            to uninsured adults in New Haven.
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/components/MissionSection.tsx
git commit -m "Refine MissionSection to stacked layout with max-w-4xl"
```

---

### Task 5: Create HowItWorks component

**Files:**
- Create: `src/app/components/HowItWorks.tsx`

**Step 1: Create the component**

```tsx
import { Phone, MapPin, Heart } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Call Us",
    description:
      "Call (203) 200-0673 to schedule. Leave a voicemail and we'll call you back.",
  },
  {
    number: "2",
    icon: MapPin,
    title: "Visit the Clinic",
    description:
      "Come to 800 Howard Ave on Saturday morning. Bring a photo ID — no insurance needed.",
  },
  {
    number: "3",
    icon: Heart,
    title: "Receive Care",
    description:
      "See a provider, get prescriptions, and access support services — all at no cost.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4 md:mb-6">
            Getting Care Is Simple
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-10 md:mb-14">
            Three steps to free, quality healthcare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00356b] flex items-center justify-center shrink-0">
                    <span className="font-['Merriweather',serif] font-bold text-white text-[20px] md:text-[24px]">
                      {step.number}
                    </span>
                  </div>
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-[#00356b]" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] sm:text-[20px] md:text-[22px] mb-3">
                  {step.title}
                </h3>
                <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/components/HowItWorks.tsx
git commit -m "Add HowItWorks component for home page"
```

---

### Task 6: Create WhoWeServe component

**Files:**
- Create: `src/app/components/WhoWeServe.tsx`

**Step 1: Create the component**

```tsx
import Link from "next/link";
import { User, MapPin, ShieldCheck, Stethoscope } from "lucide-react";

const criteria = [
  { icon: User, text: "Between 18 and 65 years old" },
  { icon: MapPin, text: "Reside in the Greater New Haven area" },
  { icon: ShieldCheck, text: "Currently uninsured" },
  { icon: Stethoscope, text: "Do not have a primary care provider" },
];

export function WhoWeServe() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Who We Serve
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            HAVEN Free Clinic provides care to adults in the Greater New Haven
            area who meet the following criteria:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
            {criteria.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-[#f7f9fc] border border-[#00356b]/10 px-5 py-4 md:px-6 md:py-5"
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00356b] shrink-0" />
                <span className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/eligibility"
            className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
          >
            Check Your Eligibility
          </Link>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/components/WhoWeServe.tsx
git commit -m "Add WhoWeServe eligibility snapshot component for home page"
```

---

### Task 7: Refine ServicesSection with max-w-4xl wrapper

**Files:**
- Modify: `src/app/components/ServicesSection.tsx`

**Step 1: Wrap content in max-w-4xl and add divider**

Replace full component:

```tsx
const services = [
  {
    title: "Patient Care",
    description:
      "We offer annual physical examinations, preventive screening, management of chronic conditions, and more.",
  },
  {
    title: "Social Services",
    description:
      "We support patients with medical debt, medical insurance, food insecurity, housing insecurity, and unemployment.",
  },
  {
    title: "Referrals",
    description:
      "We provide referrals to specialty services and diagnostic testing.",
  },
];

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-[#00356b] flex flex-col px-6 md:px-8 py-8 md:py-10 hover:shadow-lg transition-shadow">
      <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-6">
        {title}
      </h3>
      <p className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10 md:mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 md:mb-12">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/services"
              className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
            >
              All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Key changes:
- Wrapped in `max-w-4xl mx-auto`
- Added divider at top
- Removed fixed widths/min-heights from cards — uses responsive grid instead
- Cards use `text-black` for descriptions (consistent)
- Squared off "All Services" button (no rounded-full)
- Card text sizes adjusted to fit narrower layout

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/components/ServicesSection.tsx
git commit -m "Refine ServicesSection with max-w-4xl wrapper and consistent styling"
```

---

### Task 8: Refine ClinicGuideSection

**Files:**
- Modify: `src/app/components/ClinicGuideSection.tsx`

**Step 1: Update to use max-w-4xl and square button**

Replace full component:

```tsx
import Link from "next/link";

export function ClinicGuideSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4 md:mb-6">
            Clinic Guide
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10">
            Have an appointment? Access all of the information you need to prepare.
          </p>
          <Link
            href="/visitor-guide"
            className="inline-block bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
```

Key changes:
- Wrapped in `max-w-4xl mx-auto`
- Single divider at top (removed bottom divider — next section handles its own)
- Button left-aligned instead of centered, squared off
- Button sized consistently with other pages

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/components/ClinicGuideSection.tsx
git commit -m "Refine ClinicGuideSection with max-w-4xl and square button"
```

---

### Task 9: Wire up home page with new section order

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update page.tsx with new imports and section order**

```tsx
import HeroBanner from "@/app/components/HeroBanner";
import { ImpactStats } from "@/app/components/ImpactStats";
import { MissionSection } from "@/app/components/MissionSection";
import { HowItWorks } from "@/app/components/HowItWorks";
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
      <WhoWeServe />
      <ServicesSection />
      <ClinicGuideSection />
    </>
  );
}
```

**Step 2: Verify build**

Run: `npx next build`
Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "Wire up home page with new section order: hero, stats, mission, how-it-works, eligibility, services, clinic guide"
```

---

### Task 10: Visual review and polish

**Step 1: Start dev server and review in browser**

Run: `npx next dev`

Check the home page at `http://localhost:3000` and verify:
- Hero banner displays correctly with Merriweather heading, square buttons
- Impact stats bar shows 3 stats on navy background
- Mission section is stacked layout within max-w-4xl
- "How It Works" shows 3 steps in a row (stacks on mobile)
- "Who We Serve" shows 4 criteria cards in a 2x2 grid
- Services shows 3 cards in a row
- Clinic Guide section is clean with left-aligned button
- All dividers are consistent
- No rounded buttons except in navbar

**Step 2: Commit any polish fixes**

```bash
git add -A
git commit -m "Polish home page revamp"
```
