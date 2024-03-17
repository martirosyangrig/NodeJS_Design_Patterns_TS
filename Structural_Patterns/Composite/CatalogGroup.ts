import CatalogItem from "./CatalogItem";

type CompositeElement = CatalogGroup | CatalogItem;

class CatalogGroup {
    public name: string;
    public composites: Array<CompositeElement>;

    constructor(name: string, composites: Array<CompositeElement> = []) {
        this.name = name;
        this.composites = composites;
    }

    get total(): number {
        return this.composites.reduce(
            (total, nextItem) => total + nextItem.total,
            0
        );
    }

    print() {
        console.log(`\n${this.name.toUpperCase()}`);
        this.composites.forEach((item) => item.print());
    }
}

export default CatalogGroup;
