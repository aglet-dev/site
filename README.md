# aglet-site

Marketing site for **Aglet** — [aglet.dev](https://aglet.dev).

Built with [Astro](https://astro.build) (v7). Static output, hosted on Cloudflare Pages.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # → dist/ (static)
npm run preview  # serve the built dist/
```

## Structure

- `src/pages/index.astro` — landing (EN + 中文).
- `src/layouts/Base.astro` — shared head/meta/OG + site CSS.
- `public/privacy/` — privacy policy (served verbatim at `/privacy/`).

## Deploy

Cloudflare Pages, auto-deploy on push to `main`:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- Custom domain `aglet.dev` (CNAME auto-created by Cloudflare).

## License

MIT — see [LICENSE](./LICENSE).
