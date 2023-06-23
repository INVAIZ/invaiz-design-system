import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

import { compilerOptions } from "./tsconfig.json";
// Typescript Config files

const pathsToModuleNameMapper = (
  paths: Record<string, string[]>
): { find: string; replacement: string }[] =>
  Object.entries(paths).map(([alias, [p]]) => ({
    find: alias.replace("/*", ""),
    replacement: path.resolve(__dirname, p.replace("/*", "")),
  }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr(), dts()],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  root: path.resolve("./"),
  publicDir: path.resolve("./public"),
  server: {
    port: 8080,
    open: true,
    hmr: {
      overlay: true,
    },
    watch: {},
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "./src/modules.tsx",
      name: "IDS",
      // the proper extensions will be added
      fileName: "modules",
      formats: ["es"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "@emotion/styled", "@emotion/react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
    minify: "esbuild",
  },
  resolve: {
    alias: pathsToModuleNameMapper(compilerOptions.paths),
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
});
