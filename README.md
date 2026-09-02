# ghanithan.com

Personal site. Next.js, statically exported, deployed to GitHub Pages.

```sh
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
npm run preview      # serve ./out — catches export-only breakage that dev hides
```

## Layout

```
app/                 routes — /, /resume, /reading, /about
components/          SignalTrace is the one client component
lib/career.ts        roles, skills and projects; the résumé and the trace share it
public/              CNAME, .nojekyll, résumé PDF, legacy redirect stubs
```

## Notes

- `public/.nojekyll` is required. Without it GitHub Pages runs Jekyll over the
  output and discards `_next/`, because it ignores underscore-prefixed directories.
- `output: 'export'` means `redirects()` in `next.config.mjs` does nothing — it needs
  a server. Legacy URLs are preserved as literal meta-refresh files under `public/`.
- The blog is a **separate repo** (`ghanithan/blog`, Jekyll) served at `/blog/`. So are
  `/plnnr/`, `/keygaurdian/`, `/mp3player/`, `/System-Designs/` and `/guessing_game/`.
  Nothing here touches them.
- Cloudflare fronts the domain, so a deploy may need a cache purge to show up.
