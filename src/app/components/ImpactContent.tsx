import { ExternalLink, Newspaper, BookOpen, FileText, FlaskConical } from "lucide-react";

interface NewsItem {
  season: string;
  title: string;
  url: string;
}

interface AnnualReport {
  title: string;
  url: string;
}

interface ResearchArticle {
  authors: string;
  title: string;
  url: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    season: "2023 Fall",
    title: "HAVEN Free Clinic 5K Exceeds Fundraising Goal!",
    url: "https://medicine.yale.edu/news-article/haven-free-clinic-5k-exceeds-fundraising-goal/",
  },
  {
    season: "2017 Fall",
    title: "ANDA 5K raises $27,000 for HAVEN Free Clinic",
    url: "http://medicine.yale.edu/news/article.aspx?id=15944",
  },
  {
    season: "2014 Summer",
    title:
      "Yale med students, volunteers commit to caring at Haven Free Clinic",
    url: "http://www.nhregister.com/general-news/20140706/yale-med-students-volunteers-commit-to-caring-at-haven-free-clinic",
  },
  {
    season: "2013 Spring",
    title:
      "Student-run clinic provides free mental health services to local immigrant community",
    url: "http://medicine.yale.edu/news/article.aspx?id=5280",
  },
  {
    season: "2013 Winter",
    title: "HAVEN Free Clinic serves uninsured",
    url: "http://yaledailynews.com/blog/2013/12/03/clinic-serves-uninsured/",
  },
  {
    season: "2013 Fall",
    title: "HAVEN wins Primary Care Leadership Award",
    url: "http://www.examiner.com/article/howard-dean-headlines-primary-care-summit-on-how-to-best-manage-aca-changes",
  },
  {
    season: "2013 Fall",
    title:
      "HAVEN featured in the Yale University Honor Roll of Alumni Donors 2012-2013",
    url: "http://medicine.yale.edu/alumni/giving/honorroll.aspx",
  },
  {
    season: "2012 Spring",
    title: "Student-run clinic grades its own performance",
    url: "http://yalemedicine.yale.edu/spring2012/people/students/124550",
  },
  {
    season: "2012 Winter",
    title: "After five years, HAVEN clinic still thriving",
    url: "http://yalemedicine.yale.edu/winter2012/people/students/114543",
  },
  {
    season: "2012 Winter",
    title: "Free Clinic: A Look at Fair Haven's HAVEN Free Clinic",
    url: "http://yaleherald.com/features/free-clinic-a-look-at-fair-havens-haven-free-clinic/",
  },
  {
    season: "2011 Summer",
    title:
      "Haven Free Clinic, Haven Community Health Center celebrate milestones",
    url: "http://www.nhregister.com/articles/2011/08/03/news/new_haven/doc4e39dcedc4364410854530.txt",
  },
];

const ANNUAL_REPORTS: AnnualReport[] = [
  {
    title: "HAVEN Annual Report 2024-2025",
    url: "/s/2024-25-HAVEN-Annual-Report.pdf",
  },
  {
    title: "HAVEN Annual Report 2022-2023",
    url: "/s/Annual-Report-2022-2023.pdf",
  },
  {
    title: "HAVEN Annual Report 2016-2017",
    url: "https://e417c147-ce1c-4be8-8744-3656b41bf37d.filesusr.com/ugd/2f1a48_58fb5b9d5eb746ae9fae33deb4fef2df.pdf",
  },
  {
    title: "HAVEN Annual Report 2015-2016",
    url: "http://havenfreeclinic.org/hfc/uploads/docs/HAVEN_annual_2011_final%20(1).pdf",
  },
  {
    title: "HAVEN Annual Report 2014-2015",
    url: "http://havenfreeclinic.org/hfc/uploads/docs/HAVEN_annual_2010_final.pdf",
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
    url: "http://muse.jhu.edu/login?auth=0&type=summary&url=/journals/journal_of_health_care_for_the_poor_and_underserved/v025/25.2.peluso.html",
  },
  {
    authors: "Butala NM, Chang H, Horwitz LI, Bartlett M, & Ellis P.",
    title:
      "Improving Quality of Preventive Care at a Student-Run Free Clinic.",
    url: "http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0081441",
  },
  {
    authors:
      "Butala NM, Murk W, Horwitz LI, Graber LK, Bridger L, Ellis P.",
    title:
      "What is the quality of preventive care provided in a student-run free clinic?",
    url: "http://muse.jhu.edu/journals/journal_of_health_care_for_the_poor_and_underserved/v023/23.1.butala.html",
  },
];

