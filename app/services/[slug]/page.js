import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProcessSteps from '@/components/ProcessSteps';
import AudienceGrid from '@/components/AudienceGrid';
import FAQ from '@/components/FAQ';
import { services, site } from '@/lib/site';

export function generateStaticParams(){ return services.map(s=>({slug:s.slug})); }

export async function generateMetadata({params}){
  const { slug } = await params;
  const service = services.find(s=>s.slug===slug);
  if(!service) return {};
  return { title:service.title, description:service.summary, alternates:{canonical:`/services/${service.slug}`} };
}

const content = {
  'dispatch-services': ['Dispatch that keeps your operation moving','From load sourcing and rate conversations to confirmations, appointment details, and trip support, our dispatch service is structured around clear communication and practical execution.'],
  'carrier-setup-assistance': ['Start organized and road-ready','We help new and existing carriers organize setup information, broker packets, operational preferences, and the documents commonly needed to begin working efficiently.'],
  'billing-invoicing-support': ['Keep paperwork from slowing your cash flow','We help organize invoicing details, payment follow-up information, load documentation, and internal tracking so administrative work stays clear and consistent.'],
  'broker-communication': ['Professional communication on your behalf','We coordinate with brokers and shippers, confirm important load details, support rate conversations, and help resolve routine communication issues quickly and professionally.'],
  'route-coordination': ['Better planning. Fewer avoidable delays.','We support route and appointment coordination around pickup windows, delivery timing, equipment requirements, and your preferred operating lanes.'],
  'cross-border-support': ['Bilingual support for U.S.–Canada operations','Cross-border freight can require tighter communication and more moving parts. We support carriers with bilingual communication, documentation coordination, and clear operational follow-up.'],
  'load-sourcing-coordination': ['Loads aligned with your equipment and goals','We help identify freight opportunities based on your equipment, preferred lanes, schedule, and operating strategy rather than treating every load as a fit.'],
  'carrier-support': ['Support that stays with you through the trip','When load details change or questions come up, we provide responsive communication and follow-up so you are not left handling every operational issue alone.'],
  'bilingual-communication': ['English and French communication without the friction','We provide bilingual communication support for carriers and partners operating between the United States and Canada.'],
  'small-fleet-support': ['Flexible support for owner-operators and growing fleets','Our workflow is designed to scale from one truck to small multi-truck operations while keeping communication personal and organized.']
};

export default async function ServicePage({params}){
  const { slug } = await params;
  const service = services.find(s=>s.slug===slug);
  if(!service) notFound();
  const [headline,body] = content[slug] || [service.title, service.summary];
  const schema = { '@context':'https://schema.org','@type':'Service', name:service.title, description:service.summary, provider:{'@type':'Organization',name:site.name,url:site.url}, areaServed:['United States','Canada'], url:`${site.url}/services/${service.slug}` };
  return <>
    <Hero compact eyebrow="SIRANAY SERVICE" title={`${service.title.split(' ').slice(0,-1).join(' ')} {accent}`} accent={service.title.split(' ').slice(-1)[0]} text={service.summary} image={service.image} primary="Carrier Inquiry" primaryHref="/carrier-inquiry" secondary="All Services" secondaryHref="/services" />
    <section className="section"><div className="container service-detail-layout"><div className="service-detail-image"><Image src={service.contentImage || service.image} alt={service.title} fill sizes="(max-width:900px) 100vw, 45vw"/></div><div><span className="eyebrow">HOW WE HELP</span><h2>{headline}</h2><p>{body}</p><p>Every carrier has different equipment, lane preferences, operating authority, availability, and business goals. We begin by understanding those details, then build a support workflow around the parts of your operation where clear communication and coordination can create the most value.</p><Link href="/carrier-inquiry" className="btn btn-gold">Start a Carrier Inquiry →</Link></div></div></section>
    <section className="section section-muted"><div className="container"><SectionTitle eyebrow="OUR PROCESS" title="A Clear, Carrier-Focused Process" text="Simple steps, responsive communication, and practical support from inquiry through ongoing dispatch."/><ProcessSteps variant="services"/></div></section>
    <section className="section"><div className="container"><SectionTitle eyebrow="WHO WE SUPPORT" title="Built for Independent Carriers and Small Fleets"/><AudienceGrid/></div></section>
    <section className="section section-muted"><div className="container"><SectionTitle title={`${service.title} FAQs`} align="left"/><FAQ items={[[`Is ${service.title.toLowerCase()} available for owner-operators?`,'Yes. Siranay is designed to support owner-operators as well as small fleets.'],['Do you support U.S.–Canada operations?','Yes. Cross-border support is a core part of our service focus, including bilingual English/French communication.'],['How do I get started?','Complete the carrier inquiry form with your authority, equipment, lanes, and contact details. We will review the information and follow up.']]}/></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </>
}
