import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="reveal">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-signal-500/70" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-signal-400 uppercase">
                CONTACT
              </span>
            </div>
            <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-deep-950 sm:text-4xl">
              聊聊你的项目
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-deep-700">
              无论是安防升级、系统集成还是小程序定制，
              把需求告诉我们，我们会给出可落地的方案与报价。
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${company.email}?subject=业务咨询`}
                className="group flex items-center gap-4 rounded-xl border border-ink-700 bg-ink-900 px-5 py-4 transition-all hover:border-signal-500/40 hover:bg-signal-500/8"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-500/12">
                  <Mail className="h-[18px] w-[18px] text-signal-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] tracking-wide text-deep-600">邮箱</div>
                  <div className="truncate text-[14.5px] font-medium text-deep-950">
                    {company.email}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-deep-600 transition-all group-hover:text-signal-400" />
              </a>

              <a
                href={company.phoneHref}
                className="group flex items-center gap-4 rounded-xl border border-ink-700 bg-ink-900 px-5 py-4 transition-all hover:border-signal-500/40 hover:bg-signal-500/8"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-500/12">
                  <Phone className="h-[18px] w-[18px] text-signal-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] tracking-wide text-deep-600">电话</div>
                  <div className="text-[14.5px] font-medium text-deep-950">
                    {company.phone}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-deep-600 transition-all group-hover:text-signal-400" />
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-ink-700 bg-ink-900 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-500/12">
                  <MapPin className="h-[18px] w-[18px] text-signal-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] tracking-wide text-deep-600">地址</div>
                  <div className="text-[14.5px] font-medium text-deep-950">
                    {company.address}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-deep-600">
                    {company.addressEn}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual panel */}
          <div className="reveal relative">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-ink-700">
              <Image
                src="/images/lab-team.jpg"
                alt="风响树科技技术团队工作现场"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="glass rounded-2xl border border-ink-700 p-6">
                <div className="font-mono text-[10.5px] tracking-[0.3em] text-signal-400 uppercase">
                  Let&apos;s build together
                </div>
                <p className="mt-3 text-[17px] leading-relaxed font-medium text-deep-950">
                  一次沟通，一个可行方案。
                  <br />
                  风响树科技期待与你合作。
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