export function ImpactContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* ── Two-column layout on desktop ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* ── LEFT: News ── */}
          <div>
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-11 h-11 rounded-full bg-[#034078]/10 flex items-center justify-center shrink-0">
                <Newspaper className="w-5 h-5 text-[#034078]" />
              </div>
              <h2 className="font-['Merriweather',serif] font-bold text-[#034078] text-[28px] sm:text-[32px] md:text-[36px]">
                News
              </h2>
            </div>

            <div className="space-y-0">
              {NEWS_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 py-4 border-b border-[#034078]/10 hover:bg-[#f7f9fb] px-3 -mx-3 rounded-lg transition-colors duration-200"
                >
                  <span className="shrink-0 font-['Poppins',sans-serif] font-semibold text-[#034078] text-[13px] md:text-[14px] bg-[#034078]/8 rounded-md px-2.5 py-1 mt-0.5 whitespace-nowrap">
                    {item.season}
                  </span>
                  <span className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80 group-hover:text-[#034078] transition-colors duration-200 flex items-center gap-1.5">
                    {item.title}
                    <ExternalLink className="w-3.5 h-3.5 text-[#034078]/40 group-hover:text-[#034078] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Publications ── */}
          <div>
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-11 h-11 rounded-full bg-[#034078]/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#034078]" />
              </div>
              <h2 className="font-['Merriweather',serif] font-bold text-[#034078] text-[28px] sm:text-[32px] md:text-[36px]">
                Publications
              </h2>
            </div>

            {/* Annual Reports */}
            <div className="mb-10 md:mb-12">
              <div className="flex items-center gap-2.5 mb-5">
                <FileText className="w-[18px] h-[18px] text-[#034078]/70" />
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[#034078] text-[18px] md:text-[20px]">
                  Annual Reports
                </h3>
              </div>

              <div className="space-y-0">
                {ANNUAL_REPORTS.map((report, index) => (
                  <a
                    key={index}
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-3.5 border-b border-[#034078]/10 hover:bg-[#f7f9fb] px-3 -mx-3 rounded-lg transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#034078]/30 group-hover:bg-[#034078] shrink-0 transition-colors duration-200" />
                    <span className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80 group-hover:text-[#034078] transition-colors duration-200 flex items-center gap-1.5">
                      {report.title}
                      <ExternalLink className="w-3.5 h-3.5 text-[#034078]/40 group-hover:text-[#034078] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Research Articles */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <FlaskConical className="w-[18px] h-[18px] text-[#034078]/70" />
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[#034078] text-[18px] md:text-[20px]">
                  Research Articles
                </h3>
              </div>

              <div className="space-y-4">
                {RESEARCH_ARTICLES.map((article, index) => (
                  <a
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-xl bg-[#f7f9fb] border border-[#034078]/8 hover:border-[#034078]/20 hover:shadow-sm transition-all duration-200"
                  >
                    <p className="font-['Poppins',sans-serif] text-[13px] md:text-[14px] text-black/50 mb-1">
                      {article.authors}
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80 group-hover:text-[#034078] transition-colors duration-200 flex items-start gap-1.5">
                      <span className="italic">{article.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#034078]/40 group-hover:text-[#034078] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
