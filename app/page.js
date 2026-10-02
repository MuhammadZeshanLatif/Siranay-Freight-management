import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureStrip from '@/components/FeatureStrip';
import SectionTitle from '@/components/SectionTitle';
import ProcessSteps from '@/components/ProcessSteps';
import { DetailedServiceCards } from '@/components/ServiceGrid';
import AudienceGrid from '@/components/AudienceGrid';
import StatsBand from '@/components/StatsBand';
import FAQ from '@/components/FAQ';
import Icon from '@/components/Icon';

export const metadata = { alternates: { canonical: '/' } };

export default function HomePage() {
  return <>
    <Hero eyebrow="PROFESSIONAL DISPATCH & CARRIER SUPPORT" title="Keep Your Truck {accent}" accent="Moving." text="Reliable dispatch and carrier support for owner-operators and small fleets, with specialized bilingual English/French support for U.S.–Canada cross-border operations." />
    <FeatureStrip />

    <section className="section section-tight">
      <div className="container">
        <SectionTitle eyebrow="HOW SIRANAY WORKS" title="You Drive. {accent}" accent="We Dispatch." text="We handle the communication, coordination, and logistics so you can focus on the road ahead." />
        <ProcessSteps />
      </div>
    </section>

    <section className="section services-scenic">
      <div className="container">
        <SectionTitle eyebrow="OUR SERVICES" title="Complete Dispatch & {accent}" accent="Carrier Support" text="Everything you need to keep your truck moving and your business growing." />
        <DetailedServiceCards home />
      </div>
    </section>

    <section className="section partner-section">
      <div className="partner-image"><Image src="/images/partner-road.webp" alt="Driver overlooking trucks on the road" fill sizes="(max-width: 900px) 100vw, 45vw"/></div>
      <div className="container partner-inner">
        <div className="partner-spacer" />
        <div className="partner-copy">
          <span className="eyebrow">ABOUT SIRANAY</span>
          <h2>A Partner on the Road. <span>Not Just a Dispatcher.</span></h2>
          <p>Siranay Freight Management was built to support the hardworking owner-operators and small fleets who keep North America moving. We understand the challenges you face, and we are here to make your job easier with reliable dispatch, clear communication, and personalized support — in English and French.</p>
          <Link href="/about" className="btn btn-gold">Our Story →</Link>
        </div>
        <div className="partner-points">
          {[['users','Dedicated Support','A real team that cares about your success.'],['clock','Fewer Delays','Proactive communication keeps you moving.'],['star','Personalized Service','You are not just a number.'],['chart','Small Fleet Friendly','Built for owner-operators and growing fleets.']].map(([i,t,d])=><div key={t}><span className="soft-icon"><Icon name={i} size={22}/></span><p><strong>{t}</strong><small>{d}</small></p></div>)}
        </div>
      </div>
    </section>

    <StatsBand />

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="WHO WE SERVE" title="Supporting the People Who Keep {accent}" accent="North America Moving" />
        <AudienceGrid />
      </div>
    </section>

    <section className="section">
      <div className="container faq-split">
        <div className="faq-intro"><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Got Questions? <span>We've Got Answers.</span></h2><p>Find quick answers to common questions about our dispatch services, paperwork, lanes, and support.</p><Link href="/contact" className="btn btn-gold">Contact Us →</Link></div>
        <FAQ />
      </div>
    </section>
  </>;
}
