"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, BrainCircuit, Kanban, BarChart3, Terminal } from "lucide-react";
import { CERTIFICATIONS } from "@/data/cvData";

export const Certifications: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Database": return <Database className="w-5 h-5 text-blue-400" />;
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case "Kanban": return <Kanban className="w-5 h-5 text-amber-400" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case "Terminal": return <Terminal className="w-5 h-5 text-indigo-400" />;
      default: return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-amber-400 border border-amber-500/20">
          <Award className="w-3.5 h-3.5" />
          <span>Certifications Valides</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Verified <span className="text-gradient-cyan">Certifications</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Certifications officielles délivrées par CISCO, Cognitive Class (IBM) et HP LIFE.
        </p>
      </div>

      {/* Grid of Certification Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                {getIcon(cert.iconName)}
              </div>
              <span className="text-xs font-extrabold font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {cert.year}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{cert.category}</span>
              <h3 className="text-base font-bold text-white mt-0.5">{cert.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Certification Officielle Confirmée</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
