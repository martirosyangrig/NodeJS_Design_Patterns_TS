import Person from "./Person";

class PersonBuilder {
  public name: string;
  public isEmployee: boolean;
  public isManager: boolean;
  public hours: number;
  public money: number;
  public shoppingList: string[];

  constructor(name: string) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }

  withMoney(money: number) {
    this.money = money;
    return this;
  }

  withList(list: string[] = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}

export default PersonBuilder;
