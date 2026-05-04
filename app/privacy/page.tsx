import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ADDRESS,
  EMAIL,
  PHONE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site';

const EFFECTIVE_DATE = 'May 3, 2026';
const LAST_UPDATED = 'May 3, 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE_NAME} collects, uses, discloses, and protects information from customers, website visitors, and pets in our care.`,
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy',
    description: `How ${SITE_NAME} collects, uses, discloses, and protects information from customers, website visitors, and pets in our care.`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-sage/10">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-bark">
            Legal
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-ink/80">
            {SITE_NAME} — Dunlap, Sequatchie County, Tennessee
          </p>
          <dl className="mt-6 grid gap-2 text-sm text-bark sm:grid-cols-2 sm:gap-x-8">
            <div className="flex gap-2">
              <dt className="font-semibold">Effective Date:</dt>
              <dd>{EFFECTIVE_DATE}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold">Last Updated:</dt>
              <dd>{LAST_UPDATED}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <article className="space-y-12 text-base leading-relaxed text-ink/90 sm:text-lg">

            <Section heading="1. Introduction and Acceptance" id="introduction">
              <p>
                {SITE_NAME} (&ldquo;River Ridge,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) owns and operates the
                website located at{' '}
                <a
                  href={SITE_URL}
                  className="text-sage-dark underline-offset-4 hover:underline"
                >
                  {SITE_URL}
                </a>{' '}
                (the &ldquo;Website&rdquo;) and provides pet boarding, grooming,
                daycare, and related pet care services (collectively, the
                &ldquo;Services&rdquo;) at our facility located in Dunlap,
                Sequatchie County, Tennessee. This Privacy Policy describes how
                we collect, use, disclose, retain, and protect information that
                you provide to us through the Website, in person, by telephone,
                by email, by text message, through any third-party booking or
                payment platform we link to, or through your use of our
                Services.
              </p>
              <p>
                <strong>
                  By accessing or using the Website, by submitting any
                  information to us through the Website, by communicating with
                  us in any manner, by visiting our facility, by leaving a pet
                  in our care, or by otherwise using our Services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by this Privacy Policy in its entirety.
                </strong>{' '}
                If you do not agree with any provision of this Privacy Policy,
                you must not use the Website and must not use the Services. Your
                continued use constitutes ongoing acceptance.
              </p>
              <p>
                This Privacy Policy operates as your affirmative consent to the
                collection, use, disclosure, retention, and other handling of
                your information as described herein. This Privacy Policy is in
                addition to, and not in lieu of, any separate boarding
                agreement, daycare agreement, grooming agreement, intake form,
                photo and likeness release, or other written agreement you sign
                with River Ridge (collectively, the &ldquo;Service
                Agreements&rdquo;). In the event of any conflict between this
                Privacy Policy and a Service Agreement, the provision more
                favorable to River Ridge shall control unless applicable law
                requires otherwise.
              </p>
            </Section>

            <Section heading="2. Information We Collect" id="information-we-collect">
              <p>
                We collect a broad range of information from and about you, your
                pet, and your use of the Website and Services. The categories of
                information we may collect include, but are not limited to, the
                following:
              </p>

              <Subsection heading="2.1 Information You Provide Directly">
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Identifying information: full legal name, mailing address,
                    billing address, email address, telephone number(s), and
                    emergency contact information.
                  </li>
                  <li>
                    Account credentials: usernames, passwords, security
                    questions, and account preferences if you create an account
                    through the Website or any linked platform.
                  </li>
                  <li>
                    Pet information: your pet&apos;s name, breed, age, sex,
                    weight, color, markings, microchip number, registration
                    information, behavioral notes, dietary requirements, feeding
                    schedule, medication schedule, likes, dislikes, temperament,
                    socialization history, and any other information you provide
                    concerning your pet.
                  </li>
                  <li>
                    Veterinary and medical information concerning your pet:
                    vaccination records, immunization history, veterinarian name
                    and contact information, prescription medications,
                    allergies, chronic conditions, surgical history, behavioral
                    health information, and any other health-related records you
                    submit.
                  </li>
                  <li>
                    Service-related information: dates of service, services
                    requested, special instructions, drop-off and pick-up
                    information, authorized persons permitted to retrieve your
                    pet, and any communications with our staff.
                  </li>
                  <li>
                    Communications: the content of emails, text messages,
                    voicemails, online chat messages, contact form submissions,
                    social media messages, reviews, and any other communications
                    you direct to us.
                  </li>
                  <li>
                    Photographs, video, and audio: any images, video, or audio
                    recordings you upload, send to us, or that are captured of
                    you, your pet, your family members, your guests, or your
                    vehicle while on or near our premises.
                  </li>
                </ul>
              </Subsection>

              <Subsection heading="2.2 Information Collected Automatically Through the Website">
                <p>
                  When you visit the Website, we and our third-party service
                  providers automatically collect certain information about your
                  device, your browsing activity, and your interactions with the
                  Website. This information includes:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Device and connection data: IP address, device type, device
                    identifiers, operating system, browser type and version,
                    language preference, screen resolution, and internet service
                    provider.
                  </li>
                  <li>
                    Usage data: pages visited, time and date of visits, time
                    spent on each page, click paths, referring and exit pages,
                    search terms used to reach the Website, and links clicked.
                  </li>
                  <li>
                    Location data: approximate geographic location derived from
                    your IP address or, where you have authorized location
                    services, more precise location data.
                  </li>
                  <li>
                    Cookies, pixels, tags, web beacons, local storage, session
                    identifiers, and similar tracking technologies.
                  </li>
                </ul>
              </Subsection>

              <Subsection heading="2.3 Information Collected from Third Parties">
                <p>
                  We may receive information about you from third parties,
                  including without limitation: veterinarians (with your
                  authorization or as required for the safe care of your pet);
                  referring customers; advertising partners; analytics
                  providers; social media platforms; payment processors; and
                  publicly available sources. Information received from third
                  parties is treated in accordance with this Privacy Policy.
                </p>
              </Subsection>

              <Subsection heading="2.4 Security Camera and Live-Stream Footage">
                <p>
                  <strong>
                    Our facility is monitored by security cameras and
                    live-streaming cameras throughout interior and exterior
                    areas, including but not limited to lobby, kennel, play,
                    grooming, outdoor, and parking areas.
                  </strong>{' '}
                  Footage is recorded continuously and may be retained
                  indefinitely for security, operational, training,
                  evidentiary, marketing, and any other lawful business purpose.
                  Some cameras stream live to a customer-accessible viewing
                  platform that permits owners to view their pets in real time
                  on a phone, tablet, or computer.
                </p>
                <p>
                  <strong>
                    By entering, approaching, or remaining on our premises
                    (including our parking lot), by leaving a pet in our care,
                    or by accessing the live-stream service, you knowingly and
                    voluntarily consent to being recorded and live-streamed,
                  </strong>{' '}
                  and you acknowledge and agree that:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Your image, voice, vehicle, license plate, the image and
                    likeness of any person accompanying you, and the image and
                    behavior of your pet may be captured, recorded, stored, and
                    viewed by our staff, by other customers using the
                    live-stream service, by third parties to whom we lawfully
                    disclose footage, and by anyone with whom a customer shares
                    their live-stream credentials or recordings.
                  </li>
                  <li>
                    River Ridge does not control, and cannot guarantee, what
                    other customers do with the live-stream feed, including
                    whether they record, screenshot, share, or redistribute
                    footage. You expressly assume this risk.
                  </li>
                  <li>
                    You waive any claim against River Ridge arising from being
                    recorded, live-streamed, or having your image or likeness
                    viewed by other customers, our staff, or third parties, to
                    the fullest extent permitted by Tennessee law.
                  </li>
                  <li>
                    If you bring another person, child, or guest onto our
                    premises, you represent that you have authority to consent
                    on their behalf and you agree to indemnify River Ridge for
                    any claim brought by such person arising from camera or
                    live-stream use.
                  </li>
                </ul>
              </Subsection>
            </Section>

            <Section heading="3. How We Use Your Information" id="how-we-use">
              <p>
                We use the information we collect for any and all lawful
                business purposes, including without limitation the following.{' '}
                <strong>
                  By using the Website or Services, you grant River Ridge a
                  perpetual, worldwide, royalty-free, fully paid, irrevocable,
                  transferable, sublicensable license to use the information
                  described in this Privacy Policy for these purposes:
                </strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Providing, operating, scheduling, performing, and improving
                  the Services.
                </li>
                <li>
                  Communicating with you about your pet, reservations, billing,
                  service updates, facility issues, and any other matter
                  relating to the Services.
                </li>
                <li>
                  Distributing your information internally among River Ridge
                  owners, managers, employees, contractors, kennel staff,
                  groomers, daycare attendants, and other personnel as we
                  determine necessary or appropriate to perform the Services and
                  operate our business.
                </li>
                <li>
                  Maintaining records of your account, your pet&apos;s care,
                  your pet&apos;s medical and behavioral history, and your
                  transaction history.
                </li>
                <li>
                  Processing payments through linked third-party payment
                  platforms.
                </li>
                <li>Marketing and promotional purposes (see Section 4 below).</li>
                <li>
                  Analyzing Website usage, customer behavior, and Service
                  performance to improve our offerings.
                </li>
                <li>
                  Detecting, preventing, investigating, and responding to fraud,
                  abuse, security incidents, harm to pets or persons, property
                  damage, theft, and violations of our policies or agreements.
                </li>
                <li>
                  Complying with legal obligations, court orders, subpoenas,
                  regulatory requirements, and lawful requests from government
                  authorities.
                </li>
                <li>
                  Establishing, exercising, defending, or settling legal claims,
                  including claims by or against River Ridge, our staff, our
                  customers, or third parties.
                </li>
                <li>
                  Any other purpose disclosed at the time of collection or any
                  other purpose reasonably related to our business operations.
                </li>
              </ul>
            </Section>

            <Section
              heading="4. Promotional, Marketing, and Advertising Use"
              id="marketing"
            >
              <p>
                <strong>
                  You expressly consent to the use of information collected from
                  or about you and your pet — including photographs, video,
                  audio, security and live-stream footage, your pet&apos;s name,
                  your pet&apos;s likeness, breed, behavioral attributes,
                  testimonials you provide, and reviews you post — in River
                  Ridge&apos;s marketing, advertising, and promotional
                  materials,
                </strong>{' '}
                in any medium now existing or later developed, including without
                limitation:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The Website and any successor websites.</li>
                <li>
                  Social media platforms (including but not limited to Facebook,
                  Instagram, TikTok, YouTube, X, and any successor platforms).
                </li>
                <li>
                  Print advertising, brochures, flyers, posters, signage, and
                  direct mail.
                </li>
                <li>
                  Email marketing, text message marketing, and push
                  notifications.
                </li>
                <li>
                  Paid digital advertising, including advertising delivered
                  through Google, Meta (Facebook/Instagram), and other ad
                  networks.
                </li>
                <li>
                  Press releases, news media, and third-party publications.
                </li>
                <li>
                  In-facility displays, slideshows, and promotional events.
                </li>
              </ul>
              <p>
                This consent extends to your pet&apos;s name and likeness
                without further compensation, attribution, approval right, or
                notice to you. You waive any right to inspect or approve the
                finished promotional materials and any right of publicity, right
                of privacy, or similar claim arising from such use to the
                fullest extent permitted by Tennessee law, including Tenn. Code
                Ann. § 47-25-1101 et seq.
              </p>
              <p>
                If you do not wish to have your or your pet&apos;s image used in
                marketing materials, you must submit a written opt-out request
                to River Ridge by mail or email at the address listed in Section
                13. Opt-out requests apply prospectively only and do not require
                River Ridge to remove, recall, or stop using materials already
                created, published, or distributed prior to receipt of your
                request. River Ridge will use commercially reasonable efforts to
                honor opt-out requests for future materials but does not
                guarantee removal from third-party platforms (such as social
                media services), search engine caches, archives, or materials in
                the possession of third parties.
              </p>
            </Section>

            <Section
              heading="5. We Do Not Sell Your Information"
              id="no-sale"
            >
              <p>
                <strong>
                  River Ridge does not sell your personal information or your
                  pet&apos;s information to third parties for monetary
                  consideration.
                </strong>{' '}
                However, we may share, disclose, transfer, or otherwise make
                available your information for the business purposes described
                in this Privacy Policy, and we may share information with
                third-party advertising partners, analytics providers, and
                similar service providers in ways that may be considered
                &ldquo;sharing&rdquo; or &ldquo;sale&rdquo; under certain state
                privacy laws (such as the California Consumer Privacy Act). To
                the extent any such sharing constitutes a &ldquo;sale&rdquo;
                under applicable law, you consent to that sharing by your use of
                the Website and Services.
              </p>
            </Section>

            <Section
              heading="6. Disclosure of Information to Third Parties"
              id="disclosure"
            >
              <p>
                We may disclose information we collect to the following
                categories of recipients:
              </p>

              <Subsection heading="6.1 Service Providers and Vendors">
                <p>
                  We disclose information to third-party service providers who
                  perform services on our behalf, including hosting providers,
                  software vendors, practice management software, scheduling and
                  booking platforms, email and SMS service providers, customer
                  relationship management systems, cloud storage providers,
                  accountants, attorneys, insurers, and similar vendors.
                </p>
              </Subsection>

              <Subsection heading="6.2 Payment Processors">
                <p>
                  Payments for our Services may be processed through one or more
                  third-party payment platforms linked from the Website. When
                  you make a payment through a linked platform, you are subject
                  to the privacy policy and terms of that platform, and we are
                  not responsible for the practices of those third parties. We
                  may receive limited transaction information (such as
                  confirmation of payment, the last four digits of a card, and
                  billing name) but we do not receive or store full payment card
                  numbers on the Website.
                </p>
              </Subsection>

              <Subsection heading="6.3 Analytics and Advertising Partners">
                <p>
                  <strong>
                    The Website uses Google Analytics, Meta (Facebook) Pixel,
                    and other tracking, analytics, and advertising technologies.
                  </strong>{' '}
                  These technologies collect information about your interactions
                  with the Website and may combine that information with
                  information collected across other websites and services. We
                  use these tools to understand Website traffic, measure
                  marketing effectiveness, build audiences, and deliver targeted
                  advertising to you on the Website and on other websites and
                  platforms.
                </p>
                <p>
                  Specifically, our third-party analytics and advertising
                  partners may include:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Google LLC (Google Analytics, Google Ads, Google Tag
                    Manager) — see{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-sage-dark underline-offset-4 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://policies.google.com/privacy
                    </a>
                  </li>
                  <li>
                    Meta Platforms, Inc. (Facebook Pixel, Meta Ads, Instagram
                    advertising) — see{' '}
                    <a
                      href="https://www.facebook.com/policy.php"
                      className="text-sage-dark underline-offset-4 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.facebook.com/policy.php
                    </a>
                  </li>
                  <li>
                    Other advertising networks, retargeting providers, and
                    analytics providers we may engage from time to time.
                  </li>
                </ul>
                <p>
                  These partners may use cookies, pixels, web beacons, device
                  identifiers, and similar technologies to collect information
                  about your activity on the Website and elsewhere on the
                  internet, and may share that information with other parties in
                  their networks. We do not control these third parties&apos;
                  data practices. You may opt out of certain interest-based
                  advertising at{' '}
                  <a
                    href="https://optout.aboutads.info"
                    className="text-sage-dark underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://optout.aboutads.info
                  </a>
                  ,{' '}
                  <a
                    href="https://optout.networkadvertising.org"
                    className="text-sage-dark underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://optout.networkadvertising.org
                  </a>
                  , and through your device or browser settings, but doing so
                  may not stop all data collection.
                </p>
              </Subsection>

              <Subsection heading="6.4 Veterinarians and Emergency Care Providers">
                <p>
                  We may disclose your pet&apos;s medical information, your
                  contact information, and your emergency contact information to
                  veterinarians, emergency veterinary clinics, animal hospitals,
                  and emergency responders if we determine, in our sole
                  discretion, that such disclosure is necessary or appropriate
                  for the health, safety, or welfare of your pet, our staff,
                  other animals in our care, or any other person.
                </p>
              </Subsection>

              <Subsection heading="6.5 Internal Facility Disclosure of Pet Records">
                <p>
                  <strong>
                    By submitting your pet&apos;s veterinary, medical,
                    behavioral, and care information to River Ridge, you
                    understand and agree that this information is treated as
                    semi-public within our facility.
                  </strong>{' '}
                  That is, your pet&apos;s records, notes, likes, dislikes,
                  behavioral issues, dietary restrictions, medication needs, and
                  medical conditions may be openly displayed, posted on kennel
                  cards, included on whiteboards, discussed among staff in
                  common areas, accessible to all employees and contractors, and
                  otherwise made available throughout the facility so that all
                  personnel are informed of each pet&apos;s needs. This is an
                  operational necessity for the safe and effective care of your
                  pet.
                </p>
                <p>
                  <strong>
                    If you wish for any specific portion of your pet&apos;s
                    records to be kept confidential and not openly accessible to
                    all staff,
                  </strong>{' '}
                  you must affirmatively notify a member of River Ridge
                  management in writing at the time of intake (or earlier) and
                  identify with specificity the information you wish to remain
                  confidential. Without such written notice, all information you
                  provide concerning your pet will be treated as semi-public
                  within the facility. River Ridge will use commercially
                  reasonable efforts to honor confidentiality requests but
                  cannot guarantee that information will not be inadvertently
                  disclosed within the facility, and you waive any claim arising
                  from inadvertent disclosure to the fullest extent permitted by
                  Tennessee law.
                </p>
              </Subsection>

              <Subsection heading="6.6 Legal and Protective Disclosures">
                <p>
                  We may disclose information when we believe in good faith that
                  disclosure is necessary or appropriate to: (a) comply with
                  applicable law, regulation, court order, subpoena, or other
                  legal process; (b) respond to lawful requests from public
                  authorities, including law enforcement and animal control;
                  (c) enforce our agreements, terms, and policies; (d) protect
                  the rights, property, safety, or welfare of River Ridge, our
                  customers, our staff, our customers&apos; pets, other animals,
                  or the public; (e) investigate or prevent fraud, abuse, or
                  illegal activity; or (f) establish, exercise, or defend legal
                  claims.
                </p>
              </Subsection>

              <Subsection heading="6.7 Business Transfers">
                <p>
                  If River Ridge is involved in a merger, acquisition, sale of
                  assets, financing, reorganization, bankruptcy, receivership,
                  or similar transaction, we may transfer or disclose your
                  information to the successor or acquiring entity, and to
                  advisors and counterparties involved in the transaction,
                  without further notice or consent.
                </p>
              </Subsection>
            </Section>

            <Section
              heading="7. Cookies and Tracking Technologies"
              id="cookies"
            >
              <p>
                We and our third-party partners use cookies, web beacons,
                pixels, tags, local storage, session storage, and similar
                tracking technologies (collectively, &ldquo;Cookies&rdquo;) on
                the Website. Cookies serve a variety of purposes, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Strictly necessary Cookies that enable basic Website
                  functionality.
                </li>
                <li>
                  Functional Cookies that remember your preferences and
                  settings.
                </li>
                <li>
                  Analytics Cookies that help us understand how the Website is
                  used.
                </li>
                <li>
                  Advertising and targeting Cookies that allow us and our
                  partners to deliver relevant ads to you on the Website and
                  elsewhere on the internet, and to measure the effectiveness of
                  those ads.
                </li>
              </ul>
              <p>
                You may disable Cookies through your browser settings; however,
                disabling Cookies may impair Website functionality. We do not
                currently respond to &ldquo;Do Not Track&rdquo; browser signals.
              </p>
            </Section>

            <Section heading="8. Retention of Information" id="retention">
              <p>
                We retain information collected from you and your pet for as
                long as we determine necessary or appropriate for our business
                purposes, including providing Services, maintaining records,
                complying with legal and tax obligations, resolving disputes,
                defending or asserting legal claims, marketing, and any other
                purpose described in this Privacy Policy. We may retain
                information indefinitely. Security camera and live-stream
                footage may be retained for any period we determine appropriate,
                including indefinitely. We are under no obligation to delete
                information at any specific time, except where required by
                applicable law.
              </p>
            </Section>

            <Section heading="9. Information Security" id="security">
              <p>
                We use commercially reasonable administrative, technical, and
                physical safeguards to protect information in our possession.
                However, no method of transmission over the internet, no method
                of electronic storage, and no system for handling physical
                records is completely secure. We cannot and do not guarantee the
                absolute security of your information. To the fullest extent
                permitted by Tennessee law, you assume the risk of any
                unauthorized access, disclosure, alteration, loss, or
                destruction of your information, and you release River Ridge
                from any liability arising from any data security incident not
                caused by River Ridge&apos;s gross negligence or willful
                misconduct.
              </p>
            </Section>

            <Section heading="10. Children's Information" id="children">
              <p>
                The Website and Services are intended for adults eighteen (18)
                years of age or older. We do not knowingly solicit or collect
                information from children under the age of thirteen (13). If we
                become aware that we have inadvertently collected information
                from a child under thirteen, we will take commercially
                reasonable steps to delete it. A parent or legal guardian who
                believes their child has provided information to us may contact
                us at the address listed in Section 13.
              </p>
            </Section>

            <Section
              heading="11. Third-Party Websites and Linked Services"
              id="third-party-sites"
            >
              <p>
                The Website may contain links to third-party websites,
                applications, services, and platforms (including but not limited
                to a third-party payment platform, social media platforms, and
                veterinary or pet-related services). Those third parties are not
                controlled by River Ridge and have their own privacy policies,
                terms of service, and data practices. River Ridge is not
                responsible for the content, privacy practices, security, or any
                acts or omissions of any third-party website, application,
                service, or platform. Your use of any third-party service is at
                your own risk and is governed by that third party&apos;s
                policies, not this Privacy Policy.
              </p>
            </Section>

            <Section
              heading="12. State-Specific Rights and Out-of-State Customers"
              id="state-rights"
            >
              <p>
                River Ridge operates a single facility in Dunlap, Sequatchie
                County, Tennessee, and primarily serves customers located in
                Tennessee. We may from time to time provide Services to
                customers who reside outside of Tennessee but who bring their
                pets to our Tennessee facility, or who otherwise interact with
                the Website from another state. Regardless of where you reside,
                by using the Website or Services you agree that the laws of the
                State of Tennessee govern your relationship with River Ridge to
                the fullest extent permitted by law, and you waive any rights or
                remedies under the laws of any other jurisdiction to the maximum
                extent permissible.
              </p>
              <p>
                If applicable law in your state of residence provides you with
                rights regarding your personal information (such as the right to
                access, correct, delete, or limit the use of your information),
                you may submit a request to River Ridge at the contact
                information in Section 13. We will respond as required by
                applicable law. River Ridge does not meet the applicability
                thresholds of the Tennessee Information Protection Act, Tenn.
                Code Ann. § 47-18-3201 et seq., and certain provisions of that
                Act do not apply to us; nevertheless, we will consider
                good-faith requests from Tennessee residents.
              </p>
            </Section>

            <Section heading="13. Contact Information" id="contact">
              <p>
                Questions, comments, opt-out requests, confidentiality requests,
                or other communications concerning this Privacy Policy or our
                information practices should be directed to:
              </p>
              <address className="not-italic rounded-2xl bg-sage/10 p-5 text-ink">
                <strong>{SITE_NAME}</strong>
                <br />
                {ADDRESS.streetAddress}
                <br />
                {ADDRESS.addressLocality}, {ADDRESS.addressRegion}{' '}
                {ADDRESS.postalCode}
                <br />
                Telephone:{' '}
                <a
                  href={PHONE.href}
                  className="text-sage-dark underline-offset-4 hover:underline"
                >
                  {PHONE.display}
                </a>
                <br />
                Email:{' '}
                <a
                  href={EMAIL.href}
                  className="text-sage-dark underline-offset-4 hover:underline"
                >
                  {EMAIL.display}
                </a>
              </address>
            </Section>

            <Section
              heading="14. Governing Law, Venue, and Jury Trial Waiver"
              id="governing-law"
            >
              <p>
                <strong>
                  This Privacy Policy and any dispute, claim, or controversy
                  arising out of or relating to this Privacy Policy, the
                  Website, the Services, your information, your pet, or your
                  relationship with River Ridge, whether sounding in contract,
                  tort, statute, or otherwise, shall be governed by and
                  construed in accordance with the laws of the State of
                  Tennessee, without regard to its conflict-of-laws principles.
                </strong>
              </p>
              <p>
                <strong>
                  Exclusive venue for any action arising out of or relating to
                  this Privacy Policy, the Website, the Services, your
                  information, your pet, or your relationship with River Ridge
                  shall lie exclusively in the state courts located in
                  Sequatchie County, Tennessee,
                </strong>{' '}
                or, if federal jurisdiction exists, in the United States
                District Court for the Eastern District of Tennessee,
                Chattanooga Division. You irrevocably consent to the personal
                jurisdiction of those courts and waive any objection based on
                inconvenient forum, lack of personal jurisdiction, or improper
                venue.
              </p>
              <p>
                <strong>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AND RIVER RIDGE
                  EACH IRREVOCABLY AND UNCONDITIONALLY WAIVE THE RIGHT TO A
                  TRIAL BY JURY
                </strong>{' '}
                in any action, proceeding, or counterclaim arising out of or
                relating to this Privacy Policy, the Website, the Services, your
                information, your pet, or your relationship with River Ridge.
              </p>
            </Section>

            <Section
              heading="15. Limitation of Liability and Indemnification"
              id="liability"
            >
              <p>
                TO THE FULLEST EXTENT PERMITTED BY TENNESSEE LAW, RIVER RIDGE,
                ITS OWNERS, MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, CONTRACTORS,
                AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR
                ANY LOSS OF PROFITS, REVENUE, GOODWILL, DATA, OR USE, ARISING
                OUT OF OR RELATING TO THIS PRIVACY POLICY OR OUR HANDLING OF
                YOUR INFORMATION, WHETHER BASED IN CONTRACT, TORT, STATUTE, OR
                ANY OTHER LEGAL THEORY, AND WHETHER OR NOT RIVER RIDGE HAS BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. RIVER RIDGE&apos;S
                TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR
                RELATING TO THIS PRIVACY POLICY SHALL NOT EXCEED THE TOTAL
                AMOUNT YOU PAID TO RIVER RIDGE FOR SERVICES IN THE TWELVE (12)
                MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR ONE
                HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
              <p>
                You agree to indemnify, defend, and hold harmless River Ridge
                and its owners, members, managers, officers, employees,
                contractors, and agents from and against any and all claims,
                damages, losses, liabilities, costs, and expenses (including
                reasonable attorneys&apos; fees) arising out of or relating to:
                (a) your breach of this Privacy Policy or any Service Agreement;
                (b) your provision of inaccurate, incomplete, or unauthorized
                information to River Ridge; (c) any claim by a third party
                (including a family member, guest, or co-owner of a pet) arising
                from information, images, or footage you authorized River Ridge
                to use; or (d) your violation of any law or third-party right.
              </p>
            </Section>

            <Section
              heading="16. Changes to This Privacy Policy"
              id="changes"
            >
              <p>
                River Ridge may modify, amend, or replace this Privacy Policy at
                any time, in our sole discretion, without prior notice to you.
                The most current version will be posted on the Website with an
                updated &ldquo;Last Updated&rdquo; date. Your continued use of
                the Website or Services after any change constitutes your
                acceptance of the modified Privacy Policy. You are responsible
                for reviewing this Privacy Policy periodically.
              </p>
            </Section>

            <Section heading="17. Miscellaneous" id="miscellaneous">
              <p>
                <strong>Severability.</strong> If any provision of this Privacy
                Policy is held invalid, illegal, or unenforceable by a court of
                competent jurisdiction, such provision shall be modified to the
                minimum extent necessary to render it enforceable, or, if that
                is not possible, severed, and the remaining provisions shall
                remain in full force and effect.
              </p>
              <p>
                <strong>No Waiver.</strong> River Ridge&apos;s failure to
                enforce any provision of this Privacy Policy shall not
                constitute a waiver of that provision or any other provision.
              </p>
              <p>
                <strong>Entire Agreement.</strong> This Privacy Policy, together
                with any applicable Service Agreement and any other agreements
                you sign with River Ridge, constitutes the entire agreement
                between you and River Ridge concerning the subject matter hereof
                and supersedes all prior or contemporaneous communications and
                proposals, whether oral or written.
              </p>
              <p>
                <strong>Assignment.</strong> You may not assign or transfer your
                rights or obligations under this Privacy Policy without River
                Ridge&apos;s prior written consent. River Ridge may assign this
                Privacy Policy without restriction.
              </p>
              <p>
                <strong>Headings.</strong> Section headings are for convenience
                only and shall not affect the interpretation of this Privacy
                Policy.
              </p>
              <p>
                <strong>Survival.</strong> The provisions of Sections 3, 4, 5,
                6, 8, 9, 12, 13, 14, 15, 16, and 17 shall survive any
                termination of your relationship with River Ridge or your
                cessation of use of the Website or Services.
              </p>
            </Section>

            <div className="rounded-2xl border-2 border-sage/30 bg-sage/10 p-6 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
                Acknowledgment
              </h2>
              <p className="mt-3 font-semibold uppercase tracking-wide text-ink">
                By using the Website, by submitting information to River Ridge,
                by visiting our facility, or by using our Services, you
                acknowledge that you have read this Privacy Policy in its
                entirety, you understand it, and you agree to be bound by all of
                its terms.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-sage/10">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <p className="text-sm text-bark">
            Questions about this policy?{' '}
            <Link
              href="/contact/"
              className="font-semibold text-sage-dark underline-offset-4 hover:underline"
            >
              Contact us →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function Section({
  heading,
  id,
  children,
}: {
  heading: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
        {heading}
      </h2>
      {children}
    </section>
  );
}

function Subsection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-heading text-lg font-bold text-ink sm:text-xl">
        {heading}
      </h3>
      {children}
    </div>
  );
}
