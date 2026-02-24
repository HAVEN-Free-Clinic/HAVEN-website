# HAVEN Free Clinic — Next.js Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate the HAVEN Free Clinic website from broken Figma/Vite export to a clean Next.js App Router site with consistent design, optimized images, and deployable to GitHub.

**Architecture:** Next.js 15 App Router with Tailwind CSS v4. All components are client components (interactive header/nav). Images served from `public/images/` via `next/image`. File-based routing replaces React Router.

**Tech Stack:** Next.js 15, React 18, Tailwind CSS v4, TypeScript, lucide-react

---

## Phase 1: Project Setup

### Task 1: Initialize Next.js and install dependencies

**Files:**
- Modify: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Delete: `vite.config.ts`
- Delete: `postcss.config.mjs`
- Delete: `src/main.tsx`
- Delete: `src/app/App.tsx`
- Delete: `src/app/routes.ts`

**Step 1: Remove Vite and install Next.js**

```bash
rm vite.config.ts postcss.config.mjs src/main.tsx src/app/App.tsx src/app/routes.ts
```

**Step 2: Rewrite package.json**

```json
{
  "name": "havenfreeclinic",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^15.1.0",
    "lucide-react": "^0.487.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.2.0",
    "class-variance-authority": "^0.7.1",
    "tw-animate-css": "^1.3.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.12",
    "tailwindcss": "^4.1.12",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@types/node": "^22.0.0",
    "typescript": "^5.7.0"
  }
}
```

