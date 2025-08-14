export interface Skill {
  id: number;
  title: string;
  description: string;
  iconType: 'code' | 'server' | 'terminal';
  category: 'frontend' | 'backend' | 'devops' | 'design';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

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
