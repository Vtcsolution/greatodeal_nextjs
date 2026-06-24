'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { ShoppingCart, Store, Smartphone, BarChart2, Truck, CreditCard, Star } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'E-Commerce & Retail',
  subtitle: 'Online Commerce Experts',
  description: 'We build high-converting e-commerce experiences that drive sales. From custom online stores to multi-vendor marketplaces, we create digital commerce solutions that scale with your business.',
  icon: ShoppingCart,
  heroIcon: ShoppingCart,
  heroVideo: '/images/shopping.mp4',
  stats: [
    { value: '300%', label: 'Avg. Conversion Lift' },
    { value: '50ms', label: 'Page Load Speed' },
    { value: '99.9%', label: 'System Uptime' },
    { value: '150+', label: 'E-Commerce Projects' },
  ],
  challenges: [
    'High cart abandonment rates and poor conversion',
    'Scaling during peak traffic (Black Friday, etc.)',
    'Complex inventory management across warehouses',
    'Multi-vendor marketplace coordination',
    'Omnichannel integration (online + physical store)',
    'Payment security and fraud prevention',
    'Mobile commerce experience optimization',
    'International expansion with multi-currency support',
  ],
  solutions: [
    { icon: Store, title: 'Custom E-Commerce Platforms', desc: 'Tailor-made online stores built for performance, conversion, and brand consistency.' },
    { icon: Smartphone, title: 'Multi-Vendor Marketplaces', desc: 'Scalable marketplace platforms like Amazon/Etsy with vendor management, commissions, and analytics.' },
    { icon: BarChart2, title: 'Mobile Commerce Apps', desc: 'Native iOS and Android shopping apps with push notifications, wishlists, and seamless checkout.' },
    { icon: Truck, title: 'Inventory & WMS', desc: 'Real-time inventory management, multi-warehouse support, and automated reorder systems.' },
    { icon: CreditCard, title: 'Omnichannel Integration', desc: 'Unified commerce connecting your online store, physical stores, POS, and social commerce.' },
    { icon: Star, title: 'AI Personalization', desc: 'AI-powered product recommendations, dynamic pricing, and personalized shopping experiences.' },
  ],
  features: [
    'One-click checkout & express payment', 'Multi-currency & language support', 'Advanced product filtering & search',
    'AR product try-on features', 'Subscription & recurring billing', 'Loyalty & rewards programs',
    'Real-time inventory tracking', 'Abandoned cart recovery', 'SEO-optimized product pages',
    'Analytics & conversion tracking', 'Social commerce integration', 'Automated email marketing',
  ],
  technologies: ['Next.js', 'React', 'Node.js', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Elasticsearch', 'Redis', 'AWS', 'Algolia', 'Klaviyo', 'Google Analytics', 'Twilio', 'MongoDB'],
};

export default function EcommercePage() {
  return <IndustryPageTemplate data={pageData} />;
}
