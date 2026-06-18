"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

export function LandingFAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FAQRow key={i} item={item} />
      ))}
    </div>
  );
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors duration-200 group"
      >
        <span className="text-white font-medium leading-snug">{item.q}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-slate-500 group-hover:text-slate-300 transition-all duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="px-6 pb-5 text-slate-400 leading-relaxed text-sm">{item.a}</p>
      )}
    </div>
  );
}
