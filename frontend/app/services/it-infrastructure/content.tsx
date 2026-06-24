'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Server, Shield, Zap, Cloud, Lock, Headphones } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'IT Infrastructure &',
  subtitle: 'Cloud DevOps Services',
  description: 'We design, build, and manage cloud infrastructure that is reliable, scalable, and cost-efficient. From cloud migration to full DevOps implementation, we help your team ship faster with confidence.',
  icon: Server,
  heroKeyword: 'Cloud & DevOps Specialists',
  heroVideo: '/images/Globalization_Technology.mp4',
  features: [
    'Cloud migration (AWS, Azure, GCP)', 'Kubernetes orchestration & management', 'Docker containerization',
    'CI/CD pipeline implementation', 'Infrastructure as Code (Terraform, Ansible)', 'Serverless architecture (Lambda, Cloud Functions)',
    'Auto-scaling & high availability setup', 'Monitoring & observability (Prometheus, Grafana)', 'Log management (ELK Stack)',
    'Network security & VPC design', 'Cost optimization & FinOps', 'Disaster recovery & backup strategies',
    'Database administration & optimization', 'CDN & edge computing setup', 'Site Reliability Engineering (SRE)', '24/7 infrastructure monitoring',
  ],
  benefits: [
    { icon: Server, title: 'Cloud-First Strategy', desc: 'We design your infrastructure for the cloud from the ground up — maximizing availability, scalability, and cost efficiency.' },
    { icon: Shield, title: 'Faster Deployments', desc: 'Automated CI/CD pipelines reduce deployment time from hours to minutes, enabling multiple releases per day safely.' },
    { icon: Zap, title: 'Cost Optimization', desc: 'Right-sizing, reserved instances, spot instances, and auto-scaling ensure you only pay for what you need.' },
    { icon: Cloud, title: 'Security Hardened', desc: 'VPCs, IAM policies, secrets management, WAF, DDoS protection, and compliance tooling built into every deployment.' },
    { icon: Lock, title: 'Full Observability', desc: 'Metrics, logs, traces, and alerts give your team complete visibility into system health and performance.' },
    { icon: Headphones, title: '99.99% Uptime', desc: 'Multi-AZ deployments, health checks, circuit breakers, and automatic failover ensure maximum availability.' },
  ],
  technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Helm', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'Nginx', 'Cloudflare'],
  faqs: [
    { q: 'AWS, Azure, or GCP — which cloud should I use?', a: 'It depends on your tech stack and needs. AWS has the broadest service catalog; Azure integrates well with Microsoft products; GCP excels at data/ML workloads. We help you choose the right fit.' },
    { q: 'How long does cloud migration take?', a: 'Simple migrations take 2-4 weeks; complex multi-service migrations with minimal downtime can take 2-6 months. We use proven lift-and-shift followed by optimization strategies.' },
    { q: 'Can you manage our existing cloud infrastructure?', a: 'Yes. We offer managed DevOps services where we handle your CI/CD, infrastructure management, monitoring, and on-call support on an ongoing basis.' },
    { q: 'How do you handle infrastructure security?', a: 'We implement defense-in-depth: network isolation (VPCs), least-privilege IAM, secrets management (Vault/AWS SSM), WAF, DDoS protection, vulnerability scanning, and regular audits.' },
  ],
  relatedServices: [
    { name: 'AI SaaS Platform', path: '/services/ai-saas-platform' },
    { name: 'API Development', path: '/services/api-development' },
    { name: 'Custom Software', path: '/services/custom-software' },
    { name: 'Software Testing', path: '/services/software-testing' },
    { name: 'Web App Development', path: '/services/web-apps' },
  ],
};

export default function ItInfrastructurePage() {
  return <ServicePageTemplate data={pageData} />;
}
