import type { StorybookConfig } from "@storybook/react-vite";
// types

import path from "path";
import { type UserConfig, mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

import { compilerOptions } from "../tsconfig.json";
// Typescript Config files

const pathsToModuleNameMapper = (
  paths: Record<string, string[]>,
): Record<string, string> =>
  Object.entries(paths).reduce(
    (previous, [alias, [p]]) => ({
      ...previous,
      [alias.replace("/*", "")]: path.resolve(
        process.cwd(),
        p.replace("/*", ""),
      ),
    }),
    {},
  );

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  features: {},
  staticDirs: ["../public"],

  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      plugins: [svgr()],
      resolve: {
        ...config.resolve,
        alias: pathsToModuleNameMapper(compilerOptions.paths),
      },
    });
  },

  docs: {
    autodocs: true,
  },
};

export default config;
