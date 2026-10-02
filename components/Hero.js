import Link from 'next/link';

export default function Hero({ eyebrow, title, accent, text, image = '/images/hero-truck.webp', primary = 'Work With Siranay', primaryHref = '/carrier-inquiry', secondary = 'Learn More', secondaryHref = '/services', compact = false, className = '' }) {
  const pieces = title.split('{accent}');
  return (
    <section className={`hero ${compact ? 'hero-compact' : ''} ${className}`}  style={{ '--hero-image': `url(${image})` }}>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow light">{eyebrow}</span>
          <h1>{pieces[0]}{accent ? <span>{accent}</span> : null}{pieces[1] || ''}</h1>
          <p>{text}</p>
          <div className="hero-actions">
            <Link href={primaryHref} className="btn btn-gold">{primary} →</Link>
            <Link href={secondaryHref} className="btn btn-outline-light">{secondary} →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
