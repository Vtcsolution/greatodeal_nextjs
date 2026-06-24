export interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  fullContent?: string;
  category: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  date: string;
  readTime: string;
  views: number;
  image: string;
  backlinks?: Array<{ text: string; url: string }>;
  featured: boolean;
  trending: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  blogId: string;
  parentId?: string;
  username: string;
  comment: string;
  likes: number;
  isApproved: boolean;
  createdAt: string;
  replies?: Comment[];
}

export interface ChatMessage {
  text: string;
  sender: 'user' | 'assistant' | 'ai';
}

export interface ContactFormData {
  fullName: string;
  company?: string;
  countryCode: string;
  phone?: string;
  email: string;
  services: string;
  message: string;
}

export interface PartnershipFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  description: string;
  ndaAgreed: boolean;
  serviceType: string;
  partnershipTier: string;
  phone?: string;
  website?: string;
  industry?: string;
  employees?: string;
  timeline?: string;
  referralSource?: string;
}

export interface AdminProfile {
  _id: string;
  email: string;
  name?: string;
  role: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  total?: number;
  page?: number;
  limit?: number;
}
