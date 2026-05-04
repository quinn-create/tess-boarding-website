type PlaceholderImageProps = {
  width: number;
  height: number;
  label?: string;
  className?: string;
  rounded?: string;
  /** Override the inline aspect-ratio (e.g. "16 / 10"). Default: width / height. */
  aspectRatio?: string;
};

export default function PlaceholderImage({
  width,
  height,
  label = 'Image coming soon',
  className = '',
  rounded = 'rounded-2xl',
  aspectRatio,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden border border-bark/15 bg-cream ${rounded} ${className}`}
      style={{ aspectRatio: aspectRatio ?? `${width} / ${height}` }}
      role="img"
      aria-label={label}
    >
      <span className="px-4 text-center text-sm font-semibold text-bark/80">
        {label}
      </span>
    </div>
  );
}
