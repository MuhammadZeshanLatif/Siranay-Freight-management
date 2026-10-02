import Icon from './Icon';
const items = [
  ['users','Owner-Operator Focused','Your success drives ours'],
  ['globe','U.S. – Canada Support','Cross-border expertise'],
  ['chat','Bilingual English / French','Clear communication'],
  ['clock','Responsive Dispatch','Fast support when needed'],
  ['shield','Transparent Billing','No hidden surprises']
];
export default function FeatureStrip() {
  return <section className="feature-strip"><div className="container feature-strip-grid">{items.map(([icon,title,text])=><div className="feature-strip-item" key={title}><span className="icon-ring"><Icon name={icon} size={27}/></span><div><strong>{title}</strong><small>{text}</small></div></div>)}</div></section>
}
