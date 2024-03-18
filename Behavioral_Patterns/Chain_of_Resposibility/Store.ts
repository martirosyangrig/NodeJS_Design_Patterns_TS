import Storages from "./Storage";

export interface IInventoryItem {
    name: string;
    qty: number;
}

interface IInventory {
    floor: IInventoryItem[];
    backroom: IInventoryItem[];
    localStore: IInventoryItem[];
    warehouse: IInventoryItem[];
}

class Store {
    public name: string;
    public storage: Storages;

    constructor(name: string, inventory: IInventory) {
        this.name = name;

        const floor = new Storages("store floor", inventory.floor);
        const backroom = new Storages("store backroom", inventory.backroom);
        const localStore = new Storages(
            "nearby store",
            inventory.localStore,
            1
        );
        const warehouse = new Storages("warehouse", inventory.warehouse, 5);

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;
    }

    find(itemName: string) {
        return this.storage.find(itemName);
    }
}

export default Store;
