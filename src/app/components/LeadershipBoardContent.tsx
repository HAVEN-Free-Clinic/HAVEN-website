import Image from "next/image";
import { User, Mail } from "lucide-react";

/* ─── Data ─── */

interface Person {
  name: string;
  title?: string;
  photo?: string;
  email?: string;
}

interface Department {
  code: string;
  label: string;
  members: Person[];
}

const MEDICAL_DIRECTORS: Person[] = [
  {
    name: "Angela Kang",
    title: "MD, MPH",
    photo:
      "https://res.cloudinary.com/ysm/image/upload/yms/prod/aaae988e-23b2-4b27-96f9-5f2f633d0320",
    email: "angela.kang@yale.edu",
  },
  {
    name: "Ami Marshall",
    title: "EdD, MSN, APRN, ANP-C",
    photo:
      "https://nursing.yale.edu/sites/default/files/styles/people_detail/public/2016_07_18_yale_nursing_marshall_lavitt-2r.jpg",
    email: "ami.marshall@yale.edu",
  },
  {
    name: "Elizabeth Roessler",
    title: "MMSc, PA-C",
    photo:
      "https://res.cloudinary.com/ysm/image/upload/yms/prod/a20eb1be-7070-4681-bc5f-6b12fe3c4c1b",
    email: "elizabeth.roessler@yale.edu",
  },
];

const jackCarneyPhoto = "/images/jack-carney.jpg";

