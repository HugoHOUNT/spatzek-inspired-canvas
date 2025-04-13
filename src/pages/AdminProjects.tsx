
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProjectForm from '@/components/ProjectForm';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, PlusCircle, FileEdit, Eye } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AdminProjects = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [showForm, setShowForm] = useState(false);
  
  // Rediriger si non connecté
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Administration des <span className="text-gradient">Projets</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Bienvenue {user?.username} - Gérez vos projets ici
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setShowForm(!showForm)} className="flex items-center gap-2">
              {showForm ? 'Annuler' : <><PlusCircle size={16} /> Ajouter un projet</>}
            </Button>
            <Button variant="outline" onClick={logout} className="flex items-center gap-2">
              <LogOut size={16} />
              Déconnexion
            </Button>
          </div>
        </div>
        
        {showForm && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <PlusCircle size={24} className="text-indigo-500" />
              Ajouter un projet
            </h2>
            <ProjectForm onComplete={() => setShowForm(false)} />
          </div>
        )}
        
        {!showForm && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Projets existants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project) => (
                <Card key={project.id} className="transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.year}
                    </span>
                    <div className="flex gap-2">
                      <Link to={`/projects/${project.id}`} className="text-indigo-600 dark:text-indigo-400">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Eye size={16} />
                          <span className="hidden md:inline">Voir</span>
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <FileEdit size={16} />
                        <span className="hidden md:inline">Modifier</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminProjects;
