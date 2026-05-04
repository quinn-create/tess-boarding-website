'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const items = [
  { href: '/services/boarding/', label: 'Boarding' },
  { href: '/services/grooming/', label: 'Grooming' },
  { href: '/services/playtime/', label: 'Playtime' },
];

export default function ServicesNav() {
  const pathname = usePathname() ?? '/';
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Auto-close the dropdown when navigating away.
  useEffect(() => {
    if (detailsRef.current?.open) {
      detailsRef.current.open = false;
    }
  }, [pathname]);

  const sectionActive = pathname.startsWith('/services/');

  return (
    <details ref={detailsRef} className="group relative">
      <summary
        aria-haspopup="true"
        className={`inline-flex cursor-pointer list-none items-center gap-1 rounded-xl px-3.5 py-2 font-semibold transition duration-150 hover:bg-sage/10 hover:text-sage-dark active:scale-[0.97] [&::-webkit-details-marker]:hidden ${
          sectionActive ? 'bg-sage/15 text-sage-dark' : 'text-ink'
        }`}
      >
        Services
        <svg
          className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
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
      </summary>

      <div className="absolute left-1/2 top-full z-50 mt-2 w-52 -translate-x-1/2 rounded-2xl border border-sage/20 bg-cream p-2 shadow-lg">
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
    </details>
  );
}
