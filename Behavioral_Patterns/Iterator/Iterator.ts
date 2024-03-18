class Iterator<T> {
    private index: number;
    private items: T[];

    constructor(items: T[] = []) {
        this.index = 0;
        this.items = items;
    }

    first(): T | undefined {
        return this.items[0];
    }

    last(): T | undefined {
        return this.items[this.items.length - 1];
    }

    hasNext(): boolean {
        return this.index < this.items.length - 1;
    }

    current(): T | undefined {
        return this.items[this.index];
    }

    next(): T | undefined {
        if (this.hasNext()) {
            this.index += 1;
        }
        return this.current();
    }

    prev(): T | undefined {
        if (this.index !== 0) {
            this.index -= 1;
        }
        return this.current();
    }
}

export default Iterator;
