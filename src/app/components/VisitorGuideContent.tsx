"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Tabs ─── */

const TAB_KEYS = ["what-to-expect", "booking-cancelling", "provider-directory"] as const;
type TabKey = (typeof TAB_KEYS)[number];

const TAB_LABELS: Record<TabKey, string> = {
  "what-to-expect": "What to Expect",
  "booking-cancelling": "Booking/Cancelling",
  "provider-directory": "Provider Directory",
};

/* ─── Accordion ─── */

interface AccordionItemData {
  title: string;
  content: React.ReactNode;
}

const whatToExpectItems: AccordionItemData[] = [
  {
    title: "Before Your Visit",
    /* DRAFT — replace with final copy */
    content: (
      <ul className="list-disc pl-8 md:pl-12 space-y-2">
        <li>
          Bring a valid photo ID (state ID, passport, or consular ID)
        </li>
        <li>
          Bring proof of income or a self-declaration of income if available
        </li>
        <li>
          Bring your insurance card if you have one — but insurance is not
          required to be seen
        </li>
        <li>
          Prepare a list of all current medications, including dosages
        </li>
        <li>
          Write down any questions or concerns you want to discuss with
          your provider
        </li>
        <li>
          If you need language interpretation, please let us know when you
          call to schedule so we can arrange a translator
        </li>
      </ul>
    ),
  },
  {
    title: "During Your Visit",
    /* DRAFT — replace with final copy */
    content: (
      <ul className="list-disc pl-8 md:pl-12 space-y-2">
        <li>
          When you arrive, check in at the front desk on Floor 1 of the
          Yale Physicians Building at 800 Howard Avenue
        </li>
        <li>
          You will complete a brief intake form and have your vitals taken
          (blood pressure, heart rate, temperature, and weight)
        </li>
        <li>
          A student clinician will meet with you first, followed by a
          supervising physician who will review your care
        </li>
        <li>
          Depending on your needs, you may also meet with our social
          services, pharmacy, or behavioral health teams
        </li>
        <li>
          Please expect to be at the clinic for 1 to 2 hours — we
          appreciate your patience as we work to provide thorough care
        </li>
      </ul>
    ),
  },
  {
    title: "After Your Visit",
    /* DRAFT — replace with final copy */
    content: (
      <ul className="list-disc pl-8 md:pl-12 space-y-2">
        <li>
          If medications are prescribed, they will typically be available
          for pickup at our partner pharmacy within 3 business days
        </li>
        <li>
          Follow-up appointments can be scheduled before you leave or by
          calling (203) 200-0673
        </li>
        <li>
          Lab results will be reviewed by your care team and communicated
          to you at your next visit or by phone
        </li>
        <li>
          If you need referrals to specialists, our care coordination team
          will help arrange those appointments
        </li>
        <li>
          For urgent concerns between visits, call our clinic line and
          leave a message — a team member will return your call
        </li>
      </ul>
    ),
  },
  {
    title: "Common Misconceptions",
    /* DRAFT — replace with final copy */
    content: (
      <ul className="list-disc pl-8 md:pl-12 space-y-2">
        <li>
          <span className="font-medium">&quot;I need insurance to be seen.&quot;</span>{" "}
          — HAVEN serves uninsured and underinsured patients. You do not
          need insurance to receive care
        </li>
        <li>
          <span className="font-medium">&quot;I need to be a U.S. citizen.&quot;</span>{" "}
          — We welcome all patients regardless of immigration or
          citizenship status
        </li>
        <li>
          <span className="font-medium">&quot;Student-run means lower quality.&quot;</span>{" "}
          — All care is supervised by licensed Yale physicians. Student
          clinicians work under direct attending oversight
        </li>
        <li>
          <span className="font-medium">&quot;I can only come once.&quot;</span>{" "}
          — We encourage ongoing care. Many of our patients return
          regularly for chronic condition management and preventive visits
        </li>
        <li>
          <span className="font-medium">&quot;There is a fee I don&apos;t know about.&quot;</span>{" "}
          — Our services are provided at no cost to eligible patients.
          There are no hidden fees
        </li>
      </ul>
    ),
  },
];

function AccordionItem({ item }: { item: AccordionItemData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
          {item.title}
        </span>
        <ChevronDown
          className={`w-6 h-6 md:w-9 md:h-9 lg:w-11 lg:h-11 shrink-0 text-black transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[1000px] pb-6" : "max-h-0"
        }`}
      >
        <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
          {item.content}
        </div>
      </div>
    </div>
  );
}

/* ─── Booking / Cancelling Tab ─── */

