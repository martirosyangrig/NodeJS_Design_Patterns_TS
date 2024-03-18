import { unlinkSync, writeFile } from "fs";
import path from "path";

class ExitCommand {
    get name() {
        return "exit.... bye!";
    }

    execute() {
        process.exit(0);
    }
}

class CreateCommand {
    public fileName: string;
    public body: string;
    public fullPath: string;

    constructor(fileName: string, text: string) {
        this.fileName = fileName;
        this.body = text;
        this.fullPath = path.join(__dirname, fileName);
    }

    get name() {
        return `create ${this.fileName}`;
    }

    execute() {
        writeFile(this.fullPath, this.body, (f) => f);
    }
}

class DeleteCommand {
    public fileName: string;
    public fullPath: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.fullPath = path.join(__dirname, fileName);
    }

    get name() {
        return `delete ${this.fileName}`;
    }

    execute() {
        try {
            unlinkSync(this.fullPath);
            console.log(`File ${this.fileName} deleted successfully.`);
        } catch (err: any) {
            console.error(
                `Error deleting file ${this.fileName}: ${err.message}`
            );
        }
    }
}

export { ExitCommand, CreateCommand, DeleteCommand };
