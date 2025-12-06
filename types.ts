export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  tech: string;
  description: string[];
  link?: string;
  category: 'Salesforce' | 'Full Stack' | 'AI/ML';
}

export interface EducationItem {
  school: string;
  degree: string;
  score: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  details?: string;
  link?: string;
}

export interface Award {
  title: string;
  description: string;
}