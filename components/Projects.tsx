"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/cvData";
import { ProjectCard } from "./ProjectCard";
import { FolderGit2, Sparkles } from "lucide-react";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI / Machine Learning", "Data Science", "Software Engineering", "Mobile & ML"];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-400 border border-cyan-500/20">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Real World Systems & Machine Learning</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Featured <span className="text-gradient-cyan">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Une sélection de mes travaux majeurs en Machine Learning, Data Science, Ingénierie Logicielle et applications intelligentes.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === cat
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25"
                : "glass-pill text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
