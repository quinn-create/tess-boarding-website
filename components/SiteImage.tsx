import PlaceholderImage from './PlaceholderImage';

type SiteImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  rounded?: string;
  placeholderLabel?: string;
};

// During development the real PNGs aren't dropped in yet. Render a placeholder
// div at the same aspect ratio so the layout is preserved.
export default function SiteImage({
  alt,
  width,
  height,
  className = '',
  rounded = 'rounded-2xl',
  placeholderLabel,
}: SiteImageProps) {
  return (
    <PlaceholderImage
      width={width}
      height={height}
      label={placeholderLabel ?? `Image coming soon — ${alt}`}
      className={className}
      rounded={rounded}
    />
  );
}
