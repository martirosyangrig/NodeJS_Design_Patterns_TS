class InventoryItem {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${this.name} costs ${this.price}`);
    }
}

class GoldenInventoryItem {
    public name: string;
    public price: number;

    constructor(baseItem: InventoryItem | DiamondInventoryItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }
}

class DiamondInventoryItem {
    public name: string;
    public price: number;
    public cutsGlass: boolean;

    constructor(baseItem: InventoryItem | GoldenInventoryItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
        this.cutsGlass = true;
    }

    print() {
        console.log(`${this.name} costs a lot of money...`);
    }
}

export { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };
