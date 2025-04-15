
import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Power BI de la Scolarité",
    description: "Afin de mieux piloter les parcours de certification et de diplomation, j'ai développé un outil de visualisation de données sous Power BI, intégrant l'ensemble des indicateurs clés des jurys. Ce projet m'a permis de transformer des données brutes en un levier stratégique d'aide à la décision.",
    category: "Data Visualisation",
    technologies: ["Power BI", "DAX", "Power Query", "SQL Server"],
    year: 2023,
    involvement: "Projet solo",
    status: "Terminé",
    image: "/lovable-uploads/1abc8b8d-d6d6-4109-b050-4085f39e80b2.png",
    details: {
      context: "Dans le cadre des parcours de certification et de diplomation proposés par IFG Executive Education, le processus de gestion des candidatures est complexe et implique plusieurs étapes cruciales : vérification de la conformité des dossiers, validation par des jurys successifs, et suivi des différents statuts administratifs des candidats.",
      objective: "Centraliser et visualiser de manière dynamique l'ensemble des données liées aux jurys de diplomation et de certification, offrant une lecture immédiate et intuitive des performances des formations.",
      impact: "Cet outil est devenu un levier stratégique pour la direction pédagogique et les équipes opérationnelles, améliorant la prise de décision et l'efficacité opérationnelle.",
      moreImages: [
        "/lovable-uploads/b9406aa6-82d8-46da-b733-ffa2e2320364.png",
        "/lovable-uploads/846f45e2-6833-4302-ac33-eba1d93f8ddf.png",
        "/lovable-uploads/e59f1dd3-1cf6-4a01-8428-4b4c851b0b3a.png",
        "/lovable-uploads/9be17574-27e0-4d8d-86b8-475851ff7cce.png",
        "/lovable-uploads/fc883283-d3fa-4daa-b61a-da2aa458b7ac.png",
        "/lovable-uploads/a81ce782-8671-4c8d-99a6-46c59dbf7722.png",
        "/lovable-uploads/7a4cf249-cea2-4115-bcc0-b3c10d9a652d.png",
        "/lovable-uploads/6e7bcd73-d72a-471b-a459-cc8ff8864425.png"
      ]
    }
  },
];
