// Injects the server-rendered markup + critical styled-components CSS into the
// built dist/index.html, so the page shows content before the JS bundle runs.
// Pipeline (see package.json "build"):
//   vite build                         -> dist/ (client, empty #root)
//   vite build --ssr entry-server.tsx  -> dist-ssr/ (render() function)
//   node scripts/prerender.mjs         -> inlines content into dist/index.html
import fs from "node:fs";
import path from "node:path";
import {pathToFileURL} from "node:url";

const root = process.cwd();
const ssrDir = path.join(root, "dist-ssr");
const ssrEntry = [".mjs", ".js", ".cjs"]
  .map((ext) => path.join(ssrDir, `entry-server${ext}`))
  .find((p) => fs.existsSync(p));
if (!ssrEntry) {
  throw new Error("Could not find the built entry-server bundle in dist-ssr/");
}
const indexPath = path.join(root, "dist", "index.html");

const mod = await import(pathToFileURL(ssrEntry).href);
const render = mod.render ?? mod.default?.render;
if (typeof render !== "function") {
  throw new Error("entry-server did not export a render() function");
}

const {html, styleTags} = render();

let template = fs.readFileSync(indexPath, "utf8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> in dist/index.html');
}
template = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
template = template.replace("</head>", `${styleTags}\n  </head>`);

fs.writeFileSync(indexPath, template);

// GitHub Pages custom domain
fs.writeFileSync(path.join(root, "dist", "CNAME"), "ryu.sh");

// Server bundle is only needed during build
fs.rmSync(path.join(root, "dist-ssr"), {recursive: true, force: true});

console.log(
  `prerendered: ${html.length} chars of HTML, ${styleTags.length} chars of critical CSS inlined`,
);
