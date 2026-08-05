from pathlib import Path
from html import escape

INPUT = "portrait.txt"
OUTPUT = "portrait_tspan.txt"

# Position inside the SVG
START_X = 0
START_Y = 0
LINE_HEIGHT = 7

lines = Path(INPUT).read_text(
    encoding="utf-8",
    errors="ignore"
).splitlines()

svg = []

y = START_Y

for line in lines:
    svg.append(
        f'<tspan x="{START_X}" y="{y}">{escape(line)}</tspan>'
    )
    y += LINE_HEIGHT

Path(OUTPUT).write_text(
    "\n".join(svg),
    encoding="utf-8"
)

print(f"Generated {len(svg)} lines.")