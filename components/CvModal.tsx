"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS } from "@/data/cvData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-blue-500/20 shadow-2xl p-6 sm:p-8 text-slate-200 print:max-h-none print:p-0 print:border-none print:shadow-none print:bg-white print:text-black"
        >
          {/* Header Controls (Hidden in Print) */}
          <div className="sticky top-0 z-20 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Curriculum Vitae — {PERSONAL_INFO.name}</h3>
                <p className="text-xs text-slate-400">Source officielle de vérité d'après le CV vérifié</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-600/20"
              >
                <Download className="w-4 h-4" />
                <span>Imprimer / Télécharger PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Content Document */}
          <div className="space-y-8 text-sm">
            {/* Header Section with Profile Photo & Large HD Scannable QR Code */}
            <div className="border-b border-slate-800 pb-6 print:border-slate-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-blue-500/40 shadow-lg flex-shrink-0">
                    <img src="/yassine.png" alt="Yassine ELFOUGHALI" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-sm font-semibold text-blue-400 print:text-blue-700 mt-1">
                      {PERSONAL_INFO.titles.join(" · ")}
                    </p>
                    <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                      {PERSONAL_INFO.currentStatus}
                    </p>
                  </div>
                </div>

                {/* QR Code & Contact Info */}
                <div className="flex items-center gap-5 text-xs text-slate-400 print:text-slate-700">
                  <div className="text-right space-y-1 hidden sm:block">
                    <p><span className="text-slate-200 print:text-black font-semibold">Téléphone:</span> {PERSONAL_INFO.formattedPhone}</p>
                    <p><span className="text-slate-200 print:text-black font-semibold">Email:</span> {PERSONAL_INFO.email}</p>
                    <p><span className="text-slate-200 print:text-black font-semibold">Localisation:</span> {PERSONAL_INFO.location}</p>
                    <p><span className="text-slate-200 print:text-black font-semibold">Échecs:</span> ELO 2200</p>
                  </div>

                  {/* Large High-Contrast Scannable QR Code */}
                  <div className="p-2.5 rounded-xl bg-white border-2 border-blue-500/40 shadow-xl flex flex-col items-center gap-1.5 text-center text-slate-900 group hover:scale-110 transition-transform">
                    <img src="/portfolio-qrcode.png" alt="QR Code Portfolio Yassine" className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />
                    <span className="text-[10px] font-extrabold text-slate-900 tracking-tight">Scanner Portfolio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formation / Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-400 print:text-blue-700" />
                <h2 className="text-base font-bold uppercase tracking-wider text-white print:text-black">Formation</h2>
              </div>
              <div className="space-y-4">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-bold text-white print:text-black text-sm">{edu.degree}</h3>
                        {edu.specialty && <p className="text-xs text-blue-400 print:text-blue-800 font-medium">{edu.specialty}</p>}
                        <p className="text-xs text-slate-300 print:text-slate-700">{edu.institution} — {edu.location}</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 print:bg-slate-200 print:text-slate-800">
                        {edu.period}
                      </span>
                    </div>
                    {edu.distinction && (
                      <span className="inline-block mt-2 text-xs font-semibold text-emerald-400 print:text-emerald-700">
                        ★ {edu.distinction}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Expérience Professionnelle */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-blue-400 print:text-blue-700" />
                <h2 className="text-base font-bold uppercase tracking-wider text-white print:text-black">Expérience Professionnelle</h2>
              </div>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-bold text-white print:text-black text-sm">{exp.role}</h3>
                        <p className="text-xs text-blue-400 print:text-blue-800 font-semibold">{exp.company} — {exp.location}</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300 print:bg-slate-200 print:text-slate-800">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-300 print:text-slate-800 mt-2">
                      <span className="text-slate-400">Sujet:</span> {exp.subject}
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-400 print:text-slate-700">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tools.map((tool, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 print:bg-slate-200 print:text-slate-800">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-blue-400 print:text-blue-700" />
                <h2 className="text-base font-bold uppercase tracking-wider text-white print:text-black">Certifications</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between print:bg-slate-50 print:border-slate-200">
                    <div>
                      <h4 className="text-xs font-bold text-white print:text-black">{cert.name}</h4>
                      <p className="text-[11px] text-slate-400 print:text-slate-600">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-bold text-blue-400 print:text-blue-700 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Langues & Centres d'intérêt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-800 pt-6 print:border-slate-300">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-slate-600 mb-2">Langues</h3>
                <div className="space-y-1.5 text-xs">
                  {PERSONAL_INFO.languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between text-slate-300 print:text-slate-800">
                      <span>{lang.name}</span>
                      <span className="font-semibold text-blue-400 print:text-blue-700">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-slate-600 mb-2">Centres d'intérêt</h3>
                <div className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                  {PERSONAL_INFO.interests.map((item, idx) => (
                    <p key={idx}>
                      <span className="font-semibold text-white print:text-black">• {item.name}:</span> {item.detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
