
import React from 'react';
import { ProjectCategory, ProjectInvolvement, ProjectStatus, ProjectTechnology } from '@/types/project';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Cette interface définit la structure des filtres
export interface Filters {
  search: string;
  categories: ProjectCategory[];
  technologies: ProjectTechnology[];
  year: number | null;
  involvement: ProjectInvolvement | null;
  status: ProjectStatus | null;
}

interface ProjectFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onReset: () => void;
  availableYears: number[];
  isMobile?: boolean;
}

// Options pour les sélecteurs
const categories: ProjectCategory[] = [
  'Site web', 'Application mobile', 'Automatisation', 'Design', 'Data', 'Personnel', 'Professionnel'
];

const technologies: ProjectTechnology[] = [
  'React', 'Node.js', 'Python', 'Figma', 'Photoshop', 'Tailwind', 'SQL', 'JavaScript', 
  'TypeScript', 'HTML/CSS', 'TensorFlow', 'Hadoop', 'Spark', 'MongoDB'
];

const involvements: ProjectInvolvement[] = [
  'Projet solo', 'Travail d\'équipe', 'Contributeur secondaire'
];

const statuses: ProjectStatus[] = [
  'Terminé', 'En cours', 'Prototype', 'MVP'
];

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ 
  filters, 
  onFiltersChange, 
  onReset, 
  availableYears = [],
  isMobile = false
}) => {
  // Handlers pour chaque type de filtre
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: e.target.value });
  };

  const handleCategoryToggle = (category: ProjectCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleTechnologyToggle = (technology: ProjectTechnology) => {
    const newTechnologies = filters.technologies.includes(technology)
      ? filters.technologies.filter(t => t !== technology)
      : [...filters.technologies, technology];
    
    onFiltersChange({ ...filters, technologies: newTechnologies });
  };

  const handleYearChange = (year: string) => {
    onFiltersChange({ ...filters, year: year === 'all' ? null : parseInt(year) });
  };

  const handleInvolvementChange = (involvement: ProjectInvolvement | null) => {
    onFiltersChange({ ...filters, involvement });
  };

  const handleStatusChange = (status: ProjectStatus | null) => {
    onFiltersChange({ ...filters, status });
  };

  // Composant pour les filtres en format mobile (accordéon)
  if (isMobile) {
    return (
      <div className="w-full mb-6 space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Rechercher un projet..."
            value={filters.search}
            onChange={handleSearchChange}
            className="flex-1"
          />
          <Button onClick={onReset} variant="outline" className="shrink-0">
            Réinitialiser
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Collapsible className="border rounded-md">
            <CollapsibleTrigger className="flex w-full justify-between items-center p-3 font-medium">
              Catégories
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 pt-0 space-y-2 border-t">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={filters.categories.includes(category)}
                      onCheckedChange={() => handleCategoryToggle(category)}
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="border rounded-md">
            <CollapsibleTrigger className="flex w-full justify-between items-center p-3 font-medium">
              Technologies
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 pt-0 space-y-2 border-t">
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`tech-${tech}`} 
                      checked={filters.technologies.includes(tech)}
                      onCheckedChange={() => handleTechnologyToggle(tech)}
                    />
                    <label
                      htmlFor={`tech-${tech}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tech}
                    </label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <Select
            value={filters.year?.toString() || 'all'}
            onValueChange={handleYearChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les années</SelectItem>
              {Array.isArray(availableYears) && availableYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select
            value={filters.involvement || 'all'}
            onValueChange={(val) => handleInvolvementChange(val === 'all' ? null : val as ProjectInvolvement)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Implication" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toute implication</SelectItem>
              {involvements.map((involvement) => (
                <SelectItem key={involvement} value={involvement}>
                  {involvement}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select
            value={filters.status || 'all'}
            onValueChange={(val) => handleStatusChange(val === 'all' ? null : val as ProjectStatus)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tout statut</SelectItem>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  }

  // Version desktop des filtres (sidebar)
  return (
    <div className="space-y-6 sticky top-24">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Filtres</h3>
        <Input
          placeholder="Rechercher un projet..."
          value={filters.search}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="space-y-4">
        <div className="space-y-3">
          <h4 className="font-medium">Catégories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={`category-${category}`} 
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                />
                <label
                  htmlFor={`category-${category}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium">Technologies</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {technologies.map((tech) => (
              <div key={tech} className="flex items-center space-x-2">
                <Checkbox 
                  id={`tech-${tech}`} 
                  checked={filters.technologies.includes(tech)}
                  onCheckedChange={() => handleTechnologyToggle(tech)}
                />
                <label
                  htmlFor={`tech-${tech}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {tech}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium">Année</h4>
          <Select
            value={filters.year?.toString() || 'all'}
            onValueChange={handleYearChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Toutes les années" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les années</SelectItem>
              {Array.isArray(availableYears) && availableYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium">Niveau d'implication</h4>
          <RadioGroup 
            value={filters.involvement || ''} 
            onValueChange={(val) => handleInvolvementChange(val as ProjectInvolvement || null)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="involvement-all" />
              <Label htmlFor="involvement-all">Tous</Label>
            </div>
            {involvements.map((involvement) => (
              <div key={involvement} className="flex items-center space-x-2">
                <RadioGroupItem value={involvement} id={`involvement-${involvement}`} />
                <Label htmlFor={`involvement-${involvement}`}>{involvement}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium">Statut du projet</h4>
          <RadioGroup 
            value={filters.status || ''} 
            onValueChange={(val) => handleStatusChange(val as ProjectStatus || null)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="status-all" />
              <Label htmlFor="status-all">Tous</Label>
            </div>
            {statuses.map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <RadioGroupItem value={status} id={`status-${status}`} />
                <Label htmlFor={`status-${status}`}>{status}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      
      <Button onClick={onReset} variant="outline" className="w-full">
        Réinitialiser les filtres
      </Button>
    </div>
  );
};

export default ProjectFilters;
