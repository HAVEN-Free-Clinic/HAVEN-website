"use client";

import { useState } from "react";
import {
  ChevronDown,
  Check,
  X,
  Plus,
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
  MapPin,
  AlertTriangle,
} from "lucide-react";

/* ─────────────────────────── Data ─────────────────────────── */

const STEP_NAV = [
  { id: "fc-what", label: "What it is" },
  { id: "fc-eligible", label: "Am I eligible?" },
  { id: "fc-guide", label: "Fill out the form" },
  { id: "fc-proof", label: "Proof of income" },
  { id: "fc-checklist", label: "Checklist" },
  { id: "fc-submit", label: "Submit" },
];

const COMPARE_ROWS: [string, React.ReactNode, React.ReactNode][] = [
  ["What does it cover?", "Bills at YNHH facilities only", "Care at most doctors and hospitals"],
  ["Do you pay premiums?", <span className="text-emerald-700 font-semibold">No</span>, <span className="text-emerald-700 font-semibold">No (for HUSKY)</span>],
  ["Do you need a card?", <span className="text-red-600 font-semibold">No card — approval letter only</span>, <span className="text-emerald-700 font-semibold">Yes, insurance card issued</span>],
  ["How long does it last?", "~6 months, then renew", "Annually, then renew"],
  ["Non-citizens eligible?", <span className="text-emerald-700 font-semibold">Yes</span>, "Depends on status"],
  ["Can you use it for bills you already have?", <span className="text-emerald-700 font-semibold">Yes — retroactive bills too</span>, <span className="text-red-600 font-semibold">No — only future care</span>],
  ["Where to apply", "YNHH application (this guide)", "ct.gov/husky or call HAVEN"],
];

const ELIG_QUESTIONS = [
  {
    key: "income",
    text: "Do you have low or no income? (This includes being unemployed, paid in cash, or supported by someone else.)",
    opts: [
      { v: "yes", label: "Yes, low or no income", positive: true },
      { v: "moderate", label: "I earn a moderate income", positive: true },
      { v: "higher", label: "I earn a higher income", positive: false },
    ],
  },
  {
    key: "insurance",
    text: "Do you have health insurance right now?",
    opts: [
      { v: "none", label: "No insurance", positive: true },
      { v: "limited", label: "Limited or expired insurance", positive: true },
      { v: "full", label: "Yes, full insurance coverage", positive: false },
    ],
  },
  {
    key: "ynhh",
    text: "Did you receive care at a Yale New Haven Health facility — OR do you have a bill from YNHH right now?",
    opts: [
      { v: "yes", label: "Yes, at YNHH", positive: true },
      { v: "planned", label: "I have an upcoming YNHH appointment", positive: true },
      { v: "no", label: "No, somewhere else", positive: false },
    ],
  },
];

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

const CHECKLIST_ITEMS = [
  "I understand that Free Care is financial assistance from YNHH — not insurance",
  "I have filled in Section 1: my name, address, phone number, and date of birth",
  "I have filled in Section 2: my spouse and dependent children (or marked it N/A if I have none)",
  "I have completed Section 3: all income amounts for myself and my spouse, with weekly/biweekly/monthly circled",
  "I have answered Section 4: health insurance question (YES or NO)",
  "I have signed and dated Section 5",
  "I have attached proof of income (pay stubs, or a letter — see Step 4)",
  "I know where I am sending this application (mail, email, or HAVEN)",
  "I have set a reminder to renew in approximately 5 months",
];

const SUBMIT_CARDS = [
  { icon: Mailbox, title: "Mail it", desc: "Print, complete, sign, and mail your application with proof of income attached. Allow 2–3 weeks for processing.", detail: "Yale New Haven Health\nSBO, Attn: Financial Assistance\nPO Box 1403\nNew Haven, CT 06505" },
  { icon: Mail, title: "Email proof of income", desc: "Send photos or scans of your proof of income documents directly to the HAVEN billing team, who will submit with your application.", detail: "hfc.billing@yale.edu" },
  { icon: Building2, title: "Bring it to HAVEN", desc: "Come to HAVEN clinic any Saturday between 8:30 AM and 1:00 PM. Our MDIC team will review your application, catch any errors, and submit for you.", detail: "Saturdays 8:30 AM – 1:00 PM\nHAVEN Free Clinic\nNew Haven, CT" },
  { icon: Phone, title: "Call YNHH directly", desc: "If you have questions about your application status, a specific bill, or need help — call YNHH’s financial assistance line directly.", detail: "855-547-4584\nYNHH Financial Assistance" },
];

