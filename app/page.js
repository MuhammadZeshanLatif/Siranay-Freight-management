import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import FAQ from '@/components/FAQ';
import './home-reference.css';

export const metadata = { alternates: { canonical: '/' } };

const steps = [
  ['document', 'Load Planning', 'We identify load opportunities that fit your equipment, route, schedule, and goals.'],
  ['chat', 'Broker Communication', 'We communicate and negotiate with brokers on your behalf to get the best rates and terms.'],
  ['document', 'Rate Confirmation & Paperwork', "We coordinate rate confirmations and routine dispatch documentation so you're prepared to roll."],
  ['truck', 'Trip Support & Follow-Up', 'We provide ongoing communication and coordination from pickup through delivery.']
];

const audiences = [
  ['Owner-Operators', 'Dedicated dispatch and support so you can stay loaded, maximize miles, and grow your income.', '/images/owner-operator.webp'],
  ['Small Fleets', 'Scalable support for growing fleets and multiple trucks, with consistent communication and coordination.', '/images/small-fleet.webp'],
  ['New Carriers', 'Guidance and support to help new carriers get started with confidence.', '/images/new-carrier.webp'],
  ['Cross-Border Carriers', 'Specialized support for U.S.–Canada operations, with bilingual English/French communication available for carriers and drivers.', '/images/cross-border-flags.webp']
];

const homeFaqs = [
  ['How do your dispatch services work?', 'We learn your equipment, preferred lanes, schedule, and goals, then help find suitable loads and coordinate the details with brokers.'],
  ['What areas and lanes do you cover?', 'We support carriers throughout the United States and on U.S.–Canada cross-border lanes.'],
  ['Do you support new carriers?', 'Yes. We can help new carriers with broker setup, paperwork, and practical dispatch guidance.'],
  ['How do you communicate with drivers?', 'We stay in contact throughout the trip and offer support in English and French.']
];

export default function HomePage() {
  return <div className="home-reference">
    <section className="home-hero">
      <div className="home-hero-inner">
        <span className="home-kicker">PROFESSIONAL DISPATCH &amp; CARRIER SUPPORT</span>
        <h1>Keep Your Truck<br/><em>Moving.</em></h1>
        <p>Reliable dispatch and carrier support for owner-operators and small fleets, with specialized bilingual English/French support for U.S.–Canada cross-border operations.</p>
        <div className="home-hero-actions"><Link href="/carrier-inquiry" className="home-gold-button">WORK WITH SIRANAY →</Link><Link href="/services" className="home-outline-button">LEARN MORE →</Link></div>
      </div>
    </section>

    <section className="home-feature-band" aria-label="Our support">
      <div className="home-feature-inner">
        <div className="home-feature"><svg className="home-us-map" viewBox="0 0 64 44" aria-hidden="true"><path d="m3 9 7-2 2 2 7-1 7 3 8-1 4 3 8-1 4 4 7-2-2 7 4 4-5 2-1 7-5-2-4 5-5-2-4 4-5-4-4 1-3-5-6-1-2-5-6-1 1-6-3-4z"/></svg><div><strong>U.S. Domestic<br/>Dispatch</strong><small>Support for carriers throughout<br/>the United States.</small></div></div>
        <div className="home-feature"><span className="home-flags" aria-label="United States and Canada flags"><svg viewBox="0 0 32 22" role="img" aria-label="United States flag"><path fill="#fff" d="M0 0h32v22H0z"/>{[0,3.38,6.76,10.14,13.52,16.9,20.28].map(y=><path key={y} fill="#c82032" d={`M0 ${y}h32v1.7H0z`}/>)}<path fill="#173b7a" d="M0 0h13v11.85H0z"/>{[2.2,5.2,8.2].map(y=>[2,5,8,11].map(x=><circle key={`${x}-${y}`} cx={x} cy={y} r=".55" fill="#fff"/>))}</svg><svg viewBox="0 0 32 22" role="img" aria-label="Canada flag"><path fill="#fff" d="M0 0h32v22H0z"/><path fill="#e21b2d" d="M0 0h7v22H0zM25 0h7v22h-7zM16 3l1.4 3.1 2.2-1.2-.3 2.3 2.4.6-1.8 1.7 1.2 2.2-3.3-.3L16 17l-1.8-5.6-3.3.3 1.2-2.2-1.8-1.7 2.4-.6-.3-2.3 2.2 1.2z"/></svg></span><div><strong>U.S.–Canada<br/>Cross-Border Support</strong><small>Specialized coordination for<br/>U.S.–Canada lanes.</small></div></div>
        <div className="home-feature"><Icon name="chat" size={38}/><div><strong>English &amp; French<br/>Communication</strong><small>Bilingual support for carriers<br/>and drivers.</small></div></div>
      </div>
    </section>

    <section className="home-process">
      <div className="home-wide">
        <div className="home-section-heading"><span>HOW SIRANAY WORKS</span><h2>You Drive. <em>We Dispatch.</em></h2><p>We handle the communication, coordination, and logistics so you can focus on the road ahead.</p></div>
        <div className="home-steps">{steps.map(([icon,title,description], index) => <div className="home-step" key={title}><div className="home-step-top"><b>{String(index + 1).padStart(2,'0')}</b><Icon name={icon} size={34}/></div><h3>{title}</h3><p>{description}</p></div>)}</div>
      </div>
    </section>

    <section className="home-partner">
      <div className="home-partner-photo"><Image src="/images/partner-road.webp" alt="Carrier beside a truck overlooking a mountain road at sunset" fill sizes="(max-width: 700px) 100vw, 52vw"/></div>
      <div className="home-partner-copy"><span className="home-small-heading">ABOUT SIRANAY</span><h2>A Partner on the Road.<br/><em>Not Just a Dispatcher.</em></h2><p><strong>Siranay Freight Management</strong> was built to support the hardworking owner-operators and small fleets who keep North America moving. We provide reliable dispatch support, clear communication, and personalized service — with bilingual English/French support for U.S.–Canada operations.</p><Link href="/about" className="home-gold-button">LEARN MORE ABOUT SIRANAY →</Link></div>
    </section>

    <section className="home-audience"><div className="home-wide"><div className="home-section-heading"><span>WHO WE SERVE</span><h2>Supporting the People Who Keep <em>America Moving.</em></h2></div><div className="home-audience-grid">{audiences.map(([title,description,src]) => <article className="home-audience-card" key={title}><div className="home-audience-photo"><Image src={src} alt={title} fill sizes="(max-width: 700px) 100vw, 25vw"/></div><div className="home-audience-content"><h3>{title}</h3><p>{description}</p><Link href="/carrier-inquiry">LEARN MORE →</Link></div></article>)}</div></div></section>

    <section className="home-faq"><div className="home-wide home-faq-inner"><div><span className="home-small-heading">FREQUENTLY ASKED QUESTIONS</span><h2>Got Questions? <em>We’ve Got Answers.</em></h2><p>Find quick answers to common questions about our dispatch services, paperwork, lanes, and support.</p><Link href="/carrier-inquiry" className="home-gold-button">CARRIER INQUIRY →</Link></div><FAQ items={homeFaqs}/></div></section>
  </div>;
}
