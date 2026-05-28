"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Recognition", href: "#recognition" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/90 backdrop-blur-md shadow-xl shadow-black/20 py-4"
            : "py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-accent text-xl font-bold tracking-wider hover:opacity-80 transition-opacity"
            aria-label="Matt Carolan home"
          >
            MC
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-faint hover:text-accent transition-colors duration-200"
              >
                <span className="text-accent mr-1.5">0{i + 1}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/matthewcarolan/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent border border-accent rounded px-4 py-2 hover:bg-accent/10 transition-colors duration-200 ml-2"
            >
              LinkedIn
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-accent p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-surface shadow-2xl flex flex-col justify-center items-center gap-8 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-base text-faint hover:text-accent transition-colors duration-200 flex flex-col items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-accent text-xs">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/matthewcarolan/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent border border-accent rounded px-6 py-3 hover:bg-accent/10 transition-colors duration-200 mt-4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
