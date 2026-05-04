import Link from 'next/link';
import PawIcon from './PawIcon';
import {
  ADDRESS,
  HOURS,
  LICENSE_LINE,
  PHONE,
  SITE_NAME,
  SITE_TAGLINE,
} from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage/20 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-ink hover:text-sage-dark"
            >
              <span className="text-sage">
                <PawIcon className="h-6 w-6" />
              </span>
              <span className="font-heading text-lg font-bold">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-3 text-bark">{SITE_TAGLINE}</p>
            <p className="mt-3 text-sm text-bark">{LICENSE_LINE}</p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-ink">Visit us</h3>
            <address className="mt-3 not-italic text-ink">
              {SITE_NAME}
              <br />
              {ADDRESS.streetAddress}
              <br />
              {ADDRESS.addressLocality}, {ADDRESS.addressRegion}{' '}
              {ADDRESS.postalCode}
            </address>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-ink">Hours</h3>
            <dl className="mt-3 space-y-1 text-ink">
              {HOURS.map((h) => (
                <div key={h.label} className="flex flex-wrap gap-x-3">
                  <dt className="font-semibold">{h.label}</dt>
                  <dd className="text-ink/80">{h.display}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-ink">Call us</h3>
            <p className="mt-3">
              <a
                href={PHONE.href}
                className="text-ink underline-offset-4 hover:text-sage-dark hover:underline"
              >
                {PHONE.display}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-sage/20 pt-6 text-sm text-bark sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME}</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/terms"
              className="underline-offset-4 hover:text-sage-dark hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="underline-offset-4 hover:text-sage-dark hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="underline-offset-4 hover:text-sage-dark hover:underline"
            >
              Disclaimer
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
