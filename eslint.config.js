// @ts-nocheck
import eslint from "@eslint/js"
import react from "eslint-plugin-react/configs/recommended.js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [
      "dist/*",
      // Temporary compiled files
      "**/*.ts.build-*.mjs",
      // JS files at the root of the project
      "*.js",
      "*.cjs",
      "*.mjs",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-namespace": 0,
      "semi": ["error", "never"],
      "semi-spacing": ["error", { "before": false, "after": true }],
      "no-extra-semi": "error",
      "quotes": ["error", "single", { "avoidEscape": true }],
      "jsx-quotes": ["error", "prefer-single"],
      "comma-dangle": ["error", "never"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "arrow-parens": ["error", "always"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "eol-last": ["error", "always"],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "no-trailing-spaces": "error",
      "react/react-in-jsx-scope": "off"
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react,
    languageOptions: {
      ...react.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
)