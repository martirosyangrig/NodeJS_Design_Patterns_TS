interface ILogs {
    timestamp: string;
    msg: string;
}

class Logger {
    public logs: ILogs[];

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(msg: string) {
        const timestamp = new Date().toISOString();
        this.logs.push({ msg, timestamp });
        console.log(`${timestamp} - ${msg}`);
    }
}

// Also we can create Singleton instance and in every file create new instance from this

// const logger = new Singleton().getInstance()

// class Singleton {
//   private static instance: Logger;

//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Logger();
//     }
//   }
//   getInstance(): Logger {
//     return Singleton.instance;
//   }
// }

// export default Singleton;

// but in Node js Its better create instance end export using the other places
const logger = new Logger(); // creating one instance and using the other places;

export default logger;
