import type { Metadata } from 'next';
import Link from 'next/link';
import SiteImage from '@/components/SiteImage';
import { services } from '@/lib/services';
import { PHONE, SITE_URL, SLA_RESPONSE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Boarding, grooming, and playtime at River Ridge Pet Retreat in Dunlap, TN. A quick overview of what we offer for your dog.',
  alternates: { canonical: '/services/' },
  openGraph: {
    title: 'Our Services',
    description:
      'Boarding, grooming, and playtime at River Ridge Pet Retreat in Dunlap, TN.',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${SITE_URL}${s.href}`,
    description: s.blurb,
  })),
};

const highlights: Record<string, string[]> = {
  boarding: [
    'Indoor/outdoor kennel runs',
    "Twice-daily meals (you bring your dog's food)",
    'Supervised yard time throughout the day',
    'Same-household dogs can share a run',
    'Medications administered on schedule',
  ],
  grooming: [
    'Bath with a coat-appropriate shampoo',
    'Towel and low-heat dry',
    'De-shedding treatment',
    'Nail trim',
    'Ear check',
  ],
  playtime: [
    'One-on-one with a caretaker',
    'Tailored to your dog (fetch, walk, naps)',
    'Add to a boarding stay',
    'Scheduled around your dog’s energy',
  ],
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-bark">
            Services
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
            What we offer
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/80 sm:text-xl">
            Three ways we look after your dog at River Ridge: a comfortable
            place to stay, a fresh-feeling bath and trim, and dedicated
            one-on-one play. Pick what makes sense for your pup, or mix them
            together.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-sage/15">
            {services.map((service, i) => {
              const flip = i % 2 === 1;
              return (
                <article
                  key={service.slug}
                  className="grid gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-16"
                >
                  <div
                    className={
                      flip ? 'order-1 md:order-2' : 'order-1 md:order-1'
                    }
                  >
                    <div className="rounded-3xl bg-sage/15 p-2 shadow-sm">
                      <SiteImage
                        src={service.image}
                        alt={service.imageAlt}
                        width={600}
                        height={600}
                        sizes="(min-width: 768px) 540px, 100vw"
                        rounded="rounded-2xl"
                      />
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-center ${
                      flip ? 'order-2 md:order-1' : 'order-2 md:order-2'
                    }`}
                  >
                    <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink/85">
                      {service.detail?.intro ?? service.blurb}
                    </p>

                    {highlights[service.slug] && (
                      <ul className="mt-5 space-y-2 text-ink/90">
                        {highlights[service.slug].map((item) => (
                          <li key={item} className="flex gap-3">
                            <svg
                              className="mt-1 h-5 w-5 shrink-0 text-sage"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-7">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1 rounded-xl bg-sage px-5 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-sage-dark hover:shadow-md"
                      >
                        Learn more about {service.shortTitle.toLowerCase()}
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
              Not sure which to book?
            </h2>
            <p className="mt-4 text-lg text-ink/80">
              Send Tess a quick note about your dog and what you&apos;re
              looking for, and she&apos;ll point you to the right combination.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-sage px-6 py-12 text-center shadow-sm sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Ready to book?
            </h2>
            <p className="mt-3 text-lg text-cream/90">
              Tell us about your dog and we&apos;ll find a fit. {SLA_RESPONSE}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
