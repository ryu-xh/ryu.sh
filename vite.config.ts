import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  // Bundle deps into the SSR/prerender build so CJS<->ESM default-export
  // interop (styled-components, i18next, …) is handled by Vite, not Node.
  ssr: {
    noExternal: true,
  },
});
