/*
 * Every department that makes a HAVEN clinic day happen.
 *
 * Source: "HAVEN Department Descriptions 2025-2026", rewritten for a public
 * audience. The internal document is a recruitment packet and is organised by
 * what a volunteer would do; this list is organised by what a patient receives,
 * because the ancillary departments were invisible on the site and the clinic
 * kept getting described as though Primary Care were the whole of it.
 *
 * `href` points at the department's own page where one exists. Departments
 * without a page are documented in full on /about/operations.
 * `slug` becomes the anchor id, so /about/operations#mlp resolves.
 */

export interface Department {
  slug: string;
  name: string;
  /** Internal shorthand, shown in small type. Omit where there isn't one. */
  code?: string;
  /** One sentence: what this department is for. */
  role: string;
  /** What it actually does, in two or three sentences. */
  detail: string;
  /** Dedicated page, if the department has one. */
  href?: string;
}

export interface DepartmentGroup {
  id: string;
  title: string;
  blurb: string;
  departments: Department[];
}

export const DEPARTMENT_GROUPS: DepartmentGroup[] = [
  {
    id: "clinical",
    title: "Clinical Care",
    blurb:
      "The departments that see you in an exam room. Every encounter is supervised by a licensed attending physician or nurse.",
    departments: [
      {
        slug: "primary-care",
        name: "Primary Care",
        role: "Where most patients start and where most care happens.",
        detail:
          "Clinical teams pair a senior student, who takes your history, examines you, and builds a treatment plan with the attending, and a junior student, who takes your vitals and coordinates the rest of your visit. A separate longitudinal track follows medically complex patients with the same team across many visits.",
        href: "/services/patient-care",
      },
      {
        slug: "reproductive-health",
        name: "Reproductive Health",
        code: "RHD",
        role: "Sexual and reproductive health for patients of all genders.",
        detail:
          "Pap smears, breast exams, STI testing, contraception counseling and prescriptions including IUDs and implants, gender-affirming hormone therapy, menopause care, and referrals for mammograms and specialist gynecologic care. A care coordination team handles appointment reminders, results, and the logistics behind every procedure.",
        href: "/services/patient-care",
      },
      {
        slug: "icdd",
        name: "Infectious and Chronic Disease Department",
        code: "ICDD",
        role: "Conditions that need continuity and long-term follow-up.",
        detail:
          "Formerly the Latent Tuberculosis Initiative. ICDD manages latent TB screening and treatment, chronic hypertension, and H. pylori treatment, with the same volunteers seeing the same patients over months. It also screens HAVEN patients across all departments for TB risk.",
        href: "/services/patient-care",
      },
      {
        slug: "specialty-clinics",
        name: "Specialty Clinics",
        role: "Specialty care brought inside the clinic.",
        detail:
          "HAVEN launched its first specialty clinic, Dermatology, in 2025, followed by Nephrology and Neurology. These clinics let patients see a specialist without the cost and wait that usually stand in the way. They are held on select clinic days alongside primary care.",
        href: "/services/referrals",
      },
      {
        slug: "lab",
        name: "Laboratory",
        role: "On-site specimen collection and diagnostic testing.",
        detail:
          "HAVEN runs a functioning laboratory in clinic. Volunteers draw blood, collect specimens, and package them for processing at the YNHH lab. Every volunteer is trained in venipuncture by a phlebotomist and evaluated before working with patients.",
        href: "/services/patient-care",
      },
      {
        slug: "vaccines",
        name: "Vaccines",
        role: "Routine and preventive immunizations for established patients.",
        detail:
          "Vaccines are administered by licensed clinicians during your visit, who confirm each vaccine is right for you and answer questions as they go. A coordinator handles the documentation, state compliance, and scheduling the follow-up doses of any vaccine series. Vaccines are part of ongoing care at HAVEN rather than a standalone service, and availability varies.",
        href: "/services/patient-care",
      },
    ],
  },
  {
    id: "coordination",
    title: "Coordination and Navigation",
    blurb:
      "The departments that keep your care moving between Saturdays, and that get you to care we cannot provide ourselves.",
    departments: [
      {
        slug: "patient-navigation",
        name: "Care Coordination: Patient Navigation",
        code: "LCC",
        role: "One person who stays with you across your whole time at HAVEN.",
        detail:
          "Navigators work with a small panel of patients longitudinally, identifying what stands between you and your care and then doing something about it. Most of the work happens outside clinic hours: calls during the week, liaising with other departments and outside providers, coordinating specialist appointments, and accompanying patients to visits.",
        href: "/services/patient-navigation",
      },
      {
        slug: "transfer-of-care",
        name: "Care Coordination: Transfer of Care",
        role: "The warm handoff when you are ready to leave HAVEN.",
        detail:
          "Transfer of Care volunteers walk patients through moving to a permanent primary care provider: discussing the process, calling outside clinics to establish appointments, and coordinating with every HAVEN department involved in your care so nothing is dropped in the transition. This is the closing stage of the Compass Program.",
        href: "/services/compass",
      },
      {
        slug: "referrals",
        name: "Referrals",
        role: "Getting you in to specialty care you could not otherwise afford.",
        detail:
          "Referrals volunteers connect patients to radiology, gastroenterology, cardiology, and other specialties, coordinating between outside offices, patients, and HAVEN providers. They work with the YNHH Free Care office so a referral is something you can actually afford to follow through on, and they follow up so patients are not lost between appointments.",
        href: "/services/referrals",
      },
      {
        slug: "patient-services",
        name: "Patient Services",
        code: "PS",
        role: "Every conversation between the clinic and its patients.",
        detail:
          "Patient Services registers new patients, collects intake information, explains what HAVEN offers, manages appointments and the triage line, and makes patient phone calls throughout the week. If you have called the clinic or been called by it, you have spoken to Patient Services.",
      },
      {
        slug: "interpreting",
        name: "Interpreting",
        role: "Care in the language you actually speak.",
        detail:
          "Around 85% of HAVEN patients speak primarily Spanish, and the clinic could not function without interpreters. One interpreter is assigned to each clinical team and stays with the patient through the whole visit, with additional interpreters assigned to Education, Social Services, Referrals, Reproductive Health, Behavioral Health, and the Lab wherever possible.",
      },
    ],
  },
  {
    id: "support",
    title: "Access and Advocacy",
    blurb:
      "The departments that address everything outside the exam room that determines whether care actually works: cost, medication, food, legal trouble, and mental health.",
    departments: [
      {
        slug: "mdic",
        name: "Medical Debt and Insurance Counseling",
        code: "MDIC",
        role: "Making sure care does not leave you in debt.",
        detail:
          "MDIC completes and files HUSKY and YNHH Free Care applications with patients, reviews bills, and acts as the liaison between Yale healthcare facilities, debt collection agencies, and HAVEN's Medical-Legal Partnership. The goal is both preventing new medical debt and clearing debt patients already carry.",
        href: "/services/debt-insurance",
      },
      {
        slug: "mlp",
        name: "Medical-Legal Partnership",
        code: "MLP",
        role: "Free civil legal help for problems that are making patients sick.",
        detail:
          "Run with the Solomon Center for Health Law and Policy at Yale Law School, the MLP takes referrals from HAVEN clinicians and social services for legal problems with health consequences: unsafe housing and eviction, wrongly denied public benefits, insurance denials and appeals, protective orders and family safety matters, and certain immigration and employment matters. Patients are referred through their care team rather than applying directly, and there is no cost.",
      },
      {
        slug: "social-services",
        name: "Social Services",
        code: "SOSE",
        role: "Screening for social needs and connecting patients to resources.",
        detail:
          "Social Services screens every patient for food and housing insecurity, utility hardship, transportation barriers, immigration concerns, and safety, then builds a plan to access food assistance, energy assistance, English classes, and other programs. It works closely with MDIC and the MLP, and runs small-group community outreach projects.",
        href: "/services/social-services",
      },
      {
        slug: "behavioral-health",
        name: "Behavioral Health",
        code: "BHD",
        role: "Mental health education, screening, and warm referrals.",
        detail:
          "BHD is an educational program, not a psychiatric service. Volunteers, trained and supervised by clinical psychologists and psychiatrists, help patients understand emotional wellbeing as part of overall health, recognize signs of distress, and connect with community providers for ongoing treatment. It also co-leads monthly group education sessions.",
        href: "/services/behavioral-health",
      },
      {
        slug: "education",
        name: "Education",
        role: "One-on-one health and wellness counseling.",
        detail:
          "The Education department sits with patients individually to build plans around chronic conditions like diabetes, hypertension, and high cholesterol, using motivational interviewing. It also creates patient education materials and helps patients with the financial side of maintaining a healthy diet.",
        href: "/services/education",
      },
      {
        slug: "pharmacy",
        name: "Pharmacy",
        role: "Finding a way for every prescription to actually get filled.",
        detail:
          "Pharmacy locates affordable options for every medication HAVEN prescribes, dispenses on-site medications and supplies, manages inventory and donated shipments, and delivers medications to patients at home where needed. It also runs the clinic's patient assistance and low-cost mail-order programs.",
        href: "/services/medication",
      },
      {
        slug: "food-pharmacy",
        name: "Food Pharmacy",
        role: "Groceries and nutrition support as part of a clinic visit.",
        detail:
          "Started in 2023 with the Yale School of Medicine, the Food Pharmacy supplies healthy groceries and nutritional education to patients experiencing food insecurity, immediately after their clinic visit. It is paired with a study investigating whether food access slows the progression of chronic disease.",
      },
      {
        slug: "oral-health",
        name: "Oral Health Initiative",
        code: "OHI",
        role: "Closing the gap between medical and dental care.",
        detail:
          "Dental and medical care are split apart by insurance and by the way the system is built, and patients fall through the middle. OHI triages oral health concerns, then coordinates with scheduling, referrals, and MDIC to book patients with community dental providers and confirm the appointments actually happen. HAVEN does not perform dental treatment itself.",
        href: "/services/dental",
      },
    ],
  },
  {
    id: "operations",
    title: "Running the Clinic",
    blurb:
      "The departments patients rarely meet, without which there would be no clinic to visit.",
    departments: [
      {
        slug: "qaqi",
        name: "Quality Assurance and Quality Improvement",
        code: "QA/QI",
        role: "Measuring whether the clinic is actually working, and fixing it when it is not.",
        detail:
          "QA/QI runs project-based improvements and research on clinic processes and outcomes: evaluating new disease management programs, streamlining patient intake, analyzing clinical results. It works across every other department, and its data increasingly drives how the clinic makes decisions.",
      },
      {
        slug: "finance",
        name: "Finance and Development",
        role: "Paying for free care.",
        detail:
          "HAVEN never bills a patient for a visit, and donations pay for the medications, lab tests, and specialist care that follow. Finance and Development runs the annual ANDA 5K, the alumni Appeal, grant applications, and donor relationships, and works with student leaders to align the budget with what the clinic is trying to do.",
        href: "/get-involved",
      },
      {
        slug: "student-relations",
        name: "Student Relations",
        role: "Recruiting, placing, and supporting the volunteer body.",
        detail:
          "Student Relations runs recruitment each term, reviews every application, matches volunteers to departments based on skills and clinic need, and coordinates training and onboarding. It is also the first point of contact for general volunteer questions.",
        href: "/get-involved",
      },
      {
        slug: "it-communications",
        name: "IT and Communications",
        role: "The systems the clinic runs on, and how it tells its story.",
        detail:
          "IT and Communications maintains this website, the volunteer portal, and the scheduling and recruitment platforms, and produces the clinic newsletter and outreach materials. Its work is aimed at the same two audiences as everything else: patients and the volunteers who serve them.",
        href: "/about/newsletter",
      },
    ],
  },
];

/** Every department, flattened. */
export const ALL_DEPARTMENTS: Department[] = DEPARTMENT_GROUPS.flatMap(
  (g) => g.departments
);
