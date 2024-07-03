import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import yaml from "yaml";
import * as fs from "node:fs/promises";
import Fuse from "fuse.js";

type Doc = {
  title: string;
  author: string;
  date: string;
  poem: string;
  body: string;
};

async function main() {
  const files = await fs.readdir(`./poems/`);
  const docs: Doc[] = [];
  for (const file of files) {
    const exts = file.split(".");
    const ext = exts[exts.length - 1];
    if (ext !== "md") continue;
    const content = await fs.readFile(`./poems/${file}`, { encoding: "utf-8" });
    const result = await unified()
      .use(remarkParse)
      .use(remarkFrontmatter, "yaml")
      .use(remarkExtractFrontmatter, { yaml: yaml.parse })
      .use(remarkStringify)
      .process(content);
    const frontmatter = result.data;
    const body = result.value.toString().split("---\n\n")[1];
    const doc = { ...frontmatter, body };
    docs.push(doc as Doc);
  }

  const poemsFile = `./fuse/poems.json`;
  fs.writeFile(poemsFile, JSON.stringify(docs));
  console.log(`Parse poems into JSON (${poemsFile}) done.`);

  const index = Fuse.createIndex(["title", "poem", "body"], docs);
  const indexFile = `./fuse/index.json`;
  fs.writeFile(indexFile, JSON.stringify(index.toJSON()));
  console.log(`Fuse index (${indexFile}) done.`);
}

main();
