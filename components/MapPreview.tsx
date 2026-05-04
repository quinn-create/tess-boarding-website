import { ADDRESS, SITE_NAME } from '@/lib/site';

// Standard Google Maps iframe embed. No API key required for the basic
// `?q=...&output=embed` form. Built-in Google controls (zoom, "View larger
// map", "Directions") replace any custom overlay.
export default function MapPreview({ className = '' }: { className?: string }) {
  const query = encodeURIComponent(
    `${ADDRESS.streetAddress}, ${ADDRESS.addressLocality}, ${ADDRESS.addressRegion} ${ADDRESS.postalCode}`
  );

  return (
    <div className={`overflow-hidden rounded-2xl shadow-sm ${className}`}>
      <iframe
        src={`https://www.google.com/maps?q=${query}&output=embed`}
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
