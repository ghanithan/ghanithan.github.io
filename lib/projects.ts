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
 * Things that are actually running somewhere. Ordered by how much of them
 * there is to look at, not by date.
 *
 * Deliberately excluded: scratch repos with Pages left on (testrepo,
 * testHTML2PDF), a duplicate front page for Rust Tour, and OpenScribe, whose
 * site is still a placeholder.
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
    name: 'Reflow Reader',
    href: 'https://www.ghanithan.com/ReflowReader/',
    where: '/ReflowReader',
    repo: 'https://github.com/ghanithan/ReflowReader',
    built: 'JavaScript',
    note: 'A reader for a range of document formats that lets you set the type size to something you can actually read.',
  },
  {
    name: 'System Designs',
    href: 'https://www.ghanithan.com/System-Designs/',
    where: '/System-Designs',
    repo: 'https://github.com/ghanithan/System-Designs',
    built: 'Notes',
    note: 'A collection of system designs I worked through and kept for reference.',
  },
  {
    name: 'wishMaker',
    href: 'https://www.ghanithan.com/wishMaker/',
    where: '/wishMaker',
    repo: 'https://github.com/ghanithan/wishMaker',
    built: 'Svelte',
    wip: true,
    note: 'Generative art posters for wishing people well, drawn with the CSS Houdini painting API.',
  },
  {
    name: 'mp3player',
    href: 'https://www.ghanithan.com/mp3player/',
    where: '/mp3player',
    repo: 'https://github.com/ghanithan/mp3player',
    built: 'C++',
    note: 'A console MP3 library manager and playlist editor, written in C++ in my pre-final year of college in 2010. It still runs.',
  },
];
