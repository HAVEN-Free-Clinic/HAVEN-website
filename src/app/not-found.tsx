"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Phone, RefreshCw } from "lucide-react";
import { StickyHeader } from "./components/StickyHeader";
import { Footer } from "./components/Footer";

export default function NotFound() {
  const router = useRouter();

  const status = 404;
  const title = "Page not found";
  const message =
    "The page you're looking for doesn't exist or may have been moved. Let's get you back on track.";

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <StickyHeader />

      {/* Hero-style top section */}
      <section className="relative w-full bg-[#00356b] overflow-hidden pt-[120px] sm:pt-[140px] pb-16 sm:pb-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto text-center px-6">
          {/* Error code */}
          <p className="font-['Poppins',sans-serif] font-bold text-white/30 text-[120px] sm:text-[160px] md:text-[200px] leading-none select-none">
            {status}
          </p>

          {/* Title */}
          <h1 className="font-['Poppins',sans-serif] font-bold text-white text-[28px] sm:text-[34px] md:text-[42px] -mt-4 sm:-mt-6 md:-mt-8 mb-4">
            {title}
          </h1>

          {/* Message */}
          <p className="font-['Merriweather',serif] text-white/80 text-[16px] sm:text-[18px] max-w-[560px] mx-auto leading-relaxed">
            {message}
          </p>
        </div>
      </section>

      {/* Action section */}
      <section className="flex-1 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6 py-12 md:py-16">
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/"
              className="flex items-center gap-2 bg-[#00356b] text-white font-['Poppins',sans-serif] font-bold text-[15px] px-8 py-3.5 hover:bg-[#4a90c4] transition-colors w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 bg-white text-[#00356b] border-2 border-[#00356b] font-['Poppins',sans-serif] font-bold text-[15px] px-8 py-3.5 hover:bg-[#00356b]/5 transition-colors w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 bg-white text-gray-700 border-2 border-gray-300 font-['Poppins',sans-serif] font-bold text-[15px] px-8 py-3.5 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>

          {/* Helpful links */}
          <div className="text-center mb-10">
            <h2 className="font-['Poppins',sans-serif] font-bold text-gray-900 text-[22px] sm:text-[26px] mb-2">
              Helpful Links
            </h2>
            <p className="font-['Merriweather',serif] text-gray-500 text-[15px]">
              Here are some pages that might help you find what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/services",
                label: "Our Services",
                desc: "View all clinic services and departments",
              },
              {
                href: "/visitor-guide",
                label: "Visitor Guide",
                desc: "Everything you need for your visit",
              },
              {
                href: "/faqs",
                label: "FAQs",
                desc: "Answers to common questions",
              },
              {
                href: "/about",
                label: "About Us",
                desc: "Learn about HAVEN Free Clinic",
              },
              {
                href: "/get-involved",
                label: "Get Involved",
                desc: "Volunteer and make a difference",
              },
              {
                href: "/impact",
                label: "Our Impact",
                desc: "See the difference we're making",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white p-5 border border-gray-200 hover:border-[#00356b]/30 hover:shadow-md transition-all"
              >
                <p className="font-['Poppins',sans-serif] font-bold text-gray-900 text-[16px] group-hover:text-[#00356b] transition-colors mb-1">
                  {link.label}
                </p>
                <p className="font-['Merriweather',serif] text-gray-500 text-[13px]">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>

          {/* Contact fallback */}
          <div className="mt-12 bg-white border border-gray-200 p-6 sm:p-8 text-center">
            <h3 className="font-['Poppins',sans-serif] font-bold text-gray-900 text-[18px] sm:text-[20px] mb-2">
              Still need help?
            </h3>
            <p className="font-['Merriweather',serif] text-gray-500 text-[15px] mb-5">
              If you need immediate assistance, don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:2032000673"
                className="flex items-center gap-2 text-[#00356b] font-['Poppins',sans-serif] font-bold text-[15px] hover:underline"
              >
                <Phone className="w-4 h-4" />
                (203) 200-0673
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href="mailto:haven.free.clinic@yale.edu"
                className="text-[#00356b] font-['Poppins',sans-serif] font-bold text-[15px] hover:underline"
              >
                haven.free.clinic@yale.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
