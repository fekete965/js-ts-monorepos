import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "prefer-const": "error",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