const DEPARTMENTS: Department[] = [
  {
    code: "EXEC",
    label: "Executive Directors",
    members: [
      {
        name: "Antigone Antonakakis",
        email: "antigone.antonakakis@yale.edu",
      },
      { name: "Wilton Sun", email: "wilton.sun@yale.edu" },
      { name: "Andy Gu", email: "andy.gu@yale.edu" },
    ],
  },
  {
    code: "SRR",
    label: "Student Recruitment & Relations",
    members: [
      {
        name: "Fareed Salmon",
        email: "fareed.salmon@yale.edu",
      },
      { name: "Sharna Saha", email: "sharna.saha@yale.edu" },
      { name: "William Liu", email: "william.liu@yale.edu" },
      { name: "Phil Xu", email: "phil.xu@yale.edu" },
    ],
  },
  {
    code: "ITCM",
    label: "IT & Communications",
    members: [
      { name: "Alex Nelson", email: "a.nelson@yale.edu" },
      { name: "Jack Carney", email: "j.carney@yale.edu", photo: jackCarneyPhoto },
      {
        name: "Madison Williams",
        email: "madison.williams@yale.edu",
      },
      { name: "Zach Minter", email: "zachary.minter@yale.edu" },
    ],
  },
  {
    code: "BVHD",
    label: "Behavioral Health",
    members: [
      { name: "Goeun Lee", email: "goeun.g.lee@yale.edu" },
      { name: "Samuel Suh", email: "sam.suh@yale.edu" },
      {
        name: "Yash Wadwekar",
        email: "yash.wadwekar@yale.edu",
      },
    ],
  },
  {
    code: "EDUC",
    label: "Education",
    members: [
      { name: "Harsh Patel", email: "harsh.patel@yale.edu" },
      { name: "Johnny Yue", email: "johnny.yue@yale.edu" },
      {
        name: "Nikkita Khattar",
        email: "nikkita.khattar@yale.edu",
      },
    ],
  },
  {
    code: "MDIC",
    label: "Insurance Counseling",
    members: [
      { name: "Allison Cho", email: "a.cho@yale.edu" },
      {
        name: "Blake Maulsby",
        email: "blake.maulsby@yale.edu",
      },
      { name: "Brandon Ngo", email: "brandon.ngo@yale.edu" },
      { name: "Sourav Roy", email: "sourav.roy@yale.edu" },
    ],
  },
  {
    code: "FIND",
    label: "Finance & Development",
    members: [
      {
        name: "Adam Lombroso",
        email: "adam.lombroso@yale.edu",
      },
      { name: "Kate Yang", email: "kate.yang@yale.edu" },
      {
        name: "Pete Hatzelamprou",
        email: "pete.hatzelamprou@yale.edu",
      },
    ],
  },
  {
    code: "FOOD",
    label: "Food Pharmacy",
    members: [
      {
        name: "Jason Weinstein",
        email: "j.weinstein@yale.edu",
      },
      {
        name: "Katrina Dietsche",
        email: "katrina.dietsche@yale.edu",
      },
    ],
  },
  {
    code: "ICDD",
    label: "Infectious and Chronic Disease",
    members: [
      {
        name: "Ifunanya Okeke",
        email: "ifunanya.okeke@yale.edu",
      },
      { name: "Laura Evans", email: "laura.evans@yale.edu" },
      {
        name: "Sadde Mohamed",
        email: "sadde.mohamed@yale.edu",
      },
    ],
  },
  {
    code: "INTP",
    label: "Interpreting",
    members: [
      { name: "Edis Mesic", email: "edis.mesic@yale.edu" },
      {
        name: "Lupe Hernandez Zavala",
        email: "guadalupe.hernandezzavala@yale.edu",
      },
      {
        name: "Joaquin Caceres Melgarejo",
        email: "joaquin.caceresmelgarejo@yale.edu",
      },
    ],
  },
  {
    code: "LABR",
    label: "Laboratory",
    members: [
      { name: "Amanda Girod", email: "amanda.girod@yale.edu" },
      {
        name: "Danielle Lee",
        email: "danielle.s.lee@yale.edu",
      },
      {
        name: "Jovan Stanisavic",
        email: "jovan.stanisavic@yale.edu",
      },
      {
        name: "Rohan Lokanadham",
        email: "rohan.lokanadham@yale.edu",
      },
      {
        name: "Surabhi Kumar",
        email: "surabhi.kumar@yale.edu",
      },
    ],
  },
  {
    code: "ORHI",
    label: "Oral Health Initiative",
    members: [
      { name: "Justin Fan", email: "justin.fan@yale.edu" },
      {
        name: "Laurie Jimenez",
        email: "laurie.jimenez@yale.edu",
      },
      {
        name: "Sofia Arbelaez",
        email: "sofia.arbelaez@yale.edu",
      },
    ],
  },
  {
    code: "PATS",
    label: "Patient Services",
    members: [
      {
        name: "Anthony Vazquez",
        email: "anthony.vazquez@yale.edu",
      },
      {
        name: "Ashley Raffaeli",
        email: "ashley.raffaeli@yale.edu",
      },
      {
        name: "Catalina Ossmann",
        email: "catalina.ossmann@yale.edu",
      },
      {
        name: "Katherine Pena",
        email: "katherine.pena@yale.edu",
      },
      {
        name: "Madison Kesler",
        email: "madison.kesler@yale.edu",
      },
      { name: "Paola Corral", email: "paola.corral@yale.edu" },
      {
        name: "Selena Reyes-Flores",
        email: "selena.reyes-flores@yale.edu",
      },
    ],
  },
  {
    code: "PHAM",
    label: "Pharmacy",
    members: [
      { name: "Matthew Liu", email: "matt.liu@yale.edu" },
      {
        name: "Meridith Hoover",
        email: "meridith.hoover@yale.edu",
      },
      { name: "Nick Bhasin", email: "nick.bhasin@yale.edu" },
      {
        name: "Parker Jarman",
        email: "parker.jarman@yale.edu",
      },
      { name: "Sarah Li", email: "sarah.li.sl2969@yale.edu" },
    ],
  },
  {
    code: "PNLC",
    label: "Care Coordination",
    members: [
      {
        name: "Anthony Wilson",
        email: "anthony.wilson@yale.edu",
      },
      {
        name: "Betty Duran-Becerra",
        email: "beatriz.duran-becerra@yale.edu",
      },
      {
        name: "Frentzen Pakpahan",
        email: "frentzen.pakpahan@yale.edu",
      },
      {
        name: "Gretchen Long",
        email: "gretchen.long@yale.edu",
      },
      { name: "Hannah Qin", email: "hannah.qin@yale.edu" },
      { name: "Ju Hyun Lee", email: "j.lee@yale.edu" },
      { name: "Lucy Kim", email: "lucy.kim@yale.edu" },
      { name: "Sean Liu", email: "sean.liu@yale.edu" },
    ],
  },
  {
    code: "QAQI",
    label: "Quality Assurance & Improvement",
    members: [
      { name: "Emily Gu", email: "emily.gu@yale.edu" },
      {
        name: "Oghenetefike Okotete",
        email: "oghenetefike.okotete@yale.edu",
      },
      {
        name: "Theodore Koob",
        email: "theodore.koob@yale.edu",
      },
    ],
  },
  {
    code: "REFF",
    label: "Referrals",
    members: [
      { name: "Erin Hu", email: "erin.hu@yale.edu" },
      { name: "Lamia Ayaz", email: "lamia.ayaz@yale.edu" },
      {
        name: "Tenzin Dhondup",
        email: "tenzin.dhondup@yale.edu",
      },
    ],
  },
  {
    code: "SOSE",
    label: "Social Services",
    members: [
      { name: "Elle Stearns", email: "elle.stearns@yale.edu" },
      {
        name: "Lilia Potter-Schwartz",
        email: "lilia.potter-schwartz@yale.edu",
      },
      {
        name: "Theresa Marciano",
        email: "theresa.marciano@yale.edu",
      },
    ],
  },
  {
    code: "VADC",
    label: "Vaccine Coordination",
    members: [
      {
        name: "Georgio Maroun",
        email: "georgio.maroun@yale.edu",
      },
      {
        name: "Joe Abou-Khalil",
        email: "Joe.abou-khalil@yale.edu",
      },
      {
        name: "Ritvik Senjalia",
        email: "ritvik.senjalia@yale.edu",
      },
    ],
  },
  {
    code: "PCAR",
    label: "Clinical Advisors",
    members: [
      {
        name: "Andrew Craver",
        email: "andrew.craver@yale.edu",
      },
      {
        name: "Carlos Hernandez Castillo",
        email: "carlos.hernandezcastillo@yale.edu",
      },
      { name: "Daniel Wang", email: "daniel.wang@yale.edu" },
      {
        name: "Hye Young Choi",
        email: "hyeyoung.choi@yale.edu",
      },
      {
        name: "Matthew Andersen",
        email: "matthew.andersen@yale.edu",
      },
      { name: "Tyger Lin", email: "tyger.lin@yale.edu" },
      {
        name: "Victoria Kong",
        email: "victoria.kong@yale.edu",
      },
    ],
  },
  {
    code: "FCRL",
    label: "Faculty Relations",
    members: [
      {
        name: "Haley Xiaohe Zhang",
        email: "haleyxiaohe.zhang@yale.edu",
      },
      {
        name: "Jaspreet Kandola",
        email: "jaspreet.kandola@yale.edu",
      },
    ],
  },
  {
    code: "SRHD",
    label: "Sexual & Reproductive Health",
    members: [
      {
        name: "Jasmine Jiang",
        email: "jasmine.jiang@yale.edu",
      },
      { name: "Kexin Meng", email: "kexin.meng@yale.edu" },
      { name: "Kyra Seiger", email: "kyra.seiger@yale.edu" },
    ],
  },
  {
    code: "PBRL",
    label: "Public Relations",
    members: [
      { name: "Shriya Kunam", email: "shriya.kunam@yale.edu" },
    ],
  },
  {
    code: "MDLP",
    label: "Medical Legal Partnership",
    members: [
      {
        name: "Rachel Lerman",
        email: "rachel.lerman@yale.edu",
      },
    ],
  },
  {
    code: "CRAD",
    label: "Community Relations and Development",
    members: [
      {
        name: "Kyle Brennan Feliciano",
        email: "kylebrennan.feliciano@yale.edu",
      },
    ],
  },
];

