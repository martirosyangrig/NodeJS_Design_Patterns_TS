import LogStrategy from "./LogStrategy";
import config from "./config.json";

interface ILogs {
    message: string;
    timestamp: string;
}

class Logger {
    public logs: ILogs[];
    public strategy:
        | LogStrategy
        | ((timestamp: string, message: string) => void);

    constructor(strategy: keyof typeof LogStrategy = "toConsole") {
        this.logs = [];
        this.strategy = LogStrategy[strategy];
    }

    get count() {
        return this.logs.length;
    }

    changeStrategy(newStrategy: keyof typeof LogStrategy) {
        this.strategy = LogStrategy[newStrategy];
    }

    log(message: string) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        if (typeof this.strategy === "function") {
            (this.strategy as (timestamp: string, message: string) => void)(
                timestamp,
                message
            );
        }
    }
}

const logger = new Logger(config.logs.strategy as keyof typeof LogStrategy);

export default logger;
