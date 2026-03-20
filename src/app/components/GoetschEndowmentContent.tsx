import { ExternalLink } from "lucide-react";

const LEARN_MORE_URL =
  "https://yale.planyourlegacy.org/donor-edokpolo.php";

export function GoetschEndowmentContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        
        {/* ✅ NEW centered content wrapper */}
        <div className="max-w-4xl mx-auto">

          {/* ── Hero Statement ── */}
          <div className="mb-16 md:mb-20">
            <p className="font-['Poppins',sans-serif] text-black text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed mb-2">
              We are especially fortunate to have the support of the
            </p>

            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-snug mb-2">
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
          <div>
            <div className="mb-8">
              <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-1">
                John B. Goetsch, M.D.
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#00356b]/60 text-[16px] md:text-[18px]">
                April 30, 1914 – August 8, 1982
              </p>
            </div>

            <div className="space-y-6 font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed">
              <p>
                Dr. Goetsch was born in Chicago and raised in Oak Park, Illinois...
              </p>

              <p>
                After a fellowship at the Yale University School of Medicine...
              </p>

              <blockquote className="border-l-4 border-[#00356b]/30 pl-6 md:pl-8 py-2 bg-[#f7f9fc] pr-6 md:pr-8">
                <p className="italic mb-4">
                  I had the great fortune to be one of those friends...
                </p>
              </blockquote>

              <p>
                Dr. Goetsch was a passionate birder and fly fisherman...
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

        </div> {/* ✅ END centered wrapper */}

      </div>
    </section>
  );
}