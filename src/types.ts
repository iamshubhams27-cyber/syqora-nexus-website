export interface Founder {
  id: string;
  code: string;
  name: string;
  role: string;
  specialization: string;
  education: string;
  bio: string;
  avatarUrl?: string;
  avatarPlaceholder: string;
  accentColor: string;
  skills: string[];
  tools: string[];
  metrics: { label: string; value: string }[];
  resumeHighlights: string[];
  github?: string;
  linkedin?: string;
  email: string;
  phone?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'analytics' | 'ai' | 'security';
  client: string;
  year: string;
  summary: string;
  impact: string;
  tags: string[];
  themeColor: string;
  gradient: string;
  liveBadge?: string;
  stats?: { label: string; value: string }[];
  features: string[];
  techStack: string[];
  visualType: 'capello' | 'luxe' | 'security' | 'nexus' | 'analytics';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  badge: string;
  iconName: string;
  suitableFor: string[];
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  score: number;
  category: 'web' | 'data' | 'ai';
  points: string[];
  tech: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  period?: string;
  popular?: boolean;
  isFlagship?: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface TestimonialReview {
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  project: string;
}
