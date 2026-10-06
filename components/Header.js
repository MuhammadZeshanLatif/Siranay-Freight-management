'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nav } from '@/lib/site';
import Icon from './Icon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const isHome = pathname === '/' || pathname === '/services';
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Siranay Freight Management home">
          <Image src="/images/logo-header.webp" alt="Siranay Freight Management" width={2048} height={690} priority className="header-logo" />
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="main-navigation">
          <Icon name={open ? 'close' : 'menu'} size={28} />
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? 'open' : ''}`}>
          {nav.filter((item) => item.href !== '/contact').map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/carrier-inquiry" className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>{!isHome && <Icon name="mail" size={17}/>} Get in Touch {isHome && '→'}</Link>
        </nav>
      </div>
    </header>
  );
}
