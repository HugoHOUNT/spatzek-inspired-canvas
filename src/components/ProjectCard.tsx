import React from 'react';
import { Project } from '@/types/project';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
      <CardFooter>
        <Link
          to={`/projects/${project.id}`}
          className="text-indigo-600 hover:underline"
        >
          Voir les détails
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
