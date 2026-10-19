import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { solutions } from "@/data/site";

export default function Solutions() {
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <section id="solutions" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-500/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="SOLUTIONS"
          title="六大解决方案，覆盖核心业务场景"
          description="从城市级安防到无人值守作业，从硬件选型到软件交付，一套团队全部搞定。"
        />

        <div className="reveal mt-12 grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* selector */}
          <div className="flex flex-wrap gap-2.5 lg:flex-col">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              const on = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                    on
                      ? "border-signal-500/50 bg-signal-500/12"
                      : "border-ink-700 bg-ink-900 hover:border-signal-400 hover:bg-ink-850"
                  }`}
                >
                  <Icon
                    className={`h-[18px] w-[18px] shrink-0 transition-colors ${
                      on ? "text-signal-400" : "text-deep-600 group-hover:text-deep-700"
                    }`}
                  />
                  <span className="flex-1">
                    <span
                      className={`block text-[14.5px] font-medium ${
                        on ? "text-deep-950" : "text-deep-700"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="mt-0.5 block font-mono text-[9.5px] tracking-[0.2em] text-deep-600 uppercase">
                      {s.subtitle}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* detail panel */}
          <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-850">
            <div className="grid md:grid-cols-2">
              <div className="relative order-1 min-h-[220px] overflow-hidden md:order-none md:min-h-[340px]">
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(min-width: 768px) 590px, 100vw"
                  className="animate-[fxs-fade_0.5s_ease] object-cover"
                  quality={82}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="order-none p-6 sm:p-8 md:order-none">
                <div className="flex items-center gap-2.5">
                  <current.icon className="h-4 w-4 text-signal-400" />
                  <span className="font-mono text-[10.5px] tracking-[0.28em] text-signal-400 uppercase">
                    {current.subtitle}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-deep-950">
                  {current.title}
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-relaxed text-deep-700">
                  {current.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {current.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-[13.5px] text-deep-700"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-signal-500/18">
                        <Check className="h-2.5 w-2.5 text-signal-400" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
