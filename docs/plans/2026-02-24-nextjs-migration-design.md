# HAVEN Free Clinic Website — Next.js Migration & Design Cleanup

**Date:** 2026-02-24
**Status:** Approved

## Problem

The HAVEN Free Clinic website was exported from Figma Make as a Vite + React app. It has several issues:

1. **Cannot push to GitHub** — 45MB+ of uncompressed PNG assets cause the push to fail (HTTP 400)
2. **Build fails** — All image imports use `figma:asset/...` syntax that only works inside Figma Make
3. **Design inconsistencies** — Fonts, colors, spacing, border radii, and typography vary across pages
4. **Bloated dependencies** — 65 production deps, ~40 unused (MUI, react-dnd, recharts, etc.)
5. **Unused generated files** — 26 auto-generated Figma files in `src/imports/` that pages don't reference

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js App Router | Image optimization, SSR for SEO, file-based routing |
| Brand blue | #034078 everywhere | Single consistent blue, user preference |
| Unused Figma files | Delete | Keep only the SVG paths file for the HAVEN logo |
| Placeholder content | Replace with realistic drafts | Clearly marked as draft, contextually appropriate |
| Git history | Fresh initial commit | Current commit has 45MB of bloated assets baked in |

## Architecture

### Route Structure (Next.js App Router)

```
app/
├── layout.tsx              (Root layout: StickyHeader + Footer)
├── page.tsx                (HomePage)
├── about/
│   ├── page.tsx            (AboutPage)
│   ├── history/page.tsx
│   ├── leadership/page.tsx
│   ├── endowment/page.tsx
│   └── partners/page.tsx
├── eligibility/page.tsx
├── services/
│   ├── page.tsx
│   ├── medication/page.tsx
│   ├── patient-care/page.tsx
│   ├── referrals/page.tsx
│   ├── social-services/page.tsx
│   ├── education/page.tsx
│   └── debt-insurance/page.tsx
├── impact/page.tsx
├── get-involved/page.tsx
├── faqs/page.tsx
├── visitor-guide/page.tsx
└── not-found.tsx
```

### Component Structure

```
components/
├── layout/
│   ├── StickyHeader.tsx
│   ├── TopBar.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── home/
│   ├── HeroBanner.tsx
│   ├── MissionSection.tsx
│   ├── ClinicGuideSection.tsx
│   ├── ServicesSection.tsx
│   └── FiveKSection.tsx
├── shared/
│   ├── PageHero.tsx
│   └── ErrorPage.tsx
└── content/
    ├── OurMissionContent.tsx
    ├── HistoryContent.tsx
    ├── LeadershipBoardContent.tsx
    ├── CommunityPartnersContent.tsx
    ├── GoetschEndowmentContent.tsx
    ├── EligibilityContent.tsx
    ├── ServicesContent.tsx
    ├── MedicationContent.tsx
    ├── PatientCareContent.tsx
    ├── ReferralsContent.tsx
    ├── SocialServicesContent.tsx
    ├── EducationContent.tsx
    ├── MDICContent.tsx
    ├── VisitorGuideContent.tsx
    ├── FAQsContent.tsx
    ├── ImpactContent.tsx
    └── GetInvolvedContent.tsx
```

### Image Handling

- Move images to `public/images/` with descriptive filenames
- Compress all PNGs (target <500KB each, the 8MB ones should become ~200KB)
- Replace `figma:asset/...` imports with `next/image` components
- Next.js handles WebP conversion, lazy loading, and responsive sizing automatically

## Design System Standardization

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | `#034078` | CTAs, headings, footer, topbar, accents |
| White | `#ffffff` | Backgrounds, button text on blue |
| Gray divider | `#858282` | Horizontal separators |
| Destructive | `#d4183d` | Error states |
| Muted text | `#717182` | Secondary body text |

### Typography
| Element | Font | Size (mobile → desktop) |
|---------|------|------------------------|
| Hero H1 | Poppins Bold | 30px → 50px |
| Hero H2 | Merriweather Bold | 22px → 32px |
| Section heading | Merriweather Bold | 32px → 48px |
| Subheading | Poppins Semibold | 20px → 28px |
| Body | Poppins Regular | 16px → 20px |
| Small/caption | Poppins Regular | 14px → 16px |
| Accordion title | Poppins Semibold | 18px → 32px |

### Spacing
| Token | Value |
|-------|-------|
| Container max-width | 1400px |
| Container padding | px-6 md:px-16 |
| Section vertical | py-16 md:py-20 lg:py-24 |
| Component gap | gap-6 md:gap-8 |

### Border Radius
| Element | Value |
|---------|-------|
| Buttons | rounded-full |
| Cards | rounded-xl |
| Large accent boxes | rounded-2xl md:rounded-[48px] |
| Images | rounded-lg |

### Buttons
| Variant | Style |
|---------|-------|
| Primary CTA | bg-[#034078] text-white px-8 py-3.5 rounded-full font-semibold |
| Secondary | border-2 border-[#034078] text-[#034078] px-8 py-3.5 rounded-full |
| Light (on dark bg) | bg-white text-[#034078] px-8 py-3.5 rounded-full font-semibold |
| Nav pill | px-6 py-2.5 rounded-full font-bold text-[14px] |

## Cleanup

### Remove unused dependencies
~40 packages including: @mui/material, @mui/icons-material, @emotion/react, @emotion/styled, react-dnd, react-dnd-html5-backend, recharts, embla-carousel-react, react-responsive-masonry, react-slick, vaul, cmdk, input-otp, react-day-picker, react-resizable-panels, most @radix-ui packages.

### Remove unused files
- All of `src/imports/` except the SVG path file used for the HAVEN logo
- Unused Shadcn/UI components that no page references

### Placeholder content
Replace identical accordion placeholders in Visitor Guide, Patient Care, Social Services, and Education pages with contextually appropriate draft content.
