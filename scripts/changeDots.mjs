#!node

// Change the date from 2023.1.1 to 2023-01-01, change the word.word to word·word
// How to use:
// ./changeDots.mjs tmp.txt

import * as fs from "node:fs/promises";
import path from "node:path";
import { argv } from "node:process";

async function main() {
  const fileName = argv[2];
  const filePath = path.resolve(fileName);
  const fileString = await fs.readFile(filePath, { encoding: "utf8" });
  const lines = fileString.split("\n");
  const updatedLines = lines.map((line) => {
    let updatedLine = line;
    // 少年游.董其昌 to 少年游·董其昌
    updatedLine = updatedLine.replace(/(^[^.\s]+)\.([^.\s]+$)/, "$1·$2");
    // 2023.1.1 to 2023-01-01
    updatedLine = updatedLine.replace(/(^\d{4})\.(\d{1})\.(\d{1}$)/, "$1-0$2-0$3");
    // 2023.11.11 to 2023-11-11
    updatedLine = updatedLine.replace(/(^\d{4})\.(\d{2})\.(\d{2}$)/, "$1-$2-$3");
    // 2023.1.11 to 2023-01-11
    updatedLine = updatedLine.replace(/(^\d{4})\.(\d{1})\.(\d{2}$)/, "$1-0$2-$3");
    // 2023.11.1 to 2023-11-01
    updatedLine = updatedLine.replace(/(^\d{4})\.(\d{2})\.(\d{1}$)/, "$1-$2-0$3");

    return updatedLine;
  });
  await fs.writeFile(filePath, updatedLines.join("\n"));
}

main();
