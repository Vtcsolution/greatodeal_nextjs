'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { Zap, Activity, MapPin, Shield, BarChart2, Smartphone, AlertTriangle } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'Oil & Gas',
  subtitle: 'Energy Sector Technology',
  description: 'We deliver robust, reliable technology solutions for the oil and gas sector — from SCADA integration and asset management to HSE compliance and production optimization systems.',
  icon: Zap,
  heroIcon: Zap,
  heroImage: '/images/Oilgas.png',
  stats: [
    { value: '24/7', label: 'System Monitoring' },
    { value: 'ISO 55000', label: 'Asset Management' },
    { value: 'ATEX', label: 'Safety Standards' },
    { value: '40%', label: 'Operational Savings' },
  ],
  challenges: [
    'Aging infrastructure and legacy SCADA systems', 'Remote operations with limited connectivity',
    'HSE compliance and safety incident tracking', 'Equipment failure prediction and maintenance planning',
    'Production data accuracy and reporting', 'Environmental monitoring and compliance',
    'Complex supply chain and logistics coordination', 'Workforce management in remote locations',
  ],
  solutions: [
    { icon: Activity, title: 'SCADA Integration', desc: 'Modern SCADA interfaces with real-time monitoring, alerts, and historical data analysis for oil field operations.' },
    { icon: MapPin, title: 'Asset Management System', desc: 'ISO 55000 compliant asset lifecycle management from commissioning to decommissioning.' },
    { icon: Shield, title: 'Field Operations Apps', desc: 'Offline-capable mobile apps for inspections, work orders, permit-to-work, and incident reporting.' },
    { icon: BarChart2, title: 'HSE Management', desc: 'Digital HSE workflows: risk assessments, incident reporting, near-miss tracking, and compliance dashboards.' },
    { icon: Smartphone, title: 'Predictive Maintenance AI', desc: 'ML-powered equipment failure prediction reducing unplanned downtime and maintenance costs.' },
    { icon: AlertTriangle, title: 'Production Analytics', desc: 'Real-time production monitoring, well performance analytics, and production optimization dashboards.' },
  ],
  features: [
    'Real-time equipment monitoring', 'Predictive maintenance alerts', 'Permit-to-Work system',
    'Incident & near-miss reporting', 'Environmental compliance tracking', 'Inventory & spare parts management',
    'Pipeline integrity management', 'Contractor management', 'Production reporting & KPIs',
    'GIS mapping & spatial analytics', 'Energy consumption monitoring', 'Regulatory compliance reporting',
  ],
  technologies: ['Python', 'Node.js', 'PostgreSQL', 'InfluxDB', 'Grafana', 'MQTT', 'OPC-UA', 'AWS IoT', 'Docker', 'React', 'ArcGIS', 'TensorFlow', 'Redis', 'Kafka', 'REST APIs'],
};

export default function OilGasPage() {
  return <IndustryPageTemplate data={pageData} />;
}
