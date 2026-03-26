# Clinic Schedule Calendar — Design Spec

## Overview

An updatable calendar section on the homepage showing upcoming clinic days and which services are available each Saturday. Data is sourced from Airtable so clinic staff can update the schedule without code changes or redeployment.

## Placement

After the "How It Works" (3-step) section on the homepage, before "Who We Serve."

Flow: Hero → Impact Stats → Mission → How It Works → **Clinic Schedule** → Who We Serve → Services → Clinic Guide CTA

## Visual Design

**Style: Upcoming Dates List** — a vertical list of the next 4 clinic date cards.

Each card:
- **Left side**: Large date display (month abbreviation, day number, day-of-week)
- **Right side**: Time ("8:30 AM – 12:00 PM") + service tags as pill badges

Section structure:
- Heading: "Upcoming Clinic Days" (Merriweather, bold, `#00356b`)
- Subtitle: "Open Saturdays — call (203) 200-0673 to schedule" (Poppins, muted)
- 4 date cards stacked vertically
- Matches existing design system: no border-radius, `#f7f9fc` card backgrounds, `#00356b` primary, Merriweather headings, Poppins body text

## Data Model

### Airtable Table: "Clinic Schedule"

| Column     | Type          | Description                                                  |
|------------|---------------|--------------------------------------------------------------|
| `Date`     | Date          | The Saturday date (always a Saturday)                        |
| `Services` | Multi-select  | Services offered that day (e.g., Patient Care, Referrals)    |
| `Closed`   | Checkbox      | If checked, this Saturday is closed (not shown in the list)  |
| `Hours`    | Single-line   | Optional override. Defaults to "8:30 AM – 12:00 PM" if empty |

### Service Tag Values

These match the existing service names on the site:
- Patient Care
- Social Services
- Referrals
- Medication Assistance
- Debt & Insurance
- Health Education

## Component Architecture

### `useClinicSchedule` Hook

- Fetches from Airtable REST API on mount using `NEXT_PUBLIC_AIRTABLE_API_KEY` and `NEXT_PUBLIC_AIRTABLE_BASE_ID`
- Filters out past dates and closed dates
- Sorts ascending by date
- Returns first 4 upcoming dates
- Returns `{ dates, loading, error }` state
- Single fetch on mount, no polling or re-fetching

### `ClinicSchedule` Component

- Client component (`"use client"`)
- Calls `useClinicSchedule` hook
- **Loading state**: Subtle skeleton/pulse placeholder cards
- **Error state / no Airtable config**: Static fallback message — "Open Saturdays, 8:30 AM – 12:00 PM. Call (203) 200-0673 for the latest schedule."
- **Empty state** (no upcoming dates): "No upcoming dates scheduled yet. Call for availability."
- **Normal state**: Renders 4 date cards with service tags
- Responsive: stacks cleanly on mobile, cards go full-width

### Environment Variables

| Variable                       | Purpose                    |
|--------------------------------|----------------------------|
| `NEXT_PUBLIC_AIRTABLE_API_KEY` | Airtable personal access token |
| `NEXT_PUBLIC_AIRTABLE_BASE_ID` | Airtable base identifier   |
| `NEXT_PUBLIC_AIRTABLE_TABLE_NAME` | Table name (defaults to "Clinic Schedule") |

When either variable is absent, the component renders the static fallback — no errors, no broken state.

## Files to Create/Modify

| File                                      | Action | Description                          |
|-------------------------------------------|--------|--------------------------------------|
| `src/app/components/ClinicSchedule.tsx`    | Create | Component + hook                     |
| `src/app/page.tsx`                         | Modify | Import and add after HowItWorks      |

## Airtable API Details

**Endpoint**: `https://api.airtable.com/v0/{baseId}/{tableName}`

**Request**:
- GET with `Authorization: Bearer {apiKey}` header
- Query params: `filterByFormula=AND(IS_AFTER({Date}, TODAY()), NOT({Closed}))&sort[0][field]=Date&sort[0][direction]=asc&maxRecords=4`

**Response shape** (simplified):
```json
{
  "records": [
    {
      "fields": {
        "Date": "2026-03-29",
        "Services": ["Patient Care", "Social Services", "Referrals"],
        "Hours": ""
      }
    }
  ]
}
```

## Edge Cases

- **No env vars**: Render static fallback. No fetch attempted.
- **Airtable unreachable / error**: Render static fallback.
- **No future dates in Airtable**: "No upcoming dates scheduled yet" message.
- **Hours override present**: Display the override instead of the default.
- **All upcoming Saturdays closed**: Same as "no future dates" — show empty message.
