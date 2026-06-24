'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { Package, Package2, Truck, Map, BarChart2, Smartphone, Link2 } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'Supply Chain & Logistics',
  subtitle: 'LogTech Innovation Experts',
  description: 'We build intelligent supply chain and logistics platforms that improve visibility, reduce costs, and optimize operations from warehouse to last-mile delivery.',
  icon: Package,
  heroIcon: Package,
  heroImage: '/images/supplychain.png',
  stats: [
    { value: '30%', label: 'Cost Reduction' },
    { value: 'Real-time', label: 'Shipment Tracking' },
    { value: '25%', label: 'Faster Delivery' },
    { value: '40+', label: 'Logistics Projects' },
  ],
  challenges: [
    'Lack of real-time supply chain visibility', 'Manual warehouse operations causing errors',
    'Inefficient route planning and fuel costs', 'Poor demand forecasting leading to stockouts',
    'Last-mile delivery challenges', 'Returns management complexity',
    'Multi-carrier integration difficulties', 'Compliance with customs and trade regulations',
  ],
  solutions: [
    { icon: Package2, title: 'Warehouse Management System (WMS)', desc: 'Automated warehouse operations: receiving, picking, packing, shipping, and inventory control.' },
    { icon: Truck, title: 'Fleet Tracking & TMS', desc: 'Real-time GPS fleet tracking, driver management, and transportation management systems.' },
    { icon: Map, title: 'Route Optimization', desc: 'AI-powered route planning that reduces fuel costs, delivery times, and carbon footprint.' },
    { icon: BarChart2, title: 'Supply Chain Analytics', desc: 'Demand forecasting, inventory optimization, and supply chain performance dashboards.' },
    { icon: Smartphone, title: 'Driver & Field Apps', desc: 'Mobile apps for delivery proof, POD capture, driver communication, and navigation.' },
    { icon: Link2, title: 'Carrier Integration', desc: 'Multi-carrier API integration for rate shopping, label printing, and tracking aggregation.' },
  ],
  features: [
    'Real-time inventory tracking', 'Barcode & RFID scanning', 'Multi-warehouse management',
    'Purchase order management', 'Vendor portal', 'Customs & trade compliance',
    'Returns (reverse logistics) management', 'Cold chain monitoring', 'Shipment delay alerts',
    'Customer tracking portal', 'Analytics & reporting', 'IoT sensor integration',
  ],
  technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'React', 'React Native', 'Google Maps API', 'HERE Maps', 'AWS', 'IoT/MQTT', 'RFID', 'Docker', 'Redis', 'Kafka', 'REST APIs'],
};

export default function SupplyChainPage() {
  return <IndustryPageTemplate data={pageData} />;
}
