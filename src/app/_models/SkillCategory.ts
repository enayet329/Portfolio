export interface Skill {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SkillCategory {
  id: string;
  icon: string;       // emoji or short token
  title: string;
  skills: Skill[];
}
