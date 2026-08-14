import type { Metadata } from "next";
import { InstagramIcon, MailIcon, TikTokIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Wind & Dragon.",
};

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: MailIcon,
  },
  {
    label: "Instagram",
    value: siteConfig.instagram.handle,
    href: siteConfig.instagram.url,
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    value: siteConfig.tiktok.handle,
    href: siteConfig.tiktok.url,
    icon: TikTokIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="tile-grid border-b border-ink/10 bg-sand/45">
        <div className="shell py-20 sm:py-28 lg:py-32">
          <p className="eyebrow">Let&apos;s talk tiles</p>
          <h1 className="mt-4 font-serif text-6xl leading-[0.9] tracking-[-0.06em] text-ink sm:text-8xl">Say Hello</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70 sm:text-xl">Questions, collaborations, stockist dreams, or just a great hand you have to tell someone about—we&apos;d love to hear it.</p>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Find us around the table</p>
            <h2 className="mt-4 max-w-sm font-serif text-4xl leading-[1] tracking-[-0.05em] text-ink sm:text-5xl">The easiest way to reach us is right here.</h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-ink/65">We&apos;re a small team, but we read every message. Please allow a few business days for a reply.</p>
          </div>
          <div className="grid gap-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a className="group flex items-center justify-between gap-5 rounded-[1.35rem] border border-ink/10 bg-white/60 p-5 transition hover:-translate-y-0.5 hover:border-ink/25 hover:bg-white sm:p-6" href={href} key={label} rel={label === "Email" ? undefined : "noreferrer"} target={label === "Email" ? undefined : "_blank"}>
                <span className="flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-full bg-sand text-ink transition group-hover:bg-gold">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-coral">{label}</span>
                    <span className="mt-1 block font-medium text-ink">{value}</span>
                  </span>
                </span>
                <span aria-hidden="true" className="text-xl text-ink/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="shell py-14 text-center sm:py-20">
          <p className="font-serif text-3xl leading-[1.05] tracking-[-0.045em] sm:text-5xl">May your draws be kind and your waits be good.</p>
          <p className="mt-4 text-sm text-cream/65">See you at the next table.</p>
        </div>
      </section>
    </>
  );
}
