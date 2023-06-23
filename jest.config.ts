import type { Config } from "jest";
// types

import { compilerOptions } from "./tsconfig.json";
// Typescript Config files

const pathsToModuleNameMapper = (
  paths: Record<string, string[]>,
  options: {
    prefix: string;
  }
): Record<string, string> =>
  Object.entries(paths).reduce(
    (previous, [alias, [path]]) => ({
      ...previous,
      [`^${alias}`.replace("*", "(.*)")]: `${options.prefix}/${path}`.replace(
        "*",
        "$1"
      ),
    }),
    {}
  );

const config: Config = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.svg$": "<rootDir>/config/svgJestTransformer.js",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testMatch: [
    "<rootDir>/**/*.test.ts",
    "<rootDir>/**/*.test.tsx",
    "<rootDir>/**/*.spec.ts",
    "<rootDir>/**/*.spec.tsx",
  ],
  testEnvironment: "jsdom",
  modulePaths: [],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
};

export default config;
