export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  techStack: string;
  description: string[];
}

export interface Publication {
  id: string;
  citation: string;
  link: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export enum PageRoute {
  HOME = '/',
  ACADEMIC = '/academic',
  WORK = '/work',
}