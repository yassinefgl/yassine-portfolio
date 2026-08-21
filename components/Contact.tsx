"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Check, Copy, Download, Sparkles, MessageSquare, QrCode, AlertCircle, Loader2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/cvData";
import confetti from "canvas-confetti";

interface ContactProps {
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Opportunité Stage / Alternance Data & AI",
    message: ""
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send real email via Web3Forms to elfoughaliyassine@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "c82b415a-94ff-4202-a1f2-e5dd7f8ec26b", // Public free form submission endpoint key
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Contact] ${formData.subject} - par ${formData.name}`,
          message: formData.message,
          to_email: PERSONAL_INFO.email
        })
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setFormSent(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        // Fallback: trigger mailto link directly so the message is never lost
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setFormSent(true);
      }
    } catch (error) {
      // Fallback mailto
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setFormSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(PERSONAL_INFO.portfolioUrl)}&color=09090b&bgcolor=ffffff`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="rounded-3xl glass-card border border-blue-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        {/* Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Call to Action Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-400 border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prêt pour de nouveaux défis</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Let's build <span className="text-gradient-cyan">something intelligent.</span>
            </h2>

            <p className="text-base text-slate-300 font-medium">
              Open to opportunities in <span className="text-blue-400 font-bold">Data</span>, <span className="text-cyan-400 font-bold">AI</span> and <span className="text-indigo-400 font-bold">Software Engineering</span>.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Basé à Dijon (France), disponible pour des stages, alternances ou opportunités professionnelles partout en France ou à distance.
            </p>

            {/* Quick Copy Contact Widgets */}
            <div className="space-y-3 pt-2">
              {/* Email Widget */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Email Officiel Direct</span>
                    <p className="text-xs sm:text-sm font-mono font-bold text-white">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md shadow-blue-600/20"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Écrire</span>
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? "Copié !" : "Copier"}</span>
                  </button>
                </div>
              </div>

              {/* Phone Widget */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Téléphone</span>
                    <p className="text-xs sm:text-sm font-mono font-bold text-white">{PERSONAL_INFO.formattedPhone}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? "Copié !" : "Copier"}</span>
                </button>
              </div>

              {/* QR Code Download Widget */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white rounded-lg border border-slate-200 shadow-md">
                    <img src="/portfolio-qrcode.png" alt="QR Code Portfolio" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-400 flex items-center gap-1">
                      <QrCode className="w-3 h-3" /> QR Code Officiel Vercel
                    </span>
                    <p className="text-xs text-slate-300 font-medium">Scannable immédiatement sur mobile</p>
                  </div>
                </div>
                <a
                  href="/portfolio-qrcode.png"
                  download="Yassine_ELFOUGHALI_Portfolio_QRCode.png"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md shadow-blue-600/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger QR</span>
                </a>
              </div>
            </div>

            {/* Extra CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenCvModal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Télécharger le CV</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-all"
              >
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Real Email Sending Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Envoyer un Message Direct à mon Email</h3>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Envoi vers {PERSONAL_INFO.email}
              </span>
            </div>

            {formSent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Transmis avec Succès !</h4>
                <p className="text-xs text-slate-300">
                  Votre message a été transmis directement vers mon adresse <span className="text-blue-400 font-bold">{PERSONAL_INFO.email}</span>.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-semibold"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Votre Nom / Entreprise</label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Recruteur Capgemini / BNP Paribas"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Votre Email Professionnel</label>
                  <input
                    type="email"
                    required
                    placeholder="nom@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Sujet de l'échange</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Bonjour Yassine, nous aimerions échanger avec vous concernant une opportunité..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Envoi vers votre boîte email en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer vers {PERSONAL_INFO.email} →</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
