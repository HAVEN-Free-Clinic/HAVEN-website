"use client";

import { useState } from "react";
import { ChevronDown, Phone, Voicemail, AlertTriangle } from "lucide-react";

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
          Yale Physicians Building at 800 Howard Avenue. Free parking is
          available in the Howard Avenue Garage, located to the left of the
          building
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
    <div className="border-b border-[#00356b]/20">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
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
          open ? "max-h-[5000px] pb-6" : "max-h-0"
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
        <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-8">
          Book an Appointment
        </h3>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          To book an appointment, call us at (203) 200-0673 and leave a
          voicemail. Our clinic is not open at all hours, but a staff member
          will return your call within 24 hours. Please note that we only
          have appointments on Saturdays.
        </p>
      </div>

      {/* Walk-Ins */}
      <div>
        <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-8">
          Walk-Ins
        </h3>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          HAVEN Free Clinic offers both scheduled appointments and limited
          walk-in availability. Scheduled patients are always seen first.
          Walk-ins are welcome on a first come, first served basis, but are only
          accepted until 10:30 AM, after which we cannot guarantee availability
          for that day.
        </p>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px] mt-4">
          To secure your spot and reduce wait times, we encourage all patients
          to schedule an appointment in advance.
        </p>
      </div>

      {/* Cancel / Reschedule */}
      <div>
        <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-8">
          Reschedule or Cancel an Appointment
        </h3>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          We understand that life is unpredictable and that circumstances may
          sometimes prevent you from attending a scheduled appointment. If you
          are unable to attend for any reason, we ask that you let us know as
          soon as possible. You can reach us in either of the following ways:
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-2 mt-4 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          <li>Send a Care Message through your MyChart patient portal</li>
          <li>Call us at (203) 200-0673 to speak with a staff member</li>
        </ul>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px] mt-4">
          Notifying us in advance allows us to offer your appointment slot to
          another patient in need.
        </p>
      </div>

      {/* No-Show Policy */}
      <div>
        <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-8">
          No-Show Policy
        </h3>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          A no-show occurs when a patient misses a scheduled appointment without
          prior notice. This policy is designed to ensure we can continue
          serving all of our patients equitably and efficiently.
        </p>
        <div className="bg-[#fef7ed] border-l-4 border-amber-400 px-6 py-5 mt-5 max-w-[1000px]">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
            If you <span className="font-semibold">no-show 3 or more
            consecutive appointments</span>, we will be unable to reschedule
            future appointments at HAVEN Free Clinic. This policy exists to
            protect access to care for all patients on our waiting list.
          </p>
        </div>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px] mt-5">
          We strongly encourage you to reach out before missing an appointment.
          We are always happy to find a time that works better for you.
        </p>
      </div>

      {/* Different Schedule or Visit Format */}
      <div>
        <h3 className="font-['Merriweather',serif] font-semibold text-[#00356b] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] mb-4 md:mb-8">
          Need a Different Schedule or Visit Format?
        </h3>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px]">
          We recognize that our Saturday clinic hours and standard appointment
          length may not be the right fit for everyone. If you are unable to
          attend appointments on Saturdays, or if you prefer a shorter visit
          format, please let us know. We will work with you to connect you with
          one of our partner clinics that may be a better fit for your needs and
          schedule.
        </p>
        <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[1000px] mt-4">
          Questions? Contact us via Care Message or by phone at (203) 200-0673.
          We&apos;re here to help.
        </p>
      </div>
    </div>
  );
}

/* ─── Provider Directory Tab ─── */

