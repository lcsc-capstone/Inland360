import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  title: string;
  description: string;
  price: string;
  phone: string;
  url: string;
  location: string;
  displayTime: string;
  sortTime: string;
}

const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  //Create New Item
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {2
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }
  //Read Items

  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  //Update Items
  updateItems(item: Item) {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems: Item[] = [];

      for (let i of items) {
        if (i.title === item.title) {
          newItems.push(item);
        } else {
        newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItems);
    });
  }
  //Update Items
  deleteItems(item: Item): Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: Item[] = [];

      for (let i of items) {
        if (i.title === item.title) {
          toKeep.push(item);
        } 
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
