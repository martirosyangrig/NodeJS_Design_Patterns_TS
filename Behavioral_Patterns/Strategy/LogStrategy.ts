import { appendFile } from "fs";
import path from "path";

class LogStrategy {
    static noDate(timestamp: string, message: string) {
        console.log(message);
    }

    static toFile(timestamp: string, message: string) {
        var fileName = path.join(__dirname, "logs.txt");
        appendFile(fileName, `${timestamp} - ${message} \n`, (error) => {
            if (error) {
                console.log("Error writing to file");
                console.error(error);
            }
        });
    }

    static toConsole(timestamp: string, message: string) {
        console.log(`${timestamp} - ${message}`);
    }

    static none() {}
}

export default LogStrategy;
