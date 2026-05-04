import Link from 'next/link';
import NavLink from './NavLink';
import ServicesNav from './ServicesNav';
import PawIcon from './PawIcon';
import { SITE_NAME } from '@/lib/site';

const topLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
];

const serviceLinks = [
  { href: '/services/boarding/', label: 'Boarding' },
  { href: '/services/grooming/', label: 'Grooming' },
  { href: '/services/playtime/', label: 'Playtime' },
];

const contactLink = { href: '/contact/', label: 'Contact' };

const desktopLinkClass =
  'inline-flex items-center rounded-xl px-3.5 py-2 font-semibold text-ink transition duration-150 hover:bg-sage/10 hover:text-sage-dark active:scale-[0.97]';
const desktopLinkActiveClass =
  'inline-flex items-center rounded-xl px-3.5 py-2 font-semibold bg-sage/15 text-sage-dark transition duration-150 active:scale-[0.97]';

const mobileLinkClass =
  'block rounded-xl px-3 py-3 font-semibold text-ink transition-colors duration-150 hover:bg-sage/10 hover:text-sage-dark';
const mobileLinkActiveClass =
  'block rounded-xl px-3 py-3 font-semibold bg-sage/15 text-sage-dark transition-colors duration-150';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage/15 bg-cream shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl text-ink transition-colors duration-150 hover:text-sage-dark"
          >
            <span className="text-sage transition-colors duration-150 group-hover:text-sage-dark">
              <PawIcon className="h-7 w-7 md:h-8 md:w-8" />
            </span>
            <span className="font-heading text-lg font-bold md:text-xl">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {topLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className={desktopLinkClass}
                    activeClassName={desktopLinkActiveClass}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <ServicesNav />
              </li>
              <li>
                <NavLink
                  href={contactLink.href}
                  className={desktopLinkClass}
                  activeClassName={desktopLinkActiveClass}
                >
                  {contactLink.label}
                </NavLink>
              </li>
            </ul>
          </nav>

          <details className="group relative md:hidden">
            <summary
              className="-mr-1 inline-flex cursor-pointer list-none items-center justify-center rounded-xl p-3 text-ink transition-colors duration-150 hover:bg-sage/10 hover:text-sage-dark active:bg-sage/15 [&::-webkit-details-marker]:hidden"
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
              className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-sage/20 bg-cream p-2 shadow-lg"
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {topLinks.map((link) => (
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
                <li
                  className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-bark"
                  aria-hidden="true"
                >
                  Services
                </li>
                {serviceLinks.map((link) => (
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
                <li>
                  <NavLink
                    href={contactLink.href}
                    className={mobileLinkClass}
                    activeClassName={mobileLinkActiveClass}
                  >
                    {contactLink.label}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
