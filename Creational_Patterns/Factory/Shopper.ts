import Person from "./Person";

class Shopper extends Person {
    public money: number;
    public employed: boolean;

    constructor(name: string, money = 0) {
        super(name);
        this.money = money;
        this.employed = false;
    }
}

export default Shopper;
