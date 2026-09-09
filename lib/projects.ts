export type Project = {
  name: string;
  /** Where it runs. Several are routes on this same domain. */
  href: string;
  /** Shown next to the name, so the URL is visible without hovering. */
  where: string;
  repo?: string;
  built: string;
  note: string;
  /** Set when it is not finished, so the page does not oversell it. */
  wip?: boolean;
};

/**
 * Only things a visitor can actually open and use.
 *
 * That test excludes more than it first appears. mp3player, ReflowReader,
 * wishMaker and System-Designs all return 200 and looked fine from a title and
 * a status code, but they are respectively a rendered README for an
 * unmaintained 2010 console app, a header with no reader under it, an
 * untouched SvelteKit starter page, and a collection containing one item.
 * Listing them would send people to dead ends.
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
];
