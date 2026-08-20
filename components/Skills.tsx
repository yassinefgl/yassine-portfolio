"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Search, Sparkles, Database, Code2, Wrench, Layers, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/cvData";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "AI & Machine Learning": return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Data & Business Intelligence": return <Sparkles className="w-4 h-4 text-blue-400" />;
      case "Bases de Données": return <Database className="w-4 h-4 text-emerald-400" />;
      case "Génie Logiciel": return <Code2 className="w-4 h-4 text-indigo-400" />;
      case "Outils & Infrastructure": return <Wrench className="w-4 h-4 text-amber-400" />;
      default: return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  const categories = ["All", ...SKILL_CATEGORIES.map(c => c.categoryName)];

  const filteredSkillCategories = SKILL_CATEGORIES.map(cat => {
    if (activeCategory !== "All" && cat.categoryName !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0 && searchQuery) return null;

    return {
      ...cat,
      skills: searchQuery ? matchingSkills : cat.skills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-indigo-400 border border-indigo-500/20">
          <Cpu className="w-3.5 h-3.5" />
          <span>Stack Technique Complexe</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Technical <span className="text-gradient-cyan">Skills</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          L'ensemble des compétences informatiques, algorithmiques et décisionnelles directement issues du CV.
        </p>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input Filter */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher une techno..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
      </div>

      {/* Grid of Skill Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkillCategories.map((cat, idx) => (
          <motion.div
            key={cat!.categoryName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="rounded-2xl glass-card p-6 border border-slate-800/80 space-y-4 hover:border-blue-500/30 transition-all"
          >
            <div className="flex items-center gap-2.5 border-b border-slate-800/80 pb-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                {getCategoryIcon(cat!.categoryName)}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{cat!.categoryName}</h3>
                <p className="text-[11px] text-slate-400">{cat!.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {cat!.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-blue-600/15 text-slate-200 hover:text-blue-300 border border-slate-800 hover:border-blue-500/30 text-xs font-mono transition-all cursor-default"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
