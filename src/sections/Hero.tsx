import Image from "next/image";
import {
  ArrowRight,
  Blocks,
  ChevronDown,
  Code2,
  Headset,
  PlayCircle,
} from "lucide-react";
import { company, metrics } from "@/data/site";

const positioning = [
  { icon: Code2, label: "软件定制开发" },
  { icon: Blocks, label: "系统集成" },
  { icon: Headset, label: "技术服务外包" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-signal-400/22 blur-[130px]" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-signal-300/25 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal is-visible">
          <div className="flex flex-wrap items-center gap-2">
            {positioning.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-signal-500/30 bg-signal-500/10 px-3.5 py-1.5"
              >
                <Icon className="h-3.5 w-3.5 text-signal-400" />
                <span className="text-[12px] font-medium tracking-wide text-signal-400">
                  {label}
                </span>
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl leading-[1.12] font-bold tracking-tight text-deep-950 sm:text-5xl lg:text-[3.4rem]">
            以技术立业
            <br className="hidden sm:block" />
            <span className="text-gradient">用科技守护</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-deep-700 sm:text-[17px]">
            {company.introShort}围绕平安城市、小区安防、酒店安防、人脸识别、
            无人值守地磅与小程序定制，提供六大解决方案落地。
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-signal-500 px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-signal-400 hover:shadow-[0_0_34px_-8px_rgba(46,144,255,0.75)]"
            >
              获取方案咨询
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-600 bg-ink-900 px-6 py-3.5 text-[15px] font-medium text-deep-700 transition-all hover:border-signal-500/50 hover:bg-ink-800 hover:text-deep-950"
            >
              <PlayCircle className="h-4 w-4 text-signal-400" />
              浏览解决方案
            </a>
          </div>
        </div>

        {/* Visual: control-room photo with a scanning overlay */}
        <div className="reveal relative is-visible">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink-700 shadow-[0_30px_70px_-32px_rgba(15,40,80,0.28)]">
            <Image
              src="/images/hero-control-room.jpg"
              alt="风响树科技安防监控指挥中心大屏"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
              priority
              quality={88}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 animate-[fxs-scan_7s_linear_infinite] bg-gradient-to-b from-transparent via-signal-400/10 to-transparent" />

            {/* live badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-md border border-ink-700 bg-ink-900/85 px-2.5 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
              </span>
              <span className="font-mono text-[10px] tracking-widest text-deep-800 uppercase">
                System Online
              </span>
            </div>
          </div>

          {/* floating stat card */}
          <div className="glass absolute -bottom-7 -left-4 hidden w-56 rounded-xl border border-ink-700 p-4 shadow-2xl sm:block">
            <div className="font-mono text-[10px] tracking-[0.25em] text-deep-700 uppercase">
              Founded
            </div>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-deep-950">{company.founded}</span>
              <span className="text-xs text-signal-400">Shenzhen</span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-ink-800">
              <div className="h-full w-2/3 rounded-full bg-signal-500" />
            </div>
          </div>
        </div>
      </div>

      {/* metrics strip */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-700 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m) => (
            <div key={m.label} className="px-5 py-6 sm:px-6 sm:py-7">
              <div className="text-3xl font-bold tracking-tight text-deep-950 sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-1.5 text-[13px] font-medium text-deep-700">
                {m.label}
              </div>
              {m.hint && (
                <div className="mt-1 text-[11px] text-deep-600">{m.hint}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="#about"
          aria-label="向下滚动"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-deep-700 transition-colors hover:border-signal-500/50 hover:text-signal-400"
        >
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
