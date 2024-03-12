import logger from "./Logger";

class Shoper {
  public name: string;
  public money: number;

  constructor(name: string, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${name} has ${money} in their account.`);
  }
}

export default Shoper;
