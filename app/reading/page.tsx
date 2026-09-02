import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reading',
  description: 'Writing by other people that was worth the time.',
};

/* Carried over from the old /fresh/ redirect stubs. */
const READING = [
  {
    title: 'Why Discord is switching from Go to Rust',
    source: 'Discord',
    href: 'https://discord.com/blog/why-discord-is-switching-from-go-to-rust',
    note: 'The tail-latency garbage collection story, told with the graphs to back it.',
  },
  {
    title: 'Using Rust to scale Elixir for 11 million concurrent users',
    source: 'Discord',
    href: 'https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users',
    note: 'Rust as a NIF under the BEAM, rather than Rust instead of it.',
  },
];

export default function Reading() {
  return (
    <div className="pt-6">
      <header className="pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Reading</h1>
        <p className="mt-3 text-[15px] max-w-2xl" style={{ color: 'var(--muted)' }}>
          Writing by other people that was worth the time. Mine is on{' '}
          <a href="/blog/">the blog</a>.
        </p>
      </header>

      <ul className="list-none p-0 m-0">
        {READING.map((item) => (
          <li key={item.href} className="py-5 border-t" style={{ borderColor: 'var(--rule)' }}>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <a href={item.href} className="font-medium">
                {item.title}
              </a>
              <span className="font-mono text-xs ml-auto" style={{ color: 'var(--muted)' }}>
                {item.source}
              </span>
            </div>
            <p className="mt-1.5 text-[15px] leading-relaxed max-w-2xl">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
