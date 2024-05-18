import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tsConfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: ".",
  plugins: [react(), tsConfigPaths(), ViteImageOptimizer()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {},
  },
  test: {
    globals: true,
    css: false,
    environment: "happy-dom",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    setupFiles: ["src/testing/setup-tests.ts"],
  },
});
