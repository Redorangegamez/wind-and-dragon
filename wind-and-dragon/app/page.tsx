import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SocialGrid } from "@/components/social-grid";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cute Mahjong Merch Made for Players",
  description: "Playful apparel and accessories inspired by riichi mahjong.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="tile-grid absolute inset-x-0 bottom-0 h-1/2 opacity-60" />
        <div className="shell relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">East · South · West · North</p>
            <h1 className="mt-4 font-serif text-[3.35rem] leading-[0.9] tracking-[-0.065em] text-ink sm:text-7xl lg:text-[5.2rem]">
              Cute Mahjong Merch <span className="text-coral">Made for Players.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-7 text-ink/70 sm:text-xl sm:leading-8">
              Playful apparel and accessories inspired by riichi mahjong.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-coral" href="/shop">
                Shop Now
                <ArrowRightIcon className="size-4" />
              </Link>
              <Link className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink/5" href="/about">
                Our story
              </Link>
            </div>
            <p className="mt-8 text-sm text-ink/55">For players, observers, and forever-one-more-hand people.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[35rem] lg:max-w-none">
            <div className="absolute -left-3 top-10 hidden rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-sm sm:block lg:-left-8">Made for players</div>
            <div className="relative aspect-[6/7] overflow-hidden rounded-[2rem] border border-ink/10 bg-sand soft-shadow sm:rounded-[2.5rem]">
              <Image alt="Placeholder artwork for Wind and Dragon mahjong merchandise" className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 52vw" src={siteConfig.images.hero} />
            </div>
            <div className="absolute -bottom-5 -right-1 hidden rounded-2xl border border-ink/10 bg-cream px-4 py-3 shadow-lg sm:block lg:-right-7">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-coral">Table talk</p>
              <p className="mt-1 font-serif text-lg tracking-[-0.04em]">Call it cute.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <SectionHeading eyebrow="Fresh from the table" title="Featured Products" description="A small collection of things we’d want within reach between hands." />
        <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.name} product={product} />)}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand/60">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-forest sm:rounded-[2.25rem] lg:order-1">
            <Image alt="Placeholder illustration of a riichi mahjong table" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src={siteConfig.images.aboutTable} />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Good games, good company" title="About Wind & Dragon" description="Wind & Dragon is a playful mahjong lifestyle brand inspired by the joy of riichi. We're creating apparel, accessories, and designs for players who want to bring a little more mahjong into everyday life." />
            <Link className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral" href="/about">
              Our Story
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="From the feed" title="Follow the Tiles" description="A little table joy, design process, and whatever we’re carrying to game night." />
          <a className="inline-flex w-fit items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink" href={siteConfig.instagram.url} rel="noreferrer" target="_blank">
            Follow {siteConfig.instagram.handle}
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
        <div className="mt-10">
          <SocialGrid />
        </div>
      </section>
    </>
  );
}
