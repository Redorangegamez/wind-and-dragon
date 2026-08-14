import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse the latest Wind & Dragon mahjong-inspired apparel, accessories, and designs.",
};

export default function ShopPage() {
  return (
    <>
      <section className="tile-grid border-b border-ink/10 bg-sand/45">
        <div className="shell py-20 text-center sm:py-28 lg:py-32">
          <p className="eyebrow">Find your lucky charm</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.93] tracking-[-0.06em] text-ink sm:text-7xl">Shop Wind &amp; Dragon</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-ink/70 sm:text-xl">Browse our latest mahjong-inspired apparel, accessories, and designs.</p>
          <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink" href={siteConfig.etsyUrl} rel="noreferrer" target="_blank">
            Shop on Etsy
            <ArrowUpRightIcon className="size-4" />
          </a>
          <p className="mt-4 text-xs text-ink/50">You&apos;ll be taken to our Etsy shop.</p>
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The collection</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.05em] text-ink sm:text-5xl">Made for game night and every day.</h2>
          </div>
          <p className="hidden text-sm text-ink/55 sm:block">{products.length} placeholder products</p>
        </div>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.name} product={product} />)}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-sand/50">
        <div className="shell flex flex-col gap-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:py-16">
          <div>
            <p className="font-serif text-3xl tracking-[-0.045em] text-ink">More good things are on their way.</p>
            <p className="mt-2 text-sm leading-6 text-ink/65">New pieces and small runs will land in our Etsy shop first.</p>
          </div>
          <a className="inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral" href={siteConfig.etsyUrl} rel="noreferrer" target="_blank">
            Visit Etsy
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
