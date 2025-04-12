import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '@/data/projects';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>(); // Récupère l'ID du projet depuis l'URL
  const project = projectsData.find((project) => project.id === parseInt(id || '', 10));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">Projet introuvable.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">{project.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} className="bg-gray-100 dark:bg-gray-700 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProjectDetails;