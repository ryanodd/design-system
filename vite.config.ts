import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import svgr from "vite-plugin-svgr"
import { resolve } from "path"

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        dts({
            rollupTypes: true,
            tsconfigPath: "./tsconfig.json",
            outDir: "dist/esm",
        }),
    ],
    build: {
        outDir: "dist",
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "DesignSystem",
            formats: ["es", "cjs"],
            fileName: (format) => `${format === "es" ? "esm" : format}/index.js`,
        },
        cssCodeSplit: false,
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
        },
    },
})
