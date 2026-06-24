import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Machine Learning & AI Development Services | Greatodeal Pakistan',
  description: 'Expert AI and machine learning development: NLP, computer vision, predictive analytics, AI agents, chatbots, and automation. Greatodeal — Pakistan\'s top AI development company serving global clients.',
  keywords: ['machine learning development', 'AI development', 'artificial intelligence', 'NLP', 'natural language processing', 'computer vision', 'predictive analytics', 'AI agents', 'chatbot development', 'deep learning', 'AI automation', 'ML models', 'AI company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Machine Learning & AI Development Services | Greatodeal Pakistan',
    description: 'Expert AI and machine learning development: NLP, computer vision, predictive analytics, AI agents, chatbots, and automation. Greatodeal — Pakistan\'s top AI development company.',
    url: 'https://greatodeal.com/services/machine-learning-ai',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Machine Learning & AI Services' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/machine-learning-ai',
  },
};

export default function Page() {
  return <Content />;
}
