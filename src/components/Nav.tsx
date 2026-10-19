import { useEffect, useState } from "react";
import { Mail, Menu as MenuIcon, X } from "lucide-react";
import Logo from "./Logo";
import { company, navItems } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-ink-700 py-2.5 shadow-[0_8px_30px_-14px_rgba(15,40,80,0.16)]"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label={company.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm text-deep-700 transition-colors hover:bg-ink-800 hover:text-deep-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${company.email}?subject=业务咨询`}
            className="hidden items-center gap-2 rounded-lg bg-signal-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-signal-400 hover:shadow-[0_0_24px_-6px_rgba(46,144,255,0.7)] sm:inline-flex"
          >
            <Mail className="h-4 w-4" />
            咨询合作
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-deep-700 transition-colors hover:bg-ink-800 lg:hidden"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mt-2 border-y border-ink-700 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-700 py-3.5 text-[15px] text-deep-700 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${company.email}?subject=业务咨询`}
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-lg bg-signal-500 px-4 py-3 text-sm font-medium text-white"
            >
              <Mail className="h-4 w-4" />
              咨询合作
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
