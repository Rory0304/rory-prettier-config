import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["./index.ts"],
  format: ["cjs", "esm"],
  minify: true,
  skipNodeModulesBundle: true,
  sourcemap: false,
  tsconfig: "tsconfig.json",
  keepNames: true,
  treeshake: true,
  bundle: true,
  splitting: false,
});
