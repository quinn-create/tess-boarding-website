import { SITE_NAME } from '@/lib/site';

// Google Maps embed pinned to the River Ridge Pet Retreat Place record so
// clicking the pin shows the proper place card (rather than "place could
// not load" from the generic ?q= form). URL pulled from Google Maps →
// Share → Embed a map.
export default function MapPreview({ className = '' }: { className?: string }) {
  const src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.4211047038716!2d-85.34050122396!3d35.432266972668536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860ebcb5b983fb1%3A0x21a972a6c6f058e2!2s1315%20River%20Ridge%20Dr%2C%20Dunlap%2C%20TN%2037327!5e1!3m2!1sen!2sus!4v1777862684217!5m2!1sen!2sus';

  return (
    <div className={`overflow-hidden rounded-2xl shadow-sm ${className}`}>
      <iframe
        src={src}
        title={`Map to ${SITE_NAME}`}
        className="block h-96 w-full sm:h-[28rem] lg:h-[34rem]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
