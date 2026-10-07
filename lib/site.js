export const site = {
  name: 'Siranay Freight Management LLC',
  shortName: 'Siranay Freight Management',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://siranayfreight.com',
  email: 'info@siranayfreight.com',
  phone: '+1 (000) 000-0000',
  region: 'U.S. & Canada',
  description:
    'Professional dispatch and carrier support for owner-operators and small fleets, with bilingual English/French communication and cross-border support across the U.S. and Canada.'
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/carrier-inquiry', label: 'Carrier Inquiry' },
  { href: '/contact', label: 'Contact' }
];

export const services = [
  {
    slug: 'dispatch-services',
    title: 'Dispatch Services',
    image: '/images/dispatch-detail.webp',
    contentImage: '/images/originals/original-3.webp',
    summary: 'We find reliable loads, negotiate rates, coordinate with brokers, confirm appointments, and keep your freight moving.'
  },
  {
    slug: 'carrier-setup-assistance',
    title: 'Carrier Setup Assistance',
    image: '/images/carrier-setup.webp',
    contentImage: '/images/originals/original-7.webp',
    summary: 'Support with broker setup, paperwork, compliance details, and practical onboarding steps to get your operation road-ready.'
  },
  {
    slug: 'billing-invoicing-support',
    title: 'Billing & Invoicing Support',
    image: '/images/billing.webp',
    contentImage: '/images/originals/original-7.webp',
    summary: 'Organized invoicing, payment follow-up, document tracking, and admin support designed to help you get paid faster.'
  },
  {
    slug: 'broker-communication',
    title: 'Broker Communication',
    image: '/images/broker-communication.webp',
    contentImage: '/images/originals/original-7.webp',
    summary: 'Clear, professional communication with brokers and shippers so you always know what is happening with your load.'
  },
  {
    slug: 'route-coordination',
    title: 'Route Coordination',
    image: '/images/route-planning.webp',
    contentImage: '/images/originals/original-4.webp',
    summary: 'Strategic route planning and appointment coordination focused on timing, practical miles, and minimizing avoidable delays.'
  },
  {
    slug: 'cross-border-support',
    title: 'Cross-Border Support',
    image: '/images/cross-border-detail.webp',
    contentImage: '/images/originals/original-2-2.webp',
    summary: 'Bilingual English/French communication and coordination support for carriers operating across U.S.–Canada lanes.'
  },
  {
    slug: 'load-sourcing-coordination',
    title: 'Load Sourcing & Coordination',
    image: '/images/load-sourcing.webp',
    contentImage: '/images/originals/original-1.webp',
    summary: 'Freight opportunity sourcing matched to your equipment, route goals, operating area, and preferred schedule.'
  },
  {
    slug: 'carrier-support',
    title: 'Ongoing Carrier Support',
    image: '/images/ongoing-support.webp',
    contentImage: '/images/originals/original-2-2.webp',
    summary: 'Day-to-day communication, issue handling, appointment updates, and support that stays with you through the trip.'
  },
  {
    slug: 'bilingual-communication',
    title: 'Bilingual Communication',
    image: '/images/cross-border-flags.webp',
    summary: 'Professional English and French communication for carriers, brokers, and customers on both sides of the border.'
  },
  {
    slug: 'small-fleet-support',
    title: 'Small Fleet Support',
    image: '/images/small-fleet.webp',
    contentImage: '/images/originals/original-2-1.webp',
    summary: 'Flexible support built for owner-operators and small fleets that need responsive, practical operational help.'
  }
];

export const audience = [
  { title: 'Owner-Operators', image: '/images/originals/original-3.webp', text: 'Dedicated dispatch and support so you can stay loaded, maximize miles, and grow your income.' },
  { title: 'Small Fleets', image: '/images/originals/original-2-1.webp', text: 'Scalable support for growing fleets and multiple trucks, with consistent communication and coordination.' },
  { title: 'New Carriers', image: '/images/originals/original-2-2.webp', text: 'Guidance and support to help new carriers get started with confidence.' },
  { title: 'Cross-Border Trucking Businesses', image: '/images/originals/original-2-2.webp', text: 'Specialized support for U.S.–Canada operations with bilingual communication and customs-aware coordination.' }
];

export const faqs = [
  ['How do your dispatch services work?', 'We learn your equipment, operating preferences, preferred lanes, timing, and business goals. We then help source suitable loads, coordinate communication, support rate negotiation, and stay involved through the trip.'],
  ['Do you handle rate confirmations and paperwork?', 'Yes. We can support rate confirmation review, setup paperwork, load documents, appointment details, and organized administrative follow-up.'],
  ['What areas and lanes do you cover?', 'Our focus is on U.S. domestic and U.S.–Canada cross-border support. Specific lanes depend on your equipment, authority, and operating preferences.'],
  ['Do you support new carriers?', 'Yes. We work with newly established carriers and can help with onboarding, setup, dispatch workflow, and communication processes.'],
  ['How do you communicate with drivers?', 'We keep communication clear and responsive through the agreed channels and can provide English/French support when needed.']
];
