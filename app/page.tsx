import type { Metadata } from 'next';
import Link from 'next/link';
import SiteImage from '@/components/SiteImage';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const services = [
  {
    title: 'Boarding',
    image: '/images/service-boarding.png',
    alt: 'Dog relaxing in a kennel run',
    body: (
      <p>
        Cozy indoor/outdoor kennel runs with plenty of attention. Dogs from the
        same household can share a run at a reduced rate, so siblings and best
        friends can stay together.
      </p>
    ),
  },
  {
    title: 'Grooming',
    image: '/images/service-grooming.png',
    alt: 'Dog being bathed and groomed',
    body: (
      <>
        <p>Keep your dog feeling fresh with our grooming services:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Bath</li>
          <li>De-shedding treatment</li>
          <li>Nail trimming</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Playtime add-on',
    image: '/images/service-playtime.png',
    alt: 'Dog playing fetch with a person',
    body: (
      <p>
        Want your dog to get extra one-on-one fun while they&apos;re with us?
        Add playtime to any boarding stay and one of our dog techs will spend
        dedicated time playing and running around with your pup.
      </p>
    ),
  },
];

const faqs = [
  {
    question: 'Can dogs from the same household share a kennel?',
    answer:
      'Yes — siblings and best friends can share a run at a reduced rate. It often makes the stay easier for them, and lighter on your wallet.',
  },
  {
    question: 'What grooming services do you offer?',
    answer:
      'A bath, a de-shedding treatment, and nail trimming. Grooming can be added to a boarding stay or booked on its own.',
  },
  {
    question: "What's included in the playtime add-on?",
    answer:
      'A dog tech spends dedicated one-on-one time with your dog — running, fetching, or just hanging out — on top of the regular care every boarder receives.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'Holidays and summer weekends fill up first. Two to four weeks ahead is a safe bet for those, and a few days is usually fine outside of peak times. When in doubt, just call.',
  },
  {
    question: 'What vaccinations do you require?',
    answer:
      'We ask for current rabies, distemper/parvo (DHPP), and Bordetella. Bring records at drop-off, or have your vet email them ahead.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <h1 className="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                A home away from home for your dog
              </h1>
              <p className="mt-6 text-lg text-ink/80 sm:text-xl">
                Boarding, grooming, and playtime in Dunlap, Tennessee. Run by
                Tess Boring, who&apos;s spent a lifetime caring for dogs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-terracotta px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-terracotta/90 hover:shadow-md"
                >
                  Get in touch
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-sage px-6 py-3 font-semibold text-sage-dark transition-all hover:bg-sage/10"
                >
                  Meet Tess
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              {/* IMAGE NEEDED: Hero — cartoon illustration of 2–3 happy dogs in a friendly outdoor retreat setting */}
              <SiteImage
                src="/images/hero.png"
                alt="Cartoon illustration of happy dogs at River Ridge Pet Retreat"
                width={1200}
                height={1200}
                priority
                rounded="rounded-3xl"
                className="shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              What we offer
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col overflow-hidden rounded-3xl bg-sage/15 shadow-sm transition-shadow hover:shadow-md"
              >
                <SiteImage
                  src={service.image}
                  alt={service.alt}
                  width={600}
                  height={600}
                  rounded="rounded-none"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-2xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <div className="mt-3 text-ink/80">{service.body}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                Why families choose River Ridge
              </h2>
              <p className="mt-4 text-lg text-ink/80">
                We&apos;re a small, hands-on retreat in the Sequatchie Valley.
                Every dog gets attention from people who&apos;ve been around
                dogs their whole lives — not a rotating roster of part-timers.
              </p>
            </div>
            <ul className="space-y-5 text-lg text-ink/90">
              <li>
                <span className="font-heading font-bold text-sage-dark">
                  Lifelong dog person at the helm.
                </span>{' '}
                Tess has cared for dogs since she was a kid in this valley.
                That experience shows up in every drop-off and pickup.
              </li>
              <li>
                <span className="font-heading font-bold text-sage-dark">
                  Plenty of space, plenty of time.
                </span>{' '}
                Indoor/outdoor runs, room to move, and dedicated playtime if
                you want extra one-on-one for your pup.
              </li>
              <li>
                <span className="font-heading font-bold text-sage-dark">
                  Local and familiar.
                </span>{' '}
                We serve Dunlap, Pikeville, Whitwell, Jasper, and the rest of
                the valley — close enough that drop-off doesn&apos;t eat your
                whole morning.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-8">
              {faqs.map((f) => (
                <div key={f.question}>
                  <dt className="font-heading text-xl font-bold text-ink">
                    {f.question}
                  </dt>
                  <dd className="mt-2 text-lg text-ink/80">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-3xl bg-sage px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Ready to book a stay?
            </h2>
            <p className="mt-4 text-lg text-cream/90">
              Send us a quick note and Tess will get back to you.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cream px-6 py-3 font-semibold text-sage-dark shadow-sm transition-all hover:bg-cream/90 hover:shadow-md"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
