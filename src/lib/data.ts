import { Skill, Experience, Project } from '@/types';
import skillsData from '@/data/skills.json';
import experiencesData from '@/data/experiences.json';
import projectsData from '@/data/projects.json';

// 型アサーション
const skills = skillsData as Skill[];
const experiences = experiencesData as Experience[];
const projects = projectsData as Project[];

export class DataService {
  // Skills
  static async getSkills(): Promise<Skill[]> {
    return skills;
  }

  static async getSkillsByCategory(category: string): Promise<Skill[]> {
    return skills.filter(skill => skill.category === category);
  }

  static async getSkillById(id: number): Promise<Skill | undefined> {
    return skills.find(skill => skill.id === id);
  }

  // Experiences
  static async getExperiences(): Promise<Experience[]> {
    return experiences;
  }

  static async getExperienceById(id: number): Promise<Experience | undefined> {
    return experiences.find(exp => exp.id === id);
  }

  // Projects
  static async getProjects(): Promise<Project[]> {
    return projects;
  }

  static async getProjectsByStatus(status: string): Promise<Project[]> {
    return projects.filter(project => project.status === status);
  }

  static async getProjectById(id: number): Promise<Project | undefined> {
    return projects.find(project => project.id === id);
  }

  // 統計情報
  static async getStats() {
    return {
      totalSkills: skills.length,
      totalExperiences: experiences.length,
      totalProjects: projects.length,
      skillsByCategory: skills.reduce((acc, skill) => {
        acc[skill.category] = (acc[skill.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      projectsByStatus: projects.reduce((acc, project) => {
        acc[project.status] = (acc[project.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }
}

// 便利な関数
export const getSkillsGroupedByCategory = async () => {
  const allSkills = await DataService.getSkills();
  return allSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};

export const getFeaturedProjects = async () => {
  const allProjects = await DataService.getProjects();
  return allProjects.filter(project => project.status === 'completed').slice(0, 3);
}; 
