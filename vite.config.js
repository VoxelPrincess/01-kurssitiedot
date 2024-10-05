import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        osa1a: resolve(__dirname, "osa1/a.html"),
        osa1b: resolve(__dirname, "osa1/b.html"),
        osa1c: resolve(__dirname, "osa1/c.html"),
        osa1d: resolve(__dirname, "osa1/d.html"),
        osa2a: resolve(__dirname, "osa2/a.html"),
        osa2b: resolve(__dirname, "osa2/b.html"),
        osa2c: resolve(__dirname, "osa2/c.html"),
        osa2d: resolve(__dirname, "osa2/d.html"),
        osa2e: resolve(__dirname, "osa2/e.html"),
      },
    },
  },
});
