import type { Metadata } from 'next';
import { ROLES, SKILLS, PROJECTS, CERTIFICATIONS } from '@/lib/career';

export const metadata: Metadata = {
  title: 'Résumé',
  description:
    'Thirteen years across embedded systems, insurance underwriting, Go microservices and Rust backends.',
};

export default function Resume() {
  return (
    <div className="pt-6">
      <header className="pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Résumé</h1>
        <p className="mt-3 text-[15px] max-w-2xl" style={{ color: 'var(--muted)' }}>
          Fifteen years, newest first. Based in Chennai. There is also a{' '}
          <a href="/Ghanithan_Resume.pdf">PDF</a> if you need one.
        </p>
      </header>

      <section className="pb-10">
        <h2 className="text-sm font-medium mb-1">Experience</h2>
        {[...ROLES].reverse().map((role) => (
          <article key={role.id} className="py-5 border-t" style={{ borderColor: 'var(--rule)' }}>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-medium">{role.title}</h3>
              <span
                className="font-mono text-xs ml-auto"
                style={{ color: role.kind === 'low' ? 'var(--anomaly)' : 'var(--muted)' }}
              >
                {role.period}
              </span>
            </div>
            <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
              {role.org}
            </p>
            <div className="prose text-[15px] mt-2">
              <ul>
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="pb-10">
        <h2 className="text-sm font-medium mb-4">Skills</h2>
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-[8rem_1fr] text-[15px]">
          {SKILLS.map((group) => (
            <div key={group.heading} className="contents">
              <dt className="font-mono text-xs pt-1" style={{ color: 'var(--muted)' }}>
                {group.heading}
              </dt>
              <dd className="m-0 leading-relaxed">{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pb-10">
        <h2 className="text-sm font-medium mb-4">Certifications</h2>
        <div className="prose text-[15px]">
          <ul>
            {CERTIFICATIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="text-sm font-medium mb-4">Projects</h2>
        <ul className="list-none p-0 m-0 text-[15px]">
          {PROJECTS.map((p) => (
            <li key={p.name} className="py-3 border-t" style={{ borderColor: 'var(--rule)' }}>
              <span className="font-mono text-sm">
                {p.href ? <a href={p.href}>{p.name}</a> : p.name}
              </span>
              <p className="mt-1 leading-relaxed" style={{ color: 'var(--muted)' }}>
                {p.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-medium mb-4">Education</h2>
        <div className="py-3 border-t text-[15px]" style={{ borderColor: 'var(--rule)' }}>
          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="font-medium">BE, Electronics and Communication</span>
            <span className="font-mono text-xs ml-auto" style={{ color: 'var(--muted)' }}>
              06/2007 – 04/2011
            </span>
          </div>
          <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
            Kumaraguru College of Technology
          </p>
        </div>
      </section>
    </div>
  );
}
