import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site";
import { BrandMark } from "./brand-mark";
import { InstagramIcon, TikTokIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="shell grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.35fr_0.7fr_0.7fr] lg:gap-16">
        <div>
          <Link aria-label="Wind and Dragon home" className="inline-flex items-center gap-2.5" href="/">
            <BrandMark className="border-cream/40 bg-ink text-cream" />
            <span className="font-serif text-2xl tracking-[-0.045em]">Wind &amp; Dragon</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-cream/65">
            Playful pieces for people who would rather be playing mahjong.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/45">Explore</p>
          <nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-2.5">
            {navigation.map((item) => (
              <Link className="text-sm text-cream/75 transition hover:text-gold" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/45">Find us</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              aria-label="Follow Wind and Dragon on Instagram"
              className="grid size-9 place-items-center rounded-full border border-cream/25 text-cream transition hover:border-gold hover:bg-gold hover:text-ink"
              href={siteConfig.instagram.url}
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              aria-label="Follow Wind and Dragon on TikTok"
              className="grid size-9 place-items-center rounded-full border border-cream/25 text-cream transition hover:border-gold hover:bg-gold hover:text-ink"
              href={siteConfig.tiktok.url}
              rel="noreferrer"
              target="_blank"
            >
              <TikTokIcon className="size-4" />
            </a>
          </div>
          <a className="mt-5 inline-block text-sm text-cream/75 transition hover:text-gold" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-cream/15 py-5 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Wind &amp; Dragon</p>
        <p>A brand by Red Orange Strategies.</p>
      </div>
    </footer>
  );
}
