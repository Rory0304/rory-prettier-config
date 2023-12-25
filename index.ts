import type { PluginConfig as PrettierPluginSortConfig } from "@trivago/prettier-plugin-sort-imports";
import type { Options as PrettierOptions } from "prettier";

interface Options extends PrettierOptions, PrettierPluginSortConfig {}

const options: Options = {
  // ref: https://prettier.io/docs/en/options.html#print-width
  // Specify the line length that the printer will wrap on.
  printWidth: 80,

  // ref: https://prettier.io/docs/en/options.html#tab-width
  // Specify the number of spaces per indentation-level.
  tabWidth: 2,

  // ref: https://prettier.io/docs/en/options.html#tab-width
  // Include parentheses around a sole arrow function parameter.
  // "avoid" - Omit parens when possible. Example: x => x
  arrowParens: "avoid",

  // ref: https://prettier.io/docs/en/options.html#semicolons
  // Print semicolons at the ends of statements.
  semi: true,

  // ref: https://prettier.io/docs/en/options.html#quotes
  // Use single quotes instead of double quotes.
  singleQuote: true,

  // ref: https://prettier.io/docs/en/options.html#bracket-line
  // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  bracketSameLine: false,

  // ref: https://prettier.io/docs/en/options.html#bracket-spacing
  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  // ref: https://prettier.io/docs/en/options.html#trailing-commas
  // Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
  trailingComma: "es5",

  // ref:https://prettier.io/docs/en/plugins
  plugins: ["@trivago/prettier-plugin-sort-imports"],

  // ref: https://github.com/trivago/prettier-plugin-sort-imports
  importOrder: [
    "^react(.*)",
    "<THIRD_PARTY_MODULES>",
    "^app/(.*)$",
    "^pages/(.*)$",
    "^apis/(.*)$",
    "^hooks/(.*)$",
    "^utils/(.*)$",
    "^components/(.*)$",
    "^styles/(.*)$",
    "^types/(.*)$",
    "^[./]",
  ],

  // ref: https://github.com/trivago/prettier-plugin-sort-imports
  importOrderSeparation: true,

  // ref: https://github.com/trivago/prettier-plugin-sort-imports
  importOrderSortSpecifiers: true,
};

export default options;
