/** 'low' is the underwriting stretch: quieter and slower, but not absent. */
export type TraceKind = 'square' | 'low' | 'pulse' | 'fast';

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

/** Oldest first; the trace reads left to right. */
export const ROLES: Role[] = [
  {
    id: 'bosch-1',
    title: 'Software Engineer',
    org: 'Bosch Global Software Technologies',
    period: '06/2011 – 03/2013',
    start: 2011.42,
    end: 2013.25,
    kind: 'square',
    summary: 'Diesel truck engine software. The register level.',
    bullets: [
      'Development on diesel truck engine software, including the full implementation of water pump control, a new feature in the project',
      'Extended the device encapsulation library for new temperature and pressure sensors, auto-generating C from Perl scripts and the preprocessor',
      'Emergency restart, CAN frame implementation, post-drive relay and resource optimisation',
      'Driver implementation for sensors and actuators; pin allocation and power stages for relays',
      'Debugging with PLS UDE, and testing with IRIS, Vector CANalyzer and INCA',
    ],
  },
  {
    id: 'handson',
    title: 'Senior Design and Development Engineer',
    org: 'HandsOn Technologies',
    period: '04/2013 – 08/2014',
    start: 2013.25,
    end: 2014.67,
    kind: 'square',
    summary: 'Industrial automation boards, drawn from scratch.',
    bullets: [
      'Product development in industrial automation on ARM Cortex-M series controllers',
      'Designed products from scratch: requirement analysis, component selection, circuit schematic and PCB layout',
      'Two projects taken from requirement to product, in weight-based industrial automation and home automation, plus 6 major boards for other projects',
      'Wrote firmware for ARM Cortex-M0, and drivers for CAN, I2C, SPI, UART and high-precision ADCs',
      'Built service libraries to speed up board software development',
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
    summary: 'Injection over CAN, implemented from scratch.',
    bullets: [
      'Implemented the injection-over-CAN concept from scratch, and worked on engine position management',
      'Component-responsible role for the hardware encapsulation layer',
      'Task co-ordination for powertrain and temperature devices',
    ],
  },
  {
    id: 'uiic-underwriter',
    title: 'Risk Underwriter',
    org: 'United India Insurance Company Ltd',
    period: '11/2016 – 12/2019',
    start: 2016.83,
    end: 2019.99,
    kind: 'low',
    summary: 'Underwriting general insurance.',
    bullets: [
      'General insurance underwriting',
      'Completed a Fellowship of the Insurance Institute of India, with distinction in Actuary',
    ],
  },
  {
    id: 'uiic-eng',
    title: 'Lead Full Stack Engineer, Administrative Officer',
    org: 'United India Insurance Company Ltd',
    period: '01/2020 – 08/2022',
    start: 2020.0,
    end: 2022.67,
    kind: 'pulse',
    summary: 'Back to code, running new IT initiatives.',
    bullets: [
      'Built an offline-first PWA premium calculator: Svelte, Vite, PouchDB and Workbox on the front end, Go (Fiber) and CouchDB behind it',
      'Built an internal Document Management System in Go (Gin) with MongoDB',
      'Led cross-functional teams on Digilocker integration, a claims reporting solution for banks, and critical debugging',
      'Wrote a phonetic name comparison algorithm and REST API for Indian names, in the spirit of Soundex',
    ],
  },
  {
    id: 'quickplay',
    title: 'Senior Software Engineer',
    org: 'XRG Consulting, for Quickplay Media',
    period: '09/2022 – 06/2023',
    start: 2022.67,
    end: 2023.42,
    kind: 'pulse',
    summary: 'Go microservices at 60,000 transactions per second.',
    bullets: [
      'Go microservices for the CMS behind OTT provider Quickplay Media, serving Allen Media Group (Local Now, The Weather Channel, Grio)',
      'Optimised the backend to 60,000 TPS, for a news platform that spikes hard during US hurricanes',
      'Built an image-processing sidecar that beat the third-party option on speed and cut that feature’s cost by half',
      'Kubernetes on GCP; EPG management, VOD and live content pipelines, authorisation and entitlement',
    ],
  },
  {
    id: 'astra',
    title: 'Principal Software Engineer',
    org: 'Astra Technologies',
    period: '06/2023 – 09/2024',
    start: 2023.42,
    end: 2024.75,
    kind: 'fast',
    summary: 'Idiomatic Rust, low latency, small team.',
    bullets: [
      'Built a low-latency market data aggregation service and an OTC trading solution with a very small team at an early-stage startup',
      'Architected a high-performance REST and WebSocket backend in idiomatic Rust: Tokio, tungstenite, axum',
      'Created a Bitcoin wallet service from the ground up in Rust',
      'Owned the AWS VPC architecture and led DevOps on secure, scalable, cost-efficient infrastructure',
      'Monitoring and traceability with OpenTelemetry, Jaeger, Prometheus, Grafana and Honeycomb',
      'Built a web application in Lit, Web Components, React, Next.js and Firebase, later spun out as Astra Terminal',
    ],
  },
  {
    id: 'opsmx',
    title: 'Principal Software Engineer',
    org: 'OpsMx',
    period: '11/2024 – present',
    start: 2024.83,
    end: 2026.75,
    kind: 'pulse',
    summary: 'Platform architecture: auth, audit, security posture.',
    bullets: [
      'Architected a virtual application packaging solution with Packer, K3s and shell scripting, taking deployment from 8 hours to 5 minutes',
      'Designed the authentication and authorisation architecture: the token model, session handling, and the authorisation model, wired through to audit',
      'Designed the audit service, and delivered it to other services as a Go package with a fluent, chainable API, so recording an event is one expression at the call site',
      'Built a context service for cloud security posture data, exposed to AI agents over MCP, with its own query language and a TTL-based lifecycle',
      'GitHub App integration for on-premises installations, covering credential distribution and key rotation',
      'Cross-platform OVA distribution for GCP, AWS and VMware, streamlining customer onboarding',
      'Designed a global service collecting and rendering OSS library metrics and vulnerabilities, and extended ZAP scanning to cover OpenAPI v2 and v3',
      'Raised platform observability using OpenTelemetry with a collector for aggregation, and Prometheus',
    ],
  },
];

export const SKILLS: { heading: string; items: string }[] = [
  { heading: 'Languages', items: 'Rust, Go, JavaScript, C, Python, Java, C++' },
  { heading: 'Data', items: 'Postgres, Couchbase, MongoDB, CouchDB, Oracle, MySQL' },
  {
    heading: 'Web',
    items:
      'REST, WebSocket, JWT, PWA, SPA, OpenTelemetry, streaming CMS, EPG management, image processing',
  },
  { heading: 'Frameworks', items: 'Tokio, Axum, Actix, Next.js, Lit, Svelte, Express, Fiber, Gin' },
  {
    heading: 'Platform',
    items: 'Kubernetes, K3s, Packer, Terraform, Docker, GitHub Actions, ZAP, ScoutSuite',
  },
  { heading: 'Cloud', items: 'GCP, AWS (full VPC setup), VMware' },
  { heading: 'Tools', items: 'Figma, Prometheus, Jaeger, Grafana, Vite, git, Swagger, PlantUML' },
];

export const CERTIFICATIONS: string[] = [
  'Google Cloud Professional Cloud Architect',
  'Google Cloud Essentials',
  'Build Infrastructure with Terraform on Google Cloud (skill badge)',
  'Fellow of the Insurance Institute of India, with distinction in Actuary (FE93778)',
  'Foundations of User Experience (UX) Design',
];

export const PROJECTS: { name: string; note: string; href?: string }[] = [
  {
    name: 'rust-tour',
    note: 'Interactive Rust course following The Rust Programming Language. 40 test-driven exercises across 5 chapters, with a Monaco editor and an integrated terminal. Written in Rust.',
    href: 'https://rust-tour.dev/',
  },
  {
    name: 'archMD',
    note: 'Markdown editor in a single HTML file. Live preview, Mermaid diagrams, direct disk access via the File System Access API, and export to HTML or PDF. No build step, no server.',
    href: 'https://www.archmd.dev/',
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
