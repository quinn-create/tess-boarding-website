'use client';

import { Suspense, useState, type FormEvent } from 'react';
import SuccessBanner from './SuccessBanner';
import MapPreview from '@/components/MapPreview';
import {
  ADDRESS,
  EMAIL,
  PHONE,
  SITE_NAME,
  SLA_RESPONSE,
} from '@/lib/site';

type ServiceValue = '' | 'Boarding' | 'Grooming' | 'Both' | 'Other / not sure';

const inputClass =
  'w-full rounded-xl border border-bark/25 bg-white px-4 py-3 text-ink placeholder:text-bark/60 shadow-sm transition-colors focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/40';

const requiredMark = <span className="text-terracotta" aria-hidden="true">*</span>;

export default function ContactPageClient() {
  const [service, setService] = useState<ServiceValue>('');
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  const showBoardingFields = service === 'Boarding' || service === 'Both';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string | null)?.trim() ?? '';
    const phone = (data.get('phone') as string | null)?.trim() ?? '';
    const email = (data.get('email') as string | null)?.trim() ?? '';

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = 'Please tell us your name.';
    if (!phone && !email) {
      nextErrors.contact =
        'Please give us a phone number or email so we can reach you.';
    }

    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
      setErrors(nextErrors);
      return;
    }

    setErrors({});
  };

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="font-heading text-4xl font-bold text-ink sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-ink/80">
              Fill out the form and Tess will get back to you to confirm your
              dog&apos;s stay. You can also call directly. {SLA_RESPONSE}
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-bark">
                Call us
              </p>
              <a
                href={PHONE.href}
                className="mt-2 inline-block font-heading text-3xl font-bold text-sage-dark underline-offset-4 hover:underline sm:text-4xl"
              >
                {PHONE.display}
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-bark">
                Visit us
              </p>
              <address className="mt-2 not-italic text-ink">
                {SITE_NAME}
                <br />
                {ADDRESS.streetAddress}
                <br />
                {ADDRESS.addressLocality}, {ADDRESS.addressRegion}{' '}
                {ADDRESS.postalCode}
              </address>
            </div>

            <div className="mt-6">
              <MapPreview />
            </div>
          </div>

          <div>
            <Suspense fallback={null}>
              <SuccessBanner />
            </Suspense>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-sage/10 p-6 shadow-sm sm:p-8"
            >
              <input
                type="hidden"
                name="access_key"
                value="[WEB3FORMS_ACCESS_KEY]"
              />
              <input
                type="hidden"
                name="subject"
                value={`New inquiry from ${SITE_NAME} website`}
              />
              <input
                type="hidden"
                name="redirect"
                value="https://riverridgepetretreat.com/contact?success=1"
              />
              {/* honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <p className="text-sm text-bark">
                Fields marked {requiredMark} are required.
              </p>

              <div
                role="alert"
                aria-live="polite"
                aria-atomic="true"
                className="empty:hidden"
              >
                {(errors.name || errors.contact) && (
                  <div className="mt-4 rounded-xl bg-terracotta/15 p-3 text-sm font-semibold text-terracotta">
                    {errors.name && <p>{errors.name}</p>}
                    {errors.contact && <p>{errors.contact}</p>}
                  </div>
                )}
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-ink"
                  >
                    Name {requiredMark}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={`mt-2 ${inputClass}`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-sm font-semibold text-terracotta"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-ink"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`mt-2 ${inputClass}`}
                    aria-describedby="contact-helper"
                  />
                  <p id="contact-helper" className="mt-2 text-sm text-bark">
                    Phone or email — whichever you prefer. Just give us at
                    least one.
                  </p>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold text-ink">
                    Best way to reach you
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-ink">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferred_contact"
                        value="Phone"
                        defaultChecked
                        className="text-sage focus:ring-sage"
                      />
                      Phone
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferred_contact"
                        value="Email"
                        className="text-sage focus:ring-sage"
                      />
                      Email
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferred_contact"
                        value="Either"
                        className="text-sage focus:ring-sage"
                      />
                      Either
                    </label>
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-ink"
                  >
                    What are you interested in? {requiredMark}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value as ServiceValue)}
                    className={`mt-2 ${inputClass}`}
                  >
                    <option value="" disabled>
                      Choose one…
                    </option>
                    <option value="Boarding">Boarding</option>
                    <option value="Grooming">Grooming</option>
                    <option value="Both">Both</option>
                    <option value="Other / not sure">Other / not sure</option>
                  </select>
                </div>

                {showBoardingFields && (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="drop_off_date"
                          className="block text-sm font-semibold text-ink"
                        >
                          Drop-off date
                        </label>
                        <input
                          id="drop_off_date"
                          name="drop_off_date"
                          type="date"
                          className={`mt-2 ${inputClass}`}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="pick_up_date"
                          className="block text-sm font-semibold text-ink"
                        >
                          Pick-up date
                        </label>
                        <input
                          id="pick_up_date"
                          name="pick_up_date"
                          type="date"
                          className={`mt-2 ${inputClass}`}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="number_of_dogs"
                          className="block text-sm font-semibold text-ink"
                        >
                          Number of dogs
                        </label>
                        <input
                          id="number_of_dogs"
                          name="number_of_dogs"
                          type="number"
                          min={1}
                          defaultValue={1}
                          className={`mt-2 ${inputClass}`}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number_of_runs"
                          className="block text-sm font-semibold text-ink"
                        >
                          Separate runs/kennels
                        </label>
                        <input
                          id="number_of_runs"
                          name="number_of_runs"
                          type="number"
                          min={1}
                          defaultValue={1}
                          className={`mt-2 ${inputClass}`}
                          aria-describedby="runs-helper"
                        />
                      </div>
                    </div>
                    <p id="runs-helper" className="-mt-3 text-sm text-bark">
                      Dogs from the same household can share a run for a
                      reduced rate.
                    </p>
                  </>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-ink"
                  >
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`mt-2 ${inputClass}`}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-terracotta px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-terracotta/90 hover:shadow-md sm:w-auto"
                  >
                    Send inquiry
                  </button>
                  <p className="mt-3 text-sm text-bark">
                    Form not working? Email us directly:{' '}
                    <a
                      href={EMAIL.href}
                      className="font-semibold text-sage-dark underline-offset-4 hover:underline"
                    >
                      {EMAIL.display}
                    </a>
                  </p>
                  <p className="mt-2 text-xs text-bark">
                    We use the info you provide only to respond to your
                    inquiry.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
