# Coming-Soon Cover Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the entire deployed site with a non-bypassable "coming soon" cover page, toggled by a build-time `COMING_SOON` flag.

**Architecture:** The site is a Next.js 16 static export (`output: 'export'`) deployed to GitHub Pages — there is no server, so the only true gate is to exclude real content from the build artifact. `src/app/layout.tsx` checks `process.env.COMING_SOON === 'true'` at build time and renders a `ComingSoon` component instead of header/children/footer for every route. The flag is fed from a GitHub repository variable in the deploy workflow.

**Tech Stack:** Next.js 16 (App Router, static export), React 18, Tailwind CSS v4, Poppins (already loaded), GitHub Actions → GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-06-05-coming-soon-cover-design.md`

**Note on testing:** This repo has no test framework (no test script, no jest/vitest), and adding one for a static marketing site is out of scope. Verification is done with real builds plus `grep` assertions on the exported HTML in `out/` — that directly checks the security property we care about (real content absent from the artifact).

**Accepted limitation:** Page-level `metadata` exports (e.g., `src/app/about/page.tsx`) still set per-route `<title>`/`<description>` while covered. This is cosmetic only: visible content is the cover and `robots: noindex` from the layout is inherited by all routes. Do not modify the 19 page files.

---

### Task 1: `ComingSoon` component

**Files:**
- Create: `src/app/components/ComingSoon.tsx`

- [ ] **Step 1: Create the component**

Design direction A ("Clean & Calm") from the spec: white page, Yale-blue top accent bar, HAVEN circle wordmark (reuses `svgPaths.pd9d0700` exactly like `Navbar.tsx`), light-blue pill, headline, reassurance line, three info cards, MyChart button. Styling conventions copied from `Footer.tsx`/`Navbar.tsx` (`font-['Poppins',sans-serif]`, arbitrary hex values `#00356b`/`#d6e8f7`, `notranslate` on the wordmark).

```tsx
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
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: exits 0, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/components/ComingSoon.tsx
git commit -m "Add ComingSoon cover page component"
```

---

### Task 2: Gate the root layout on `COMING_SOON`

**Files:**
- Modify: `src/app/layout.tsx` (whole file, currently 27 lines)

- [ ] **Step 1: Rewrite `src/app/layout.tsx`**

Replace the entire file with:

```tsx
import type { Metadata } from "next";
import "@/styles/index.css";
import { StickyHeader } from "@/app/components/StickyHeader";
import { Footer } from "@/app/components/Footer";
import { ComingSoon } from "@/app/components/ComingSoon";

const COMING_SOON = process.env.COMING_SOON === "true";

export const metadata: Metadata = COMING_SOON
  ? {
      title: "HAVEN Free Clinic — Coming Soon",
      description:
        "A new havenfreeclinic.org is on its way. HAVEN Free Clinic remains open every Saturday, 8:30am–12:00pm.",
      robots: { index: false, follow: false },
    }
  : {
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
        {COMING_SOON ? (
          <ComingSoon />
        ) : (
          <>
            <StickyHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify the covered build excludes real content**

Run:

```bash
COMING_SOON=true npx next build
grep -c "A new website is on its way" out/index.html out/services/index.html out/about/index.html
grep -c 'name="robots"' out/index.html
grep -c "Access MyChart" out/services/index.html
```

Expected: every `grep -c` reports at least 1 per file (cover content present everywhere; robots meta present).

Then confirm real content is absent:

```bash
grep -rl "Staff Portal" out --include=index.html || echo "CLEAN: no footer content leaked"
grep -rl "high-quality health care, free of charge" -i out --include=index.html || echo "CLEAN: no homepage content leaked"
```

Expected: `CLEAN` lines print (the real footer's "Staff Portal" link and homepage content appear nowhere).

- [ ] **Step 3: Verify the normal build is unchanged**

Run:

```bash
npx next build
grep -c "A new website is on its way" out/index.html || echo "CLEAN: no cover in normal build"
grep -c 'name="robots"' out/index.html || echo "CLEAN: no noindex in normal build"
grep -c "Staff Portal" out/index.html
```

Expected: first two print `CLEAN` (grep finds 0 matches and exits non-zero); last reports ≥1 (real footer present).

- [ ] **Step 4: Visual check at desktop and mobile widths**

Run: `COMING_SOON=true npm run dev`
Open http://localhost:3000, check the page at full width and a ~375px-wide window: cards stack on mobile, nothing overflows, MyChart button reachable. Also load http://localhost:3000/services — same cover. Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx
git commit -m "Gate entire site behind COMING_SOON build-time flag"
```

---

### Task 3: Wire the flag into the deploy workflow

**Files:**
- Modify: `.github/workflows/deploy.yml`

- [ ] **Step 1: Add `workflow_dispatch` trigger**

In `.github/workflows/deploy.yml`, change:

```yaml
on:
  push:
    branches: [main]
```

to:

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

- [ ] **Step 2: Pass the repo variable to the build step**

Change:

```yaml
      - run: npx next build
```

to:

```yaml
      - run: npx next build
        env:
          COMING_SOON: ${{ vars.COMING_SOON }}
```

- [ ] **Step 3: Validate workflow syntax**

Run: `npx --yes action-validator .github/workflows/deploy.yml || python3 -c "import yaml,sys; yaml.safe_load(open('.github/workflows/deploy.yml')); print('YAML OK')"`
Expected: validator passes, or fallback prints `YAML OK`.

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "Feed COMING_SOON repo variable into Pages build; allow manual deploys"
```

---

### Task 4: Activate the cover (manual, in GitHub UI)

No code. Document for the operator (this is also the launch-day procedure in reverse):

- [ ] **Step 1: Set the variable**

GitHub repo → Settings → Secrets and variables → Actions → Variables tab → New repository variable: name `COMING_SOON`, value `true`.

- [ ] **Step 2: Deploy**

Push `main` (the commits from Tasks 1–3 do this) or Actions tab → "Deploy to GitHub Pages" → Run workflow.

- [ ] **Step 3: Verify live**

Visit the production site: homepage and a deep link like `/services/` both show the cover. View source: `<meta name="robots" content="noindex, nofollow"/>` present.

**To launch the real site later:** delete the `COMING_SOON` variable (or set it to `false`), then Actions tab → Run workflow.
