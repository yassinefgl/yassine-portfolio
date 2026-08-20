"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { EDUCATION_LIST } from "@/data/cvData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-emerald-400 border border-emerald-500/20">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Cursus Universitaire</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Academic <span className="text-gradient-cyan">Education</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Une solide formation supérieure en bases de données, intelligence artificielle et génie logiciel.
        </p>
      </div>

      {/* Grid of Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDUCATION_LIST.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`rounded-2xl glass-card glass-card-hover p-6 flex flex-col justify-between border ${
              edu.distinction?.includes("Très bien")
                ? "border-emerald-500/30 hover:border-emerald-500/50"
                : "border-slate-800 hover:border-blue-500/40"
            }`}
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {edu.period}
                </span>
                {edu.distinction && (
                  <span className="flex items-center gap-1 text-xs font-extrabold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.distinction}</span>
                  </span>
                )}
              </div>

              {/* Title & Institution */}
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">{edu.degree}</h3>
                {edu.specialty && (
                  <p className="text-xs font-semibold text-blue-400 mt-1">{edu.specialty}</p>
                )}
                <p className="text-xs font-medium text-slate-300 mt-2">{edu.institution}</p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{edu.location}</span>
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
