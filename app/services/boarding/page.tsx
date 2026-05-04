import type { Metadata } from 'next';
import Link from 'next/link';
import SiteImage from '@/components/SiteImage';
import { serviceBySlug } from '@/lib/services';
import { PHONE, SITE_NAME, SITE_URL, SLA_RESPONSE } from '@/lib/site';

const service = serviceBySlug('boarding')!;

export const metadata: Metadata = {
  title: 'Dog Boarding in Dunlap, TN',
  description:
    'Dog boarding at River Ridge Pet Retreat — indoor/outdoor kennel runs, attentive care, and reduced rates for dogs from the same household sharing a run.',
  alternates: { canonical: '/services/boarding/' },
  openGraph: {
    title: 'Dog Boarding',
    description:
      'Dog boarding at River Ridge Pet Retreat — indoor/outdoor kennel runs, attentive care, and reduced rates for dogs from the same household sharing a run.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dog Boarding',
  name: service.title,
  description: service.detail!.intro,
  provider: { '@id': `${SITE_URL}/#business` },
  areaServed: ['Dunlap, TN', 'Sequatchie Valley'],
  url: `${SITE_URL}${service.href}`,
};

export default function BoardingPage() {
  const detail = service.detail!;

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-bark">
            Services
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Dog boarding in the Sequatchie Valley
          </h1>
          <p className="mt-4 text-lg text-sage-dark sm:text-xl">
            <span className="font-semibold">{service.price}</span>
            {service.priceNote && (
              <span className="ml-2 text-bark">· {service.priceNote}</span>
            )}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <SiteImage
                src={service.image}
                alt={service.imageAlt}
                width={600}
                height={600}
                rounded="rounded-3xl"
                className="shadow-sm"
                placeholder
              />
            </div>
            <div className="text-lg leading-relaxed text-ink/90">
              <p>{detail.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-10">
            {detail.sections.map((s, i) => (
              <div key={i} id={i === 2 ? 'add-ons' : undefined}>
                <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                  {s.heading}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink/90">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {detail.bringList && (
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                What to bring at drop-off
              </h2>
              <ul className="mt-6 space-y-3 text-lg text-ink/90">
                {detail.bringList.map((item) => (
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
            </div>
          </div>
        </section>
      )}

      <section className="bg-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
              Boarding questions
            </h2>
            <dl className="mt-8 space-y-6">
              {detail.faqs.map((f) => (
                <div key={f.question}>
                  <dt className="font-heading text-lg font-bold text-ink">
                    {f.question}
                  </dt>
                  <dd className="mt-2 text-ink/80">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-sage px-6 py-12 text-center shadow-sm sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Reserve a spot for your dog
            </h2>
            <p className="mt-3 text-lg text-cream/90">
              Send us the dates and we&apos;ll confirm availability. {SLA_RESPONSE}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