**Step 3: Create next.config.ts**

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig
```

**Step 4: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Step 5: Create postcss.config.mjs for Tailwind v4 + Next.js**

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

**Step 6: Delete node_modules and reinstall**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Step 7: Verify Next.js starts (will fail until layout exists, that's fine)**

```bash
npx next build 2>&1 | head -5
# Expected: Error about missing app/layout.tsx
```

**Step 8: Commit**

```bash
git add -A && git commit -m "chore: replace Vite with Next.js, strip unused dependencies"
```

---

### Task 2: Compress images and move to public/images/

**Files:**
- Create: `public/images/` (all renamed, compressed images)
- Delete: `src/assets/` (entire directory after migration)

**Step 1: Create public/images directory**

```bash
mkdir -p public/images
```

**Step 2: Compress and rename all images using sips (macOS built-in)**

The image mapping (hash → descriptive name):

| Hash | New Name | Used By |
|------|----------|---------|
| b0ead7cb... | hero-newhaven.png | HeroBanner, HomeRevised |
| 08bc2479... | 5k-event.png | FiveKSection |
| 0e312a03... | services-hero.png | ServicesPage |
| 2d8c0748... | patient-care.png | PatientCarePage, ServicesContent |
| eb59935a... | patient-care-hero.png | PatientCare import |
| 97da01aa... | education-card.png | ServicesContent |
| 16b10f24... | medication.png | MedicationPage, ServicesContent |
| 2a518913... | social-services-card.png | ServicesContent |
| 0cdd1133... | debt-insurance-card.png | ServicesContent |
| e97787bb... | referrals-card.png | ServicesContent |
| b4657830... | referrals-hero.png | ReferralsPage |
| c7b9a35a... | mdic-hero.png | MDICPage |
| d714e543... | education-hero.png | EducationPage |
| 05d70ea0... | social-services-hero.png | SocialServicesPage |
| ce4912f5... | visitor-guide-hero.png | VisitorGuidePage |
| 918de122... | faqs-hero.png | FAQsPage |
| a5d530e2... | jack-carney.png | LeadershipBoardContent |
| a541bce3... | yale-nursing-logo.png | CommunityPartnersContent |
| b1250b44... | yale-public-health-logo.png | CommunityPartnersContent |
| 0dd2a2e8... | yale-medicine-logo.png | CommunityPartnersContent |
| bc9df997... | ynhh-northeast-logo.png | CommunityPartnersContent |
| 7df9d249... | ynhh-logo.png | CommunityPartnersContent |
| 29d8a508... | project-access-logo.png | CommunityPartnersContent |
| 158dcc89... | yale-wordmark.png | CommunityPartnersContent |
| c6386d59... | medicare-card.png | MDICContent |
| a3201533... | medicaid-card.png | MDICContent |
| 8f898435... | ynhh-card.png | MDICContent |

```bash
# Copy and rename each image
cp src/assets/b0ead7cba7eb36fa2577037d1f3c759ed9b4c708.png public/images/hero-newhaven.png
cp src/assets/08bc2479aaad76e3934f3d8148c5590d13018ea0.png public/images/5k-event.png
cp src/assets/0e312a032f2412995e302fd01fad19eb91d77427.png public/images/services-hero.png
cp src/assets/2d8c07484ea5ab37a4b5ec6fe3eae9cc1a02a1aa.png public/images/patient-care.png
cp src/assets/eb59935ad66ccc9aff9f1a0f4f080e9f79fd6398.png public/images/patient-care-hero.png
cp src/assets/97da01aacd7393b24d3c40dd6f54af981163fa9a.png public/images/education-card.png
cp src/assets/16b10f24154cf6807d89133de2f5280fcc21b0cd.png public/images/medication.png
cp src/assets/2a5189130667e6324b37bd58e2344915d2b8b818.png public/images/social-services-card.png
cp src/assets/0cdd1133a5bfe4eeed533db26db70cf7b53ab617.png public/images/debt-insurance-card.png
cp src/assets/e97787bbda5fe71f2bf9c004c468353767f8c168.png public/images/referrals-card.png
cp src/assets/b46578f0568fe84e23fc988d15a4b5b81b10c70d.png public/images/referrals-hero.png
cp src/assets/c7b9a35a9a22d0516ae39b88a876f087e5530300.png public/images/mdic-hero.png
cp src/assets/d714e5438d38c0471dd0d122f436c3b6a59b8b87.png public/images/education-hero.png
cp src/assets/05d70ea0ab2bcf032b62901519e8b8465c726cc9.png public/images/social-services-hero.png
cp src/assets/ce4912f511be824608b09c007a1555823e3caa31.png public/images/visitor-guide-hero.png
cp src/assets/918de12230c462a9c63d58707a8707a61722df7b.png public/images/faqs-hero.png
cp src/assets/a5d530e299481e46900f0e24700e66b973536ba5.png public/images/jack-carney.png
cp src/assets/a541bce30b7d3c26245b2506fd9dd530a10d654b.png public/images/yale-nursing-logo.png
cp src/assets/b1250b442dce55920214731e21065f46bcc71243.png public/images/yale-public-health-logo.png
cp src/assets/0dd2a2e87045d696cb232dfca6627e583339752b.png public/images/yale-medicine-logo.png
cp src/assets/bc9df997e2f8d63a6dd9689b61428b74d8b803cd.png public/images/ynhh-northeast-logo.png
cp src/assets/7df9d2490e4f169ba323633290bd31907066be23.png public/images/ynhh-logo.png
cp src/assets/29d8a508006bd48dbab7b2af79c4ea8121dd9aa2.png public/images/project-access-logo.png
cp src/assets/158dcc890c0cf2af790eaaaec5396958e7078684.png public/images/yale-wordmark.png
cp src/assets/c6386d59f4cfc975be2437defc1ea73f4dfd0adb.png public/images/medicare-card.png
cp src/assets/a320153344864cb5854263a70ab25479b0a821fd.png public/images/medicaid-card.png
cp src/assets/8f89843512f5206b2638aa110e937120190d016a.png public/images/ynhh-card.png
```

**Step 3: Compress large images (>500KB) using sips**

```bash
# Resize images >1MB to max 1920px width (maintains aspect ratio)
for img in public/images/hero-newhaven.png public/images/5k-event.png public/images/services-hero.png public/images/patient-care.png public/images/patient-care-hero.png public/images/education-card.png public/images/visitor-guide-hero.png public/images/faqs-hero.png public/images/jack-carney.png public/images/medicaid-card.png public/images/ynhh-card.png public/images/education-hero.png; do
  sips --resampleWidth 1920 "$img" 2>/dev/null
