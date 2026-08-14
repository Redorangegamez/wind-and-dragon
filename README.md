# Wind & Dragon

  A playful, modern mahjong lifestyle brand website for apparel, accessories, and designs inspired by riichi mahjong.

  ## Pages

  - Home
  - About
  - Shop
  - Contact

  The Shop page currently sends customers to Etsy. No checkout, cart, accounts, or backend are included.

  ## Tech Stack

  - Next.js
  - TypeScript
  - Tailwind CSS v4
  - Responsive design with local placeholder SVG artwork

  ## Run Locally

  ```bash
  npm install
  npm run dev

  Open http://localhost:3000 (http://localhost:3000).

  ## Commands

  npm run dev
  npm run lint
  npm run build

  ## Editing Brand Details

  Update site-wide details in:

  lib/site.ts

  This includes:

  - Etsy URL
  - Contact email
  - Instagram URL and handle
  - TikTok URL and handle
  - Hero, lifestyle, and social image paths
  - Navigation links

  ## Editing Products

  Update product names, prices, descriptions, and image paths in:

  lib/products.ts

  All product buttons currently link to the Etsy URL configured in lib/site.ts.

  ## Replacing Placeholder Images

  Placeholder SVG files are stored in:

  public/images/

  To replace an image:

  1. Add your new image to public/images/
  2. Update its path in lib/site.ts or lib/products.ts
  3. Keep the descriptive alt text current

  This makes it easy to swap in real product photography, tournament photos, brand illustrations, or lifestyle images later.

  ## Deployment

  This project is ready to deploy on Vercel.

  1. Push this repository to GitHub.
  2. Import it into Vercel.
  3. Vercel will detect Next.js automatically.
  4. Deploy.

  ## Notes

  - The design uses Tailwind CSS v4.
  - @theme inline in app/globals.css is a valid Tailwind directive.
  - If IntelliJ flags it as an unknown at-rule, add:

  /*noinspection CssInvalidAtRule*/

  directly above the @theme inline line.

  ———

  © Wind & Dragon
  A brand by Red Orange Strategies.