const RENEWAL_STEPS: { label: string; text: string; color: string }[] = [
  { label: "Day 1:", text: "You submit your Free Care application", color: "bg-emerald-400" },
  { label: "Weeks 2–4:", text: "YNHH processes your application", color: "bg-emerald-400" },
  { label: "Approval letter arrives:", text: "Keep it — show it at YNHH appointments", color: "bg-emerald-400" },
  { label: "Month 5:", text: "HAVEN alerts you — time to renew soon", color: "bg-amber-400" },
  { label: "Month 6:", text: "Submit renewal application with updated income proof", color: "bg-amber-400" },
  { label: "After 6 months without renewal:", text: "Coverage lapses — apply again", color: "bg-red-400" },
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  { q: "Can I apply even if I already have a large hospital bill?", a: <>Yes — <strong>absolutely apply.</strong> Free Care can be applied retroactively to bills you already have. Bring the bill to HAVEN’s MDIC team or call YNHH at 855-547-4584. Do not wait — the sooner you apply, the better your chances of having the bill covered or reduced.</> },
  { q: "I don’t have legal immigration status. Can I still apply?", a: <><strong>Yes.</strong> The Free Care application explicitly states that non-citizens are welcome to apply. Immigration status is not a disqualifying factor for this program. Your information is protected.</> },
  { q: "What if YNHH denies my application?", a: "Contact HAVEN’s MDIC team immediately. We can help you understand the reason for denial, correct any errors on the application, and determine whether to appeal. Denials are sometimes due to missing documentation — not ineligibility." },
  { q: "Does applying for Free Care affect my credit score?", a: 'YNHH may request your credit report as part of the application (you agreed to this in Section 5). However, this is a "soft pull" for assistance purposes — it does not affect your credit score the way a loan application would.' },
  { q: "What if my income changes after I am approved?", a: "You are required to tell YNHH if your income or situation changes significantly. This is stated in Section 5. If your income increases substantially, your Free Care level may be adjusted or discontinued." },
  { q: "I was paid in cash and don’t have pay stubs. What do I do?", a: "Use the employer letter template in Step 4 of this guide. Have your employer fill it in, sign it, and attach it to your application. If your employer refuses or you cannot reach them, call HAVEN at 203-200-0673 — we will help you find a solution." },
  { q: "How will I know if I am approved?", a: "YNHH will mail you a determination letter. Processing usually takes 2–4 weeks. If you haven’t heard anything after 4 weeks, call 855-547-4584 to check your status. Keep the approval letter — you will need to show it at future YNHH appointments." },
  { q: "Does Free Care cover care at Fair Haven Community Health or other clinics?", a: <><strong>No.</strong> Free Care only applies to Yale New Haven Health facilities — Yale New Haven Hospital, Bridgeport Hospital, Greenwich Hospital, and affiliated YNHH practices. It does not cover care at Fair Haven, Cornell Scott, or other non-YNHH locations.</> },
  { q: "What if I need help filling out the form?", a: "Come to HAVEN any Saturday between 8:30 AM and 1:00 PM. Our MDIC team will sit with you, review your application, help you gather proof of income, and submit it for you. You can also call us at 203-200-0673." },
];

/* ─────────────────────────── Helpers ─────────────────────────── */

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function TplBlank({ children }: { children: React.ReactNode }) {
  return (
    <span
      contentEditable
      suppressContentEditableWarning
      className="inline-block min-w-[100px] border-b-2 border-[#00356b] text-[#00356b] font-semibold px-1 italic focus:outline focus:outline-2 focus:outline-emerald-500"
    >
      {children}
    </span>
  );
}

const SECTION = "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16";
const INNER = "max-w-4xl mx-auto";
const EYEBROW = "font-['Poppins',sans-serif] font-semibold text-[12px] md:text-[13px] uppercase tracking-wider mb-2";
const TITLE = "font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight mb-3";
const DESC = "font-['Poppins',sans-serif] text-black/70 text-[15px] md:text-[17px] leading-relaxed";

/* ─────────────────────────── Component ─────────────────────────── */