function BookingCancellingPanel() {
  return (
    <div className="space-y-10 md:space-y-14">
      {/* Book */}
      <div>
        <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-8">
          Book an Appointment
        </h3>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          To book an appointment, call us at (203) 200-0673 anytime. Leave a
          voicemail, and our staff will call you back. Please note that we only
          have appointments on Saturdays.
        </p>
      </div>

      {/* Cancel */}
      <div>
        <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-8">
          Cancel an Appointment
        </h3>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          We understand if you can't make your appointment. Please let us know
          by calling (203) 200-0673 and leaving a message so that another
          patient can be seen.
        </p>
      </div>
    </div>
  );
}

/* ─── Provider Directory Tab ─── */

interface DirectoryRow {
  code: string;
  name: string;
  email: string;
}

const clinicDepartments: DirectoryRow[] = [
  { code: "PCAR", name: "Primary Care", email: "Hfc.clinical.advisors@yale.edu" },
  { code: "PHAM", name: "Pharmacy", email: "hfc.pharmacy@yale.edu" },
  { code: "BVHD", name: "Behavioral Health Department", email: "hfc.behavioral.health@yale.edu" },
  { code: "SRHD", name: "Sexual and Reproductive Health", email: "hfc.rhd@yale.edu" },
  { code: "ICDD", name: "Infectious Diseases", email: "hfc.ltbi@yale.edu" },
  { code: "LCCN", name: "Longitudinal Care Coordination", email: "hfc.care.coordination@yale.edu" },
  { code: "LABR", name: "Laboratory", email: "hfc.laboratory@yale.edu" },
];

const otherResources: DirectoryRow[] = [
  { code: "MDIC", name: "Medical Debt & Insurance Counseling", email: "hfc.billing@yale.edu" },
  { code: "MDLP", name: "Medical-Legal Partnership", email: "hfc.medical.legal@yale.edu" },
  { code: "FOOD", name: "Food Pharmacy", email: "food pharm" },
  { code: "EDUC", name: "Education", email: "hfc.education@yale.edu" },
  { code: "SOSE", name: "Social Services", email: "hfc.social.services@yale.edu" },
  { code: "REFF", name: "Referrals", email: "hfc.referrals@yale.edu" },
];

const otherContacts: DirectoryRow[] = [
  { code: "INTP", name: "Interpretation & Diversity", email: "hfc.interpreting@yale.edu" },
  { code: "EXEC", name: "Executive Directors", email: "haven.free.clinic@yale.edu" },
  { code: "PATS", name: "Patient Services", email: "hfc.patient.services@yale.edu" },
];

function DirectorySection({
  title,
  rows,
}: {
  title: string;
  rows: DirectoryRow[];
}) {
  return (
    <div>
      <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-6">
        {title}
      </h3>
      <div className="space-y-2.5 md:space-y-3.5">
        {rows.map((row) => (
          <div
            key={row.code}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-4"
          >
            <span className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
              {row.code} – {row.name}
            </span>
            {row.email.includes("@") ? (
              <a
                href={`mailto:${row.email}`}
                className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] hover:text-[#00356b] transition-colors shrink-0"
              >
                {row.email}
              </a>
            ) : (
              <span className="font-['Poppins',sans-serif] text-black text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] shrink-0">
                {row.email}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProviderDirectoryPanel() {
  return (
    <div className="space-y-12 md:space-y-16">
      <DirectorySection title="Clinic Departments" rows={clinicDepartments} />
      <hr className="border-t border-black" />
      <DirectorySection title="Other Resources" rows={otherResources} />
      <hr className="border-t border-black" />
      <DirectorySection title="Other Contacts" rows={otherContacts} />
    </div>
  );
}

/* ─── Main Component ─── */

export function VisitorGuideContent() {
  const [activeTab, setActiveTab] = useState<TabKey>("what-to-expect");

  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] shrink-0">
            Visitor Guide
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px]">
            This Visitor Guide is designed to help you feel prepared and
            comfortable during your visit. Here you'll find essential
            information about check-in procedures, clinic hours, what to expect
            during your appointment, and how to access additional resources. Our
            goal is to make your experience as smooth, informed, and supportive
            as possible.
          </p>
        </div>
      </div>

      {/* ── Tab Navigation ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 border-b border-gray-200">
          {TAB_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer pb-3 md:pb-4 font-['Poppins',sans-serif] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] transition-colors whitespace-nowrap ${
                activeTab === key
                  ? "text-[#00356b] border-b-[3px] border-[#e5e7eb]"
                  : "text-[#6b7280] hover:text-[#00356b]"
              }`}
            >
              {TAB_LABELS[key]}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-6 md:pt-10 pb-16 md:pb-20 lg:pb-24">
        {activeTab === "what-to-expect" && (
          <div>
            {whatToExpectItems.map((item) => (
              <AccordionItem key={item.title} item={item} />
            ))}
          </div>
        )}

        {activeTab === "booking-cancelling" && <BookingCancellingPanel />}

        {activeTab === "provider-directory" && <ProviderDirectoryPanel />}
      </div>
    </section>
  );
}
