import type { Metadata } from 'next';
import { PROJECT_SITES } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Things I have built that are running somewhere: an interactive Rust course, a Markdown editor for architects, an offline planner, a password manager, and a few older ones.',
};

export default function Projects() {
  return (
    <div className="pt-6">
      <header className="pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-[15px] max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          Four things you can open and use. Two run on their own domains, two are
          served straight off GitHub, which quietly turns the account into a small
          web host.
        </p>
      </header>

      <ul className="list-none p-0 m-0">
        {PROJECT_SITES.map((p) => (
          <li key={p.name} className="py-5 border-t" style={{ borderColor: 'var(--rule)' }}>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <a href={p.href} className="font-medium">
                {p.name}
              </a>
              {p.wip && (
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  in progress
                </span>
              )}
              <span
                className="font-mono text-xs ml-auto"
                style={{ color: 'var(--muted)' }}
              >
                {p.where}
              </span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed max-w-2xl">{p.note}</p>
            <p className="mt-2 font-mono text-xs" style={{ color: 'var(--muted)' }}>
              {p.built}
              {p.repo && (
                <>
                  {' · '}
                  <a href={p.repo}>source</a>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
