import Shopper from "./Shopper";
import Employee from "./Employee";

const userFactory = (
    name: string,
    money: number = 0,
    type?: string,
    employer?: string
): Employee | Shopper => {
    if (type === "employee") {
        return new Employee(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
};

export default userFactory;
