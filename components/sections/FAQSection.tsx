"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Process & Delivery", "AI & Technology", "Commercials"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0B1220] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-sans">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Clear answers on working with KKVEXA.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Everything you need to know about our engineering approach, scope, IP ownership, and project delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 border",
                activeCategory === cat
                  ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30 font-semibold"
                  : "bg-[#0F1724] text-slate-400 border-white/[0.06] hover:text-slate-200 hover:border-white/10"
              )}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-[#0F1724] border-cyan-500/30 shadow-lg"
                    : "bg-[#0F1724]/70 border-white/[0.06] hover:border-white/15"
                )}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "p-1.5 rounded-full bg-white/[0.04] text-slate-400 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180 text-cyan-400 bg-cyan-500/10"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={cn(
                    "px-6 transition-all duration-300 ease-in-out text-sm sm:text-base text-slate-300 leading-relaxed",
                    isOpen ? "pb-6 pt-1 opacity-100 max-h-96" : "max-h-0 opacity-0 overflow-hidden"
                  )}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
