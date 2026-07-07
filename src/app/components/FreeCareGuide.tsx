"use client";

import { useState } from "react";
import {
  ChevronDown,
  Download,
  Banknote,
  Coins,
  Home,
  ClipboardList,
  Landmark,
  Briefcase,
  Mailbox,
  Mail,
  Building2,
  Phone,
} from "lucide-react";

/* ─────────────────────────── Data ─────────────────────────── */

interface FormField {
  name: string;
  required: boolean;
  what: string;
  example?: string | null;
  tip?: string | null;
  warning?: string | null;
}

interface FormStep {
  num: number;
  title: string;
  subtitle: string;
  intro: string;
  incomeTable?: boolean;
  fields: FormField[];
}

const FORM_STEPS: FormStep[] = [
  {
    num: 1,
    title: "Section 1 — Patient information",
    subtitle: "Your basic personal details — about 2 minutes to complete",
    intro:
      'This is the top of the application. It identifies who is applying. Fill out every line — leave nothing blank. If you don’t have a medical record number, write "N/A" — it is not required.',
    fields: [
      { name: "Last name and First name", required: true, what: "Write your legal name exactly as it appears on any ID or medical paperwork. Use the same name consistently — misspellings can slow processing.", example: "García, Maria", tip: "Use your full legal name, not a nickname." },
      { name: "Street address, City, State, Zip code", required: true, what: "Write your current home address. If you stay with someone else, use their address. YNHH will mail your approval letter here — make sure it is correct.", example: "123 Grand Ave, New Haven, CT 06511", tip: "If your mailing address is different from where you live, note both." },
      { name: "Date of birth", required: true, what: "Write your birth date in MM/DD/YYYY format.", example: "03/15/1980" },
      { name: "Telephone number", required: true, what: "A number where YNHH can reach you. If you don’t have a personal phone, write a number of someone who can give you a message.", example: "(203) 555-0100", tip: "YNHH may call you to verify information or inform you of your decision." },
      { name: "Medical record number", required: false, what: "This is a number assigned by YNHH when you receive care there. You can find it on any YNHH bill, discharge papers, or by calling 855-547-4584. If you don’t have it, leave it blank — it is optional.", example: "MRN: 1234567", tip: "Check the top of any YNHH bill — the MRN is usually printed there." },
    ],
  },
  {
    num: 2,
    title: "Section 2 — Family information",
    subtitle: "List the people who depend on you — spouse and children only",
    intro:
      "This section asks about your household. YNHH uses this to calculate your household size, which affects your eligibility level. Be accurate — household size matters significantly.",
    fields: [
      { name: "Name of family member", required: true, what: "List your legal spouse AND any dependent children who live with you. “Dependent” means they rely on your household for financial support — typically children under 18 or full-time students.", example: "García, Luis (spouse) | García, Sofia (daughter)", warning: "Do NOT include: non-married partners, roommates, adult children who support themselves, or other family members who do not live with you or depend on you financially." },
      { name: "Relationship to applicant", required: true, what: "Write how each person is related to you.", example: "Spouse, Son, Daughter" },
      { name: "Date of birth", required: true, what: "Write each family member’s birth date.", example: "07/22/2010" },
    ],
  },
  {
    num: 3,
    title: "Section 3 — Financial information (income)",
    subtitle: "Every source of household income — this is the most important section",
    intro:
      "This is the section most people find confusing. You need to list every source of income for yourself AND your spouse. Only include income from your spouse — not from other household members unless they are your spouse. Report the amounts honestly — underreporting is a violation that can result in rejection or repayment demands.",
    incomeTable: true,
    fields: [
      { name: "How to enter amounts", required: true, what: 'For each income type that applies to you, write the dollar amount AND circle whether it is weekly, biweekly (every 2 weeks), or monthly. Only fill in rows that apply to you — leave the rest blank.', example: "Gross wages: $800 biweekly | Social Security: $450 monthly", tip: 'If you are paid every two weeks, circle "Biweekly." If twice a month, circle "Monthly" and calculate the monthly total.' },
      { name: "Gross wages / earnings (before taxes)", required: false, what: 'This is your pay BEFORE taxes and deductions are taken out. Look at your pay stub — use the "gross" amount, not the "net" amount you actually receive.', example: "If your paycheck stub says Gross: $950 and you are paid biweekly, write $950 and circle Biweekly.", warning: "Use GROSS (before taxes) — not the amount deposited in your bank account." },
      { name: "Supported by other individual", required: false, what: "If someone else gives you money to help with food, rent, or other living expenses — report that amount here.", example: "My brother gives me $300/month → write $300, circle Monthly" },
      { name: "Social Security / SSI benefits", required: false, what: "Include any Social Security retirement, disability (SSDI), or Supplemental Security Income (SSI) you receive.", example: "Monthly SSI payment of $943 → write $943, circle Monthly", tip: "Find your exact amount on your SSA award letter or at ssa.gov." },
      { name: "Liquid assets", required: false, what: "This is different from income. Liquid assets means money you can access quickly — like cash, savings accounts, or gold. This is NOT your regular income — it is what you currently have saved or in hand.", example: "If you have $500 in a savings account, write $500.", tip: "Small savings amounts (under $1,000) typically do not affect eligibility." },
    ],
  },
  {
    num: 4,
    title: "Section 4 — Health insurance",
    subtitle: "Even if you have coverage, you must answer this section",
    intro:
      "Answer honestly — having some insurance does not automatically disqualify you. YNHH needs to know what coverage exists so they can coordinate benefits correctly.",
    fields: [
      { name: "Are you covered by any health insurance?", required: true, what: "Answer YES or NO. This includes Medicare, Medicaid/HUSKY, any employer insurance, or coverage from another country. If you are not sure, call HAVEN at 203-200-0673 and we will help you figure it out.", example: "If you have HUSKY: YES. If no coverage at all: NO.", tip: "Even if your insurance has lapsed or doesn’t cover what you need, you may still qualify for Free Care to cover the remaining balance." },
      { name: "Policy holder, insurer, policy number", required: false, what: "If you answered YES to having insurance, fill in these details. Your insurance card has all three pieces of information.", example: "Policy holder: Maria García | Insurer: Anthem | Policy No.: XYZ123456", tip: "Your policy number is on the front of your insurance card." },
      { name: "Health Savings Account (HSA) — Question 4a", required: true, what: "Answer YES or NO. An HSA is a special savings account some employers offer to help pay medical costs. Most people do not have one. If you are not sure, answer NO.", tip: "If your employer has never mentioned an HSA, you almost certainly don’t have one." },
    ],
  },
  {
    num: 5,
    title: "Section 5 — Certification and signature",
    subtitle: "Read carefully before signing — this is a legal statement",
    intro:
      "Before you sign, you must read and understand each statement. By signing, you are certifying that everything on the application is true. Incorrect or false information can result in rejection OR being required to repay the assistance.",
    fields: [
      { name: "The statements you are agreeing to", required: true, what: "You are agreeing to six things: (1) everything you wrote is true, (2) YNHH can verify your information, (3) YNHH can check your credit report, (4) if you receive money from a lawsuit related to this care you will repay Free Care, (5) you will tell YNHH if your income or situation changes, and (6) YNHH may need to share your health information to process your application.", warning: "This is a legal certification. Do not sign if you have not read every checkbox. Do not write information you know to be false." },
      { name: "Signature", required: true, what: "Sign your legal name — the same name that is in Section 1. Sign in pen, not pencil.", example: "Maria García (not MG or a nickname)", tip: "If you need someone to sign for you as a legal guardian, they sign here and print their name below." },
      { name: "Date", required: true, what: "Write today’s date in MM/DD/YYYY format next to your signature.", example: "04/15/2025", tip: "An application without a date may be rejected." },
    ],
  },
];

