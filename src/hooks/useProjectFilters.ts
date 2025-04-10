
import { useState, useMemo } from 'react';
import { Project } from '@/types/project';
import { Filters } from '@/components/ProjectFilters';

export const useProjectFilters = (projects: Project[]) => {
  // État initial des filtres
  const [filters, setFilters] = useState<Filters>({
    search: '',
    categories: [],
    technologies: [],
    year: null,
    involvement: null,
    status: null
  });

  // État pour gérer les favoris
  const [favorites, setFavorites] = useState<number[]>([]);

  // Liste des années disponibles (pour le filtre d'année)
  const availableYears = useMemo(() => {
    const years = projects.map(project => project.year);
    return [...new Set(years)].sort((a, b) => b - a); // Tri décroissant
  }, [projects]);

  // Projets filtrés en fonction des critères actuels
  const filteredProjects = useMemo(() => {
    return projects
      .map(project => ({
        ...project,
        isFavorite: favorites.includes(project.id)
      }))
      .filter(project => {
        // Filtre par recherche textuelle
        if (filters.search && !project.title.toLowerCase().includes(filters.search.toLowerCase()) && 
            !project.description.toLowerCase().includes(filters.search.toLowerCase())) {
          return false;
        }
        
        // Filtre par catégorie
        if (filters.categories.length > 0 && !filters.categories.includes(project.category)) {
          return false;
        }
        
        // Filtre par technologie (au moins une des technologies sélectionnées doit être présente)
        if (filters.technologies.length > 0 && !project.technologies.some(tech => 
          filters.technologies.includes(tech))) {
          return false;
        }
        
        // Filtre par année
        if (filters.year !== null && project.year !== filters.year) {
          return false;
        }
        
        // Filtre par niveau d'implication
        if (filters.involvement !== null && project.involvement !== filters.involvement) {
          return false;
        }
        
        // Filtre par statut
        if (filters.status !== null && project.status !== filters.status) {
          return false;
        }
        
        return true;
      });
  }, [projects, filters, favorites]);

  // Fonction pour réinitialiser tous les filtres
  const resetFilters = () => {
    setFilters({
      search: '',
      categories: [],
      technologies: [],
      year: null,
      involvement: null,
      status: null
    });
  };

  // Fonction pour basculer un projet en favori/non-favori
  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return {
    filters,
    setFilters,
    filteredProjects,
    resetFilters,
    toggleFavorite,
    availableYears
  };
};
