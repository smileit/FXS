import SectionHeading from "@/components/SectionHeading";
import { capabilities, processSteps } from "@/data/site";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="CAPABILITIES"
          title="三大核心能力，一个团队交付"
          description="软件、系统、AI 三条线并行，让项目的技术承诺真正落到现场。"
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-850/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/35 hover:shadow-[0_24px_60px_-28px_rgba(46,144,255,0.45)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-signal-500/8 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0">
                    <img
                      src={c.image}
                      alt=""
                      aria-hidden="true"
                      className="h-14 w-14 rounded-xl object-cover opacity-55 mix-blend-luminosity transition-opacity group-hover:opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-ink-950/45">
                      <Icon className="h-6 w-6 text-signal-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-deep-950">{c.title}</h3>
                </div>
                <p className="mt-5 text-[14px] leading-relaxed text-deep-700">
                  {c.text}
                </p>
              </article>
            );
          })}
        </div>

        {/* process */}
        <div className="reveal mt-20">
          <h3 className="text-center text-xl font-bold text-deep-950">
            标准化的四步交付流程
          </h3>
          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.step} className="bg-ink-950 px-6 py-8">
                <div className="font-mono text-3xl font-medium text-signal-500/45">
                  {p.step}
                </div>
                <h4 className="mt-3 text-[15px] font-semibold text-deep-950">
                  {p.title}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-deep-700">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
