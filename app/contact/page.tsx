import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with River Ridge Pet Retreat in Dunlap, TN to book boarding, grooming, or playtime for your dog.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact River Ridge Pet Retreat',
    description:
      'Get in touch to book boarding, grooming, or playtime for your dog at River Ridge Pet Retreat in Dunlap, TN.',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
