import path from "path";
import FS_Proxy from "./FS_Proxy";
import { readFile as readFileCallback } from "fs";

const fs_proxy = new FS_Proxy(readFileCallback);

const mdFile = path.join(__dirname, "Read.md");

const result = (error: Error | null, contents?: string) => {
  if (error) {
    console.log("\x07");
    console.error(error);
    process.exit(0);
  }

  console.log("reading file...");
  console.log(contents);
};

fs_proxy.readFile(mdFile, "utf-8", result);
