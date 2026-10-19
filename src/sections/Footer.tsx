import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { company, navItems } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-deep-600">
              {company.tagline}。为客户提供全面的软硬件服务与定制化解决方案。
            </p>
          </div>

          <nav>
            <h3 className="text-[13px] font-semibold tracking-wide text-deep-950">
              快速导航
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-deep-600 transition-colors hover:text-signal-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[13px] font-semibold tracking-wide text-deep-950">
              联系方式
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-2.5 text-[13.5px] text-deep-600 transition-colors hover:text-signal-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-start gap-2.5 text-[13.5px] text-deep-600 transition-colors hover:text-signal-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[13.5px] text-deep-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-700 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-deep-700">
            © {year} {company.name}　保留所有权利
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-deep-700 uppercase">
            Hikvision Strategic Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
