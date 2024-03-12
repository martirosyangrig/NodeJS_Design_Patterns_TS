import PersonBuilder from "./PersonBuilder";

const sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
const charles = new PersonBuilder("Charles")
  .withMoney(400)
  .withList(["jeans", "sunglasses"])
  .build();

console.log(sue.toString());
console.log(charles.toString());
