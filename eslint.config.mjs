// eslint.config.mjs
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "dist/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
  "@next/next/no-html-link-for-pages": "off",
  "no-undef": "off",          // disable 'window/document not defined'
  "no-unused-vars": "off",    // disable unused imports check
},

  },
];
