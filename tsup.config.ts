import { defineConfig } from "tsup";
export default defineConfig([
  // ESM 빌드
  {
    entry: ["./index.ts"],
    format: ["esm"],
    outDir: "esm",
    dts: true,
    clean: true,
    minify: true,
    skipNodeModulesBundle: true,
    treeshake: true,
    tsconfig: "tsconfig.json",
  },
  // CJS 빌드
  {
    entry: ["./index.ts"],
    format: ["cjs"],
    outDir: "dist",
    outExtension: () => ({ js: ".cjs" }),
    dts: true,
    clean: true,
    minify: true,
    skipNodeModulesBundle: true,
    treeshake: true,
    tsconfig: "tsconfig.json",
  },
]);
