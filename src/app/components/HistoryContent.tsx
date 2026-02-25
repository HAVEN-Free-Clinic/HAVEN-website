import Link from "next/link";

/* ─── Timeline Data ─── */

interface TimelineEvent {
  year: string;
  highlights: string[];
}

const TIMELINE: TimelineEvent[] = [
  {
    year: "2004",
    highlights: [
      "A group of Yale health professional students assembled under the shared desire to discuss the need in New Haven for a student-run free clinic",
    ],
  },
  {
    year: "2005",
    highlights: [
      "Relationship begins with Fair Haven Community Health Center",
      "Student leadership board established",
      "First patients seen on November 12, 2005",
    ],
  },
  {
    year: "2006",
    highlights: [
      "Clinic continued community outreach and refined policies & procedures",
    ],
  },
  {
    year: "2007",
    highlights: [
      "Established goals and protocols to maintain a high quality of patient care",
      'Developed the Latent Tuberculosis Initiative and training of "TB Advocates"',
    ],
  },
  {
    year: "2008",
    highlights: [
      "Established financial sustainability through a grant from the Gilead Foundation",
      "Initiated the Women's Group, to provide psychosocial support",
    ],
  },
  {
    year: "2009",
    highlights: [
      'Re-examined HAVEN\'s mission and redefined the clinic as a "portal to care"',
    ],
  },
  {
    year: "2010",
    highlights: [
      "Formalized clinic leadership structure",
      "Establishment of the Jones-HAVEN Fellowship",
      "Began Zumba classes in clinic",
      "Expanded educational opportunities",
    ],
  },
  {
    year: "2011",
    highlights: [
      "Goetsch Endowment established through a gift from John A. Jones",
      "FHCHC-HAVEN 40th/5th Anniversary Celebration",
      "First Board Retreat",
      "Bylaws written",
    ],
  },
  {
    year: "2012",
    highlights: [
      "Crafted a long-term strategic plan",
      "Created the Behavioral Health Program",
      "Presented at IHI's Annual Forum",
      "Published a paper in PLoS ONE on preventive care",
    ],
  },
  {
    year: "2013",
    highlights: [
      "Transitioned to electronic health records",
      "Student Run Free Clinics Conference",
      "Commenced alcohol & tobacco cessation programs",
      "Partnership established with Yale Law",
    ],
  },
  {
    year: "2014",
    highlights: [
      "Began a health insurance screening & enrollment program in partnership with Project Access",
      "Joined the National Association of Free and Charitable Clinics",
    ],
  },
];

export function HistoryContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* ── Our History narrative ── */}
        <div className="mb-16 md:mb-20 max-w-[900px]">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Our History
          </h2>

          <div className="space-y-5 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
            <p>
              In the spring of 2004, a group of Yale health profession students
              assembled to serve the community while utilizing their health care
              skills and knowledge. The resolution of that initial assembly was
              to evaluate the need in New Haven for a student-run free clinic.
            </p>

            <p>The group made two important determinations:</p>

            <ul className="list-disc pl-8 space-y-3">
              <li>
                No stationary free clinic existed at the time. The only
                consistent source of free medical care in New Haven was the
                mobile Yale Community Health Care Van.
              </li>
              <li>
                A growing population of New Haven residents lack access to
                medical care. Although the total number of uninsured people is
                elusive, current health care and census statistics reveal that
                New Haven possesses an excess of risk factors correlating to
                uninsured status.
              </li>
            </ul>

            <p>
              The students began to develop a plan for establishing a sustainable
              student-run free clinic in New Haven. They approached several
              existing local clinics for help in this endeavor, and were very
              excited to establish a partnership with Fair Haven Community Health
              Center (FHCHC).
            </p>

            <p>
              The HAVEN Free Clinic opened its doors on November 12, 2005 with
              generous support from the Yale health professional schools. Since
              opening, we have greatly expanded our services. Now we are proud to
              be largely independently funded by the Gilead Foundation and the{" "}
              <Link
                href="/about/endowment"
                className="text-[#00356b] underline font-semibold hover:opacity-80 transition-opacity"
              >
                John B. Goetsch Endowment for Medical Education and Service
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-16 md:mb-20" />

        {/* ── Timeline ── */}
        <div>
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10 md:mb-14">
            Timeline
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-[3px] bg-[#00356b]/15 rounded-full" />

            <div className="flex flex-col gap-10 md:gap-12">
              {TIMELINE.map((event) => (
                <div key={event.year} className="relative flex gap-5 md:gap-8">
                  {/* Year badge */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-[80px] md:w-[96px] h-[80px] md:h-[96px] rounded-full bg-[#00356b] flex items-center justify-center shadow-lg">
                      <span className="font-['Poppins',sans-serif] font-bold text-white text-[18px] md:text-[22px]">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4 flex-1 min-w-0">
                    {event.highlights.length === 1 ? (
                      <p className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed">
                        {event.highlights[0]}
                      </p>
                    ) : (
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#00356b]/40 shrink-0 mt-2.5" />
                            <span className="font-['Poppins',sans-serif] text-black text-[16px] md:text-[18px] leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
