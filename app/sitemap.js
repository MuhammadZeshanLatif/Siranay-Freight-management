import { services, site } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(){
  const staticRoutes = ['','/services','/about','/carrier-inquiry','/contact','/privacy-policy','/terms','/disclaimer'];
  return [
    ...staticRoutes.map(route=>({url:`${site.url}${route}`,lastModified:new Date(),changeFrequency:route===''?'weekly':'monthly',priority:route===''?1:0.7})),
    ...services.map(s=>({url:`${site.url}/services/${s.slug}`,lastModified:new Date(),changeFrequency:'monthly',priority:0.75}))
  ];
}
