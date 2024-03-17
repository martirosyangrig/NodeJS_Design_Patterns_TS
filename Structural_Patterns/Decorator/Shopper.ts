import {
    DiamondInventoryItem,
    GoldenInventoryItem,
    InventoryItem,
} from "./InventoryItem";

type Item = InventoryItem | GoldenInventoryItem | DiamondInventoryItem;

class Shopper {
    public name: string;
    public account: number;
    public items: Item[];

    constructor(name: string, account: number = 0) {
        this.name = name;
        this.account = account;
        this.items = [];
    }

    purchase(item: Item) {
        if (item.price > this.account) {
            console.log(`Cannot afford ${item.name}`);
        } else {
            console.log(`Purchasing item ${item.name}`);
            this.account -= item.price;
            this.items.push(item);
        }
    }

    printStatus() {
        console.log(`${this.name} has purchased ${this.items.length} items:`);
        this.items.forEach((item: any) => {
            console.log(`   * ${item.name} - ${item.price}`);
        });
        console.log(`${this.name} has $${this.account.toFixed(2)} remaining.`);
    }
}

export default Shopper;
