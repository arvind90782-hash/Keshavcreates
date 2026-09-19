export interface Project {
  id: string;
  title: string;
  category: 'tech' | 'gaming' | 'documentary' | 'finance';
  categoryLabel: string;
  nicheDescription: string;
  imageUrl: string;
  posterUrl?: string;
  videoUrl?: string;
  type?: 'video' | 'image';
  driveFolderUrl?: string;
  tags: string[];
}

export interface SkillItem {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  planNumber: string;
  title: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyMeItem {
  title: string;
  description: string;
  icon: 'eye' | 'user' | 'layers' | 'check';
}
