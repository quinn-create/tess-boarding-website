'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const items = [
  { href: '/services/boarding/', label: 'Boarding' },
  { href: '/services/grooming/', label: 'Grooming' },
  { href: '/services/playtime/', label: 'Playtime' },
];

// Split-button nav item: clicking the "Services" label navigates to the
// services index page; the adjacent chevron toggles a dropdown that lets
// the user jump straight to one of the three detail pages. Dropdown opens
// on hover (desktop) and on chevron tap (touch). Closes on outside click,
// Escape, mouse leave, or route change.
export default function ServicesMenu() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const sectionActive = pathname.startsWith('/services/');
  const indexActive = pathname === '/services/';

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`inline-flex items-stretch rounded-xl transition-colors duration-150 hover:bg-sage/10 ${
          sectionActive ? 'bg-sage/15' : ''
        }`}
      >
        <Link
          href="/services/"
          aria-current={indexActive ? 'page' : undefined}
          className={`inline-flex items-center rounded-l-xl py-2 pl-3.5 pr-1.5 font-semibold transition duration-150 hover:text-sage-dark active:scale-[0.97] ${
            sectionActive ? 'text-sage-dark' : 'text-ink'
          }`}
        >
          Services
        </Link>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Toggle services menu"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center rounded-r-xl py-2 pl-1.5 pr-2.5 transition duration-150 hover:text-sage-dark active:scale-[0.97] ${
            sectionActive ? 'text-sage-dark' : 'text-ink'
          }`}
        >
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
          <div className="w-52 rounded-2xl border border-sage/20 bg-cream p-2 shadow-lg">
            <ul className="space-y-1">
              {items.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block rounded-xl px-3 py-2 font-semibold transition-colors duration-150 ${
                        isActive
                          ? 'bg-sage/15 text-sage-dark'
                          : 'text-ink hover:bg-sage/10 hover:text-sage-dark'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
