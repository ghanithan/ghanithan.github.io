import SignalTrace from '@/components/SignalTrace';
import { ROLES } from '@/lib/career';

/* The arc in four stops: what I do now, the Rust years, the throughput
   problem, and the boards. Each names the bullet worth leading with. */
const SELECTED = [
  { id: 'opsmx', bullet: 0 },
  { id: 'astra', bullet: 0 },
  { id: 'quickplay', bullet: 1 },
  { id: 'handson', bullet: 1 },
];

/* The two that are live and still moving. Everything else is on the résumé. */
const BUILDING = [
  {
    name: 'Rust Tour',
    href: 'https://rust-tour.dev/',
    domain: 'rust-tour.dev',
    note: 'An interactive Rust course that follows The Rust Programming Language: 40 exercises across 5 chapters so far, with around 200 planned. A Monaco editor, a real terminal, and a test suite behind every exercise, so what tells you whether it works is the compiler rather than a quiz.',
  },
  {
    name: 'archMD',
    href: 'https://www.archmd.dev/',
    domain: 'archmd.dev',
    note: 'A Markdown editor that is one HTML file. Live preview, Mermaid diagrams, syntax highlighting, and it opens and saves straight to your disk through the File System Access API. No build step, no server, nothing to install.',
  },
];

export default function Home() {
  const selected = SELECTED.map(({ id, bullet }) => ({
    role: ROLES.find((r) => r.id === id)!,
    bullet,
  }));

  return (
    <>
      <section className="pt-6 pb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-2xl">
          I started at the register level.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Device drivers for diesel engine ECUs, then Go microservices at 60,000
          transactions a second, now delivery and security tooling. Twelve years of
          engineering, and three underwriting general insurance.
        </p>
      </section>

      <section className="pb-12">
        <SignalTrace />
      </section>

      <section className="pb-12">
        <h2 className="text-sm font-medium mb-3">Now</h2>
        <div className="prose text-[15px]">
          <p>
            I am a principal engineer at OpsMx, working on how software gets delivered and
            secured: application packaging, cross-cloud distribution, vulnerability
            metrics, and the scanning that runs across all of it.
          </p>
          <p>
            My first six years were embedded systems and automotive software, which is
            where caring about footprint becomes a habit rather than a preference. Since
            then I have worked across most of the stack: solution design, backend, DevOps,
            testing, and enough UI to be useful in the conversation. I would rather inspire
            a team to build something together than monitor them building it.
          </p>
          <p>
            Most of my own time goes to Rust, and most of that goes to the two things
            below. If you are building something interesting, I would like to hear about
            it.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <h2 className="text-sm font-medium mb-4">Building</h2>
        <ul className="list-none p-0 m-0">
          {BUILDING.map((p) => (
            <li key={p.name} className="py-4 border-t" style={{ borderColor: 'var(--rule)' }}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <a href={p.href} className="font-medium">
                  {p.name}
                </a>
                <span className="font-mono text-xs ml-auto" style={{ color: 'var(--muted)' }}>
                  {p.domain}
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed max-w-2xl">{p.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-12">
        <h2 className="text-sm font-medium mb-4">Selected work</h2>
        <ul className="list-none p-0 m-0">
          {selected.map(({ role, bullet }) => (
            <li key={role.id} className="py-4 border-t" style={{ borderColor: 'var(--rule)' }}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-medium">{role.title}</span>
                <span className="text-sm" style={{ color: 'var(--muted)' }}>
                  {role.org}
                </span>
                <span className="font-mono text-xs ml-auto" style={{ color: 'var(--muted)' }}>
                  {role.period}
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed max-w-2xl">
                {role.bullets[bullet]}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm">
          <a href="/resume/">The full history</a>
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium mb-3">Writing</h2>
        <p className="text-[15px] max-w-2xl leading-relaxed">
          Occasional notes on Rust, Go and whatever I am taking apart.{' '}
          <a href="/blog/">Read the blog</a>, or take <a href="/blog/feed.xml">the feed</a>.
        </p>
      </section>
    </>
  );
}
