"use client";

import { Heart, Droplet, Smile, Apple } from "lucide-react";

/* ─── Why It Matters data ─── */

const reasons = [
  {
    icon: Heart,
    title: "Heart disease",
    text: "Bacteria from gum disease can enter the bloodstream and contribute to inflammation, increasing the risk of heart attack and stroke.",
  },
  {
    icon: Droplet,
    title: "Diabetes complications",
    text: "Gum disease can make blood sugar harder to control, and uncontrolled diabetes in turn worsens oral health — a cycle that makes managing both conditions more difficult.",
  },
  {
    icon: Smile,
    title: "Mental health & quality of life",
    text: "Dental pain, tooth loss, and concerns about appearance can affect confidence, social wellbeing, and mental health in ways that are often underestimated.",
  },
  {
    icon: Apple,
    title: "Nutrition & chronic disease",
    text: "Difficulty chewing due to dental pain or missing teeth can limit diet and nutrition, compounding the management of conditions like hypertension and diabetes.",
  },
];

/* ─── Main component ─── */

export function DentalContent() {
  return (
    <section className="bg-white w-full">
      {/* ── Our Role ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            Our Role in Your Dental Care
          </h3>
          <div className="space-y-4 md:space-y-5 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            <p>
              HAVEN Free Clinic does not provide direct dental services. However,
              we believe oral health is a vital part of your overall wellbeing,
              and we don&apos;t want it to be a gap in your care.
            </p>
            <p>
              Through our care coordination services, we can connect you, at no
              cost, with dental resources in our community. Whether you need a
              routine cleaning, a filling, or more urgent dental attention, our
              team will help identify options that are accessible and affordable
              for you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── Why Dental Care Matters ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 md:mb-6">
            Why Dental Care Matters
          </h3>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 max-w-[760px]">
            Oral health is about far more than your teeth. Untreated dental
            problems can have serious consequences for your overall health and
            quality of life:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-[#f7f9fc] border border-[#00356b]/10 px-6 py-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-[#00356b]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <reason.icon className="w-5 h-5 text-[#00356b]" />
                </div>
                <div>
                  <h4 className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[18px] mb-1.5">
                    {reason.title}
                  </h4>
                  <p className="font-['Poppins',sans-serif] text-black/70 text-[14px] md:text-[15px] leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[16px] md:text-[18px] mt-8 text-center">
            Dental care is an essential part of your health.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── A Note on Wait Times ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            A Note on Wait Times
          </h3>
          <div className="space-y-4 md:space-y-5 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            <p>
              We want to be transparent with you: dental resources in our
              community are in high demand, and wait times can be significant. We
              know this is frustrating, especially when you are in pain or
              discomfort.
            </p>
            <p>
              We encourage you to reach out to us as early as possible so we can
              begin the coordination process. If you are experiencing acute
              dental pain, please let your care team know — we will do our best to
              prioritize urgent situations.
            </p>
          </div>
          <div className="bg-[#00356b]/5 border-l-4 border-[#00356b] px-5 py-4 mt-5">
            <p className="font-['Poppins',sans-serif] text-black text-[15px] md:text-[17px] leading-relaxed">
              You can also connect with Cornell Scott directly at{" "}
              <a
                href="tel:2035033000"
                className="text-[#00356b] font-semibold underline hover:text-[#00356b]/70 transition-colors"
              >
                (203) 503-3000
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-px bg-[#00356b]/10" />
        </div>
      </div>

      {/* ── What to Expect ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-6 md:mb-8">
            What to Expect at Community Dental Providers
          </h3>
          <div className="space-y-4 md:space-y-5 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            <p>
              Most community dental clinics and safety-net dental providers
              operate on a <span className="font-semibold">sliding scale fee
              model</span>. This means the cost of your care is adjusted based on
              your income, so you only pay what you can afford. For many patients,
              this results in significantly reduced or even no-cost services.
            </p>
            <p>
              When we connect you with a community dental provider, we will help
              you understand:
            </p>
            <ul className="list-disc pl-8 md:pl-12 space-y-2">
              <li>What documents to bring (such as proof of income)</li>
              <li>What services are typically covered or discounted</li>
              <li>What to expect at your first appointment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