const INCOME_ROWS: [string, string, string, boolean][] = [
  ["Gross wages / earnings (before taxes)", "Yes — your gross pay", "Your paycheck before deductions", true],
  ["Supported by other individual", "Yes — money someone gives you", "Family member pays your rent", true],
  ["Child support or alimony received", "Yes — if you receive it", "Court-ordered payments you receive", true],
  ["Disability benefits", "Yes — SSDI or private disability", "Monthly disability check", true],
  ["Social Security / SSI benefits", "Yes — include all SS income", "Monthly SSA payment", true],
  ["Unemployment benefits", "Yes — if currently receiving", "Weekly unemployment payment", true],
  ["Self-employment earnings", "Yes — net earnings", "Income from your own business", true],
  ["Pension benefits", "Yes", "Retirement pension payments", true],
  ["Rental income", "Yes", "Rent you receive from tenants", true],
  ["Income from children or other household members (not spouse)", "Not included", "Your adult child’s job income", false],
  ["Non-married partner’s income", "Not included", "Boyfriend / girlfriend’s pay", false],
];

const POI_CARDS = [
  { icon: Banknote, situation: "Paid by check or direct deposit", doc: "2 recent pay stubs", detail: "Must be from the past 6 months. Get them from your employer or your bank app. Both stubs must show your name and the pay amount." },
  { icon: Coins, situation: "Paid in cash by employer", doc: "Letter from your employer", detail: "Your employer writes a letter confirming your pay. Use the template below — fill in the blanks and have your employer sign it." },
  { icon: Home, situation: "Supported by family or a friend", doc: "Letter from the person supporting you", detail: "The person supporting you writes a letter confirming what they give you monthly. Use the template below." },
  { icon: ClipboardList, situation: "Unemployed with no income", doc: "Letter from financial supporter", detail: "If no one supports you and you have no income, bring a letter saying so. HAVEN’s MDIC team can help you write this. Call us at 203-200-0673." },
  { icon: Landmark, situation: "Receiving Social Security or disability", doc: "SSA award letter or benefit statement", detail: "Get this from SSA.gov or the letter Social Security mailed you. Must show your benefit amount. Call 800-772-1213 if you need a copy." },
  { icon: Briefcase, situation: "Self-employed", doc: "Most recent tax return (Schedule C)", detail: "Use your federal tax return Schedule C. If you don’t file taxes, a letter from yourself stating your earnings is acceptable. MDIC team can help." },
];

