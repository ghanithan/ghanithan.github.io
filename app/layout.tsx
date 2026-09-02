import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ghanithan.com'),
  title: {
    default: 'Ghanithan Subramani',
    template: '%s — Ghanithan Subramani',
  },
  description:
    'Principal engineer at OpsMx. Delivery and security tooling today, diesel engine ECUs and circuit boards before that, and three years underwriting insurance risk in between.',
  openGraph: {
    type: 'website',
    siteName: 'Ghanithan Subramani',
    url: 'https://www.ghanithan.com',
  },
  alternates: {
    types: { 'application/atom+xml': 'https://www.ghanithan.com/blog/feed.xml' },
  },
};

/* /blog/ and the project paths are separate repos on the same domain, so they
   are plain anchors — client-side routing would 404 against this app. */
const NAV = [
  { href: '/', label: 'Home', internal: true },
  { href: '/blog/', label: 'Writing', internal: false },
  { href: '/reading/', label: 'Reading', internal: true },
  { href: '/resume/', label: 'Résumé', internal: true },
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
            <a href="/" className="font-medium no-underline">
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
