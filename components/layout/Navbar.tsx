"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#080D16]/90 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent py-6 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo on Left */}
          <div className="flex items-center">
            <Logo size="md" />
          </div>

          {/* Clean Desktop Navigation on Right */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative py-1",
                      isActive
                        ? "text-slate-100 font-semibold"
                        : "text-slate-400 hover:text-slate-200"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Refined CTA Button */}
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 bg-[#080D16]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col justify-between transition-all duration-300 md:hidden z-50",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col space-y-4 pt-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-2xl font-bold py-2 transition-colors",
              pathname === "/" ? "text-cyan-400" : "text-slate-200 hover:text-white"
            )}
          >
            Home
          </Link>
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-bold py-2 transition-colors",
                  isActive ? "text-cyan-400" : "text-slate-200 hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={() => setIsOpen(false)}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Project
          </Button>

          <p className="text-xs text-slate-500 font-sans text-center mt-2">
            KKVEXA — AI &amp; Software Studio
          </p>
        </div>
      </div>
    </header>
  );
}