const SUBMIT_CARDS = [
  { icon: Mailbox, title: "Mail it", desc: "Print, complete, sign, and mail your application with proof of income attached. Allow 2–3 weeks for processing.", detail: "Yale New Haven Health\nSBO, Attn: Financial Assistance\nPO Box 1403\nNew Haven, CT 06505" },
  { icon: Mail, title: "Email proof of income", desc: "Send photos or scans of your proof of income documents directly to the HAVEN billing team, who will submit with your application.", detail: "hfc.billing@yale.edu" },
  { icon: Building2, title: "Bring it to HAVEN", desc: "Come to HAVEN clinic any Saturday between 8:30 AM and 1:00 PM. Our MDIC team will review your application, catch any errors, and submit for you.", detail: "Saturdays 8:30 AM – 1:00 PM\nHAVEN Free Clinic\nNew Haven, CT" },
  { icon: Phone, title: "Call YNHH directly", desc: "If you have questions about your application status, a specific bill, or need help — call YNHH’s financial assistance line directly.", detail: "855-547-4584\nYNHH Financial Assistance" },
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  { q: "Can I apply even if I already have a large hospital bill?", a: <>Yes — <strong>absolutely apply.</strong> Free Care can be applied retroactively to bills you already have. Bring the bill to HAVEN’s MDIC team or call YNHH at 855-547-4584. Do not wait — the sooner you apply, the better your chances of having the bill covered or reduced.</> },
  { q: "I don’t have legal immigration status. Can I still apply?", a: <><strong>Yes.</strong> The Free Care application explicitly states that non-citizens are welcome to apply. Immigration status is not a disqualifying factor for this program. Your information is protected.</> },
  { q: "What if YNHH denies my application?", a: "Contact HAVEN’s MDIC team immediately. We can help you understand the reason for denial, correct any errors on the application, and determine whether to appeal. Denials are sometimes due to missing documentation — not ineligibility." },
  { q: "Does applying for Free Care affect my credit score?", a: 'YNHH may request your credit report as part of the application (you agreed to this in Section 5). However, this is a "soft pull" for assistance purposes — it does not affect your credit score the way a loan application would.' },
  { q: "What if my income changes after I am approved?", a: "You are required to tell YNHH if your income or situation changes significantly. This is stated in Section 5. If your income increases substantially, your Free Care level may be adjusted or discontinued." },
  { q: "I was paid in cash and don’t have pay stubs. What do I do?", a: "Use the employer letter template in the Proof of Income section of this guide. Have your employer fill it in, sign it, and attach it to your application. If your employer refuses or you cannot reach them, call HAVEN at 203-200-0673 — we will help you find a solution." },
  { q: "How will I know if I am approved?", a: "YNHH will mail you a determination letter. Processing usually takes 2–4 weeks. If you haven’t heard anything after 4 weeks, call 855-547-4584 to check your status. Keep the approval letter — you will need to show it at future YNHH appointments." },
  { q: "Does Free Care cover care at Fair Haven Community Health or other clinics?", a: <><strong>No.</strong> Free Care only applies to Yale New Haven Health facilities — Yale New Haven Hospital, Bridgeport Hospital, Greenwich Hospital, and affiliated YNHH practices. It does not cover care at Fair Haven, Cornell Scott, or other non-YNHH locations.</> },
  { q: "What if I need help filling out the form?", a: "Come to HAVEN any Saturday between 8:30 AM and 1:00 PM. Our MDIC team will sit with you, review your application, help you gather proof of income, and submit it for you. You can also call us at 203-200-0673." },
];