done
```

**Step 4: Delete old assets directory**

```bash
rm -rf src/assets
```

**Step 5: Commit**

```bash
git add -A && git commit -m "chore: compress and rename images to public/images/"
```

---

### Task 3: Set up styling (CSS files for Next.js + Tailwind v4)

**Files:**
- Modify: `src/styles/index.css`
- Modify: `src/styles/fonts.css`
- Modify: `src/styles/theme.css`
- Modify: `src/styles/tailwind.css`

**Step 1: Update tailwind.css for Next.js (postcss-based, not vite plugin)**

```css
@import 'tailwindcss';
@source '../**/*.{js,ts,jsx,tsx}';
@import 'tw-animate-css';
```

**Step 2: Keep fonts.css, theme.css, and index.css as-is**

These files are framework-agnostic CSS — no changes needed.

**Step 3: Verify no build errors related to CSS**

Run build after layout exists (Task 4).

**Step 4: Commit**

```bash
git add -A && git commit -m "chore: update Tailwind CSS config for Next.js"
```

---

## Phase 2: Layout & Shared Components

### Task 4: Create Next.js app layout and port layout components

**Files:**
- Create: `src/app/layout.tsx` (root layout)
- Modify: `src/app/components/Layout.tsx` → becomes a client component wrapper
- Modify: `src/app/components/StickyHeader.tsx` — add "use client"
- Modify: `src/app/components/TopBar.tsx` — add "use client", fix color #0f4d92 → #034078
- Modify: `src/app/components/Navbar.tsx` — add "use client", replace react-router Link with next/link
- Modify: `src/app/components/Footer.tsx` — replace react-router Link with next/link, fix color
- Modify: `src/app/components/TranslateDropdown.tsx` — add "use client" if interactive
- Move: `src/imports/svg-7yvkqvpr6s.ts` → `src/lib/svg-paths.ts`
- Delete: `index.html` (Next.js generates its own)

**Step 1: Create root layout at `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "@/styles/index.css";
import { StickyHeader } from "@/app/components/StickyHeader";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "HAVEN Free Clinic",
  description:
    "High-quality health care, free of charge. HAVEN Free Clinic provides medical services to uninsured and underinsured patients in the New Haven community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full bg-white antialiased">
        <StickyHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Step 2: Add "use client" to all interactive layout components**

Every component that uses useState, useEffect, or event handlers needs "use client" at the top:
- `StickyHeader.tsx` — line 1: add `"use client";`
- `TopBar.tsx` — line 1: add `"use client";` (if TranslateDropdown is interactive)
- `Navbar.tsx` — line 1: add `"use client";`
- `TranslateDropdown.tsx` — line 1: add `"use client";`

**Step 3: Replace all react-router imports with next/link**

In `Navbar.tsx`:
- Replace `import { Link } from "react-router";` with `import Link from "next/link";`
- Replace all `<Link to="...">` with `<Link href="...">`

In `Footer.tsx`:
- Same Link replacement

**Step 4: Move SVG paths file**

```bash
mkdir -p src/lib
cp src/imports/svg-7yvkqvpr6s.ts src/lib/svg-paths.ts
```

Update imports in Navbar.tsx and Footer.tsx:
- Replace `from "../../imports/svg-7yvkqvpr6s"` with `from "@/lib/svg-paths"`

**Step 5: Fix brand color in TopBar.tsx**

Replace `bg-[#0f4d92]` with `bg-[#034078]` on line 6.

**Step 6: Fix brand color in Footer.tsx**

Replace `bg-[#0f4d92]` with `bg-[#034078]` on line 6.

**Step 7: Fix brand color in Navbar.tsx**

Replace all instances of `#0f4d92` with `#034078` (donate button, mobile menu backgrounds, dropdown hovers).

**Step 8: Delete old files**

```bash
rm index.html src/app/components/Layout.tsx
```

**Step 9: Delete unused imports directory**

```bash
rm -rf src/imports
```

Recreate only the SVG file at new location (already done in step 4).

**Step 10: Commit**

```bash
git add -A && git commit -m "feat: create Next.js root layout, port header/footer components"
```

---

### Task 5: Port shared components (PageHero, ErrorPage)

