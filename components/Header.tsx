'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import PawIcon from './PawIcon';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-ink hover:text-sage-dark"
          >
            <span className="text-sage">
              <PawIcon className="h-7 w-7 md:h-8 md:w-8" />
            </span>
            <span className="font-heading text-lg font-bold md:text-xl">
              River Ridge Pet Retreat
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-block py-2 font-semibold transition-colors hover:text-sage-dark ${
                      isActive(link.href) ? 'text-sage-dark' : 'text-ink'
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-sage" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 text-ink hover:bg-sage/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-sage/20 bg-cream md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-xl px-3 py-3 font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'bg-sage/15 text-sage-dark'
                      : 'text-ink hover:bg-sage/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
