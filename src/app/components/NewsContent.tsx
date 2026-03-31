import { ExternalLink } from "lucide-react";

interface NewsItem {
  season: string;
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
    url: "https://medicine.yale.edu/news/article.aspx?id=15944",
  },
  {
    season: "2014 Summer",
    title:
      "Yale med students, volunteers commit to caring at Haven Free Clinic",
    url: "https://www.nhregister.com/general-news/20140706/yale-med-students-volunteers-commit-to-caring-at-haven-free-clinic",
  },
  {
    season: "2013 Spring",
    title:
      "Student-run clinic provides free mental health services to local immigrant community",
    url: "https://medicine.yale.edu/news/article.aspx?id=5280",
  },
  {
    season: "2013 Winter",
    title: "HAVEN Free Clinic serves uninsured",
    url: "https://yaledailynews.com/blog/2013/12/03/clinic-serves-uninsured/",
  },
  {
    season: "2013 Fall",
    title: "HAVEN wins Primary Care Leadership Award",
    url: "https://www.examiner.com/article/howard-dean-headlines-primary-care-summit-on-how-to-best-manage-aca-changes",
  },
  {
    season: "2013 Fall",
    title:
      "HAVEN featured in the Yale University Honor Roll of Alumni Donors 2012-2013",
    url: "https://medicine.yale.edu/alumni/giving/honorroll.aspx",
  },
  {
    season: "2012 Spring",
    title: "Student-run clinic grades its own performance",
    url: "https://yalemedicine.yale.edu/spring2012/people/students/124550",
  },
  {
    season: "2012 Winter",
    title: "After five years, HAVEN clinic still thriving",
    url: "https://yalemedicine.yale.edu/winter2012/people/students/114543",
  },
  {
    season: "2012 Winter",
    title: "Free Clinic: A Look at Fair Haven's HAVEN Free Clinic",
    url: "https://yaleherald.com/features/free-clinic-a-look-at-fair-havens-haven-free-clinic/",
  },
  {
    season: "2011 Summer",
    title:
      "Haven Free Clinic, Haven Community Health Center celebrate milestones",
    url: "https://www.nhregister.com/articles/2011/08/03/news/new_haven/doc4e39dcedc4364410854530.txt",
  },
];

export function NewsContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {NEWS_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-4 border-b border-[#00356b]/10 hover:bg-[#00356b]/5 px-3 -mx-3 transition-colors duration-200"
              >
                <span className="shrink-0 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[13px] md:text-[14px] bg-[#00356b]/8 px-2.5 py-1 mt-0.5 whitespace-nowrap">
                  {item.season}
                </span>
                <span className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80 group-hover:text-[#00356b] transition-colors duration-200 flex items-center gap-1.5">
                  {item.title}
                  <ExternalLink className="w-3.5 h-3.5 text-[#00356b]/40 group-hover:text-[#00356b] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
