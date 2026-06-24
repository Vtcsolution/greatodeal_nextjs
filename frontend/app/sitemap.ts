import { MetadataRoute } from 'next';

const BASE_URL = 'https://greatodeal.com';

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
  { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/services/web-apps`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/mobile-apps`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/machine-learning-ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/custom-software`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/ai-saas-platform`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/api-development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/ui-ux-design`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/software-testing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/it-infrastructure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/industries`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/industries/banking`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries/ecommerce`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries/education`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries/construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries/investment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries/oil-gas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries/public-sector`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries/supply-chain`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/how-we-work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/partnership`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/estimate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/blogs?limit=500`, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (data.success && data.data) {
      blogRoutes = data.data.map((blog: { _id: string; updatedAt: string }) => ({
        url: `${BASE_URL}/blog/${blog._id}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
    }
  } catch { /* fallback to static only */ }

  return [...staticRoutes, ...blogRoutes];
}
