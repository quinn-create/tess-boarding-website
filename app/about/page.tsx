import type { Metadata } from 'next';
import Link from 'next/link';
import SiteImage from '@/components/SiteImage';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Tess',
  description: `Meet Tess Boring, the lifelong dog person behind ${SITE_NAME} in Dunlap, Tennessee.`,
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Tess',
    description: `Meet Tess Boring, the lifelong dog person behind ${SITE_NAME} in Dunlap, Tennessee.`,
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tess Boring',
  jobTitle: 'Owner',
  description: `Lifelong dog person and owner of ${SITE_NAME} in Dunlap, Tennessee.`,
  worksFor: { '@id': `${SITE_URL}/#business` },
  url: `${SITE_URL}/about/`,
  image: `${SITE_URL}/images/tess-portrait.png`,
};

export default function AboutPage() {
  return (
    <>
    <section className="bg-gradient-to-b from-cream to-sage/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="font-heading text-4xl font-bold text-ink sm:text-5xl">
          Meet Tess
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <div className="rounded-3xl bg-sage/15 p-2 shadow-sm">
              <SiteImage
                src="/images/tess-portrait.avif"
                alt="Cartoon portrait of Tess Boring, owner of River Ridge Pet Retreat"
                width={800}
                height={1000}
                sizes="(min-width: 768px) 460px, 100vw"
                rounded="rounded-2xl"
              />
            </div>

            <figure className="mt-8 hidden md:block">
              <blockquote className="border-l-4 border-sage pl-5">
                <p className="font-heading text-xl italic text-ink/90">
                  &ldquo;Dogs at her feet, and they&apos;ve never really left
                  her side.&rdquo;
                </p>
              </blockquote>
            </figure>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-ink/90 md:col-span-3">
            <p>
              Tess Boring grew up in the Sequatchie Valley with dogs at her
              feet, and they&apos;ve never really left her side. From childhood
              through adulthood, dogs have been part of nearly every chapter of
              her life.
            </p>
            <p>
              Tess originally set out for veterinary school, drawn to medicine
              by the same instinct that&apos;s always pulled her toward animals.
              But somewhere along the way, she realized her real calling
              wasn&apos;t a clinic or an operating room. It was a place where
              dogs could rest, play, and be cared for like family while their
              people were away.
            </p>

            <h2 className="!mt-10 font-heading text-2xl font-bold text-ink sm:text-3xl">
              Why she built River Ridge
            </h2>
            <p>
              That&apos;s how River Ridge Pet Retreat came to be. Tess built it
              so she could spend her days doing what she&apos;s done her whole
              life (taking care of dogs) and so families in our area would
              have somewhere they could trust to do the same.
            </p>
            <p>
              When you bring your dog to River Ridge, you&apos;re handing them
              off to someone who has, quite literally, spent her life preparing
              for the job.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section className="bg-sage/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-2xl bg-sage/15 p-6 sm:p-8">
          <p className="font-heading text-xl font-semibold text-ink sm:text-2xl">
            Have questions or ready to book?
          </p>
          <Link
            href="/contact/"
            className="mt-3 inline-block font-semibold text-sage-dark underline-offset-4 hover:underline"
          >
            Contact Tess →
          </Link>
        </div>
      </div>
    </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
