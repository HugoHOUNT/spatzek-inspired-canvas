import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, FileText, Presentation, FileBarChart, Info, Target, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { projectsData } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import AdminNavLink from '@/components/AdminNavLink';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import fallbackImage from '@/assets/images/placeholder';

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false);

  // Pas besoin d'import dynamique pour les fichiers dans public/
  return (
    <img
      src={error ? fallbackImage : src} // src pointe déjà vers public/
      alt={alt}
      className={className}
      onError={(e) => {
        console.error('Erreur de chargement:', src);
        setError(true);
      }}
    />
  );
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const project = projectsData.find((p) => p.id === parseInt(id || '', 10));

  useEffect(() => {
    if (project) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
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
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Button>
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
      <div className="absolute top-0 right-0 mt-4 mr-4 md:mt-6 md:mr-6">
        <AdminNavLink />
      </div>
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <ArrowLeft className="mr-2 h-4 w-4 inline" />
            Retour aux projets
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700">
              {project.category}
            </Badge>
            {project.status && (
              <Badge variant="outline" className={`
                ${project.status === 'Terminé' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' : ''}
                ${project.status === 'En cours' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' : ''}
                ${project.status === 'Prototype' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700' : ''}
                ${project.status === 'MVP' ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700' : ''}
              `}>
                {project.status}
              </Badge>
            )}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>

        {project.image && !project.details?.moreImages?.length && (
          <div className="mb-8">
            <ImageWithFallback 
              src={project.image} 
              alt={`Aperçu de ${project.title}`} 
              className="w-full max-h-96 object-contain rounded-lg shadow-md"
            />
          </div>
        )}

        {project.details?.moreImages && project.details.moreImages.length > 0 && (
          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {project.image && (
                  <CarouselItem>
                    <div className="p-1">
                      <div className="flex aspect-video items-center justify-center p-1 relative">
                        <ImageWithFallback 
                          src={project.image} 
                          alt={`Image principale de ${project.title}`} 
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                )}
                {project.details.moreImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="flex aspect-video items-center justify-center p-1 relative">
                        <ImageWithFallback 
                          src={img} 
                          alt={`Image supplémentaire ${index + 1} de ${project.title}`} 
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        )}

        <Tabs defaultValue="details">
          <TabsList className="mb-4">
            <TabsTrigger value="details">Détails</TabsTrigger>
            <TabsTrigger value="technical">Technique</TabsTrigger>
            {project.details && (
              <TabsTrigger value="additional">Informations complémentaires</TabsTrigger>
            )}
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.year && (
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-gray-500" />
                        <span><strong>Année:</strong> {project.year}</span>
                      </div>
                    )}
                    {project.involvement && (
                      <div className="flex items-center gap-2">
                        <Tag size={18} className="text-gray-500" />
                        <span><strong>Implication:</strong> {project.involvement}</span>
                      </div>
                    )}
                    {project.status && (
                      <div className="flex items-center gap-2">
                        <FileBarChart size={18} className="text-gray-500" />
                        <span><strong>Statut:</strong> {project.status}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {!project.details?.moreImages && project.image && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Aperçu</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center p-4">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={`Aperçu de ${project.title}`} 
                      className="max-w-full h-auto rounded-md shadow-sm"
                    />
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Technologies utilisées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} className="py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.links?.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline mt-4"
                  >
                    <Github size={18} />
                    <span>Code source</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline mt-2"
                  >
                    <ExternalLink size={18} />
                    <span>Démo en ligne</span>
                  </a>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {project.details && (
            <TabsContent value="additional">
              <div className="grid grid-cols-1 gap-6">
                {project.details.context && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Info size={20} />
                        Contexte
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.details.context}
                      </p>
                    </CardContent>
                  </Card>
                )}
                
                {project.details.objective && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Target size={20} />
                        Objectif
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.details.objective}
                      </p>
                    </CardContent>
                  </Card>
                )}
                
                {project.details.impact && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Zap size={20} />
                        Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.details.impact}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          )}
          
          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FileText size={20} />
                    Rapport du projet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Rapport détaillé sur le développement, les défis rencontrés et les solutions mises en place.
                  </p>
                  <Button variant="outline" disabled={!project.status || project.status === 'En cours'}>
                    {project.status && project.status === 'En cours' ? 'En cours de rédaction' : 'Télécharger le rapport'}
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Presentation size={20} />
                    Présentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Présentation du projet, objectifs, résultats et impact.
                  </p>
                  <Button variant="outline" disabled={!project.status || project.status === 'En cours'}>
                    {project.status && project.status === 'En cours' ? 'En préparation' : 'Voir la présentation'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ProjectDetails;
