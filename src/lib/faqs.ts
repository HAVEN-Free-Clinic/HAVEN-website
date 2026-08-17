/*
 * Plain-text mirror of the FAQ accordion in components/FAQsContent.tsx.
 *
 * Why a second copy: the on-page answers are JSX (they contain links, lists and
 * <BrandText>), and schema.org acceptedAnswer.text needs a plain string. Rather
 * than stripping tags at runtime, the prose is restated here.
 *
 * KEEP IN SYNC. When you add, remove or reword a question in FAQsContent.tsx,
 * update it here too — otherwise Google is shown an answer the visitor is not.
 * Only questions that answer well without a link belong here; a stub answer
 * that says "see our other page" is worse than omitting the entry entirely.
 */

export interface FaqEntry {
  question: string;
  answer: string;
}

export const FAQ_ENTRIES: FaqEntry[] = [
  {
    question: "Who is eligible to be seen at the clinic?",
    answer:
      "To be eligible for care at HAVEN Free Clinic you must reside in the Greater New Haven area, be between 18 and 65 years old, have no active medical insurance, and not currently have a primary care provider. Eligible townships include Bethany, Branford, East Haven, Guilford, Hamden, Madison, Meriden, Milford, New Haven, North Branford, North Haven, Orange, Wallingford, West Haven and Woodbridge. Additional criteria may apply and are assessed prior to acceptance.",
  },
  {
    question: "How do I make an appointment?",
    answer:
      "Call (203) 200-0673 and leave your name and phone number. Someone will return your call within 24 hours. Both English and Spanish speakers are available.",
  },
  {
    question: "What happens if I miss or need to cancel an appointment?",
    answer:
      "If you cannot make an appointment, let us know as soon as possible by sending a Care Message through the MyChart patient portal or by calling (203) 200-0673, so we can offer your slot to another patient. A no-show is a missed appointment without prior notice. If you no-show three or more consecutive appointments, we will be unable to reschedule future appointments.",
  },
  {
    question: "Do you take walk-ins?",
    answer:
      "We offer both scheduled appointments and limited walk-in availability. Scheduled patients are always seen first. Walk-ins are welcome on a first come, first served basis but are only accepted until 10:30 AM, after which we cannot guarantee availability for that day. To secure your spot and reduce wait times, call (203) 200-0673 to schedule in advance.",
  },
  {
    question: "When is the clinic open?",
    answer: "Saturdays, 8:30 AM to 12:00 PM.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "HAVEN Free Clinic is at 800 Howard Avenue, New Haven, CT 06519, in the Yale Physicians Building. Free parking is available in the Howard Avenue Garage, to the left of the building.",
  },
  {
    question: "Do I have to pay for anything?",
    answer:
      "Visits at HAVEN are always free. Some patients also qualify for free specialty referrals through our free care partnerships, though these depend on eligibility and availability. For medications, HAVEN has a cost-sharing policy: patients cover medications priced under $25, while medications at or above $25 are provided at no cost. No patient is ever denied a medication due to inability to pay, and waivers are available for financial hardship.",
  },
  {
    question: "What should I bring to my visit?",
    answer:
      "For your first visit, bring all current medications including prescriptions, herbs, vitamins and supplements; any medical records or history you have available; and, if you were referred from the Emergency Room, your discharge instructions.",
  },
  {
    question: "How long should I expect my visit to take?",
    answer:
      "Visit length depends on your medical needs and patient volume. Your first visit may take several hours, especially if it has been a long time since you last saw a primary care physician. Follow-up visits are typically shorter.",
  },
  {
    question: "What types of medical conditions can you treat?",
    answer:
      "As a student-run clinic, our care is delivered under physician supervision and focused on conditions we can manage safely. We provide primary care for common and chronic conditions including hypertension, high cholesterol, non-insulin-dependent (Type 2) diabetes, asthma and other stable respiratory conditions, common infections and acute illnesses, preventive care and screenings, and medication management for stable chronic conditions. Some conditions fall outside our scope, including insulin-dependent diabetes, active cancer and pregnancy. We do not provide pediatric or HIV/AIDS care. If your needs fall outside what we can treat, we will work with you on a warm handoff to the right provider.",
  },
  {
    question: "What is the Compass Program?",
    answer:
      "The Compass Program is HAVEN's signature 3-to-5-year care navigation program. Beyond managing your health today, we work with you to understand your conditions, connect you with community resources and specialists, and build a roadmap toward permanent healthcare coverage and a long-term primary care provider.",
  },
  {
    question: "What if I don't speak English?",
    answer:
      "Spanish interpreters are available every Saturday. If you are most comfortable in a language other than Spanish, let us know when scheduling so we can work with you to find an interpreter.",
  },
  {
    question: "Who runs the clinic?",
    answer:
      "HAVEN Free Clinic is run by students from the Yale School of Medicine, Yale School of Nursing, Yale School of Public Health, and the Yale Physician Associate Program, in collaboration with Yale Medicine.",
  },
];
