interface IBuilder {
    name: string;
    isEmployee: boolean;
    isManager: boolean;
    hours: number;
    money: number;
    shoppingList: string[];
}

class Person {
    public name: string;
    public isEmployee: boolean;
    public isManager: boolean;
    public hours: number;
    public money: number;
    public shoppingList: string[];

    constructor(builder: IBuilder) {
        this.name = builder.name;
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 0;
        this.money = builder.money || 0;
        this.shoppingList = builder.shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

export default Person;
