import type { Metadata } from 'next';
import Link from 'next/link';
import SiteImage from '@/components/SiteImage';
import { serviceBySlug } from '@/lib/services';
import { PHONE, SITE_URL, SLA_RESPONSE } from '@/lib/site';

const service = serviceBySlug('grooming')!;

export const metadata: Metadata = {
  title: 'Dog Grooming in Dunlap, TN',
  description:
    'Dog grooming at River Ridge Pet Retreat: bath, de-shedding treatment, and nail trimming. Book on its own or as an add-on to a boarding stay.',
  alternates: { canonical: '/services/grooming/' },
  openGraph: {
    title: 'Dog Grooming',
    description:
      'Dog grooming at River Ridge Pet Retreat: bath, de-shedding treatment, and nail trimming.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dog Grooming',
  name: service.title,
  description: service.detail!.intro,
  provider: { '@id': `${SITE_URL}/#business` },
  areaServed: ['Dunlap, TN', 'Sequatchie Valley'],
  url: `${SITE_URL}${service.href}`,
};

export default function GroomingPage() {
  const detail = service.detail!;

  return (
    <>
      <section className="bg-gradient-to-b from-cream to-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-bark">
            Services
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Dog grooming, kept simple
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <div className="rounded-3xl bg-sage/15 p-2 shadow-sm">
                <SiteImage
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={600}
                  priority
                  sizes="(min-width: 768px) 540px, 100vw"
                  rounded="rounded-2xl"
                />
              </div>
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
              <div key={i}>
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

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
              Grooming questions
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

      <section className="bg-sage/10 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-sage px-6 py-12 text-center shadow-sm sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Book a grooming appointment
            </h2>
            <p className="mt-3 text-lg text-cream/90">
              Tell us about your dog and we&apos;ll find a time. {SLA_RESPONSE}
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
