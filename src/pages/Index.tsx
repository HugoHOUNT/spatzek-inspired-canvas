import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import { ChevronDown, Github, Linkedin, Mail, Camera, Database, BrainCircuit, BarChart4, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CanvasAnimation from '@/components/CanvasAnimation';
import Navbar from '@/components/Navbar';

// Data for projects
const projects = [
  {
    id: 1,
    title: "Analyse prédictive des données clients",
    category: "Big Data & IA",
    description: "Développement d'un système de prédiction basé sur des algorithmes d'apprentissage automatique pour anticiper les comportements clients et optimiser les campagnes marketing.",
    tags: ["Python", "TensorFlow", "Hadoop", "Spark"],
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 2,
    title: "Dashboard de suivi de performance",
    category: "Data Visualisation",
    description: "Création d'un tableau de bord interactif permettant de suivre en temps réel les performances des campagnes marketing et d'en extraire des insights actionnables.",
    tags: ["D3.js", "React", "SQL", "Tableau"],
    icon: <BarChart4 className="w-8 h-8 text-purple-400" />
  },
  {
    id: 3,
    title: "Automatisation du reporting",
    category: "IA & Analyse de données",
    description: "Mise en place d'un système automatisé d'extraction et d'analyse des données pour faciliter la prise de décision et optimiser les processus internes.",
    tags: ["Python", "Pandas", "PowerBI", "Automation"],
    icon: <Sparkles className="w-8 h-8 text-pink-400" />
  },
  {
    id: 4,
    title: "Migration vers une architecture Big Data",
    category: "Big Data",
    description: "Participation à la migration des systèmes existants vers une architecture Big Data, incluant la mise en place d'un data lake et l'optimisation des flux de données.",
    tags: ["Hadoop", "Spark", "MongoDB", "ETL"],
    icon: <Database className="w-8 h-8 text-indigo-400" />
  },
];

// Data for experience
const experiences = [
  {
    id: 1,
    title: "Data & Web Analyst",
    company: "D-Rating",
    period: "Sept 2022 - Présent",
    description: "Conception, développement et maintenance de tableaux de bord analytiques. Extraction et analyse de données pour évaluer la transformation digitale des entreprises. Automatisation des processus de collecte et traitement de données."
  },
  {
    id: 2,
    title: "Chef de Projet Digital",
    company: "Matrice",
    period: "Jan 2022 - Août 2022",
    description: "Gestion de projets digitaux et innovation. Création et analyse de KPIs, réalisation de dashboards et reporting pour le suivi des performances."
  },
  {
    id: 3,
    title: "Master 2 en Intelligence Artificielle et Big Data",
    company: "EFREI Paris",
    period: "2022 - 2023",
    description: "Formation en alternance spécialisée en intelligence artificielle, machine learning, deep learning et technologies Big Data. Projets pratiques sur le traitement de données massives."
  },
];

// Component for the animated section divider
const SectionDivider = () => (
  <div className="flex justify-center py-12">
    <div className="w-12 h-12 rounded-full bg-portfolio-dark border border-portfolio-accent flex items-center justify-center animate-pulse-slow">
      <ChevronDown className="text-portfolio-accent w-6 h-6" />
    </div>
  </div>
);

const Index = () => {
  const navigate = useNavigate(); // Initialiser useNavigate

  // Refs for sections
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  // Animation on scroll function
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Target all elements with the animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-light dark:bg-portfolio-dark text-portfolio-dark dark:text-portfolio-light overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <CanvasAnimation />

      {/* Hero section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 py-24 md:py-0">
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
            <span className="text-gradient">Hountondji Hugo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300 animate-slide-up">
            Expert en Intelligence Artificielle, Big Data et Data Analyse
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 text-lg"
              onClick={() => navigate('/projects')} // Rediriger vers la page "Projets"
            >
              Découvrir mes projets
            </Button>
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white py-2 px-6 text-lg"
              onClick={() => navigate('/contact')} // Optionnel : rediriger vers "Contact"
            >
              Me contacter
            </Button>
          </div>
          <div className="flex justify-center gap-6 animate-fade-in">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
          <ChevronDown className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center border-t border-gray-200 dark:border-white/10">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hountondji Hugo. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Index;