/* ─── Components ─── */

function PhotoPlaceholder({
  size = "lg",
}: {
  size?: "lg" | "sm";
}) {
  const dim =
    size === "lg"
      ? "w-[140px] h-[140px] md:w-[170px] md:h-[170px]"
      : "w-[100px] h-[100px] md:w-[120px] md:h-[120px]";
  const iconSize =
    size === "lg"
      ? "w-10 h-10 md:w-12 md:h-12"
      : "w-7 h-7 md:w-8 md:h-8";
  return (
    <div
      className={`${dim} rounded-full bg-[#e8eef5] flex items-center justify-center shrink-0`}
    >
      <User className={`${iconSize} text-[#00356b]/40`} />
    </div>
  );
}

function DirectorCard({ person }: { person: Person }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      {person.photo ? (
        <Image
          src={person.photo}
          alt={person.name}
          width={170}
          height={170}
          className="w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full object-cover"
        />
      ) : (
        <PhotoPlaceholder size="lg" />
      )}
      <div>
        <p className="font-['Poppins',sans-serif] font-bold text-[#00356b] text-[18px] md:text-[20px] inline-flex items-center gap-1.5">
          {person.name}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              title={person.email}
              className="text-[#00356b] hover:text-[#00356b] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </p>
        {person.title && (
          <p className="font-['Poppins',sans-serif] text-[#00356b]/70 text-[14px] md:text-[16px] mt-1">
            {person.title}
          </p>
        )}
      </div>
    </div>
  );
}

