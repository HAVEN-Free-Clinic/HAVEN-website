import { ExternalLink } from "lucide-react";

const LEARN_MORE_URL =
  "https://yale.planyourlegacy.org/donor-edokpolo.php";

export function GoetschEndowmentContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* ── Hero Statement ── */}
        <div className="mb-16 md:mb-20 max-w-[900px]">
          <p className="font-['Poppins',sans-serif] text-black text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed mb-2">
            We are especially fortunate to have the support of the
          </p>
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-snug mb-2">
            John B. Goetsch Endowment for
            <br />
            Medical Education and Service
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed mt-6 mb-8">
            A generous gift from John Allen Jones, the endowment will provide
            support to the clinic for years to come.
          </p>

          <a
            href={LEARN_MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-semibold text-[18px] md:text-[20px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors"
          >
            Learn More
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-16 md:mb-20" />

        {/* ── Biography ── */}
        <div className="max-w-[900px]">
          <div className="mb-8">
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-1">
              John B. Goetsch, M.D.
            </h3>
            <p className="font-['Poppins',sans-serif] text-[#00356b]/60 text-[16px] md:text-[18px]">
              April 30, 1914 – August 8, 1982
            </p>
          </div>

          <div className="space-y-6 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
            <p>
              Dr. Goetsch was born in Chicago and raised in Oak Park, Illinois.
              He graduated from the University of Rochester in 1935 and in 1938
              received his medical degree from the University of Rochester
              School of Medicine. In 1943, at the conclusion of his residency
              training at Strong Memorial Hospital in Rochester, he was drafted
              into the United States Army Medical Corps, where he served as a
              Captain and orthopedic surgeon in the Fortieth General Hospital.
              After staging in England, his unit was the first Hospital Group to
              enter Paris after the Invasion of Normandy, and he remained in the
              Army until 1946.
            </p>

            <p>
              After a fellowship at the Yale University School of Medicine, in
              1948 Dr. Goetsch opened a private practice in New Haven
              specializing in urological surgery that continues to this day as
              The Urology Group PC. Dr. Goetsch was known for his expert
              surgical skills and his warm bedside manner, making him respected
              by his peers and beloved by his patients and the nursing staff. Dr.
              Goetsch married Miriam Finkeldey (Mimi) in 1942, and together they
              raised four sons at their home in Woodbridge, Connecticut, which
              was always open to an extended network of friends and family.
            </p>

            {/* Personal remembrance — styled as a blockquote */}
            <blockquote className="border-l-4 border-[#00356b]/30 pl-6 md:pl-8 py-2 bg-[#f7f9fc] pr-6 md:pr-8">
              <p className="italic mb-4">
                I had the great fortune to be one of those friends. I first met
                Dr. Goetsch in 1952, when as a teenager I moved to Connecticut.
                He offered me more respect and warmth than I had ever before
                encountered. Many evenings at dusk we would sit on his
                porch—in rocking chairs—and talk. I asked the type of
                questions that teenagers ask, and in his quiet, warm way he
                helped me to understand things about growing up and being "me" I
                never before understood. He smoked (didn't all doctors smoke in
                the '50s?) and I will never forget seeing the slow arc of his
                burning cigarette as he rocked back and forth during our evening
                talks. That friendship lasted for 30 years, with so many times
                shared, so many fond memories.
              </p>
            </blockquote>

            <p>
              Dr. Goetsch was a passionate birder and fly fisherman, and in
              August of 1982 he died at the age of 68 while salmon fishing on
              the Restigouche River in New Brunswick, Canada.
            </p>
          </div>

          {/* Attribution */}
          <div className="mt-10 pt-6 border-t border-[#00356b]/10">
            <p className="font-['Poppins',sans-serif] text-[#00356b]/60 text-[14px] md:text-[15px] italic">
              Written by John Allen Jones from material kindly supplied by
              Charles C. Goetsch
            </p>
            <p className="font-['Poppins',sans-serif] text-[#00356b]/60 text-[14px] md:text-[15px] mt-1">
              May 2011
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
