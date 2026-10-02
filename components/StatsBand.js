import Icon from './Icon';
const stats = [
 ['clock','5 min','Average Response Time'],['chat','100%','Bilingual Support (English / French)'],['pin','U.S. & Canada','Cross-Border Coverage'],['star','98%','Client Satisfaction']
];
export default function StatsBand({title='Real Results for Real Drivers.'}) {return <section className="stats-band"><div className="container stats-inner"><div className="stats-heading"><span className="eyebrow light">BY THE NUMBERS</span><h2>{title}</h2></div><div className="stats-grid">{stats.map(([icon,big,small])=><div className="stat" key={big}><Icon name={icon} size={34}/><div><strong>{big}</strong><span>{small}</span></div></div>)}</div></div></section>}
