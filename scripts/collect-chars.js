// Collects every character this site can render, split by language, and writes
// chars-ko.txt / chars-ja.txt for pyftsubset. Run via scripts/subset-fonts.sh.
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = __dirname;

const walk = (v, acc) => {
  if (typeof v === "string") acc.push(v);
  else if (Array.isArray(v)) v.forEach((x) => walk(x, acc));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => walk(x, acc));
  return acc;
};
const readJsonChars = (p) => walk(JSON.parse(fs.readFileSync(p, "utf8")), []).join("");

// Base: all printable ASCII + common typographic punctuation.
let base = "";
for (let c = 0x20; c <= 0x7e; c++) base += String.fromCodePoint(c);
base += " —–‘’“”…·•→←↑↓©®™°±×÷«»";

// Hard-coded literal text rendered by Resume.tsx (skills, framework names, years…).
const resume = fs.readFileSync(path.join(ROOT, "src/views/Resume.tsx"), "utf8");
const literals = (resume.match(/"[^"]*"|'[^']*'|`[^`]*`|>[^<>{}]+</g) || []).join("");

const ko = base + readJsonChars(path.join(ROOT, "src/locale/translation/ko.json")) + literals;
const ja = base + readJsonChars(path.join(ROOT, "src/locale/translation/ja.json")) + literals;

const uniq = (s) => Array.from(new Set(Array.from(s))).join("");

fs.writeFileSync(path.join(OUT, "chars-ko.txt"), uniq(ko), "utf8");
fs.writeFileSync(path.join(OUT, "chars-ja.txt"), uniq(ja), "utf8");

console.log("ko unique chars:", Array.from(uniq(ko)).length);
console.log("ja unique chars:", Array.from(uniq(ja)).length);
