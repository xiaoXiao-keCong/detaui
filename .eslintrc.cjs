/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },

  overrides: [
    {
      files: ["./src/**/*.tsx", "./src/**/*.vue", "./src/**/*.ts"],
      rules: {
        indent: ["warn", "tab", { VariableDeclarator: 2 }],
        quotes: ["warn", "single"],
        semi: ["warn", "never"],
        "max-classes-per-file": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/interface-name-prefix": ["off"],
      },
    },
  ],
}
