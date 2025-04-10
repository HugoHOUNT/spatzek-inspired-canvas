
export type ProjectCategory = 
  | 'Site web'
  | 'Application mobile'
  | 'Automatisation'
  | 'Design'
  | 'Data'
  | 'Personnel'
  | 'Professionnel';

export type ProjectTechnology = 
  | 'React'
  | 'Node.js'
  | 'Python'
  | 'Figma'
  | 'Photoshop'
  | 'Tailwind'
  | 'SQL'
  | 'JavaScript'
  | 'TypeScript'
  | 'HTML/CSS'
  | 'TensorFlow'
  | 'Hadoop'
  | 'Spark'
  | 'MongoDB';

export type ProjectInvolvement = 
  | 'Projet solo'
  | 'Travail d\'équipe'
  | 'Contributeur secondaire';

export type ProjectStatus = 
  | 'Terminé'
  | 'En cours'
  | 'Prototype'
  | 'MVP';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: ProjectTechnology[];
  year: number;
  involvement: ProjectInvolvement;
  status: ProjectStatus;
  image: string;
  isFavorite?: boolean;
  links?: {
    demo?: string;
    source?: string;
    website?: string;
  };
}
