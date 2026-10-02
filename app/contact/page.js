import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icon';
import { site } from '@/lib/site';

export const metadata = { title:'Contact', description:'Contact Siranay Freight Management for dispatch, carrier support, bilingual communication, and cross-border assistance.', alternates:{canonical:'/contact'} };

export default function ContactPage(){return <>
  <Hero compact eyebrow="CONTACT SIRANAY" title="Let's Talk About Your {accent}" accent="Operation." text="Have questions about dispatch, carrier support, or U.S.–Canada cross-border operations? Send us a message and we'll follow up." image="/images/hero-truck.webp" primary="Carrier Inquiry" primaryHref="/carrier-inquiry" secondary="View Services" secondaryHref="/services"/>
  <section className="section"><div className="container contact-layout"><div><span className="eyebrow">GET IN TOUCH</span><h2>We're Here to Help You Keep Moving.</h2><p>Whether you're an owner-operator, a small fleet, or a new carrier, Siranay provides practical dispatch and carrier support designed around your operation.</p><div className="contact-cards"><div><Icon name="phone" size={28}/><strong>Phone</strong><span>{site.phone}</span></div><div><Icon name="mail" size={28}/><strong>Email</strong><span>{site.email}</span></div><div><Icon name="pin" size={28}/><strong>Coverage</strong><span>U.S. & Canada</span></div><div><Icon name="chat" size={28}/><strong>Languages</strong><span>English / French</span></div></div></div><ContactForm/></div></section>
</>}
