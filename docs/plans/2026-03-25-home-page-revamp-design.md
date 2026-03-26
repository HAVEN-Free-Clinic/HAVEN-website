# Home Page Revamp Design

## Goal
Make the home page feel fresh, inspiring, and welcoming for patients seeking care, while maintaining the existing brand style. Primary emotional tone: **"I'm safe here"** — warm, reassuring, calming.

## Audience
Patients seeking care — uninsured adults in the Greater New Haven area.

## Design Decisions
- **Square buttons everywhere** on the site EXCEPT navbar (which stays rounded)
- Keep current hero banner image (`HAVEN In-Clinic Banner.jpg`)
- All sections use `max-w-4xl mx-auto` inner wrappers for consistency with other pages
- Maintain existing color palette: `#00356b` primary, `#4a90c4` hover, `#d6e8f7` light blue
- Maintain existing font system: Merriweather (headings), Poppins (body)

## Page Sections (top to bottom)

### 1. Hero Banner (refine existing)
- Keep background image + gradient overlay
- Fix heading font: use Merriweather instead of generic `font-serif`
- Square off CTA buttons (remove `rounded-full`)
- Buttons: "See If You Qualify" (primary, light bg) + "Call Us: (203) 200-0673" (secondary, white border)
- Keep full-viewport height, left-aligned text

### 2. Impact Stats Bar (new)
- Full-width navy blue (`#00356b`) background
- 3 stats in a row, white text, centered
- Placeholder stats (update with real numbers):
  - "15+ Years Serving New Haven"
  - "10,000+ Patient Visits"
  - "100% Free of Charge"
- Poppins font, bold numbers, lighter labels
- Creates visual transition from hero to white content

### 3. Mission Statement (refine existing)
- Switch from side-by-side flex to **stacked** layout (heading above paragraph)
- Wrap in `max-w-4xl mx-auto`
- Divider below

### 4. How It Works (new)
- Heading: "Getting Care Is Simple"
- 3 steps in a row (responsive: stack on mobile):
  1. **Call Us** — "Call (203) 200-0673 to schedule. Leave a voicemail and we'll call you back."
  2. **Visit the Clinic** — "Come to 800 Howard Ave on Saturday morning. Bring a photo ID — no insurance needed."
  3. **Receive Care** — "See a provider, get prescriptions, and access support services — all at no cost."
- Each step: number indicator, title, description
- Clean card layout within `max-w-4xl mx-auto`
- Divider below

### 5. Who We Serve — Eligibility Snapshot (new)
- Heading: "Who We Serve"
- Brief intro paragraph
- 4 key criteria displayed compactly:
  - Ages 18-65
  - Reside in Greater New Haven
  - Currently uninsured
  - No primary care provider
- CTA button: "Check Your Eligibility" linking to /eligibility
- Wrapped in `max-w-4xl mx-auto`
- Divider below

### 6. Our Services (refine existing)
- Keep 3 service cards (Patient Care, Social Services, Referrals)
- Wrap in `max-w-4xl mx-auto`
- Square off "All Services" button
- Divider below

### 7. Clinic Guide CTA (refine existing)
- Keep as simple heading + description + button
- Square off button
- Wrapped in `max-w-4xl mx-auto`

## Global Change: Square Buttons
All `rounded-full` buttons across the website should be changed to square (no border-radius), EXCEPT:
- Navbar "Volunteer" and "Donate" buttons remain `rounded-full`

Affected files beyond home page:
- ClinicGuideSection.tsx
- ServicesSection.tsx
- HeroBanner.tsx
- EligibilityContent.tsx (CTA buttons)
- Any other content page buttons using `rounded-full`