/* ─────────────────────────── Helpers ─────────────────────────── */

function TplBlank({ children }: { children: React.ReactNode }) {
  return (
    <span
      contentEditable
      suppressContentEditableWarning
      className="inline-block min-w-[100px] border-b-2 border-[#00356b] text-[#00356b] font-semibold px-1 italic focus:outline focus:outline-2 focus:outline-[#00356b]"
    >
      {children}
    </span>
  );
}

const SECTION = "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16";
const INNER = "max-w-4xl mx-auto";
const TITLE = "font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight mb-4";
const DESC = "font-['Poppins',sans-serif] text-black/70 text-[15px] md:text-[17px] leading-relaxed";
const CALLOUT = "bg-[#00356b]/5 border-l-4 border-[#00356b] px-5 py-4 font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed";

const DOWNLOADS = [
  { label: "English", href: "/docs/ynhh-financial-assistance-english.pdf" },
  { label: "French (Français)", href: "/docs/ynhh-financial-assistance-french.pdf" },
  { label: "Haitian Creole (Kreyòl)", href: "/docs/ynhh-financial-assistance-haitian-creole.pdf" },
];

function Divider() {
  return (
    <div className={SECTION}>
      <div className={INNER}>
        <div className="w-full h-px bg-[#00356b]/10" />
      </div>
    </div>
  );
}

/* ─────────────────────────── Component ─────────────────────────── */

