import js from "@eslint/js";
import ts from "typescript-eslint";

import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";

import eslintConfigPrettier from "eslint-config-prettier";

export default ts.config({
  languageOptions: {
    ecmaVersion: 2020,
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: { jsx: true },
      sourceType: "module",
    },
  },
  settings: {
    react: { version: "19.0.0" },
  },
  plugins: {
    prettier: eslintPluginPrettier,
    "react-hooks": eslintPluginReactHooks,
    "react-refresh": eslintPluginReactRefresh,
    "jest": eslintPluginJest,
    "testing-library": eslintPluginTestingLibrary,
  },
  extends: [
    js.configs.recommended,
    ...ts.configs.recommended,
  ],
  rules: {
    ...eslintPluginReactHooks.configs.recommended.rules,
    ...eslintPluginTestingLibrary.configs.react.rules,
    ...eslintPluginJest.configs.recommended.rules,
    ...eslintConfigPrettier.rules,
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-undef": "off",
    "no-extra-boolean-cast": "off",
    "no-case-declarations": "off",
    "no-console": ["warn", { allow: ["error", "info", "debug", "warn"] }],
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  files: ["src/**/*.ts", "src/**/*.tsx"],
  ignores: [
    "node_modules",
    "dist",
    "build",
    "@types",
    "**/__tests__/**",
    "**/tests/**",
  ],
});
