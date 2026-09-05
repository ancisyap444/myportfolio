export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  notes?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  type?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  highlights: string[];
  tags: string[];
  techStack: string[];
  demoUrl?: string;
  repoUrl: string;
  featured: boolean;
  type: string;
  previewType: 'web' | 'mobile';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