function ProviderDirectoryPanel() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Contact emails */}
      <div className="bg-[#00356b] px-6 md:px-10 py-6 md:py-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
          <span className="font-['Poppins',sans-serif] font-bold text-white text-[16px] sm:text-[18px] md:text-[20px]">
            HAVEN Free Clinic — General Inquiries
          </span>
          <a
            href="mailto:haven.free.clinic@yale.edu"
            className="font-['Poppins',sans-serif] font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] underline underline-offset-4 hover:text-white/80 transition-colors shrink-0"
          >
            haven.free.clinic@yale.edu
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
          <span className="font-['Poppins',sans-serif] font-medium text-white/90 text-[15px] sm:text-[16px] md:text-[18px]">
            Billing &amp; Insurance Questions
          </span>
          <a
            href="mailto:hfc.billing@yale.edu"
            className="font-['Poppins',sans-serif] font-medium text-white/90 text-[15px] sm:text-[16px] md:text-[18px] underline underline-offset-4 hover:text-white/70 transition-colors shrink-0"
          >
            hfc.billing@yale.edu
          </a>
        </div>
      </div>

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
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
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
        <div className="max-w-4xl mx-auto">
          <div role="tablist" className="flex items-center gap-2 sm:gap-4 md:gap-8 border-b border-[#00356b]/10">
            {TAB_KEYS.map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`tabpanel-${key}`}
                id={`tab-${key}`}
                onClick={() => setActiveTab(key)}
                className={`cursor-pointer pb-3 md:pb-4 font-['Poppins',sans-serif] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] transition-colors whitespace-nowrap ${
                  activeTab === key
                    ? "text-[#00356b] border-b-[3px] border-[#00356b]"
                    : "text-[#6b7280] hover:text-[#00356b]"
                }`}
              >
                {TAB_LABELS[key]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-6 md:pt-10 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          {activeTab === "what-to-expect" && (
            <div role="tabpanel" id="tabpanel-what-to-expect" aria-labelledby="tab-what-to-expect">
              {whatToExpectItems.map((item) => (
                <AccordionItem key={item.title} item={item} />
              ))}
            </div>
          )}

          {activeTab === "booking-cancelling" && (
            <div role="tabpanel" id="tabpanel-booking-cancelling" aria-labelledby="tab-booking-cancelling">
              <BookingCancellingPanel />
            </div>
          )}

          {activeTab === "provider-directory" && (
            <div role="tabpanel" id="tabpanel-provider-directory" aria-labelledby="tab-provider-directory">
              <ProviderDirectoryPanel />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Triage Line ── */}
      <div
        id="triage-line"
        className="scroll-mt-24 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0">
              <Voicemail className="w-6 h-6 text-[#00356b]" />
            </div>
            <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Between-Visit Questions: Our Triage Line
            </h3>
          </div>
          <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed space-y-5">
            <p>
              HAVEN Free Clinic maintains a triage line for patients who have
              medical questions or concerns between clinic visits. The triage line
              is a monitored voicemail inbox. When you call, leave a message with
              your name, date of birth, a callback number, and a brief description
              of your concern.
            </p>
            <p>
              Our team monitors the line regularly and will do our best to get
              back to you the same day. Depending on the nature of your request,
              it may take <span className="font-semibold">1 to 2 business days</span>{" "}
              for a full response.
            </p>
          </div>

          <div className="bg-[#f7f9fc] border border-[#00356b]/10 p-6 md:p-7 mt-7">
            <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] md:text-[20px] mb-4">
              When leaving a voicemail, please include:
            </h4>
            <ul className="list-disc pl-6 space-y-2 font-['Poppins',sans-serif] text-black text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
              <li>Your full name and date of birth</li>
              <li>A callback number where we can reach you</li>
              <li>A brief description of your question or concern</li>
            </ul>
            <a
              href="tel:2032000673"
              className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3.5 mt-6 hover:bg-[#4a90c4] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call the Triage Line — (203) 200-0673
            </a>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 md:p-7 mt-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-700" />
            </div>
            <p className="font-['Poppins',sans-serif] font-medium text-red-800 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              If you are experiencing a medical emergency, do not call the triage
              line. Call{" "}
              <a href="tel:911" className="underline font-bold">
                911
              </a>{" "}
              immediately or go to your nearest emergency room. The triage line is
              not staffed 24/7 and is not equipped to respond to emergencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
