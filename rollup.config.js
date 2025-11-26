import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import dts from "rollup-plugin-dts"
import postcss from "rollup-plugin-postcss"
import svgr from "@svgr/rollup"

// List all external dependencies to prevent them from being bundled
const external = [
  "react",
  "react-dom",
  /^@radix-ui\/.*/, // Exclude all Radix packages
]

const config = [
  // 1. Main Bundle (CommonJS and ES Modules)
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    external: external,
    plugins: [
      // Handles CSS modules
      postcss({
        extract: "index.css",
        minimize: true,
      }),
      // Finds third-party modules in node_modules
      resolve(),
      // Converts CommonJS dependencies to ES Modules
      commonjs(),
      // Handles SVGs
      svgr({ icon: true }),
      // Compiles TypeScript/JSX
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },

  // 2. TypeScript Declaration Files (.d.ts)
  {
    input: "src/index.ts",
    output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: external,
  },
]

export default config
