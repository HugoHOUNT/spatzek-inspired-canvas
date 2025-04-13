
import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProjectForm from '@/components/ProjectForm';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, PlusCircle } from 'lucide-react';

const AdminProjects = () => {
  const { isAuthenticated, user, logout } = useAuth();
  
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
          
          <Button variant="outline" onClick={logout} className="flex items-center gap-2">
            <LogOut size={16} />
            Déconnexion
          </Button>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <PlusCircle size={24} className="text-indigo-500" />
            Ajouter un projet
          </h2>
          <ProjectForm />
        </div>
      </main>
    </div>
  );
};

export default AdminProjects;
