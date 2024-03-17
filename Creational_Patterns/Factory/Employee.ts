import Shopper from "./Shopper";

class Employee extends Shopper {
    public employer: string;
    public employed: boolean;

    constructor(name: string, money = 0, employer = "") {
        super(name, money);
        this.employer = employer;
        this.employed = true;
    }

    payDay(money = 0) {
        this.money += money;
    }
}

export default Employee;
