
import React from 'react';
import Navbar from '@/components/Navbar';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar 
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "IFG Executive Education",
      period: "Septembre 2022 - Aujourd'hui",
      roles: [
        {
          title: "Chef de Projet Qualité",
          responsibilities: [
            "Coordination et suivi des activités qualités",
            "Développement d'outils de suivi de la qualité des produits et services",
            "Evaluer les processus et identifier les lacunes et faiblesses",
            "Elaborer et mettre en œuvre des systèmes d'amélioration continue",
            "Surveiller et documenter les performances et le progrès en matière de qualité",
            "Collaborer avec les équipes et les managers responsables afin de s'assurer que les normes et les objectifs qualité sont respectés"
          ]
        },
        {
          title: "Assistant Outils et Process",
          responsibilities: [
            "Paramétrage des outils pédagogiques, commerciaux et de data visualisation",
            "Automatisation de process",
            "Recueil du besoin, la mise en place de solutions et accompagnement des utilisateurs",
            "Conception, création et suivi de rapport Power BI"
          ]
        }
      ]
    },
    {
      company: "NXP Semiconductors",
      period: "Avril à Juillet 2022",
      roles: [
        {
          title: "Stage - Data Analyst",
          responsibilities: [
            "Comprendre les besoins des équipes en termes de reporting. Analyse des types de données et outils disponibles.",
            "Développement d'une solution de reporting et d'analyse la plus automatisée possible (Power BI, R, SQL)",
            "Amélioré la visualisation des performances avec des KPIs dynamiques, facilitant la prise de décision."
          ]
        }
      ]
    },
    {
      company: "CA Lisieux Basket",
      period: "Novembre 2021 à Juillet 2022",
      roles: [
        {
          title: "Coach U15F",
          responsibilities: [
            "Management de l'équipe U15 Filles lors des rencontres de Championnat Départemental 2.",
            "Encadrement des rencontres des licenciés de l'association: table de marque, arbitrage et responsable de stage."
          ]
        }
      ]
    }
  ];

  const formations = [
    {
      degree: "MASTER - IA ET BIG DATA",
      school: "ESGI, École d'Informatique",
      period: "Septembre 2022 à Septembre 2024",
      skills: ["Deep Learning, Machine Learning, Modélisation", "Cloud (AWS, Azure) et Big Data", "Spark Core, Spark Streaming", "Gestion de projet"]
    },
    {
      degree: "BACHELOR - DIGITAL, BUSINESS & DATA (ALTERNANCE)",
      school: "ECE, École d'Ingénieurs",
      period: "Septembre 2018 à Juillet 2021",
      skills: [
        "Structuration et analyse de données de grandes tailles pour créer de l'information de gestion",
        "Marketing & Génération des données clients - CRM",
        "Gestion de projets informatiques"
      ]
    },
    {
      degree: "DUT STATISTIQUES ET INFORMATIQUE DÉCISIONNELLE",
      school: "Université GRAND OUEST NORMANDIE",
      period: "2020 - 2022",
      skills: [
        "Traitement, modélisation et analyse statistique des données",
        "Gestion de base de données"
      ]
    },
    {
      degree: "BACCALAURÉAT GÉNÉRAL SCIENTIFIQUE",
      school: "EFE Montaigne, spécialité SVT",
      period: "2019 - 2020",
      skills: ["Mention spécialité SVT"]
    }
  ];

  const competences = [
    { category: "Langages de programmation", skills: ["Python (NumPy, Pandas, Polars, Matplotlib, Scikit-learn, TensorFlow, PyTorch, LightGBM, PySpark)", "Rust", "Java", "C"] },
    { category: "Big Data & Cloud", skills: ["Spark", "Hadoop", "Azure", "AWS"] },
    { category: "SGBD et BI", skills: ["MySQL", "Power Query", "Power Pivot"] },
    { category: "Statistiques et Data Science", skills: ["R", "SAS"] },
    { category: "Data Visualisation", skills: ["Power BI", "Tableau Software"] },
    { category: "CRM", skills: ["Dynamics 365", "Salesforce"] },
    { category: "Bureautique", skills: ["Power Automate", "SharePoint", "Suite Office 365"] },
    { category: "Gestion de projet", skills: ["Pivotal Tracker", "GitHub", "GitLab"] },
    { category: "Modélisation de process", skills: ["Bonita"] }
  ];

  // Ordre chronologique inverté pour l'affichage
  const timelineItems = [
    ...experiences.map(exp => ({
      type: 'experience',
      title: exp.company,
      period: exp.period,
      details: exp.roles,
    })),
    ...formations.map(form => ({
      type: 'education',
      title: form.degree,
      subtitle: form.school,
      period: form.period,
      details: form.skills,
    }))
  ].sort((a, b) => {
    // Extraction de l'année de fin à partir de la période
    const getEndYear = (period) => {
      const match = period.match(/\d{4}$/);
      return match ? parseInt(match[0]) : 0;
    };
    // Pour le tri décroissant (plus récent d'abord)
    return getEndYear(b.period) - getEndYear(a.period);
  });

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mon <span className="text-gradient">Expérience</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Parcours professionnel et compétences
          </p>
          
          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Parcours Chronologique
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-indigo-400 dark:bg-indigo-600 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12 text-left' : 'md:ml-[50%] md:pl-12 text-left'}`}>
                      <Card className="relative overflow-hidden transition-all hover:shadow-lg">
                        <div className="absolute top-0 left-0 h-full w-1 bg-indigo-500"></div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">
                                {item.title}
                                {item.type === 'education' && 'subtitle' in item && (
                                  <span className="text-lg text-gray-600 dark:text-gray-400 block mt-1">{item.subtitle}</span>
                                )}
                              </CardTitle>
                            </div>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {item.period}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center gap-2 mt-2">
                            {item.type === 'experience' ? (
                              <Briefcase className="h-4 w-4 text-indigo-500" />
                            ) : (
                              <GraduationCap className="h-4 w-4 text-indigo-500" />
                            )}
                            <span>{item.type === 'experience' ? 'Expérience professionnelle' : 'Formation'}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {item.type === 'experience' ? (
                            <Accordion type="single" collapsible className="w-full">
                              {item.details.map((role, roleIndex) => (
                                <AccordionItem key={roleIndex} value={`role-${roleIndex}`}>
                                  <AccordionTrigger className="text-indigo-600 dark:text-indigo-400 font-medium">
                                    {role.title}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700 dark:text-gray-300">
                                      {role.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          ) : (
                            <div>
                              <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">COMPÉTENCES ACQUISES:</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                {item.details.map((skill, skillIndex) => (
                                  <li key={skillIndex}>{skill}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Sections d'expériences et formations précédentes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Expériences Professionnelles
            </h2>
            
            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold">{experience.company}</h3>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      {experience.period}
                    </Badge>
                  </div>
                  
                  <div className="space-y-6">
                    {experience.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="pl-0 md:pl-4 border-l-0 md:border-l-2 border-indigo-400 dark:border-indigo-600">
                        <h4 className="text-lg font-medium mb-3 text-indigo-600 dark:text-indigo-400">
                          {role.title}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1.5 text-gray-700 dark:text-gray-300">
                          {role.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Formations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Formations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formations.map((formation, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{formation.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{formation.school}</p>
                  <Badge variant="outline" className="mb-4 w-fit">
                    {formation.period}
                  </Badge>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">COMPÉTENCES ACQUISES:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {formation.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Compétences */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Compétences
            </h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Catégorie</TableHead>
                    <TableHead>Technologies / Outils</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {competences.map((comp, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{comp.category}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {comp.skills.map((skill, skillIndex) => (
                            skill && <Badge key={skillIndex} variant="secondary" className="mr-1 mb-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="py-8 px-6 text-center border-t border-gray-200 dark:border-white/10">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hountondji Hugo. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Experience;
