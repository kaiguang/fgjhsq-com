// One-time script to move the markdown files in ../poems to ../new-poems with new naming rules.

import * as fs from "node:fs/promises";

async function main() {
  await fs.mkdir("../new-poems", { recursive: true });
  const dirs = await fs.readdir("../poems/");
  for (const dir of dirs) {
    const files = await fs.readdir(`../poems/${dir}/`);
    for (const file of files) {
      const src = `../poems/${dir}/${file}`;
      const dest = `../new-poems/${dir}${file === "index.md" ? ".md" : `-${file}`}`;
      await fs.copyFile(src, dest);
    }
  }
}

main();