function MemberCard({ person }: { person: Person }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      {person.photo ? (
        <Image
          src={person.photo}
          alt={person.name}
          width={120}
          height={120}
          className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover"
        />
      ) : (
        <PhotoPlaceholder size="sm" />
      )}
      <p className="font-['Poppins',sans-serif] font-semibold text-[#00356b] text-[14px] md:text-[16px] leading-snug inline-flex items-center gap-1">
        {person.name}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            title={person.email}
            className="text-[#00356b] hover:text-[#00356b] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
          </a>
        )}
      </p>
    </div>
  );
}

function DepartmentSection({ dept }: { dept: Department }) {
  return (
    <div className="mb-12 md:mb-16">
      {/* Department header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-['Poppins',sans-serif] font-bold text-white bg-[#00356b] px-3 py-1 text-[13px] md:text-[14px] tracking-wide">
          {dept.code}
        </span>
        <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[20px] md:text-[24px]">
          {dept.label}
        </h3>
      </div>

      {/* Members grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8">
        {dept.members.map((member) => (
          <MemberCard key={member.name} person={member} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main ─── */

export function LeadershipBoardContent() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        {/* Intro */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-6 md:mb-8">
            Leadership
          </h2>
          <p className="font-['Poppins',sans-serif] text-black text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed">
            HAVEN Free Clinic is led by a dedicated team of{" "}
            <span className="font-semibold">
              medical professionals
            </span>{" "}
            and{" "}
            <span className="font-semibold">
              student coordinators
            </span>{" "}
            committed to providing high-quality, compassionate
            healthcare to our community.
          </p>
        </div>

        {/* Medical Directors */}
        <div className="mb-10 md:mb-14">
          <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-10">
            Medical Directors
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20">
            {MEDICAL_DIRECTORS.map((director) => (
              <DirectorCard
                key={director.name}
                person={director}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00356b]/10 mb-10 md:mb-14" />

        {/* Student Coordinators heading */}
        <h3 className="font-['Merriweather',serif] font-bold text-[#00356b] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-12">
          Student Directors
        </h3>

        {/* Department sections */}
        {DEPARTMENTS.map((dept) => (
          <DepartmentSection key={dept.code} dept={dept} />
        ))}
      </div>
    </section>
  );
}