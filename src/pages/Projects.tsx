
import React, { useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useProjectFilters } from '@/hooks/useProjectFilters';
import { projectsData } from '@/data/projects';
import ProjectFilters from '@/components/ProjectFilters';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';

const Projects = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { 
    filters, 
    setFilters, 
    filteredProjects, 
    resetFilters, 
    toggleFavorite,
    availableYears 
  } = useProjectFilters(projectsData);

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-black dark:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Mes <span className="text-gradient">Projets</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Découvrez l'ensemble de mes réalisations personnelles et professionnelles
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtres */}
          {isMobile ? (
            <ProjectFilters 
              filters={filters}
              onFiltersChange={setFilters}
              onReset={resetFilters}
              availableYears={availableYears}
              isMobile={true}
            />
          ) : (
            <div className="md:w-1/4 lg:w-1/5">
              <ProjectFilters 
                filters={filters}
                onFiltersChange={setFilters}
                onReset={resetFilters}
                availableYears={availableYears}
              />
            </div>
          )}
          
          {/* Grille des projets */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} trouvé{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 border rounded-lg bg-gray-50 dark:bg-gray-800/30">
                <h3 className="text-xl font-medium mb-2">Aucun projet trouvé</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Aucun projet ne correspond à vos critères de recherche</p>
                <button 
                  onClick={resetFilters}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="py-8 px-6 text-center border-t border-gray-200 dark:border-white/10">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hountondji Hugo. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Projects;
