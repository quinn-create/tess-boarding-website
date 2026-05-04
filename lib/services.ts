export type Service = {
  slug: 'boarding' | 'grooming' | 'playtime';
  title: string;
  shortTitle: string;
  href: string;
  image: string;
  imageAlt: string;
  blurb: string;
  // Detail-page content. `playtime` is an add-on so it has no detail page.
  detail?: {
    intro: string;
    sections: { heading: string; body: string }[];
    bringList?: string[];
    faqs: { question: string; answer: string }[];
  };
};

export const services: Service[] = [
  {
    slug: 'boarding',
    title: 'Dog Boarding',
    shortTitle: 'Boarding',
    href: '/services/boarding/',
    image: '/images/service-boarding.avif',
    imageAlt: 'Dog relaxing in a kennel run',
    blurb:
      "Cozy indoor/outdoor kennel runs with plenty of attention. Dogs from the same household can share a run, so siblings and best friends can stay together.",
    detail: {
      intro:
        "Boarding at River Ridge means your dog has space to move, people who pay attention, and a quiet spot to rest at the end of the day. Whether it's a weekend trip or a longer stay, the daily routine stays steady so your dog can settle in.",
      sections: [
        {
          heading: "What's included",
          body:
            "Your dog gets an indoor/outdoor run, fresh water on a regular check, twice-daily meals (you bring the food they're used to), and supervised yard time throughout the day. We follow whatever feeding and medication routine you send us with. Boarding shouldn't mean a full reset of your dog's habits.",
        },
        {
          heading: 'Sharing a run',
          body:
            "Dogs from the same household can share a kennel run. They almost always settle in faster when they have a familiar friend along.",
        },
        {
          heading: 'Add-ons',
          body:
            "Add the playtime add-on for dedicated one-on-one time with a caretaker (running, fetch, or just hanging out) on top of the regular yard time every boarder gets. Grooming services can also be tacked onto a stay so your dog goes home freshly bathed.",
        },
      ],
      bringList: [
        "Your dog's regular food (we'll measure portions per your instructions)",
        "Medications with clear dosing notes",
        'Vaccination records (rabies, DHPP, Bordetella); bring or have your vet email ahead',
        'A favorite blanket or toy if it helps them settle',
        'Emergency vet contact info',
      ],
      faqs: [
        {
          question: 'How early should I book?',
          answer:
            "Holidays and summer weekends fill up first. Two to four weeks ahead is a safe bet. A few days' notice is usually fine outside of peak times.",
        },
        {
          question: 'What if my dog is on medication?',
          answer:
            "We're happy to administer medications. Bring clear written instructions and the meds in their original containers.",
        },
        {
          question: "What's the cancellation policy?",
          answer:
            "Just give us as much notice as you can. We know plans change, and we'll work with you.",
        },
      ],
    },
  },
  {
    slug: 'grooming',
    title: 'Dog Grooming',
    shortTitle: 'Grooming',
    href: '/services/grooming/',
    image: '/images/service-grooming.avif',
    imageAlt: 'Dog being bathed and groomed',
    blurb:
      'Keep your dog feeling fresh with bath, de-shedding treatment, and nail trimming. Book on its own or as an add-on to a boarding stay.',
    detail: {
      intro:
        "Grooming at River Ridge is straightforward and gentle: bath, de-shedding, nails. We don't do show grooming or breed-specific styling; we keep your dog clean, comfortable, and looking like themselves.",
      sections: [
        {
          heading: 'Services we offer',
          body:
            'A full bath with a coat-appropriate shampoo, towel and low-heat dry, ear check, de-shedding treatment if your dog needs it, and a nail trim. We can do any combination; pick what makes sense for your dog.',
        },
        {
          heading: 'When to schedule',
          body:
            "If your dog is also boarding with us, the easiest thing is to book grooming for the day before pickup so they go home freshly bathed. Standalone grooming appointments take about an hour to ninety minutes depending on coat type.",
        },
        {
          heading: 'For anxious dogs',
          body:
            "If your dog is nervous around grooming, just tell us. We'll go slower, take breaks, and skip anything that's pushing them past their comfort zone. Your dog should leave feeling better than when they arrived.",
        },
      ],
      faqs: [
        {
          question: 'Do you do haircuts or styling?',
          answer:
            "No, we keep grooming simple: bath, de-shedding, nails. For breed-specific cuts you'll want a dedicated groomer.",
        },
        {
          question: 'How often should my dog be groomed?',
          answer:
            "It depends on coat type and how much time they spend outside. Every four to eight weeks is typical for a regular bath, more often during shedding seasons.",
        },
        {
          question: 'Can I drop off and pick up the same day?',
          answer:
            'Yes, most grooming appointments take about an hour to ninety minutes. We can schedule around your day.',
        },
      ],
    },
  },
  {
    slug: 'playtime',
    title: 'Playtime add-on',
    shortTitle: 'Playtime',
    href: '/services/playtime/',
    image: '/images/service-playtime.avif',
    imageAlt: 'Dog playing fetch with a person',
    blurb:
      "One-on-one play sessions during a boarding stay. A caretaker spends dedicated time with your dog (running, fetching, or just hanging out) on top of the regular yard time.",
    detail: {
      intro:
        "The playtime add-on is dedicated one-on-one time with your dog during a boarding stay. Every boarder already gets supervised yard time and attention throughout the day; playtime is one caretaker, focused on your dog, for a set block of time.",
      sections: [
        {
          heading: 'What it looks like',
          body:
            "Whatever your dog enjoys. High-energy dogs get fetch, tug, or a run around the yard. Older dogs get a slower-paced walk and lots of pets. Some dogs just want to nap next to a person. The caretaker reads your dog and goes from there.",
        },
        {
          heading: 'Who it helps',
          body:
            "Boarding is a big change in routine. Some dogs settle in fine on their own. Others, especially those used to a lot of attention at home, do better with the extra one-on-one time. If your dog is high-energy, anxious in new places, or used to plenty of interaction, playtime smooths the transition.",
        },
        {
          heading: 'How to add it',
          body:
            "Mention it when you send your inquiry. Playtime can be added to a single day or every day of the stay. The caretaker schedules sessions around your dog's natural energy times, so a morning dog gets a morning session.",
        },
      ],
      faqs: [
        {
          question: 'Can I book playtime without boarding?',
          answer:
            "No, playtime is an add-on to a boarding stay. For something else (a walk, drop-in care), give us a call and we can talk about it.",
        },
        {
          question: 'How long is a session?',
          answer:
            "Usually 20 to 30 minutes, but we follow your dog's lead, not a stopwatch. If they're done, we're done; if they want more, we can do more.",
        },
        {
          question: 'Can I add playtime mid-stay?',
          answer:
            "Yes. Just call or send a message during the stay and we'll add it.",
        },
      ],
    },
  },
];

export const serviceBySlug = (slug: Service['slug']) =>
  services.find((s) => s.slug === slug);
