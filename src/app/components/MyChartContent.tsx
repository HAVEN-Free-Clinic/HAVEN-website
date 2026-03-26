"use client";

import { useState } from "react";
import {
  MessageCircle,
  CalendarCheck,
  CalendarPlus,
  FileText,
  Pill,
  ClipboardList,
  ShieldCheck,
  UserCog,
  ChevronDown,
  AlertTriangle,
  ExternalLink,
  Smartphone,
  Users,
  Download,
} from "lucide-react";

const MYCHART_LOGIN_URL = "https://mychart.ynhhs.org";

const features = [
  {
    icon: MessageCircle,
    title: "Communicate With Your Provider",
    description:
      "Send and receive secure messages directly with your care team.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule & Cancel Appointments",
    description:
      "Manage your upcoming visits and make changes to your schedule.",
  },
  {
    icon: CalendarPlus,
    title: "Request New Appointments",
    description:
      "Request a new appointment with your provider at your convenience.",
  },
  {
    icon: FileText,
    title: "Request Medical Records",
    description:
      "Access and download your medical records and visit summaries.",
  },
  {
    icon: Pill,
    title: "Request Prescription Renewals",
    description: "Submit renewal requests for your current prescriptions.",
  },
  {
    icon: ClipboardList,
    title: "Access Your Test Results",
    description:
      "View lab results and test reports as soon as they become available.",
  },
  {
    icon: ShieldCheck,
    title: "View Allergies & Medications",
    description:
      "Keep track of your allergy information and current medications.",
  },
  {
    icon: UserCog,
    title: "Update Personal Information",
    description:
      "Keep your contact details, insurance, and preferences up to date.",
  },
];

const faqs = [
  {
    question: "What is MyChart?",
    answer:
      "MyChart is a free, secure online patient portal that gives you convenient access to your HAVEN Free Clinic health information. You can use it from any device with an internet connection to communicate with your care team, view test results, request appointments, and more.",
  },
  {
    question: "How do I sign up for MyChart?",
    answer:
      "To create your MyChart account, you need an activation code. You can get one from your after-visit summary, during your next appointment, or by requesting one at the front desk. Your activation code is used once to log in for the first time, after which you will create a unique username and password.",
  },
  {
    question: "Is MyChart free to use?",
    answer:
      "Yes. MyChart is a completely free service offered to all HAVEN Free Clinic patients. There are no fees or charges to create or use your account.",
  },
  {
    question: "Can I use MyChart on my phone?",
    answer:
      "Yes. The MyChart mobile app is available for both Apple and Android devices. You can download it from the App Store or Google Play. You can also access MyChart through any web browser on your phone or tablet.",
  },
  {
    question: "How do I request prescription renewals through MyChart?",
    answer:
      "After logging in, navigate to the Medications section and select the prescription you would like to renew. Follow the prompts to submit your renewal request. Your care team will review and respond to your request, typically within 2–3 business days.",
  },
  {
    question: "Can I access a family member's medical information?",
    answer:
      "Yes. MyChart offers proxy access, which allows you to view and manage the health information of a family member or dependent. To set up proxy access, ask at the front desk during your next visit or contact the clinic directly.",
  },
  {
    question: "Is my information secure on MyChart?",
    answer:
      "Absolutely. MyChart uses industry-standard encryption and security protocols to protect your personal health information. All communications within the portal are private and attached to your account only.",
  },
  {
    question: "Should I use MyChart for urgent medical matters?",
    answer:
      "No. MyChart should only be used for non-urgent medical matters. If you are experiencing a medical emergency, please call 911 immediately. For urgent but non-emergency questions, call the clinic directly.",
  },
];

