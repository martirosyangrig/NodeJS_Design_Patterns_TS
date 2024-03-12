import logger from "./Logger";

interface IInventory {
  item: string;
  qty: number;
  price: number;
}

class Store {
  public name: string;
  public inventory: IInventory[];

  constructor(name: string, inventory: IInventory[] = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
  }
}

export default Store;
