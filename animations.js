export function scanningAnimation(duration = 4.2) {
return `
<rect x="0" y="-70" width="1280" height="70"
fill="url(#scanGradient)"
opacity="0.85">

<animateTransform
attributeName="transform"
type="translate"
from="0 -70"
to="0 690"
dur="${duration}s"
repeatCount="indefinite"/>

</rect>
`;
}

export function scanningLabel() {

return `
<circle cx="1195" cy="22" r="4" fill="#ff4d4d">

<animate
attributeName="opacity"
values="1;0.2;1"
dur="1.1s"
repeatCount="indefinite"/>

</circle>

<text
x="1208"
y="26"
font-size="11"
font-family="monospace"
fill="#ff4d4d">

SCANNING

</text>
`;

}

export function cursorBlink(x,y){

return `
<rect
x="${x}"
y="${y}"
width="8"
height="18"
fill="#58a6ff">

<animate
attributeName="opacity"
values="0;1;0;1;0"
dur="1s"
repeatCount="indefinite"/>

</rect>
`;

}

export function bootReveal(id,width,height,begin){

return `
<clipPath id="${id}">
<rect
x="0"
y="0"
width="0"
height="${height}">

<animate
attributeName="width"
from="0"
to="${width}"
dur="0.5s"
begin="${begin}s"
fill="freeze"/>

</rect>
</clipPath>
`;

}

export function glowBorder(){

return `
<rect
x="4"
y="4"
width="1272"
height="612"
rx="18"
fill="none"
stroke="#58a6ff"
stroke-width="2">

<animate
attributeName="opacity"
values="0.4;1;0.4"
dur="3s"
repeatCount="indefinite"/>

</rect>
`;

}