const resources = [
  {
    label: "MyChart FAQ (YNHHS)",
    url: "https://www.ynhhs.org/patients-visitors/mychart",
  },
  { label: "Patient Forms & Resources", url: "/services" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#00356b]/10">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left gap-4 group"
      >
        <span className="font-['Poppins',sans-serif] font-medium text-[15px] sm:text-[16px] md:text-[17px] text-[#00356b] group-hover:text-[#4a90c4] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#00356b]/50 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] opacity-100 pb-5 md:pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function MyChartContent() {
  return (
    <section className="bg-white w-full">
      {/* Sign Up + Urgent Notice */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sign Up */}
          <div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4 md:mb-6">
              Sign Up for MyChart
            </h2>
            <p className="font-['Poppins',sans-serif] text-black/75 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-4">
              MyChart is a free, secure online portal that gives you access to
              your HAVEN Free Clinic health information anytime, anywhere.
              Manage appointments, message your care team, view test results,
              and more.
            </p>
            <p className="font-['Poppins',sans-serif] text-black/75 text-[15px] md:text-[16px] leading-relaxed mb-6 md:mb-8">
              To get started, you&apos;ll need an{" "}
              <span className="font-semibold text-[#00356b]">
                activation code
              </span>
              . You can receive one during your next visit, from your
              after-visit summary, or by requesting one at the front desk.
            </p>
            <a
              href={MYCHART_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[16px] md:text-[18px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors duration-300"
            >
              Log In to MyChart
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Urgent Notice */}
          <div className="bg-[#fef7ed] border border-amber-200 px-6 py-6 md:px-8 md:py-8 self-start">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[20px] md:text-[22px] mb-3">
                  Urgent Medical Matters
                </h3>
                <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  MyChart should only be used for{" "}
                  <span className="font-semibold">non-urgent</span> medical
                  matters. If you are experiencing a medical emergency, please
                  call <span className="font-semibold">911</span> immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto w-full h-px bg-[#00356b]/10" />
      </div>

      {/* Features Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4 md:mb-6 text-center">
            With MyChart You Can...
          </h2>
          <p className="font-['Poppins',sans-serif] text-black/60 text-[16px] md:text-[18px] text-center max-w-[600px] mx-auto mb-12 md:mb-16">
            Access a full suite of tools to manage your health from any device.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[#f7f9fc] border border-[#00356b]/8 px-6 py-7 flex flex-col items-center text-center hover:border-[#00356b]/20 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#00356b]/10 flex items-center justify-center mb-5 group-hover:bg-[#00356b]/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#00356b]" />
                  </div>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[15px] md:text-[16px] mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-black/60 text-[13px] md:text-[14px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto w-full h-px bg-[#00356b]/10" />
      </div>

      {/* Resources + Proxy Access */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Resources */}
          <div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px] mb-6 md:mb-8">
              Resources
            </h2>
            <div className="flex flex-col gap-1">
              {resources.map((resource) => (
                <a
                  key={resource.label}
                  href={resource.url}
                  target={
                    resource.url.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    resource.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 py-3.5 px-4 -mx-4 group hover:bg-[#00356b]/5 transition-colors duration-200 rounded-lg"
                >
                  <ExternalLink className="w-4 h-4 text-[#00356b]/50 group-hover:text-[#00356b] transition-colors shrink-0" />
                  <span className="font-['Poppins',sans-serif] text-[#00356b] text-[15px] md:text-[16px] font-medium group-hover:underline">
                    {resource.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Proxy Access */}
          <div>
            <div className="flex items-start gap-4 mb-6 md:mb-8">
              <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-1">
                <Users className="w-5 h-5 text-[#00356b]" />
              </div>
              <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px]">
                Proxy Access
              </h2>
            </div>
            <p className="font-['Poppins',sans-serif] text-black/70 text-[15px] md:text-[16px] leading-relaxed mb-4">
              Need to manage a family member&apos;s health information? MyChart
              proxy access allows you to view and manage records for your
              children, elderly parents, or other dependents.
            </p>
            <p className="font-['Poppins',sans-serif] text-black/70 text-[15px] md:text-[16px] leading-relaxed mb-6">
              To set up proxy access, please visit the front desk during your
              next appointment or contact the clinic. You will need to complete
              an authorization form.
            </p>
            <a
              href="tel:2032000673"
              className="inline-flex items-center gap-2 border-2 border-[#00356b] text-[#00356b] font-['Poppins',sans-serif] font-semibold text-[15px] md:text-[16px] px-7 py-3 hover:bg-[#00356b]/5 transition-colors duration-300"
            >
              Contact the Clinic
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto w-full h-px bg-[#00356b]/10" />
      </div>

      {/* FAQ Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4 md:mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="font-['Poppins',sans-serif] text-black/60 text-[16px] md:text-[18px] text-center max-w-[600px] mx-auto mb-10 md:mb-14">
            Have questions about MyChart? Find answers to common questions
            below. For anything else, please{" "}
            <a
              href="tel:2032000673"
              className="text-[#00356b] underline hover:text-[#4a90c4] transition-colors"
            >
              contact us
            </a>
            .
          </p>
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="bg-[#f7f9fc] w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[#00356b]" />
                </div>
                <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[24px] sm:text-[28px] md:text-[32px]">
                  MyChart Mobile App
                </h2>
              </div>
              <p className="font-['Poppins',sans-serif] text-black/70 text-[16px] md:text-[18px] leading-relaxed mb-6 md:mb-8">
                Take your health information with you wherever you go. The
                MyChart mobile app gives you the same features as the web
                portal, optimized for your phone or tablet.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/us/app/mychart/id382952264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-black text-white font-['Poppins',sans-serif] font-medium text-[14px] pl-4 pr-5 py-3 rounded-xl hover:bg-black/80 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] opacity-80">
                      Download on the
                    </span>
                    <span className="text-[15px] font-semibold -mt-0.5">
                      App Store
                    </span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=epic.mychart.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-black text-white font-['Poppins',sans-serif] font-medium text-[14px] pl-4 pr-5 py-3 rounded-xl hover:bg-black/80 transition-colors duration-300"
                >
                  <Download className="w-6 h-6" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] opacity-80">Get it on</span>
                    <span className="text-[15px] font-semibold -mt-0.5">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative w-[220px] md:w-[260px] shrink-0">
              <div className="relative bg-[#00356b] rounded-[2rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#00356b] rounded-b-2xl" />
                <div className="bg-white rounded-[1.4rem] overflow-hidden aspect-[9/16] flex flex-col items-center justify-center px-6 py-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#00356b]/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-[#00356b]" />
                  </div>
                  <p className="font-['Merriweather',serif] font-bold text-[#00356b] text-[18px] mb-1 text-center">
                    MyChart
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[#00356b]/60 text-[11px] text-center">
                    Your health, your way
                  </p>
                  <div className="w-full mt-6 space-y-2">
                    <div className="h-2 bg-[#00356b]/8 rounded-full w-full" />
                    <div className="h-2 bg-[#00356b]/8 rounded-full w-3/4" />
                    <div className="h-2 bg-[#00356b]/8 rounded-full w-5/6" />
                  </div>
                  <div className="w-full mt-5 bg-[#00356b] rounded-full py-2 text-center">
                    <span className="font-['Poppins',sans-serif] text-white text-[11px] font-semibold">
                      Log In
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
