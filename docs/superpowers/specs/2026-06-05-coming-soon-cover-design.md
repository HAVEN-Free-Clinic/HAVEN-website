# Coming-Soon Cover Page — Design

**Date:** 2026-06-05
**Status:** Approved

## Goal

Show patients a polished "we're revamping, coming soon" page in place of the entire site while the redesign is underway. The cover must be genuinely non-bypassable: no direct URL, disabled JavaScript, or cached route may reveal the real site.

## Context

- Next.js 16 app with `output: 'export'` (fully static), deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.
- No server or middleware exists at runtime, so any client-side gate is bypassable. The only true gate is to exclude the real content from the deployed artifact.
- HAVEN is an active clinic; patients still need care logistics while the site is covered.

## Approach: Build-Time Flag via `pageExtensions`

A `COMING_SOON` environment variable is read **at build time**.

> **Revised during implementation:** the original design gated only the root layout (render `ComingSoon` instead of header/children/footer). Review found that approach leaks real content into the covered artifact anyway — Next.js renders page segments independently, so RSC flight files (`out/*.txt`) contained full page text and a JS chunk contained header/footer code. The mechanism below excludes the real site from the build entirely.

- `next.config.ts` sets `pageExtensions: ['soon.tsx']` when `process.env.COMING_SOON === 'true'` (default extensions otherwise). With only `*.soon.tsx` recognized as route files, the entire real site — every `page.tsx` and `layout.tsx` — is invisible to the router: no HTML, no RSC flight files, no JS chunks for it are emitted. `src/app/layout.tsx` stays untouched.
- Three small route files exist only in covered builds: `src/app/layout.soon.tsx` (minimal root layout with coming-soon metadata + `noindex`), `src/app/page.soon.tsx` and `src/app/not-found.soon.tsx` (both render the `ComingSoon` component). The covered export contains just `/` and `404.html` — and GitHub Pages serves `404.html` for every deep link (`/services`, `/about`, …), so all paths show the cover.
- The flag is supplied by a **GitHub repository variable** (`vars.COMING_SOON`) passed as an env var to the build step in `deploy.yml`.
- `workflow_dispatch` is added to `deploy.yml` triggers so the deploy can be re-run from the Actions tab after flipping the variable — no commit required.
- Local development is unaffected: the flag is unset locally, so `npm run dev` shows the real site. To preview the cover locally: `COMING_SOON=true npm run dev`.

### Toggling

| Action | Steps |
|---|---|
| Turn cover ON | Repo Settings → Secrets and variables → Actions → Variables → set `COMING_SOON` = `true`, then re-run the Deploy workflow (or push to `main`) |
| Launch real site | Set `COMING_SOON` to anything else (or delete it), then re-run the Deploy workflow |

### SEO

While covered, the document `<title>` becomes "HAVEN Free Clinic — Coming Soon" and `robots: noindex` metadata is emitted so search engines don't replace existing listings with coming-soon snippets.

## The Page (`src/app/components/ComingSoon.tsx`)

Direction A — "Clean & Calm" (selected from three mockups):

- White page, thin Yale-blue (`#00356b`) top accent bar.
- Centered HAVEN wordmark ("HAVEN **Free Clinic**" styling consistent with site branding, Poppins).
- Light-blue (`#d6e8f7`) "Coming Soon" pill.
- Headline: "A new website is on its way."
- Supporting line: vague timeline, reassurance the clinic remains open — e.g., "We're revamping havenfreeclinic.org to serve you better. In the meantime, we're still here for you every Saturday."
- Three info cards (stack vertically on mobile):
  - **Hours** — Saturday, 8:30am–12:00pm
  - **Visit Us** — 800 Howard Avenue, Floor 1, New Haven; free parking in the Howard Avenue Garage
  - **Contact** — (203) 200-0673 (`tel:` link), Fax (203) 436-9928, haven.free.clinic@yale.edu (`mailto:` link)
- **Access MyChart** button → `https://mychart.ynhhs.org` (external, since the internal `/mychart` route is covered).
- Built with the existing Tailwind v4 / Poppins setup. No new dependencies. No navigation links to internal pages (they all show the cover anyway, but offering dead-end links would be confusing).

## Files Touched

| File | Change |
|---|---|
| `src/app/components/ComingSoon.tsx` | New — cover page component |
| `next.config.ts` | Conditional `pageExtensions` on `COMING_SOON` |
| `src/app/layout.soon.tsx` | New — covered-build root layout (coming-soon title/description, `noindex`) |
| `src/app/page.soon.tsx` | New — covered-build home page (renders `ComingSoon`) |
| `src/app/not-found.soon.tsx` | New — covered-build 404 (renders `ComingSoon`; serves all deep links on Pages) |
| `.github/workflows/deploy.yml` | Pass `COMING_SOON: ${{ vars.COMING_SOON }}` to the build step; add `workflow_dispatch` trigger |

## Accepted Limitations

- `public/` assets (images, PDFs) are always copied into the export, including covered builds. They are already-public static files at unchanged URLs; excluding them would break the favicon and any future cover assets.
- The covered build's CSS bundle still contains utility classes generated from scanning the whole `src/` tree (Tailwind scans by glob, not by route). No readable site text is included.
- Deep links return HTTP 404 (with the cover page as the body) while covered — correct behavior for pages that intentionally don't exist yet, and harmless alongside `noindex`.

## Testing

- `COMING_SOON=true npx next build` → spot-check `out/index.html` and `out/services/index.html` both contain cover content and **no** real-site content; verify `noindex` present.
- Plain `npx next build` → real site builds unchanged; no cover content at `/`; no `noindex`.
- Manual visual check of the cover at desktop and mobile widths via `COMING_SOON=true npm run dev`.

## Out of Scope

- Email-capture / notify-me form (no backend on GitHub Pages).
- Password-protected preview of the new site (not possible on GitHub Pages; previews happen locally or via PR builds).
- Countdown timers or specific launch dates.
