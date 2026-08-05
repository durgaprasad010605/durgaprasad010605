import fs from "fs";

import { buildTerminal } from "./terminal.js";
import { loadAscii } from "./ascii.js";

const profile = JSON.parse(
    fs.readFileSync("./profile.json","utf8")
);

const ascii = loadAscii();

const lightSvg = buildTerminal(
    profile,
    "light",
    ascii
);

const darkSvg = buildTerminal(
    profile,
    "dark",
    ascii
);

fs.writeFileSync("./light.svg", lightSvg);
fs.writeFileSync("./dark.svg", darkSvg);

console.log("✅ light.svg generated");
console.log("✅ dark.svg generated");