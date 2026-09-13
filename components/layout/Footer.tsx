import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050910] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Large Statement Strip */}
        <div className="pb-16 mb-16 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              Have an idea worth building?
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
              We engineer intelligent digital products, full-stack web applications, and resilient automation for modern businesses.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_0_20px_-3px_rgba(6,182,212,0.35)] hover:from-blue-500 hover:to-cyan-400 transition-all text-sm shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <Logo size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              KKVEXA is an AI &amp; software studio designing and building digital products that help ambitious companies move forward.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Available for new project scoping
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-slate-300 font-semibold font-sans">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-slate-300 font-semibold font-sans">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-slate-300 font-semibold font-sans">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Security &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>
            &copy; {currentYear} KKVEXA. All rights reserved.
          </p>
          <p>
            Global Remote • India &amp; Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
