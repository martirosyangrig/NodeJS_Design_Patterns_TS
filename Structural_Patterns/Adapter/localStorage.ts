import { existsSync, readFileSync, unlink, writeFile } from "fs";

class LocalStorage {
  public items: { [key: string]: unknown };

  constructor() {
    if (existsSync("localStorageFILE.json")) {
      console.log("Loading items from localStorageFILE.json");
      const txt = readFileSync("localStorageFILE.json", "utf-8");
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key: string) {
    return this.items[key];
  }

  setItem(key: string, value: unknown) {
    this.items[key] = value;
    const jsonContent = JSON.stringify(this.items);
    writeFile("localStorageFILE.json", jsonContent, (error) => {
      if (error) console.error(error);
    });
  }

  clear() {
    this.items = {};
    unlink("localStorageFILE.json", () => {
      console.log("LocalStorage file removed");
    });
  }
}
const localStorage = new LocalStorage();

export default localStorage;
