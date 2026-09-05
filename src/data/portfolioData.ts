import type { 
  SkillCategory, 
  EducationItem, 
  CertificationItem, 
  ExperienceItem, 
  ProjectItem, 
  SocialLink 
} from '../types';

export const PERSONAL_INFO = {
  name: 'Francis Vernard Yap',
  initials: 'FVY',
  role: 'Full Stack Developer & IT Student',
  status: 'AVAILABLE FOR WORK',
  location: 'Cebu, Philippines',
  email: 'yapfrancis555@gmail.com',
  pitch: 'Information Technology student with hands-on experience in full-stack web and application development. Builds database-driven systems, REST APIs, and role-based applications, with strong front-end, back-end, database management, and system integration experience.',
  shortBio: 'Specializing in building robust, data-centric web applications and cross-platform tools with clean architecture and performant interfaces. Passionate about system integration, relational databases, and enterprise-grade workflows.',
  cvFileName: 'francis-vernard-yap-cv.pdf',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/francisyap',
    icon: 'Github',
    ariaLabel: 'Francis Vernard Yap GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/francis-vernard-yap',
    icon: 'Linkedin',
    ariaLabel: 'Francis Vernard Yap LinkedIn profile',
  },
  {
    name: 'Email',
    url: 'mailto:yapfrancis555@gmail.com',
    icon: 'Mail',
    ariaLabel: 'Send an email to Francis Vernard Yap',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C', 'C#', 'PHP', 'Python', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'REST API Design', 'PDO', 'Bootstrap 5', 'Quill.js', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Database Design', 'Row Level Security (RLS)'],
  },
  {
    title: 'Networking & Systems',
    skills: ['Routing & Switching', 'Wireless Networking', 'CCNA Certified', 'TCP/IP', 'VLANs'],
  },
  {
    title: 'Tools & Ecosystem',
    skills: ['Git & GitHub', 'Excel / SheetJS', 'Flask', 'Ollama (Local AI)', 'Cisco Packet Tracer', 'Postman'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'BS Information Technology',
    institution: 'University of San Carlos',
    location: 'Cebu City, Philippines',
    notes: 'Focus on full-stack web development, enterprise systems, and networking architecture.',
  },
  {
    degree: 'STEM Strand (Senior High School)',
    institution: 'University of Cebu — Banilad Campus',
    location: 'Cebu City, Philippines',
    notes: 'Foundation in computer programming, science, technology, and mathematics.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    type: 'Networking & Infrastructure',
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    type: 'Network Fundamentals',
  },
  {
    name: 'Intermediate SQL',
    issuer: 'DataCamp',
    type: 'Database Querying & Analysis',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Smart-Q IT and Engineering Solutions',
    period: '2026 – Present',
    location: 'Cebu, Philippines',
    highlights: [
      'Developed and maintained full-stack web applications: engineered responsive, accessible front-end interfaces and resilient server-side functionality.',
      'Implemented database-driven features, complex CRUD operations, API integrations, and secure role-based workflows using PHP, JavaScript, HTML/CSS, and SQL.',
      'Collaborated on comprehensive application testing, debugging, and production deployments, significantly improving usability, functionality, and system reliability.',
    ],
    technologies: ['PHP', 'JavaScript', 'SQL', 'HTML5/CSS3', 'REST APIs', 'Git', 'Responsive Design'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'gsy-hardware',
    title: 'GSY Hardware',
    subtitle: 'Full-Stack E-Commerce & Inventory Management Platform',
    year: '2026',
    featured: true,
    type: 'Personal Project',
    previewType: 'web',
    description: 'A comprehensive, end-to-end online store engineered for an enterprise hardware retailer. Integrates real-time product catalogs, cart logic, order processing, and administrative analytics.',
    highlights: [
      'Engineered complete customer commerce journey: fast product filtering, cart persistence, secure checkout flow, and detailed order tracking history.',
      'Architected granular role-based authentication leveraging Supabase Row Level Security (RLS) policies to strictly isolate customer versus admin privileges.',
      'Designed administrative management dashboard with live inventory stock alerts, order state machine processing, and sales metric visualizers.',
    ],
    tags: ['React', 'Tailwind CSS', 'Supabase', 'RLS', 'E-commerce', 'Vite', 'TypeScript'],
    techStack: ['React (Vite)', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'RLS Auth', 'Lucide Icons'],
    demoUrl: 'https://gsy-hardware.vercel.app',
    repoUrl: 'https://github.com/francisyap/gsy-hardware',
  },
  {
    id: 'budget-tracker',
    title: 'Budget Tracker',
    subtitle: 'Cross-Platform Personal Finance & Expense Analytics App',
    year: '2026',
    featured: false,
    type: 'Personal Project',
    previewType: 'mobile',
    description: 'A responsive cross-platform personal finance utility delivering real-time balance tracking, multi-category expense logging, and spending habit analytics to support informed financial decisions.',
    highlights: [
      'Built native-feel cross-platform UI with Flutter & Dart for seamless mobile and desktop tracking.',
      'Configured cloud synchronization and persistent offline-ready database storage backed by Supabase.',
      'Implemented visual spending breakdowns and balance charts over customizable weekly and monthly timeframes.',
    ],
    tags: ['Flutter', 'Dart', 'Supabase', 'Mobile', 'Data Visualization'],
    techStack: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Charts Engine'],
    demoUrl: 'https://github.com/francisyap/budget-tracker/releases',
    repoUrl: 'https://github.com/francisyap/budget-tracker',
  },
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
