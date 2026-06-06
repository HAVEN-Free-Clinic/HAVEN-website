import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "HAVEN Free Clinic — Coming Soon",
  description:
    "A new havenfreeclinic.org is on its way. HAVEN Free Clinic remains open every Saturday, 8:30am–12:00pm.",
  robots: { index: false, follow: false },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
