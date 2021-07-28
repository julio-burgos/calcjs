import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
