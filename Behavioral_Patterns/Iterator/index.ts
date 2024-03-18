import { Writable } from "stream";
import InventoryItem from "./InventoryItem";
import Iterator from "./Iterator";
import readline from "readline";

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("Press any direction key to see Items...");

const inventory = new Iterator<InventoryItem>([
    new InventoryItem("Poles", 9.99),
    new InventoryItem("Skis", 799.99),
    new InventoryItem("Boots", 799.99),
    new InventoryItem("Burgers", 5.99),
    new InventoryItem("Fries", 2.99),
    new InventoryItem("Shake", 4.99),
    new InventoryItem("Jeans", 59.99),
    new InventoryItem("Shoes", 39.99),
]);

process.stdin.on("keypress", (_, key) => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);

    switch (key.name) {
        case "right":
            inventory.next()?.writeLn();
            break;
        case "left":
            inventory.prev()?.writeLn();
            break;
        case "down":
            inventory.last()?.writeLn();
            break;
        case "up":
            inventory.first()?.writeLn();
            break;
        case "c":
            if (key.ctrl) {
                process.exit();
            }
    }
});
