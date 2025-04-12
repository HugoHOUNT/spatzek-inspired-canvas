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
  category: string;
  description: string;
  technologies: string[];
  year?: number; // Facultatif
  involvement?: string; // Facultatif
  status?: string; // Facultatif
  image?: string; // Facultatif
  links?: {
    source?: string; // Facultatif
    demo?: string; // Facultatif
  };
}
