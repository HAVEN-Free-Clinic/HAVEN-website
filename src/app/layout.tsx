import type { Metadata } from "next";
import "@/styles/index.css";
import { StickyHeader } from "@/app/components/StickyHeader";
import { Footer } from "@/app/components/Footer";
import { ComingSoon } from "@/app/components/ComingSoon";

const COMING_SOON = process.env.COMING_SOON === "true";

export const metadata: Metadata = COMING_SOON
  ? {
      title: "HAVEN Free Clinic — Coming Soon",
      description:
        "A new havenfreeclinic.org is on its way. HAVEN Free Clinic remains open every Saturday, 8:30am–12:00pm.",
      robots: { index: false, follow: false },
    }
  : {
      title: "HAVEN Free Clinic",
      description:
        "High-quality health care, free of charge. HAVEN Free Clinic provides medical services to uninsured and underinsured patients in the New Haven community.",
    };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full bg-white antialiased">
        {COMING_SOON ? (
          <ComingSoon />
        ) : (
          <>
            <StickyHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
