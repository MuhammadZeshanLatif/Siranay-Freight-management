import Icon from './Icon';
export default function ProcessSteps({ variant='home' }) {
  const home = [
    ['document','Load Planning','We find and select load opportunities that fit your equipment, route, schedule, and goals.'],
    ['chat','Broker Communication','We communicate and negotiate with brokers on your behalf to get the best rates and terms.'],
    ['document','Rate Confirmation & Paperwork','We handle confirmations, documentation, and setup so you are ready to roll.'],
    ['truck','Trip Support & Follow-Up','We provide ongoing support during your trip and assist until you are paid.']
  ];
  const service = [
    ['users','Consultation','We learn about your operation, equipment, preferred lanes, and goals.'],
    ['route','Load Search','We find and present suitable load opportunities that match your needs.'],
    ['chat','Broker Negotiation','We handle communication and negotiate the best practical rates and terms.'],
    ['document','Rate Confirmation & Paperwork','We confirm the load, handle documentation, and ensure details are in order.'],
    ['truck','Ongoing Trip Support','We stay with you throughout the trip and keep you informed until delivery.']
  ];
  const items = variant === 'services' ? service : home;
  return <div className={`process-grid process-${variant}`}>{items.map(([icon,title,text],i)=><div className="process-step" key={title}><div className="step-top"><span className="step-number">{String(i+1).padStart(2,'0')}</span><Icon name={icon} size={35}/></div><h3>{title}</h3><p>{text}</p></div>)}</div>
}
