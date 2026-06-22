"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Accordion helper ─── */

interface DepartmentData {
  title: string;
  content: React.ReactNode;
}

function DepartmentAccordion({ dept }: { dept: DepartmentData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#00356b]/20">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-['Poppins',sans-serif] font-normal text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
          {dept.title}
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
          {dept.content}
        </div>
      </div>
    </div>
  );
}

/* ─── Department content ─── */

const departments: DepartmentData[] = [
  {
    title: "Primary Care",
    content: (
      <div className="space-y-4 md:space-y-6">
        <p>
          Our Primary Care Department is dedicated to providing comprehensive,
          patient-centered care for individuals. We address everyday health needs,
          including{" "}
          <span className="font-medium">
            prevention, early detection, and long-term health
          </span>{" "}
          management.
        </p>
        <p className="font-medium">
          The services we offer include, but are not limited to:
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Routine checkups</li>
          <li>Preventive screenings</li>
          <li>Chronic condition management</li>
          <li>Acute illness care</li>
          <li>Tailored health guidance</li>
        </ul>
        <p>
          Whether you're coming in for an annual physical, managing an ongoing
          condition, or addressing a new health concern,{" "}
          <span className="font-medium">
            our primary care team is here to be your first point of contact and
            trusted health advocate.
          </span>
        </p>
      </div>
    ),
  },
  {
    title: "Vaccines",
    content: (
      <div className="space-y-4 md:space-y-6">
        <p>
          We offer{" "}
          <span className="font-medium">
            several routine and preventive vaccines in clinic
          </span>{" "}
          to help protect your health.{" "}
          <span className="font-medium">
            Vaccine availability varies — please ask your provider about what is
            currently in stock.
          </span>
        </p>
        <p className="font-medium">Vaccines Available at HAVEN</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Shingles (Shingrix)</li>
          <li>HPV (Gardasil)</li>
          <li>Hepatitis B (Heplisav-B)</li>
          <li>Tetanus, diphtheria, and pertussis (Tdap / Boostrix)</li>
          <li>Pneumococcal (PCV)</li>
          <li>Hepatitis A &amp; B (Twinrix)</li>
        </ul>
        <p className="font-medium">COVID-19 &amp; Flu Vaccines</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>
            We do not always carry COVID-19 and flu vaccines in clinic. Visit{" "}
            <a
              href="https://www.vaccines.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#00356b]/70 transition-colors"
            >
              vaccines.gov
            </a>{" "}
            to find locations near you offering these vaccines.
          </li>
        </ul>
        <p className="font-medium">
          If you are interested in receiving a vaccine or have questions about
          which vaccines you may need, please ask your provider.
        </p>
      </div>
    ),
  },
  {
    title: "Behavioral Health",
    content: (
      <div className="space-y-4 md:space-y-6">
        <p>
          Behavioral Health focuses on principles of{" "}
          <span className="font-medium">psycho-education</span> and knowledge.{" "}
          <span className="font-medium">
            Our department does not provide treatment
          </span>{" "}
          to patients. However,{" "}
          <span className="font-medium">
            we can refer patients to partner clinics
          </span>{" "}
          in the community (Hispanic Clinic and Connecticut Mental Health
          Center) to connect them with long-term mental health services.
        </p>
        <p>
          <span className="font-medium">BHD group meets the first Saturday of each month.</span>
        </p>
        <p className="font-medium">Other services we offer:</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Intake evaluations conducted with supervising attendings</li>
          <li>Follow-up appointments for check-ins</li>
          <li>Education on coping skills</li>
          <li>Group sessions for psycho-education</li>
          <li>Mutual support and community building</li>
        </ul>
        <div className="bg-[#fef7ed] border border-amber-200 p-4 md:p-5">
          <p className="font-medium text-amber-800">
            If you are experiencing a mental health emergency, please call{" "}
            <a href="tel:988" className="underline font-bold">988</a>{" "}
            (Suicide &amp; Crisis Lifeline). Our department is not equipped to
            handle emergency situations.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Sexual and Reproductive Health",
    content: (
      <div className="space-y-4 md:space-y-6">
        <p className="font-medium">
          Reproductive &amp; Sexual Health Services
        </p>
        <p>
          We provide routine and problem-focused reproductive and sexual health
          care for patients of all genders and anatomies. Our goal is to support
          your health, comfort, and choices in a respectful and inclusive
          environment.
        </p>

        <p className="font-medium">Routine Care</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Annual well-visits</li>
          <li>Pap smears and breast exams</li>
          <li>Referrals for mammograms</li>
          <li>Sexual health counseling and testing</li>
        </ul>

        <p className="font-medium">Care for Specific Concerns</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Menstrual concerns (irregular, heavy, or painful periods)</li>
          <li>Pelvic, breast, or genital pain</li>
          <li>Vaginal discharge or urinary/genital discomfort</li>
          <li>Menopause counseling and treatment</li>
          <li>Family planning counseling</li>
          <li>
            Sexually transmitted infection (STI) testing and counseling
          </li>
          <li>
            Support and care related to intimate partner violence (IPV)
          </li>
        </ul>

        <p className="font-medium">Gender-Affirming Care</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Masculinizing or feminizing hormone therapy</li>
          <li>Referrals for gender-affirming surgeries</li>
        </ul>

        <p className="font-medium">
          Contraception &amp; HIV Prevention
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>
            Birth control counseling and prescriptions (pill, injection, IUD,
            implant)
          </li>
          <li>HIV Pre-Exposure Prophylaxis (PrEP)</li>
        </ul>

        <p className="font-medium">
          Pregnancy Testing &amp; Referrals
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Pregnancy testing</li>
          <li>Referral to trusted partner clinics for prenatal care</li>
        </ul>

        <p className="font-medium">Important Information</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>We welcome patients of all gender identities.</li>
          <li>
            We do not see patients who are pregnant, but we can help connect you
            to prenatal care services.
          </li>
          <li>
            We do not provide infertility counseling.
          </li>
          <li>
            Care is available regardless of immigration or legal status, and many
            services are covered through Connecticut HUSKY or Free Care programs.
          </li>
          <li>
            We work closely with other clinic teams to ensure you receive the
            right care and referrals when needed.
          </li>
        </ul>

        <p className="font-medium">
          If you have questions about reproductive or sexual health, need
          counseling, or want to schedule a visit, please let our clinic staff
          know — we're here to help.
        </p>
      </div>
    ),
  },
  {
    title: "Laboratory",
    content: (
      <div className="space-y-4 md:space-y-6">
        <p>
          Our Lab Services department provides{" "}
          <span className="font-medium">
            diagnostic testing
          </span>{" "}
          to support patient care — including routine blood work, screenings,
          infectious disease testing, chronic condition monitoring, and specimen
          collection.
        </p>
        <p>
          Your provider will let you know if any lab work is needed. Most labs
          are completed{" "}
          <span className="font-medium">during the week, not on Saturdays.</span>
        </p>
        <div className="bg-[#f7f9fc] border border-[#00356b]/10 p-4 md:p-5">
          <p className="font-medium text-[#00356b]">
            Walk-In Lab Hours
          </p>
          <p>
            800 Howard Ave, 2nd Floor<br />
            Monday – Friday, 7:30 AM – 5:00 PM
          </p>
          <p className="text-black/60 text-[14px] mt-2">
            No appointment needed — just bring your lab order from your provider.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Infectious & Chronic Disease Department (ICDD)",
    content: (
      <div className="space-y-4 md:space-y-6">
        <p>
          The Infectious and Chronic Disease Department (ICDD), formerly the
          Latent Tuberculosis Initiative (LTBI), oversees care for conditions
          that benefit from continuity and long-term follow-up. We help our
          team get to know you over multiple visits, so your care plan can grow
          with you.
        </p>

        <p className="font-medium">Conditions We Manage</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Latent tuberculosis (TB) infection screening and treatment</li>
          <li>Chronic hypertension management</li>
          <li>H. pylori treatment</li>
        </ul>

        <p className="font-medium">What to Expect at an ICDD Visit</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>In-depth health education and counseling</li>
          <li>Focused physical assessments and review of any new concerns</li>
          <li>Checks for medication side effects and support for treatment adherence</li>
          <li>A care plan finalized together with a HAVEN attending physician</li>
        </ul>

        <p>
          ICDD also collaborates with other HAVEN departments to screen all
          patients for tuberculosis risk factors and collect labs as needed.
        </p>
      </div>
    ),
  },
];

/* ─── Main component ─── */

export function PatientCareContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Intro Block ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            HAVEN Free Clinic is a student-run free clinic dedicated to providing
            compassionate, accessible healthcare to uninsured community members.
            Because our clinic is student-run, our services are delivered under
            physician supervision and are intentionally focused on conditions our
            team is equipped to manage safely and effectively.
          </p>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Our broader mission goes beyond treating illness. We are here to help
            every patient navigate the healthcare system and find a path to
            permanent, sustainable care.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Scope of Care ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Scope of Care
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Conditions We Treat */}
            <div className="bg-[#f7f9fc] border border-[#00356b]/10 px-6 md:px-8 py-6 md:py-8">
              <h4 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[20px] mb-4">
                Services We Provide
              </h4>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[15px] md:text-[16px] leading-relaxed mb-4">
                We provide primary care for a range of common and chronic
                conditions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 md:pl-7 space-y-1.5 font-['Poppins',sans-serif] text-black text-[15px] md:text-[16px] leading-relaxed">
                <li>Hypertension (high blood pressure)</li>
                <li>High cholesterol</li>
                <li>Non-insulin-dependent (Type 2) diabetes</li>
                <li>Asthma and other stable respiratory conditions</li>
                <li>Common infections and acute illnesses</li>
                <li>Preventive care and health screenings</li>
                <li>Medication management for stable chronic conditions</li>
                <li>Health education and counseling</li>
              </ul>
            </div>

            {/* Conditions We Are Unable to Treat */}
            <div className="bg-[#fef7ed] border border-amber-200 px-6 md:px-8 py-6 md:py-8">
              <h4 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[20px] mb-4">
                Conditions We Are Unable to Treat
              </h4>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[15px] md:text-[16px] leading-relaxed mb-4">
                As a student-run clinic, some conditions fall outside our scope.
                Patients with the following will be referred to a more
                appropriate provider or specialist:
              </p>
              <ul className="space-y-3 font-['Poppins',sans-serif] text-black text-[15px] md:text-[16px] leading-relaxed">
                <li>
                  <span className="font-semibold">Insulin-dependent diabetes</span> —
                  requires specialist oversight beyond our current capacity.
                </li>
                <li>
                  <span className="font-semibold">Active cancer</span> — requires
                  oncology care that we are not able to provide.
                </li>
                <li>
                  <span className="font-semibold">Pregnancy</span> — prenatal and
                  obstetric care requires specialized providers; we will help you
                  locate appropriate OB/GYN or midwifery services.
                </li>
                <li>
                  <span className="font-semibold">Other complex medical conditions</span> —
                  needs that require specialty management.
                </li>
              </ul>
              <p className="font-['Poppins',sans-serif] text-black/75 text-[14px] md:text-[15px] leading-relaxed mt-4 pt-4 border-t border-amber-200">
                Being referred out of HAVEN does not mean you are on your own. Our
                team will work with you to ensure a warm handoff to the right
                provider.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Departments ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
        <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
          Departments
        </h3>

        <div>
          {departments.map((dept) => (
            <DepartmentAccordion key={dept.title} dept={dept} />
          ))}
        </div>
        
        </div>
      </div>
    </section>
  );
}
