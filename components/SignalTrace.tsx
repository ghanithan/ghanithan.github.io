'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ROLES, type Role } from '@/lib/career';

const VW = 1000;
const VH = 116;
const HI = 26;
const LO = 84;
const AXIS = 104;
/** Rails for the underwriting years: same baseline, a fraction of the swing. */
const LOW_HI = 62;

const Y_START = 2011.2;
const Y_END = 2026.9;

const px = (year: number) => ((year - Y_START) / (Y_END - Y_START)) * VW;
const pct = (year: number) => (px(year) / VW) * 100;

/* Cycles per year, rising left to right; the clock speeds up as the career does. */
const PERIOD: Record<Role['kind'], number> = {
  square: 0.85,
  low: 1.05,
  pulse: 0.45,
  fast: 0.16,
};

/** Eras, not roles: five labels read where eight would collide. */
const ERAS = [
  { id: 'embedded', label: 'embedded', from: 2011.42, to: 2016.75, anomalous: false },
  { id: 'underwriting', label: 'underwriting', from: 2016.83, to: 2019.99, anomalous: true },
  { id: 'go', label: 'go', from: 2020.0, to: 2023.42, anomalous: false },
  { id: 'rust', label: 'rust', from: 2023.42, to: 2024.75, anomalous: false },
  { id: 'platform', label: 'platform', from: 2024.83, to: 2026.75, anomalous: false },
];

/**
 * Stroke width does not shrink with the viewport, so on a narrow screen tight
 * pulses merge into a filled block. Hold every period to a floor in real pixels.
 */
const MIN_PULSE_PX = 13;

function pointsFor(role: Role, minPeriod: number, settle: boolean): [number, number][] {
  const { kind, start, end } = role;
  const half = Math.max(PERIOD[kind], minPeriod) / 2;
  // The current role stops oscillating and holds high; it is still running.
  const settleAt = settle ? start + (end - start) * 0.55 : end;
  const top = kind === 'low' ? LOW_HI : HI;

  const pts: [number, number][] = [];
  let t = start;
  let high = true;
  while (t < settleAt) {
    const y = high ? top : LO;
    pts.push([px(t), y], [px(Math.min(t + half, settleAt)), y]);
    high = !high;
    t += half;
  }
  if (settle) pts.push([px(settleAt), HI], [px(end), HI]);
  return pts;
}

const toPath = (pts: [number, number][]) =>
  pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y}`).join(' ');

export default function SignalTrace() {
  const [active, setActive] = useState(ROLES.length - 1);
  // Desktop default, so the server and first client render agree.
  const [width, setWidth] = useState(1000);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const segments = useMemo(() => {
    const minPeriod = (MIN_PULSE_PX / Math.max(width, 1)) * (Y_END - Y_START);
    let prev: [number, number] | null = null;
    return ROLES.map((role, i) => {
      const pts = pointsFor(role, minPeriod, i === ROLES.length - 1);
      const joined = prev ? [prev, ...pts] : pts;
      prev = pts[pts.length - 1];
      return { role, d: toPath(joined) };
    });
  }, [width]);

  const onPointerMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const year = Y_START + ((e.clientX - rect.left) / rect.width) * (Y_END - Y_START);
    const idx = ROLES.findIndex((r) => year >= r.start && year <= r.end);
    if (idx >= 0) setActive(idx);
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    setActive((i) =>
      e.key === 'ArrowLeft' ? Math.max(0, i - 1) : Math.min(ROLES.length - 1, i + 1)
    );
  }, []);

  const current = ROLES[active];
  const offPath = current.kind === 'low';

  return (
    <figure className="m-0">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VW} ${VH}`}
        className="w-full touch-none select-none"
        preserveAspectRatio="none"
        style={{ height: 'clamp(80px, 14vw, 124px)' }}
        onPointerMove={onPointerMove}
        aria-hidden="true"
      >
        <line
          x1="0"
          y1={AXIS}
          x2={VW}
          y2={AXIS}
          stroke="var(--rule)"
          vectorEffect="non-scaling-stroke"
        />
        {segments.map(({ role, d }, i) => {
          const low = role.kind === 'low';
          return (
            <path
              key={role.id}
              d={d}
              fill="none"
              // Colour and dash mark a different discipline, not a dead line.
              stroke={low ? 'var(--anomaly)' : 'var(--signal)'}
              strokeDasharray={low ? '7 4' : undefined}
              strokeWidth={i === active ? 2.5 : 1.5}
              opacity={i === active ? 1 : 0.5}
              strokeLinejoin="miter"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Tick marks are the keyboard control; era labels carry the meaning. */}
      <div className="relative h-3" role="group" aria-label="Career timeline" onKeyDown={onKeyDown}>
        {ROLES.map((role, i) => (
          <button
            key={role.id}
            type="button"
            onFocus={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className="absolute top-0 -translate-x-1/2 w-4 h-3 flex justify-center"
            style={{ left: `${pct(role.start)}%` }}
          >
            <span
              aria-hidden="true"
              className="block w-px h-2"
              style={{ background: i === active ? 'var(--ink)' : 'var(--rule)' }}
            />
            <span className="sr-only">
              {role.period}, {role.title}, {role.org}
            </span>
          </button>
        ))}
      </div>

      {/* Staggered across two rows so adjacent labels cannot collide on narrow screens. */}
      <div className="relative h-9 mb-3" aria-hidden="true">
        {ERAS.map((era, i) => (
          <span
            key={era.id}
            className="absolute -translate-x-1/2 font-mono text-[11px] whitespace-nowrap"
            style={{
              left: `${pct((era.from + era.to) / 2)}%`,
              top: i % 2 === 0 ? 0 : '1.15rem',
              color: era.anomalous ? 'var(--anomaly)' : 'var(--muted)',
            }}
          >
            {era.label}
          </span>
        ))}
      </div>

      <figcaption className="min-h-[3rem] text-[15px]" aria-live="polite">
        <span
          className="font-mono text-xs"
          style={{ color: offPath ? 'var(--anomaly)' : 'var(--muted)' }}
        >
          {current.period}
        </span>
        <br />
        <span>{current.summary}</span>{' '}
        <span style={{ color: 'var(--muted)' }}>{current.org}</span>
      </figcaption>
    </figure>
  );
}
