import Employee from "./Employee";
import Shopper from "./Shopper";
import userFactory from "./userFactory";

const alex = userFactory("Alex Banks", 100) as Shopper;
const eve = userFactory(
  "Eve Porcello",
  100,
  "employee",
  "This and That"
) as Employee;

eve.payDay(500);

console.log(alex.toString());
console.log(eve.toString());
