import Icon from '@/components/Icon';
import Hero from '@/components/Hero';
import FeatureStrip from '@/components/FeatureStrip';
import SectionTitle from '@/components/SectionTitle';
import { CoreServiceCards, DetailedServiceCards } from '@/components/ServiceGrid';
import ProcessSteps from '@/components/ProcessSteps';
import AudienceGrid from '@/components/AudienceGrid';
import StatsBand from '@/components/StatsBand';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Services',
  description: 'Dispatch, carrier setup, broker communication, cross-border support, route coordination, billing and ongoing carrier support.',
  alternates: { canonical: '/services' }
};

export default function ServicesPage(){return <>
  <Hero compact className="hero-services" eyebrow="OUR SERVICES" title="Dispatch and Carrier Support Designed for {accent}" accent="Your Success." text="We handle the communication, coordination, and logistics so you can focus on driving. From load sourcing to broker communication, route planning, and bilingual English/French support, Siranay provides reliable dispatch services for U.S.–Canada cross-border operations." image="/images/hero-services-truck.webp" primary="Request Services" primaryHref="/carrier-inquiry" secondary="Carrier Inquiry" secondaryHref="/carrier-inquiry" />
  <FeatureStrip />
  <section className="section"><div className="container"><SectionTitle eyebrow="OUR CORE SERVICES" title="What We {accent}" accent="Do" text="Complete dispatch and carrier support, tailored to your needs."/><CoreServiceCards/></div></section>
  <section className="section section-muted"><div className="container"><SectionTitle eyebrow="OUR DETAILED SERVICES" title="Dispatch Solutions Built Around {accent}" accent="Your Operation" text="More than just load booking — we provide complete support to help you run a more profitable, efficient and stress-free business."/><DetailedServiceCards/></div></section>
  <section className="section"><div className="container"><SectionTitle eyebrow="OUR PROCESS" title="How We Work {accent}" accent="With Drivers" text="A simple, streamlined process to get you loaded and keep you moving."/><ProcessSteps variant="services"/></div></section>
  <section className="section section-muted"><div className="container"><SectionTitle eyebrow="WHY CHOOSE US" title="Why Carriers Choose {accent}" accent="Siranay" text="We're more than a dispatch service — we're a partner in your success."/><div className="value-grid six">{[['users','Personalized Support','Real people who care about your business and success.'],['truck','Small Fleet Friendly','We proudly support owner-operators and small fleets.'],['chat','Responsive Communication','Quick responses and consistent updates whenever you need us.'],['globe','Bilingual English/French Support','Clear communication for U.S.–Canada operations.'],['shield','Honest, Transparent Dispatch','No hidden fees, no false promises, just honest work.'],['chart','Focus on Long-Term Success','We build lasting relationships and help your business grow.']].map(([i,t,d])=><div className="value-card" key={t}><span className="emoji-icon"><Icon name={i} size={39}/></span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
  <section className="section"><div className="container"><SectionTitle eyebrow="WHO WE SERVE" title="Who We Support" text="We work with a wide range of carriers, from independent drivers to growing fleets."/><AudienceGrid/></div></section>
  <StatsBand title="Trusted Support. Real Results."/>
  <section className="section"><div className="container faq-split reverse"><div className="faq-visual"><img src="/images/dispatch-detail.webp" alt="Dispatch truck"/></div><div><span className="eyebrow">FAQ</span><h2>Frequently Asked <span>Questions</span></h2><FAQ/></div></div></section>
</>}
