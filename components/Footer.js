'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import Icon from './Icon';

export default function Footer() {
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const isHome = pathname === '/' || pathname === '/services';
  if (pathname.startsWith('/admin')) return null;
  if (pathname === '/carrier-inquiry') return <footer className="ir-footer"><div className="ir-footer-grid"><div><Image src="/images/logo-header.webp" alt="Siranay Freight Management" width={2048} height={690} className="ir-footer-logo"/></div><div><p>Reliable dispatch and carrier support for owner-operators and small fleets across the United States.</p></div><div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/carrier-inquiry">Carrier Inquiry</Link></div><div><h3>Contact Us</h3><p><Icon name="mail" size={18}/>carriers@siranayfreight.com</p><p><Icon name="pin" size={18}/>U.S. &amp; Canada Support</p></div></div><div className="ir-footer-bottom"><span>© 2026 Siranay Freight Management LLC. All rights reserved.</span><span>Professional Dispatch. Stronger Together.</span></div></footer>;
  if (pathname === '/about') return <footer className="about-footer"><div className="about-footer-cta"><div className="about-footer-cta-inner"><div><h2>Let’s Keep Your Business <em>Moving.</em></h2><p>Whether you operate within the United States or run U.S.–Canada cross-border lanes,<br/>Siranay is here to provide professional, personalized carrier support.</p></div><Link href="/carrier-inquiry" className="btn btn-gold">CARRIER INQUIRY →</Link></div></div><div className="about-footer-grid"><div><Image src="/images/logo-header.webp" alt="Siranay Freight Management" width={2048} height={690} className="about-footer-logo"/></div><div><p>Professional dispatch and carrier support for owner-operators and small fleets across the United States.</p></div><div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/carrier-inquiry">Carrier Inquiry</Link></div><div><h3>Contact</h3><p><Icon name="mail" size={18}/>carriers@siranayfreight.com</p><p><Icon name="pin" size={18}/>U.S. &amp; Canada Support</p></div></div><div className="about-footer-bottom"><span>© 2026 Siranay Freight Management LLC. All rights reserved.</span><span>Professional Dispatch. Stronger Together.</span></div></footer>;
  if (isHome) return <footer className="home-footer">
    <div className="home-footer-cta"><div className="home-footer-cta-inner"><div><span>{pathname === '/services' ? 'LET’S WORK TOGETHER' : 'LET’S MOVE FORWARD TOGETHER'}</span><h2>Ready to Put Siranay to Work <em>for You?</em></h2><p>We’re currently accepting inquiries for our January 2027 carrier onboarding.<br/>Tell us about your operation, equipment, preferred lanes, and dispatch needs.</p></div><Link href="/carrier-inquiry" className="home-gold-button">CARRIER INQUIRY →</Link></div></div>
    <div className="home-footer-main"><div className="home-footer-grid"><div className="home-footer-brand"><Image src="/images/logo-header.webp" alt="Siranay Freight Management" width={2048} height={690} className="footer-logo"/><p>Reliable dispatch and carrier support for owner-operators and small fleets, with bilingual English/French support for U.S. and U.S.–Canada operations.</p></div><div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/carrier-inquiry">Carrier Inquiry</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div><h3>Our Services</h3><Link href="/services/load-sourcing-coordination">Load Sourcing &amp; Planning</Link><Link href="/services/broker-communication">Broker Communication</Link><Link href="/services/dispatch-services">Dispatch Coordination</Link><Link href="/services/billing-invoicing-support">Rate Confirmations &amp; Documentation</Link><Link href="/services/dispatch-services">U.S. Domestic Support</Link><Link href="/services/cross-border-support">U.S.–Canada Cross-Border Support</Link></div><div><h3>Contact Us</h3><p>✉ &nbsp;carriers@siranayfreight.com</p><p>♧ &nbsp;U.S. &amp; Canada Support</p><div className="home-socials"><span>in</span><span>f</span></div></div></div><div className="home-footer-bottom"><span>© 2026 Siranay Freight Management LLC. All rights reserved.</span><span>Professional Dispatch. Stronger Together.</span></div></div>
  </footer>;
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <span className="eyebrow light">LET'S MOVE FORWARD TOGETHER</span>
            <h2>Ready to Put Siranay to Work for <span>You?</span></h2>
            <p>Join our network of trusted carriers and get the support you need to go further.</p>
          </div>
          <div className="footer-cta-actions">
            <Link className="btn btn-gold" href="/carrier-inquiry">Carrier Inquiry →</Link>
            <Link className="btn btn-outline-light" href="/contact">Contact Us →</Link>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo-header.webp" alt="Siranay Freight Management" width={2048} height={690} className="footer-logo" />
            <p>Reliable dispatch and carrier support for owner-operators and small fleets, with specialized bilingual English/French support across U.S. and Canada operations.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/carrier-inquiry">Carrier Inquiry</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <h3>Our Services</h3>
            <Link href="/services/dispatch-services">Dispatch Services</Link><Link href="/services/cross-border-support">Cross-Border Support</Link><Link href="/services/carrier-setup-assistance">Carrier Setup</Link><Link href="/services/broker-communication">Broker Communication</Link><Link href="/services/billing-invoicing-support">Billing & Invoicing</Link><Link href="/services/bilingual-communication">Bilingual Support</Link>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p className="contact-line"><Icon name="phone" size={16}/>{site.phone}</p>
            <p className="contact-line"><Icon name="mail" size={16}/>{site.email}</p>
            <p className="contact-line"><Icon name="pin" size={16}/>{site.region} Support</p>
            <div className="socials"><span>in</span><span>f</span></div>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Siranay Freight Management LLC. All rights reserved.</span><span>Professional Dispatch. Stronger Together.</span></div>
      </div>
    </footer>
  );
}

