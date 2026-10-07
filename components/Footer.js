'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import '../app/home-reference.css';
export default function Footer(){
 const pathname=usePathname();
 if(pathname.startsWith('/admin'))return null;
  return <footer className="home-footer">
    <div className="home-footer-cta"><div className="home-footer-cta-inner"><div><span>LET’S WORK TOGETHER</span><h2>Ready to Put Siranay to Work <em>for You?</em></h2><p>We’re currently accepting inquiries for our January 2027 carrier onboarding.<br/>Tell us about your operation, equipment, preferred lanes, and dispatch needs.</p></div><Link href="/carrier-inquiry" className="home-gold-button">CARRIER INQUIRY →</Link></div></div>
    <div className="home-footer-main"><div className="home-footer-grid"><div className="home-footer-brand"><Image src="/images/logo-header.webp" alt="Siranay Freight Management" width={2048} height={690} className="footer-logo"/><p>Reliable dispatch and carrier support for owner-operators and small fleets, with bilingual English/French support for U.S. and U.S.–Canada operations.</p></div><div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/carrier-inquiry">Carrier Inquiry</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div><h3>Our Services</h3><Link href="/services/load-sourcing-coordination">Load Sourcing &amp; Planning</Link><Link href="/services/broker-communication">Broker Communication</Link><Link href="/services/dispatch-services">Dispatch Coordination</Link><Link href="/services/billing-invoicing-support">Rate Confirmations &amp; Documentation</Link><Link href="/services/dispatch-services">U.S. Domestic Support</Link><Link href="/services/cross-border-support">U.S.–Canada Cross-Border Support</Link></div><div><h3>Contact Us</h3><p>✉ &nbsp;carriers@siranayfreight.com</p><p>♧ &nbsp;U.S. &amp; Canada Support</p><div className="home-socials"><span>in</span><span>f</span></div></div></div><div className="home-footer-bottom"><span>© 2026 Siranay Freight Management LLC. All rights reserved.</span><span>Professional Dispatch. Stronger Together.</span></div></div>
  </footer>;
}
