interface ISales {
    storeName: string;
    discount: number;
}

class Mall {
    public sales: ISales[];

    constructor() {
        this.sales = [];
    }

    notify(storeName: string, discount: number) {
        this.sales.push({ storeName, discount });
    }
}

export default Mall;
