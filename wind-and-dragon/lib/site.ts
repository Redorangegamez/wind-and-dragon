export const siteConfig = {
  name: "Wind & Dragon",
  description:
    "Playful apparel and accessories inspired by riichi mahjong.",
  etsyUrl: "https://www.etsy.com/",
  email: "hello@windanddragon.co",
  instagram: {
    handle: "@windanddragon",
    url: "https://www.instagram.com/windanddragon/",
  },
  tiktok: {
    handle: "@windanddragon",
    url: "https://www.tiktok.com/@windanddragon",
  },
  images: {
    hero: "/images/hero-placeholder.svg",
    aboutTable: "/images/about-table-placeholder.svg",
    aboutStudio: "/images/about-studio-placeholder.svg",
    social: [
      "/images/social-01-placeholder.svg",
      "/images/social-02-placeholder.svg",
      "/images/social-03-placeholder.svg",
      "/images/social-04-placeholder.svg",
      "/images/social-05-placeholder.svg",
      "/images/social-06-placeholder.svg",
    ],
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
] as const;
