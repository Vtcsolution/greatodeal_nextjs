'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { Building2, Map, ClipboardList, BarChart2, Smartphone, Wrench, Shield } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'Construction & Real Estate',
  subtitle: 'PropTech & ConTech Solutions',
  description: 'We digitize the construction and real estate industry with powerful project management tools, BIM integrations, property platforms, and field operations software.',
  icon: Building2,
  heroIcon: Building2,
  heroVideo: '/images/construction_site.mp4',
  stats: [
    { value: '35%', label: 'Cost Reduction' },
    { value: '50%', label: 'Faster Projects' },
    { value: 'BIM', label: 'Ready Integrations' },
    { value: '30+', label: 'Construction Projects' },
  ],
  challenges: [
    'Poor project visibility and real-time status tracking',
    'Manual document management and version control',
    'Budget overruns and cost tracking difficulties',
    'Communication gaps between office and field teams',
    'Material and resource scheduling inefficiencies',
    'Safety compliance and incident reporting',
    'Subcontractor coordination and payment management',
    'Property listing management and lead tracking',
  ],
  solutions: [
    { icon: Map, title: 'Construction ERP', desc: 'End-to-end ERP covering project management, procurement, inventory, financials, and HR.' },
    { icon: ClipboardList, title: 'BIM Integration', desc: 'BIM-connected workflows for 3D model viewing, clash detection, and construction sequencing.' },
    { icon: BarChart2, title: 'Field Management Apps', desc: 'Mobile apps for field workers: daily logs, inspections, punch lists, and photo documentation.' },
    { icon: Smartphone, title: 'Property Portals', desc: 'Feature-rich property listing, search, virtual tours, and CRM for real estate agencies.' },
    { icon: Wrench, title: 'Project Analytics', desc: 'Real-time dashboards for budget, schedule, resource utilization, and project health scoring.' },
    { icon: Shield, title: 'Safety & Compliance', desc: 'Digital safety checklists, incident reporting, certification tracking, and regulatory compliance.' },
  ],
  features: [
    'Gantt charts & timeline management', 'Budget tracking & cost control', 'Document management & version control',
    'Material & equipment tracking', 'Subcontractor management', 'Safety inspections & audits',
    'Drawing management & RFI tracking', 'Change order management', 'IoT sensor integration',
    'AR/VR project visualization', 'Client portal & reporting', 'GPS field tracking',
  ],
  technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Google Maps API', 'Autodesk BIM 360', 'Revit API', 'Docker', 'React Native', 'Firebase', 'IoT/MQTT', 'Stripe', 'Twilio'],
};

export default function ConstructionPage() {
  return <IndustryPageTemplate data={pageData} />;
}
