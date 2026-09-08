import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { hashedAsset } from '@/lib/asset';
import './globals.css';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

/* Social platforms cache a scraped og:image for days, so this matters more
   here than anywhere else on the site. */
const OG_IMAGE = hashedAsset('og.png');

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ghanithan.com'),
  title: {
    default: 'Ghanithan Subramani',
    template: '%s | Ghanithan Subramani',
  },
  description:
    'Principal engineer at OpsMx. Architecture and security tooling today, diesel engine ECUs and circuit boards before that. Rust when the choice is mine.',
  openGraph: {
    type: 'website',
    siteName: 'Ghanithan Subramani',
    url: 'https://www.ghanithan.com',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'From the register level up.' }],
  },
  /* summary_large_image, not summary: a text-only card is a grey box. */
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
  alternates: {
    types: { 'application/atom+xml': 'https://www.ghanithan.com/blog/feed.xml' },
  },
};

/* /blog/ and the project paths are separate repos on the same domain, so they
   are plain anchors; client-side routing would 404 against this app. */
const NAV = [
  { href: '/', label: 'Home', internal: true },
  { href: '/blog/', label: 'Writing', internal: false },
  { href: '/reading/', label: 'Reading', internal: true },
  /* URL stays /resume/ so the conventional path still resolves. */
  { href: '/resume/', label: 'Work', internal: true },
  { href: '/about/', label: 'About', internal: true },
];

const ELSEWHERE = [
  { href: 'https://github.com/ghanithan', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ghanithan', label: 'LinkedIn' },
  { href: 'https://x.com/ghanithan', label: 'X' },
  { href: 'mailto:ghanithan@gmail.com', label: 'Email' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <header className="w-full max-w-3xl mx-auto px-5 pt-8 pb-4">
          <nav className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-sm">
            {/* The wordmark. Sized above body copy so it does not read as a
                fifth nav item, and well below the h1 so it does not compete. */}
            <a
              href="/"
              className="text-[17px] font-semibold tracking-tight no-underline"
            >
              Ghanithan Subramani
            </a>
            <span className="flex-1" />
            {NAV.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="no-underline hover:underline"
                style={{ color: 'var(--muted)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="w-full max-w-3xl mx-auto px-5 flex-1 pb-16">{children}</main>

        <footer
          className="w-full max-w-3xl mx-auto px-5 py-8 text-sm border-t"
          style={{ borderColor: 'var(--rule)', color: 'var(--muted)' }}
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {ELSEWHERE.map((item) => (
              <a key={item.href} href={item.href} className="no-underline hover:underline">
                {item.label}
              </a>
            ))}
            <a href="/blog/feed.xml" className="no-underline hover:underline">
              Feed
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
