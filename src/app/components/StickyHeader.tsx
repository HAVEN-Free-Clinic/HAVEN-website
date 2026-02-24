"use client";

import { useState, useEffect } from "react";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <TopBar />
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Navbar isScrolled={scrolled} />
      </div>
    </header>
  );
}
