import Image from "next/image";
import { siteConfig } from "@/lib/site";
import type { Product } from "@/lib/products";
import { ArrowUpRightIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-sand">
        <Image
          alt={product.alt}
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.035]"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          src={product.image}
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">{product.name}</h3>
          <p className="shrink-0 font-medium text-ink">{product.price}</p>
        </div>
        <p className="mt-2 max-w-xs text-sm leading-6 text-ink/65">{product.description}</p>
        <a
          className="mt-5 inline-flex w-fit items-center gap-1.5 border-b border-ink pb-1 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
          href={siteConfig.etsyUrl}
          rel="noreferrer"
          target="_blank"
        >
          Shop on Etsy
          <ArrowUpRightIcon className="size-3.5" />
        </a>
      </div>
    </article>
  );
}
