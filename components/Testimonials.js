const items = [
  ['Mike T.','Owner-Operator','Ontario, Canada','“Siranay has been a game changer for my business. Great loads, clear communication, and always there when I need support.”'],
  ['James R.','Small Fleet Owner','Texas, USA','“Professional, reliable, and easy to work with. They handle everything so I can focus on driving. Highly recommend!”'],
  ['Luc D.','Owner-Operator','Québec, Canada','“The bilingual support makes cross-border runs so much easier. Siranay truly understands the needs of drivers.”']
];
export default function Testimonials({title='Trusted by Owner-Operators & Fleets'}) {return <div className="testimonials-wrap"><h2>{title}</h2><div className="testimonials-grid">{items.map(([name,role,place,quote],i)=><article className="testimonial" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="testimonial-person"><div className="avatar">{name[0]}</div><div><strong>{name}</strong><span>{role}</span><small>{place}</small></div></div></article>)}</div></div>}
