'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Link2, Zap, Lock, Globe, Code, RefreshCw } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'API Development &',
  subtitle: 'Integration Services',
  description: 'We design, build, and integrate powerful APIs that connect your systems, automate workflows, and enable seamless data flow. From RESTful APIs to complex multi-system integrations.',
  icon: Link2,
  heroKeyword: 'API Integration Specialists',
  heroImage: '/images/api_development.jpg',
  features: [
    'Custom REST API development', 'GraphQL API development', 'WebSocket & real-time APIs', 'Third-party API integrations',
    'Stripe & payment gateway APIs', 'HubSpot, Salesforce, SAP integrations', 'OAuth2 & JWT authentication', 'API security & rate limiting',
    'API gateway setup & management', 'Microservices architecture', 'Event-driven APIs (Webhooks)', 'API versioning & deprecation management',
    'API documentation (Swagger/OpenAPI)', 'SDK development for your API', 'Legacy system API wrappers', 'API performance optimization',
  ],
  benefits: [
    { icon: Zap, title: 'High Performance', desc: 'Optimized APIs with response times under 100ms, proper caching, database indexing, and load balancing.' },
    { icon: Lock, title: 'Secure APIs', desc: 'OAuth 2.0, JWT, API keys, rate limiting, input validation, and OWASP API Security Top 10 compliance.' },
    { icon: Globe, title: 'Developer-Friendly', desc: 'Comprehensive documentation with interactive Swagger UI, code examples, and SDKs that developers love.' },
    { icon: Code, title: 'Always Available', desc: '99.9%+ uptime SLAs with automatic failover, health monitoring, and incident response protocols.' },
    { icon: Link2, title: 'Observable', desc: 'Built-in logging, metrics, request tracing, and alerting so you always know what\'s happening in your APIs.' },
    { icon: RefreshCw, title: 'Global Scale', desc: 'Multi-region deployment, CDN integration, and globally distributed APIs that perform anywhere in the world.' },
  ],
  technologies: ['Node.js', 'Express', 'FastAPI', 'Python', 'GraphQL', 'REST', 'WebSockets', 'OAuth2', 'JWT', 'Kong', 'AWS API Gateway', 'Redis', 'PostgreSQL', 'MongoDB', 'Docker', 'OpenAPI/Swagger'],
  faqs: [
    { q: 'REST vs GraphQL — which should I choose?', a: 'REST is simpler and widely supported; GraphQL is better when clients need flexible data fetching. We recommend GraphQL for complex SPAs with varied data needs, REST for simple CRUD APIs and mobile apps.' },
    { q: 'Can you integrate with any third-party system?', a: 'Yes. We have experience integrating with 50+ platforms including Stripe, HubSpot, Salesforce, SAP, QuickBooks, Twilio, SendGrid, Shopify, WooCommerce, and many more.' },
    { q: 'Do you provide API documentation?', a: 'Every API we build includes comprehensive Swagger/OpenAPI documentation, Postman collections, and developer guides for seamless team onboarding.' },
    { q: 'How do you secure APIs?', a: 'We implement OAuth2 or API key authentication, rate limiting, input validation, HTTPS enforcement, CORS policies, and regular security audits as standard practices.' },
  ],
  relatedServices: [
    { name: 'Web App Development', path: '/services/web-apps' },
    { name: 'Mobile App Development', path: '/services/mobile-apps' },
    { name: 'Custom Software', path: '/services/custom-software' },
    { name: 'Cloud & Infrastructure', path: '/services/it-infrastructure' },
    { name: 'AI SaaS Platform', path: '/services/ai-saas-platform' },
  ],
};

export default function ApiDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
