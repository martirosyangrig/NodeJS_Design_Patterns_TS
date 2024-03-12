class Shopper {
  private name: string;
  private shoppingList: string[];

  constructor(name = "unnamed") {
    this.name = name;
    this.shoppingList = [];
  }

  set shopName(name: string) {
    this.name = name;
  }

  get shopName() {
    return this.name;
  }

  get list() {
    return this.shoppingList;
  }

  addItemToList(item: string) {
    this.shoppingList.push(item);
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const clone = Object.create(proto);
    clone.name = this.name;
    clone.shoppingList = [...this.shoppingList];

    return clone;
  }
}

export default Shopper;
