export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  status: 'completed' | 'in-progress' | 'planned';
  duration: string;
  role: string;
  highlights: string[];
} 
