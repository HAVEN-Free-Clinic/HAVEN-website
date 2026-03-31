import { Download, ExternalLink } from "lucide-react";

interface AnnualReport {
  title: string;
  url: string;
}

interface ResearchArticle {
  authors: string;
  title: string;
  url: string;
}

const ANNUAL_REPORTS: AnnualReport[] = [
  {
    title: "HAVEN Annual Report 2024-2025",
    url: "/docs/haven-annual-report-2024-2025.pdf",
  },
  {
    title: "HAVEN Annual Report 2022-2023",
    url: "/docs/haven-annual-report-2022-2023.pdf",
  },
  {
    title: "HAVEN Annual Report 2016-2017",
    url: "/docs/haven-annual-report-2016-2017.pdf",
  },
];

const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    authors: "Scott EA, Swartz MK.",
    title:
      "Interprofessional student experiences on the HAVEN free clinic leadership board.",
    url: "https://www.tandfonline.com/doi/abs/10.3109/13561820.2014.934339?journalCode=ijic20",
  },
  {
    authors:
      "Peluso MJ, Hung A, Lukasiewicz A, Chang H, Ramallo J, Bartlett M, Friedland G, Ellis P.",
    title:
      "Successful Management of Latent Tuberculosis Infection in an Underserved Community by a Student-run Free Clinic.",
    url: "https://muse.jhu.edu/login?auth=0&type=summary&url=/journals/journal_of_health_care_for_the_poor_and_underserved/v025/25.2.peluso.html",
  },
  {
    authors: "Butala NM, Chang H, Horwitz LI, Bartlett M, & Ellis P.",
    title:
      "Improving Quality of Preventive Care at a Student-Run Free Clinic.",
    url: "https://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0081441",
  },
  {
    authors:
      "Butala NM, Murk W, Horwitz LI, Graber LK, Bridger L, Ellis P.",
    title:
      "What is the quality of preventive care provided in a student-run free clinic?",
    url: "https://muse.jhu.edu/journals/journal_of_health_care_for_the_poor_and_underserved/v023/23.1.butala.html",
  },
];

export function MilestonesContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* ── Annual Reports ── */}
          <div className="mb-10 md:mb-14">
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
              Annual Reports
            </h2>

            <div className="space-y-0">
              {ANNUAL_REPORTS.map((report) => (
                <a
                  key={report.url}
                  href={report.url}
                  download
                  className="group flex items-center gap-3 py-3.5 border-b border-[#00356b]/10 hover:bg-[#00356b]/5 px-3 -mx-3 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-[#00356b]/30 group-hover:bg-[#00356b] shrink-0 transition-colors duration-200" />
                  <span className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80 group-hover:text-[#00356b] transition-colors duration-200 flex items-center gap-1.5">
                    {report.title}
                    <Download className="w-3.5 h-3.5 text-[#00356b]/40 group-hover:text-[#00356b] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#00356b]/10 mb-10 md:mb-14" />

          {/* ── Research Articles ── */}
          <div>
            <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
              Research Articles
            </h2>

            <div className="space-y-0">
              {RESEARCH_ARTICLES.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-5 border-b border-[#00356b]/10 hover:bg-[#00356b]/5 px-3 -mx-3 transition-colors duration-200"
                >
                  <p className="font-['Poppins',sans-serif] text-[13px] md:text-[14px] text-black/50 mb-1">
                    {article.authors}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80 group-hover:text-[#00356b] transition-colors duration-200 flex items-start gap-1.5">
                    <span className="italic">{article.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00356b]/40 group-hover:text-[#00356b] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
