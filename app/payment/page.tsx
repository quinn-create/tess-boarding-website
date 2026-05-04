import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, SLA_RESPONSE } from '@/lib/site';

const VENMO_HANDLE = '@tess_boring7';
const VENMO_URL = 'https://venmo.com/u/tess_boring7';

export const metadata: Metadata = {
  title: 'Payment Options',
  description:
    'Pay for boarding, grooming, and playtime at River Ridge Pet Retreat by Venmo or cash.',
  alternates: { canonical: '/payment/' },
  openGraph: {
    title: 'Payment Options',
    description:
      'Pay for boarding, grooming, and playtime at River Ridge Pet Retreat by Venmo or cash.',
  },
};

export default function PaymentPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-bark">
            Payment
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Payment Options
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/80 sm:text-xl">
            We accept Venmo and cash. Cash is due at time of drop-off or
            pickup.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Venmo */}
            <article className="flex flex-col rounded-3xl bg-sage/15 p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                Pay with Venmo
              </h2>

              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-bark">
                Handle
              </p>
              <p className="mt-1 font-heading text-3xl font-bold text-sage-dark sm:text-4xl">
                {VENMO_HANDLE}
              </p>

              <div className="mt-6">
                <a
                  href={VENMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-terracotta px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-terracotta/90 hover:shadow-md"
                >
                  Pay with Venmo
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              <figure className="mt-8 flex flex-col items-center">
                <div className="rounded-2xl bg-cream p-3 shadow-sm">
                  <img
                    src="/images/venmo-qr.png"
                    alt="Venmo QR code for @tess_boring7"
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-56 sm:h-60 sm:w-60"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink/80">
                  Scan to pay with the Venmo app.
                </figcaption>
              </figure>
            </article>

            {/* Cash */}
            <article className="flex flex-col rounded-3xl bg-sage/15 p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                Pay with Cash
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-ink/85">
                Cash is accepted at time of drop-off or pickup. Exact amount
                appreciated.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-sage px-6 py-12 text-center shadow-sm sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Questions about payment?
            </h2>
            <p className="mt-3 text-lg text-cream/90">
              Reach out and Tess will walk you through it. {SLA_RESPONSE}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-xl bg-cream px-6 py-3 font-semibold text-sage-dark shadow-sm transition-all hover:bg-cream/90 hover:shadow-md"
              >
                Send an inquiry
              </Link>
              <a
                href={PHONE.href}
                className="font-semibold text-cream underline-offset-4 hover:underline"
              >
                Or call {PHONE.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
