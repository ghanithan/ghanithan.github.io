'use client';

import { useEffect, useRef, useState } from 'react';

export type NavItem = { href: string; label: string };

/**
 * Inline links on desktop; a button and a slide-out panel below sm, where four
 * links plus the wordmark wrapped onto a second row.
 *
 * A checkbox-and-label would avoid the client component, but every page already
 * ships the router runtime, so the honest trade is to use a real button and get
 * aria-expanded, Escape, focus return and scroll locking for free.
 */
export default function Nav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const everOpened = useRef(false);

  useEffect(() => {
    if (!open) return;
    everOpened.current = true;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);

    // Stop the page scrolling behind the panel.
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Send focus back to the button on close, but never steal it on first render.
  useEffect(() => {
    if (!open && everOpened.current) buttonRef.current?.focus({ preventScroll: true });
  }, [open]);

  return (
    <>
      <nav className="ml-auto hidden sm:flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {items.map((item) => (
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

      <button
        ref={buttonRef}
        type="button"
        className="ml-auto sm:hidden -mr-2 p-2"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none">
          {open ? (
            <path
              d="M5 5 L17 17 M17 5 L5 17"
              stroke="var(--ink)"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          ) : (
            <path
              d="M3 6 H19 M3 11 H19 M3 16 H19"
              stroke="var(--ink)"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          )}
        </svg>
      </button>

      {/* Backdrop. Kept mounted so the panel can transition out. */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'color-mix(in srgb, var(--ink) 28%, transparent)' }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        className={`sm:hidden fixed right-0 top-0 z-50 h-dvh w-[min(17rem,78vw)] border-l
                    px-6 pt-24 transition-transform duration-200 ease-out ${
                      open ? 'translate-x-0' : 'translate-x-full'
                    }`}
        style={{ background: 'var(--ground)', borderColor: 'var(--rule)' }}
        inert={!open}
      >
        {/* The header's button sits under the panel once it is open, so the
            panel carries its own way out. */}
        <button
          type="button"
          className="absolute right-4 top-7 p-2"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none">
            <path
              d="M5 5 L17 17 M17 5 L5 17"
              stroke="var(--ink)"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>

        <nav className="flex flex-col gap-5 text-lg">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="no-underline"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
