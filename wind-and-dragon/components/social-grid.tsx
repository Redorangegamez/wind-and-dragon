import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function SocialGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
      {siteConfig.images.social.map((image, index) => (
        <a
          aria-label={`Open Wind and Dragon's Instagram post ${index + 1}`}
          className="group relative aspect-square overflow-hidden rounded-[1.2rem] bg-sand"
          href={siteConfig.instagram.url}
          key={image}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt={`Placeholder social image ${index + 1} for Wind and Dragon`}
            className="object-cover transition duration-500 group-hover:scale-[1.055]"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            src={image}
          />
          <span className="absolute inset-0 grid place-items-center bg-ink/0 text-sm font-semibold text-cream opacity-0 transition duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
            Follow along ↗
          </span>
        </a>
      ))}
    </div>
  );
}
