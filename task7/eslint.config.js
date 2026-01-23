// eslint.config.js
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  prettierPlugin,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "warn",
      "prettier/prettier": "error",
    },
    ignores: ["node_modules/", "coverage/", "dist/", "build/", "*.min.js"],
  },
];
