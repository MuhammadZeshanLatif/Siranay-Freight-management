import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { services } from '@/lib/site';

const topServices = [
  {slug:'load-sourcing-coordination', title:'Load Sourcing & Coordination', image:'/images/load-sourcing.webp', icon:'truck', bullets:['Find profitable load opportunities','Match loads to your equipment and preferred lanes','Negotiate rates on your behalf','Confirm load details and appointments','Help reduce deadhead miles']},
  {slug:'broker-communication', title:'Broker Communication & Negotiation', image:'/images/broker-communication.webp', icon:'chat', bullets:['Communicate with brokers and shippers','Negotiate competitive rates and terms','Handle load confirmations','Resolve issues quickly and professionally','Represent you with integrity']},
  {slug:'cross-border-support', title:'Cross-Border Support (U.S. – Canada)', image:'/images/cross-border-flags.webp', icon:'globe', bullets:['Guidance with customs requirements','Coordinate documentation and filings','Bilingual English/French communication','Support for cross-border lanes and compliance','Stay up to date on regulations']},
  {slug:'route-coordination', title:'Route Planning & Scheduling', image:'/images/route-planning.webp', icon:'pin', bullets:['Plan efficient routes to maximize miles','Coordinate pickups and deliveries','Provide updates on route changes','Keep you informed every step of the way','Minimize downtime']},
  {slug:'carrier-support', title:'Ongoing Carrier Support', image:'/images/ongoing-support.webp', icon:'shield', bullets:['Handle load changes and issues','Assist with lumper, detention, and accessorials','Provide consistent communication','Support designed to keep you loaded','Available throughout your trips']},
  {slug:'dispatch-services', title:'Performance-Focused Dispatch', image:'/images/performance-dispatch.webp', icon:'chart', bullets:['Focus on long-term relationships','Work to keep you loaded and moving','Track performance and opportunities','Clear, honest communication','Professional, responsive service']}
];

export function CoreServiceCards() {
  return <div className="core-service-grid">{topServices.map(item=><article className="core-service-card" key={item.slug}><div className="service-image-wrap"><Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw, 33vw"/><span className="service-icon"><Icon name={item.icon} size={25}/></span></div><h3>{item.title}</h3><ul>{item.bullets.map(b=><li key={b}>{b}</li>)}</ul><Link href={`/services/${item.slug}`} className="text-link">Learn more →</Link></article>)}</div>
}

export function DetailedServiceCards({ home = false }) {
  const icons = ['truck','document','dollar','chat','route','globe'];
  const selected = home ? services.slice(0,6) : [services[0],services[1],services[2],services[5]];
  return <div className={home ? 'home-service-grid' : 'detailed-service-grid'}>{selected.map((item,index)=><article className={home ? 'home-service-card' : 'detailed-service-card'} key={item.slug}>{home ? <span className="service-tile-icon"><Icon name={icons[index]} size={38}/></span> : <div className="detail-img"><Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw, 24vw"/></div>}<div className="detail-content"><h3>{item.title}</h3><p>{item.summary}</p><Link href={`/services/${item.slug}`} className={home ? 'text-link' : 'btn btn-gold btn-small'}>Learn More →</Link></div></article>)}</div>
}
