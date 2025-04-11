
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { LinkedInPost } from '@/components/LinkedInPost';
import { Separator } from '@/components/ui/separator';

// Types pour les posts LinkedIn
interface PostType {
  id: number;
  title: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  category: string;
  image?: string;
}

// Données fictives pour les posts LinkedIn
const linkedInPosts: PostType[] = [
  {
    id: 1,
    title: "Transformation Digitale en Entreprise",
    date: "12 mars 2025",
    content: "Je suis ravi de partager mon expérience sur la transformation digitale chez IFG Executive Education. L'automatisation des processus a permis d'améliorer considérablement notre efficacité...",
    likes: 156,
    comments: 23,
    shares: 14,
    category: "Professionnel",
    image: "https://placehold.co/600x400"
  },
  {
    id: 2,
    title: "L'Intelligence Artificielle au service de la Qualité",
    date: "5 février 2025",
    content: "L'IA devient un outil incontournable pour améliorer la qualité des produits et services. Voici comment nous l'utilisons dans nos processus qualité...",
    likes: 203,
    comments: 31,
    shares: 27,
    category: "IA & Big Data"
  },
  {
    id: 3,
    title: "Formation Master IA & Big Data",
    date: "15 janvier 2025",
    content: "Aujourd'hui marque le début de mon Master en IA & Big Data à l'ESGI. Impatient de développer mes compétences en Deep Learning et Cloud Computing...",
    likes: 89,
    comments: 12,
    shares: 5,
    category: "Formation"
  },
  {
    id: 4,
    title: "Power BI: Visualisation de données avancée",
    date: "20 décembre 2024",
    content: "Fier de présenter mon nouveau dashboard Power BI qui a permis d'améliorer significativement la prise de décision dans notre équipe...",
    likes: 134,
    comments: 18,
    shares: 9,
    category: "Data Visualisation",
    image: "https://placehold.co/600x400"
  },
  {
    id: 5,
    title: "Automatisation des rapports avec Python",
    date: "10 novembre 2024",
    content: "Partage de mon expérience sur l'automatisation des rapports avec Python et Pandas. Un gain de temps considérable pour notre équipe...",
    likes: 173,
    comments: 27,
    shares: 19,
    category: "Automatisation"
  },
  {
    id: 6,
    title: "Stage chez NXP Semiconductors: Retour d'expérience",
    date: "25 octobre 2024",
    content: "Retour sur mon expérience en tant que Data Analyst chez NXP Semiconductors. L'analyse de données dans l'industrie des semi-conducteurs est fascinante...",
    likes: 98,
    comments: 15,
    shares: 8,
    category: "Professionnel"
  }
];

const LinkedIn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Tous");
  
  const postsPerPage = 3;
  const categories = ["Tous", "Professionnel", "IA & Big Data", "Formation", "Data Visualisation", "Automatisation"];
  
  // Filtrer les posts selon la catégorie
  const filteredPosts = activeCategory === "Tous" 
    ? linkedInPosts 
    : linkedInPosts.filter(post => post.category === activeCategory);
  
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-portfolio-light dark:bg-portfolio-dark text-portfolio-dark dark:text-portfolio-light transition-colors duration-300">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-gradient">Mes Publications LinkedIn</span>
        </h1>
        <p className="text-lg text-center mb-12 text-gray-700 dark:text-gray-300">
          Découvrez mes articles et partages sur les thématiques de l'IA, la Data et la Transformation Digitale
        </p>
        
        <Tabs defaultValue="Tous" className="w-full mb-8">
          <TabsList className="flex flex-wrap justify-center mb-6">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 m-1"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="space-y-8">
              {currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <LinkedInPost key={post.id} post={post} />
                ))
              ) : (
                <Card className="text-center p-8">
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Aucun post disponible dans cette catégorie pour le moment.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        {filteredPosts.length > postsPerPage && (
          <Pagination className="mt-10">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <PaginationItem key={number}>
                  <PaginationLink
                    isActive={currentPage === number}
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
      
      <footer className="py-6 px-6 text-center border-t border-gray-200 dark:border-white/10">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hountondji Hugo. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default LinkedIn;
