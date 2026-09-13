import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Clock, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project — Contact KKVEXA",
  description:
    "Get in touch with KKVEXA to discuss your AI integration, web application, mobile app, SaaS MVP, or workflow automation requirements.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#080D16]">
      {/* Header Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delayMs={0} durationMs={700}>
            <SectionHeading
              isH1
              eyebrow="Start a Conversation"
              title="Let&apos;s evaluate your project."
              description="Tell us about your technical goals, constraints, or product vision. A senior engineer will review your inquiry and schedule an introductory architecture session."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delayMs={100} durationMs={700}>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Right Column: Studio Information & Assurance */}
            <div className="lg:col-span-5 space-y-8">
              {/* Expectations Box */}
              <ScrollReveal delayMs={150} durationMs={700}>
                <div className="p-8 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08] shadow-xl backdrop-blur-md">
                  <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    What to Expect Next
                  </h2>
                  <ul className="space-y-3.5 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>1. Scope Review:</strong> A lead engineer reviews your technical requirements within 24 hours.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>2. Discovery Sync:</strong> A 30-minute scoping call to clarify architecture and milestones.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>3. Transparent Proposal:</strong> Fixed-price sprint plan with defined deliverables and timeline.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Security & Confidentiality */}
              <ScrollReveal delayMs={200} durationMs={700}>
                <div className="p-8 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08] shadow-xl backdrop-blur-md">
                  <h2 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    Confidentiality Guaranteed
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    We treat all discussions and specifications as strictly confidential. Standard mutual NDAs can be executed prior to reviewing proprietary architecture or data models.
                  </p>
                </div>
              </ScrollReveal>

              {/* Studio Operations */}
              <ScrollReveal delayMs={250} durationMs={700}>
                <div className="p-8 rounded-2xl bg-[#162234]/60 border border-white/[0.08] text-xs font-mono space-y-3 text-slate-400">
                  <div className="flex items-center gap-2 text-slate-200">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Global Client Delivery • Remote-First</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Typical Response Time:</span>
                    <span className="text-cyan-300 font-bold">&lt; 24 business hours</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
