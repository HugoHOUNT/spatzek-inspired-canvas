
export type ProjectCategory = 
  | 'Site web'
  | 'Application mobile'
  | 'Automatisation'
  | 'Design'
  | 'Data'
  | 'Data Visualisation'
  | 'Big Data & IA'
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
  | 'MongoDB'
  | 'Power BI'
  | 'DAX'
  | 'Power Query'
  | 'SQL Server';

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
  year?: number;
  involvement?: string;
  status?: string;
  image?: string;
  links?: {
    source?: string;
    demo?: string;
  };
  details?: {
    context?: string;
    objective?: string;
    impact?: string;
    moreImages?: string[];
  };
}

