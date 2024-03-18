import { CreateCommand, ExitCommand } from "./Commands";

class Conductor {
    run(command: ExitCommand | CreateCommand) {
        console.log(`Executing command: ${command.name}`);
        command.execute();
    }
}

const conductor = new Conductor();

export default conductor;
