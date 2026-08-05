import { COLORS, FONT, LAYOUT, WINDOW_BUTTONS } from "./styles.js";
import {
  scanningAnimation,
  scanningLabel,
  glowBorder
} from "./animations.js";

export function buildTerminal(profile, theme = "light", asciiSvg = "") {

    const c = COLORS[theme];

    return `
<svg
xmlns="http://www.w3.org/2000/svg"
width="${LAYOUT.width}"
height="${LAYOUT.height}"
viewBox="0 0 ${LAYOUT.width} ${LAYOUT.height}">

<defs>

<linearGradient id="borderGradient"
x1="0%"
y1="0%"
x2="100%"
y2="100%">

<stop offset="0%" stop-color="${c.border}"/>
<stop offset="50%" stop-color="${c.borderGlow}"/>
<stop offset="100%" stop-color="${c.border}"/>

</linearGradient>

<linearGradient
id="scanGradient"
x1="0%"
y1="0%"
x2="0%"
y2="100%">

<stop offset="0%" stop-color="${c.line}" stop-opacity="0"/>
<stop offset="50%" stop-color="${c.line}" stop-opacity="0.45"/>
<stop offset="100%" stop-color="${c.line}" stop-opacity="0"/>

</linearGradient>

</defs>

<!-- Background -->

<rect
width="${LAYOUT.width}"
height="${LAYOUT.height}"
rx="${LAYOUT.radius}"
fill="${c.background}"/>

<!-- Window -->

<rect
x="6"
y="6"
width="${LAYOUT.width-12}"
height="${LAYOUT.height-12}"
rx="${LAYOUT.radius}"
fill="${c.window}"
stroke="url(#borderGradient)"
stroke-width="2"/>

${glowBorder()}

<!-- Header -->

<rect
x="6"
y="6"
width="${LAYOUT.width-12}"
height="${LAYOUT.headerHeight}"
rx="${LAYOUT.radius}"
fill="${c.window}"/>

${WINDOW_BUTTONS.map(btn=>`

<circle
cx="${btn.x}"
cy="29"
r="7"
fill="${btn.color}"/>

`).join("")}

<text
x="640"
y="31"
text-anchor="middle"
font-size="14"
font-family="${FONT.family}"
fill="${c.muted}">

${profile.github}@github ~ ./profile.sh

</text>

${scanningLabel()}

<!-- Left Panel -->

<rect
x="25"
y="70"
width="470"
height="540"
rx="12"
fill="none"
stroke="${c.visualBorder}"
stroke-width="1"/>

<text
x="40"
y="60"
font-size="16"
font-family="${FONT.family}"
fill="${c.heading}">

VISUAL.MAP

</text>

${asciiSvg}

<!-- Right Panel -->

<rect
x="515"
y="70"
width="735"
height="510"
rx="12"
fill="none"
stroke="${c.visualBorder}"
stroke-width="1"/>

<text
x="530"
y="60"
font-size="12"
font-family="${FONT.family}"
fill="${c.heading}">

SYSTEM.INFO

</text>

${buildInfo(profile,c)}

${scanningAnimation()}

</svg>
`;
}

function buildInfo(profile, c) {

    const LABEL_X = 540;
    const VALUE_X = 705;

    const FONT_SIZE = 16;
    const LINE_HEIGHT = 34;

    let y = 100;

    function row(label, value) {

        const currentY = y;

        y += LINE_HEIGHT;

        return `
<text
x="${LABEL_X}"
y="${currentY}"
font-family="monospace"
font-size="${FONT_SIZE}"
fill="${c.heading}"
font-weight="600">

${label}

</text>

<text
x="${VALUE_X}"
y="${currentY}"
font-family="monospace"
font-size="${FONT_SIZE}"
fill="${c.value}">

${value}

</text>

<line
x1="535"
y1="${currentY+14}"
x2="1215"
y2="${currentY+14}"
stroke="#2d333b"
stroke-width="0.8"/>

`;
    }

    let svg = "";

    svg += row("Subject", profile.name);
    svg += row("Role", profile.role);
    svg += row("Origin", profile.origin);
    svg += row("Education", profile.education);

    y += 12;

    svg += row("Status", profile.status);

    y += 12;

    svg += row("Languages", profile.languages.join(", "));
    svg += row("Frontend", profile.frontend.join(", "));
    svg += row("Backend", profile.backend.join(", "));
    svg += row("Database", profile.database.join(", "));
    svg += row("Tools", profile.tools.join(", "));

    y += 12;

    svg += row("GitHub", profile.github);
    svg += row("LeetCode", profile.leetcode);
    svg += row("LinkedIn", profile.linkedin);

    return svg;

}