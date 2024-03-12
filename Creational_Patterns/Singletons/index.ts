import logger from "./Logger";
import Shopper from "./Shopper";
import Store from "./Store";

logger.log("Starting app...");

const alex = new Shopper("alex", 500);
const ski_shop = new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750,
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5,
  },
]);

logger.log("Finished config...");

console.log(`${logger.count}, logs total`);
logger.logs.map((log) => console.log(`   ${log.msg}`));
