import * as fs from "node:fs/promises";

async function main() {
  const content = await fs.readFile(`./fuse/poems.json`);
  const poems = JSON.parse(content.toString());
  console.log(poems.length);
  console.log(poems[0]);
}

main();