export function FreeCareGuide() {
  const [openStep, setOpenStep] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});

  return (
    <div>
      {/* ── Intro ── */}
      <div className={`${SECTION} pt-2 md:pt-4 pb-10 md:pb-14`}>
        <div className={INNER}>
          <p className={`${DESC} mb-4`}>
            Free Care is Yale New Haven Health&apos;s commitment to help patients
            who cannot afford their medical bills. It is{" "}
            <strong className="text-[#00356b]">not insurance</strong> — it covers
            care at YNHH facilities only, and you must renew it about every 6
            months.
          </p>

          <div className={`${CALLOUT} mb-6`}>
            <span className="font-bold">Free Care is not insurance.</span> There
            is no card, and it only applies at Yale New Haven Health facilities.
            You apply, provide proof of income, and are approved for roughly 6
            months before renewing. It can be applied to bills you already have,
            and non-citizens are welcome to apply — immigration status does not
            disqualify you.
          </div>

          <p className={`${DESC} mb-6`}>
            This guide walks you through the application, section by section, so
            you can complete it yourself.{" "}
            <strong className="text-[#00356b]">
              HAVEN&apos;s MDIC team will help you through it the first time.
            </strong>{" "}
            After that, for your 6-month renewals, we encourage you to file on
            your own using this guide — and we&apos;re here whenever you get
            stuck.
          </p>

          <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] mb-3">
            Download the application guide:
          </p>
          <div className="flex flex-wrap gap-3">
            {DOWNLOADS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                download
                className="inline-flex items-center gap-2 border border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[14px] md:text-[15px] px-5 py-3 hover:bg-[#00356b]/5 transition-colors"
              >
                <Download className="w-4 h-4 shrink-0" />
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Fill out the application ── */}
      <div className={`${SECTION} py-12 md:py-16`}>
        <div className={INNER}>
          <h3 className={TITLE}>
            How to fill out the application, section by section
          </h3>
          <p className={DESC}>
            The official form is the{" "}
            <strong className="text-[#00356b]">
              YNHH Application for Financial Assistance Programs (Form F6304)
            </strong>
            . Below is every section of the form explained in plain language. Tap
            each one to expand it.
          </p>
          <p className="font-['Poppins',sans-serif] text-black/50 text-[13px] md:text-[14px] mt-2">
            Need the form itself? Download it above, ask HAVEN&apos;s MDIC team at
            any Saturday clinic, or call YNHH at <strong>855-547-4584</strong>.
          </p>

          <div className="mt-8 space-y-4">
            {FORM_STEPS.map((s, i) => {
              const open = openStep === i;
              return (
                <div
                  key={s.num}
                  className={`bg-white border overflow-hidden ${open ? "border-[#00356b]/30" : "border-[#00356b]/20"}`}
                >
                  <button
                    onClick={() => setOpenStep(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-start gap-4 px-5 md:px-6 py-5 text-left hover:bg-[#00356b]/5 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#00356b] text-white font-['Merriweather',serif] flex items-center justify-center shrink-0 mt-0.5">
                      {s.num}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[17px]">
                        {s.title}
                      </span>
                      <span className="block font-['Poppins',sans-serif] text-black/50 text-[13px] md:text-[14px] mt-0.5">
                        {s.subtitle}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 mt-1 text-[#00356b] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      strokeWidth={2.5}
                    />
                  </button>

                  {open && (
                    <div className="px-5 md:px-6 pb-6">
                      <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed bg-[#f7f9fc] p-4 mb-5">
                        {s.intro}
                      </p>

                      {s.incomeTable && (
                        <div className="overflow-x-auto my-4">
                          <table className="w-full border-collapse font-['Poppins',sans-serif] text-[13px] md:text-[14px]">
                            <thead>
                              <tr>
                                <th className="bg-[#00356b] text-white text-left font-semibold px-3 py-2">Income type</th>
                                <th className="bg-[#00356b] text-white text-left font-semibold px-3 py-2">Do you include this?</th>
                                <th className="bg-[#00356b] text-white text-left font-semibold px-3 py-2">Example</th>
                              </tr>
                            </thead>
                            <tbody>
                              {INCOME_ROWS.map(([type, inc, ex, yes], idx) => (
                                <tr key={type} className={idx % 2 ? "bg-[#f7f9fc]" : ""}>
                                  <td className="px-3 py-2 border-b border-[#00356b]/10 align-top text-black/80">{type}</td>
                                  <td className={`px-3 py-2 border-b border-[#00356b]/10 align-top font-medium ${yes ? "text-[#00356b]" : "text-black/40"}`}>
                                    {yes ? "✓ " : "✗ "}{inc}
                                  </td>
                                  <td className="px-3 py-2 border-b border-[#00356b]/10 align-top text-black/60">{ex}</td>
                                </tr>
                              ))}
                              <tr className="bg-[#f7f9fc] font-semibold">
                                <td className="px-3 py-2 text-[#00356b]">TOTAL INCOME</td>
                                <td className="px-3 py-2 text-black/70" colSpan={2}>Add all &quot;Yes&quot; amounts together — one total for you, one for your spouse</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      <div className="space-y-3">
                        {s.fields.map((f) => (
                          <div key={f.name} className="border border-[#00356b]/15 overflow-hidden">
                            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#f7f9fc]">
                              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px]">{f.name}</p>
                              <span className={`font-['Poppins',sans-serif] font-semibold text-[11px] px-2 py-0.5 shrink-0 ${f.required ? "bg-[#00356b] text-white" : "bg-[#00356b]/10 text-[#00356b]"}`}>
                                {f.required ? "Required" : "Optional"}
                              </span>
                            </div>
                            <div className="px-4 py-3 space-y-2.5">
                              <p className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[15px] leading-relaxed">{f.what}</p>
                              {f.example && (
                                <p className="font-['Poppins',sans-serif] text-black/80 text-[13px] md:text-[14px] bg-[#00356b]/5 border-l-2 border-[#00356b] px-3 py-2">
                                  <span className="font-semibold text-[#00356b]">Example: </span>{f.example}
                                </p>
                              )}
                              {f.tip && (
                                <p className="font-['Poppins',sans-serif] text-black/80 text-[13px] md:text-[14px] bg-[#00356b]/5 border-l-2 border-[#00356b] px-3 py-2">
                                  <span className="font-semibold text-[#00356b]">Tip: </span>{f.tip}
                                </p>
                              )}
                              {f.warning && (
                                <p className="font-['Poppins',sans-serif] text-black/80 text-[13px] md:text-[14px] bg-[#00356b]/10 border-l-2 border-[#00356b] px-3 py-2">
                                  <span className="font-semibold text-[#00356b]">Important: </span>{f.warning}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Proof of Income ── */}
      <div className={`${SECTION} py-12 md:py-16`}>
        <div className={INNER}>
          <h3 className={TITLE}>Proof of income</h3>
          <p className={DESC}>
            This is the step people most often get wrong — a missing or incorrect
            proof of income is the most common reason an application stalls. You
            must attach proof of income to your application. Find your situation
            below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {POI_CARDS.map((c) => (
              <div key={c.situation} className="bg-white border border-[#00356b]/20 p-5">
                <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-3">
                  <c.icon className="w-5 h-5 text-[#00356b]" />
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b]/60 text-[11px] uppercase tracking-wide mb-1.5">{c.situation}</p>
                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] mb-1.5">{c.doc}</p>
                <p className="font-['Poppins',sans-serif] text-black/60 text-[13px] leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>

          <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[12px] uppercase tracking-wider mt-10 mb-5">
            Letter templates — fill in the blanks and have the person sign
          </p>

          <div className="bg-white border border-[#00356b]/20 border-l-4 border-l-[#00356b] p-5 mb-4">
            <p className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[12px] uppercase tracking-wide mb-4">Letter written by your employer (if paid in cash)</p>
            <p className="font-['Poppins',sans-serif] text-black/80 text-[14px] leading-[2]">
              [Your Employer&apos;s Letterhead if they have one]<br /><br />
              <TplBlank>[Today&apos;s date]</TplBlank><br /><br />
              To whom it may concern,<br /><br />
              This letter serves as verification that <TplBlank>[your full name]</TplBlank> is employed by <TplBlank>[employer name]</TplBlank>. <TplBlank>[Your name]</TplBlank> performs <TplBlank>[brief job description]</TplBlank> and is paid <TplBlank>[$____ amount]</TplBlank> <TplBlank>[weekly / biweekly / monthly]</TplBlank> in cash. If you have questions or require additional information, please feel free to contact me at <TplBlank>[employer phone number]</TplBlank>.<br /><br />
              Sincerely,<br /><br />
              <TplBlank>[Employer&apos;s printed name]</TplBlank>, ______________________<br />
              <span className="text-[13px] text-black/50">(Employer&apos;s signature)</span>
            </p>
          </div>

          <div className="bg-white border border-[#00356b]/20 border-l-4 border-l-[#00356b] p-5">
            <p className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[12px] uppercase tracking-wide mb-4">Letter written by the person who supports you financially</p>
            <p className="font-['Poppins',sans-serif] text-black/80 text-[14px] leading-[2]">
              <TplBlank>[Today&apos;s date]</TplBlank><br /><br />
              To whom it may concern,<br /><br />
              I, <TplBlank>[supporter&apos;s full name]</TplBlank>, am the <TplBlank>[relationship]</TplBlank> of <TplBlank>[your full name]</TplBlank>. I currently provide monthly financial support to <TplBlank>[your name]</TplBlank> in the amount of <TplBlank>[$____ amount]</TplBlank> <TplBlank>[weekly / biweekly / monthly]</TplBlank> to provide food and shelter. If you have any questions, I can be reached at <TplBlank>[supporter&apos;s phone number]</TplBlank>.<br /><br />
              Sincerely,<br /><br />
              <TplBlank>[Supporter&apos;s printed name]</TplBlank>, ______________________<br />
              <span className="text-[13px] text-black/50">(Supporter&apos;s signature)</span>
            </p>
          </div>

          <div className={`${CALLOUT} mt-5`}>
            <span className="font-bold">Submitting your proof of income:</span>{" "}
            email photos or scans to{" "}
            <a href="mailto:hfc.billing@yale.edu" className="text-[#00356b] underline hover:text-[#00356b]/70 transition-colors">hfc.billing@yale.edu</a>,
            or drop it off at HAVEN any Saturday, 8:30 AM – 1:00 PM.
          </div>
        </div>
      </div>

      <Divider />

      {/* ── How to Submit ── */}
      <div className={`${SECTION} py-12 md:py-16`}>
        <div className={INNER}>
          <h3 className={TITLE}>How to submit your application</h3>
          <p className={DESC}>
            YNHH gives you several ways to submit. All require your signed
            application and your proof of income attached.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {SUBMIT_CARDS.map((c) => (
              <div key={c.title} className="bg-white border border-[#00356b]/20 p-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-3">
                  <c.icon className="w-6 h-6 text-[#00356b]" />
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] mb-1.5">{c.title}</p>
                <p className="font-['Poppins',sans-serif] text-black/60 text-[14px] leading-relaxed mb-4">{c.desc}</p>
                <p className="font-['Poppins',sans-serif] font-medium text-[#00356b] text-[14px] bg-[#00356b]/5 px-4 py-2 whitespace-pre-line">{c.detail}</p>
              </div>
            ))}
          </div>

          <div className={`${CALLOUT} mt-6`}>
            <span className="font-bold">After you submit:</span> processing
            usually takes 2–4 weeks. YNHH will contact you by mail or phone with
            your decision. If you are approved, keep your approval letter safe —
            you will need it at future YNHH appointments. If you are denied,
            contact HAVEN&apos;s MDIC team; we can help you understand why and
            whether to appeal.
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Renewing your coverage ── */}
      <div className={`${SECTION} py-12 md:py-16`}>
        <div className={INNER}>
          <h3 className={TITLE}>Renewing your coverage</h3>
          <div className={CALLOUT}>
            <span className="font-bold">
              Free Care expires — you must renew about every 6 months.
            </span>{" "}
            It is not a one-time approval. If you miss your renewal window, your
            coverage lapses, even in the middle of treatment. When you apply
            through HAVEN, our MDIC team tracks your renewal date and reminds you
            when it is time. Renewals are the best time to file on your own using
            this guide — the process is the same, and you already have everything
            you need.
          </div>
        </div>
      </div>

      <Divider />

      {/* ── FAQ ── */}
      <div className={`${SECTION} py-12 md:py-16`}>
        <div className={INNER}>
          <h3 className={TITLE}>Frequently asked questions</h3>

          <div className="flex flex-col gap-2.5 mt-6">
            {FAQS.map((f, i) => {
              const open = !!openFaq[i];
              return (
                <div key={i} className="border border-[#00356b]/20">
                  <button
                    onClick={() => setOpenFaq((p) => ({ ...p, [i]: !p[i] }))}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-[#00356b]/5 transition-colors"
                  >
                    <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px]">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[#00356b] transition-transform duration-300 ${open ? "rotate-180" : ""}`} strokeWidth={2.5} />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 pt-1 font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#00356b]">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Help Bar ── */}
      <div className="w-full bg-[#00356b]/5 border-y border-[#00356b]/15">
        <div className={`${SECTION} py-5`}>
          <div className={`${INNER} flex flex-col md:flex-row md:items-center md:justify-between gap-3`}>
            <p className="font-['Poppins',sans-serif] font-medium text-[#00356b] text-[14px] md:text-[15px]">
              Need help with your Free Care application? HAVEN&apos;s MDIC team is here every Saturday.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="tel:2032000673" className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[14px]"><Phone className="w-4 h-4" /> <strong>203-200-0673</strong></a>
              <a href="mailto:hfc.billing@yale.edu" className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[14px]"><Mail className="w-4 h-4" /> <strong>hfc.billing@yale.edu</strong></a>
              <span className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[#00356b] text-[14px]"><strong>Saturdays 8:30 AM – 1:00 PM</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
