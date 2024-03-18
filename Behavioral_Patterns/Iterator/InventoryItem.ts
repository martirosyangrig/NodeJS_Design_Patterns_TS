class InventoryItem {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    writeLn() {
        process.stdout.write(`${this.name}: $${this.price}`);
    }
}

export default InventoryItem;
