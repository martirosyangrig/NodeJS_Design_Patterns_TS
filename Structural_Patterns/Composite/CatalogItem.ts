class CatalogItem {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    get total() {
        return this.price;
    }

    print() {
        console.log(`${this.name} $${this.price} `);
    }
}

export default CatalogItem;
