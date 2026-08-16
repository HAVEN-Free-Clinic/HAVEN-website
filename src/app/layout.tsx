import type { Metadata } from "next";
import "@/styles/index.css";
import { StickyHeader } from "@/app/components/StickyHeader";
import { Footer } from "@/app/components/Footer";
import { LanguageSuggestion } from "@/app/components/LanguageSuggestion";

export const metadata: Metadata = {
  title: "HAVEN Free Clinic",
  description:
    "High-quality health care, free of charge. HAVEN Free Clinic provides free primary care to uninsured adults in the New Haven community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
