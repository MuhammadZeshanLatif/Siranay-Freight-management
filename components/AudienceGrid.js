import Image from 'next/image';
import Link from 'next/link';
import { audience } from '@/lib/site';
export default function AudienceGrid({links=true}) {return <div className="audience-grid">{audience.map((a,i)=><article className="audience-card" key={a.title}><div className="audience-image"><Image src={a.image} alt={a.title} fill sizes="(max-width:768px) 100vw, 25vw"/></div><div className="audience-copy"><h3>{a.title}</h3><p>{a.text}</p>{links && <Link href="/carrier-inquiry" className="text-link">Learn more →</Link>}</div></article>)}</div>}
