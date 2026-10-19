type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

/**
 * FXS brand mark redrawn as SVG from the original raster logo: the wind-swept
 * tree glyph plus the 风响树 wordmark, recoloured into the site's tech blue so
 * it stays crisp at any size and no longer clashes with the palette.
 */
export default function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        role="img"
        aria-label="风响树科技标志"
      >
        <defs>
          <linearGradient id="fxsCrown" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b8cf0" />
            <stop offset="100%" stopColor="#0a56b4" />
          </linearGradient>
          <linearGradient id="fxsTrunk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5aa9f5" />
            <stop offset="100%" stopColor="#0f6fe0" />
          </linearGradient>
        </defs>

        {/* Canopy: rounded crown echoing the original silhouette */}
        <path
          d="M32 8c11 0 19 7 19 16 0 5-3 9-7 11 2 1 4 3 4 6 0 4-4 7-9 7-3 0-5-1-7-2-2 1-4 2-7 2-5 0-9-3-9-7 0-3 2-5 4-6-4-2-7-6-7-11C13 15 21 8 32 8Z"
          fill="url(#fxsCrown)"
        />
        {/* Wind sweep: the leaf motion implied by 风 */}
        <path
          d="M15 21c6-3 13-4 20-3"
          stroke="#5aa9f5"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M18 33c5-2 11-3 17-2"
          stroke="#5aa9f5"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Trunk */}
        <path
          d="M30 46h4v10a2 2 0 0 1-4 0V46Z"
          fill="url(#fxsTrunk)"
        />
        <path
          d="M32 50c-3 0-6-1-8-3"
          stroke="url(#fxsTrunk)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 52c3 0 6-1 8-3"
          stroke="url(#fxsTrunk)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Ground line anchoring the trunk */}
        <rect x="22" y="57" width="20" height="2.6" rx="1.3" fill="#0a56b4" />
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[17px] font-bold tracking-wide text-deep-950">
            风响树科技
          </span>
          <span className="mt-1 font-mono text-[10px] tracking-[0.28em] text-signal-500">
            FXS TECH
          </span>
        </span>
      )}
    </span>
  );
}
