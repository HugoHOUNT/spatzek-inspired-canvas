
import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Analyse prédictive des données clients",
    description: "Développement d'un système de prédiction basé sur des algorithmes d'apprentissage automatique pour anticiper les comportements clients.",
    category: "Data",
    technologies: ["Python", "TensorFlow", "Hadoop", "Spark"],
    year: 2023,
    involvement: "Projet solo",
    status: "Terminé",
    image: "/placeholder.svg",
    links: {
      demo: "https://example.com/demo",
      source: "https://github.com/username/project1"
    }
  },
  {
    id: 2,
    title: "Dashboard de suivi de performance",
    description: "Création d'un tableau de bord interactif permettant de suivre en temps réel les performances des campagnes marketing.",
    category: "Data",
    technologies: ["React", "JavaScript", "Tailwind", "SQL"],
    year: 2023,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: "/placeholder.svg",
    links: {
      website: "https://example.com",
      source: "https://github.com/username/project2"
    }
  },
  {
    id: 3,
    title: "Automatisation du reporting",
    description: "Mise en place d'un système automatisé d'extraction et d'analyse des données pour optimiser les processus internes.",
    category: "Automatisation",
    technologies: ["Python", "SQL", "JavaScript"],
    year: 2022,
    involvement: "Travail d'équipe",
    status: "Terminé",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Migration vers une architecture Big Data",
    description: "Participation à la migration des systèmes existants vers une architecture Big Data, incluant un data lake.",
    category: "Data",
    technologies: ["Hadoop", "Spark", "MongoDB"],
    year: 2022,
    involvement: "Contributeur secondaire",
    status: "Terminé",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Portfolio personnel",
    description: "Création d'un portfolio moderne avec React et Tailwind pour présenter mes projets et compétences.",
    category: "Site web",
    technologies: ["React", "TypeScript", "Tailwind"],
    year: 2024,
    involvement: "Projet solo",
    status: "En cours",
    image: "/placeholder.svg",
    links: {
      source: "https://github.com/username/portfolio"
    }
  },
  {
    id: 6,
    title: "Application mobile de fitness",
    description: "Développement d'une application mobile pour suivre ses exercices et ses progrès en salle de sport.",
    category: "Application mobile",
    technologies: ["React", "JavaScript", "Node.js"],
    year: 2021,
    involvement: "Travail d'équipe",
    status: "MVP",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Refonte UI/UX site e-commerce",
    description: "Refonte complète de l'interface utilisateur d'un site de e-commerce pour améliorer l'expérience client.",
    category: "Design",
    technologies: ["Figma", "HTML/CSS", "JavaScript"],
    year: 2023,
    involvement: "Projet solo",
    status: "Terminé",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Système de gestion des stocks",
    description: "Création d'une application web pour gérer l'inventaire et les stocks d'une entreprise.",
    category: "Site web",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    year: 2024,
    involvement: "Projet solo",
    status: "Prototype",
    image: "/placeholder.svg"
  }
];
