"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ShieldAlert, Code2, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/cvData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-400 border border-blue-500/20">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Parcours Professionnel</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Work <span className="text-gradient-cyan">Experience</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Mes expériences pratiques en entreprise dans la Data Science et le Développement Logiciel.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-6 sm:pl-10 group"
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:scale-125 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-500/30">
              {exp.icon === "ShieldAlert" ? <ShieldAlert className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
            </div>

            {/* Date Badge on Desktop Left */}
            <div className="sm:absolute sm:-left-36 sm:top-2 mb-2 sm:mb-0 text-xs font-bold text-blue-400 sm:text-right w-28">
              <span className="inline-block px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                {exp.period.split(" ")[0]} {exp.period.split(" ")[1]}
              </span>
            </div>

            {/* Content Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card glass-card-hover border border-slate-800/80 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{exp.type}</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{exp.role}</h3>
                  <p className="text-sm font-semibold text-slate-300">{exp.company}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Subject Banner */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200">
                <span className="font-bold text-blue-400">Sujet principal:</span> {exp.subject}
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2">
                {exp.description.map((desc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </div>
                ))}
              </div>

              {/* Tools Badges */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
