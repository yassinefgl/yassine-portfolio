"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Trophy, Gamepad2, BookOpen, HeartHandshake, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/cvData";

export const BeyondCode: React.FC = () => {
  const getInterestIcon = (name: string) => {
    if (name.includes("echec")) return <Trophy className="w-5 h-5 text-amber-400" />;
    if (name.includes("basket")) {
      return (
        <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeWidth="1.5" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          <path strokeWidth="1.5" d="M2 12h20" />
        </svg>
      );
    }
    if (name.includes("vidéo")) return <Gamepad2 className="w-5 h-5 text-purple-400" />;
    return <BookOpen className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section id="beyond-code" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-400 border border-purple-500/20">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Dimension Humaine & Passion</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Beyond <span className="text-gradient-cyan">Code</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Langues maîtrisées, classement aux échecs et centres d'intérêt personnels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 space-y-6 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Compétences Linguistiques</h3>
                <p className="text-xs text-slate-400">Pratique professionnelle multi-langues</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {PERSONAL_INFO.languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-blue-400">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Capacité de communication :</span> Anglais courant pour la documentation scientifique & français B2 pour les environnements professionnels.
          </div>
        </motion.div>

        {/* Interests & Chess ELO 2200 Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {PERSONAL_INFO.interests.map((interest, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl glass-card glass-card-hover border space-y-3 flex flex-col justify-between ${
                interest.name.includes("echec")
                  ? "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50"
                  : "border-slate-800 hover:border-blue-500/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  {getInterestIcon(interest.name)}
                </div>
                {interest.name.includes("echec") && (
                  <span className="text-xs font-black font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    CM LEVEL
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-base font-bold text-white capitalize">{interest.name}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{interest.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
