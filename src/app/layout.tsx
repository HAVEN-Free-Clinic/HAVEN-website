import type { Metadata } from "next";
import "@/styles/index.css";
import { StickyHeader } from "@/app/components/StickyHeader";
import { Footer } from "@/app/components/Footer";
import { LanguageSuggestion } from "@/app/components/LanguageSuggestion";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  OG_IMAGE,
  CLINIC,
} from "@/lib/site";

export const metadata: Metadata = {
  /*
   * metadataBase turns every relative URL below (and every canonical on a page)
   * into an absolute one. Open Graph crawlers reject relative image paths, so
   * without this the share cards silently render blank.
   */
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    /* Pages set a bare title ("About Us") and get the suffix from here. */
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "free clinic",
    "New Haven",
    "uninsured",
    "primary care",
    "free health care",
    "student-run clinic",
    "clínica gratuita",
    "Connecticut",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  /*
   * No `alternates.canonical` here on purpose. Metadata is inherited, so a
   * canonical set at the root would silently make every page that forgets to
   * override it claim to be the homepage. Each page declares its own; a page
   * that forgets then emits no canonical (harmless) rather than a wrong one.
   */
  /*
   * `title`, `description` and `url` are deliberately left out of both blocks
   * below. Child metadata is merged, not replaced, so hard-coding them here
   * would stamp the homepage's title and URL onto all 22 pages — every shared
   * link would preview as the homepage. Omitted, Next.js fills og:title and
   * og:description from each page's own resolved title/description, and og:url
   * from its canonical. Only the genuinely site-wide fields belong here.
   */
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "The HAVEN Free Clinic care team with a patient",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  formatDetection: { telephone: true, address: true, email: true },
};

/*
 * Structured data. MedicalClinic is the schema.org type Google uses to build
 * the local panel (hours, phone, directions) for a walk-in health provider,
 * so the values here must match what the Footer renders to the eye.
 */
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: SITE_NAME,
  alternateName: "La Clínica Gratuita HAVEN",
  url: SITE_URL,
  logo: `${SITE_URL}/images/haven-logo.svg`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description: SITE_DESCRIPTION,
  telephone: CLINIC.phoneE164,
  faxNumber: CLINIC.fax,
  email: CLINIC.email,
  /* A free clinic charges patients nothing; Google shows this in the panel. */
  priceRange: "Free",
  isAcceptingNewPatients: true,
  address: {
    "@type": "PostalAddress",
    name: CLINIC.address.building,
    streetAddress: CLINIC.address.street,
    addressLocality: CLINIC.address.city,
    addressRegion: CLINIC.address.state,
    postalCode: CLINIC.address.zip,
    addressCountry: CLINIC.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${CLINIC.hours.day}`,
      opens: CLINIC.hours.opens,
      closes: CLINIC.hours.closes,
    },
  ],
  areaServed: {
    "@type": "City",
    name: "New Haven",
    containedInPlace: { "@type": "State", name: "Connecticut" },
  },
  availableLanguage: [
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Spanish", alternateName: "es" },
  ],
  medicalSpecialty: "PrimaryCare",
  availableService: [
    { "@type": "MedicalTherapy", name: "Primary care" },
    { "@type": "MedicalTherapy", name: "Behavioral health" },
    { "@type": "MedicalTherapy", name: "Medication assistance" },
    { "@type": "MedicalTherapy", name: "Social services" },
    { "@type": "MedicalTherapy", name: "Specialty referrals" },
    { "@type": "MedicalTherapy", name: "Insurance counseling" },
    { "@type": "MedicalTherapy", name: "Patient education" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#clinic` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          /*
           * JSON.stringify output is machine-generated from the constants
           * above, never from user input, so there is no injection surface.
           */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([clinicSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen w-full bg-white antialiased">
        {/*
          The fixed header puts roughly twenty links ahead of the page content.
          This link is off-screen until it takes focus, so the first Tab on any
          page offers a jump straight to the content.
        */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-white focus:text-[#00356b] focus:font-['Poppins',sans-serif] focus:font-semibold focus:text-[15px] focus:px-5 focus:py-3 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <StickyHeader />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <LanguageSuggestion />
      </body>
    </html>
  );
}
