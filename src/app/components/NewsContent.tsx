import { ExternalLink } from "lucide-react";

/*
 * ─── About the missing links ───
 *
 * Nine of these stories no longer have a working URL. Yale retired its old
 * /news/article.aspx CMS, the New Haven Register dropped its pre-2015 archive,
 * Examiner.com shut down in 2016, yaleherald.com stopped resolving, and the two
 * Yale Medicine magazine links now silently land on the current issue instead
 * of the original article — which is worse than a 404, because the reader gets
 * something real that is not what they clicked.
 *
 * Rather than delete the history, entries without a `url` still show up; they
 * just are not links. If you track down an Internet Archive capture, add the
 * URL back and the row becomes clickable again. Use a full dated snapshot
 * (https://web.archive.org/web/YYYYMMDDhhmmss/https://...), not the date-only
 * form, which can drift to a different capture.
 *
 * Dead originals, kept so they can be searched for later:
 *   2017 Fall   https://medicine.yale.edu/news/article.aspx?id=15944
 *   2014 Summer https://www.nhregister.com/general-news/20140706/yale-med-students-volunteers-commit-to-caring-at-haven-free-clinic
 *   2013 Spring https://medicine.yale.edu/news/article.aspx?id=5280
 *   2013 Fall   https://www.examiner.com/article/howard-dean-headlines-primary-care-summit-on-how-to-best-manage-aca-changes
 *   2013 Fall   https://medicine.yale.edu/alumni/giving/honorroll.aspx
 *   2012 Spring https://yalemedicine.yale.edu/spring2012/people/students/124550
 *   2012 Winter https://yalemedicine.yale.edu/winter2012/people/students/114543
 *   2012 Winter https://yaleherald.com/features/free-clinic-a-look-at-fair-havens-haven-free-clinic/
 *   2011 Summer https://www.nhregister.com/articles/2011/08/03/news/new_haven/doc4e39dcedc4364410854530.txt
 */

interface NewsItem {
  season: string;
  title: string;
  /** Omit when no working link exists — the row still shows, unlinked. */
  url?: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    season: "2025 Fall",
    title: "Most Successful Yet—HAVEN 5K Surpasses Fundraising Goal",
    url: "https://medicine.yale.edu/news-article/most-successful-yet-haven-5k-surpasses-fundraising-goal/",
  },
  {
    season: "2023 Fall",
    title: "HAVEN Free Clinic 5K Exceeds Fundraising Goal!",
    url: "https://medicine.yale.edu/news-article/haven-free-clinic-5k-exceeds-fundraising-goal/",
  },
  {
    season: "2017 Fall",
    title: "ANDA 5K raises $27,000 for HAVEN Free Clinic",
  },
  {
    season: "2014 Summer",
    title:
      "Yale med students, volunteers commit to caring at Haven Free Clinic",
  },
  {
    season: "2013 Spring",
    title:
      "Student-run clinic provides free mental health services to local immigrant community",
  },
  {
    season: "2013 Winter",
    title: "HAVEN Free Clinic serves uninsured",
    url: "https://yaledailynews.com/articles/clinic-serves-uninsured",
  },
  {
    season: "2013 Fall",
    title: "HAVEN wins Primary Care Leadership Award",
  },
  {
    season: "2013 Fall",
    title:
      "HAVEN featured in the Yale University Honor Roll of Alumni Donors 2012-2013",
  },
  {
    season: "2012 Spring",
    title: "Student-run clinic grades its own performance",
  },
  {
    season: "2012 Winter",
    title: "After five years, HAVEN clinic still thriving",
  },
  {
    season: "2012 Winter",
    title: "Free Clinic: A Look at Fair Haven's HAVEN Free Clinic",
  },
  {
    season: "2011 Summer",
    title:
      "Haven Free Clinic, Haven Community Health Center celebrate milestones",
  },
];

const ROW = "flex items-start gap-4 py-4 border-b border-[#00356b]/10 px-3 -mx-3";
const SEASON =
  "shrink-0 font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[13px] md:text-[14px] bg-[#00356b]/8 px-2.5 py-1 mt-0.5 whitespace-nowrap";

export function NewsContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {NEWS_ITEMS.map((item) =>
              item.url ? (
                <a
                  key={item.season + item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${ROW} hover:bg-[#00356b]/5 transition-colors duration-200`}
                >
                  <span className={SEASON}>{item.season}</span>
                  <span className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80 group-hover:text-[#00356b] transition-colors duration-200 flex items-center gap-1.5">
                    {item.title}
                    <ExternalLink className="w-3.5 h-3.5 text-[#00356b]/40 group-hover:text-[#00356b] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                </a>
              ) : (
                <div key={item.season + item.title} className={ROW}>
                  <span className={SEASON}>{item.season}</span>
                  <span className="font-['Poppins',sans-serif] text-[15px] md:text-[16px] text-black/80">
                    {item.title}
                  </span>
                </div>
              )
            )}
          </div>

          <p className="font-['Poppins',sans-serif] text-black/55 text-[13px] md:text-[14px] leading-relaxed mt-6">
            Older stories without a link are no longer published online. We have
            kept the headlines here as a record of the clinic&apos;s history.
          </p>
        </div>
      </div>
    </section>
  );
}
