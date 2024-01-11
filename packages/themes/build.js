import esbuild from "esbuild";
import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includres("--dev");
const minify = !dev;

const watch = process.argv.includes("--watch");

const external = Object.keys({
  // dependency는 번들링될 필요 없음
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: "dist",
  target: "es2019",
  watch, // 코드 변경 시 바로 빌드
  external, // 번들링 제외
};

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
  // commonjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: { ".js": ".cjs" },
  }),
]).catch(() => {
  console.error("Build failed");
  process.exit(1);
});
