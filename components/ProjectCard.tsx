"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle2, ShieldCheck, Trophy, Activity, Smartphone } from "lucide-react";
import { Project } from "@/data/cvData";
import { MlPipelineWidget } from "./MlPipelineWidget";
import { ChessWidget } from "./ChessWidget";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryIcon = (category: Project["category"]) => {
    switch (category) {
      case "AI / Machine Learning": return <ShieldCheck className="w-4 h-4 text-cyan-400" />;
      case "Data Science": return <Activity className="w-4 h-4 text-blue-400" />;
      case "Software Engineering": return <Trophy className="w-4 h-4 text-amber-400" />;
      case "Mobile & ML": return <Smartphone className="w-4 h-4 text-indigo-400" />;
      default: return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl glass-card glass-card-hover border p-6 sm:p-8 space-y-6 transition-all ${
        project.interactiveType === "fraud"
          ? "border-cyan-500/20 hover:border-cyan-500/40"
          : project.interactiveType === "chess"
          ? "border-amber-500/20 hover:border-amber-500/40"
          : "border-blue-500/20 hover:border-blue-500/40"
      }`}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </span>
            <span className="text-xs font-mono text-slate-500">{project.period}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight pt-1">
            {project.title}
          </h3>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-medium transition-colors"
        >
          <span>{expanded ? "Masquer les détails" : "Explorer le projet"}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Short Summary */}
      <p className="text-sm text-slate-300 leading-relaxed">
        {project.shortDescription}
      </p>

      {/* Problem & Approach Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
          <span className="font-bold text-red-400 uppercase tracking-wider text-[10px]">Problématique</span>
          <p className="text-slate-300 leading-relaxed">{project.problem}</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
          <span className="font-bold text-cyan-400 uppercase tracking-wider text-[10px]">Approche Technique</span>
          <p className="text-slate-300 leading-relaxed">{project.approach}</p>
        </div>
      </div>

      {/* Technologies Badges */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Technologies Clés</span>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Custom Widgets (Pipeline or Chess Engine) */}
      {project.interactiveType === "fraud" && (
        <MlPipelineWidget type="fraud" />
      )}

      {project.interactiveType === "premier-league" && (
        <MlPipelineWidget type="premier-league" />
      )}

      {project.interactiveType === "chess" && (
        <ChessWidget />
      )}

      {/* Collapsible Expanded Highlights */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-4 border-t border-slate-800/80 space-y-3 overflow-hidden"
          >
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Points Forts & Réalisations
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
