export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
};

// Replace these image paths and placeholder prices with the live product details
// whenever new merchandise is ready to launch.
export const products: Product[] = [
  {
    name: "Riichi Mahjong T-Shirt",
    description: "A soft everyday tee for tile-callers and table regulars.",
    price: "$32.00",
    image: "/images/product-tshirt-placeholder.svg",
    alt: "Placeholder illustration for the Riichi Mahjong T-Shirt",
  },
  {
    name: "Wind & Dragon Hoodie",
    description: "A cozy layer for late-night hands and weekend games.",
    price: "$58.00",
    image: "/images/product-hoodie-placeholder.svg",
    alt: "Placeholder illustration for the Wind and Dragon Hoodie",
  },
  {
    name: "Mahjong Sticker Pack",
    description: "A cheerful set of tile-inspired stickers for your things.",
    price: "$12.00",
    image: "/images/product-stickers-placeholder.svg",
    alt: "Placeholder illustration for the Mahjong Sticker Pack",
  },
  {
    name: "Tile Tote Bag",
    description: "An easy carry-all for market days and mahjong nights.",
    price: "$28.00",
    image: "/images/product-tote-placeholder.svg",
    alt: "Placeholder illustration for the Tile Tote Bag",
  },
];
