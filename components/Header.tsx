import Link from 'next/link';
import NavLink from './NavLink';
import PawIcon from './PawIcon';
import { SITE_NAME } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/boarding/', label: 'Boarding' },
  { href: '/services/grooming/', label: 'Grooming' },
  { href: '/contact/', label: 'Contact' },
];

const desktopLinkClass =
  'py-2 font-semibold text-ink transition-colors hover:text-sage-dark';
const desktopLinkActiveClass = 'py-2 font-semibold text-sage-dark';

const mobileLinkClass =
  'block rounded-xl px-3 py-3 font-semibold text-ink transition-colors hover:bg-sage/10';
const mobileLinkActiveClass =
  'block rounded-xl px-3 py-3 font-semibold bg-sage/15 text-sage-dark';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream shadow-sm">
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
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className={desktopLinkClass}
                    activeClassName={desktopLinkActiveClass}
                    underline
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <details className="group relative md:hidden">
            <summary
              className="-mr-1 inline-flex cursor-pointer list-none items-center justify-center rounded-xl p-3 text-ink hover:bg-sage/10 [&::-webkit-details-marker]:hidden"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6 group-open:hidden"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                className="hidden h-6 w-6 group-open:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </summary>

            <nav
              className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-sage/20 bg-cream p-2 shadow-md"
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      href={link.href}
                      className={mobileLinkClass}
                      activeClassName={mobileLinkActiveClass}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