**Files:**
- Modify: `src/app/components/PageHero.tsx` — use next/image, fix design
- Modify: `src/app/components/ErrorPage.tsx` → becomes `src/app/not-found.tsx`

**Step 1: Rewrite PageHero to use next/image**

```tsx
import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  tall?: boolean;
}

export function PageHero({ imageSrc, imageAlt, title, subtitle, tall = false }: PageHeroProps) {
  return (
    <section
      className={`relative w-full bg-black overflow-hidden ${
        tall
          ? "h-[500px] sm:h-[600px] md:h-[700px] lg:h-[846px]"
          : "h-[340px] sm:h-[380px] md:h-[420px] lg:h-[480px]"
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover opacity-80"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[600px] h-[300px] bg-black/15 blur-[75px] rounded-[400px]" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[140px] sm:pt-[160px] md:pt-[180px] lg:pt-[220px]">
        {subtitle && (
          <h2 className="font-['Merriweather',serif] font-bold text-white text-[22px] sm:text-[26px] md:text-[32px] mb-2 md:mb-4">
            {subtitle}
          </h2>
        )}
        <h1 className="font-['Poppins',sans-serif] font-bold text-white text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
```

**Step 2: Create not-found.tsx from ErrorPage**

Read current `ErrorPage.tsx` and adapt to Next.js not-found page pattern. Replace react-router `Link` with `next/link`, add "use client" if interactive.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: port PageHero with next/image, create not-found page"
```

---

## Phase 3: Port All Pages

### Task 6: Port homepage and its components

**Files:**
- Create: `src/app/page.tsx` (homepage)
- Modify: `src/app/components/HeroBanner.tsx` — next/image, fix figma import
- Modify: `src/app/components/MissionSection.tsx` — fix max-w to 1400px
- Modify: `src/app/components/ClinicGuideSection.tsx` — fix max-w, fix button radius, replace Link
- Modify: `src/app/components/ServicesSection.tsx` — fix max-w, add card border-radius, replace Link
- Modify: `src/app/components/FiveKSection.tsx` — next/image, fix max-w, fix figma import

**Step 1: Create `src/app/page.tsx`**

```tsx
import { HeroBanner } from "@/app/components/HeroBanner";
import { MissionSection } from "@/app/components/MissionSection";
import { ClinicGuideSection } from "@/app/components/ClinicGuideSection";
import { ServicesSection } from "@/app/components/ServicesSection";
import { FiveKSection } from "@/app/components/FiveKSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionSection />
      <ClinicGuideSection />
      <ServicesSection />
      <FiveKSection />
    </>
  );
}
```

**Step 2: Fix each homepage component**

For each component:
1. Replace `figma:asset/...` imports with `"/images/filename.png"` string (for next/image src)
2. Replace `<img>` tags with `<Image>` from next/image where appropriate
3. Replace `react-router` Link with `next/link` Link (`to` → `href`)
4. Fix `max-w-[1200px]` → `max-w-[1400px]`
5. Fix button border-radius to `rounded-full`
6. Add `"use client"` if component has interactivity
7. Standardize colors: all `#0f4d92` → `#034078`

**Step 3: Verify homepage renders**

```bash
npm run dev
# Visit http://localhost:3000
```

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: port homepage with all sections"
```

---

### Task 7: Port About section pages

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/app/about/history/page.tsx`
- Create: `src/app/about/leadership/page.tsx`
- Create: `src/app/about/endowment/page.tsx`
- Create: `src/app/about/partners/page.tsx`
- Modify: `src/app/components/OurMissionContent.tsx` — fix max-w, colors, Link
- Modify: `src/app/components/HistoryContent.tsx` — fix max-w, colors
- Modify: `src/app/components/LeadershipBoardContent.tsx` — fix colors, images
- Modify: `src/app/components/CommunityPartnersContent.tsx` — fix images
- Modify: `src/app/components/GoetschEndowmentContent.tsx` — fix colors

Each page file follows the same pattern. Example for `src/app/about/page.tsx`:

```tsx
import { PageHero } from "@/app/components/PageHero";
import { OurMissionContent } from "@/app/components/OurMissionContent";

export default function AboutPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero-newhaven.png"
        imageAlt="About HAVEN Free Clinic"
        title="About Us"
        subtitle="HAVEN Free Clinic"
      />
      <OurMissionContent />
    </>
  );
}
```

**Design fixes for each content component:**
- All `max-w-[1200px]` → `max-w-[1400px]`
- All `#0f4d92` → `#034078`
- All react-router Link → next/link (to → href)
- All `figma:asset/...` imports → `"/images/..."` paths with next/image
- LeadershipBoardContent: `#1282a2` link color → `#034078`
- Button radius: standardize to `rounded-full`

**Commit:**

```bash
git add -A && git commit -m "feat: port About section pages"
```

---

### Task 8: Port Services section pages

**Files:**
- Create: `src/app/services/page.tsx`
- Create: `src/app/services/medication/page.tsx`
- Create: `src/app/services/patient-care/page.tsx`
- Create: `src/app/services/referrals/page.tsx`
- Create: `src/app/services/social-services/page.tsx`
- Create: `src/app/services/education/page.tsx`
- Create: `src/app/services/debt-insurance/page.tsx`
- Modify all corresponding Content components

**Design fixes per content component:**
- Same color/max-w/Link/image fixes as Task 7
- `ServicesContent.tsx`: Replace all 6 figma image imports with `/images/...` paths
- `MDICContent.tsx`: Fix rounded-[30px] → rounded-full on buttons, replace image imports
- `MedicationContent.tsx`: Fix placeholder "Description." text
- `ReferralsContent.tsx`: Fix rounded-full is already correct for nav buttons, fix colors
- `PatientCareContent.tsx`: Fix body text scale (cap lg at 22px, not 30px)
- `SocialServicesContent.tsx`: Replace placeholder accordion content
- `EducationContent.tsx`: Add rounded-xl to guide cards with borders

**Commit:**

```bash
git add -A && git commit -m "feat: port Services section pages"
```

---

### Task 9: Port remaining pages (Eligibility, Impact, GetInvolved, FAQs, VisitorGuide)

**Files:**
- Create: `src/app/eligibility/page.tsx`
- Create: `src/app/impact/page.tsx`
- Create: `src/app/get-involved/page.tsx`
- Create: `src/app/faqs/page.tsx`
- Create: `src/app/visitor-guide/page.tsx`
- Modify all corresponding Content components

**Design fixes:**
- Same systematic fixes as previous tasks
- `EligibilityContent.tsx`: Fix max-w-[1200px] → max-w-[1400px]
- `FAQsContent.tsx`: Add rounded-xl to contact box border
- `VisitorGuideContent.tsx`: Replace all identical placeholder accordion content with realistic drafts

**Commit:**

```bash
git add -A && git commit -m "feat: port remaining pages (eligibility, impact, FAQs, visitor guide, get-involved)"
```

---

## Phase 4: Design Consistency Pass

### Task 10: Typography and spacing standardization

Go through every content component and enforce:

**Typography scale:**
| Element | Classes |
|---------|---------|
| Section heading | `font-['Merriweather',serif] font-bold text-[#034078] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px]` |
| Subheading | `font-['Poppins',sans-serif] font-semibold text-[#034078] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px]` |
| Body text | `font-['Poppins',sans-serif] text-gray-700 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]` |
| Accordion title | `font-['Poppins',sans-serif] font-semibold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px]` |

**Spacing:**
- All content sections: `py-16 md:py-20 lg:py-24`
- All containers: `max-w-[1400px] mx-auto px-6 md:px-16`

**Cards/boxes:**
- All cards with borders: add `rounded-xl`
- All CTA boxes: `rounded-2xl md:rounded-[48px]`

**Commit:**

```bash
git add -A && git commit -m "style: standardize typography, spacing, and border-radius across all pages"
```

---

### Task 11: Replace placeholder content with realistic drafts

**Files to update:**
- `VisitorGuideContent.tsx` — each accordion gets unique, relevant content
- `PatientCareContent.tsx` — each accordion gets unique content
- `SocialServicesContent.tsx` — each accordion gets unique content
- `MedicationContent.tsx` — fix "Description." placeholder

Write contextually appropriate content for a free clinic. Mark each section clearly visible in code comments as `{/* DRAFT CONTENT — replace with final copy */}`.

**Commit:**

```bash
git add -A && git commit -m "content: add realistic draft content for placeholder sections"
```

---

## Phase 5: Cleanup & Deploy

### Task 12: Delete all unused files and directories

**Files:**
- Delete: `src/app/components/ui/` (entire directory — all 44+ Shadcn components are unused)
- Delete: `src/app/pages/` (entire old pages directory — replaced by app router pages)
- Delete: `src/app/components/ComingSoon.tsx` (if unused)
- Delete: `src/app/components/ImageWithFallback.tsx` (Figma-specific, no longer needed)

**Step 1: Verify no remaining imports reference deleted files**

```bash
grep -r "from.*components/ui/" src/ --include="*.tsx" --include="*.ts"
# Expected: 0 results

grep -r "from.*pages/" src/app/ --include="*.tsx" --include="*.ts"
# Expected: 0 results (old page files should not be imported anymore)
```

**Step 2: Delete**

```bash
rm -rf src/app/components/ui
rm -rf src/app/pages
rm -f src/app/components/ComingSoon.tsx
rm -f src/app/components/ImageWithFallback.tsx
```

**Step 3: Commit**

```bash
git add -A && git commit -m "chore: remove unused Shadcn/UI components and old page files"
```

---

### Task 13: Verify build and fix any remaining issues

**Step 1: Run full build**

```bash
npm run build
```

**Step 2: Fix any TypeScript or build errors that appear**

Common issues to watch for:
- Missing "use client" directives on components with hooks
- Image paths that don't match files in `public/images/`
- Import paths that still reference old locations

**Step 3: Run dev server and check every page visually**

```bash
npm run dev
```

Visit every route and verify:
- [ ] / (homepage)
- [ ] /about
- [ ] /about/history
- [ ] /about/leadership
- [ ] /about/endowment
- [ ] /about/partners
- [ ] /eligibility
- [ ] /services
- [ ] /services/medication
- [ ] /services/patient-care
- [ ] /services/referrals
- [ ] /services/social-services
- [ ] /services/education
- [ ] /services/debt-insurance
- [ ] /impact
- [ ] /get-involved
- [ ] /faqs
- [ ] /visitor-guide

**Step 4: Commit any fixes**

```bash
git add -A && git commit -m "fix: resolve build errors and verify all pages"
```

---

### Task 14: Reset git history and push to GitHub

**Step 1: Squash all commits into a clean initial commit**

Since the original commit had 45MB of bloated assets and GitHub rejected the push, we need a clean history.

```bash
# Create orphan branch with clean history
git checkout --orphan clean-main
git add -A
git commit -m "Initial commit: HAVEN Free Clinic website (Next.js)"
git branch -D main
git branch -m main
```

**Step 2: Verify total repo size is reasonable**

```bash
du -sh .git
# Should be well under 100MB (target: <20MB after image compression)
```

**Step 3: Force push to GitHub (required since we rewrote history)**

```bash
git push -f origin main
```

**Step 4: Verify on GitHub**

```bash
gh repo view jcarney2024/HAVENFreeClinic --web
```

---

## Design Reference Quick Sheet

For any component work, reference these standards:

| Token | Value |
|-------|-------|
| Primary blue | `#034078` |
| Container | `max-w-[1400px] mx-auto px-6 md:px-16` |
| Section padding | `py-16 md:py-20 lg:py-24` |
| Button (primary) | `bg-[#034078] text-white px-8 py-3.5 rounded-full font-['Poppins',sans-serif] font-semibold` |
| Button (light) | `bg-white text-[#034078] px-8 py-3.5 rounded-full font-['Poppins',sans-serif] font-semibold` |
| Card border-radius | `rounded-xl` |
| Heading font | `font-['Merriweather',serif]` |
| Body font | `font-['Poppins',sans-serif]` |
| Body max size | `text-[20px]` on lg (never 30px) |
| Heading sizes | 32px → 48px responsive |
