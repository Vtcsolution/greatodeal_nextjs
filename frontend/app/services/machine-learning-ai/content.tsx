'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Brain, Zap, Shield, BarChart2, Cpu, RefreshCw } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'Machine Learning &',
  subtitle: 'AI Development Services',
  description: 'We build intelligent AI solutions that automate workflows, generate insights, and create competitive advantages. From NLP chatbots to computer vision systems, our AI expertise drives real business transformation.',
  icon: Brain,
  heroKeyword: 'AI & Machine Learning Experts',
  heroVideo: '/images/Artificial_Intelligence_Brain.mp4',
  features: [
    'Custom ML model development & training', 'Natural Language Processing (NLP) solutions', 'Computer vision & image recognition', 'AI chatbots & virtual assistants', 'Agentic AI & autonomous agents', 'Predictive analytics & forecasting',
    'Recommendation systems', 'Sentiment analysis & text classification', 'Speech recognition & synthesis', 'AI-powered data extraction (OCR)', 'LLM integration (GPT, Claude, Gemini)', 'RAG (Retrieval-Augmented Generation) systems',
    'AI model fine-tuning & optimization', 'MLOps & model deployment pipelines', 'Real-time AI inference APIs', 'AI safety, bias detection & explainability',
  ],
  benefits: [
    { icon: Brain, title: 'Deep AI Expertise', desc: 'Our team includes ML engineers, data scientists, and AI researchers with experience across industries and use cases.' },
    { icon: Zap, title: 'Production-Ready AI', desc: 'We don\'t just build POCs — we deploy scalable, production-grade AI systems with monitoring and retraining pipelines.' },
    { icon: Shield, title: 'Business-Focused Solutions', desc: 'Every AI solution is designed to solve specific business problems and deliver measurable ROI, not just impressive demos.' },
    { icon: BarChart2, title: 'Responsible AI', desc: 'We implement ethical AI practices including bias detection, explainability, data privacy, and regulatory compliance.' },
    { icon: Cpu, title: 'Continuous Learning', desc: 'Our ML systems improve over time with automated retraining pipelines that adapt to new data and changing patterns.' },
    { icon: RefreshCw, title: 'Cost-Effective', desc: 'Offshore AI development at 60%+ lower cost than Western firms, with no compromise on quality or expertise.' },
  ],
  technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT-4', 'Claude API', 'LangChain', 'LlamaIndex', 'HuggingFace', 'Pinecone', 'FAISS', 'OpenCV', 'spaCy', 'NLTK', 'FastAPI', 'MLflow', 'Kubernetes', 'AWS SageMaker'],
  faqs: [
    { q: 'What types of AI projects do you build?', a: 'We build chatbots, recommendation systems, computer vision apps, NLP tools, predictive analytics, AI agents, document processing systems, and custom ML models for virtually any industry.' },
    { q: 'How do you ensure AI model accuracy?', a: 'Through rigorous data preprocessing, cross-validation, A/B testing, and continuous monitoring. We set clear accuracy benchmarks upfront and test against real-world data before deployment.' },
    { q: 'Can you integrate AI into our existing systems?', a: 'Yes. We specialize in AI integration via APIs, webhooks, and microservices. Your existing systems remain intact while gaining powerful AI capabilities.' },
    { q: 'What data do we need to start an AI project?', a: 'It depends on the use case. Some projects can use pre-trained models (GPT, BERT) with minimal data; others require labeled datasets. We assess your data during the discovery phase.' },
  ],
  relatedServices: [
    { name: 'AI SaaS Platform', path: '/services/ai-saas-platform' },
    { name: 'Custom Software', path: '/services/custom-software' },
    { name: 'API Development', path: '/services/api-development' },
    { name: 'Web App Development', path: '/services/web-apps' },
    { name: 'Cloud & DevOps', path: '/services/it-infrastructure' },
  ],
};

export default function MachineLearningAIPage() {
  return <ServicePageTemplate data={pageData} />;
}
