import Mall from "./Mall";
import Shopper from "./Shopper";

type Observer = Shopper | Mall;

class Store {
    public name: string;
    public subscribers: Observer[];

    constructor(name: string) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(observer: Observer) {
        this.subscribers.push(observer);
    }

    sale(discount: number) {
        this.subscribers.forEach((observer) =>
            observer.notify(this.name, discount)
        );
    }
}

export default Store;
