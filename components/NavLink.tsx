'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  className: string;
  activeClassName: string;
  children: ReactNode;
  /** Render a sage underline beneath active links (desktop nav). */
  underline?: boolean;
};

export default function NavLink({
  href,
  className,
  activeClassName,
  children,
  underline,
}: NavLinkProps) {
  const pathname = usePathname() ?? '/';
  const isActive =
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href.replace(/\/$/, '') + '/');

  return (
    <Link
      href={href}
      className={`relative inline-block ${isActive ? activeClassName : className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      {underline && isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-sage" />
      )}
    </Link>
  );
}
