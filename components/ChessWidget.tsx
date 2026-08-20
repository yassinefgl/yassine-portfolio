"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldAlert, Database, Trophy, Zap, BarChart2, Eye, CheckCircle2 } from "lucide-react";

export const ChessWidget: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"stockfish" | "cheat-detection" | "lichess-data">("stockfish");

  // Interactive board representation (8x8 mini grid with piece unicode)
  const initialBoard = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", ".", "p", "p", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "p", ".", ".", "."],
    [".", ".", ".", ".", "P", ".", ".", "."],
    [".", ".", "N", ".", ".", ".", ".", "."],
    ["P", "P", "P", "P", ".", "P", "P", "P"],
    ["R", ".", "B", "Q", "K", "B", ".", "R"]
  ];

  const getPieceSymbol = (code: string) => {
    switch (code) {
      case "r": return "♜";
      case "n": return "♞";
      case "b": return "♝";
      case "q": return "♛";
      case "k": return "♚";
      case "p": return "♟";
      case "R": return "♖";
      case "N": return "♘";
      case "B": return "♗";
      case "Q": return "♕";
      case "K": return "♔";
      case "P": return "♙";
      default: return "";
    }
  };

  return (
    <div className="mt-6 p-5 rounded-xl bg-slate-950/90 border border-amber-500/20 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Java Chess Engine & Stockfish Analytics
            </h4>
            <p className="text-[11px] text-amber-400 font-semibold">
              Conçu par Yassine ELFOUGHALI — ELO 2200
            </p>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px]">
          <button
            onClick={() => setSelectedTab("stockfish")}
            className={`px-2.5 py-1 rounded font-medium transition-all ${
              selectedTab === "stockfish" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            Stockfish Engine
          </button>
          <button
            onClick={() => setSelectedTab("cheat-detection")}
            className={`px-2.5 py-1 rounded font-medium transition-all ${
              selectedTab === "cheat-detection" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            Détection de Triche
          </button>
          <button
            onClick={() => setSelectedTab("lichess-data")}
            className={`px-2.5 py-1 rounded font-medium transition-all ${
              selectedTab === "lichess-data" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            Données Lichess
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Left: Mini Chess Board Representation */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="grid grid-cols-8 gap-0 border border-amber-900/50 rounded overflow-hidden shadow-2xl">
            {initialBoard.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                const isDark = (rIdx + cIdx) % 2 === 1;
                return (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm font-bold select-none ${
                      isDark ? "bg-[#769656] text-slate-900" : "bg-[#eeeed2] text-slate-900"
                    } ${cell === "N" || cell === "P" ? "ring-2 ring-amber-400 ring-inset" : ""}`}
                  >
                    <span className={cell === cell.toLowerCase() && cell !== "." ? "text-black" : "text-slate-900"}>
                      {getPieceSymbol(cell)}
                    </span>
                  </div>
                );
              })
            )}
          </div>
          <div className="mt-2 text-[10px] text-slate-400 font-mono text-center">
            Position: 1. e4 e5 2. Nf3 Nc6 (Stockfish Eval: <span className="text-emerald-400 font-bold">+0.35</span>)
          </div>
        </div>

        {/* Right: Dynamic Tab Information */}
        <div className="md:col-span-7">
          <AnimatePresence mode="wait">
            {selectedTab === "stockfish" && (
              <motion.div
                key="stockfish"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Cpu className="w-4 h-4" />
                  <span>Analyse de Position Stockfish (Protocol UCI)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interfaçage du moteur Java avec l'API UCI Stockfish pour le calcul en profondeur des arbres de recherche (Minimax / Alpha-Beta Pruning).
                </p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Calcul d'évaluation en centipawns (+/- CP)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Recherche des meilleures lignes (Principal Variation - PV)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Calcul du Centipawn Loss Moyen (ACPL)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === "cheat-detection" && (
              <motion.div
                key="cheat-detection"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Algorithme de Détection de Triche</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Algorithme personnalisé analysant la concordance des coups joués avec le 1er choix du moteur sur des positions tactiquement complexes.
                </p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Seuil de corrélation avec l'Engine Top 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Détection de temps de réflexion anormalement constants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Analyse d'invariance face aux pièges tactiques</span>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === "lichess-data" && (
              <motion.div
                key="lichess-data"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                  <Database className="w-4 h-4" />
                  <span>Exploitation des Data Lichess</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Parsing et traitement massif de données de parties au format PGN et JSON pour alimenter les statistiques d'ouvertures et l'historique des joueurs.
                </p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Parsing optimisé de fichiers PGN volumineux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Calcul des fréquences de victoires par ouverture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Extraction des métadonnées de parties (ELO, time control)</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
