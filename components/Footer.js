import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import Icon from './Icon';

export default function Footer() {
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
            <Image src="/images/logo.webp" alt="Siranay Freight Management" width={220} height={54} />
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
