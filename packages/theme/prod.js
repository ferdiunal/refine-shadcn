const { execSync } = require("node:child_process");
const fs = require("node:fs/promises");
const { setTimeout } = require("node:timers/promises");

(async () => {
    console.info("Publishing some files...");
    await setTimeout(250);
    const files = ["README.md", "LICENSE"];

    await Promise.allSettled(
        files.map(async (file) => {
            try {
                fs.copyFile("../../" + file, `dist/${file}`);
            } catch (error) {
                console.error(error);
            }
        }),
    );

    console.info("Transpiling...");
    const _package = await fs.readFile("package.json", "utf-8");
    const packageJson = JSON.parse(_package);
    packageJson.main = "./index.cjs";
    packageJson.types = "./index.d.ts";
    packageJson.scripts = undefined;
    packageJson.module = "./index.js";
    packageJson.types = "./index.d.ts";
    packageJson.typings = "./index.d.ts";
    packageJson.bin = {
        w3n: "./cli.js",
    };
    packageJson.files = ["index.js", "index.cjs", "index.d.ts"];
    await fs.writeFile(
        "dist/package.json",
        JSON.stringify(packageJson, null, 2),
    );

    console.info("Cleaning up...");
    await setTimeout(250);
    await execSync("rm -rf dist/*.d.mts");
})();
