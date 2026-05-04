import Image from 'next/image';
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
  /** Override the aspect ratio (e.g. "16 / 10"). */
  aspectRatio?: string;
  /**
   * Render the cream "Image coming soon" placeholder instead of next/image.
   * Set true on call sites whose image hasn't been dropped into public/images/
   * yet. Drop the prop once the file exists.
   */
  placeholder?: boolean;
};

export default function SiteImage({
  src,
  alt,
  width,
  height,
  priority,
  className = '',
  rounded = 'rounded-2xl',
  placeholderLabel,
  aspectRatio,
  placeholder,
}: SiteImageProps) {
  if (placeholder) {
    return (
      <PlaceholderImage
        width={width}
        height={height}
        label={placeholderLabel ?? `Image coming soon — ${alt}`}
        className={className}
        rounded={rounded}
        aspectRatio={aspectRatio}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`${rounded} ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    />
  );
}
