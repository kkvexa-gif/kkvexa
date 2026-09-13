import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "KKVEXA Studio Privacy Policy regarding data protection, inquiries, and client information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#080D16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          isH1
          eyebrow="Legal"
          title="Privacy Policy"
          description="Last updated: September 2026. How KKVEXA handles project inquiries and data privacy."
          align="left"
        />

        <div className="p-8 sm:p-12 rounded-2xl bg-[#0F1724]/90 border border-white/[0.08] space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">1. Information We Collect</h2>
            <p>
              When you submit an inquiry through our contact form, we collect information you voluntarily provide, including your name, email address, company name, project specifications, and estimated budget parameters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">2. How We Use Your Information</h2>
            <p>
              We utilize collected inquiry information strictly for evaluating project scope, preparing technical proposals, scheduling discovery calls, and communicating with you regarding potential software engineering engagements.
            </p>
            <p>
              We do not sell, rent, monetize, or distribute your personal or commercial information to third-party marketing services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">3. Data Security &amp; Confidentiality</h2>
            <p>
              We implement industry-standard encryption, access controls, and security hygiene to safeguard your communications and proprietary project specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">4. Analytics &amp; Cookies</h2>
            <p>
              Our website may utilize lightweight, privacy-friendly telemetry to analyze aggregate traffic patterns and improve performance without tracking individual personal identities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions regarding our privacy practices or wish to request the deletion of your inquiry data, please contact our team via the contact form.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
