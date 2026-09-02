import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About',
  description: 'Get in touch with Ghanithan Subramani.',
};

export default function About() {
  return (
    <div className="pt-6">
      <header className="pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="mt-3 text-[15px] max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          Rust, Go, embedded work, or something you are stuck on. The form goes to my
          inbox. <a href="mailto:ghanithan@gmail.com">Email</a> works too.
        </p>
      </header>

      <Script
        src="https://form.jotform.com/jsform/242694326339464"
        strategy="afterInteractive"
      />
    </div>
  );
}
