import SectionHeading from "@/components/SectionHeading";
import { industries, partners } from "@/data/site";

export default function Industries() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="industries" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="INDUSTRIES"
          title="服务行业"
          description="不同的场景，需要不同的答案。我们把行业经验沉淀成可复用的方案能力。"
        />

        <div className="reveal mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="group flex items-center gap-4 bg-ink-800 px-6 py-7 transition-colors hover:bg-ink-700"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-deep-700 transition-all group-hover:border-signal-500/40 group-hover:bg-signal-500/10 group-hover:text-signal-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold text-deep-950">
                    {ind.name}
                  </h3>
                  <p className="mt-0.5 truncate text-[12.5px] text-deep-600">
                    {ind.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* partner marquee */}
      <div className="reveal relative mt-20 overflow-hidden border-y border-ink-700 bg-ink-950/60 py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="flex w-max animate-[fxs-marquee_28s_linear_infinite] items-center gap-14">
          {marqueeItems.map((p, i) => (
            <div key={`${p}-${i}`} className="flex shrink-0 items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-500/60" />
              <span className="text-[15px] font-medium tracking-wide whitespace-nowrap text-deep-700">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
