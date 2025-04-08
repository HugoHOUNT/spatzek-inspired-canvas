
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Camera, Database, BrainCircuit, BarChart4, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CanvasAnimation from '@/components/CanvasAnimation';
import Navbar from '@/components/Navbar';

// Data for projects
const projects = [
  {
    id: 1,
    title: "Analyse prédictive de données massives",
    category: "Big Data & IA",
    description: "Développement d'un système de prédiction basé sur des algorithmes d'apprentissage automatique pour anticiper les tendances du marché.",
    tags: ["Python", "TensorFlow", "Hadoop", "Spark"],
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 2,
    title: "Visualisation interactive de données complexes",
    category: "Data Visualisation",
    description: "Création d'un tableau de bord interactif permettant d'explorer et comprendre des ensembles de données multidimensionnels.",
    tags: ["D3.js", "React", "SQL", "Tableau"],
    icon: <BarChart4 className="w-8 h-8 text-purple-400" />
  },
  {
    id: 3,
    title: "Traitement du langage naturel",
    category: "IA & NLP",
    description: "Mise en place d'un système d'analyse sémantique pour extraire automatiquement les informations pertinentes de documents textuels.",
    tags: ["BERT", "Python", "SpaCy", "NLP"],
    icon: <Sparkles className="w-8 h-8 text-pink-400" />
  },
  {
    id: 4,
    title: "Système de recommandation personnalisé",
    category: "Machine Learning",
    description: "Développement d'un algorithme de recommandation basé sur les préférences utilisateurs et leur historique d'interaction.",
    tags: ["Python", "Scikit-learn", "MongoDB", "API"],
    icon: <Database className="w-8 h-8 text-indigo-400" />
  },
];

// Data for experience
const experiences = [
  {
    id: 1,
    title: "Data Scientist Senior",
    company: "Entreprise Tech",
    period: "2021 - Présent",
    description: "Conception et implémentation de modèles d'apprentissage automatique. Analyse de grands volumes de données pour en extraire des insights stratégiques."
  },
  {
    id: 2,
    title: "Analyste de données",
    company: "Agence Digitale",
    period: "2018 - 2021",
    description: "Développement de tableaux de bord analytiques. Optimisation des stratégies marketing basées sur les données clients."
  },
  {
    id: 3,
    title: "Master en Science des Données",
    company: "Université de Technologie",
    period: "2016 - 2018",
    description: "Spécialisation en intelligence artificielle et systèmes d'aide à la décision. Projet de fin d'études sur les algorithmes prédictifs."
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
    <div className="min-h-screen bg-portfolio-dark text-portfolio-light overflow-x-hidden">
      <Navbar />
      <CanvasAnimation />

      {/* Hero section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 py-24 md:py-0">
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-down">
            <span className="text-gradient">Portfolio</span> IA & Data
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slide-up">
            Expert en Intelligence Artificielle, Big Data et Data Visualisation
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <Button 
              className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white"
              onClick={() => {
                const projects = document.querySelector('#projects');
                projects?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Découvrir mes projets
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
              onClick={() => {
                const contact = document.querySelector('#contact');
                contact?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Me contacter
            </Button>
          </div>
          <div className="flex justify-center gap-4 animate-fade-in">
            <a href="#" className="text-gray-400 hover:text-portfolio-accent transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-portfolio-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-portfolio-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
          <ChevronDown className="text-portfolio-accent w-8 h-8" />
        </div>
      </section>

      <SectionDivider />

      {/* Projects section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-on-scroll">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 animate-on-scroll stagger-delay-1">
            Découvrez mes réalisations en IA, Big Data et Data Visualisation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-panel p-6 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-white/5">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="text-sm text-portfolio-accent mb-3">{project.category}</div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Experience section */}
      <section id="experience" ref={experienceRef} className="py-20 px-6 md:px-12 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-on-scroll">
            Mon <span className="text-gradient">Parcours</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 animate-on-scroll stagger-delay-1">
            Mon évolution académique et professionnelle
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative pl-8 animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-7 w-0.5 h-full -ml-px bg-portfolio-accent/30"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-portfolio-accent bg-portfolio-dark"></div>
                
                <div className="glass-panel p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-portfolio-accent px-2 py-1 rounded-full bg-white/5">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-lg mb-3 text-gray-300">{exp.company}</div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Interests section */}
      <section id="interests" ref={interestsRef} className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-on-scroll">
            Centres <span className="text-gradient">d'Intérêt</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 animate-on-scroll stagger-delay-1">
            Découvrez mes passions en dehors du monde numérique
          </p>
          
          <div className="glass-panel p-8 animate-on-scroll">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative h-72 w-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-24 h-24 text-white/30" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Photographie</h3>
                <p className="text-gray-300 mb-6">
                  La photographie est pour moi une façon de capturer la beauté du monde et de partager ma vision artistique. J'aime particulièrement la photographie de paysage et urbaine, où je cherche à mettre en valeur les jeux de lumière et les compositions uniques.
                </p>
                <p className="text-gray-300 mb-6">
                  Cette passion me permet de développer un œil attentif aux détails, une compétence que j'applique également dans mon travail d'analyse de données et de création de visualisations.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                  >
                    Voir ma galerie
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-on-scroll">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 animate-on-scroll stagger-delay-1">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
          
          <div className="max-w-lg mx-auto glass-panel p-8 animate-on-scroll stagger-delay-2">
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@example.com</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/username</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/username</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-white/10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Portfolio IA & Data. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Index;
