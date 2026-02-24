import type { Metadata } from "next";
import "@/styles/index.css";
import { StickyHeader } from "@/app/components/StickyHeader";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
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
        <StickyHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
