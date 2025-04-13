
import React from 'react';
import { Project } from '@/types/project';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3">{project.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {project.year && `${project.year}`}
            {project.technologies && project.technologies.length > 0 && 
              ` • ${project.technologies[0]}${project.technologies.length > 1 ? ' +' + (project.technologies.length - 1) : ''}`
            }
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1">
            Voir les détails
            <ArrowRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
