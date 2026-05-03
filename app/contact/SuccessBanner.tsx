'use client';

import { useSearchParams } from 'next/navigation';

export default function SuccessBanner() {
  const searchParams = useSearchParams();
  if (searchParams.get('success') !== '1') return null;

  return (
    <div role="status" className="mb-6 rounded-2xl bg-sage/15 p-4 text-ink">
      <p className="font-semibold text-sage-dark">
        Thanks! Your inquiry was sent.
      </p>
      <p className="mt-1 text-ink/80">Tess will be in touch soon.</p>
    </div>
  );
}
