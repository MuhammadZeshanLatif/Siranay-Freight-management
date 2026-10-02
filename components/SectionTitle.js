export default function SectionTitle({ eyebrow, title, accent, text, align='center' }) {
  const parts = title.split('{accent}');
  return <div className={`section-title ${align}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{parts[0]}{accent ? <span>{accent}</span> : null}{parts[1] || ''}</h2>
    {text && <p>{text}</p>}
  </div>
}
