import React from "react";
import {renderToString} from "react-dom/server";
import {ServerStyleSheet} from "styled-components";

import App from "./App";

// Called at build time by scripts/prerender.mjs to produce the static markup
// and the critical styled-components CSS that gets inlined into index.html.
export function render(): {html: string; styleTags: string} {
  const sheet = new ServerStyleSheet();
  try {
    // Cast works around a styled-components v5 / React 18 types mismatch.
    const tree = sheet.collectStyles(<App />) as React.ReactElement;
    const html = renderToString(tree);
    const styleTags = sheet.getStyleTags();
    return {html, styleTags};
  } finally {
    sheet.seal();
  }
}
