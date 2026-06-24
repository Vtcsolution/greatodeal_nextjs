'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { GraduationCap, Monitor, Video, Users, BarChart2, BookOpen, Smartphone } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'Education & E-Learning',
  subtitle: 'EdTech Innovation Experts',
  description: 'We build transformative educational technology that enhances learning outcomes, streamlines administration, and makes quality education accessible to everyone, everywhere.',
  icon: GraduationCap,
  heroIcon: GraduationCap,
  heroImage: '/images/education.png',
  stats: [
    { value: '2M+', label: 'Students Impacted' },
    { value: '40%', label: 'Better Completion Rate' },
    { value: 'SCORM', label: 'Standards Compliant' },
    { value: '50+', label: 'EdTech Projects' },
  ],
  challenges: [
    'Engaging students in digital learning environments',
    'Tracking individual student progress at scale',
    'Supporting diverse learning styles and accessibility needs',
    'Managing complex institutional administration',
    'Integrating with existing school management systems',
    'Ensuring data privacy and FERPA/GDPR compliance',
    'Supporting live and asynchronous learning simultaneously',
    'Assessment integrity and anti-cheating measures',
  ],
  solutions: [
    { icon: Monitor, title: 'Learning Management Systems (LMS)', desc: 'Powerful LMS platforms with course management, progress tracking, assessments, and reporting.' },
    { icon: Video, title: 'Virtual Classroom Platforms', desc: 'Live video classes with interactive whiteboards, breakout rooms, attendance tracking, and recordings.' },
    { icon: Users, title: 'AI Tutoring & Adaptive Learning', desc: 'AI-powered personalized learning paths that adapt to each student\'s pace and learning style.' },
    { icon: BarChart2, title: 'Student Information Systems', desc: 'Comprehensive student management covering admissions, grades, attendance, and parent communication.' },
    { icon: BookOpen, title: 'Learning Analytics', desc: 'Deep insights into student engagement, performance, and learning outcomes with predictive analytics.' },
    { icon: Smartphone, title: 'Mobile Learning Apps', desc: 'iOS and Android apps enabling offline learning, push notifications, and mobile-first education.' },
  ],
  features: [
    'SCORM & xAPI compliant courses', 'Gamification & badges', 'Live & recorded classes',
    'Quiz & assignment builder', 'Student progress tracking', 'Multi-tenant institution support',
    'AI-generated quizzes & summaries', 'Discussion forums & collaboration', 'Certificate generation',
    'Payment & subscription billing', 'FERPA & GDPR compliance', 'Accessibility (WCAG 2.1)',
  ],
  technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'WebRTC', 'AWS', 'Video.js', 'OpenAI', 'Stripe', 'Firebase', 'Docker', 'Kubernetes', 'Redis'],
};

export default function EducationPage() {
  return <IndustryPageTemplate data={pageData} />;
}
