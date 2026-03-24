"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/find-my-church", label: "Find Church" },
  { href: "/churches", label: "Browse" },
  { href: "/list-your-church", label: "List Church" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full glass-nav-spiritual">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gold text-[#2E2242] text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
              W
            </div>
            <span className="text-display text-lg sm:text-xl font-bold tracking-[0.2em] text-white uppercase">
              Worship <span className="text-accent-gold hidden sm:inline">Match</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-accent-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/find-my-church"
              className="btn-gold py-2.5 px-6"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/find-my-church" className="btn-gold py-2 px-4 text-[10px] font-black">
                Get Started
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 border-t border-white/5 bg-[#2E2242]/95 backdrop-blur-xl" : "max-h-0"}`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-widest text-white/70 hover:text-accent-gold py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
