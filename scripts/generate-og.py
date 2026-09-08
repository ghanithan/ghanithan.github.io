#!/usr/bin/env python3
"""
Render public/og.png, the 1200x630 card shown in search results and link
previews.

    python3 scripts/generate-og.py

The role data is read from lib/career.ts, so the picture follows the career
rather than being a hand-maintained copy. The waveform is redrawn here at a
lower density than the site uses, though: a link preview is often shown around
340px wide, and at that size the site's periods merge into a solid block. Same
shape, fewer cycles.

Needs Chrome, so it is deliberately not part of the build. The PNG is committed.
"""

import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CAREER = ROOT / "lib" / "career.ts"
OUT_PNG = ROOT / "public" / "og.png"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

HEADLINE = "From the register<br />level up."

# Dark half of the site palette. A dark card carries further in Slack and
# LinkedIn feeds, which are overwhelmingly light.
GROUND, INK, MUTED, SIGNAL, ANOMALY, RULE = (
    "#101216", "#e6e8ec", "#98a0ae", "#8098ff", "#e0a050", "#262a31",
)

# Geometry mirrors components/SignalTrace.tsx.
VW, HI, LO, LOW_HI, AXIS = 1000, 26, 84, 62, 104
Y_START, Y_END = 2011.2, 2026.9
# Roughly 1.7x the site's periods, so the pulses survive being shrunk.
PERIOD = {"square": 1.45, "low": 1.7, "pulse": 0.8, "fast": 0.42}


def px(year: float) -> float:
    return (year - Y_START) / (Y_END - Y_START) * VW


def roles() -> list[tuple[float, float, str]]:
    src = CAREER.read_text()
    found = re.findall(
        r"start:\s*([\d.]+),\s*\n\s*end:\s*([\d.]+),\s*\n\s*kind:\s*'(\w+)'", src
    )
    if not found:
        sys.exit("could not read roles from lib/career.ts")
    return [(float(a), float(b), k) for a, b, k in found]


def points(start: float, end: float, kind: str, settle: bool) -> list[tuple[float, float]]:
    half = PERIOD[kind] / 2
    settle_at = start + (end - start) * 0.55 if settle else end
    top = LOW_HI if kind == "low" else HI
    pts: list[tuple[float, float]] = []
    t, high = start, True
    while t < settle_at:
        y = top if high else LO
        pts += [(px(t), y), (px(min(t + half, settle_at)), y)]
        high = not high
        t += half
    if settle:
        pts += [(px(settle_at), HI), (px(end), HI)]
    return pts


def traces() -> str:
    out, prev = [], None
    data = roles()
    for i, (start, end, kind) in enumerate(data):
        pts = points(start, end, kind, i == len(data) - 1)
        joined = ([prev] + pts) if prev else pts
        prev = pts[-1]
        d = " ".join(
            f"{'M' if n == 0 else 'L'}{x:.1f},{y}" for n, (x, y) in enumerate(joined)
        )
        low = kind == "low"
        dash = ' stroke-dasharray="8 5"' if low else ""
        out.append(
            f'<path d="{d}" fill="none" stroke="{ANOMALY if low else SIGNAL}"'
            f' stroke-width="3.5"{dash} vector-effect="non-scaling-stroke"/>'
        )
    return "\n      ".join(out)


CARD = f"""<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@400;500;600&display=swap" />
    <style>
      * {{ margin: 0; padding: 0; box-sizing: border-box; }}
      body {{
        width: 1200px; height: 630px; background: {GROUND}; color: {INK};
        font-family: 'IBM Plex Sans', sans-serif;
        padding: 68px 72px; display: flex; flex-direction: column;
      }}
      .name {{ font-size: 30px; font-weight: 500; color: {MUTED}; letter-spacing: .01em; }}
      h1 {{ margin-top: 26px; font-size: 82px; font-weight: 600;
            line-height: 1.04; letter-spacing: -.03em; }}
      .trace {{ margin-top: auto; }}
      svg {{ display: block; width: 100%; height: 140px; }}
      .axis {{ display: flex; justify-content: space-between; margin-top: 16px;
               font-family: 'IBM Plex Mono', monospace; font-size: 21px; color: {MUTED}; }}
      .url {{ margin-top: 30px; font-family: 'IBM Plex Mono', monospace;
              font-size: 22px; color: {MUTED}; }}
    </style>
  </head>
  <body>
    <div class="name">Ghanithan Subramani</div>
    <h1>{HEADLINE}</h1>
    <div class="trace">
      <svg viewBox="0 0 1000 116" preserveAspectRatio="none">
        <line x1="0" y1="{AXIS}" x2="{VW}" y2="{AXIS}" stroke="{RULE}" vector-effect="non-scaling-stroke"/>
      {traces()}
      </svg>
      <div class="axis"><span>2011</span><span>now</span></div>
    </div>
    <div class="url">ghanithan.com</div>
  </body>
</html>
"""


def main() -> None:
    tmp = ROOT / "scripts" / ".og.html"
    tmp.write_text(CARD)
    subprocess.run(
        [
            CHROME, "--headless", "--disable-gpu", "--no-sandbox",
            "--hide-scrollbars", "--force-device-scale-factor=1",
            "--window-size=1200,630", "--virtual-time-budget=6000",
            f"--screenshot={OUT_PNG}", f"file://{tmp}",
        ],
        check=True, capture_output=True,
    )
    tmp.unlink()
    print(f"  wrote {OUT_PNG.relative_to(ROOT)} ({OUT_PNG.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
