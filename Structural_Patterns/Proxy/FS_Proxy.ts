import { readFile as readFileCallback } from "fs";

// Proxy should have same interface as the orginal one but here only implimented readFile
class FS_Proxy {
  private fs: typeof readFileCallback;

  constructor(fs_subject: typeof readFileCallback) {
    this.fs = fs_subject;
  }

  readFile(
    filePath: string,
    format: BufferEncoding,
    callback: (error: Error | null, contents?: string) => void
  ) {
    if (!filePath.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files.`));
    }

    this.fs(
      filePath,
      { encoding: format },
      (error: NodeJS.ErrnoException | null, contents: string) => {
        if (error) {
          console.error(error);
          return callback(error);
        }

        return callback(null, contents);
      }
    );
  }
}

export default FS_Proxy;