export function FreeCareGuide() {
  const [eligAnswers, setEligAnswers] = useState<Record<string, string>>({});
  const [eligResult, setEligResult] = useState<{ variant: string; title: string; text: React.ReactNode } | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(0);
  const [checks, setChecks] = useState<boolean[]>(() => CHECKLIST_ITEMS.map(() => false));
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});

  const checkEligibility = () => {
    const { income, insurance, ynhh } = eligAnswers;
    if (!income || !insurance || !ynhh) {
      setEligResult({
        variant: "check",
        title: "Please answer all three questions",
        text: "Select an option for each question above, then check your eligibility.",
      });
    } else if (ynhh === "no") {
      setEligResult({
        variant: "maybe",
        title: "Free Care likely does not apply to that bill",
        text: "Free Care only covers care received at Yale New Haven Health facilities. If your care was at a different hospital or clinic, this program will not cover that bill. Ask HAVEN’s MDIC team about other financial assistance options for non-YNHH bills.",
      });
    } else if (income === "higher" && insurance === "full") {
      setEligResult({
        variant: "maybe",
        title: "You may still be eligible — but it is less certain",
        text: (
          <>
            Free Care is primarily for patients with low or no income and limited
            insurance. With higher income and full insurance, you may not qualify
            for full Free Care — but you may qualify for{" "}
            <strong>Discounted Care</strong>, which reduces your bill based on
            income. Apply anyway — let YNHH make the determination. Ask HAVEN’s
            MDIC team for guidance.
          </>
        ),
      });
    } else if (income === "yes" || income === "moderate") {
      setEligResult({
        variant: "likely",
        title: "You likely qualify — apply as soon as possible",
        text: (
          <>
            Based on your answers, you appear to meet the basic criteria for Free
            Care or Discounted Care at YNHH. <strong>Do not wait to apply</strong>{" "}
            — the sooner you submit, the sooner your bills can be addressed. Bring
            your application and proof of income to HAVEN any Saturday, or continue
            with Step 3 of this guide.
          </>
        ),
      });
    } else {
      setEligResult({
        variant: "check",
        title: "Apply and let YNHH decide",
        text: "Based on your answers, you may qualify — but your situation has some factors that YNHH will need to evaluate directly. The best thing you can do is apply and provide complete documentation. HAVEN’s MDIC team can review your situation and help you build the strongest application. Come any Saturday or call 203-200-0673.",
      });
    }
  };

  const doneCount = checks.filter(Boolean).length;
  const pct = Math.round((doneCount / CHECKLIST_ITEMS.length) * 100);

  const resultStyles: Record<string, string> = {
    likely: "bg-emerald-50 border-emerald-200",
    maybe: "bg-amber-50 border-amber-200",
    check: "bg-[#00356b]/5 border-[#00356b]/20",
  };
  const resultTitleColor: Record<string, string> = {
    likely: "text-emerald-800",
    maybe: "text-amber-900",
    check: "text-[#00356b]",
  };

  return (
    <div>
      {/* ── Guide Hero Banner ── */}
      <div className="w-full bg-[#00356b]">
        <div className={`${SECTION} py-12 md:py-16`}>
          <div className={INNER}>
            <p className="font-['Poppins',sans-serif] font-semibold text-[12px] uppercase tracking-wider text-[#8DC63F] mb-3">
              Yale New Haven Health · Financial Assistance Program
            </p>
            <h2 className="font-['Merriweather',serif] font-bold text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.15] mb-4">
              Free Care is the hospital&apos;s commitment to you.{" "}
              <span className="text-[#8DC63F] italic">Not insurance.</span>
            </h2>
            <p className="font-['Poppins',sans-serif] text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[580px] mb-6">
              Yale New Haven Health (YNHH) has a program called Free Care — a
              promise to help patients who cannot afford their medical bills. This
              guide walks you through exactly how to apply, step by step, in plain
              language. You can do this yourself — and HAVEN is here if you need
              help.
            </p>
            <div className="bg-white/[0.07] border border-white/15 rounded-2xl p-5 md:p-6 max-w-[580px]">
              <p className="font-['Poppins',sans-serif] font-semibold text-[11px] uppercase tracking-wider text-[#8DC63F] mb-2">
                The most important thing to understand first
              </p>
              <p className="font-['Poppins',sans-serif] text-white/85 text-[14px] md:text-[15px] leading-relaxed">
                Free Care is <strong>not health insurance</strong>. It does not
                replace insurance. It is a financial assistance program — meaning
                Yale New Haven Health agrees to reduce or eliminate your bill for
                care you already received, or care you are about to receive,{" "}
                <em>at their facilities only</em>. You apply for it, and you must
                renew it approximately every 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Step Navigation ── */}
      <div className="w-full bg-white border-b border-[#00356b]/10">
        <div className={`${SECTION} py-4`}>
          <div className={`${INNER} flex flex-wrap gap-2`}>
            {STEP_NAV.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className="inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[13px] font-medium text-[#00356b]/70 hover:text-[#00356b] hover:bg-[#00356b]/5 px-3 py-1.5 rounded transition-colors"
              >
                <span className="w-5 h-5 rounded-full border border-[#00356b]/30 flex items-center justify-center text-[11px] font-semibold shrink-0">
                  {i + 1}
                </span>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Step 1: What Free Care Is ── */}
      <div id="fc-what" className={`${SECTION} scroll-mt-24 py-12 md:py-16`}>
        <div className={INNER}>
          <p className={`${EYEBROW} text-emerald-700`}>Step 1 — Understand what you&apos;re applying for</p>
          <h3 className={TITLE}>What Free Care is — and what it is not</h3>
          <p className={DESC}>
            Before you fill out one line of the application, you need to understand
            this clearly. Many people are confused about what Free Care does. This
            confusion leads to disappointment — and sometimes, to people not
            applying at all. Read this carefully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 md:p-6">
              <p className="flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-emerald-800 text-[16px] mb-3">
                <Check className="w-5 h-5" strokeWidth={2.5} /> Free Care IS…
              </p>
              <div className="font-['Poppins',sans-serif] text-emerald-900/90 text-[14px] md:text-[15px] leading-relaxed space-y-2">
                <p>A <strong>financial assistance program</strong> run by Yale New Haven Health (YNHH). When approved, YNHH agrees to cover all or part of your medical bills — based on your income.</p>
                <p>Available to patients who receive care at <strong>YNHH facilities</strong> — including Yale New Haven Hospital, Bridgeport Hospital, Greenwich Hospital, and affiliated clinics.</p>
                <p><strong>Free or discounted</strong> depending on your income level. You apply once and are approved for approximately 6 months, then you renew.</p>
                <p>Available to <strong>non-citizens</strong> — immigration status does not disqualify you.</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 md:p-6">
              <p className="flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-red-700 text-[16px] mb-3">
                <X className="w-5 h-5" strokeWidth={2.5} /> Free Care is NOT…
              </p>
              <div className="font-['Poppins',sans-serif] text-red-800/90 text-[14px] md:text-[15px] leading-relaxed space-y-2">
                <p><strong>Not health insurance.</strong> It does not give you a card to use at any doctor. It only applies to YNHH facilities — nowhere else.</p>
                <p><strong>Not permanent.</strong> You must renew approximately every 6 months. If you miss renewal, coverage may lapse even mid-treatment.</p>
                <p><strong>Not automatic.</strong> You must apply, provide proof of income, and be approved. It is not given to everyone — you must qualify.</p>
                <p><strong>Not a replacement for HUSKY.</strong> If you qualify for Connecticut Medicaid (HUSKY), you should apply for that too. Ask HAVEN’s MDIC team for help with both.</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse font-['Poppins',sans-serif] text-[14px] md:text-[15px]">
              <thead>
                <tr>
                  <th className="bg-[#00356b] text-white text-left font-semibold px-4 py-2.5">Question</th>
                  <th className="bg-[#00356b] text-white text-left font-semibold px-4 py-2.5">Free Care (YNHH FAP)</th>
                  <th className="bg-[#00356b] text-white text-left font-semibold px-4 py-2.5">Health Insurance (HUSKY / Medicaid)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([q, a, b], i) => (
                  <tr key={q} className={i % 2 ? "bg-[#f7f9fc]" : ""}>
                    <td className="px-4 py-2.5 border-b border-[#00356b]/10 align-top text-black/80">{q}</td>
                    <td className="px-4 py-2.5 border-b border-[#00356b]/10 align-top text-black/80">{a}</td>
                    <td className="px-4 py-2.5 border-b border-[#00356b]/10 align-top text-black/80">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#00356b]/5 border border-[#00356b]/20 rounded-2xl px-5 py-4 mt-6">
            <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] mb-1">HAVEN can help you with both</p>
            <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
              Our Medical Debt and Insurance Counseling (MDIC) team helps patients
              apply for Free Care AND screen for HUSKY eligibility. You do not have
              to choose one — you may qualify for both. Ask at your next Saturday
              visit.
            </p>
          </div>
        </div>
      </div>

      <div className={SECTION}><div className={INNER}><div className="w-full h-px bg-[#00356b]/10" /></div></div>

      {/* ── Step 2: Eligibility ── */}
      <div id="fc-eligible" className={`${SECTION} scroll-mt-24 py-12 md:py-16`}>
        <div className={INNER}>
          <p className={`${EYEBROW} text-[#534AB7]`}>Step 2 — Check if you likely qualify</p>
          <h3 className={TITLE}>Do I qualify for Free Care?</h3>
          <p className={DESC}>
            Answer these quick questions to get a sense of your eligibility. This
            is not an official determination — only YNHH makes that. But it will
            help you understand whether applying makes sense.
          </p>

          <div className="flex flex-col gap-3 mt-8">
            {ELIG_QUESTIONS.map((q) => (
              <div key={q.key} className="bg-[#f7f9fc] border border-[#00356b]/10 rounded-2xl p-5">
                <p className="font-['Poppins',sans-serif] font-medium text-[#00356b] text-[15px] md:text-[16px] mb-3">{q.text}</p>
                <div className="flex flex-wrap gap-2">
                  {q.opts.map((o) => {
                    const selected = eligAnswers[q.key] === o.v;
                    return (
                      <button
                        key={o.v}
                        onClick={() => {
                          setEligAnswers((p) => ({ ...p, [q.key]: o.v }));
                          setEligResult(null);
                        }}
                        className={`font-['Poppins',sans-serif] text-[13px] md:text-[14px] font-medium px-4 py-1.5 rounded-full border transition-colors ${
                          selected
                            ? o.positive
                              ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                              : "bg-amber-50 border-amber-400 text-amber-900"
                            : "bg-white border-[#00356b]/20 text-black/60 hover:border-emerald-400 hover:text-emerald-800"
                        }`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={checkEligibility}
            className="mt-5 inline-flex items-center font-['Poppins',sans-serif] font-semibold text-[15px] text-white bg-[#00356b] px-7 py-3 hover:bg-[#4a90c4] transition-colors"
          >
            Check my eligibility →
          </button>

          {eligResult && (
            <div className={`rounded-2xl border px-5 py-5 mt-5 ${resultStyles[eligResult.variant]}`}>
              <p className={`font-['Poppins',sans-serif] font-semibold text-[16px] mb-1.5 ${resultTitleColor[eligResult.variant]}`}>
                {eligResult.title}
              </p>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed">
                {eligResult.text}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={SECTION}><div className={INNER}><div className="w-full h-px bg-[#00356b]/10" /></div></div>

      {/* ── Step 3: Form Walkthrough ── */}
      <div id="fc-guide" className={`${SECTION} scroll-mt-24 py-12 md:py-16`}>
        <div className={INNER}>
          <p className={`${EYEBROW} text-[#00356b]`}>Step 3 — Fill out the application</p>
          <h3 className={TITLE}>How to fill out the Free Care application, field by field</h3>
          <p className={DESC}>
            The official form is the <strong>YNHH Application for Financial
            Assistance Programs (Form F6304)</strong>. Below is every section of
            the form explained in plain language. Tap each section to expand it.
          </p>
          <p className="font-['Poppins',sans-serif] text-black/50 text-[13px] md:text-[14px] mt-2">
            If you need the actual form: ask HAVEN&apos;s MDIC team at any Saturday
            clinic, or call YNHH at <strong>855-547-4584</strong>.
          </p>

          <div className="mt-8 space-y-4">
            {FORM_STEPS.map((s, i) => {
              const open = openStep === i;
              return (
                <div key={s.num} className={`bg-white border rounded-2xl overflow-hidden transition-shadow ${open ? "shadow-md border-[#00356b]/20" : "border-[#00356b]/15"}`}>
                  <button
                    onClick={() => setOpenStep(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-start gap-4 px-5 md:px-6 py-5 text-left"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#00356b] text-white font-['Merriweather',serif] flex items-center justify-center shrink-0 mt-0.5">
                      {s.num}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[17px]">{s.title}</span>
                      <span className="block font-['Poppins',sans-serif] text-black/50 text-[13px] md:text-[14px] mt-0.5">{s.subtitle}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 shrink-0 mt-1 text-[#00356b] transition-transform duration-300 ${open ? "rotate-180" : ""}`} strokeWidth={2.5} />
                  </button>

                  {open && (
                    <div className="px-5 md:px-6 pb-6">
                      <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed bg-[#f7f9fc] rounded-lg p-4 mb-5">{s.intro}</p>

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
                                  <td className={`px-3 py-2 border-b border-[#00356b]/10 align-top font-medium ${yes ? "text-emerald-700" : "text-black/40"}`}>
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
                          <div key={f.name} className="border border-[#00356b]/10 rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#f7f9fc]">
                              <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[15px]">{f.name}</p>
                              <span className={`font-['Poppins',sans-serif] font-semibold text-[11px] px-2 py-0.5 rounded-full shrink-0 ${f.required ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"}`}>
                                {f.required ? "Required" : "Optional"}
                              </span>
                            </div>
                            <div className="px-4 py-3 space-y-2.5">
                              <p className="font-['Poppins',sans-serif] text-black/80 text-[14px] md:text-[15px] leading-relaxed">{f.what}</p>
                              {f.example && (
                                <p className="font-['Poppins',sans-serif] text-emerald-800 text-[13px] md:text-[14px] italic bg-emerald-50 rounded px-3 py-2">
                                  <span className="font-semibold not-italic">Example: </span>{f.example}
                                </p>
                              )}
                              {f.tip && (
                                <p className="font-['Poppins',sans-serif] text-amber-900 text-[13px] md:text-[14px] bg-amber-50 rounded px-3 py-2">
                                  <span className="font-semibold">💡 Tip: </span>{f.tip}
                                </p>
                              )}
                              {f.warning && (
                                <p className="font-['Poppins',sans-serif] text-red-700 text-[13px] md:text-[14px] bg-red-50 rounded px-3 py-2">
                                  <span className="font-semibold">⚠ </span>{f.warning}
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

      <div className={SECTION}><div className={INNER}><div className="w-full h-px bg-[#00356b]/10" /></div></div>

      {/* ── Step 4: Proof of Income ── */}
      <div id="fc-proof" className={`${SECTION} scroll-mt-24 py-12 md:py-16`}>
        <div className={INNER}>
          <p className={`${EYEBROW} text-amber-700`}>Step 4 — Gather your proof of income</p>
          <h3 className={TITLE}>What counts as proof of income — and how to get it</h3>
          <p className={DESC}>
            This is the step most people get stuck on. Your proof of income shows
            YNHH how much money your household earns. You must attach it to your
            application — without it, your application will be incomplete. Find your
            situation below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {POI_CARDS.map((c) => (
              <div key={c.situation} className="bg-white border border-[#00356b]/15 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-3">
                  <c.icon className="w-5 h-5 text-[#00356b]" />
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b]/70 text-[11px] uppercase tracking-wide mb-1.5">{c.situation}</p>
                <p className="font-['Poppins',sans-serif] font-semibold text-emerald-800 text-[15px] mb-1.5">{c.doc}</p>
                <p className="font-['Poppins',sans-serif] text-black/60 text-[13px] leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>

          {/* Letter templates */}
          <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[12px] uppercase tracking-wider mt-10 mb-5">
            Letter templates — fill in the blanks and have the person sign
          </p>

          <div className="bg-white border border-[#00356b]/15 border-l-4 border-l-[#00356b] rounded-xl p-5 mb-4">
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

          <div className="bg-white border border-[#00356b]/15 border-l-4 border-l-[#534AB7] rounded-xl p-5">
            <p className="font-['Poppins',sans-serif] font-bold text-[#534AB7] text-[12px] uppercase tracking-wide mb-4">Letter written by the person who supports you financially</p>
            <p className="font-['Poppins',sans-serif] text-black/80 text-[14px] leading-[2]">
              <TplBlank>[Today&apos;s date]</TplBlank><br /><br />
              To whom it may concern,<br /><br />
              I, <TplBlank>[supporter&apos;s full name]</TplBlank>, am the <TplBlank>[relationship]</TplBlank> of <TplBlank>[your full name]</TplBlank>. I currently provide monthly financial support to <TplBlank>[your name]</TplBlank> in the amount of <TplBlank>[$____ amount]</TplBlank> <TplBlank>[weekly / biweekly / monthly]</TplBlank> to provide food and shelter. If you have any questions, I can be reached at <TplBlank>[supporter&apos;s phone number]</TplBlank>.<br /><br />
              Sincerely,<br /><br />
              <TplBlank>[Supporter&apos;s printed name]</TplBlank>, ______________________<br />
              <span className="text-[13px] text-black/50">(Supporter&apos;s signature)</span>
            </p>
          </div>

          <div className="bg-emerald-50 rounded-xl p-5 mt-5">
            <p className="font-['Poppins',sans-serif] font-semibold text-emerald-800 text-[14px] md:text-[15px]">How to submit your proof of income:</p>
            <p className="font-['Poppins',sans-serif] text-emerald-800 text-[14px] md:text-[15px] mt-1.5 flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> Email photos to: <strong>hfc.billing@yale.edu</strong></p>
            <p className="font-['Poppins',sans-serif] text-emerald-800 text-[14px] md:text-[15px] flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> Drop off in person at HAVEN clinic any Saturday, 8:30 AM – 1:00 PM</p>
          </div>
        </div>
      </div>

      <div className={SECTION}><div className={INNER}><div className="w-full h-px bg-[#00356b]/10" /></div></div>

      {/* ── Step 5: Checklist ── */}
      <div id="fc-checklist" className={`${SECTION} scroll-mt-24 py-12 md:py-16`}>
        <div className={INNER}>
          <p className={`${EYEBROW} text-emerald-700`}>Step 5 — Make sure you have everything</p>
          <h3 className={TITLE}>Application checklist</h3>
          <p className={DESC}>
            Check off each item as you complete it. Your application will not be
            processed without all required items.
          </p>

          <div className="bg-[#f7f9fc] rounded-xl px-5 py-4 mt-6 flex items-center justify-between">
            <span className="font-['Poppins',sans-serif] text-black/60 text-[14px] md:text-[15px]">{doneCount} of {CHECKLIST_ITEMS.length} completed</span>
            <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px]">{doneCount} / {CHECKLIST_ITEMS.length}</span>
          </div>
          <div className="h-1.5 bg-[#00356b]/10 rounded-full my-2 overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
          </div>

          <div className="flex flex-col gap-2.5 mt-5">
            {CHECKLIST_ITEMS.map((item, i) => {
              const on = checks[i];
              return (
                <button
                  key={item}
                  onClick={() => setChecks((p) => p.map((v, idx) => (idx === i ? !v : v)))}
                  aria-pressed={on}
                  className={`flex items-start gap-3.5 text-left px-4 py-3.5 rounded-lg border transition-colors ${on ? "bg-emerald-50 border-emerald-200" : "bg-[#f7f9fc] border-[#00356b]/10 hover:border-emerald-300"}`}
                >
                  <span className={`w-[22px] h-[22px] rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${on ? "bg-emerald-500 border-emerald-500 text-white" : "border-[#00356b]/25"}`}>
                    {on && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </span>
                  <span className={`font-['Poppins',sans-serif] text-[14px] md:text-[15px] leading-relaxed ${on ? "text-emerald-800" : "text-black/80"}`}>{item}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={SECTION}><div className={INNER}><div className="w-full h-px bg-[#00356b]/10" /></div></div>

      {/* ── Step 6: Submit ── */}
      <div id="fc-submit" className={`${SECTION} scroll-mt-24 py-12 md:py-16`}>
        <div className={INNER}>
          <p className={`${EYEBROW} text-[#185FA5]`}>Step 6 — Submit your application</p>
          <h3 className={TITLE}>Three ways to submit — choose what works for you</h3>
          <p className={DESC}>
            YNHH gives you options to submit your completed application. All require
            your signed application AND your proof of income attached.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {SUBMIT_CARDS.map((c) => (
              <div key={c.title} className="bg-white border border-[#00356b]/15 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-3">
                  <c.icon className="w-6 h-6 text-[#00356b]" />
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] mb-1.5">{c.title}</p>
                <p className="font-['Poppins',sans-serif] text-black/60 text-[14px] leading-relaxed mb-4">{c.desc}</p>
                <p className="font-['Poppins',sans-serif] font-medium text-emerald-800 text-[14px] bg-emerald-50 px-4 py-2 rounded-lg whitespace-pre-line">{c.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 mt-6">
            <p className="font-['Poppins',sans-serif] font-semibold text-red-700 text-[15px] mb-1.5">After you submit — what to expect</p>
            <p className="font-['Poppins',sans-serif] text-red-800/90 text-[14px] md:text-[15px] leading-relaxed">
              Processing typically takes 2–4 weeks. YNHH will contact you by mail or
              phone with your determination. If you are approved, you will receive a
              letter stating your coverage level. <strong>Keep this letter safe — you
              will need it for future YNHH appointments.</strong> If you are denied,
              contact HAVEN’s MDIC team — we can help you understand why and whether
              to appeal.
            </p>
          </div>
        </div>
      </div>

      {/* ── Renewal Timeline ── */}
      <div className="w-full bg-[#00356b]">
        <div className={`${SECTION} py-12 md:py-16`}>
          <div className={`${INNER} grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center`}>
            <div>
              <p className="font-['Poppins',sans-serif] font-semibold text-[12px] uppercase tracking-wider text-[#8DC63F] mb-2">Don&apos;t forget — Free Care expires</p>
              <h3 className="font-['Merriweather',serif] font-bold text-white text-[24px] md:text-[28px] mb-3">You must renew every 6 months</h3>
              <p className="font-['Poppins',sans-serif] text-white/70 text-[15px] md:text-[16px] leading-relaxed">
                Free Care is not a one-time approval. YNHH reassesses your
                eligibility approximately every 6 months. If you miss your renewal
                window, your coverage lapses — even if you are in the middle of
                treatment. Set a reminder now.
              </p>
              <div className="mt-5 bg-[#8DC63F]/10 border border-[#8DC63F]/25 rounded-lg px-4 py-3">
                <p className="font-['Poppins',sans-serif] text-white/90 text-[14px] md:text-[15px] leading-relaxed">
                  <strong className="text-[#8DC63F]">HAVEN&apos;s MDIC team will remind you.</strong> When you apply through HAVEN, we track your renewal date and alert you when it is time to re-apply. You do not have to remember on your own.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {RENEWAL_STEPS.map((r) => (
                <div key={r.label} className="flex items-center gap-3.5 px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg">
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${r.color}`} />
                  <p className="font-['Poppins',sans-serif] text-white/80 text-[14px] leading-snug">
                    <strong className="text-white">{r.label}</strong> {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className={`${SECTION} py-12 md:py-16`}>
        <div className={INNER}>
          <p className={`${EYEBROW} text-[#00356b]`}>Common questions</p>
          <h3 className={TITLE}>Questions patients ask most</h3>

          <div className="flex flex-col gap-2.5 mt-6">
            {FAQS.map((f, i) => {
              const open = !!openFaq[i];
              return (
                <div key={i} className="border border-[#00356b]/15 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq((p) => ({ ...p, [i]: !p[i] }))}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-[#f7f9fc] transition-colors"
                  >
                    <span className="font-['Poppins',sans-serif] font-medium text-[#00356b] text-[15px] md:text-[16px]">{f.q}</span>
                    <Plus className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open ? "rotate-45 text-emerald-600" : "text-[#00356b]/50"}`} strokeWidth={2.5} />
                  </button>
                  {open && (
                    <div className="px-4 pb-4 pt-1 bg-[#f7f9fc] font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#00356b]">
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
      <div className="w-full bg-emerald-50 border-y border-emerald-200">
        <div className={`${SECTION} py-5`}>
          <div className={`${INNER} flex flex-col md:flex-row md:items-center md:justify-between gap-3`}>
            <p className="font-['Poppins',sans-serif] font-medium text-emerald-800 text-[14px] md:text-[15px]">
              Need help with your Free Care application? HAVEN&apos;s MDIC team is here every Saturday.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="tel:2032000673" className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-emerald-800 text-[14px]"><Phone className="w-4 h-4" /> <strong>203-200-0673</strong></a>
              <a href="mailto:hfc.billing@yale.edu" className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-emerald-800 text-[14px]"><Mail className="w-4 h-4" /> <strong>hfc.billing@yale.edu</strong></a>
              <span className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-emerald-800 text-[14px]"><AlertTriangle className="w-4 h-4" /> <strong>Saturdays 8:30 AM – 1:00 PM</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
