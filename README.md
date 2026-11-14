# Nirmitha Balasuriya – Portfolio

Built on the open-source [Magic UI portfolio template](https://github.com/dillionverma/portfolio) by Dillion Verma (MIT licence, see LICENSE). Same design, components and animations; only the content is changed.

## Run it

```bash
pnpm install     # or: npm install
pnpm dev         # open http://localhost:3000
```

## Edit your content

Everything personal is in **`src/data/resume.tsx`**. Text in `[square brackets]` is a placeholder.

- **Profile photo:** save it as `public/me.png` (square).
- **Company / school logos:** put them in `public/` and set `logoUrl: "/logo.png"`.
- **Project screenshots:** put them in `public/projects/` and set `image: "/projects/pulse.png"`, or set `video` to an .mp4 URL. Add links like:
  ```tsx
  links: [{ type: "Website", href: "https://...", icon: <Icons.globe className="size-3" /> }]
  ```
- **Social links in the dock:** `contact.social` (GitHub is commented out, add your username).
- **Domain:** change `url` once deployed.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). No settings needed.
# portfolio
