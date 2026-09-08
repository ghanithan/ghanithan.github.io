import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Stamp a public/ asset's URL with a hash of its own bytes, at build time.
 *
 * Cloudflare fronts this domain and caches assets for four hours, overriding
 * the max-age=0 Next sets on public/ files, so a visitor can be handed a stale
 * copy long after a deploy. That has already happened once with the résumé.
 * Social platforms are worse: Slack, LinkedIn and X hold a scraped og:image for
 * days. A URL that changes when the file changes sidesteps both, since there is
 * nothing stale left to serve under it.
 *
 * Falls back to the bare path if the file cannot be read, so a build never
 * fails over a cache optimisation.
 */
export function hashedAsset(publicPath: string): string {
  try {
    const bytes = readFileSync(join(process.cwd(), 'public', publicPath));
    const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 10);
    return `/${publicPath}?v=${hash}`;
  } catch {
    return `/${publicPath}`;
  }
}
