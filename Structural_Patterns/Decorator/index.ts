import Shopper from "./Shopper";
import {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem,
} from "./InventoryItem";

const alex = new Shopper("Alex", 4000);

const walkman = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

const goldNecklace = new GoldenInventoryItem(necklace);
const diamondGoldNecklace = new DiamondInventoryItem(goldNecklace);

const diamondWalkman = new DiamondInventoryItem(walkman);

alex.purchase(diamondGoldNecklace);
alex.purchase(diamondWalkman);

alex.printStatus();

diamondWalkman.print();
