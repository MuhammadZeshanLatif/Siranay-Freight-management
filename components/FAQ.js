'use client';
import { useState } from 'react';
import { faqs } from '@/lib/site';
export default function FAQ({items=faqs}) {
 const [open,setOpen]=useState(-1);
 return <div className="faq-list">{items.map(([q,a],i)=><div className={`faq-item ${open===i?'open':''}`} key={q}><button aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><b aria-hidden="true">{open===i?'−':'+'}</b></button>{open===i && <div className="faq-answer"><p>{a}</p></div>}</div>)}</div>
}
