import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/01-kurssitiedot",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        osa1a: resolve(__dirname, "osa1/a.html"),
        osa1b: resolve(__dirname, "osa1/b.html"),
        osa1c: resolve(__dirname, "osa1/c.html"),
        osa1d: resolve(__dirname, "osa1/d.html"),
      },
    },
  },
});
