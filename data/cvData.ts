export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  subject: string;
  tools: string[];
  description: string[];
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  specialty?: string;
  institution: string;
  location: string;
  period: string;
  distinction?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'AI / Machine Learning' | 'Software Engineering' | 'Data Science' | 'Mobile & ML';
  period: string;
  shortDescription: string;
  problem: string;
  approach: string;
  technologies: string[];
  highlights: string[];
  pipeline?: string[];
  interactiveType?: 'fraud' | 'premier-league' | 'chess' | 'fitgenius';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: string;
  iconName: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Yassine ELFOUGHALI",
  titles: [
    "Data Scientist",
    "AI Engineer",
    "Software Engineer"
  ],
  currentStatus: "Étudiant en Master 2 Base de Données et Intelligence Artificielle (M2 BDIA) à l'Université de Bourgogne Europe (Dijon)",
  location: "Dijon, France",
  phone: "+330759066735",
  formattedPhone: "+33 7 59 06 67 35",
  email: "elfoughaliyassine@gmail.com",
  github: "https://github.com/yassinefgl",
  linkedin: "https://linkedin.com",
  portfolioUrl: "https://yassine-portfolio-nine.vercel.app",
  heroTagline: "Building intelligent systems from data, algorithms and software.",
  aboutText: [
    "Étudiant en Master 2 en Base de Données et Intelligence Artificielle (M2 BDIA) à l'Université de Bourgogne Europe (Dijon), passionné par le développement d'algorithmes d'apprentissage automatique, le traitement de données complexes et la conception d'architectures logicielles performantes.",
    "Formé aux piliers fondamentaux de la Data Science, de l'IA et de l'Ingénierie Logicielle (mention Très Bien en Master 1 IS2IA et Mention Bien en Licence Ingénierie Logicielle), j'allie rigueur mathématique et excellence technique pour concevoir des solutions applicatives intelligentes.",
    "Joueur d'échecs passionné classé ELO 2200 (niveau Candidate Master), j'applique une réflexion stratégique, une grande faculté d'analyse et une gestion méthodique de la complexité dans tous mes projets informatiques."
  ],
  stats: [
    { label: "Classement Échecs", value: "2200 ELO", detail: "Réflexion stratégique & analyse" },
    { label: "Diplôme Actuel", value: "Master 2 BDIA", detail: "Université de Bourgogne Europe (Dijon)" },
    { label: "Expériences en Entreprise", value: "2 Stages", detail: "HPS (Data Science) & TELCO DEV (Full Stack)" },
    { label: "Projets Majeurs", value: "4 Projets", detail: "Fraud ML, Premier League AI, Chess Engine, FitGenius" }
  ],
  languages: [
    { name: "Français", level: "Niveau B2", percentage: 85 },
    { name: "Anglais", level: "Courant", percentage: 90 },
    { name: "Arabe", level: "Langue Maternelle", percentage: 100 }
  ],
  softSkills: [
    "Dynamisme",
    "Esprit d'équipe",
    "Motivation",
    "Créativité",
    "Résolution de problèmes complexes"
  ],
  interests: [
    { name: "Jeux d'échecs", detail: "ELO 2200 - Compétition & Analyse de parties" },
    { name: "Basket-ball", detail: "Esprit d'équipe, agilité et discipline" },
    { name: "Jeux vidéo", detail: "Réflexes, stratégie et immersion technologique" },
    { name: "Lecture", detail: "Veille technologique, algorithmes et ouvrages scientifiques" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "hps-data-scientist",
    role: "Data Scientist (Stage PFE)",
    company: "HPS : HIGHTECHPAYMENT SYSTEMS",
    location: "Casablanca, Maroc",
    period: "Juin 2024 – Août 2024 (3 Mois)",
    type: "Stage PFE",
    subject: "Détection Automatique des Fraudes Financières à l'aide du Machine Learning",
    tools: ["Python", "Jupyter Notebook", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib / Seaborn"],
    description: [
      "Conception et implémentation d'un système intelligent de détection automatique des transactions financières frauduleuses.",
      "Nettoyage, prétraitement et ingénierie des caractéristiques (feature engineering) sur des données transactionnelles massives.",
      "Entraînement et comparaison de modèles de Machine Learning supervisés et non supervisés pour optimiser la détection des anomalies.",
      "Évaluation rigoureuse des performances des modèles (Matrice de confusion, Courbe ROC-AUC, Précision / Rappel)."
    ],
    icon: "ShieldAlert"
  },
  {
    id: "telco-dev-fullstack",
    role: "Développeur Full Stack",
    company: "TELCO DEV",
    location: "Fès, Maroc",
    period: "Juillet 2023 – Septembre 2023 (2 Mois)",
    type: "Stage Professionnel",
    subject: "Développement d'une Application Web de Gestion des Ressources Humaines (RH)",
    tools: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "Architecture MVC"],
    description: [
      "Conception et développement complet d'un module d'application web de gestion du personnel et des ressources humaines.",
      "Création de la base de données relationnelle MySQL et modélisation des entités (employés, congés, fiches de paie).",
      "Développement de l'interface utilisateur responsive et intégration des scripts backend PHP."
    ],
    icon: "Code2"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "m2-bdia-dijon",
    degree: "Master 2 - Base de Données et Intelligence Artificielle (BDIA)",
    specialty: "Intelligence Artificielle & Data Engineering",
    institution: "Université de Bourgogne Europe",
    location: "Dijon, France",
    period: "2026 – 2027",
    description: "Spécialisation avancée en bases de données distribuées, bases de données NoSQL, apprentissage automatique, analyse de données massives et systèmes d'intelligence artificielle."
  },
  {
    id: "m1-info-dijon",
    degree: "Master 1 - Informatique",
    specialty: "Génie Informatique & Algorithmique",
    institution: "Université de Bourgogne Europe",
    location: "Dijon, France",
    period: "2025 – 2026",
    description: "Formation approfondie en systèmes d'information, algorithmes complexes, génie logiciel et fondamentaux de l'informatique."
  },
  {
    id: "m1-is2ia-esisa",
    degree: "Master 1 - Ingénierie des Systèmes d'Information et l'Intelligence Artificielle (IS2IA)",
    specialty: "Systèmes d'Information & Intelligence Artificielle",
    institution: "École Supérieure d'Ingénierie en Sciences Appliquées (ESISA)",
    location: "Fès, Maroc",
    period: "2024 – 2025",
    distinction: "Mention : Très bien",
    description: "Apprentissage approfondi du Machine Learning, Deep Learning, Data Warehousing, Business Intelligence, modélisation avancée UML/Merise et génie logiciel."
  },
  {
    id: "licence-il-esisa",
    degree: "Licence - Ingénierie Logicielle (IL)",
    specialty: "Génie Logiciel & Développement d'Applications",
    institution: "École Supérieure d'Ingénierie en Sciences Appliquées (ESISA)",
    location: "Fès, Maroc",
    period: "2023 – 2024",
    distinction: "Mention : Bien",
    description: "Solide formation en programmation orientée objet (Java, C/C++, C#), conception de bases de données (SQL Server, Oracle), développement web et méthodologies agiles."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "fraud-detection",
    title: "Automatic Financial Fraud Detection",
    category: "AI / Machine Learning",
    period: "2024 (Stage PFE HPS)",
    shortDescription: "Système de détection automatique des fraudes financières par Machine Learning sous Python.",
    problem: "Les transactions financières massives nécessitent une identification quasi temps-réel des comportements anormaux et des tentatives de fraude pour réduire les pertes bancaires sans impacter les utilisateurs légitimes.",
    approach: "Construction d'un pipeline complet comprenant le prétraitement de données déséquilibrées, l'ingénierie des variables transactionnelles, et l'entraînement de classifieurs de Machine Learning sous Jupyter Notebook.",
    technologies: ["Python", "Jupyter Notebook", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    highlights: [
      "Praitraitement et gestion du déséquilibre des classes (imbalanced data)",
      "Extraction de features comportementales transactionnelles",
      "Évaluation comparative de modèles supervisés et détection d'anomalies",
      "Visualisation synthétique des matrices de confusion et des métriques de performance"
    ],
    pipeline: ["Data Ingestion", "Cleaning & Normalization", "Feature Engineering", "Model Training", "Evaluation & ROC-AUC"],
    interactiveType: "fraud"
  },
  {
    id: "premier-league-prediction",
    title: "Premier League Outcome Prediction",
    category: "Data Science",
    period: "2024 – 2025 (Projet Académique M1)",
    shortDescription: "Pipeline de collecte, analyse exploratoire et modélisation ML/DL pour prédire les résultats de la Premier League.",
    problem: "Prédire l'issue des matchs de football professionnel (Premier League saisons 2024-2025) en capturant la dynamique d'équipe, les formes récentes, les statistiques de possession et l'historique des confrontations.",
    approach: "Collecte et préparation structurée des données de matchs, analyse exploratoire approfondie (EDA), feature engineering temporel, et entraînement combiné de modèles Machine Learning et réseaux de neurones Deep Learning.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow / PyTorch"],
    highlights: [
      "Collecte et nettoyage automatisé des données des saisons 2024-2025",
      "Analyse exploratoire des données (EDA) et corrélations statistiques",
      "Ingénierie de variables temporelles (rolling averages, forme physique, ratio domicile/extérieur)",
      "Entraînement et optimisation d'hyperparamètres de modèles ML & DL"
    ],
    pipeline: ["Data Collection (2024-25)", "Data Preparation & EDA", "Feature Engineering", "ML & DL Model Training", "Model Evaluation & Tuning"],
    interactiveType: "premier-league"
  },
  {
    id: "chess-game-ai",
    title: "Chess Game & Chess AI Engine",
    category: "Software Engineering",
    period: "2025 – 2026 (Projet Académique M1)",
    shortDescription: "Jeu d'échecs complet en Java avec GUI, intégration du moteur Stockfish, données Lichess et détection de triche.",
    problem: "Concevoir une application d'échecs robuste respectant l'ensemble des règles de la FIDE, capable d'analyser la qualité des coups en temps réel et d'identifier les profils de jeu suspects grâce aux données Lichess.",
    approach: "Développement orienté objet propre en Java, moteur d'analyse s'interfaçant avec le moteur de classe mondiale Stockfish via le protocole UCI, parsing de parties Lichess et algorithme d'analyse d'évaluation de coups pour détecter les anomalies de précision typiques de la triche informatique.",
    technologies: ["Java", "Object-Oriented Programming", "Stockfish Engine API", "Lichess Data API", "Java Swing / JavaFX", "Chess Analysis Algorithms"],
    highlights: [
      "Implémentation rigoureuse de la logique et des règles d'échecs (échec, mat, roque, en passant, promotion)",
      "Intégration du moteur Stockfish pour l'évaluation instantanée des positions (+/- centipawns)",
      "Exploitation et parsing de bases de données de parties Lichess au format PGN/JSON",
      "Algorithme de détection de triche basé sur la corrélation des coups avec l'engine principal",
      "Conception orientée objet modulaire et extensible"
    ],
    interactiveType: "chess"
  },
  {
    id: "fitgenius",
    title: "FitGenius — Smart Health Mobile App",
    category: "Mobile & ML",
    period: "2023 – 2024 (PFA Licence IL)",
    shortDescription: "Application mobile intelligente de suivi de santé intégrant un algorithme de détection du risque de diabète.",
    problem: "Fournir un outil mobile intuitif permettant aux utilisateurs de suivre leurs constantes de santé quotidiennes tout en évaluant de manière préventive le risque de diabète sur la base de paramètres physiologiques.",
    approach: "Création d'une application mobile moderne en Dart/Flutter reliée à un backend Firebase et à un modèle de Machine Learning Python prédéployé pour la classification des risques de santé.",
    technologies: ["Flutter", "Dart", "Python", "Firebase", "Machine Learning", "REST API"],
    highlights: [
      "Interface utilisateur réactive et multiplateforme développée en Flutter/Dart",
      "Module de prédiction du risque de diabète via un modèle de classification Machine Learning",
      "Authentification sécurisée et stockage des métriques en temps réel sur Firebase",
      "Tableau de bord ergonomique de suivi d'activité et recommandations de santé"
    ],
    interactiveType: "fitgenius"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cisco-data-science",
    name: "Introduction to Data Science",
    issuer: "CISCO Networking Academy",
    year: "2024",
    category: "Data Science",
    iconName: "Database"
  },
  {
    id: "cognitive-class-ds101",
    name: "Data Science 101",
    issuer: "Cognitive Class (IBM Developer Skills Network)",
    year: "2024",
    category: "Data Science",
    iconName: "BrainCircuit"
  },
  {
    id: "hp-life-agile",
    name: "Agile Project Management",
    issuer: "HP LIFE",
    year: "2024",
    category: "Management & Methods",
    iconName: "Kanban"
  },
  {
    id: "hp-life-data-analytics",
    name: "Data Science & Analytics",
    issuer: "HP LIFE",
    year: "2024",
    category: "Data Science & Analytics",
    iconName: "BarChart3"
  },
  {
    id: "cisco-linux-essentials",
    name: "Linux Essentials",
    issuer: "CISCO Networking Academy",
    year: "2022",
    category: "Systems & Infrastructure",
    iconName: "Terminal"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "AI & Machine Learning",
    description: "Modélisation prédictive, algorithmes d'apprentissage et analyse statistique",
    skills: [
      { name: "Python" },
      { name: "R" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "XGBoost" },
      { name: "SVM (Support Vector Machines)" },
      { name: "Régression (Linéaire & Logistique)" },
      { name: "K-means Clustering" },
      { name: "Séries Temporelles" },
      { name: "Data Mining" },
      { name: "Analyse numérique" },
      { name: "Recherche Opérationnelle" }
    ]
  },
  {
    categoryName: "Data & Business Intelligence",
    description: "Traitement, transformation et valorisation visuelle des données d'entreprise",
    skills: [
      { name: "Data Science" },
      { name: "Data Analysis" },
      { name: "Business Intelligence" },
      { name: "Power BI" },
      { name: "ETL (Talend)" },
      { name: "Data Warehouse" },
      { name: "Gestion de projets analytiques" }
    ]
  },
  {
    categoryName: "Bases de Données",
    description: "Conception, requêtage et administration de bases de données relationnelles et NoSQL",
    skills: [
      { name: "SQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "Oracle Database" },
      { name: "NoSQL" },
      { name: "Firebase" }
    ]
  },
  {
    categoryName: "Génie Logiciel",
    description: "Développement d'applications orientées objet, web et mobiles",
    skills: [
      { name: "Java" },
      { name: "C / C++" },
      { name: "C#" },
      { name: "Python" },
      { name: "Dart (Flutter)" },
      { name: "JavaScript / Node.js" },
      { name: "React.js" },
      { name: "Spring Boot" },
      { name: "AJAX & XML" },
      { name: "HTML5 & CSS3" }
    ]
  },
  {
    categoryName: "Outils & Infrastructure",
    description: "Environnements d'analyse, conteneurisation et calcul scientifique",
    skills: [
      { name: "Docker" },
      { name: "Jupyter Notebook" },
      { name: "RStudio" },
      { name: "Matlab / Simulink" },
      { name: "Tanagra" }
    ]
  },
  {
    categoryName: "Conception & Méthodologies",
    description: "Modélisation des systèmes d'information et conduite de projet",
    skills: [
      { name: "Modélisation SI (Merise)" },
      { name: "UML" },
      { name: "Design Patterns" },
      { name: "Méthodes Agiles (Scrum)" }
    ]
  }
];
