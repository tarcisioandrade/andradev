// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  // This plugin's options
  importOrder: [
    "^react$",
    "<BUILT_IN_MODULES>",
    "^[.]",
    "<THIRD_PARTY_MODULES>",
    "",
    ".css$",
  ],

  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],

  importOrderTypeScriptVersion: "5.0.0",
  // Since prettier 3.0, manually specifying plugins is required
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  semi: true,
};
