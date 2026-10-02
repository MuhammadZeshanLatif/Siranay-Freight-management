export default function Icon({ name, size = 30, className = '' }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', className, 'aria-hidden': true };
  const icons = {
    truck: <><path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 19c.6-3.4 2.5-5 6-5s5.4 1.6 6 5"/><circle cx="17" cy="9" r="2"/><path d="M15.5 14.5c3.2 0 5 1.5 5.5 4.5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.6 5.7 3.6 9S14.5 18.3 12 21M12 3C9.5 5.7 8.4 8.7 8.4 12s1.1 6.3 3.6 9"/></>,
    chat: <><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    shield: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    pin: <><path d="M12 21s6-6.1 6-11a6 6 0 10-12 0c0 4.9 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></>,
    document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
    dollar: <><circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.7-.9-1.8-1.5-3-1.5-1.7 0-3 1-3 2.3 0 1.4 1.1 2 3 2.5s3 1.1 3 2.5-1.3 2.7-3 2.7c-1.3 0-2.5-.5-3.3-1.4M12 5v14"/></>,
    route: <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M7.5 16.7c2-3.6 6-3.7 7-6.2.5-1.2.5-2.4.9-3"/></>,
    chart: <><path d="M4 20V10M10 20V6M16 20V3M22 20H2"/></>,
    headset: <><path d="M4 13v-2a8 8 0 0116 0v2"/><path d="M4 13h3v6H5a1 1 0 01-1-1zM20 13h-3v6h2a1 1 0 001-1z"/><path d="M17 19c-1 2-3 2-5 2"/></>,
    star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9z"/>,
    handshake: <><path d="M8 12l3-3c1-1 2-1 3 0l2 2"/><path d="M3 11l4-4 3 3M21 11l-4-4-3 3"/><path d="M7 13l5 5c1 1 2 1 3 0l3-3"/></>,
    lightning: <path d="M13 2L5 14h6l-1 8 9-13h-6z"/>,
    check: <path d="M5 12l4 4L19 6"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="M6 6l12 12M18 6L6 18"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
    phone: <path d="M5 4l3-1 2 5-2 1c1.5 3 3.5 5 6.5 6.5l1-2 5 2-1 3C18.5 21 4 17.5 4 5z"/>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18"/></>
  };
  return <svg {...common}>{icons[name] || icons.truck}</svg>;
}
