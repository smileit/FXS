type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-signal-500/70" />
        <span className="font-mono text-[11px] tracking-[0.3em] text-signal-400 uppercase">
          {eyebrow}
        </span>
      </div>
      <h2
        className="mt-4 text-3xl leading-tight font-bold tracking-tight text-deep-950 sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 text-[15px] leading-relaxed text-deep-700"
        >
          {description}
        </p>
      )}
    </div>
  );
}
