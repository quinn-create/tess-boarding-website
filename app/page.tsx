import type { Metadata } from 'next';
import Link from 'next/link';
import SiteImage from '@/components/SiteImage';
import { services } from '@/lib/services';
import { PHONE, SLA_RESPONSE } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const faqs = [
  {
    question: 'How much does it cost?',
    answer:
      "Rates depend on your dog and the length of stay, plus any add-ons like grooming or playtime. Send us an inquiry through the contact form and Tess will follow up with a quote and a payment link.",
  },
  {
    question: 'Can dogs from the same household share a kennel?',
    answer:
      'Yes, siblings and best friends can share a run together. It often makes the stay easier for them, and Tess can talk through the details when you reach out.',
  },
  {
    question: 'What grooming services do you offer?',
    answer:
      'A bath, a de-shedding treatment, and nail trimming. Grooming can be added to a boarding stay or booked on its own.',
  },
  {
    question: "What's included in the playtime add-on?",
    answer:
      'A caretaker spends dedicated one-on-one time with your dog (running, fetching, or just hanging out) on top of the regular care every boarder receives.',
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
  {
    question: 'What should I bring at drop-off?',
    answer:
      "Your dog's regular food (we'll measure portions per your instructions), any medications with clear dosing notes, vaccination records, an emergency vet contact, and a favorite blanket or toy if it helps them settle.",
  },
];

const testimonials = [
  {
    quote: '[TESTIMONIAL_1]',
    author: '[TESTIMONIAL_1_AUTHOR]',
    location: '[TESTIMONIAL_1_LOCATION]',
  },
  {
    quote: '[TESTIMONIAL_2]',
    author: '[TESTIMONIAL_2_AUTHOR]',
    location: '[TESTIMONIAL_2_LOCATION]',
  },
  {
    quote: '[TESTIMONIAL_3]',
    author: '[TESTIMONIAL_3_AUTHOR]',
    location: '[TESTIMONIAL_3_LOCATION]',
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
      <section className="bg-gradient-to-b from-cream to-sage/10">
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
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-xl bg-terracotta px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-terracotta/90 hover:shadow-md"
                >
                  Book your dog&apos;s stay
                </Link>
                <Link
                  href="/about/"
                  className="font-semibold text-sage-dark underline-offset-4 hover:underline"
                >
                  Or meet Tess →
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="rounded-3xl bg-sage/15 p-2 shadow-sm">
                <SiteImage
                  src="/images/hero.avif"
                  alt="Cartoon illustration of happy dogs at River Ridge Pet Retreat"
                  width={1200}
                  height={1200}
                  priority
                  sizes="(min-width: 768px) 540px, 100vw"
                  rounded="rounded-2xl"
                />
              </div>
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
              <Link
                key={service.slug}
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-sage/15 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:-translate-y-1 focus-visible:shadow-md"
              >
                <SiteImage
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={600}
                  sizes="(min-width: 768px) 360px, 100vw"
                  rounded="rounded-none"
                  aspectRatio="16 / 10"
                  className="md:!aspect-square"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-2xl font-bold text-ink group-hover:text-sage-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-ink/80">{service.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-semibold text-sage-dark">
                    Learn more about {service.shortTitle.toLowerCase()}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                Why families choose River Ridge
              </h2>
              <p className="mt-4 text-lg text-ink/80">
                We&apos;re a small, hands-on retreat in the Sequatchie Valley.
                Every dog gets attention from people who&apos;ve been around
                dogs their whole lives, not a rotating roster of part-timers.
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
                the valley. Close enough that drop-off doesn&apos;t eat your
                whole morning.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sage/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
            What our families say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl bg-cream p-6 shadow-sm sm:p-8"
              >
                <svg
                  className="h-6 w-6 text-sage"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v3.66A4.17 4.17 0 0 0 7.17 18h.66a1 1 0 0 0 1-1v-3.66a1 1 0 0 0-1-1H6.5a.5.5 0 0 1-.5-.5v-1.84A1.17 1.17 0 0 1 7.17 9h.66a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.66Zm9 0A4.17 4.17 0 0 0 12 10.17v3.66A4.17 4.17 0 0 0 16.17 18h.66a1 1 0 0 0 1-1v-3.66a1 1 0 0 0-1-1H15.5a.5.5 0 0 1-.5-.5v-1.84A1.17 1.17 0 0 1 16.17 9h.66a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.66Z" />
                </svg>
                <blockquote className="mt-4 text-lg text-ink/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-bark">
                  {t.author}, {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl py-2 transition-colors hover:text-sage-dark [&::-webkit-details-marker]:hidden">
                <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                  Frequently asked questions
                </h2>
                <svg
                  className="h-8 w-8 shrink-0 text-sage-dark transition-transform group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
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
            </details>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-sage px-6 py-12 text-center shadow-sm sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Ready to book a stay?
            </h2>
            <p className="mt-3 text-lg text-cream/90">
              Send us a quick note and Tess will get back to you. {SLA_RESPONSE}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
