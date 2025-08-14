export type SkillIconType = 'code' | 'infrastructure' | 'container' | 'architecture';

export interface Skill {
  id: number;
  title: string;
  description: string;
  iconType: SkillIconType;
  highlights?: string[];
} 
