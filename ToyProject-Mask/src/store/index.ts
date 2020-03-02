import { TempStore } from "./TempStore";

export class Store {
  tempStore: TempStore;

  constructor() {
    this.tempStore = new TempStore();
  }
}

export const rootStore = new Store();
