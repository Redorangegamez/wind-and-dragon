import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "A playful mahjong lifestyle brand made by people who actually play.",
};

export default function AboutPage() {
  return (
    <>
      <section className="tile-grid relative overflow-hidden border-b border-ink/10 bg-sand/45">
        <div className="shell relative py-20 sm:py-28 lg:py-32">
          <p className="eyebrow">A little more table joy</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.93] tracking-[-0.06em] text-ink sm:text-7xl lg:text-8xl">
            Made for people who would rather be <span className="text-coral">playing mahjong.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
            Wind &amp; Dragon started from a simple idea: mahjong deserves better merch.
          </p>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div className="max-w-md">
            <p className="eyebrow">The idea</p>
            <p className="mt-4 font-serif text-3xl leading-[1.05] tracking-[-0.045em] text-ink sm:text-4xl">
              A game we love, carried into the rest of life.
            </p>
          </div>
          <div className="max-w-2xl space-y-6 text-base leading-8 text-ink/72 sm:text-lg">
            <p>
              We&apos;re building a playful mahjong lifestyle brand inspired by the joy of riichi, the people we meet around the table, and the little moments that make the game unforgettable.
            </p>
            <p>
              From a lucky draw to a perfectly timed call, mahjong has a way of turning an ordinary evening into a story. Wind &amp; Dragon is for bringing some of that feeling with you—on a tee, a tote, a laptop, or wherever the day takes you.
            </p>
            <p>
              This is something made by people who actually play: for the regulars, the curious newcomers, and everyone already planning the next game.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 sm:py-16">
        <div className="shell relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[16/9] sm:rounded-[2.25rem]">
          <Image alt="Placeholder image for a Wind and Dragon mahjong table gathering" className="object-cover" fill priority sizes="(max-width: 1280px) 100vw, 76rem" src={siteConfig.images.aboutTable} />
        </div>
      </section>

      <section className="shell grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div className="relative aspect-[5/6] max-w-xl overflow-hidden rounded-[1.75rem] bg-sand sm:rounded-[2.25rem]">
          <Image alt="Placeholder image for Wind and Dragon studio and product photography" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src={siteConfig.images.aboutStudio} />
        </div>
        <div className="max-w-xl">
          <p className="eyebrow">Design notes</p>
          <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">Playful by design. Grounded in the game.</h2>
          <p className="mt-6 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            We pull from the patterns, calls, and small rituals that players know by heart—then keep the final pieces fresh, easygoing, and ready for everyday wear.
          </p>
          <Link className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-coral" href="/shop">
            See the collection
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
