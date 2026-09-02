export type TraceKind = 'square' | 'flat' | 'pulse' | 'fast';

export type Role = {
  id: string;
  title: string;
  org: string;
  period: string;
  /** Decimal years, used to place the role on the trace. */
  start: number;
  end: number;
  /** How this stretch of the career is drawn. */
  kind: TraceKind;
  /** One line, shown in the trace readout. */
  summary: string;
  bullets: string[];
};

/** Oldest first — the trace reads left to right. */
export const ROLES: Role[] = [
  {
    id: 'bosch-1',
    title: 'Software Engineer',
    org: 'Bosch Global Software Technologies',
    period: '06/2011 – 03/2013',
    start: 2011.42,
    end: 2013.17,
    kind: 'square',
    summary: 'Device drivers for sensors. The register level.',
    bullets: [
      'Implemented device drivers for sensors',
      'Resource optimisation; solved two major bugs in the product',
    ],
  },
  {
    id: 'handson',
    title: 'Sr. Design and Development Engineer',
    org: 'HandsOn Technologies',
    period: '04/2013 – 08/2014',
    start: 2013.25,
    end: 2014.67,
    kind: 'square',
    summary: 'CAN, I2C, SPI, UART. Ten boards still in service.',
    bullets: [
      'Created libraries for communication protocols — CAN, I2C, SPI, UART',
      'Wrote firmware for products based on ARM Cortex-M0',
      'Worked the full product cycle, from requirement analysis through testing',
      'Designed 10+ PCBs during my tenure, still in use today',
    ],
  },
  {
    id: 'bosch-2',
    title: 'Senior Software Engineer',
    org: 'Bosch Global Software Technologies',
    period: '09/2014 – 09/2016',
    start: 2014.67,
    end: 2016.75,
    kind: 'square',
    summary: 'Injection over CAN for a diesel truck ECU.',
    bullets: [
      'Implemented injection over CAN for a diesel truck ECU',
      'Package owner for the hardware encapsulation layer',
    ],
  },
  {
    id: 'uiic-underwriter',
    title: 'Risk Underwriter',
    org: 'United India Insurance Company Ltd',
    period: '11/2016 – 12/2019',
    start: 2016.83,
    end: 2019.99,
    kind: 'flat',
    summary: 'Not writing software at all. Underwriting risk.',
    bullets: [
      'Inducted as a Fellow of the Insurance Institute of India, with distinction in Actuary (Reg: FE93778)',
    ],
  },
  {
    id: 'uiic-eng',
    title: 'Lead Fullstack Engineer',
    org: 'United India Insurance Company Ltd',
    period: '01/2020 – 09/2022',
    start: 2020.0,
    end: 2022.67,
    kind: 'pulse',
    summary: 'Back to code. Go, Gin, MongoDB.',
    bullets: [
      'Built an internal Document Management System using Go (Gin) and MongoDB',
      'Led cross-functional teams on Digilocker integration, a claims reporting solution for banks, and critical debugging',
    ],
  },
  {
    id: 'quickplay',
    title: 'Senior Software Engineer',
    org: 'XRG Consulting — for Quickplay Media',
    period: '09/2022 – 06/2023',
    start: 2022.67,
    end: 2023.42,
    kind: 'pulse',
    summary: 'Go microservices behind OTT streaming.',
    bullets: [
      'Built Go microservices for the CMS behind OTT provider Quickplay Media, serving Allen Media Group (Local Now, The Weather Channel, Grio)',
      'EPG management, image manipulation, VOD and live content pipelines, authorisation and entitlement',
    ],
  },
  {
    id: 'astra',
    title: 'Principal Software Engineer',
    org: 'Astra Technologies Inc.',
    period: '06/2023 – present',
    start: 2023.42,
    end: 2026.75,
    kind: 'fast',
    summary: 'Rust. Low latency, low footprint, in production.',
    bullets: [
      'Architecture and build of a high-performance, low-latency backend (REST and WebSocket) in Rust',
      'Monitoring and traceability with OpenTelemetry, Jaeger, Prometheus, Grafana and Honeycomb',
      'Frontend in Lit, Web Components, React, Next.js and Firebase',
      'CI/CD pipelines on GitHub Actions',
    ],
  },
];

export const SKILLS: { heading: string; items: string }[] = [
  { heading: 'Languages', items: 'Rust, Go, JavaScript, C, Python, Java, C++' },
  { heading: 'Data', items: 'Postgres, Couchbase, Oracle, MySQL, MongoDB' },
  {
    heading: 'Web',
    items:
      'REST, WebSocket, JWT, PWA, SPA, OpenTelemetry, streaming CMS, EPG management, image processing',
  },
  { heading: 'Frameworks', items: 'Tokio, Axum, Actix, Next.js, Lit, Svelte, Express, Fiber' },
  { heading: 'Tools', items: 'Figma, Prometheus, Jaeger, Grafana, Vite, git, Swagger, PlantUML, Postman' },
  { heading: 'Cloud', items: 'AWS (full VPC setup), GCP' },
];

export const PROJECTS: { name: string; note: string; href?: string }[] = [
  {
    name: 'rust-tour',
    note: 'Interactive Rust learning platform, with exercises tracking The Rust Programming Language.',
    href: 'https://rust-tour.dev/',
  },
  {
    name: 'archMD',
    note: 'Single-file browser Markdown editor — live preview, Mermaid diagrams, HTML and PDF export.',
    href: 'http://www.archmd.dev/',
  },
  {
    name: 'URLJammer',
    note: 'URL shortener built on the Jamstack.',
    href: 'https://github.com/ghanithan/URLJammer',
  },
  {
    name: 'PDFReplicator',
    note: 'Generates millions of PDFs from an HTML template and a spreadsheet data source.',
    href: 'https://github.com/ghanithan/PDFReplicator',
  },
  {
    name: 'mp3player',
    note: 'Interactive console MP3 library manager and playlist editor, written in C++ in 2010.',
    href: 'https://github.com/ghanithan/mp3player',
  },
];
