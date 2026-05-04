import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#5D7A5A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FAF6EE"
        >
          <ellipse cx="14" cy="22" rx="6" ry="8" />
          <ellipse cx="50" cy="22" rx="6" ry="8" />
          <ellipse cx="24" cy="12" rx="5" ry="7" />
          <ellipse cx="40" cy="12" rx="5" ry="7" />
          <path d="M32 28c-9 0-16 7-16 15 0 6 5 10 10 10 3 0 4-2 6-2s3 2 6 2c5 0 10-4 10-10 0-8-7-15-16-15z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
