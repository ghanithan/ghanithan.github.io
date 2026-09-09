export type Project = {
  name: string;
  /** Where it runs, or where it is written up. */
  href: string;
  /** Shown next to the name, so the URL is visible without hovering. */
  where: string;
  repo?: string;
  built: string;
  note: string;
  /** Short qualifier, when the link is not a running application. */
  tag?: string;
};

/**
 * Things worth opening. Mostly that means running software, with one
 * exception kept on purpose.
 *
 * A 200 and a sensible title turned out to be no evidence at all: ReflowReader
 * is a header with no reader under it, wishMaker is the untouched SvelteKit
 * starter page, and System-Designs is a collection containing one item. Those
 * are dead ends and stay off. mp3player is also not a running app, but it is
 * the first real thing he built, so it is here and labelled as what it is.
 */
export const PROJECT_SITES: Project[] = [
  {
    name: 'Rust Tour',
    href: 'https://rust-tour.dev/',
    where: 'rust-tour.dev',
    repo: 'https://github.com/ghanithan/rust-tour',
    built: 'Rust',
    note: 'An interactive Rust course following The Rust Programming Language. 40 test-driven exercises across 5 chapters so far, with a Monaco editor and a real terminal, so what tells you whether it works is the compiler rather than a quiz.',
  },
  {
    name: 'archMD',
    href: 'https://www.archmd.dev/',
    where: 'archmd.dev',
    built: 'JavaScript',
    note: 'An offline-first PWA for system architects. Live preview, Mermaid diagrams, and direct disk access through the File System Access API. Its MCP server pairs it with Claude Code, so the CLI writes the markdown and archMD renders it.',
  },
  {
    name: 'plnnr',
    href: 'https://www.ghanithan.com/plnnr/',
    where: '/plnnr',
    repo: 'https://github.com/ghanithan/plnnr',
    built: 'Svelte',
    note: 'An offline planner that lives entirely in the browser. Nothing to sign into, nothing kept on a server.',
  },
  {
    name: 'KeyGaurdian',
    href: 'https://www.ghanithan.com/keygaurdian/',
    where: '/keygaurdian',
    built: 'Rust',
    note: 'An open-source password manager written in Rust.',
  },
  {
    name: 'mp3player',
    href: 'https://www.ghanithan.com/mp3player/',
    where: '/mp3player',
    repo: 'https://github.com/ghanithan/mp3player',
    built: 'C++, 2010',
    tag: 'the first one',
    note: 'A console MP3 library manager and playlist editor, written in C++ in my pre-final year of college. The first proper thing I built. It is source and a write-up rather than something to run in a browser, and it still compiles.',
  },
];
