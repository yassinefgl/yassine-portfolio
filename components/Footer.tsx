"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/cvData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <p className="font-extrabold text-white tracking-wider">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} — Data Scientist · AI Engineer · Software Engineer
            </p>
          </div>
        </div>

        {/* System Tech Stack Tag */}
        <div className="flex items-center gap-2 glass-pill px-4 py-2 rounded-full border border-slate-800 text-[11px] text-slate-400">
          <span>Engineered with Next.js 14, Tailwind CSS & Framer Motion</span>
        </div>

        {/* Back to Top CTA */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
          aria-label="Back to Top"
        >
          <span>Haut de page</span>
          <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
        </button>
      </div>
    </footer>
  );
};
