import fs from "fs";

export function loadAscii() {

    try {

        const ascii = fs.readFileSync(
            "portrait_tspan.txt",
            "utf8"
        );

        return `
<g transform="translate(50,90) scale(1.9)">

<text
font-family="monospace"
font-size="7"
fill="#6ab7ff"
xml:space="preserve">

${ascii}

</text>

</g>
`;

    } catch {

        return `
<text
x="80"
y="250"
font-size="20"
font-family="monospace"
fill="#58a6ff">

No Portrait Found

</text>
`;

    }

}