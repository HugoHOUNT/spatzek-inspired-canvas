
export type ProjectCategory = 
  | 'Site web'
  | 'Application mobile'
  | 'Automatisation'
  | 'Design'
  | 'Data'
  | 'Data Visualisation'
  | 'Modélisation'
  | 'Big Data & IA'
  | 'Personnel'
  | 'Professionnel'
  | 'Pilotage des processus'
  | 'Business Intelligence'
  | 'Machine Learning'
  | 'Deep Learning'
  ;

export type ProjectTechnology = 
  | 'Python'
  | 'SQL'
  | 'Java'
  | 'Hadoop'
  | 'Spark'
  | 'MongoDB'
  | 'DAX'
  | 'SQL Server'
  | 'Power BI Desktop'
  | 'Power Query (ETL)'
  | 'Rust'
  | 'C'
  | 'R'
  | 'SAS'
  | 'Tableau Software'
  | 'Excel'
  | 'Sharepoint'
  | 'Power Automate'
  | 'Pivotal Tracker'
  | 'GitHub'
  | 'Bonita'
  | 'Azure'
  | 'DataBricks'
  | 'AWS'
  | 'Spark Core'
  | 'Spark Streaming'
  | 'Docker'  
  ;

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

