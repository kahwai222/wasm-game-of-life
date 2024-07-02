import { defineConfig } from "astro/config";

import RustHmr from "./plugins/rust-hmr";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [RustHmr()],
  },
});
