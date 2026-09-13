import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of the KKVEXA website and commercial engineering services.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#080D16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          isH1
          eyebrow="Legal"
          title="Terms of Service"
          description="Last updated: September 2026. Terms governing website use and engagement standards."
          align="left"
        />

        <div className="p-8 sm:p-12 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08] space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">1. Acceptance of Terms</h2>
            <p>
              By accessing and browsing this website, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">2. Intellectual Property &amp; Brand</h2>
            <p>
              All content on this site, including trademarks, logos, graphic assets, interface designs, code samples, and conceptual architectures, are the proprietary property of KKVEXA unless otherwise indicated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">3. Engineering Engagements</h2>
            <p>
              Formal client software engineering engagements, deliverable milestones, payment terms, and intellectual property transfers are governed by individualized Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">4. Case Study &amp; Concept References</h2>
            <p>
              Demonstration systems and architectural references displayed on this site are engineered to showcase technical capability. Specific client proprietary information is never disclosed without explicit written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">5. Limitation of Liability</h2>
            <p>
              Information on this website is provided on an &quot;as is&quot; basis for informational purposes. KKVEXA makes no warranties regarding uninterrupted or error-free website access.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
