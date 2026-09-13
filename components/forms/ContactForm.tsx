"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, ArrowRight } from "lucide-react";
import { ToastNotification } from "@/components/ui/ToastNotification";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT_TYPES = [
  "AI Integration & LLM",
  "Web Application",
  "Mobile App (iOS/Android)",
  "SaaS & MVP Build",
  "Business Automation",
  "API & Systems Integration",
  "Technical Architecture / Audit",
];

const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 — $15,000",
  "$15,000 — $35,000",
  "$35,000+",
  "Flexible / Scoping needed",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "AI Integration & LLM",
    budgetRange: "$5,000 — $15,000",
    message: "",
    preferredContact: "Email",
    consent: true,
    _gotcha: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error" | "info";
    title: string;
    message: string;
    referenceId?: string;
  }>({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      const ref = data.referenceId || "KKV-RECEIVED";
      setStatus("success");
      setReferenceId(ref);

      // Trigger top-of-page animated banner (auto-disappears in 4.5s)
      setToast({
        show: true,
        type: "success",
        title: "Inquiry Transmitted Successfully",
        message: "Your project scope has been received. Our engineering team will review and reply within 24 hours.",
        referenceId: ref,
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : "An error occurred. Please try again.";
      setStatus("error");
      setErrorMessage(errMsg);

      // Trigger top-of-page error banner (auto-disappears in 4.5s)
      setToast({
        show: true,
        type: "error",
        title: "Submission Notice",
        message: errMsg,
      });
    }
  };

  if (status === "success") {
    return (
      <>
        <ToastNotification
          show={toast.show}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          referenceId={toast.referenceId}
          duration={4500}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
        />
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0F1724] border border-cyan-500/30 text-center shadow-2xl backdrop-blur-xl">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center mb-6 shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-100 tracking-tight">
            Inquiry Received Successfully
          </h3>

          <p className="mt-3 text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to KKVEXA. A senior product engineer will review your project scope and respond with preliminary technical thoughts within 24 hours.
          </p>

          <div className="mt-6 p-4 rounded-lg bg-[#162234] border border-white/[0.08] max-w-xs mx-auto">
            <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
              Inquiry Reference
            </span>
            <span className="text-sm font-mono font-bold text-cyan-400 mt-1 block">
              {referenceId}
            </span>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  projectType: "AI Integration & LLM",
                  budgetRange: "$5,000 — $15,000",
                  message: "",
                  preferredContact: "Email",
                  consent: true,
                  _gotcha: "",
                });
              }}
            >
              Submit Another Project Scope
            </Button>
            <Button href="/work" variant="primary" size="sm">
              Explore Case Studies
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ToastNotification
        show={toast.show}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        referenceId={toast.referenceId}
        duration={4500}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
      <form
        onSubmit={handleSubmit}
        className="p-6 sm:p-10 rounded-2xl bg-[#0F1724]/90 border border-white/[0.10] shadow-2xl backdrop-blur-xl space-y-6"
        noValidate
      >
        {/* Honeypot anti-spam */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="_gotcha">Leave this field empty</label>
          <input
            type="text"
            id="_gotcha"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            value={formData._gotcha}
            onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
          />
        </div>

        {status === "error" && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Submission Error</span>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Your Name <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="e.g. Alex Mercer"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#162234] border border-white/[0.10] text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Business Email <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#162234] border border-white/[0.10] text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Company & Preferred Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              placeholder="e.g. Acme Innovations"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#162234] border border-white/[0.10] text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="preferredContact" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Preferred Communication
            </label>
            <select
              id="preferredContact"
              value={formData.preferredContact}
              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#162234] border border-white/[0.10] text-slate-100 text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
            >
              <option value="Email">Email Communication</option>
              <option value="Video Call">Video Call (Google Meet / Zoom)</option>
              <option value="Slack / Async">Slack / Async Discussion</option>
            </select>
          </div>
        </div>

        {/* Row 3: Project Type Selection */}
        <div>
          <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
            Project Focus Area <span className="text-cyan-400">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, projectType: type })}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 border text-left",
                  formData.projectType === type
                    ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_-3px_rgba(6,182,212,0.3)] font-semibold"
                    : "bg-[#162234]/60 text-slate-400 border-white/[0.06] hover:text-slate-200 hover:border-white/15"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Row 4: Budget Range (Optional) */}
        <div>
          <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
            Estimated Budget Range <span className="text-slate-500">(Optional)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {BUDGET_RANGES.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setFormData({ ...formData, budgetRange: b })}
                className={cn(
                  "px-3 py-2 rounded-lg text-xs font-mono transition-all duration-150 border text-center",
                  formData.budgetRange === b
                    ? "bg-blue-500/15 text-blue-300 border-blue-500/40 shadow-sm font-bold"
                    : "bg-[#162234]/40 text-slate-400 border-white/[0.06] hover:text-slate-200 hover:border-white/10"
                )}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Row 5: Project Scope Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Project Description &amp; Requirements <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            required
            placeholder="Describe your project, timeline, target users, or specific engineering requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-[#162234] border border-white/[0.10] text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors resize-y min-h-[100px]"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            id="consent"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded bg-[#162234] border-white/20 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-0 cursor-pointer"
          />
          <label htmlFor="consent" className="text-xs text-slate-400 leading-normal select-none cursor-pointer">
            I consent to KKVEXA collecting my contact details solely to evaluate this project inquiry. View our{" "}
            <Link href="/privacy" className="text-cyan-400 hover:underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        {/* Submit Button & Security Assurance */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "submitting" || !formData.consent}
            className="w-full sm:w-auto"
            icon={
              status === "submitting" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
          >
            {status === "submitting" ? "Transmitting Scope..." : "Submit Project Inquiry"}
          </Button>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted &amp; confidential</span>
          </div>
        </div>
      </form>
    </>
  );
}
