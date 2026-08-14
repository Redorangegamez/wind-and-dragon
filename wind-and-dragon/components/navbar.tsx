"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site";
import { BrandMark } from "./brand-mark";
import { CloseIcon, MenuIcon } from "./icons";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="relative z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="shell flex h-[4.75rem] items-center justify-between gap-6">
        <Link
          aria-label="Wind and Dragon home"
          className="group flex items-center gap-2.5 text-ink"
          href="/"
        >
          <BrandMark className="transition-transform duration-200 group-hover:-rotate-6" />
          <span className="font-serif text-xl leading-none tracking-[-0.045em]">Wind &amp; Dragon</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? "bg-ink text-cream" : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-cream md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-ink/10 bg-cream transition-[max-height] duration-300 md:hidden ${
          isOpen ? "max-h-80" : "max-h-0 border-b-0"
        }`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation" className="shell flex flex-col py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between border-b border-ink/10 py-4 text-lg font-medium transition last:border-0 ${
                  isActive ? "text-coral" : "text-ink hover:text-coral"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span aria-hidden="true" className="text-sm">↗</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
