import conductor from "./Conductor";
import { ExitCommand, CreateCommand, DeleteCommand } from "./Commands";
import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("create <fileName> <text> | delete <fileName> | exit");
rl.prompt();

rl.on("line", (input) => {
    const [commandText, ...remaining] = input.split(" ");
    const [fileName, ...fileText] = remaining;
    const text = fileText.join(" ");

    switch (commandText) {
        case "exit":
            conductor.run(new ExitCommand());
            break;

        case "create":
            conductor.run(new CreateCommand(fileName, text));
            break;

        case "delete":
            conductor.run(new DeleteCommand(fileName));
            break;

        default:
            console.log(`${commandText} command not found!`);
    }
    rl.prompt();
    console.log("create <fileName> <text> | delete <fileName> | exit");
});
