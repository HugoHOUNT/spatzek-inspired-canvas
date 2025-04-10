
import React from 'react';
import { Project } from '@/types/project';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Heart, Code, Clock, CheckCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onToggleFavorite?: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onToggleFavorite }) => {
  const statusIcon = () => {
    switch (project.status) {
      case 'Terminé':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'En cours':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'Prototype':
      case 'MVP':
        return <Circle className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const statusColor = () => {
    switch (project.status) {
      case 'Terminé':
        return 'bg-green-500/10 text-green-500 dark:bg-green-500/20';
      case 'En cours':
        return 'bg-amber-500/10 text-amber-500 dark:bg-amber-500/20';
      case 'Prototype':
        return 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20';
      case 'MVP':
        return 'bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20';
      default:
        return '';
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md dark:bg-gray-800/50 hover:translate-y-[-5px]">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute right-2 top-2 flex gap-2">
          <Badge className={cn("flex items-center gap-1.5", statusColor())}>
            {statusIcon()}
            {project.status}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
          {onToggleFavorite && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-muted-foreground hover:text-rose-500"
              onClick={() => onToggleFavorite(project.id)}
            >
              <Heart 
                className={cn("h-5 w-5", {
                  "fill-rose-500 text-rose-500": project.isFavorite
                })}
              />
            </Button>
          )}
        </div>
        <CardDescription className="mt-1 line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <div className="flex flex-wrap gap-1 mt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2 flex-wrap">
        {project.links?.website && (
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <ExternalLink className="h-4 w-4" />
            Visiter
          </Button>
        )}
        {project.links?.source && (
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Github className="h-4 w-4" />
            Code
          </Button>
        )}
        {project.links?.demo && (
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Code className="h-4 w-4" />
            Démo
          </Button>
        )}
        {!project.links?.website && !project.links?.source && !project.links?.demo && (
          <Button variant="outline" size="sm" className="h-8">
            Voir plus
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
