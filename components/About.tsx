"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Trophy, GraduationCap, UserCheck, ShieldCheck, CheckCircle2, Award, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/cvData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-400 border border-blue-500/20">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Profile & Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          About <span className="text-gradient-cyan">Me</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Ingénieur en formation spécialisé en Intelligence Artificielle, Data Science et Ingénierie Logicielle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Detailed Bio & Profile Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-2xl border border-slate-800"
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-slate-800/80 pb-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl flex-shrink-0 bg-slate-950">
                <img
                  src="/yassine.png"
                  alt="Yassine ELFOUGHALI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span>{PERSONAL_INFO.name}</span>
                </h3>
                <p className="text-xs font-semibold text-blue-400">
                  {PERSONAL_INFO.titles.join(" · ")}
                </p>
                <p className="text-xs text-slate-400">
                  {PERSONAL_INFO.currentStatus}
                </p>
              </div>
            </div>

            {PERSONAL_INFO.aboutText.map((paragraph, index) => (
              <p key={index} className="text-sm text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Qualities / Soft Skills */}
          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Qualités & Aptitudes Clés (CV)
            </h4>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Graduation Showcase Photo & Key Distinction Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-4 flex flex-col justify-between"
        >
          {/* Graduation Speech Photo Showcase Card */}
          <div className="p-4 rounded-2xl glass-card border border-blue-500/30 space-y-3 relative overflow-hidden group">
            <div className="relative w-full h-56 rounded-xl overflow-hidden border border-slate-800 shadow-xl">
              <img
                src="/yassine-speech.jpg"
                alt="Yassine ELFOUGHALI ESISA Graduation Speech"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-600/90 text-white font-extrabold text-[11px] shadow-md backdrop-blur-sm">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>ESISA Graduation Ceremony</span>
                </span>
                <span className="text-[10px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                  Mention Très Bien
                </span>
              </div>
            </div>
          </div>

          {/* Chess ELO Distinction Card */}
          <div className="p-5 rounded-2xl glass-card glass-card-hover border border-amber-500/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-20 h-20 text-amber-400" />
            </div>
            <div className="relative z-10 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-[11px] font-bold border border-amber-500/30">
                <Trophy className="w-3.5 h-3.5" />
                <span>Distinction Personnelle</span>
              </div>
              <h4 className="text-xl font-black text-white">
                <span className="text-gradient-gold">ELO 2200</span> — Candidate Master Level
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Niveau Candidate Master en jeux d'échecs. Rigueur analytique, anticipation stratégique et gestion méthodique de la complexité.
              </p>
            </div>
          </div>

          {/* Professional Fraud ML Card */}
          <div className="p-5 rounded-2xl glass-card glass-card-hover border border-cyan-500/30 relative overflow-hidden group">
            <div className="relative z-10 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[11px] font-bold border border-cyan-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Expérience Stage PFE (HPS)</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Data Science & Financial Fraud ML
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Système intelligent de détection des fraudes financières par Machine Learning sous Python chez HighTech Payment Systems (HPS).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
