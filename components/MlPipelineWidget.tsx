"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Filter, Cpu, BarChart3, CheckCircle2, ChevronRight, Activity } from "lucide-react";

interface PipelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tech: string[];
}

interface MlPipelineWidgetProps {
  type: "fraud" | "premier-league";
}

export const MlPipelineWidget: React.FC<MlPipelineWidgetProps> = ({ type }) => {
  const [activeStep, setActiveStep] = useState(0);

  const fraudSteps: PipelineStep[] = [
    {
      stepNumber: 1,
      title: "Data Ingestion & Extraction",
      subtitle: "Collecte des flux transactionnels HPS",
      description: "Ingestion des données brutes de paiement bancaire présentant un déséquilibre sévère de classes (faible proportion de fraudes avérées).",
      details: ["Chargement via Python & Pandas", "Analyse de la distribution des transactions", "Identification des valeurs aberrantes"],
      tech: ["Python", "Pandas", "Jupyter"]
    },
    {
      stepNumber: 2,
      title: "Preprocessing & Data Cleaning",
      subtitle: "Nettoyage & Normalisation des variables",
      description: "Imputation des données manquantes, suppression des bruits et normalisation robuste des montants financiers.",
      details: ["StandardScaler / RobustScaler", "Traitement des valeurs manquantes", "Encodage des variables catégorielles"],
      tech: ["Scikit-Learn", "NumPy"]
    },
    {
      stepNumber: 3,
      title: "Feature Engineering Transactionnel",
      subtitle: "Extraction de variables comportementales",
      description: "Création d'indicateurs de risque : fréquence de débit, écart par rapport au comportement habituel, vélocité et localisation géographique.",
      details: ["Calcul des délais inter-transactions", "Ratios de montants par utilisateur", "Features d'agrégation temporelle"],
      tech: ["Pandas", "Feature Science"]
    },
    {
      stepNumber: 4,
      title: "Model Training & Classifier Search",
      subtitle: "Entraînement des modèles ML supervisés",
      description: "Entraînement de plusieurs algorithmes de classification (Régression Logistique, SVM, Arbres de Décision, XGBoost).",
      details: ["Cross-validation Stratifiée (k-fold)", "Techniques de re-échantillonnage (SMOTE / Undersampling)", "Réglage des hyperparamètres"],
      tech: ["Scikit-Learn", "XGBoost", "SVM"]
    },
    {
      stepNumber: 5,
      title: "Model Evaluation & ROC-AUC",
      subtitle: "Validation des performances anti-fraude",
      description: "Évaluation multicritères axée sur la minimisation des faux négatifs (fraudes manquées) tout en maintenant un faible taux de faux positifs.",
      details: ["Analyse de la courbe ROC-AUC", "Calcul de la Matrice de Confusion", "Évaluation Précision vs Rappel (Recall)"],
      tech: ["Matplotlib", "Seaborn", "Scikit-Learn"]
    }
  ];

  const premierLeagueSteps: PipelineStep[] = [
    {
      stepNumber: 1,
      title: "Data Collection (2024-2025)",
      subtitle: "Collecte des données de matchs Premier League",
      description: "Agrégation automatisée des données historiques de matchs, statistiques d'équipes et performances individuelles des saisons 2024-2025.",
      details: ["Scraping & APIs de données sportives", "Agrégation des tirs, possession et fautes", "Structure de dataset temporel"],
      tech: ["Python", "Pandas", "Requests"]
    },
    {
      stepNumber: 2,
      title: "Exploratory Data Analysis (EDA)",
      subtitle: "Analyse exploratoire & corrélations",
      description: "Étude des corrélations statistiques entre les métriques de jeu (possession, tirs cadrés, corners) et l'issue finale de la rencontre (Victoire/Nul/Défaite).",
      details: ["Matrices de corrélation de Pearson", "Distribution des buts marqués/encaissés", "Visualisations de distributions"],
      tech: ["Seaborn", "Matplotlib", "NumPy"]
    },
    {
      stepNumber: 3,
      title: "Temporal Feature Engineering",
      subtitle: "Ingénierie des formes d'équipes",
      description: "Calcul de moyennes glissantes (Rolling Averages) sur les 5 derniers matchs, dynamique domicile/extérieur et historique H2H (Head to Head).",
      details: ["Moyennes glissantes sur 3/5/10 matchs", "Différentiel de buts récent", "Score d'avantage du terrain"],
      tech: ["Pandas", "Feature Engineering"]
    },
    {
      stepNumber: 4,
      title: "ML & Deep Learning Modeling",
      subtitle: "Entraînement des architectures prédictives",
      description: "Conception de modèles de Machine Learning (Gradient Boosting, Random Forest) et de réseaux de neurones (MLP / Deep Learning).",
      details: ["Machine Learning (XGBoost / LightGBM)", "Réseaux de neurones multi-couches (DL)", "Validation croisée temporelle"],
      tech: ["TensorFlow", "Scikit-Learn", "Python"]
    },
    {
      stepNumber: 5,
      title: "Evaluation & Model Optimization",
      subtitle: "Optimisation de la précision prédictive",
      description: "Mesure de la Log-Loss et de l'Accuracy sur le jeu de test inédit, affinement des probabilités de chaque issue de match.",
      details: ["Calcul de l'Accuracy & Brier Score", "Optimisation d'hyperparamètres", "Matrice de prédiction à 3 issues"],
      tech: ["Scikit-Learn", "Matplotlib"]
    }
  ];

  const steps = type === "fraud" ? fraudSteps : premierLeagueSteps;
  const currentStep = steps[activeStep];

  return (
    <div className="mt-6 p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-5">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Pipeline {type === "fraud" ? "Machine Learning Anti-Fraude" : "Prédictif Premier League"}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Étape {activeStep + 1} / {steps.length}
        </span>
      </div>

      {/* Steps Navigation Badges */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`py-2 px-1 rounded-lg text-center transition-all flex flex-col items-center gap-1 border ${
              activeStep === idx
                ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <span className={`text-[10px] font-bold ${activeStep === idx ? "text-blue-400" : "text-slate-500"}`}>
              STEP 0{s.stepNumber}
            </span>
            <span className="text-[11px] font-semibold truncate w-full hidden sm:block">
              {s.title.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Step Details Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="p-4 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-3"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="flex h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold items-center justify-center border border-blue-500/30">
                  {currentStep.stepNumber}
                </span>
                <span>{currentStep.title}</span>
              </h4>
              <p className="text-xs text-blue-400 font-medium">{currentStep.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {currentStep.tech.map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {currentStep.description}
          </p>

          <div className="space-y-1.5 pt-1">
            {currentStep.details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
