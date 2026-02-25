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
    <div className="border-b border-black">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] pr-4">
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
        <div className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[20px] md:text-[24px] lg:text-[20px] leading-relaxed">
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
          to help protect your health.
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
            We provide up-to-date information on where and how to receive
            COVID-19 and seasonal flu vaccines.
          </li>
        </ul>
        <p className="font-medium">
          If you are interested in receiving a vaccine or have questions about
          which vaccines you may need, please let our clinic staff know.
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
          Center).
        </p>
        <p className="font-medium">Other services we offer:</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Intake evaluations conducted with supervising attendings</li>
          <li>Follow-up appointments for check-ins</li>
          <li>Education on coping skills</li>
          <li>Group sessions for psycho-education</li>
          <li>Mutual support and community building</li>
        </ul>
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
          <li>Fertility and family planning counseling</li>
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
            We do not provide care during pregnancy, but we help connect patients
            to prenatal services.
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
            accurate, timely, and reliable diagnostic testing
          </span>{" "}
          to support high-quality patient care. We help providers diagnose
          conditions, monitor ongoing treatments, and support preventive care.
        </p>
        <p>
          We offer a wide range of{" "}
          <span className="font-medium">
            routine and specialized tests
          </span>
          , with a strong focus on precision, efficiency, and patient comfort.
        </p>
        <p className="font-medium">
          Services include, but are not limited to:
        </p>

        <p className="font-medium">Routine Testing</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Blood work (CBC, CMP, lipid panels, glucose testing)</li>
          <li>Urinalysis</li>
          <li>Pregnancy testing</li>
        </ul>

        <p className="font-medium">
          Preventive &amp; Screening Tests
        </p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Cholesterol and cardiovascular risk screening</li>
          <li>Diabetes screening</li>
          <li>Routine health screenings</li>
        </ul>

        <p className="font-medium">Infectious Disease Testing</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>COVID-19, influenza, and RSV testing</li>
          <li>Strep testing</li>
          <li>STD/STI testing</li>
        </ul>

        <p className="font-medium">Chronic Condition Monitoring</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Diabetes monitoring (A1C)</li>
          <li>Thyroid function tests</li>
          <li>Kidney and liver function tests</li>
        </ul>

        <p className="font-medium">Specialty Testing</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Hormone testing</li>
          <li>Vitamin and mineral levels</li>
          <li>Allergy testing (as available)</li>
        </ul>

        <p className="font-medium">Specimen Collection Services</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Blood draws</li>
          <li>Urine and swab collection</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Infectious Diseases",
    content: (
      <div className="space-y-4 md:space-y-6">
        <p className="font-medium">
          Tuberculosis (TB) Screening &amp; Treatment Services
        </p>
        <p>
          At HAVEN, we screen all patients for tuberculosis (TB) exposure to help
          keep our community healthy.
        </p>

        <p className="font-medium">TB Screening</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>
            All patients complete a brief questionnaire to assess possible TB
            exposure.
          </li>
          <li>
            If your screening suggests prior exposure, we will order a blood test
            (QuantiFERON-TB Gold).
          </li>
          <li>
            If that blood test is positive, we arrange a chest X-ray to make sure
            there is no active TB infection.
          </li>
        </ul>

        <p className="font-medium">TB Treatment</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>
            If you are found to have latent TB (meaning TB bacteria are present
            but not making you sick or contagious), we offer treatment to prevent
            future illness.
          </li>
          <li>
            Treatment consists of four months of daily rifampin, an antibiotic.
          </li>
          <li>
            During treatment, we check in with you about every two weeks to
            monitor symptoms, medication side effects, and overall progress.
          </li>
          <li>Additional lab tests or imaging may be done if needed.</li>
        </ul>

        <p className="font-medium">Important Information for Patients</p>
        <ul className="list-disc pl-8 md:pl-12 space-y-1">
          <li>Latent TB is not contagious.</li>
          <li>
            A positive TB blood test alone does not mean you have active TB.
          </li>
          <li>
            Our TB team focuses specifically on TB care and works alongside your
            primary medical team for other health needs.
          </li>
        </ul>

        <p className="font-medium">
          If you have concerns about TB, past exposure, or need documentation for
          work or school, please let our clinic staff know — we're happy to help.
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
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] shrink-0">
            Patient Care
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[780px]">
            Our clinical teams provide a wide range of primary care services for
            our patients, including: annual physical examinations, screening for
            hypertension, hyperlipidemia, diabetes, HIV, and tuberculosis,
            routine pelvic examinations, urgent primary care and management of
            chronic conditions.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <hr className="w-full border-t border-[#00356b]/10" />
      </div>

      {/* ── Departments ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] mb-6 md:mb-8">
          Departments
        </h3>

        <div>
          {departments.map((dept) => (
            <DepartmentAccordion key={dept.title} dept={dept} />
          ))}
        </div>
      </div>
    </section>
  );
}
