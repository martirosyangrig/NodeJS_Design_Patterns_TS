import { IInventoryItem } from "./Store";

interface ExpectedItem {
    name: string;
    qty: number;
    location: string;
    deliveryTime: string;
}

type FoundItem = string | ExpectedItem;

class Storages {
    public name: string;
    public inventory: IInventoryItem[];
    public deliveryTime: number;
    public next: Storages | null;

    constructor(
        name: string,
        inventory: IInventoryItem[] = [],
        deliveryTime = 0
    ) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
        this.next = null;
    }

    lookInLocalInventory(itemName: string) {
        const index = this.inventory
            .map((item: any) => item.name)
            .indexOf(itemName);
        return this.inventory[index];
    }

    setNext(storage: Storages) {
        this.next = storage;
    }

    find(itemName: string): FoundItem {
        const found = this.lookInLocalInventory(itemName);

        if (found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime:
                    this.deliveryTime === 0
                        ? "now"
                        : `${this.deliveryTime} day(s)`,
            };
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return `we do not carry ${itemName}`;
        }
    }
}

export default Storages;
