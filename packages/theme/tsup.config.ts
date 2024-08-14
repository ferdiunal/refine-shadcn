import path from "node:path";
import { defineConfig } from "tsup";

export default defineConfig((options) => [
    {
        entry: [path.resolve("src/index.ts")],
        outDir: path.resolve("dist"),
        bundle: true,
        dts: true,
        platform: "browser",
        format: ["cjs", "esm"],
        target: "es2020",
        esbuildOptions: (options) => ({
            ...options,
            charset: "utf8",
            legalComments: "none",
        }),
        keepNames: true,
        splitting: false,
        minifyWhitespace: !options.watch,
        minifyIdentifiers: !options.watch,
        minifySyntax: !options.watch,
        sourcemap: !options.watch ? "inline" : false,
        minify: !options.watch ? "terser" : false,
        tsconfig: path.resolve("tsconfig.json"),
        external: ["react", "react-dom"],
        loader: {
            ".svg": "dataurl",
        },
        watch: options.watch,
    },
    {
        entry: [path.resolve("src/globals.css")],
        outDir: path.resolve("dist"),
        sourcemap: !options.watch ? "inline" : false,
        minify: !options.watch,
        watch: options.watch,
    },
]);
