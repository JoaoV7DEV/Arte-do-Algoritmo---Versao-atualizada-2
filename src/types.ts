export interface ServicePillar {
  id: string;
  pillarNumber: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: 'cyan' | 'magenta' | 'purple';
  services: {
    name: string;
    description: string;
    features: string[];
  }[];
}

export interface WebsiteProject {
  id: string;
  title: string;
  category: 'SITE INSTITUCIONAL' | 'LANDING PAGE' | 'LOJA VIRTUAL' | 'SITE PERSONALIZADO';
  niche: string;
  segment?: string;
  type?: string;
  statusBadge: string;
  isFlagship?: boolean;
  year: string;
  description: string;
  deliverables?: string[];
  tags: string[];
  client: string;
  fullScreenshotUrl?: string;
  logoUrl?: string;
  altText: string;
  liveUrl?: string;
  hasLiveLink?: boolean;
  attachedTestimonial?: {
    name: string;
    text: string;
  };
  sectionsPreview?: string[];
  fullHeightPreview?: {
    heroHeading: string;
    heroSub: string;
    themeColor: string;
    accentColor: string;
    sections: {
      type: string;
      title: string;
      description?: string;
      items?: string[];
    }[];
  };
}

export interface GraphicDesignProject {
  id: string;
  title: string;
  category: string;
  classification: string;
  description: string;
  deliverables: string[];
  colors: string[];
  thumbnailGradient: string;
  details: string;
  logoUrl?: string;
  previewUrl?: string;
  altText?: string;
}

export interface TestimonialFeedback {
  id: string;
  name: string;
  project: string;
  serviceType?: string;
  text: string;
  role?: string;
  clientName?: string;
  messageText?: string;
  avatarText?: string;
  verified?: boolean;
  rating?: number;
  feedbackImage?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  duration?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
