import * as fs from "node:fs/promises";

async function copyImages() {
  const files = await fs.readdir(`./poems/`);
  const images = files.filter((file) => file.endsWith(".jpg"));
  for (const image of images) {
    await fs.copyFile(`./poems/${image}`, `../next/public/${image}`);
  }
}

async function copyFuse() {
  const files = await fs.readdir(`./fuse/`);
  for (const file of files) {
    await fs.copyFile(`./fuse/${file}`, `../next/public/${file}`);
  }
}

copyImages();
copyFuse();
