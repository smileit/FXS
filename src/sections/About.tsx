import Image from "next/image";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { advantages, company } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="ABOUT US"
              title="十年专注，把复杂的技术做简单"
              description="我们不只是一个技术团队，更是一群愿意蹲在现场、把每一个细节做到可靠的人。"
            />
            <div className="reveal mt-8 space-y-5 text-[15px] leading-relaxed text-deep-700">
              <p>{company.intro}</p>
              <p>
                我们坚持将最前沿的科技成果转化为推动客户业务发展的动力，并持续投入研发，
                拥有一系列自主知识产权的软件产品与专利技术。
              </p>
            </div>

            <ul className="reveal mt-9 grid gap-3.5 sm:grid-cols-2">
              {advantages.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-ink-700 bg-ink-900 px-4 py-3.5"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
                  <span className="text-[13.5px] leading-relaxed text-deep-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: layered imagery */}
          <div className="reveal relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-ink-700">
              <Image
                src="/images/about-office.jpg"
                alt="风响树科技深圳办公环境"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5">
                <div className="flex items-start gap-3 rounded-xl glass border border-ink-700 p-4">
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                  <p className="text-[13px] leading-relaxed text-deep-700">
                    “技术领先、服务卓越”——我们以开放的心态迎接每一次挑战，
                    致力于成为国内外客户信赖的 IT 服务伙伴。
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 hidden h-28 w-28 rounded-2xl border border-signal-500/20 bg-signal-500/5 backdrop-blur lg:block" />
            <div className="absolute -right-5 -bottom-6 hidden h-24 w-24 rounded-2xl border border-signal-300/20 bg-signal-300/5 backdrop-blur lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
