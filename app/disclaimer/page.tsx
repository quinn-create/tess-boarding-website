import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms, Disclosures, and Liability Disclaimer',
  description: `Terms, disclosures, assumptions of risk, and limitations of liability for ${SITE_NAME} in Dunlap, Sequatchie County, Tennessee.`,
  alternates: { canonical: '/disclaimer/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms, Disclosures, and Liability Disclaimer',
    description: `Important disclosures, assumptions of risk, and limitations of liability for ${SITE_NAME}.`,
  },
};

export default function DisclaimerPage() {
  return (
    <section className="bg-gradient-to-b from-cream to-sage/10">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <header className="border-b border-sage/30 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-bark">
            River Ridge Pet Retreat
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Terms, Disclosures, and Liability Disclaimer
          </h1>
          <p className="mt-3 italic text-bark">
            Dunlap, Sequatchie County, Tennessee
          </p>
          <p className="mt-3 text-sm text-bark">
            Effective Date: ___________________, 20___
          </p>
        </header>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink/90 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:!mt-12 [&_h2]:scroll-mt-24 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:!mt-8 [&_h4]:font-heading [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-ink [&_h4]:!mt-6 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink">
          <div className="rounded-2xl border border-sage/40 bg-sage/10 p-5 sm:p-6">
            <p className="font-semibold uppercase tracking-wide text-ink">
              Please read this document carefully before bringing your dog to
              River Ridge Pet Retreat or entering our premises. It contains
              important disclosures, assumptions of risk, and limitations of
              liability that affect your legal rights.
            </p>
          </div>

          <p>
            River Ridge Pet Retreat (&ldquo;<strong>River Ridge</strong>
            &rdquo;, &ldquo;<strong>we</strong>&rdquo;, &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is a pet boarding, daycare, grooming, and
            pet-services facility located in Dunlap, Sequatchie County,
            Tennessee. The information that follows is provided so that current
            and prospective clients, visitors, and other persons who enter our
            premises are fully informed of the inherent risks associated with
            our services and our facility. By bringing a dog to River Ridge, by
            entering our premises, or by using any of our services, you
            acknowledge that you have been given the opportunity to read,
            review, and ask questions about these terms.
          </p>

          <p>
            <strong>Separate Boarding Agreement.</strong> These website terms
            are informational and supplement &mdash; but do not replace &mdash;
            the written <strong>Boarding and Services Agreement</strong> that
            each dog owner will be required to sign before any dog is admitted
            to River Ridge. The Boarding and Services Agreement is the
            operative contract between you and River Ridge. The terms in that
            signed agreement will govern in the event of any conflict with this
            website disclosure.
          </p>

          <h2 id="part-one">
            Part One &mdash; Disclosures, Risks, and Terms Applicable to Dog
            Owners and Their Dogs
          </h2>
          <p>
            <strong>Scope of Part One.</strong> Part One applies to every dog
            dropped off at, accepted by, or serviced by River Ridge for any
            reason, and to every owner, agent, family member, or other person
            who delivers a dog to River Ridge or authorizes River Ridge to
            provide services to a dog.
          </p>

          <h3 id="services-offered">1. Services Offered by River Ridge</h3>
          <p>
            River Ridge offers the following services. Each service has its own
            inherent risks, which are described below. By using any service,
            you acknowledge those risks.
          </p>
          <ul>
            <li>
              <strong>Boarding.</strong> Overnight and extended-stay lodging in
              private kennels or runs.
            </li>
            <li>
              <strong>Off-Leash Group Play.</strong> Supervised group play
              sessions with other dogs in fenced indoor or outdoor areas.
            </li>
            <li>
              <strong>Grooming.</strong> Bathing, brushing, nail trimming, ear
              cleaning, and related grooming services.
            </li>
            <li>
              <strong>Medication Administration.</strong> Administration of
              owner-supplied prescription or over-the-counter medications
              according to written instructions provided by the owner.
            </li>
            <li>
              <strong>Emergency Veterinary Transport and Care.</strong>{' '}
              Transportation to and authorization of emergency veterinary care
              when, in the reasonable judgment of River Ridge staff, such care
              is necessary or appropriate.
            </li>
          </ul>

          <h3 id="inherent-risks">
            2. Inherent Risks of Boarding, Daycare, and Pet Services
          </h3>
          <p>
            You acknowledge and agree that boarding a dog and providing
            pet-care services involve inherent and unavoidable risks that
            cannot be eliminated even with the highest standard of care. These
            risks include, but are <strong>not</strong> limited to:
          </p>

          <h4>A. Risks Associated With Group Play and Contact With Other Dogs</h4>
          <ul>
            <li>
              Bites, scratches, puncture wounds, lacerations, abrasions, and
              other injuries inflicted by other dogs during play or
              interaction.
            </li>
            <li>
              Sudden, unprovoked, or unpredictable aggressive behavior by other
              dogs, even dogs with no known history of aggression.
            </li>
            <li>
              Injury caused by collisions, rough play, chasing, mounting, or
              pile-on behavior typical of dogs in group settings.
            </li>
            <li>
              Stress, anxiety, exhaustion, or behavioral changes resulting from
              group play or exposure to unfamiliar dogs and people.
            </li>
            <li>
              Transmission of contagious or infectious diseases, parasites,
              viruses, bacteria, or fungi (including but not limited to kennel
              cough, canine influenza, parvovirus, distemper, giardia,
              coccidia, fleas, ticks, mites, ringworm, and others),
              notwithstanding our vaccination and health requirements.
            </li>
          </ul>
          <p>
            <strong>Group play is voluntary.</strong> River Ridge staff
            supervise group play sessions; however,{' '}
            <strong>
              supervision does not eliminate the risk of injury, and you
              understand and accept that bites, fights, and injuries can and do
              occur in any group-play environment, even with attentive
              supervision.
            </strong>
          </p>

          <h4>B. Risks Associated With Boarding and Kenneling</h4>
          <ul>
            <li>
              Stress, anxiety, loss of appetite, diarrhea, vomiting, or weight
              loss associated with separation from the owner or unfamiliar
              environments.
            </li>
            <li>
              Injury caused by self-harm behaviors such as chewing on kennel
              doors, escape attempts, or excessive licking or scratching.
            </li>
            <li>
              Aggravation of pre-existing medical, behavioral, or psychological
              conditions.
            </li>
            <li>
              Damage to or loss of personal property (collars, leashes, beds,
              toys, blankets, food containers, and similar items) brought to
              River Ridge with your dog.
            </li>
          </ul>

          <h4>C. Risks Associated With Grooming</h4>
          <ul>
            <li>
              Nicks, cuts, clipper burn, brush burn, irritation, or abrasion of
              the skin.
            </li>
            <li>
              Stress, restraint-related injury, or aggravation of skin or coat
              conditions.
            </li>
            <li>
              Discovery of pre-existing conditions (matting, hot spots, ear
              infections, lumps, growths, parasites) that may require
              veterinary attention.
            </li>
            <li>Reactions to shampoos, conditioners, or grooming products.</li>
            <li>
              Injury or stress to senior, very young, anxious, or medically
              fragile dogs that may not tolerate grooming well.
            </li>
          </ul>

          <h4>D. Risks Associated With Medication Administration</h4>
          <ul>
            <li>
              Adverse reactions, side effects, or unexpected interactions to
              medications.
            </li>
            <li>
              Failure of the medication to produce the intended therapeutic
              effect.
            </li>
            <li>
              Refusal of the dog to accept oral or topical medication,
              resulting in missed or partial doses.
            </li>
            <li>
              Errors that may occur despite reasonable care, including timing
              variations and dosage variations within ordinary tolerances.
            </li>
          </ul>
          <p>
            <strong>Owner Responsibility for Medication.</strong> You are
            solely responsible for providing accurate, complete, and up-to-date
            written instructions, dosages, and medications in their original
            prescription containers. River Ridge is not a veterinary clinic and
            does not diagnose, prescribe, or substitute medications.
          </p>

          <h4>E. Risks Associated With the Premises</h4>
          <ul>
            <li>
              The River Ridge property includes natural rocky and hilly
              terrain, uneven surfaces, fenced outdoor play areas, gravel,
              dirt, vegetation, and other natural features.
            </li>
            <li>
              Slips, trips, falls, scrapes, and minor injuries can occur on
              natural terrain.
            </li>
            <li>
              Exposure to weather conditions including heat, cold, rain, mud,
              sun, insects, and wildlife.
            </li>
            <li>
              Possibility of contact with native wildlife, insects, snakes, or
              other animals on or near the property.
            </li>
          </ul>

          <h4>F. General Risks</h4>
          <ul>
            <li>
              Sudden illness, injury, medical emergency, or death from causes
              that may not be predictable or preventable.
            </li>
            <li>
              Aggravation of pre-existing conditions whether or not disclosed
              to River Ridge.
            </li>
            <li>
              Loss of, escape of, or theft of a dog, despite reasonable
              security measures.
            </li>
            <li>
              Acts of God, severe weather, fire, power outages, and other
              events outside the reasonable control of River Ridge.
            </li>
          </ul>

          <h3 id="vaccination-requirements">
            3. Mandatory Vaccination and Health Requirements
          </h3>
          <p>
            To protect every dog and person at our facility, River Ridge
            requires that all dogs meet the following health and vaccination
            requirements before being admitted to the premises:
          </p>
          <ul>
            <li>
              <strong>Rabies</strong> &mdash; current vaccination required.
            </li>
            <li>
              <strong>DHPP</strong> (Distemper, Hepatitis/Adenovirus,
              Parainfluenza, Parvovirus) &mdash; current vaccination required.
            </li>
            <li>
              <strong>Bordetella</strong> (kennel cough) &mdash; current
              vaccination required.
            </li>
            <li>
              <strong>Canine Influenza</strong> (CIV) &mdash; current
              vaccination required.
            </li>
            <li>
              <strong>Fecal Parasite Screening</strong> &mdash; current
              negative or treated result required.
            </li>
            <li>
              <strong>Flea and Tick Prevention</strong> &mdash; current
              preventative required.
            </li>
          </ul>
          <p>
            <strong>Records Required Before Arrival.</strong> Complete and
            current vaccination and health records must be provided to River
            Ridge <strong>before</strong> your dog arrives on our property. A
            dog will not be admitted, and will not set foot on River Ridge
            property, without verified records on file.
          </p>
          <p>
            <strong>Vaccination at Owner&apos;s Expense.</strong> If a dog is
            admitted and it is later determined that the dog is not current on
            required vaccinations, River Ridge may, at its option and with
            appropriate veterinary involvement, arrange for the dog to receive
            all required vaccinations.{' '}
            <strong>
              All costs of such vaccinations, plus a service fee for arranging
              and administering them, will be charged to the owner and are due
              upon pickup.
            </strong>
          </p>
          <p>
            <strong>Mandatory Disclosure of Bite History.</strong> Any dog with
            any history of biting a person or another animal, or any history of
            aggressive behavior, <strong>must</strong> be disclosed to River
            Ridge in writing before the dog is brought onto the premises.
            Failure to disclose a bite history is a material misrepresentation
            that voids any limitation of River Ridge&apos;s right to refuse,
            terminate, or charge for services, and is grounds for immediate
            termination of services and removal of the dog from the facility.
          </p>

          <h3 id="owner-representations">
            4. Owner&apos;s Representations and Warranties
          </h3>
          <p>
            Each time an owner brings a dog to River Ridge, attempts to board a
            dog at River Ridge, or authorizes River Ridge to provide any
            service to a dog, the owner represents and warrants the following:
          </p>
          <ul>
            <li>
              The owner is the lawful owner of the dog, or has full authority
              from the lawful owner to authorize the services described in
              these terms and in the Boarding and Services Agreement.
            </li>
            <li>
              The dog has not displayed aggressive tendencies toward people or
              other animals, except as the owner has disclosed to River Ridge
              in writing in advance.
            </li>
            <li>
              The dog has no history of biting any person or animal, except as
              the owner has disclosed to River Ridge in writing in advance.
            </li>
            <li>
              The dog is not currently exhibiting symptoms of any contagious or
              infectious illness or condition, and has not been knowingly
              exposed to such illness within the prior thirty (30) days.
            </li>
            <li>
              The dog is current on all vaccinations and preventatives required
              by River Ridge, and the owner has provided complete and accurate
              records.
            </li>
            <li>
              All information the owner has provided about the dog&apos;s
              health, behavior, medications, dietary needs, and prior history
              is true, complete, and accurate.
            </li>
          </ul>
          <p>
            <strong>Right to Refuse or Remove.</strong> River Ridge may refuse
            to accept any dog, or may remove any dog from the facility at any
            time, in its sole discretion, including for reasons of aggression,
            illness, incompatibility with group play, or noncompliance with
            these requirements.
          </p>

          <h3 id="emergency-care">5. Emergency Veterinary Care Authorization</h3>
          <p>
            By bringing your dog to River Ridge, you authorize River Ridge to
            obtain emergency veterinary evaluation, transport, and treatment
            for your dog when River Ridge staff, in their reasonable judgment,
            determine that such care is appropriate. You authorize River Ridge
            to incur veterinary expenses on your behalf{' '}
            <strong>
              up to a total of Two Thousand Five Hundred Dollars ($2,500.00)
              without contacting you first.
            </strong>
          </p>
          <p>
            Once expenses approach $2,500.00, River Ridge will use reasonable
            efforts to contact you (or your designated emergency contact)
            before authorizing further care. If you cannot be reached after
            reasonable efforts and the attending veterinarian recommends
            additional care to preserve the dog&apos;s life or prevent serious
            harm, River Ridge may authorize that care in its reasonable
            discretion.
          </p>
          <p>
            <strong>
              All veterinary costs, transportation costs, and any reasonable
              administrative or service fee charged by River Ridge in
              connection with arranging emergency care, are the sole
              responsibility of the owner
            </strong>{' '}
            and are due upon pickup of the dog or upon billing, whichever is
            earlier.
          </p>

          <h3 id="pickup">6. Pickup, Late Fees, and Abandonment</h3>
          <p>
            <strong>Late Pickup.</strong> If you do not pick up your dog at the
            agreed-upon pickup time, River Ridge may charge a{' '}
            <strong>late fee</strong> and an additional{' '}
            <strong>inconvenience fee</strong> for each day or partial day
            beyond the scheduled pickup time. The amounts of these fees are set
            out in the Boarding and Services Agreement and on River Ridge&apos;s
            posted rate schedule.
          </p>
          <p>
            <strong>Abandonment.</strong> If a dog is not picked up within{' '}
            <strong>forty-eight (48) hours</strong> after the agreed-upon
            pickup time, and the owner has not made alternative arrangements
            with River Ridge in writing, the dog will be deemed{' '}
            <strong>abandoned.</strong>
          </p>
          <p>
            Following abandonment, River Ridge may exercise any rights
            available to it under Tennessee law, including but not limited to
            retaining a possessory lien for unpaid charges and exercising
            statutory rights with respect to abandoned animals. River Ridge may
            also place the dog with a rescue, shelter, or new home, in its
            discretion, after providing such notice as is required by
            applicable law.{' '}
            <strong>
              The owner remains responsible for all charges incurred up to and
              including the date of disposition.
            </strong>
          </p>

          <h3 id="personal-property">7. Personal Property</h3>
          <p>
            Personal items left with your dog (collars, leashes, harnesses,
            beds, blankets, toys, food containers, and similar items) are left
            at the owner&apos;s sole risk. River Ridge is not responsible for
            loss of, damage to, or destruction of personal property, however
            caused.
          </p>

          <h3 id="photo-release">
            8. Photography, Video, and Social Media Release
          </h3>
          <p>
            River Ridge occasionally takes photographs and videos of dogs in
            our care for marketing, training, and social-media purposes. By
            bringing your dog to River Ridge, you grant River Ridge a
            non-exclusive, royalty-free, perpetual, and worldwide license to
            photograph and video your dog and to use, display, reproduce, and
            distribute those images and videos in any media, including River
            Ridge&apos;s website, social-media accounts, and printed marketing
            materials, without further compensation to the owner. River Ridge
            will not publicly identify your dog by name or use your personal
            information in marketing materials without your separate consent.
            If you do not wish for images or videos of your dog to be used,
            please notify River Ridge in writing at the time of drop-off.
          </p>

          <h3 id="release">
            9. Assumption of Risk, Waiver, and Release of Liability
          </h3>
          <div className="rounded-2xl border border-sage/40 bg-sage/10 p-5 sm:p-6">
            <p className="font-semibold uppercase tracking-wide text-ink">
              Please read this section carefully. It limits River Ridge&apos;s
              liability and affects your legal rights.
            </p>
          </div>
          <p>
            <strong>9.1 Assumption of Risk.</strong> You acknowledge that the
            risks described in these terms are inherent in dog boarding,
            daycare, grooming, group play, medication administration, and the
            use of our premises. You knowingly and voluntarily assume all such
            risks, whether or not specifically described above, including risks
            that are not foreseeable.
          </p>
          <p>
            <strong>9.2 Release and Waiver of Ordinary Negligence.</strong> To
            the fullest extent allowed by Tennessee law, you release, waive,
            discharge, and covenant not to sue River Ridge Pet Retreat, its
            owners, members, managers, officers, employees, agents,
            contractors, and representatives (collectively, the{' '}
            &ldquo;<strong>Released Parties</strong>&rdquo;) from any and all
            claims, demands, causes of action, losses, damages, costs, and
            expenses (including reasonable attorney&apos;s fees) of any kind
            whatsoever, whether known or unknown, arising out of or related to{' '}
            <strong>
              the ordinary negligence of any of the Released Parties
            </strong>{' '}
            in connection with River Ridge&apos;s services, premises, or the
            conduct of other dogs or their owners on the premises, including
            but not limited to bites, injuries, illness, escape, loss, or death
            of a dog and damage to or loss of personal property.
          </p>
          <p>
            <strong>9.3 What This Waiver Does Not Cover.</strong> Nothing in
            this waiver releases the Released Parties from liability for{' '}
            <strong>
              gross negligence, recklessness, willful or wanton misconduct, or
              intentional acts.
            </strong>{' '}
            Nothing in this waiver waives any right that, under Tennessee law,
            may not be waived, including any right to recover for damages
            caused by such conduct.
          </p>
          <p>
            <strong>9.4 Indemnification.</strong> You agree to indemnify,
            defend, and hold harmless the Released Parties from any claim,
            damage, loss, or expense (including reasonable attorney&apos;s
            fees) brought by any third party (including, without limitation,
            another customer of River Ridge or that customer&apos;s dog)
            arising out of: (a) any act or omission of your dog, including but
            not limited to bites or injuries inflicted on people, other dogs,
            or property; (b) any misrepresentation or omission you make
            regarding your dog&apos;s health, behavior, vaccination status, or
            bite history; or (c) your breach of these terms or of the Boarding
            and Services Agreement.
          </p>
          <p>
            <strong>9.5 Reasonable Care.</strong> River Ridge will use
            reasonable care in providing its services, including reasonable
            supervision of group play. However, you acknowledge that even with
            reasonable supervision, dogs interacting in group settings may
            injure one another, and you accept that risk.
          </p>

          <h2 id="part-two">
            Part Two &mdash; Premises Notice for All Visitors and Persons
            Entering River Ridge Property
          </h2>
          <p>
            <strong>Scope of Part Two.</strong> Part Two applies to every
            person who enters the River Ridge premises for any purpose,
            including but not limited to dog owners, family members, friends,
            guests, prospective clients, tour visitors, and persons
            accompanying others.{' '}
            <strong>
              By entering River Ridge property, you acknowledge that you have
              been given notice of the following risks and conditions and you
              accept them.
            </strong>
          </p>

          <h3 id="premises-conditions">10. Premises Conditions and Risks</h3>
          <p>
            River Ridge&apos;s premises include features and conditions that
            present inherent risks. By entering, you acknowledge and accept the
            following:
          </p>
          <ul>
            <li>
              <strong>Natural Terrain.</strong> The property includes natural
              rocky and hilly terrain. Surfaces may be uneven, sloped,
              gravel-covered, muddy when wet, slick, or otherwise irregular.
              Slips, trips, and falls are possible.
            </li>
            <li>
              <strong>Fenced Areas.</strong> Fenced enclosures are used to
              contain dogs. Fences are designed for dog containment, not as
              barriers for human safety. Do not climb, lean on, or hang
              anything on fences. Do not place hands or fingers through fence
              openings.
            </li>
            <li>
              <strong>Dogs on the Premises.</strong> There are dogs on the
              premises at all times. Dogs are unpredictable. Even friendly dogs
              may bite, jump, scratch, or knock down a person, especially a
              small child or someone who is unsteady on their feet.
            </li>
            <li>
              <strong>Weather and Environmental Exposure.</strong> Outdoor
              areas are exposed to sun, heat, cold, rain, mud, wind, insects,
              and wildlife.
            </li>
            <li>
              <strong>Wildlife and Insects.</strong> Native wildlife (including
              but not limited to snakes, ticks, wasps, spiders, and rodents)
              may be present on or near the premises.
            </li>
            <li>
              <strong>Cleaning Products and Equipment.</strong> Cleaning
              products, grooming equipment, and pet-care supplies are in use on
              the premises.
            </li>
          </ul>

          <h3 id="visitor-rules">11. Rules for Visitors</h3>
          <p>
            To protect yourself, our staff, and the dogs, you agree to follow
            these rules while on the premises:
          </p>
          <ul>
            <li>
              Do not approach, touch, feed, or attempt to interact with any dog
              without express permission from River Ridge staff.
            </li>
            <li>
              Do not enter any kennel, run, play yard, or other restricted area
              without express permission and accompaniment by River Ridge
              staff.
            </li>
            <li>
              Children must remain with and under the direct supervision and
              control of a responsible adult at all times. River Ridge does not
              supervise children.
            </li>
            <li>
              Do not bring outside dogs or other animals onto the premises
              unless they are scheduled for services and have provided required
              records.
            </li>
            <li>
              Wear closed-toe, sturdy footwear. Be aware of your footing on
              uneven terrain.
            </li>
            <li>Comply with all instructions from River Ridge staff at all times.</li>
          </ul>

          <h3 id="visitor-release">12. Visitor Assumption of Risk and Release</h3>
          <div className="rounded-2xl border border-sage/40 bg-sage/10 p-5 sm:p-6">
            <p className="font-semibold uppercase tracking-wide text-ink">
              Entry onto River Ridge property is at your own risk.
            </p>
          </div>
          <p>
            <strong>12.1 Assumption of Risk.</strong> You knowingly and
            voluntarily assume all risks of personal injury, property damage,
            illness, and other harm associated with entering River Ridge&apos;s
            premises, including the risks described above and any other
            inherent risks of being present at a working pet boarding and
            daycare facility.
          </p>
          <p>
            <strong>12.2 Release and Waiver.</strong> To the fullest extent
            allowed by Tennessee law, you release, waive, discharge, and
            covenant not to sue the Released Parties from any and all claims,
            demands, causes of action, losses, damages, costs, and expenses
            arising out of or related to{' '}
            <strong>the ordinary negligence of the Released Parties</strong> in
            connection with your presence on River Ridge&apos;s premises,
            including but not limited to injuries caused by terrain, dogs,
            equipment, or the conduct of other visitors. This waiver does{' '}
            <strong>not</strong> release the Released Parties from liability
            for gross negligence, recklessness, willful or wanton misconduct,
            or intentional acts.
          </p>
          <p>
            <strong>12.3 Children.</strong> If you are responsible for a minor
            child on the premises, you make this acknowledgment and assumption
            of risk on behalf of yourself only. River Ridge does not seek to
            waive any claim a minor may have under Tennessee law that the minor
            is not legally capable of waiving. You agree, however, to supervise
            any minor in your care and to indemnify the Released Parties for
            any claim arising from your failure to do so.
          </p>

          <h2 id="part-three">
            Part Three &mdash; General Terms Applicable to All Users
          </h2>

          <h3 id="acceptance">13. Acceptance of These Terms</h3>
          <p>
            These terms are posted on River Ridge&apos;s website and at the
            River Ridge facility. You acknowledge that you have notice of these
            terms and that they apply to your use of our services and your
            presence on our premises.
          </p>
          <p>
            <strong>Binding Effect.</strong> By doing any one or more of the
            following, you acknowledge that you have read these terms, that you
            understand them, and that you agree to be bound by them: (a)
            bringing or attempting to bring a dog to River Ridge; (b) entering
            the River Ridge premises; (c) leaving a dog in River Ridge&apos;s
            care; or (d) paying River Ridge for any service.{' '}
            <strong>
              These website terms supplement, and do not replace, the written
              Boarding and Services Agreement, which each dog owner is required
              to sign before any dog is admitted to the facility. In the event
              of any conflict between these website terms and the signed
              Boarding and Services Agreement, the signed Boarding and Services
              Agreement controls.
            </strong>
          </p>

          <h3 id="governing-law">
            14. Governing Law, Venue, and Jury Trial Waiver
          </h3>
          <p>
            <strong>Governing Law.</strong> These terms and any dispute arising
            out of or relating to them, River Ridge&apos;s services, or your
            presence on River Ridge&apos;s premises are governed by the laws of
            the State of Tennessee, without regard to its conflict-of-laws
            principles.
          </p>
          <p>
            <strong>Venue.</strong> Exclusive venue for any action arising out
            of or relating to these terms, River Ridge&apos;s services, or your
            presence on River Ridge&apos;s premises shall lie in the courts of
            competent jurisdiction located in{' '}
            <strong>Sequatchie County, Tennessee</strong> (General Sessions or
            Circuit Court, as appropriate). You consent to personal
            jurisdiction in those courts and waive any objection based on forum
            non conveniens.
          </p>
          <p>
            <strong>Jury Trial Waiver.</strong> To the fullest extent allowed
            by law, the parties waive any right to a trial by jury in any
            action arising out of or relating to these terms or River
            Ridge&apos;s services.
          </p>

          <h3 id="attorneys-fees">15. Attorney&apos;s Fees</h3>
          <p>
            In any action or proceeding arising out of or relating to these
            terms, River Ridge&apos;s services, or your presence on River
            Ridge&apos;s premises, the prevailing party shall be entitled to
            recover its reasonable attorney&apos;s fees, court costs, and
            litigation expenses, in addition to any other relief to which it
            may be entitled.
          </p>

          <h3 id="severability">16. Severability</h3>
          <p>
            If any provision of these terms is held to be invalid or
            unenforceable by a court of competent jurisdiction, that provision
            shall be enforced to the maximum extent permitted, and the
            remaining provisions shall remain in full force and effect.
          </p>

          <h3 id="no-waiver">17. No Waiver</h3>
          <p>
            River Ridge&apos;s failure to enforce any provision of these terms
            shall not be deemed a waiver of that provision or of any other
            provision.
          </p>

          <h3 id="entire-agreement">18. Entire Agreement on Website Terms</h3>
          <p>
            These website terms, together with the signed Boarding and Services
            Agreement, constitute the entire understanding between you and
            River Ridge regarding the subject matter described here, and
            supersede any prior or contemporaneous oral or written
            communications.
          </p>

          <h3 id="changes">19. Changes to These Terms</h3>
          <p>
            River Ridge may update these terms from time to time. The version
            posted on River Ridge&apos;s website at the time you bring your dog
            to the facility, enter the premises, or pay for a service is the
            version that applies to that visit or transaction.
          </p>

          <h3 id="questions">20. Questions</h3>
          <p>
            If you have any questions about these terms before bringing your
            dog to River Ridge or before entering our premises, please contact
            us:
          </p>
          <address className="not-italic">
            River Ridge Pet Retreat
            <br />
            Dunlap, Sequatchie County, Tennessee
            <br />
            [Phone] &nbsp; [Email] &nbsp; [Website]
          </address>

          <div className="!mt-12 rounded-2xl border border-sage/40 bg-sage/10 p-5 sm:p-6">
            <p className="font-semibold uppercase tracking-wide text-ink">
              By bringing a dog to River Ridge, entering our premises, leaving
              a dog in our care, or paying for any service, you acknowledge
              that you have read and understood these terms, including the
              assumption of risk, release, and limitation of liability
              provisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
