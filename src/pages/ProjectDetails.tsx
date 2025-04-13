
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { projectsData } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const project = projectsData.find((p) => p.id === parseInt(id || '', 10));

  useEffect(() => {
    if (project) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300); // Simule un chargement
      return () => clearTimeout(timer);
    } else {
      setNotFound(true);
      setIsLoading(false);
    }
  }, [project]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projet non trouvé</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
          <Link to="/projects">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              <ArrowLeft className="mr-2 h-4 w-4 inline" />
              Retour aux projets
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading || !project) {
    return (
      <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-24 md:py-32 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32">
        {/* Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <ArrowLeft className="mr-2 h-4 w-4 inline" />
            Retour aux projets
          </Link>
        </div>

        {/* Détails du projet */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">{project.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="details">
              <TabsList className="mb-4">
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="technical">Technique</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <p className="text-lg mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {project.year && (
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <Calendar size={18} />
                      <span>{project.year}</span>
                    </div>
                  )}
                  {project.category && (
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <Tag size={18} />
                      <span>{project.category}</span>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="technical">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} className="bg-gray-100 dark:bg-gray-700 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.links?.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <Github size={18} />
                    <span>Code source</span>
                  </a>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProjectDetails;
