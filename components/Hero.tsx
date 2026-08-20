"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles, Brain, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/cvData";

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-blue-500/30 text-xs font-medium text-blue-300 shadow-xl shadow-blue-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Opportunities in Data, AI & Software Engineering</span>
        </motion.div>

        {/* Profile Image & Avatar Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 opacity-70 blur-md group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-slate-900 shadow-2xl bg-slate-950">
              <img
                src="/yassine.png"
                alt="Yassine ELFOUGHALI"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-lg" title="Disponible pour opportunités">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
            <span className="block text-gradient-silver">Yassine</span>
            <span className="block text-gradient-cyan mt-1">ELFOUGHALI</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-xl font-bold text-slate-300">
            <span className="flex items-center gap-1.5 text-blue-400">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" /> Data Scientist
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" /> AI Engineer
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-indigo-400">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" /> Software Engineer
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-normal leading-relaxed pt-2">
            "{PERSONAL_INFO.heroTagline}"
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-blue-500/50 font-semibold text-sm transition-all shadow-lg hover:scale-[1.02]"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download CV</span>
          </button>
        </motion.div>

        {/* Social & Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg glass-pill hover:border-blue-500/40 hover:text-white transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg glass-pill text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill hover:border-slate-600 hover:text-white transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill hover:border-blue-500/40 hover:text-blue-400 transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current text-blue-400" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Key Highlight Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 text-left"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-card glass-card-hover border border-slate-800/80 space-y-1"
            >
              <div className="text-xl sm:text-2xl font-black text-gradient-cyan">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-200">{stat.label}</div>
              <div className="text-[11px] text-slate-400">{stat.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
