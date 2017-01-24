import { Ingridient } from './../ingridient';

export class ShoppingListService {
  private items: Ingridient[] = [];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: Ingridient[]){
    Array.prototype.push.apply(this.items, items);
  }

}
